import SectionTitle from "./SectionTitle.jsx";
import FeatureCard from "./FeatureCard.jsx";
import { WHY_US } from "../data/whyUs.js";

export default function WhyUs() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-28">
      <SectionTitle
        eyebrow="Why SaloonDlx"
        title="Everything about waiting, removed."
        desc="We rebuilt the barbershop visit around one idea: your time only starts counting when you're in the chair."
      />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {WHY_US.map((item, i) => (
          <FeatureCard key={item.title} {...item} delay={i * 80} />
        ))}
      </div>
    </section>
  );
}
