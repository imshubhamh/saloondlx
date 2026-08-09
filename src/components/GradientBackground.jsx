export default function GradientBackground({ variant = "hero", className = "" }) {
  if (variant === "hero") {
    return <div className={`hero-glow pointer-events-none absolute inset-0 -z-10 ${className}`} />;
  }

  if (variant === "orbs") {
    return (
      <div className={`pointer-events-none absolute inset-0 -z-10 ${className}`}>
        <div className="absolute -right-10 -top-6 h-64 w-64 animate-drift rounded-full bg-[--c-accent]/25 blur-3xl" />
        <div className="absolute -bottom-10 -left-6 h-56 w-56 animate-drift-reverse rounded-full bg-[--c-primary]/25 blur-3xl" />
      </div>
    );
  }

  if (variant === "radioWarm") {
    // Warm red/yellow radial gradient + a subtle retro sunburst, used
    // behind the music player so it reads as its own distinct "on air"
    // zone within the hero rather than blending into the blue booking UI.
    return (
      <div className={`pointer-events-none absolute inset-0 -z-10 overflow-hidden ${className}`}>
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(60% 55% at 50% 30%, rgba(251,146,60,0.35), transparent 65%), radial-gradient(50% 45% at 80% 75%, rgba(239,68,68,0.28), transparent 70%), radial-gradient(45% 40% at 15% 80%, rgba(250,204,21,0.25), transparent 70%)",
          }}
        />
        <svg
          className="absolute inset-0 h-full w-full opacity-[0.12]"
          viewBox="0 0 400 400"
          preserveAspectRatio="xMidYMid slice"
        >
          <g stroke="#F97316" strokeWidth="1.4" fill="none">
            {Array.from({ length: 14 }).map((_, i) => (
              <circle key={i} cx="200" cy="200" r={16 + i * 14} />
            ))}
          </g>
        </svg>
      </div>
    );
  }

  return <div className={`cta-glow pointer-events-none absolute inset-0 -z-10 ${className}`} />;
}
