"use client";

import { useState } from "react";
import type { SVGProps } from "react";

// ── Palette ────────────────────────────────────────────────────────────────
// #3E0014 | #5B002C | #7A002B | #AC1634 | #E77291

// ── Slide data ────────────────────────────────────────────────────────────
type Slide = {
  icon: "trend" | "target" | "briefcase";
  label: string;
  title: string;
  value: string;
  description: string;
  source?: string;
  gradient: string; // tailwind gradient classes for icon ring bg
};

const slides: Slide[] = [
  {
    icon: "target",
    label: "Desigualdade ainda maior",
    title: "Mulheres negras",
    value: "",
    description:
      "Mulheres pretas e pardas são as mais afetadas pelo desemprego e falta de oportunidades no mercado formal.",
    gradient: "from-[#5B002C] to-[#3E0014]",
  },
  {
    icon: "trend",
    label: "Menos mulheres empregadas",
    title: "",
    value: "49,1%",
    description:
      "Apenas 49,1% das mulheres estão empregadas, contra 68,8% dos homens.",
    source: "IBGE",
    gradient: "from-[#AC1634] to-[#7A002B]",
  },
  {
    icon: "briefcase",
    label: "Pouca presença na liderança",
    title: "",
    value: "39%",
    description:
      "Apenas 39% dos cargos de liderança são ocupados por mulheres.",
    gradient: "from-[#7A002B] to-[#5B002C]",
  },
  {
    icon: "trend",
    label: "Mulheres no tech",
    title: "",
    value: "21%",
    description:
      "Somente 21% dos profissionais de tecnologia no Brasil são mulheres.",
    source: "IBGE",
    gradient: "from-[#AC1634] to-[#3E0014]",
  },
];

// ── Icons ──────────────────────────────────────────────────────────────────
function SlideIcon({
  name,
  featured,
  ...props
}: SVGProps<SVGSVGElement> & { name: Slide["icon"]; featured: boolean }) {
  const cls = `${featured ? "w-8 h-8" : "w-6 h-6"} text-white`;
  const common = {
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    viewBox: "0 0 24 24",
    className: cls,
    "aria-hidden": true,
    ...props,
  };
  switch (name) {
    case "trend":
      return (
        <svg {...common}>
          <polyline points="3 17 9 11 13 15 21 7" />
          <polyline points="16 7 21 7 21 12" />
        </svg>
      );
    case "target":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <circle cx="12" cy="12" r="5" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
  }
}

// ── Component ─────────────────────────────────────────────────────────────
export function StatsCarousel() {
  const [active, setActive] = useState(1); // start with center featured

  const prev = () => setActive((a) => (a - 1 + slides.length) % slides.length);
  const next = () => setActive((a) => (a + 1) % slides.length);

  // Three visible indexes: left, center, right
  const leftIdx = (active - 1 + slides.length) % slides.length;
  const rightIdx = (active + 1) % slides.length;

  return (
    <section
      className="relative overflow-hidden py-20 px-4"
      style={{
        background:
          "linear-gradient(160deg, #3E0014 0%, #5B002C 40%, #7A002B 70%, #3E0014 100%)",
      }}
    >
      {/* Decorative waves top */}
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-16 opacity-20"
        style={{
          background:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 64'%3E%3Cpath fill='white' d='M0,32 C360,64 1080,0 1440,32 L1440,0 L0,0 Z'/%3E%3C/svg%3E\") bottom/cover no-repeat",
        }}
      />

      {/* ── Carousel track ─────────────────────────────────────── */}
      <div className="relative mx-auto max-w-5xl flex items-center gap-4 justify-center min-h-[320px]">
        {/* Prev arrow */}
        <button
          onClick={prev}
          aria-label="Slide anterior"
          className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        {/* Left slide */}
        <SideSlide slide={slides[leftIdx]} onClick={prev} />

        {/* Featured center slide */}
        <FeaturedSlide slide={slides[active]} />

        {/* Right slide */}
        <SideSlide slide={slides[rightIdx]} onClick={next} />

        {/* Next arrow */}
        <button
          onClick={next}
          aria-label="Próximo slide"
          className="shrink-0 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* ── Caption ─────────────────────────────────────────────── */}
      <p className="mt-8 text-center text-sm font-semibold text-white/80 flex items-center justify-center gap-2">
        <span className="text-[#E77291]">♥</span>
        Esse dado mostra a necessidade de espaço profissional feito para mulheres.
      </p>

      {/* ── Dot indicators ──────────────────────────────────────── */}
      <div className="mt-6 flex justify-center gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === active ? 28 : 10,
              height: 10,
              background: i === active ? "#AC1634" : "rgba(255,255,255,0.3)",
            }}
          />
        ))}
      </div>
    </section>
  );
}

// ── Side slide ────────────────────────────────────────────────────────────
function SideSlide({ slide, onClick }: { slide: Slide; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group hidden sm:flex shrink-0 w-52 flex-col items-center gap-4 rounded-2xl border border-slate-200/40 bg-white/[0.08] hover:bg-white/[0.16] p-6 text-white text-center transition-all duration-300 cursor-pointer"
      aria-label={`Ver slide: ${slide.label}`}
    >
      {/* Icon with white ring */}
      <div className="relative">
        <div className="absolute inset-0 rounded-full bg-white/20 scale-125" />
        <div
          className={`relative z-10 w-14 h-14 rounded-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center ring-2 ring-white/60`}
        >
          <SlideIcon name={slide.icon} featured={false} />
        </div>
      </div>
      <p className="text-xs font-medium text-white/60 group-hover:text-white/80 transition-colors">
        {slide.label}
      </p>
      <p className="text-lg font-black leading-tight">
        {slide.value || slide.title}
      </p>
      <p className="text-xs text-white/50 group-hover:text-white/70 line-clamp-2 transition-colors">
        {slide.description}
      </p>
    </button>
  );
}

// ── Featured center slide ─────────────────────────────────────────────────
function FeaturedSlide({ slide }: { slide: Slide }) {
  return (
    <div className="relative shrink-0 w-72 sm:w-80">
      {/* Glow behind card */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-3xl blur-2xl opacity-40 scale-110"
        style={{
          background:
            "radial-gradient(ellipse, #E77291 0%, #AC1634 60%, transparent 100%)",
        }}
      />

      {/* Card */}
      <div
        className="relative z-10 rounded-3xl p-7 text-center flex flex-col items-center gap-4 border-2"
        style={{
          background:
            "linear-gradient(160deg, #FEF7F9 0%, #ffffff 50%, #FDF0F4 100%)",
          borderColor: "#E77291",
        }}
      >
        {/* Icon with white ring + gradient bg */}
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-[#E77291]/20 scale-[1.4]" />
          <div
            className={`relative z-10 w-16 h-16 rounded-full bg-gradient-to-br ${slide.gradient} flex items-center justify-center ring-4 ring-white shadow-lg`}
          >
            <SlideIcon name={slide.icon} featured={true} />
          </div>
        </div>

        {/* Label */}
        {slide.label && (
          <p className="text-sm font-bold text-[#7A002B]/80">{slide.label}</p>
        )}

        {/* Main value */}
        {slide.value && (
          <span
            className="text-5xl font-black bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #7A002B, #AC1634)",
            }}
          >
            {slide.value}
          </span>
        )}

        {/* Title (for slides without a big value) */}
        {slide.title && (
          <span
            className="text-3xl font-black bg-clip-text text-transparent"
            style={{
              backgroundImage: "linear-gradient(135deg, #7A002B, #AC1634)",
            }}
          >
            {slide.title}
          </span>
        )}

        {/* Decorative line */}
        <div
          className="w-10 h-0.5 rounded-full"
          style={{ background: "#E77291" }}
        />

        {/* Description */}
        <p className="text-sm leading-6 font-medium text-[#5B002C]/80 max-w-[220px]">
          {slide.description}
        </p>

        {/* Source */}
        {slide.source && (
          <p
            className="text-xs font-black uppercase tracking-widest"
            style={{ color: "#5B002C" }}
          >
            — Fonte: {slide.source} —
          </p>
        )}
      </div>
    </div>
  );
}
