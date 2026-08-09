export default function Button({ children, variant = "primary", className = "", ...props }) {
  const base =
    "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[--c-accent] active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[--c-primary] text-white shadow-[0_8px_24px_-8px_rgba(220,38,38,0.65)] hover:shadow-[0_12px_28px_-6px_rgba(220,38,38,0.75)] hover:-translate-y-0.5",
    ghost:
      "bg-transparent text-[--c-ink] ring-1 ring-inset ring-[--c-border] hover:ring-[--c-primary]/40 hover:-translate-y-0.5",
    light:
      "bg-white text-[--c-secondary] shadow-[0_8px_24px_-8px_rgba(0,0,0,0.25)] hover:-translate-y-0.5",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
