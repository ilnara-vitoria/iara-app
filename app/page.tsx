import Image from "next/image";
import type { SVGProps } from "react";
import { StatsCarousel } from "./components/landing/StatsCarousel";

const steps = [
  {
    icon: "user",
    title: "1. Seu perfil em poucos minutos",
    text: "Conte suas experiências, habilidades e objetivos. A gente te ajuda a organizar tudo de forma simples e estratégica.",
  },
  {
    icon: "brain",
    title: "2. Encontramos vagas certas para você",
    text: "Nossa tecnologia cruza seu perfil com milhares de vagas e identifica onde você realmente tem chance.",
  },
  {
    icon: "bolt",
    title: "3. Oportunidades que fazem sentido",
    text: "Você só recebe vagas com alto match com o seu perfil. Chega de enviar currículo e não ter retorno.",
  },
] as const;

const candidateBenefits = [
  "Criar currículo otimizado com IA",
  "Receber vagas exclusivas com alto match",
  "Feedback detalhado sobre aderência às vagas",
  "Dashboard de progresso e trilha de carreira",
];

const companyBenefits = [
  "Publicar vagas e gerenciar fluxo sem esforço",
  "Filtrar candidatas ranqueadas por IA",
  "Matching inteligente focado em soft/hard skills",
  "Relatórios automatizados de diversidade e inclusão",
];

const aiCards = [
  {
    icon: "search",
    title: "NLP Avançado",
    text: "Lê currículos e extrai contexto, não apenas palavras-chave.",
  },
  {
    icon: "target",
    title: "Matching Inteligente",
    text: "Cruza mais de 50 datapoints entre candidata e vaga.",
  },
  {
    icon: "brain",
    title: "Aprendizado Contínuo",
    text: "A IA melhora a cada contratação bem-sucedida.",
  },
  {
    icon: "bolt",
    title: "Score Dinâmico",
    text: "Avaliação que evolui conforme novos testes são feitos.",
  },
] as const;

const differences = [
  { icon: "users", title: "Foco Feminino" },
  { icon: "sparkle", title: "Empoderamento" },
  { icon: "target", title: "Comunidade" },
  { icon: "shield", title: "Segurança LGPD" },
  { icon: "award", title: "Canal de denúncias" },
] as const;

type IconName =
  | "arrow"
  | "award"
  | "bolt"
  | "brain"
  | "check"
  | "search"
  | "shield"
  | "sparkle"
  | "target"
  | "user"
  | "users";

function Icon({
  name,
  ...props
}: SVGProps<SVGSVGElement> & { name: IconName }) {
  const commonProps = {
    ...props,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...commonProps}>
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      );
    case "award":
      return (
        <svg {...commonProps}>
          <path d="M12 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
          <path d="m8.5 14.5-.8 5.2 4.3-2.3 4.3 2.3-.8-5.2" />
        </svg>
      );
    case "bolt":
      return (
        <svg {...commonProps}>
          <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
        </svg>
      );
    case "brain":
      return (
        <svg {...commonProps}>
          <path d="M8 4.5A3 3 0 0 0 5 7.4v.3A3.5 3.5 0 0 0 3 11c0 1.4.8 2.7 2 3.3v.2A3.5 3.5 0 0 0 8.5 18H9V4.5H8Z" />
          <path d="M16 4.5a3 3 0 0 1 3 2.9v.3a3.5 3.5 0 0 1 2 3.3c0 1.4-.8 2.7-2 3.3v.2a3.5 3.5 0 0 1-3.5 3.5H15V4.5h1Z" />
          <path d="M9 8.5H7.5" />
          <path d="M15 8.5h1.5" />
          <path d="M9 13H7" />
          <path d="M15 13h2" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <path d="m8.5 12 2.4 2.4 4.8-5" />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m16.5 16.5 4 4" />
        </svg>
      );
    case "shield":
      return (
        <svg {...commonProps}>
          <path d="M12 3 19 6v5c0 4.5-2.8 7.8-7 10-4.2-2.2-7-5.5-7-10V6l7-3Z" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...commonProps}>
          <path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" />
          <path d="M19 3v4" />
          <path d="M21 5h-4" />
        </svg>
      );
    case "target":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="12" cy="12" r="1" />
        </svg>
      );
    case "user":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="3" />
          <path d="M6 20a6 6 0 0 1 12 0" />
        </svg>
      );
    case "users":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="M16 11a3 3 0 0 0 0-6" />
          <path d="M18 19a5 5 0 0 0-3-4.6" />
        </svg>
      );
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#421657]">
      <header className="sticky top-0 z-30 h-20 border-b border-[#eadfec] bg-white/95 shadow-[0_1px_5px_rgba(66,22,87,0.12)] backdrop-blur">
        <div className="mx-auto flex h-full max-w-[1280px] items-center justify-between px-4 sm:px-8">
          <a
            href="#topo"
            className="flex h-12 w-28 items-center justify-center rounded-sm bg-white shadow-[0_2px_9px_rgba(17,24,39,0.12)]"
            aria-label="Iara"
          >
            <Image
              src="/figma-assets/logonova.jpeg"
              alt="Iara"
              width={100}
              height={43}
              priority
              className="h-auto w-[100px]"
            />
          </a>

          <nav className="hidden items-center gap-9 text-[13px] font-bold text-[#3f4f6b] lg:flex">
            <a href="#como-funciona">Como funciona</a>
            <a href="#candidatas">Para candidatas</a>
            <a href="#empresas">Para empresas</a>
            <a href="#tecnologia">Tecnologia IA</a>
          </nav>

          <div className="flex items-center gap-4 text-[13px] font-extrabold">
            <a href="#entrar" className="hidden text-[#421657] sm:inline-flex">
              Entrar
            </a>
            <a
              href="#candidatas"
              className="inline-flex h-10 items-center justify-center rounded-xl bg-[#d64991] px-5 text-white shadow-[0_8px_18px_rgba(214,73,145,0.32)] transition hover:bg-[#c83b83]"
            >
              Criar conta grátis
            </a>
          </div>
        </div>
      </header>

      <section
        id="topo"
        className="mx-auto grid max-w-[1280px] items-center gap-12 px-8 pb-16 pt-0 lg:min-h-[840px] lg:grid-cols-[1fr_575px] lg:gap-14"
      >
        <div className="max-w-[620px] pt-10 lg:mt-0 lg:pt-0">
          <div className="relative top-3 mb-9 inline-flex h-[38px] items-center gap-2 rounded-full border border-[#ecdfee] bg-[#fbf4fb] px-4 text-sm font-semibold text-[#8b3889]">
            <Icon name="sparkle" className="h-4 w-4" />
            Exclusivo para mulheres
          </div>

          <h1 className="max-w-[610px] text-[44px] font-black leading-[1.1] text-[#421657] sm:text-[60px] lg:text-[62px]">
            Oportunidades de trabalho pensadas{" "}
            <span className="block text-[#d64991]">para você</span>
          </h1>

          <p className="mt-6 max-w-[560px] text-lg leading-8 text-[#425572]">
            Nossa plataforma conecta você a oportunidades de acordo com seu
            perfil.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#candidatas"
              className="inline-flex h-[62px] items-center justify-center gap-3 rounded-[13px] bg-[#d64991] px-8 text-lg font-extrabold text-white shadow-[0_10px_22px_rgba(214,73,145,0.28)] transition hover:bg-[#c83b83]"
            >
              Buscar vagas agora
              <Icon name="arrow" className="h-5 w-5" />
            </a>
            <a
              href="#como-funciona"
              className="inline-flex h-[62px] items-center justify-center rounded-[13px] border border-[#dfe5ef] bg-white px-8 text-lg font-extrabold text-[#421657] shadow-[0_3px_9px_rgba(15,23,42,0.08)] transition hover:bg-[#fbf8fc]"
            >
              Saber mais
            </a>
          </div>
        </div>

        <div className="relative min-h-[620px] overflow-hidden rounded-[15px] border-[5px] border-white bg-[#421657] shadow-[0_22px_44px_rgba(40,13,54,0.16)] lg:h-[758px]">
          <Image
            src="/figma-assets/image-3.png"
            alt="Engenheira mecânica trabalhando"
            fill
            priority
            sizes="(min-width: 1024px) 566px, 100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#44195c]/90 via-[#44195c]/20 to-transparent" />

          <div className="absolute left-8 top-8 inline-flex h-12 items-center gap-3 rounded-[14px] bg-white px-5 text-base font-extrabold text-[#421657] shadow-[0_12px_28px_rgba(38,12,50,0.18)]">
            <span className="h-3 w-3 rounded-full bg-[#68d8a4]" />
            Contratada via Iara
          </div>

          <div className="absolute inset-x-8 bottom-8 rounded-[14px] border border-white/25 bg-white/20 p-6 text-white shadow-[0_18px_35px_rgba(22,8,34,0.28)] backdrop-blur-xl">
            <div className="flex items-start justify-between gap-5">
              <div>
                <h2 className="text-2xl font-black">Juliana Costa</h2>
                <p className="mt-1 text-base font-extrabold text-white/90">
                  Engenheira Mecânica
                </p>
              </div>
              <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-2xl border border-white/25 bg-[#d64991]/70 text-center shadow-inner">
                <strong className="text-[27px] leading-none">98%</strong>
                <span className="mt-1 text-xs font-black uppercase">Match</span>
              </div>
            </div>

            <div className="mt-5 flex gap-4 rounded-[11px] bg-[#54206d]/88 px-5 py-4 text-base font-extrabold leading-7">
              <Icon
                name="bolt"
                className="mt-1 h-6 w-6 shrink-0 text-[#d64991]"
              />
              <p>
                Conhecimento em softwares de CAD/CAE. Capacidade de resolução
                de problemas, liderança e comunicação técnica.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsCarousel />

      <section className="relative flex min-h-[550px] items-center justify-center overflow-hidden px-8 py-24 text-center text-white">
        <Image
          src="/figma-assets/transformation-bg.jpg"
          alt="Mulher estudando em ambiente de trabalho"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#d64991]/62 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#421657]/25 via-[#d64991]/20 to-[#d64991]/28" />
        <div className="relative z-10 mx-auto max-w-[760px]">
          <h2 className="text-[38px] font-black leading-[1.12] sm:text-[47px]">
            O momento de transformar sua vida é agora
          </h2>
          <p className="mx-auto mt-8 max-w-[720px] text-xl font-semibold leading-8">
            Junte-se a milhares de mulheres que deram o próximo passo,
            reescreveram suas histórias e conquistaram a carreira dos sonhos com
            a Iara.
          </p>
          <div className="mt-12 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="#candidatas"
              className="inline-flex h-[62px] items-center justify-center rounded-xl bg-white px-8 text-lg font-extrabold text-[#421657]"
            >
              Cadastrar currículo
            </a>
            <a
              href="#empresas"
              className="inline-flex h-[62px] items-center justify-center rounded-xl border border-white/35 bg-white/18 px-8 text-lg font-extrabold text-white backdrop-blur"
            >
              Encontrar candidatas
            </a>
          </div>
        </div>
      </section>

      <section
        id="como-funciona"
        className="bg-[#fcf9fd] px-8 pb-[42px] pt-[98px] text-center"
      >
        <div className="mx-auto max-w-[1216px]">
          <h2 className="text-[30px] font-black text-[#421657]">
            Como a Iara funciona?
          </h2>
          <p className="mt-3 text-base text-[#4c5d78]">
            Sem complicação e sem perder tempo. Veja como você começa hoje
          </p>

          <div className="relative mt-[64px] grid gap-14 lg:grid-cols-3 lg:gap-10">
            <div className="absolute left-[16%] right-[16%] top-12 hidden h-px bg-[#e5dcea] lg:block" />
            {steps.map((step) => (
              <article key={step.title} className="relative z-10">
                <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-[14px] border border-[#ecdfee] bg-white text-[#d64991] shadow-[0_8px_18px_rgba(15,23,42,0.12)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-[10px] bg-[#fcf9fd]">
                    <Icon name={step.icon} className="h-7 w-7" />
                  </div>
                </div>
                <h3 className="mt-8 text-xl font-black text-[#421657]">
                  {step.title}
                </h3>
                <p className="mx-auto mt-4 max-w-[370px] text-base leading-7 text-[#4c5d78]">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-8 pb-[106px] pt-[72px]">
        <div className="mx-auto grid max-w-[1216px] gap-8 lg:grid-cols-2">
          <article
            id="candidatas"
            className="rounded-[20px] border border-[#ead9ee] bg-[#fffcff] p-12 shadow-[0_3px_10px_rgba(48,18,62,0.08)]"
          >
            <span className="inline-flex h-9 items-center rounded-full border border-[#e8dce9] bg-white px-5 text-sm font-bold text-[#8a3286] shadow-[0_2px_7px_rgba(15,23,42,0.08)]">
              Para Candidatas
            </span>
            <h2 className="mt-8 max-w-[480px] text-[31px] font-black leading-[1.14] text-[#421657]">
              Impulsione sua jornada profissional
            </h2>
            <ul className="mt-7 space-y-4 text-base font-bold text-[#394b67]">
              {candidateBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Icon
                    name="check"
                    className="h-5 w-5 shrink-0 text-[#d64991]"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <a
              href="#entrar"
              className="mt-9 inline-flex items-center gap-3 text-base font-extrabold text-[#d64991]"
            >
              Acessar painel
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </article>

          <article
            id="empresas"
            className="rounded-[20px] bg-gradient-to-br from-[#511970] to-[#792584] p-12 text-white shadow-[0_13px_30px_rgba(48,18,62,0.24)]"
          >
            <span className="inline-flex h-9 items-center rounded-full border border-white/25 bg-white/10 px-5 text-sm font-bold text-white shadow-[0_2px_7px_rgba(15,23,42,0.08)]">
              Para Empresas
            </span>
            <h2 className="mt-8 max-w-[500px] text-[31px] font-black leading-[1.14]">
              Contrate talentos femininos com precisão
            </h2>
            <ul className="mt-7 space-y-4 text-base font-bold text-white">
              {companyBenefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <Icon
                    name="check"
                    className="h-5 w-5 shrink-0 text-[#d64991]"
                  />
                  {benefit}
                </li>
              ))}
            </ul>
            <a
              href="#empresas"
              className="mt-9 inline-flex items-center gap-3 text-base font-extrabold text-white"
            >
              Conheça as soluções
              <Icon name="arrow" className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      <section
        id="tecnologia"
        className="bg-gradient-to-br from-[#421657] via-[#56206a] to-[#421657] px-8 pb-[60px] pt-[106px] text-white"
      >
        <div className="mx-auto max-w-[1216px] text-center">
          <h2 className="text-[36px] font-black leading-tight">
            IA que entende <span className="text-[#e56ca5]">além do</span>{" "}
            currículo
          </h2>
          <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-white/86">
            Nossa tecnologia proprietária foi treinada para eliminar vieses
            inconscientes e focar no que realmente importa: a capacidade de
            entrega e potencial de crescimento.
          </p>

          <div className="mt-12 grid gap-6 text-left md:grid-cols-2 xl:grid-cols-4">
            {aiCards.map((card) => (
              <article
                key={card.title}
                className="rounded-[14px] border border-white/12 bg-white/[0.06] p-6"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-[13px] border border-white/10 bg-[#d64991]/35">
                  <Icon name={card.icon} className="h-8 w-8" />
                </div>
                <h3 className="mt-8 text-xl font-black">{card.title}</h3>
                <p className="mt-4 text-sm font-medium leading-7 text-white/82">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fcf9fd] px-8 py-[104px]">
        <div className="mx-auto max-w-[1216px]">
          <h2 className="text-[31px] font-black text-[#421657]">
            Por que a Iara é diferente?
          </h2>
          <p className="mt-4 max-w-[670px] text-base leading-7 text-[#4c5d78]">
            Construída por mulheres, para mulheres. Entendemos as nuances e
            desafios do mercado de trabalho atual.
          </p>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {differences.map((item) => (
              <article
                key={item.title}
                className="flex min-h-[120px] flex-col items-center justify-center rounded-[14px] border border-[#eee5f1] bg-white/55 p-5 text-center shadow-[0_2px_7px_rgba(15,23,42,0.08)]"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-[11px] border border-[#eadfec] bg-white text-[#d64991]">
                  <Icon name={item.icon} className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-sm font-black text-[#421657]">
                  {item.title}
                </h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-[#eadfec] bg-white px-8 py-12 text-center">
        <div className="inline-flex items-center gap-3">
          <Image
            src="/figma-assets/image-7.png"
            alt=""
            width={40}
            height={41}
            loading="eager"
            className="h-10 w-10 object-contain"
          />
          <span className="text-lg font-black text-[#421657]">
            Iara Plataforma
          </span>
        </div>
        <p className="mt-5 text-sm text-[#6c7c96]">
          © 2026 Iara Platform. Mockup para demonstração.
        </p>
      </footer>
    </main>
  );
}
