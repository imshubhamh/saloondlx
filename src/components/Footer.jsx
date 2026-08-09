import { Scissors } from "lucide-react";
import { FOOTER_COLUMNS } from "../data/footer.js";

export default function Footer() {
  return (
    <footer className="border-t border-[--c-border] bg-[--c-secondary] text-white/70">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          <div className="col-span-2 sm:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2">
              <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-[--c-primary] to-[--c-accent]">
                <Scissors className="h-[18px] w-[18px] text-white" strokeWidth={2.25} />
              </div>
              <span className="font-display text-lg font-semibold text-white">SaloonDlx</span>
            </div>
            <p className="mt-4 max-w-[220px] text-sm text-white/50">
              Appointment booking built to end the barbershop wait.
            </p>
          </div>

          {FOOTER_COLUMNS.map((col) => (
            <div key={col.title}>
              <p className="text-sm font-semibold text-white">{col.title}</p>
              <ul className="mt-4 flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/40">© 2026 SaloonDlx. All rights reserved.</p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex w-full max-w-sm items-center gap-2 rounded-full bg-white/5 p-1.5 ring-1 ring-inset ring-white/10 sm:w-auto"
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email"
              type="email"
              required
              placeholder="you@email.com"
              className="w-full flex-1 bg-transparent px-3 text-sm text-white placeholder:text-white/35 focus:outline-none"
            />
            <button type="submit" className="flex-none rounded-full bg-white px-4 py-2 text-xs font-semibold text-[--c-secondary]">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
