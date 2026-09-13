import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/faqs")({
  component: FaqsPage,
  head: () => ({ meta: [{ title: "Women's Healthcare FAQs | Women Care Clinic Peshawar" }, { name: "description", content: "Frequently asked questions about appointments, pregnancy care, fertility, privacy and services at Women Care Clinic." }] }),
});

const items = [
  ["What is included in the PKR 2,000 Comprehensive Women's Health Checkup?", "The current offer includes an expert gynae consultation, free session with a female physiotherapist, free consultation with a female nutritionist, a personalized pregnancy/infertility roadmap, priority WhatsApp follow-up support for one week, and a women-only, privacy-focused environment."],
  ["Can I discuss sensitive women's health concerns privately?", "Yes. Women Care Clinic emphasizes a women-only environment, private consultation and a confidentiality-focused approach."],
  ["Does Dr. Laila provide pregnancy and maternity care?", "Yes. Her practice includes antenatal care, birth planning, delivery care and postnatal support."],
  ["Can I get help with infertility?", "Yes. Infertility treatment and fertility guidance are part of the clinic's services."],
  ["Where is Women Care Clinic located?", "Women Care Clinic is located at Health Net Hospital, Phase 5 Hayatabad, Peshawar, Pakistan."],
  ["How do I book an appointment?", "Use the Book Appointment page, call +92 333 8390207, or contact the clinic on WhatsApp."],
  ["What are the clinic timings?", "Monday to Saturday, 5:00 PM to 9:00 PM. Please confirm availability when booking."],
];

function FaqsPage() {
  const [open, setOpen] = useState(0);
  return <main className="min-h-screen bg-[#fbfaf7] text-slate-950"><section className="mx-auto max-w-4xl px-5 pb-16 pt-32 sm:px-8"><Link to="/" className="text-sm font-semibold text-[#056170]">← Back to clinic</Link><div className="mt-9 text-center"><p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">FAQs</p><h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">Questions women often ask.</h1><p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">Find quick answers about services, appointments and the Women Care Clinic experience.</p></div><div className="mt-10 space-y-3">{items.map(([q,a], i)=><div key={q} className="overflow-hidden rounded-2xl border border-slate-200 bg-white"><button onClick={()=>setOpen(open===i?-1:i)} className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left text-sm font-semibold sm:px-6"><span>{q}</span><ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open===i?"rotate-180":""}`}/></button>{open===i&&<div className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6">{a}</div>}</div>)}</div></section></main>;
}
