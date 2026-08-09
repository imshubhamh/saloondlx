import { Scissors } from "lucide-react";
import { SITE } from "../constants/theme.js";

export default function Logo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[--c-primary] to-[--c-accent] shadow-glow">
        <Scissors className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
      </div> */}
      <span
        className={`font-display text-lg font-semibold tracking-tight ${
          light ? "text-white" : "text-[--c-ink]"
        }`}
      >
        {SITE.name}
      </span>
    </div>
  );
}
