import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle.jsx";
import { STEPS } from "../data/steps.js";

export default function Timeline() {
  return (
    <section id="how-it-works" className="bg-[--c-surface]/60 py-28">
      <div className="mx-auto max-w-4xl px-6">
        <SectionTitle
          eyebrow="The process"
          title="Five steps between you and a fresh cut"
          desc="A short, linear path — because the whole point is removing extra steps, not adding them."
        />

        <div className="relative">
          <div className="absolute left-[27px] top-2 bottom-2 w-px bg-gradient-to-b from-[--c-primary] via-[--c-accent] to-transparent sm:left-[31px]" />

          <div className="flex flex-col gap-10">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i * 90) / 1000, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex items-start gap-6"
              >
                <div className="relative z-10 grid h-14 w-16 flex-none place-items-center rounded-2xl bg-gradient-to-br from-[--c-primary] to-[--c-accent] font-display text-lg font-bold text-white shadow-glow">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="pt-1.5">
                  <h3 className="font-display text-lg font-semibold text-[--c-ink]">{step.title}</h3>
                  <p className="mt-1.5 max-w-md text-[--c-muted]">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
