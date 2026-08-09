import { useEffect, useId, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import useYouTubePlayer from "../hooks/useYouTubePlayer.js";
import { OLD_SONGS, artworkFor } from "../data/oldSongs.js";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

// Interaction events that count as "the user is here" and unlock sound.
const UNLOCK_EVENTS = ["pointerdown", "keydown", "touchstart", "wheel"];

export default function RadioBar({ className = "" }) {
  const containerId = useId().replace(/[:]/g, "");
  const [index, setIndex] = useState(() => Math.floor(Math.random() * OLD_SONGS.length));
  const track = OLD_SONGS[index];
  const skipGuard = useRef(0);

  const goNext = () => setIndex((i) => (i + 1) % OLD_SONGS.length);
  const goPrev = () => setIndex((i) => (i - 1 + OLD_SONGS.length) % OLD_SONGS.length);

  // A track that can't play (region-locked / embedding disabled / removed)
  // should never leave the radio stuck silent — skip forward automatically.
  const handleError = () => {
    skipGuard.current += 1;
    if (skipGuard.current > OLD_SONGS.length) return; // avoid infinite loops
    goNext();
  };

  const { ready, playing, currentTime, duration, muted, loadVideo, unmute, toggle, toggleMute } =
    useYouTubePlayer(containerId, track.youtubeId, {
      onEnded: goNext,
      onError: handleError,
      autoplayMuted: true,
    });

  useEffect(() => {
    if (!ready) return;
    loadVideo(track.youtubeId, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track.youtubeId, ready]);

  useEffect(() => {
    if (playing) skipGuard.current = 0;
  }, [playing]);

  // Browsers block audio-on autoplay, but allow it muted. The moment the
  // visitor interacts with the page in any way, unmute automatically so
  // the radio effectively "just starts playing" the way it was asked to.
  useEffect(() => {
    if (!ready || !muted) return;

    const unlock = () => {
      unmute();
      UNLOCK_EVENTS.forEach((evt) => window.removeEventListener(evt, unlock));
    };

    UNLOCK_EVENTS.forEach((evt) => window.addEventListener(evt, unlock, { once: true }));
    return () => UNLOCK_EVENTS.forEach((evt) => window.removeEventListener(evt, unlock));
  }, [ready, muted, unmute]);

  const progress = duration ? Math.min(100, (currentTime / duration) * 100) : 0;

  return (
    <div
      className={`flex w-full max-w-2xl items-center gap-4 rounded-full border border-white/10 bg-black/40 p-2.5 pr-5 shadow-2xl backdrop-blur-xl ${className}`}
    >
      <div id={containerId} className="sr-only h-px w-px overflow-hidden" />

      <img
        src={artworkFor(track.youtubeId)}
        alt={`${track.title} artwork`}
        className="h-14 w-14 flex-none rounded-full object-cover ring-2 ring-white/20"
        loading="lazy"
      />

      <div className="min-w-0 flex-1">
        <p className="truncate font-display text-sm font-semibold text-white sm:text-base">{track.title}</p>
        <p className="truncate text-xs text-white/60 sm:text-sm">{track.artist}</p>
        <div className="mt-2 flex items-center gap-2">
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-300 to-orange-500 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="flex-none text-[11px] tabular-nums text-white/50">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
        </div>
      </div>

      <div className="flex flex-none items-center gap-1 sm:gap-2">
        <button
          onClick={goPrev}
          aria-label="Previous track"
          className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:text-white"
        >
          <SkipBack className="h-4 w-4" />
        </button>
        <button
          onClick={toggle}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-11 w-11 place-items-center rounded-full bg-white text-orange-600 transition-transform hover:scale-105 active:scale-95"
        >
          {playing ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
        </button>
        <button
          onClick={goNext}
          aria-label="Next track"
          className="grid h-9 w-9 place-items-center rounded-full text-white/70 transition-colors hover:text-white"
        >
          <SkipForward className="h-4 w-4" />
        </button>
        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className={`grid h-9 w-9 place-items-center rounded-full transition-colors sm:flex ${
            muted ? "animate-pulse text-amber-300" : "text-white/70 hover:text-white"
          }`}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}
