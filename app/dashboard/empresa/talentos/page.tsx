import Image from "next/image";
import {
  CompanyDashboardLayout,
  CompanyIcon,
} from "@/app/components/company/CompanyDashboardLayout";

const stats = [
  { label: "Talentos no banco", value: "1.248", icon: "users" },
  { label: "Alta aderencia", value: "312", icon: "trending" },
  { label: "Disponiveis agora", value: "87", icon: "check" },
] as const;

const talents = [
  {
    name: "Carolina Alves",
    role: "Senior Data Scientist",
    location: "Sao Paulo, SP",
    experience: "8 anos",
    match: 98,
    status: "Disponivel",
    img: "/figma-assets/avatar-1.jpg",
    skills: ["Python", "ML Ops", "Data Storytelling"],
  },
  {
    name: "Juliana Santos",
    role: "Machine Learning Engineer",
    location: "Remoto",
    experience: "6 anos",
    match: 95,
    status: "Em entrevista",
    img: "/figma-assets/avatar-2.jpg",
    skills: ["NLP", "AWS", "TensorFlow"],
  },
  {
    name: "Beatriz Lima",
    role: "Product Designer",
    location: "Rio de Janeiro, RJ",
    experience: "5 anos",
    match: 92,
    status: "Disponivel",
    img: "/figma-assets/avatar-3.jpg",
    skills: ["UX Research", "Design System", "Figma"],
  },
  {
    name: "Marina Silva",
    role: "Frontend Engineer",
    location: "Belo Horizonte, MG",
    experience: "7 anos",
    match: 90,
    status: "Nova no banco",
    img: "/figma-assets/avatar-4.jpg",
    skills: ["React", "TypeScript", "Acessibilidade"],
  },
] as const;

const filters = ["Todas", "Alta aderencia", "Disponiveis", "Dados", "Produto"];

export default function TalentBankPage() {
  return (
    <CompanyDashboardLayout>
      <div className="space-y-8">
        <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-end">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FDF0F4] bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#AC1634] shadow-sm">
              <CompanyIcon name="sparkle" className="h-4 w-4" />
              Matching com IA
            </span>
            <h1 className="mt-4 text-3xl font-black text-[#3E0014]">
              Banco de Talentos
            </h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
              Encontre candidatas qualificadas, salvas pela plataforma e
              ranqueadas por aderencia tecnica, cultural e disponibilidade.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:flex-row xl:w-auto">
            <label className="relative flex-1 xl:w-80">
              <span className="sr-only">Buscar talento</span>
              <CompanyIcon
                name="search"
                className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                placeholder="Buscar por cargo, skill ou nome"
                className="h-11 w-full rounded-xl border border-[#EAD9EE] bg-white pl-11 pr-4 text-sm font-medium text-[#3E0014] outline-none transition focus:border-[#AC1634]"
              />
            </label>
            <button className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-[#EAD9EE] bg-white px-4 text-sm font-bold text-[#5B002C] shadow-sm transition hover:bg-[#FEF7F9]">
              <CompanyIcon name="filter" className="h-4 w-4" />
              Filtros
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <article
              key={stat.label}
              className="rounded-2xl border border-[#FDF0F4] bg-white p-5 shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm font-medium text-slate-500">
                    {stat.label}
                  </p>
                  <strong className="mt-2 block text-3xl font-black text-[#3E0014]">
                    {stat.value}
                  </strong>
                </div>
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-xl ${
                    index === 1 ? "bg-[#FDF0F4]" : "bg-[#FEF7F9]"
                  } text-[#7A002B]`}
                >
                  <CompanyIcon name={stat.icon} />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="flex gap-2 overflow-x-auto pb-1">
          {filters.map((filter, index) => (
            <button
              key={filter}
              className={`shrink-0 rounded-full border px-4 py-2 text-sm font-bold transition ${
                index === 0
                  ? "border-[#3E0014] bg-[#3E0014] text-white"
                  : "border-[#EAD9EE] bg-white text-[#5B002C] hover:bg-[#FEF7F9]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-8 xl:grid-cols-[minmax(0,1fr)_360px]">
          <section className="space-y-4">
            {talents.map((talent) => (
              <article
                key={talent.name}
                className="rounded-2xl border border-[#FDF0F4] bg-white p-5 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex min-w-0 gap-4">
                    <Image
                      src={talent.img}
                      alt={talent.name}
                      width={64}
                      height={64}
                      className="h-16 w-16 shrink-0 rounded-2xl object-cover"
                    />
                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-lg font-black text-[#3E0014]">
                          {talent.name}
                        </h2>
                        <span className="rounded-md bg-[#FEF7F9] px-2 py-1 text-xs font-bold text-[#AC1634]">
                          {talent.status}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-bold text-[#5B002C]">
                        {talent.role}
                      </p>
                      <p className="mt-1 text-sm text-slate-500">
                        {talent.location} - {talent.experience} de experiencia
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {talent.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-full border border-[#EAD9EE] bg-[#FFFBFC] px-3 py-1 text-xs font-bold text-[#5B002C]"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 lg:min-w-[260px] lg:justify-end">
                    <div className="min-w-[110px]">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="text-xs font-bold uppercase text-slate-400">
                          Match IA
                        </span>
                        <strong className="text-lg font-black text-[#AC1634]">
                          {talent.match}%
                        </strong>
                      </div>
                      <div className="mt-2 h-2 rounded-full bg-[#FDF0F4]">
                        <div
                          className="h-2 rounded-full bg-[#5B002C]"
                          style={{ width: `${talent.match}%` }}
                        />
                      </div>
                    </div>
                    <button className="rounded-xl bg-[#3E0014] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#2C000E]">
                      Ver perfil
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <aside className="rounded-2xl border border-[#FDF0F4] bg-white p-6 shadow-sm">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#FEF7F9] text-[#AC1634]">
              <CompanyIcon name="trending" />
            </div>
            <h2 className="mt-5 text-xl font-black text-[#3E0014]">
              Prioridade da semana
            </h2>
            <p className="mt-3 text-sm leading-6 text-slate-500">
              A IA identificou forte demanda por perfis de dados com
              experiencia em produto. As candidatas acima foram ordenadas por
              match com a vaga de Data Scientist.
            </p>

            <div className="mt-6 rounded-2xl bg-[#FFFBFC] p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#AC1634]">
                Melhor oportunidade
              </p>
              <h3 className="mt-2 font-black text-[#3E0014]">
                Carolina Alves
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                98% de match, senioridade alta e disponibilidade imediata.
              </p>
            </div>

            <button className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#3E0014] bg-white px-4 py-3 text-sm font-black text-[#3E0014] transition hover:bg-[#FEF7F9]">
              <CompanyIcon name="plus" className="h-4 w-4" />
              Criar shortlist
            </button>
          </aside>
        </div>
      </div>
    </CompanyDashboardLayout>
  );
}
