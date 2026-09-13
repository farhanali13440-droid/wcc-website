import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, Check, Clock3, HeartPulse, MapPin, MessageCircle, ShieldCheck, Sparkles, Stethoscope, UserRound } from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.png.asset.json";
import wccLogo from "@/assets/wcc-logo.jpeg.asset.json";

const phone = "+923338390207";
const displayPhone = "+92 333 8390207";
const whatsappUrl = `https://wa.me/${phone}`;
const mapUrl = "https://share.google/6JpY31Fq61p2bVwaF";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Women Care Clinic | Gynaecologist & Obstetrician in Peshawar" },
      { name: "description", content: "Women Care Clinic in Hayatabad, Peshawar offers private, women-focused gynaecology, pregnancy, fertility and women's health care with Dr. Laila Nazir." },
    ],
  }),
});

const quickLinks = [
  ["About Dr. Laila", "/doctor", "Meet Asst. Prof. Dr. Laila Nazir and learn about her qualifications and approach."],
  ["Gynaecology Services", "/services", "Explore women's health, gynaecology, screening and treatment services."],
  ["Pregnancy & Maternity", "/maternity", "Pregnancy, delivery planning, maternity and postnatal support."],
  ["PCOS Care", "/pcos", "Focused guidance for PCOS symptoms, menstrual concerns and fertility."],
  ["Fertility Care", "/fertility", "A structured next-step approach for infertility and fertility concerns."],
  ["Book Appointment", "/appointment", "Request an appointment with the clinic."],
];

function Index() {
  return (
    <div className="min-h-screen bg-[#fbfaf7] text-slate-950">
      <header className="sticky top-0 z-50 border-b border-[#d7e2e0]/70 bg-[#fbfaf7]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <Link to="/" className="flex items-center gap-3">
            <img src={wccLogo.url} alt="Women Care Clinic logo" className="h-12 w-12 rounded-2xl object-contain" />
            <div>
              <div className="text-sm font-semibold tracking-wide">Women Care Clinic</div>
              <div className="text-[11px] font-medium text-slate-500">Peshawar • Women's Healthcare</div>
            </div>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-[#056170]">About</Link>
            <Link to="/services" className="text-sm font-medium text-slate-600 hover:text-[#056170]">Services</Link>
            <Link to="/maternity" className="text-sm font-medium text-slate-600 hover:text-[#056170]">Maternity</Link>
            <Link to="/pcos" className="text-sm font-medium text-slate-600 hover:text-[#056170]">PCOS</Link>
            <Link to="/fertility" className="text-sm font-medium text-slate-600 hover:text-[#056170]">Fertility</Link>
            <Link to="/faqs" className="text-sm font-medium text-slate-600 hover:text-[#056170]">FAQs</Link>
          </nav>
          <div className="flex items-center gap-2">
            <a href={`tel:${phone}`} className="hidden rounded-full border border-[#b9cfcd] px-4 py-2.5 text-sm font-semibold text-[#056170] sm:inline-flex">Call</a>
            <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-[#056170] px-4 py-2.5 text-sm font-semibold text-white sm:px-5">Book Appointment <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </header>

      <main>
        <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-16 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:pb-24 lg:pt-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">Expert care at every stage of womanhood</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">Women's healthcare in Peshawar with confidence, privacy and care.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">Women Care Clinic is led by Asst. Prof. Dr. Laila Nazir, Consultant Gynaecologist & Obstetrician, serving women in Hayatabad and across Peshawar.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/appointment" className="inline-flex items-center gap-2 rounded-full bg-[#056170] px-6 py-3.5 text-sm font-semibold text-white">Book an Appointment <ArrowRight className="h-4 w-4" /></Link>
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-[#b9cfcd] bg-white px-6 py-3.5 text-sm font-semibold text-[#056170]"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[[Stethoscope, "Expert specialist care"], [ShieldCheck, "Privacy-focused environment"], [HeartPulse, "Personalized next steps"]].map(([Icon, text]) => { const I = Icon as typeof Stethoscope; return <div key={String(text)} className="flex items-center gap-3 text-sm font-medium text-slate-700"><I className="h-5 w-5 text-[#056170]" />{text}</div>; })}
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-[#dceceb] blur-2xl" />
            <div className="overflow-hidden rounded-[2.5rem] bg-white shadow-2xl ring-1 ring-slate-200">
              <img src={doctorPortrait.url} alt="Asst. Prof. Dr. Laila Nazir" className="aspect-[4/5] w-full object-cover" />
              <div className="p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-600">Asst. Prof. Dr. Laila Nazir</p>
                <p className="mt-2 text-lg font-semibold">Consultant Gynaecologist & Obstetrician</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">MBBS • FCPS • CHPE • MRCPI (Ireland) • Member ACOG</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">Explore the clinic</p><h2 className="mt-2 text-3xl font-semibold">Choose a dedicated page for what you need.</h2></div><p className="max-w-xl text-sm leading-6 text-slate-600">Each area below has its own URL, so patients and advertising campaigns can land directly on the most relevant information.</p></div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {quickLinks.map(([title, href, description]) => <Link key={href} to={href} className="group rounded-[1.75rem] border border-slate-200 bg-[#fbfaf7] p-6 transition hover:-translate-y-1 hover:shadow-lg"><div className="flex items-start justify-between gap-4"><h3 className="text-lg font-semibold">{title}</h3><ArrowRight className="h-5 w-5 text-[#056170] transition group-hover:translate-x-1" /></div><p className="mt-3 text-sm leading-6 text-slate-600">{description}</p></Link>)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="rounded-[2rem] bg-[#056170] p-7 text-white"><Baby className="h-7 w-7" /><h3 className="mt-5 text-2xl font-semibold">Pregnancy & maternity</h3><p className="mt-3 text-sm leading-6 text-white/80">Antenatal care, delivery planning, postnatal support and maternity guidance.</p><Link to="/maternity" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold">Explore maternity <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="rounded-[2rem] border border-[#cfe0de] bg-white p-7"><Sparkles className="h-7 w-7 text-[#056170]" /><h3 className="mt-5 text-2xl font-semibold">PCOS care</h3><p className="mt-3 text-sm leading-6 text-slate-600">A focused destination for women searching for support with PCOS and related concerns.</p><Link to="/pcos" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#056170]">Explore PCOS care <ArrowRight className="h-4 w-4" /></Link></div>
            <div className="rounded-[2rem] border border-[#f1d7d9] bg-white p-7"><HeartPulse className="h-7 w-7 text-rose-600" /><h3 className="mt-5 text-2xl font-semibold">Fertility guidance</h3><p className="mt-3 text-sm leading-6 text-slate-600">Dedicated information for women and couples seeking help with infertility concerns.</p><Link to="/fertility" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-rose-600">Explore fertility care <ArrowRight className="h-4 w-4" /></Link></div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex gap-4"><MapPin className="mt-1 h-5 w-5 shrink-0 text-[#056170]" /><div><h3 className="font-semibold">Clinic location</h3><p className="mt-1 text-sm leading-6 text-slate-600">Health Net Hospital, Sector A-2, Phase 5, Hayatabad, Peshawar, 25100</p><a href={mapUrl} target="_blank" rel="noreferrer" className="mt-2 inline-block text-sm font-semibold text-[#056170]">Open map</a></div></div>
              <div className="flex gap-4"><Clock3 className="mt-1 h-5 w-5 shrink-0 text-[#056170]" /><div><h3 className="font-semibold">Clinic timings</h3><p className="mt-1 text-sm leading-6 text-slate-600">Monday to Saturday<br />5:00 PM – 9:00 PM</p></div></div>
              <div className="flex gap-4"><MessageCircle className="mt-1 h-5 w-5 shrink-0 text-[#056170]" /><div><h3 className="font-semibold">Appointments</h3><p className="mt-1 text-sm leading-6 text-slate-600">Call {displayPhone} or message the clinic on WhatsApp.</p><Link to="/appointment" className="mt-2 inline-block text-sm font-semibold text-[#056170]">Book online</Link></div></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#fbfaf7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 py-10 sm:px-8 lg:px-10 md:flex-row md:items-center md:justify-between">
          <div><div className="text-sm font-semibold">Women Care Clinic</div><div className="mt-1 text-xs text-slate-500">Led by Asst. Prof. Dr. Laila Nazir • Peshawar</div></div>
          <div className="flex flex-wrap gap-5 text-sm text-slate-600"><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/doctor">Doctor</Link><Link to="/contact">Contact</Link><Link to="/faqs">FAQs</Link></div>
        </div>
      </footer>
    </div>
  );
}
