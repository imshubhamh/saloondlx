export default function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-[--c-primary]/8 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[--c-primary] ring-1 ring-inset ring-[--c-primary]/15">
      {children}
    </span>
  );
}
