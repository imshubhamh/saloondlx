import { motion } from "framer-motion";
import { Star } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { TESTIMONIALS } from "../data/testimonials.js";

export default function Testimonials() {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle eyebrow="Loved by regulars" title="What people say after their first booking" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="testimonial-track flex gap-5 overflow-x-auto px-6 pb-4"
      >
        {TESTIMONIALS.map((t) => (
          <div
            key={t.name}
            className="w-[300px] flex-none rounded-2xl border border-[--c-border] bg-[--c-surface] p-6 sm:w-[340px]"
          >
            <div className="flex gap-1 text-[--c-accent]">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-current" />
              ))}
            </div>
            <p className="mt-4 text-[15px] leading-relaxed text-[--c-ink]">&ldquo;{t.quote}&rdquo;</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[--c-primary] to-[--c-accent] text-xs font-semibold text-white">
                {t.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </span>
              <div>
                <p className="text-sm font-semibold text-[--c-ink]">{t.name}</p>
                <p className="text-xs text-[--c-muted]">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
