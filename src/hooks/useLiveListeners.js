import { useEffect, useState } from "react";

/**
 * Simulates a live "X online" listener count, drifting gently up/down
 * within a realistic band — same effect as the counter on saloon.wtf.
 * There's no real presence server here, so this is presentational only.
 */
export default function useLiveListeners(base = 30, spread = 6) {
  const [count, setCount] = useState(base);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((c) => {
        const delta = Math.round((Math.random() - 0.5) * 4);
        const next = c + delta;
        return Math.min(base + spread, Math.max(base - spread, next));
      });
    }, 3500);
    return () => clearInterval(id);
  }, [base, spread]);

  return count;
}
