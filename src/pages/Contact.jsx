import { Mail, Phone, MapPin } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import CTA from "../components/CTA.jsx";

const CONTACT_DETAILS = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    label: "Email us",
    value: "hello@saloondlx.com",
  },
  {
    icon: MapPin,
    label: "Visit us",
    value: "Sector 5, Panchkula, Haryana",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 sm:pt-28">
      <section className="mx-auto max-w-7xl px-6 pb-16">
        <SectionTitle
          eyebrow="Get in touch"
          title="We'd love to hear from you"
          desc="Questions about booking, partnerships, or listing your salon? Reach out — someone from the team will get back to you soon."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {CONTACT_DETAILS.map((c) => (
            <div
              key={c.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-[--c-border] bg-[--c-surface] p-6 text-center shadow-card"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-[--c-primary]/10 text-[--c-primary]">
                <c.icon className="h-5 w-5" strokeWidth={2.25} />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-[--c-muted]">
                  {c.label}
                </p>
                <p className="mt-1 text-sm font-medium text-[--c-ink]">{c.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTA />
    </div>
  );
}
