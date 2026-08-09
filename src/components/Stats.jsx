import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import useCountUp from "../hooks/useCountUp.js";
import { STATS } from "../data/stats.js";

function StatItem({ stat, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const value = useCountUp(stat.value, inView, 1500);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      className="text-center"
    >
      <p className="font-display text-3xl font-bold text-[--c-ink] sm:text-4xl">
        {value.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm text-[--c-muted]">{stat.label}</p>
    </motion.div>
  );
}

export default function Stats() {
  return (
    <section className="border-y border-[--c-border] bg-[--c-surface]/60">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
        {STATS.map((s, i) => (
          <StatItem key={s.label} stat={s} delay={i * 120} />
        ))}
      </div>
    </section>
  );
}
