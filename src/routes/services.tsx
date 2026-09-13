import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Baby, HeartPulse, ShieldCheck, Sparkles, Stethoscope } from "lucide-react";
import consultationImage from "@/assets/consultation.png.asset.json";
import pregnancyImage from "@/assets/pregnancy-care.png.asset.json";
import gynaecologyImage from "@/assets/gynaecology.png.asset.json";
import ultrasoundImage from "@/assets/ultrasound.png.asset.json";
import treatmentImage from "@/assets/treatment.png.asset.json";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({ meta: [{ title: "Gynaecology & Women's Healthcare Services | Women Care Clinic Peshawar" }, { name: "description", content: "Explore gynaecology, pregnancy, fertility, screening, treatment and whole-woman healthcare services at Women Care Clinic in Peshawar." }] }),
});

const groups = [
  ["Obstetric Care", Baby, pregnancyImage.url, ["Antenatal Care", "Normal Delivery", "C-Section", "Postnatal Care"]],
  ["Gynaecological Care", HeartPulse, gynaecologyImage.url, ["General Gynaecology", "Family Planning", "Infertility Treatment", "Menopause Care"]],
  ["Screening & Diagnostics", ShieldCheck, ultrasoundImage.url, ["2D Ultrasound", "Lab Testing", "Pap Smear & Screening", "Breast Screening"]],
  ["Procedures & Treatments", Stethoscope, treatmentImage.url, ["IUD Insertion/Removal", "D&C", "Miscarriage Management", "Infection Treatment"]],
  ["Whole-Woman Support", Sparkles, consultationImage.url, ["Pre-marital Counseling", "Nutrition Guidance", "Teen Health", "Well-Woman Checkups"]],
] as const;

function ServicesPage() {
  return <main className="min-h-screen bg-[#fbfaf7] text-slate-950"><section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8"><Link to="/" className="text-sm font-semibold text-[#056170]">← Back to Women Care Clinic</Link><div className="mt-8 max-w-3xl"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">Our services</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Women's healthcare designed around your needs.</h1><p className="mt-5 text-lg leading-8 text-slate-600">From routine gynaecology and fertility concerns to pregnancy care and screening, explore the clinic's core areas of care.</p></div><div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{groups.map(([title, Icon, image, items]) => <article key={title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200"><img src={image} alt={String(title)} className="h-52 w-full object-cover" /><div className="p-6"><Icon className="h-7 w-7 text-[#056170]" /><h2 className="mt-4 text-xl font-semibold">{title}</h2><ul className="mt-4 space-y-2 text-sm text-slate-600">{items.map(item => <li key={item}>• {item}</li>)}</ul><Link to="/appointment" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#056170]">Book for this service <ArrowRight className="h-4 w-4" /></Link></div></article>)}</div></section></main>;
}
