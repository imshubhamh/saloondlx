import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

/**
 * A live "queue position" ticker used inside the dashboard preview mockup —
 * a literal, visible expression of the product's core promise: you stop
 * waiting the moment you book.
 */
export default function QueueWidget({ compact = false }) {
  const [position, setPosition] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setPosition((p) => (p <= 1 ? 3 : p - 1));
    }, 2200);
    return () => clearInterval(id);
  }, []);

  const isYou = position === 1;

  return (
    <div
      className={`relative animate-floaty-slow rounded-2xl border border-[--c-border] bg-[--c-surface]/90 p-5 shadow-soft backdrop-blur-xl ${
        compact ? "w-full" : "w-[280px] sm:w-[300px]"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wider text-[--c-muted]">
          Live Queue
        </span>
        <span className="relative flex h-2 w-2 items-center justify-center">
          <span className="absolute h-2 w-2 animate-ping rounded-full bg-[--c-accent] opacity-75" />
          <span className="relative h-2 w-2 rounded-full bg-[--c-accent]" />
        </span>
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <p className="font-display text-4xl font-bold text-[--c-ink] transition-all duration-500">
            {isYou ? "You're up" : `#${position}`}
          </p>
          <p className="mt-1 text-sm text-[--c-muted]">
            {isYou ? "Chair 2 is ready for you" : "in line at Fade & Faith"}
          </p>
        </div>
        <div className="grid h-11 w-11 place-items-center rounded-full bg-[--c-primary]/10 text-[--c-primary]">
          <Clock className="h-5 w-5" strokeWidth={2.25} />
        </div>
      </div>

      <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[--c-primary]/10">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[--c-primary] to-[--c-accent] transition-all duration-700 ease-out"
          style={{ width: `${((3 - position + 1) / 3) * 100}%` }}
        />
      </div>
    </div>
  );
}
