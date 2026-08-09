import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import { FAQS } from "../data/faq.js";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-28">
      <SectionTitle eyebrow="Questions" title="Frequently asked questions" />

      <div className="flex flex-col gap-3">
        {FAQS.map((item, i) => {
          const open = openIndex === i;
          return (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i * 60) / 1000 }}
              className="overflow-hidden rounded-2xl border border-[--c-border] bg-[--c-surface]"
            >
              <button
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpenIndex(open ? -1 : i)}
                aria-expanded={open}
              >
                <span className="text-[15px] font-semibold text-[--c-ink]">{item.q}</span>
                <ChevronDown
                  className={`h-4 w-4 flex-none text-[--c-muted] transition-transform duration-300 ${
                    open ? "rotate-180 text-[--c-primary]" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {open && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-[--c-muted]">{item.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
