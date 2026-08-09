import { useState } from "react";
import RadioPlayer from "../components/RadioPlayer.jsx";
import RadioQueue from "../components/RadioQueue.jsx";
import GradientBackground from "../components/GradientBackground.jsx";
import Eyebrow from "../components/Eyebrow.jsx";
import useLiveListeners from "../hooks/useLiveListeners.js";
import { OLD_SONGS, PLAYLIST_LINKS } from "../data/oldSongs.js";

export default function Music() {
  const [index, setIndex] = useState(0);
  const listeners = useLiveListeners(30, 6);

  const goNext = () => setIndex((i) => (i + 1) % OLD_SONGS.length);
  const goPrev = () => setIndex((i) => (i - 1 + OLD_SONGS.length) % OLD_SONGS.length);

  return (
    <section id="music" className="relative overflow-hidden pb-28 pt-40 sm:pt-48">
      <GradientBackground variant="hero" />
      <GradientBackground variant="radioWarm" className="opacity-70" />

      <div className="mx-auto max-w-3xl px-6">
        {/* top bar — mirrors saloon.wtf: live count on the left, playlist links on the right */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-[--c-border] bg-[--c-surface]/80 px-3.5 py-1.5 text-xs font-medium text-[--c-muted] backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="absolute h-2 w-2 animate-ping rounded-full bg-orange-500 opacity-75" />
              <span className="relative h-2 w-2 rounded-full bg-orange-500" />
            </span>
            {listeners} online
          </span>

          <div className="flex items-center gap-3 text-sm font-medium">
            <a
              href={PLAYLIST_LINKS.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--c-muted] transition-colors hover:text-[--c-ink]"
            >
              Spotify
            </a>
            <span className="text-[--c-border]">/</span>
            <a
              href={PLAYLIST_LINKS.ytMusic}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[--c-muted] transition-colors hover:text-[--c-ink]"
            >
              YT Music
            </a>
          </div>
        </div>

        <div className="mt-10 text-center">
          <Eyebrow>SaloonDlx Radio &middot; Old is Gold</Eyebrow>
          <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-[--c-ink] sm:text-5xl">
            The Chair-Side Playlist
          </h1>
          <p className="mx-auto mt-4 max-w-md text-[--c-muted]">
            The same golden-era Bollywood classics playing at the shop right
            now — full songs, streamed live while you wait for your slot.
          </p>
        </div>

        <div className="mt-14 flex flex-col items-center gap-8">
          <RadioPlayer queue={OLD_SONGS} index={index} onNext={goNext} onPrev={goPrev} />
          <RadioQueue tracks={OLD_SONGS} currentIndex={index} onSelect={setIndex} />
        </div>
      </div>
    </section>
  );
}
