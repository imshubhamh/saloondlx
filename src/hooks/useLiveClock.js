import { useEffect, useState } from "react";

export default function useLiveClock() {
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000 * 15);
    return () => clearInterval(id);
  }, []);

  return time.toLocaleTimeString([], { hour: "numeric", minute: "2-digit", hour12: true }).toLowerCase();
}
