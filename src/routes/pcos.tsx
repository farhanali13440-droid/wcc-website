import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, HeartPulse } from "lucide-react";
import gynaecologyImage from "@/assets/gynaecology.png.asset.json";

export const Route = createFileRoute("/pcos")({
  component: PcosPage,
  head: () => ({ meta: [{ title: "PCOS Treatment & Gynaecology Care in Peshawar | Women Care Clinic" }, { name: "description", content: "Get professional evaluation and personalized guidance for PCOS and related women's health concerns at Women Care Clinic in Peshawar." }] }),
});

function PcosPage() {
  const concerns = ["Irregular or missed periods", "Hormonal and menstrual concerns", "Acne or unwanted hair growth", "Weight and metabolic concerns", "Difficulty conceiving", "Questions about PCOS management"];
  return <main className="min-h-screen bg-[#fbfaf7] text-slate-950"><section className="mx-auto max-w-7xl px-5 pb-16 pt-32 sm:px-8"><Link to="/" className="text-sm font-semibold text-[#056170]">← Back to clinic</Link><div className="mt-9 grid items-center gap-10 lg:grid-cols-2"><div><p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">PCOS care</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">A clearer next step for PCOS concerns.</h1><p className="mt-5 text-lg leading-8 text-slate-600">PCOS can affect periods, hormones, skin, weight and fertility. Start with a professional assessment and a plan tailored to your symptoms and goals.</p><Link to="/appointment" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#056170] px-6 py-3 text-sm font-semibold text-white">Book a PCOS consultation <ArrowRight className="h-4 w-4" /></Link></div><img src={gynaecologyImage.url} alt="Gynaecology consultation" className="w-full rounded-[2rem] object-cover shadow-xl" /></div></section><section className="bg-white"><div className="mx-auto max-w-6xl px-5 py-16 sm:px-8"><div className="flex items-center gap-3"><HeartPulse className="h-7 w-7 text-[#056170]"/><h2 className="text-3xl font-semibold">PCOS concerns we can discuss</h2></div><div className="mt-8 grid gap-4 sm:grid-cols-2">{concerns.map(c=><div key={c} className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-[#fbfaf7] p-4 text-sm text-slate-700"><CheckCircle2 className="h-5 w-5 shrink-0 text-[#056170]"/>{c}</div>)}</div><p className="mt-8 text-sm leading-6 text-slate-500">PCOS is different for each woman. A consultation can help clarify symptoms, possible causes and appropriate next steps.</p></div></section></main>;
}
