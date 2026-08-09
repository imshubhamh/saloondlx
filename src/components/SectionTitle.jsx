import { motion } from "framer-motion";
import Eyebrow from "./Eyebrow.jsx";

export default function SectionTitle({ eyebrow, title, desc, center = true }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`max-w-2xl ${center ? "mx-auto text-center" : ""} mb-14`}
    >
      {eyebrow && (
        <div className={`mb-4 flex ${center ? "justify-center" : ""}`}>
          <Eyebrow>{eyebrow}</Eyebrow>
        </div>
      )}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-[--c-ink] sm:text-4xl">
        {title}
      </h2>
      {desc && <p className="mt-4 text-base leading-relaxed text-[--c-muted]">{desc}</p>}
    </motion.div>
  );
}
