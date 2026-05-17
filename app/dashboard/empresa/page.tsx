import Link from "next/link";
import Image from "next/image";
import {
  CompanyDashboardLayout,
  CompanyIcon,
} from "@/app/components/company/CompanyDashboardLayout";

const metrics = [
  {
    title: "Vagas Ativas",
    value: "12",
    trend: "+2",
    icon: "briefcase",
    bg: "bg-[#FEF7F9]",
    color: "text-[#3E0014]",
  },
  {
    title: "Candidaturas",
    value: "486",
    trend: "+124",
    icon: "users",
    bg: "bg-[#FFFBFC]",
    color: "text-[#5B002C]",
  },
  {
    title: "Matches Gerados (IA)",
    value: "85%",
    trend: "Alto",
    icon: "trending",
    bg: "bg-[#FDF0F4]",
    color: "text-[#AC1634]",
  },
] as const;

const jobs = [
  {
    role: "Senior Frontend Engineer",
    dept: "Engenharia",
    mode: "Remoto",
    match: "94%",
    status: "Ativa",
    statusStyle: "bg-emerald-50 text-emerald-600",
    icon: "check",
  },
  {
    role: "Product Manager Pleno",
    dept: "Produto",
    mode: "Hibrido (SP)",
    match: "88%",
    status: "Em andamento",
    statusStyle: "bg-[#FEF7F9] text-[#AC1634]",
    icon: "clock",
  },
  {
    role: "Data Scientist",
    dept: "Dados",
    mode: "Remoto",
    match: "91%",
    status: "Ativa",
    statusStyle: "bg-emerald-50 text-emerald-600",
    icon: "check",
  },
  {
    role: "UX Researcher",
    dept: "Design",
    mode: "Presencial (RJ)",
    match: "N/A",
    status: "Pausada",
    statusStyle: "bg-slate-100 text-slate-600",
    icon: "clock",
  },
] as const;

const candidates = [
  {
    name: "Carolina Alves",
    role: "Senior Data Scientist",
    match: 98,
    img: "/figma-assets/avatar-1.jpg",
  },
  {
    name: "Juliana Santos",
    role: "Machine Learning Eng",
    match: 95,
    img: "/figma-assets/avatar-2.jpg",
  },
  {
    name: "Beatriz Lima",
    role: "Data Scientist",
    match: 91,
    img: "/figma-assets/avatar-3.jpg",
  },
] as const;

export default function CompanyDashboardPage() {
  return (
    <CompanyDashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <div>
            <h1 className="text-2xl font-bold text-slate-800">Visao Geral</h1>
            <p className="mt-1 text-slate-500">
              Acompanhe o desempenho das suas vagas exclusivas.
            </p>
          </div>

          <Link
            href="/dashboard/empresa/nova-vaga"
            className="inline-flex items-center gap-2 rounded-xl bg-[#3E0014] px-5 py-2.5 font-semibold text-white shadow-sm transition-all hover:bg-[#2C000E] active:scale-95"
          >
            <CompanyIcon name="plus" />
            Nova Vaga
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {metrics.map((metric) => (
            <article
              key={metric.title}
              className="flex items-start justify-between rounded-2xl border border-[#FDF0F4] bg-white p-6 shadow-sm"
            >
              <div>
                <p className="mb-1 font-medium text-slate-500">
                  {metric.title}
                </p>
                <div className="flex items-baseline gap-2">
                  <strong className="text-3xl font-black text-[#3E0014]">
                    {metric.value}
                  </strong>
                  <span className="rounded-md bg-slate-50 px-2 py-0.5 text-sm font-bold text-emerald-500">
                    {metric.trend}
                  </span>
                </div>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${metric.bg} ${metric.color}`}
              >
                <CompanyIcon name={metric.icon} />
              </div>
            </article>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-3">
          <section className="xl:col-span-2">
            <div className="overflow-hidden rounded-2xl border border-[#FDF0F4] bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-[#FFFBFC] p-6">
                <h2 className="text-lg font-bold text-[#3E0014]">
                  Vagas Recentes
                </h2>
                <div className="flex gap-2">
                  <button
                    className="rounded-lg bg-[#FFFBFC] p-2 text-slate-400 transition-colors hover:bg-[#FEF7F9] hover:text-[#5B002C]"
                    aria-label="Buscar vagas"
                  >
                    <CompanyIcon name="search" />
                  </button>
                  <button
                    className="rounded-lg bg-[#FFFBFC] p-2 text-slate-400 transition-colors hover:bg-[#FEF7F9] hover:text-[#5B002C]"
                    aria-label="Filtrar vagas"
                  >
                    <CompanyIcon name="filter" />
                  </button>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-[720px] text-left">
                  <thead className="bg-[#FFFBFC] text-xs font-bold uppercase tracking-wider text-slate-500">
                    <tr>
                      <th className="px-6 py-4">Vaga</th>
                      <th className="px-6 py-4">Modalidade</th>
                      <th className="px-6 py-4">Match IA Medio</th>
                      <th className="px-6 py-4">Status</th>
                      <th className="px-6 py-4 text-right">Acao</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#FFFBFC]">
                    {jobs.map((job) => (
                      <tr
                        key={job.role}
                        className="transition-colors hover:bg-[#FFFBFC]"
                      >
                        <td className="px-6 py-4">
                          <p className="text-sm font-bold text-[#3E0014]">
                            {job.role}
                          </p>
                          <p className="text-xs text-slate-500">{job.dept}</p>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-slate-600">
                          {job.mode}
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <div className="h-1.5 w-full max-w-[60px] rounded-full bg-[#FDF0F4]">
                              {job.match !== "N/A" ? (
                                <div
                                  className="h-1.5 rounded-full bg-[#5B002C]"
                                  style={{ width: job.match }}
                                />
                              ) : null}
                            </div>
                            <span className="text-sm font-bold text-slate-700">
                              {job.match}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span
                            className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-bold uppercase tracking-wider ${job.statusStyle}`}
                          >
                            <CompanyIcon name={job.icon} className="h-3 w-3" />
                            {job.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button
                            className="text-slate-400 hover:text-[#5B002C]"
                            aria-label={`Ver opcoes para ${job.role}`}
                          >
                            <CompanyIcon name="more" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <aside>
            <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-[#3E0014] to-[#2C000E] p-6 text-white shadow-xl">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#5B002C]/40 blur-xl" />

              <div className="relative z-10 mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-lg font-bold">
                  <CompanyIcon
                    name="trending"
                    className="h-5 w-5 text-[#E77291]"
                  />
                  Ranking IA
                </h2>
                <span className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold">
                  Vaga: Data Sci...
                </span>
              </div>

              <p className="relative z-10 mb-6 text-sm text-slate-300">
                Candidatas com maior aderencia cultural e tecnica para a vaga
                selecionada.
              </p>

              <div className="relative z-10 space-y-4">
                {candidates.map((candidate, index) => (
                  <div
                    key={candidate.name}
                    className="group flex cursor-pointer items-center justify-between rounded-xl border border-white/10 bg-white/5 p-3 transition-colors hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <Image
                          src={candidate.img}
                          alt={candidate.name}
                          width={40}
                          height={40}
                          className="h-10 w-10 rounded-full border-2 border-transparent object-cover transition-colors group-hover:border-[#E77291]"
                        />
                        {index === 0 ? (
                          <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#3E0014] bg-yellow-400 text-[10px] font-black text-[#3E0014]">
                            1
                          </span>
                        ) : null}
                      </div>
                      <div>
                        <h3 className="text-sm font-bold text-white">
                          {candidate.name}
                        </h3>
                        <p className="text-xs text-slate-300">
                          {candidate.role}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <strong className="text-sm font-black text-[#E77291]">
                        {candidate.match}%
                      </strong>
                      <p className="text-[10px] font-bold uppercase text-slate-400">
                        Match
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/dashboard/empresa/talentos"
                className="relative z-10 mt-6 block w-full rounded-xl bg-white/10 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-white/20"
              >
                Ver todas as candidatas
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </CompanyDashboardLayout>
  );
}
