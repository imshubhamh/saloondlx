import { motion } from "framer-motion";
import { Scissors, Bell, CheckCircle2 } from "lucide-react";
import SectionTitle from "./SectionTitle.jsx";
import QueueWidget from "./QueueWidget.jsx";

export default function DashboardPreview() {
  return (
    <section className="bg-[--c-surface]/60 py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow="Your dashboard"
          title="Every appointment, one clean view"
          desc="Today's booking, upcoming visits, and your favorite barber — always a glance away."
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-5xl"
        >
          <div className="grid grid-cols-1 gap-4 rounded-[1.75rem] border border-[--c-border] bg-[--c-surface] p-4 shadow-soft sm:p-6 lg:grid-cols-3">
            {/* left column: today + calendar */}
            <div className="flex flex-col gap-4 lg:col-span-2">
              <div className="rounded-2xl bg-gradient-to-br from-[--c-primary] to-[--c-accent] p-5 text-white">
                <p className="text-xs font-medium uppercase tracking-wide text-white/70">
                  Today's Appointment
                </p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-display text-xl font-semibold">4:30 PM · Skin Fade</p>
                    <p className="mt-1 text-sm text-white/75">with Marcus Lee · Chair 2</p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white/15">
                    <Scissors className="h-5 w-5" />
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-[--c-border] p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[--c-muted]">
                    Upcoming Bookings
                  </p>
                  <div className="mt-3 flex flex-col gap-2.5">
                    {["Fri · Beard Trim", "Tue · Haircut"].map((b) => (
                      <div key={b} className="flex items-center gap-2 text-sm text-[--c-ink]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[--c-primary]" /> {b}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-[--c-border] p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[--c-muted]">
                    Favorite Barber
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[--c-primary]/10 text-sm font-semibold text-[--c-primary]">
                      ML
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-[--c-ink]">Marcus Lee</p>
                      <p className="text-xs text-[--c-muted]">4.9 ★ · 300+ cuts</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-[--c-border] p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[--c-muted]">
                  Recent Activity
                </p>
                <div className="mt-3 flex flex-col gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-[--c-ink]">Booking confirmed — Sat, 11:00 AM</span>
                    <span className="text-[--c-muted]">2h ago</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[--c-ink]">Payment received — ₹450</span>
                    <span className="text-[--c-muted]">1d ago</span>
                  </div>
                </div>
              </div>
            </div>

            {/* right column: notifications + queue + calendar */}
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl border border-[--c-border] p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[--c-muted]">
                  Notifications
                </p>
                <div className="mt-3 flex flex-col gap-3">
                  <div className="flex items-start gap-2.5 text-sm text-[--c-ink]">
                    <Bell className="mt-0.5 h-4 w-4 flex-none text-[--c-primary]" />
                    Your slot starts in 30 min
                  </div>
                  <div className="flex items-start gap-2.5 text-sm text-[--c-ink]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[--c-primary]" />
                    Marcus confirmed your booking
                  </div>
                </div>
              </div>

              <QueueWidget compact />

              <div className="rounded-2xl border border-[--c-border] p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-[--c-muted]">
                  Booking Calendar
                </p>
                <div className="mt-3 grid grid-cols-7 gap-1.5">
                  {Array.from({ length: 21 }).map((_, i) => (
                    <span
                      key={i}
                      className={`h-6 rounded-md ${
                        [3, 9, 14, 17].includes(i) ? "bg-[--c-primary]" : "bg-[--c-primary]/10"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
