import { motion } from "framer-motion";

export default function FeatureCard({ icon: Icon, title, desc, compact = false, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: delay / 1000, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`group flex h-full flex-col gap-4 rounded-2xl border border-[--c-border] bg-[--c-surface] transition-shadow duration-300 hover:shadow-card ${
        compact ? "p-6" : "p-7"
      }`}
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl bg-[--c-primary]/10 text-[--c-primary] transition-colors duration-300 group-hover:bg-[--c-primary] group-hover:text-white">
        <Icon className="h-5 w-5" strokeWidth={2.25} />
      </span>
      <div>
        <h3 className="font-display text-base font-semibold text-[--c-ink]">{title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-[--c-muted]">{desc}</p>
      </div>
    </motion.div>
  );
}
