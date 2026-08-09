import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow.jsx";
import Button from "./Button.jsx";
import FeatureCard from "./FeatureCard.jsx";
import { BARBER_BENEFITS, CUSTOMER_BENEFITS } from "../data/benefits.js";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export function BarberBenefits() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp}>
          <Eyebrow>For salon owners</Eyebrow>
          <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[--c-ink] sm:text-4xl">
            Run a fuller, calmer shop
          </h2>
          <p className="mt-4 max-w-md text-[--c-muted]">
            SaloonDlx fills gaps in your day automatically and gives you a clear
            read on your busiest hours — so growth stops being guesswork.
          </p>
          <Button variant="primary" className="mt-8">
            List Your Salon <ArrowRight className="h-4 w-4" />
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {BARBER_BENEFITS.map((b, i) => (
            <FeatureCard key={b.title} {...b} compact delay={i * 70} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CustomerBenefits() {
  return (
    <section className="bg-[--c-surface]/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div className="order-2 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:order-1">
            {CUSTOMER_BENEFITS.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: (i * 60) / 1000, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full flex-col items-start gap-3 rounded-2xl border border-[--c-border] bg-[--c-surface] p-5"
              >
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-[--c-primary]/10 text-[--c-primary]">
                  <b.icon className="h-4 w-4" strokeWidth={2.25} />
                </span>
                <p className="text-sm font-semibold text-[--c-ink]">{b.title}</p>
                <p className="text-xs leading-relaxed text-[--c-muted]">{b.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="order-1 lg:order-2"
          >
            <Eyebrow>For customers</Eyebrow>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-tight text-[--c-ink] sm:text-4xl">
              Time you get to keep
            </h2>
            <p className="mt-4 max-w-md text-[--c-muted]">
              Every minute you'd have spent on a waiting-room bench goes back
              to you — book once, and let the schedule do the rest.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
