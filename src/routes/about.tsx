import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check, HeartPulse, ShieldCheck, Stethoscope, UserRound } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.png.asset.json";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Women Care Clinic | Dr. Laila Nazir | Peshawar" },
      { name: "description", content: "Learn about Women Care Clinic and Dr. Laila Nazir's women-focused gynaecology and obstetric care in Hayatabad, Peshawar." },
    ],
  }),
});

function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <section className="mx-auto max-w-6xl px-5 pb-16 pt-32 sm:px-8">
        <Link to="/" className="text-sm font-semibold text-[#056170]">← Back to Women Care Clinic</Link>
        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl ring-1 ring-slate-200">
            <img src={doctorPortrait.url} alt="Asst. Prof. Dr. Laila Nazir" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">About the clinic</p>
            <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Expert care at every stage of womanhood.</h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">Women Care Clinic is a women-focused healthcare practice in Hayatabad, Peshawar, led by Asst. Prof. Dr. Laila Nazir, Consultant Gynaecologist & Obstetrician.</p>
            <div className="mt-8 rounded-3xl border border-[#cfe0de] bg-white p-6">
              <h2 className="text-xl font-semibold">Asst. Prof. Dr. Laila Nazir</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">MBBS, FCPS (Obstetrics & Gynecology), CHPE, MRCPI (II) – Ireland, Member ACOG</p>
              <p className="mt-3 text-sm leading-6 text-slate-600">Her approach combines clinical expertise with a privacy-focused environment where women can discuss sensitive concerns comfortably.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 py-16 sm:px-8 md:grid-cols-2">
          {[
            [Stethoscope, "Experienced specialist care", "Consult with a qualified gynaecologist and obstetrician for personalized care."],
            [ShieldCheck, "Privacy-focused", "A setting designed to help women discuss personal concerns more comfortably."],
            [HeartPulse, "Whole-woman support", "Gynaecology, pregnancy, fertility and preventive care under one care approach."],
            [UserRound, "Women-centered experience", "Clear communication, respectful consultations and practical next steps."],
          ].map(([Icon, title, text]) => {
            const I = Icon as typeof Stethoscope;
            return <div key={String(title)} className="rounded-3xl bg-[#fbfaf7] p-6"><I className="h-6 w-6 text-[#056170]" /><h3 className="mt-4 text-lg font-semibold">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>;
          })}
        </div>
      </section>
      <section className="mx-auto max-w-6xl px-5 py-16 text-center sm:px-8">
        <h2 className="text-3xl font-semibold">Ready to speak with the clinic?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600">Book a consultation or explore the care options available for your needs.</p>
        <div className="mt-7 flex flex-wrap justify-center gap-3"><Link to="/services" className="inline-flex items-center gap-2 rounded-full border border-[#b9cfcd] px-5 py-3 text-sm font-semibold text-[#056170]">Explore services <ArrowRight className="h-4 w-4" /></Link><Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-[#056170] px-5 py-3 text-sm font-semibold text-white">Book Appointment <Check className="h-4 w-4" /></Link></div>
      </section>
    </main>
  );
}
