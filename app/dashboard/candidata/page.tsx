import Link from "next/link";
import type { Metadata } from "next";
import { CandidateDashboardLayout } from "@/app/components/candidate/CandidateDashboardLayout";
import { CandidateIcon } from "@/app/components/candidate/CandidateIcon";
import {
  getCandidateProfile,
  type CandidateExperience,
  type CandidateInfoItem,
  type RecommendedJob,
} from "@/app/lib/candidateProfile";

export const metadata: Metadata = {
  title: "Perfil da Candidata | Iara",
  description: "Perfil profissional da candidata na plataforma Iara.",
};

function CompletionCard({
  percentage,
  description,
  actions,
}: {
  percentage: number;
  description: string;
  actions: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <section className="rounded-[18px] border border-[#F1E5EF] bg-white p-6 shadow-[0_8px_28px_rgba(91,0,44,0.06)]">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="flex items-center gap-3 text-xl font-black text-[#3E0014]">
            <span className="flex h-6 w-6 items-center justify-center rounded-full text-[#15B989]">
              <CandidateIcon name="checkCircle" className="h-5 w-5" />
            </span>
            Seu perfil está {percentage}% completo
          </h2>
          <p className="mt-2 text-sm leading-6 text-[#667085]">
            {description}
          </p>
        </div>
        <strong className="text-3xl font-black leading-none text-[#AC1634] sm:text-4xl">
          {percentage}%
        </strong>
      </div>

      <div className="mt-5 h-3 rounded-full bg-[#FEF1F6]">
        <div
          className="h-3 rounded-full bg-gradient-to-r from-[#5B002C] to-[#C21646]"
          style={{ width: `${percentage}%` }}
        />
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row">
        {actions.map((action, index) => (
          <Link
            key={action.label}
            href={action.href}
            className={`inline-flex h-11 items-center justify-center rounded-xl px-5 text-sm font-bold transition ${
              index === 0
                ? "bg-[#FFFBFC] text-[#7A002B] shadow-[0_8px_18px_rgba(91,0,44,0.04)] hover:bg-[#FEF7F9]"
                : "text-[#475467] hover:bg-[#FFFBFC] hover:text-[#5B002C]"
            }`}
          >
            {action.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

function InfoCard({
  info,
  professionalLinks,
}: {
  info: ReadonlyArray<CandidateInfoItem>;
  professionalLinks: ReadonlyArray<{
    label: string;
    href: string;
    icon: CandidateInfoItem["icon"];
  }>;
}) {
  return (
    <section className="rounded-[18px] border border-[#F1E5EF] bg-white p-6 shadow-[0_8px_28px_rgba(91,0,44,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-3 text-xl font-black text-[#3E0014]">
          <span className="text-[#7A002B]">
            <CandidateIcon name="profile" className="h-6 w-6" />
          </span>
          Informações do Perfil
        </h2>
        <Link
          href="/dashboard/candidata/editar"
          className="text-sm font-bold text-[#AC1634] hover:text-[#7A002B]"
        >
          Editar Perfil
        </Link>
      </div>

      <div className="mt-7 grid gap-x-8 gap-y-6 sm:grid-cols-2">
        {info.map((item) => (
          <div key={item.label} className="flex min-w-0 items-center gap-4">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#FFFBFC] text-[#AC1634]">
              <CandidateIcon name={item.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-wide text-[#667085]">
                {item.label}
              </p>
              <p className="mt-1 truncate text-sm font-bold text-[#111827]">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-7 border-t border-[#F5EDF4] pt-5">
        <p className="text-xs font-bold uppercase tracking-wide text-[#667085]">
          Links profissionais
        </p>
        <div className="mt-3 flex flex-wrap gap-3">
          {professionalLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="inline-flex h-10 items-center gap-2 rounded-xl bg-[#FFFBFC] px-4 text-sm font-bold text-[#5B002C] transition hover:bg-[#FEF1F6]"
            >
              <CandidateIcon name={item.icon} className="h-4 w-4" />
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExperienceCard({
  experiences,
}: {
  experiences: ReadonlyArray<CandidateExperience>;
}) {
  return (
    <section className="rounded-[18px] border border-[#F1E5EF] bg-white p-6 shadow-[0_8px_28px_rgba(91,0,44,0.06)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="flex items-center gap-3 text-lg font-black text-[#3E0014] sm:text-xl">
          <span className="text-[#7A002B]">
            <CandidateIcon name="briefcase" className="h-6 w-6" />
          </span>
          Experiência Profissional
        </h2>
        <Link
          href="/dashboard/candidata/experiencias/nova"
          className="inline-flex items-center gap-1 text-sm font-bold text-[#7A002B] hover:text-[#AC1634]"
        >
          <CandidateIcon name="plus" className="h-4 w-4" />
          Adicionar
        </Link>
      </div>

      <div className="mt-7 space-y-8">
        {experiences.map((experience, index) => (
          <article key={`${experience.role}-${experience.company}`} className="relative flex gap-4">
            {index < experiences.length - 1 ? (
              <span className="absolute left-[19px] top-11 h-[calc(100%+1.25rem)] w-px bg-[#F1E5EF]" />
            ) : null}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#E7B6C8] bg-white text-[#7A002B]">
              <CandidateIcon name="trending" className="h-5 w-5" />
            </div>
            <div className="min-w-0 pt-1">
              <h3 className="text-base font-black text-[#1F2937]">
                {experience.role}
              </h3>
              <p className="mt-1 text-sm">
                <span className="font-black text-[#5B002C]">
                  {experience.company}
                </span>
                <span className="ml-2 text-[#98A2B3]">{experience.period}</span>
              </p>
              <p className="mt-3 max-w-[520px] text-sm leading-6 text-[#667085]">
                {experience.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function RecommendedJobs({ jobs }: { jobs: ReadonlyArray<RecommendedJob> }) {
  return (
    <aside className="rounded-[18px] bg-[#65001F] p-6 text-white shadow-[0_20px_42px_rgba(91,0,44,0.28)] xl:sticky xl:top-28">
      <h2 className="flex items-center gap-3 text-xl font-black">
        <CandidateIcon name="zap" className="h-6 w-6 text-[#FACC15]" />
        Vagas Recomendadas
      </h2>
      <p className="mt-4 text-sm leading-6 text-[#F8C9D6]">
        Selecionadas pela nossa IA com base no seu perfil, momento de carreira
        e aderência cultural.
      </p>

      <div className="mt-7 space-y-4">
        {jobs.map((job) => (
          <article
            key={`${job.company}-${job.title}`}
            className="rounded-2xl border border-white/10 bg-white/10 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="max-w-[160px] text-base font-black leading-6">
                  {job.title}
                </h3>
                <p className="mt-1 text-xs font-medium text-[#F0A8BA]">
                  {job.company} • {job.location}
                </p>
              </div>
              {job.badge ? (
                <span className="rounded-md bg-[#C21646] px-2.5 py-1 text-[10px] font-black uppercase tracking-wide text-white">
                  {job.badge}
                </span>
              ) : null}
            </div>

            <div className="mt-5 border-t border-white/10 pt-4">
              <div className="flex items-center justify-between gap-4">
                <span className="flex items-center gap-2 text-sm font-black text-[#15D99B]">
                  <span className="h-2 w-2 rounded-full bg-[#15D99B]" />
                  {job.matchPercentage}% Match
                </span>
                <Link
                  href="/empregos"
                  className="inline-flex h-8 items-center gap-1 rounded-xl bg-white/12 px-3 text-xs font-black text-white transition hover:bg-white/20"
                >
                  Ver vaga
                  <CandidateIcon name="chevronRight" className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link
        href="/empregos"
        className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/20 text-sm font-black text-white transition hover:bg-white/10"
      >
        Ver todas as recomendações
      </Link>
    </aside>
  );
}

export default async function CandidateProfilePage() {
  const profile = await getCandidateProfile();

  return (
    <CandidateDashboardLayout
      profile={{
        name: profile.name,
        title: profile.title,
        avatarUrl: profile.avatarUrl,
      }}
    >
      <div className="mx-auto grid max-w-[930px] gap-8 xl:grid-cols-[minmax(0,600px)_282px] xl:items-start">
        <div className="space-y-8">
          <CompletionCard
            percentage={profile.completionPercentage}
            description={profile.completionDescription}
            actions={profile.completionActions}
          />
          <InfoCard
            info={profile.info}
            professionalLinks={profile.professionalLinks}
          />
          <ExperienceCard experiences={profile.experiences} />
        </div>

        <RecommendedJobs jobs={profile.recommendedJobs} />
      </div>
    </CandidateDashboardLayout>
  );
}
