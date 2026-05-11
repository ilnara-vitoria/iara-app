import Image from "next/image";
import { Sidebar } from "@/app/components/layout/Sidebar";
import { StatCard } from "@/app/components/dashboard/StatCard";
import { JobCard } from "@/app/components/dashboard/JobCard";
import { FilterBar } from "@/app/components/dashboard/FilterBar";

// ── Inline icons ────────────────────────────────────────────────────────────
const SparklesIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" />
    <path strokeLinecap="round" d="M19 3v4M21 5h-4" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13M22 2 15 22l-4-9-9-4 20-7Z" />
  </svg>
);

const TargetIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1" fill="currentColor" />
  </svg>
);

const BellIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0 1 18 14.158V11a6 6 0 0 0-5-5.917V5a1 1 0 1 0-2 0v.083A6 6 0 0 0 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 1 1-6 0v-1m6 0H9" />
  </svg>
);
// ─────────────────────────────────────────────────────────────────────────────

const jobs = [
  {
    title: "Senior Frontend Engineer",
    company: "TechNova Corp",
    location: "Remoto",
    type: "CLT",
    postedAt: "2 dias atrás",
    tags: ["React", "TypeScript", "Tailwind"],
    salaryRange: "R$ 12.000 - R$ 18.000",
    matchPercent: 94,
  },
  {
    title: "Product Designer",
    company: "Design Studios",
    location: "São Paulo, SP",
    type: "PJ",
    postedAt: "1 semana atrás",
    tags: ["Figma", "UI/UX", "Design System"],
    salaryRange: "R$ 8.000 - R$ 12.000",
    matchPercent: 89,
  },
  {
    title: "Desenvolvedora Full Stack",
    company: "StartupBR",
    location: "Híbrido – BH",
    type: "CLT",
    postedAt: "3 dias atrás",
    tags: ["Node.js", "React", "PostgreSQL"],
    salaryRange: "R$ 9.000 - R$ 14.000",
    matchPercent: 82,
  },
];

export default function EmpregosPage() {
  return (
    <div className="flex min-h-screen" style={{ background: "#F9F5FA" }}>
      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="flex-1 ml-64 flex flex-col min-h-screen">

        {/* ── Header ──────────────────────────────────────────────── */}
        <header
          className="sticky top-0 z-10 bg-white border-b shadow-sm"
          style={{ borderColor: "#EAD9EE" }}
        >
          <div className="flex items-center justify-between px-8 h-16">
            <h1 className="text-lg font-bold flex items-center gap-2" style={{ color: "#3E0014" }}>
              Olá, Marina Silva <span className="text-xl">👋</span>
            </h1>

            <div className="flex items-center gap-4">
              {/* Notificações */}
              <button
                aria-label="Notificações"
                className="relative p-2 rounded-full border bg-white shadow-sm hover:shadow-md transition-shadow"
                style={{ borderColor: "#EAD9EE", color: "#7A002B" }}
              >
                <BellIcon />
                <span
                  className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full border-2 border-white"
                  style={{ background: "#AC1634" }}
                />
              </button>

              {/* Usuária */}
              <div className="flex items-center gap-3 pl-4 border-l" style={{ borderColor: "#EAD9EE" }}>
                <div className="text-right">
                  <p className="text-sm font-bold leading-tight" style={{ color: "#3E0014" }}>Marina Silva</p>
                  <p className="text-xs" style={{ color: "#AC1634" }}>Candidata</p>
                </div>
                <div className="w-9 h-9 rounded-full overflow-hidden border-2" style={{ borderColor: "#E77291" }}>
                  <Image
                    src="/figma-assets/avatar-4.jpg"
                    alt="Marina Silva"
                    width={36}
                    height={36}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ── Body ────────────────────────────────────────────────── */}
        <div className="flex-1 px-8 py-8">

          {/* Stat cards */}
          <div className="flex gap-4 mb-8">
            <StatCard label="Vagas Recomendadas" value="24" icon={<SparklesIcon />} />
            <StatCard label="Candidaturas Enviadas" value="8" icon={<SendIcon />} />
            <StatCard label="Match Médio" value="88%" icon={<TargetIcon />} accent />
          </div>

          {/* Section title + filter tabs */}
          <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
            <div>
              <h2 className="text-xl font-bold" style={{ color: "#3E0014" }}>
                Vagas Recomendadas
              </h2>
              <p className="text-sm mt-0.5" style={{ color: "#7A002B" }}>
                Oportunidades selecionadas pela IA com base no seu perfil.
              </p>
            </div>
            <FilterBar />
          </div>

          {/* Lista de vagas */}
          <div className="space-y-4 max-w-4xl">
            {jobs.map((job) => (
              <JobCard key={job.title} {...job} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
