import SectionTitle from "./SectionTitle.jsx";
import FeatureCard from "./FeatureCard.jsx";
import { FEATURES } from "../data/features.js";

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        eyebrow="Everything included"
        title="Built for the whole visit, not just the click"
        desc="From the first search to your loyalty points, one connected system handles it."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((f, i) => (
          <FeatureCard key={f.title} {...f} compact delay={(i % 6) * 70} />
        ))}
      </div>
    </section>
  );
}
