import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/links")({
  component: LinksPage,
  head: () => ({ meta: [{ title: "Women Care Clinic | Healthcare Landing Pages" }, { name: "description", content: "Dedicated Women Care Clinic pages for gynaecology, PCOS, fertility, maternity and appointments." }] }),
});

const links = [["Gynaecology", "/services", "General women's health and gynaecology services"], ["PCOS", "/pcos", "Focused PCOS consultation landing page"], ["Fertility", "/fertility", "Fertility and infertility guidance"], ["Maternity", "/maternity", "Pregnancy and maternity care"], ["Dr. Laila Nazir", "/doctor", "Doctor profile and qualifications"], ["Book Appointment", "/appointment", "Direct appointment page"], ["Contact", "/contact", "Phone, WhatsApp and clinic details"], ["FAQs", "/faqs", "Common patient questions"]] as const;

function LinksPage() {
  return <main className="min-h-screen bg-[#fbfaf7] px-5 py-20 text-slate-950 sm:px-8"><div className="mx-auto max-w-3xl"><h1 className="text-4xl font-semibold tracking-tight">Women Care Clinic pages</h1><p className="mt-3 text-slate-600">Use these standalone URLs for ads, Google Business Profile posts, social media and referral links.</p><div className="mt-8 grid gap-3">{links.map(([label, path, desc])=><Link key={path} to={path} className="rounded-2xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"><div className="flex items-center justify-between gap-4"><div><div className="font-semibold">{label}</div><div className="mt-1 text-sm text-slate-500">{desc}</div></div><div className="text-sm font-semibold text-[#056170]">{path} →</div></div></Link>)}</div></div></main>;
}
