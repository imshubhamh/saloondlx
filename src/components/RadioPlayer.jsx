import { useEffect, useId, useRef, useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react";
import useYouTubePlayer from "../hooks/useYouTubePlayer.js";
import { artworkFor } from "../data/oldSongs.js";

function formatTime(seconds) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
}

/**
 * Full-length radio player backed by the YouTube IFrame API — the video
 * itself is rendered at 1x1px (audio-only in practice) while this
 * component draws the actual UI: album art, title/artist, seek bar,
 * transport controls. Plays complete songs, not short previews.
 */
export default function RadioPlayer({ queue, index, onNext, onPrev, compact = false }) {
  const containerId = useId().replace(/[:]/g, "");
  const track = queue[index];
  const [hasStarted, setHasStarted] = useState(false);
  const skipGuard = useRef(0);

  const handleError = () => {
    skipGuard.current += 1;
    if (skipGuard.current > queue.length) return; // avoid infinite loops if every track fails
    onNext();
  };

  const { ready, playing, currentTime, duration, muted, loadVideo, play, toggle, seek, toggleMute } =
    useYouTubePlayer(containerId, track?.youtubeId, { onEnded: onNext, onError: handleError });

  // Whenever the active track changes (next/prev/queue click), load it —
  // and keep the radio going if playback had already started.
  useEffect(() => {
    if (!ready || !track) return;
    loadVideo(track.youtubeId, hasStarted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [track?.youtubeId, ready]);

  // A track that actually starts playing means the queue is healthy again —
  // let the error-skip guard reset so a later unrelated failure isn't
  // silently ignored.
  useEffect(() => {
    if (playing) skipGuard.current = 0;
  }, [playing]);

  const handlePlayPause = () => {
    if (!hasStarted) {
      setHasStarted(true);
      play();
      return;
    }
    toggle();
  };

  const onSeek = (e) => {
    const value = Number(e.target.value);
    seek(value);
  };

  if (!track) return null;

  return (
    <div className={`w-full ${compact ? "max-w-xs" : "max-w-sm"}`}>
      {/* YouTube player mounts here — visually invisible, drives real audio */}
      <div id={containerId} className="sr-only h-px w-px overflow-hidden" />

      <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-3xl border border-[--c-border] bg-[--c-surface] shadow-soft">
        <img
          src={artworkFor(track.youtubeId)}
          alt={`${track.title} artwork`}
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div
          className={`pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-[--c-accent]/60 transition-opacity duration-500 ${
            playing ? "opacity-100" : "opacity-0"
          }`}
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white backdrop-blur-sm">
          {track.year}
        </span>
      </div>

      <div className="mt-6 text-center">
        <p className="truncate font-display text-xl font-semibold text-[--c-ink]">{track.title}</p>
        <p className="mt-1 truncate text-sm text-[--c-muted]">
          {track.artist} &middot; {track.movie}
        </p>
      </div>

      <div className="mt-5 flex items-center gap-3 text-xs text-[--c-muted]">
        <span className="w-9 flex-none text-right tabular-nums">{formatTime(currentTime)}</span>
        <input
          type="range"
          min={0}
          max={duration || 1}
          step={0.1}
          value={currentTime}
          onChange={onSeek}
          aria-label="Seek"
          className="h-1.5 w-full flex-1 cursor-pointer appearance-none rounded-full bg-[--c-primary]/15 accent-[--c-primary]"
        />
        <span className="w-9 flex-none tabular-nums">{formatTime(duration)}</span>
      </div>

      <div className="mt-6 flex items-center justify-center gap-6">
        <button
          onClick={onPrev}
          aria-label="Previous track"
          className="grid h-10 w-10 place-items-center rounded-full text-[--c-ink] transition-colors hover:text-[--c-primary]"
        >
          <SkipBack className="h-5 w-5" />
        </button>

        <button
          onClick={handlePlayPause}
          aria-label={playing ? "Pause" : "Play"}
          className="grid h-14 w-14 place-items-center rounded-full bg-[--c-primary] text-white shadow-glow transition-transform hover:-translate-y-0.5 active:scale-95"
        >
          {playing ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
        </button>

        <button
          onClick={onNext}
          aria-label="Next track"
          className="grid h-10 w-10 place-items-center rounded-full text-[--c-ink] transition-colors hover:text-[--c-primary]"
        >
          <SkipForward className="h-5 w-5" />
        </button>

        <button
          onClick={toggleMute}
          aria-label={muted ? "Unmute" : "Mute"}
          className="grid h-10 w-10 place-items-center rounded-full text-[--c-muted] transition-colors hover:text-[--c-ink]"
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
      </div>

      <p className="mt-4 text-center text-xs text-[--c-muted]">
        {hasStarted ? "Playing the full song" : "Tap play to start the radio"}
      </p>
    </div>
  );
}
