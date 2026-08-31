import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  Baby,
  Check,
  ChevronDown,
  Clock3,
  HeartPulse,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  X,
} from "lucide-react";
import doctorPortrait from "@/assets/doctor-portrait.png.asset.json";
import consultationImage from "@/assets/consultation.png.asset.json";
import pregnancyImage from "@/assets/pregnancy-care.png.asset.json";
import gynaecologyImage from "@/assets/gynaecology.png.asset.json";
import ultrasoundImage from "@/assets/ultrasound.png.asset.json";
import treatmentImage from "@/assets/treatment.png.asset.json";
import maternityImage from "@/assets/maternity-newborn.png.asset.json";
import receptionImage from "@/assets/clinic-reception.png.asset.json";
import wccLogo from "@/assets/wcc-logo.jpeg.asset.json";

const phone = "+923338390207";
const displayPhone = "+92 333 8390207";
const whatsappUrl = `https://wa.me/${phone.replace("+", "")}`;
const mapUrl =
  "https://www.google.com/maps/search/?api=1&query=Health+Net+Hospital+Phase+5+Hayatabad+Peshawar";

const serviceGroups = [
  {
    title: "Obstetric Care",
    icon: Baby,
    image: pregnancyImage.url,
    imageAlt: "Dr. Laila Nazir explaining pregnancy care to an expecting mother at Women Care Clinic",
    description: "Thoughtful support across pregnancy, birth planning and recovery.",
    items: ["Antenatal Care", "Normal Delivery", "C-Section", "Postnatal Care"],
  },
  {
    title: "Gynaecological Care",
    icon: HeartPulse,
    image: gynaecologyImage.url,
    imageAlt: "Gynaecology consultation with Dr. Laila Nazir reviewing a patient's health record",
    description: "Private, attentive care for common and complex women's health concerns.",
    items: ["General Gynaecology", "Family Planning", "Infertility Treatment", "Menopause Care"],
  },
  {
    title: "Screening & Diagnostics",
    icon: ShieldCheck,
    image: ultrasoundImage.url,
    imageAlt: "Ultrasound scan being performed for a pregnant patient at Women Care Clinic",
    description: "Appropriate screening and diagnostic support to bring more clarity to your care.",
    items: ["2D Ultrasound", "Lab Testing", "Pap Smear & Screening", "Breast Screening"],
  },
  {
    title: "Procedures & Treatments",
    icon: Stethoscope,
    image: treatmentImage.url,
    imageAlt: "Clinical treatment consultation in a private women-only examination room",
    description: "Professional guidance for selected procedures and women's health treatments.",
    items: ["IUD Insertion/Removal", "D&C", "Miscarriage Management", "Infection Treatment"],
  },
  {
    title: "Whole-Woman Support",
    icon: Sparkles,
    image: consultationImage.url,
    imageAlt: "Dr. Laila Nazir listening to a patient during a personalised consultation",
    description: "Support that considers your stage of life, goals and everyday wellbeing.",
    items: ["Pre-marital Counseling", "Nutrition Guidance", "Teen Health", "Well-Woman Checkups"],
  },
];

const benefits = [
  {
    title: "Expert Gynaecology Care",
    text: "See an experienced Consultant Gynaecologist & Obstetrician with 12+ years of clinical experience.",
    icon: Stethoscope,
  },
  {
    title: "Pregnancy & Maternity Care",
    text: "Get structured guidance through pregnancy, delivery planning and postnatal care.",
    icon: Baby,
  },
  {
    title: "Infertility Guidance",
    text: "Move from uncertainty to a clear, personalized next-step roadmap for fertility concerns.",
    icon: HeartPulse,
  },
  {
    title: "Women-Only Environment",
    text: "Discuss personal concerns more comfortably in an environment designed around women.",
    icon: UserRound,
  },
  {
    title: "Privacy-Focused Care",
    text: "Private consultation and a confidentiality-focused approach help you speak openly.",
    icon: ShieldCheck,
  },
  {
    title: "Personalized Care Plans",
    text: "Your consultation is centered on your symptoms, goals and the care you actually need.",
    icon: Sparkles,
  },
  {
    title: "Diagnostic & Preventive Support",
    text: "Access appropriate screening and diagnostic services through the clinic and hospital setup.",
    icon: ShieldCheck,
  },
  {
    title: "Follow-Up Support",
    text: "The current PKR 2,000 offer includes priority WhatsApp follow-up support for one week.",
    icon: MessageCircle,
  },
];

const testimonials = [
  {
    quote:
      "Dr. Laila is incredibly caring and professional. She guided me through my entire pregnancy journey. Highly recommended!",
    name: "Ayesha K.",
    source: "OlaDoc",
  },
  {
    quote:
      "Best gynaecologist in Peshawar. The women-only environment made me feel completely comfortable.",
    name: "Sana M.",
    source: "Google",
  },
  {
    quote:
      "The consultation was thorough and she took time to explain everything. The PKR 2,000 offer is amazing value.",
    name: "Nadia A.",
    source: "Google",
  },
  {
    quote:
      "After years of infertility struggle, Dr. Laila gave us hope and a clear plan. Now we're expecting our first child.",
    name: "Fatima R.",
    source: "OlaDoc",
  },
];

const faqs = [
  {
    q: "What is included in the PKR 2,000 Comprehensive Women's Health Checkup?",
    a: "The current offer includes an expert gynae consultation, free physiotherapy session, free nutrition consultation, a personalized pregnancy/infertility roadmap, priority WhatsApp follow-up support for one week, and a women-only, privacy-focused environment.",
  },
  {
    q: "Can I discuss sensitive women's health concerns privately?",
    a: "Yes. Women Care Clinic emphasizes a women-only environment, private consultation and confidentiality-focused care so you can discuss personal concerns comfortably.",
  },
  {
    q: "Does Dr. Laila provide pregnancy and maternity care?",
    a: "Yes. Her practice includes obstetric care such as antenatal care, birth planning, delivery care and postnatal support.",
  },
  {
    q: "Can I get help with infertility?",
    a: "Yes. Infertility treatment and fertility guidance are part of the clinic's services, with a focus on understanding your situation and planning appropriate next steps.",
  },
  {
    q: "Where is Women Care Clinic located?",
    a: "Women Care Clinic is located at Health Net Hospital, Phase 5 Hayatabad, Peshawar, Pakistan.",
  },
  {
    q: "How do I book an appointment?",
    a: "You can use the Book Appointment button, call the clinic at +92 333 8390207, or contact the clinic on WhatsApp.",
  },
  {
    q: "What are the clinic timings?",
    a: "The existing website lists clinic hours as Monday to Saturday, 5:00 PM to 9:00 PM. Please confirm availability when booking as timings can change.",
  },
  {
    q: "Is Women Care Clinic a women-only environment?",
    a: "Yes. The clinic highlights women-only staff and a privacy-focused environment designed to help patients feel more comfortable discussing sensitive concerns.",
  },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function BookingModal({ onClose }: { onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
        <div className="w-full max-w-md rounded-[2rem] bg-white p-8 shadow-2xl">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">
            <Check className="h-7 w-7" />
          </div>
          <h3 className="mt-5 text-2xl font-semibold text-slate-950">Appointment request received</h3>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Thank you. The clinic can confirm your preferred time by phone or WhatsApp.
          </p>
          <div className="mt-7 grid grid-cols-2 gap-3">
            <a
              href={`tel:${phone}`}
              className="flex items-center justify-center gap-2 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-800"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
          <button onClick={onClose} className="mt-4 w-full text-sm font-medium text-slate-500">
            Close
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/50 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[2rem] bg-white p-7 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-rose-500">Women Care Clinic</p>
            <h3 className="mt-2 text-2xl font-semibold text-slate-950">Book an appointment</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">Share a few details and the clinic can confirm your visit.</p>
          </div>
          <button onClick={onClose} className="rounded-full p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700" aria-label="Close">
            <X className="h-5 w-5" />
          </button>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }} className="mt-6 space-y-4">
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Full name</span>
            <input required name="name" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none ring-0 transition focus:border-rose-400" />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Phone number</span>
            <input required type="tel" name="phone" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-rose-400" />
          </label>
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Preferred date</span>
              <input required type="date" name="date" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-rose-400" />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-slate-700">Preferred time</span>
              <input required type="time" name="time" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-rose-400" />
            </label>
          </div>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Main concern</span>
            <select name="concern" className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-rose-400">
              <option>General gynaecology</option>
              <option>Pregnancy care</option>
              <option>Fertility / infertility</option>
              <option>Menstrual concerns</option>
              <option>Women's preventive care</option>
              <option>Other</option>
            </select>
          </label>
          <label className="block">
            <span className="mb-2 block text-sm font-medium text-slate-700">Optional message</span>
            <textarea name="message" rows={3} className="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-rose-400" />
          </label>
          <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">
            Request Appointment <ArrowRight className="h-4 w-4" />
          </button>
          <p className="text-center text-xs leading-5 text-slate-500">For the fastest response, you can also WhatsApp the clinic directly.</p>
        </form>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [testimonial, setTestimonial] = useState(0);

  const navTo = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(id), 50);
  };

  const nextTestimonial = () => setTestimonial((value) => (value + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonial((value) => (value - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="min-h-screen bg-[#fbfaf7] text-slate-950">
      {bookingOpen && <BookingModal onClose={() => setBookingOpen(false)} />}

      <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-[#fbfaf7]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <button onClick={() => navTo("top")} className="flex items-center gap-3 text-left">
            <img
              src={wccLogo.url}
              alt="Women Care Clinic logo"
              className="h-12 w-12 rounded-2xl object-contain"
            />
            <div>
              <div className="text-sm font-semibold tracking-wide text-slate-950">Women Care Clinic</div>
              <div className="text-[11px] font-medium text-slate-500">Peshawar • Women's Healthcare</div>
            </div>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {[
              ["About", "about"],
              ["Services", "services"],
              ["Maternity", "maternity"],
              ["Patient Journey", "journey"],
              ["FAQs", "faqs"],
            ].map(([label, id]) => (
              <button key={id} onClick={() => navTo(id)} className="text-sm font-medium text-slate-600 transition hover:text-slate-950">
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-white">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <button onClick={() => setBookingOpen(true)} className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800">
              Book Appointment <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <button onClick={() => setMenuOpen((value) => !value)} className="rounded-xl p-2 lg:hidden" aria-label="Toggle menu">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {menuOpen && (
          <div className="border-t border-slate-200 bg-[#fbfaf7] px-5 py-4 lg:hidden">
            <div className="grid gap-1">
              {[
                ["About", "about"],
                ["Services", "services"],
                ["Maternity", "maternity"],
                ["Patient Journey", "journey"],
                ["FAQs", "faqs"],
              ].map(([label, id]) => (
                <button key={id} onClick={() => navTo(id)} className="rounded-xl px-3 py-3 text-left text-sm font-medium text-slate-700 hover:bg-white">
                  {label}
                </button>
              ))}
              <button onClick={() => { setMenuOpen(false); setBookingOpen(true); }} className="mt-2 rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">
                Book Appointment
              </button>
            </div>
          </div>
        )}
      </header>

      <main id="top">
        <section className="relative overflow-hidden pt-28">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_82%_18%,rgba(244,114,182,0.14),transparent_28%),radial-gradient(circle_at_18%_15%,rgba(251,191,36,0.08),transparent_24%)]" />
          <div className="mx-auto grid min-h-[700px] max-w-7xl items-center gap-10 px-5 pb-16 pt-10 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:px-10 lg:pb-24">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-rose-200 bg-white/70 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-rose-700">
                <ShieldCheck className="h-4 w-4" /> Women-only • Privacy-focused • Peshawar
              </div>
              <h1 className="mt-6 text-5xl font-semibold leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-7xl">
                Expert Women's Healthcare Without the Fear, Awkwardness or Guesswork.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
                From pregnancy and infertility to everyday gynaecological concerns, get expert guidance from Dr. Laila Nazir in a private, women-only environment designed to help you feel heard and supported.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button onClick={() => setBookingOpen(true)} className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:-translate-y-0.5 hover:bg-slate-800">
                  Book Appointment <ArrowRight className="h-4 w-4" />
                </button>
                <button onClick={() => navTo("services")} className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-white/80">
                  Explore Services
                </button>
              </div>
              <div className="mt-8 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  ["12+", "Years experience"],
                  ["MBBS", "Medical degree"],
                  ["FCPS", "Specialist training"],
                  ["MRCPI", "Ireland"],
                ].map(([value, label]) => (
                  <div key={value} className="rounded-2xl border border-slate-200/80 bg-white/70 px-4 py-3">
                    <div className="text-sm font-semibold text-slate-950">{value}</div>
                    <div className="mt-1 text-[11px] leading-4 text-slate-500">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -left-8 top-10 h-40 w-40 rounded-full bg-rose-200/40 blur-3xl" />
              <div className="absolute -right-6 bottom-6 h-48 w-48 rounded-full bg-amber-100/60 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2.5rem] border border-white bg-white p-3 shadow-[0_30px_100px_-40px_rgba(15,23,42,0.35)]">
                <div className="overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-50 via-white to-amber-50">
                  <img
                    src={doctorPortrait.url}
                    alt="Asst. Prof. Dr. Laila Nazir, Consultant Gynaecologist & Obstetrician at Women Care Clinic"
                    className="h-[520px] w-full object-cover object-top"
                  />
                  <div className="p-7 text-center">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Asst. Prof. Dr. Laila Nazir</p>
                    <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-950">Consultant Gynaecologist & Obstetrician</h2>
                    <div className="mx-auto mt-6 grid max-w-xs grid-cols-2 gap-3 text-left">
                      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                        <div className="text-xl font-semibold text-slate-950">12+</div>
                        <div className="mt-1 text-xs text-slate-500">Years experience</div>
                      </div>
                      <div className="rounded-2xl border border-slate-200/70 bg-white/80 p-4">
                        <div className="text-xl font-semibold text-slate-950">Peshawar</div>
                        <div className="mt-1 text-xs text-slate-500">Hayatabad</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative -mt-14 ml-6 w-[calc(100%-3rem)] max-w-sm rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/10">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.15em] text-rose-500">Current patient offer</div>
                    <div className="mt-1 text-lg font-semibold text-slate-950">Comprehensive Women's Health Checkup</div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-semibold text-slate-950">PKR 2,000</div>
                    <div className="text-xs text-slate-400 line-through">PKR 4,000</div>
                  </div>
                </div>
                <button onClick={() => setBookingOpen(true)} className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-rose-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">
                  Book This Consultation <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/80 bg-white/65">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-5 sm:grid-cols-3 sm:px-8 lg:grid-cols-6 lg:px-10">
            {[
              "12+ Years Experience",
              "MBBS",
              "FCPS",
              "MRCPI Ireland",
              "Member ACOG",
              "Women-only Staff",
            ].map((item) => (
              <div key={item} className="flex items-center justify-center gap-2 text-center text-xs font-semibold uppercase tracking-[0.09em] text-slate-500">
                <Check className="h-4 w-4 text-rose-500" /> {item}
              </div>
            ))}
          </div>
        </section>

        <section id="results" className="scroll-mt-24 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-300">Real women. Real experiences.</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Care that feels human from the first conversation.</h2>
              <p className="mt-5 max-w-md text-base leading-7 text-slate-300">The clinic's patient feedback consistently highlights thoughtful guidance, comfort and clear explanations.</p>
              <div className="mt-8 flex gap-3">
                <button onClick={prevTestimonial} className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10">Previous</button>
                <button onClick={nextTestimonial} className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">Next</button>
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 sm:p-9">
              <div className="text-5xl leading-none text-rose-300">“</div>
              <blockquote className="mt-4 text-2xl font-medium leading-10 text-white sm:text-3xl">{testimonials[testimonial].quote}</blockquote>
              <div className="mt-8 flex items-center justify-between gap-4 border-t border-white/10 pt-5">
                <div>
                  <div className="font-semibold">{testimonials[testimonial].name}</div>
                  <div className="mt-1 text-sm text-slate-400">{testimonials[testimonial].source}</div>
                </div>
                <div className="flex gap-1">
                  {testimonials.map((item, index) => (
                    <button key={item.name} onClick={() => setTestimonial(index)} className={`h-2 w-7 rounded-full transition ${index === testimonial ? "bg-rose-300" : "bg-white/15"}`} aria-label={`Show testimonial ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">You deserve more than a quick consultation</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">When you know something isn't right, uncertainty can be exhausting.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:pb-1">Maybe you are unsure whether a symptom is normal. Maybe pregnancy has brought new anxiety, or fertility concerns have left you unsure what to do next. You should be able to ask sensitive questions without feeling rushed, dismissed or uncomfortable.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {["Sensitive concerns feel difficult to discuss", "Symptoms are confusing or recurring", "Pregnancy decisions create stress", "Fertility questions leave you guessing"].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-50 text-rose-600">•</div>
                <h3 className="mt-5 text-base font-semibold text-slate-950">{item}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-500">Ignoring concerns can mean more uncertainty, ongoing discomfort and unnecessary stress.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white">
          <div id="about" className="mx-auto grid max-w-7xl scroll-mt-24 gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:px-10 lg:py-24">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-50 via-white to-amber-50 p-4">
              <img
                src={consultationImage.url}
                alt="Dr. Laila Nazir in a personalised consultation with a female patient"
                className="h-[420px] w-full rounded-[2rem] object-cover"
              />
              <div className="rounded-[2rem] p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-white shadow-sm text-rose-600"><UserRound className="h-6 w-6" /></div>
                <h3 className="mt-6 text-3xl font-semibold tracking-tight">Meet Dr. Laila Nazir</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">Consultant Gynaecologist & Obstetrician</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {["MBBS", "FCPS", "MHPE / CHPE", "MRCPI Obs & Gynae (Ireland)", "Member ACOG"].map((credential) => (
                    <span key={credential} className="rounded-full border border-white bg-white/80 px-3 py-1.5 text-xs font-semibold text-slate-600">{credential}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="self-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">A better way to care for your health</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Expert care built around privacy, clarity and personal attention.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Women Care Clinic brings together gynaecological, obstetric and women's health support in a setting designed to make conversations easier and next steps clearer.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {benefits.map(({ title, text, icon: Icon }) => (
                  <div key={title} className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-rose-600 shadow-sm"><Icon className="h-5 w-5" /></div>
                    <h3 className="mt-4 text-base font-semibold text-slate-950">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="scroll-mt-24 bg-[#f3efe9]">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Comprehensive women's healthcare</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">One place for the care you need across different stages of life.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Explore the clinic's core service areas, from pregnancy and fertility to everyday gynaecological care and screening.</p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {serviceGroups.map(({ title, description, items, icon: Icon, image, imageAlt }) => (
                <div key={title} className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <img src={image} alt={imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
                  <div className="p-7">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-50 text-rose-600"><Icon className="h-6 w-6" /></div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
                  <div className="mt-6 space-y-3">
                    {items.map((item) => (
                      <div key={item} className="flex items-start gap-3 text-sm text-slate-700"><Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-500" /> {item}</div>
                    ))}
                  </div>
                  <button onClick={() => setBookingOpen(true)} className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">Book Appointment <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></button>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="maternity" className="scroll-mt-24 bg-slate-950 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10 lg:py-24">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-300">Maternity & clinical excellence</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Designed around a safer, more supported birth experience.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Dr. Laila's clinical work includes pregnancy and maternity care, with the existing clinic information highlighting consultant supervision, trained nursing support and access to hospital maternity capabilities.</p>
              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {["Delivery suite / labour room", "Trained nursing staff", "Neonatal / NICU support", "Painless delivery options", "Consultant supervision", "24/7 maternity availability where provided by the hospital setup"].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-200"><Check className="mt-0.5 h-4 w-4 shrink-0 text-rose-300" />{item}</div>
                ))}
              </div>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7">
              <div className="text-sm font-semibold uppercase tracking-[0.15em] text-rose-300">Evidence-based care</div>
              <h3 className="mt-4 text-2xl font-semibold">Clinical experience that respects informed decisions.</h3>
              <p className="mt-4 text-sm leading-7 text-slate-300">The existing website highlights Dr. Laila's research work related to VBAC, natural birth and carefully monitored normal delivery approaches when medically appropriate.</p>
              <div className="mt-7 rounded-3xl bg-white/5 p-5">
                <div className="text-sm font-semibold text-white">VBAC & natural birth research</div>
                <p className="mt-2 text-sm leading-6 text-slate-400">Use this space to establish authority without making guaranteed outcome claims.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="journey" className="scroll-mt-24 bg-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Patient journey</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Your visit, made simple.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">A clear four-step process designed to remove uncertainty before you even walk through the door.</p>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {[
                ["01", "Book Your Appointment", "Choose a convenient time by form, phone or WhatsApp."],
                ["02", "Private Consultation", "Share your concerns comfortably with Dr. Laila."],
                ["03", "Get Your Personalized Plan", "Understand the next steps for your health, pregnancy or fertility goals."],
                ["04", "Continue With Follow-Up", "Stay connected for appropriate follow-up and ongoing guidance."],
              ].map(([number, title, text]) => (
                <div key={number} className="relative rounded-[2rem] border border-slate-200 bg-[#fbfaf7] p-7">
                  <div className="text-sm font-semibold text-rose-500">{number}</div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-rose-50">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-600">Current patient offer</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Start with a complete women's health checkup.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">A focused first step toward clearer answers, expert guidance and a more personalized plan.</p>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {["Expert Gynae Consultation", "Free Physiotherapy Session", "Free Nutrition Consultation", "Personalized Pregnancy/Infertility Roadmap", "Priority WhatsApp Follow-Up for 1 Week", "Women-only, privacy-focused environment"].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-medium text-slate-700"><div className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-rose-600"><Check className="h-3.5 w-3.5" /></div>{item}</div>
                  ))}
                </div>
              </div>
              <div className="rounded-[2rem] border border-rose-200 bg-white p-7 shadow-xl shadow-rose-200/30">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-rose-500">Comprehensive Women's Health Checkup</div>
                <div className="mt-4 flex items-end gap-3"><div className="text-5xl font-semibold tracking-tight text-slate-950">PKR 2,000</div><div className="pb-2 text-sm text-slate-400 line-through">PKR 4,000</div></div>
                <p className="mt-4 text-sm leading-6 text-slate-500">Use this consultation as your starting point for expert women's healthcare in Peshawar.</p>
                <button onClick={() => setBookingOpen(true)} className="mt-7 flex w-full items-center justify-center gap-2 rounded-2xl bg-slate-950 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800">Book My PKR 2,000 Consultation <ArrowRight className="h-4 w-4" /></button>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="scroll-mt-24 mx-auto max-w-4xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">FAQs</p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">Questions before you book?</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">Here are clear answers to the practical questions women often have before their visit.</p>
          </div>
          <div className="mt-10 space-y-3">
            {faqs.map((item, index) => {
              const open = activeFaq === index;
              return (
                <div key={item.q} className="rounded-3xl border border-slate-200 bg-white px-5 sm:px-6">
                  <button onClick={() => setActiveFaq(open ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left">
                    <span className="text-base font-semibold text-slate-950">{item.q}</span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-slate-400 transition ${open ? "rotate-180" : ""}`} />
                  </button>
                  {open && <div className="pb-5 pr-8 text-sm leading-7 text-slate-600">{item.a}</div>}
                </div>
              );
            })}
          </div>
        </section>

        <section className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-10 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-300">Take the next step</p>
                <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-6xl">Your health deserves expert care, privacy and personal attention.</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">Start your conversation with Dr. Laila Nazir at Women Care Clinic in Hayatabad, Peshawar.</p>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <button onClick={() => setBookingOpen(true)} className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-100">Book Your Appointment <ArrowRight className="h-4 w-4" /></button>
                <div className="mt-3 grid gap-3 sm:grid-cols-2">
                  <a href={`tel:${phone}`} className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><Phone className="h-4 w-4" /> {displayPhone}</a>
                  <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"><MessageCircle className="h-4 w-4" /> WhatsApp</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-16 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:px-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose-500">Find us in Peshawar</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-950">Health Net Hospital, Phase 5 Hayatabad</h2>
              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600">Women Care Clinic, Peshawar, Pakistan.</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={mapUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"><MapPin className="h-4 w-4" /> Open in Google Maps</a>
                <a href={`tel:${phone}`} className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700"><Phone className="h-4 w-4" /> Call Clinic</a>
              </div>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-[#fbfaf7] p-6">
              <div className="flex items-center gap-3 text-slate-950"><Clock3 className="h-5 w-5 text-rose-500" /><span className="font-semibold">Clinic hours</span></div>
              <p className="mt-3 text-sm text-slate-600">Monday – Saturday</p>
              <p className="mt-1 text-lg font-semibold text-slate-950">5:00 PM – 9:00 PM</p>
              <p className="mt-4 text-xs leading-5 text-slate-500">Please confirm availability at the time of booking, as clinic timings may change.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-[#fbfaf7]">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-rose-100 text-rose-600"><HeartPulse className="h-5 w-5" /></div>
              <div>
                <div className="text-sm font-semibold text-slate-950">Women Care Clinic</div>
                <div className="text-xs text-slate-500">Expert, compassionate and privacy-focused women's healthcare in Peshawar.</div>
              </div>
            </div>
            <p className="mt-5 text-xs text-slate-400">© 2026 Women Care Clinic. All Rights Reserved.</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-600">
            <button onClick={() => navTo("about")} className="hover:text-slate-950">About</button>
            <button onClick={() => navTo("services")} className="hover:text-slate-950">Services</button>
            <button onClick={() => navTo("maternity")} className="hover:text-slate-950">Maternity Care</button>
            <button onClick={() => navTo("faqs")} className="hover:text-slate-950">FAQs</button>
            <a href={`tel:${phone}`} className="hover:text-slate-950">Contact</a>
          </div>
        </div>
      </footer>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-[0_-10px_30px_-20px_rgba(15,23,42,0.4)] backdrop-blur lg:hidden">
        <div className="mx-auto flex max-w-2xl gap-2">
          <button onClick={() => setBookingOpen(true)} className="flex-1 rounded-2xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white">Book Appointment</button>
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="flex items-center justify-center rounded-2xl border border-slate-200 px-4 py-3 text-slate-700" aria-label="WhatsApp"><MessageCircle className="h-5 w-5" /></a>
        </div>
      </div>
    </div>
  );
}
