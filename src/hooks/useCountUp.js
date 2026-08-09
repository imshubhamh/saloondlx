import { useEffect, useState } from "react";

/**
 * Eases a number from 0 -> target once `start` becomes true.
 */
export default function useCountUp(target, start, duration = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start) return undefined;

    let rafId;
    let startTime = null;

    const step = (timestamp) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      } else {
        setValue(target);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [start, target, duration]);

  return value;
}
