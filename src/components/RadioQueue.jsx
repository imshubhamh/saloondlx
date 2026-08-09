import { artworkFor } from "../data/oldSongs.js";

export default function RadioQueue({ tracks, currentIndex, onSelect }) {
  if (!tracks.length) return null;

  return (
    <div className="w-full max-w-sm rounded-2xl border border-[--c-border] bg-[--c-surface] p-3">
      <p className="px-2 pb-2 pt-1 text-xs font-semibold uppercase tracking-wider text-[--c-muted]">
        Up Next
      </p>
      <div className="flex max-h-72 flex-col gap-1 overflow-y-auto pr-1">
        {tracks.map((t, i) => {
          const active = i === currentIndex;
          return (
            <button
              key={t.id}
              onClick={() => onSelect(i)}
              className={`flex items-center gap-3 rounded-xl px-2 py-2 text-left transition-colors ${
                active ? "bg-[--c-primary]/10" : "hover:bg-[--c-primary]/5"
              }`}
            >
              <span className="grid h-10 w-10 flex-none place-items-center overflow-hidden rounded-lg bg-[--c-primary]/10">
                <img src={artworkFor(t.youtubeId)} alt="" className="h-full w-full object-cover" loading="lazy" />
              </span>
              <span className="min-w-0 flex-1">
                <span
                  className={`block truncate text-sm font-medium ${
                    active ? "text-[--c-primary]" : "text-[--c-ink]"
                  }`}
                >
                  {t.title}
                </span>
                <span className="block truncate text-xs text-[--c-muted]">
                  {t.artist} &middot; {t.year}
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
