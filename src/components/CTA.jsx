import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Button from "./Button.jsx";
import GradientBackground from "./GradientBackground.jsx";

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 pb-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2rem] bg-[--c-secondary] px-8 py-20 text-center sm:px-16"
      >
        <GradientBackground variant="cta" />
        <div className="relative">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to skip the waiting line?
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-white/65">
            Join thousands who've already traded waiting-room chairs for a slot
            that's actually theirs.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button variant="light">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </Button>
            <Button variant="ghost" className="!text-white !ring-white/25 hover:!ring-white/50">
              Get Started
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
