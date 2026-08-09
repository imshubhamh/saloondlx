import Stats from "../components/Stats.jsx";
import WhyUs from "../components/WhyUs.jsx";
import { BarberBenefits, CustomerBenefits } from "../components/Benefits.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function AboutPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <Stats />
      <WhyUs />
      <BarberBenefits />
      <CustomerBenefits />
      <Testimonials />
    </div>
  );
}
