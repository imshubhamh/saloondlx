import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import Button from "./Button.jsx";
import { PRICING } from "../data/pricing.js";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[--c-surface]/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Simple pricing"
          title="Start free. Upgrade when you're ready."
          desc="No hidden fees for customers, ever. Salons choose the plan that fits their size."
        />

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PRICING.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i * 90) / 1000, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`relative flex h-full flex-col rounded-3xl p-8 ${
                plan.highlighted
                  ? "bg-gradient-to-b from-[--c-secondary] to-[#1a0303] text-white shadow-soft"
                  : "border border-[--c-border] bg-[--c-surface]"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[--c-accent] px-4 py-1 text-xs font-semibold text-[--c-secondary]">
                  Most Popular
                </span>
              )}
              <h3 className={`font-display text-lg font-semibold ${plan.highlighted ? "text-white" : "text-[--c-ink]"}`}>
                {plan.name}
              </h3>
              <p className={`mt-2 text-sm ${plan.highlighted ? "text-white/60" : "text-[--c-muted]"}`}>
                {plan.desc}
              </p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold">{plan.price}</span>
                <span className={plan.highlighted ? "text-white/60" : "text-[--c-muted]"}>{plan.period}</span>
              </div>
              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2
                      className={`h-4 w-4 flex-none ${plan.highlighted ? "text-[--c-accent]" : "text-[--c-primary]"}`}
                    />
                    <span className={plan.highlighted ? "text-white/85" : "text-[--c-ink]"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button variant={plan.highlighted ? "light" : "ghost"} className="mt-8 w-full">
                Get Started
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
