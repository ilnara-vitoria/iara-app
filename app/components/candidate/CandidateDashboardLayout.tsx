"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import {
  CandidateIcon,
  type CandidateIconName,
} from "@/app/components/candidate/CandidateIcon";

const navItems: ReadonlyArray<{
  href: string;
  label: string;
  icon: CandidateIconName;
}> = [
  { href: "/dashboard/candidata", label: "Meu Perfil", icon: "profile" },
  { href: "/empregos", label: "Vagas", icon: "briefcase" },
  { href: "/testes", label: "Testes e IA", icon: "test" },
  { href: "/comunidade", label: "Comunidade", icon: "community" },
  { href: "/configuracoes", label: "Configurações", icon: "settings" },
];

interface CandidateShellProfile {
  name: string;
  title: string;
  avatarUrl: string;
}

function IaraLogo({ compact = false }: { compact?: boolean }) {
  return (
    <span className="flex items-center gap-1.5">
      <Image
        src="/figma-assets/image-7.png"
        alt=""
        width={compact ? 24 : 29}
        height={compact ? 25 : 30}
        className="shrink-0 object-contain"
        aria-hidden="true"
      />
      <span
        className={`font-black tracking-[0.18em] text-[#8A2F86] ${
          compact ? "text-sm" : "text-lg"
        }`}
      >
        IARA
      </span>
    </span>
  );
}

function NavLinks({ pathname }: { pathname: string }) {
  return (
    <>
      {navItems.map((item) => {
        const isActive =
          pathname === item.href ||
          (item.href !== "/empregos" && pathname.startsWith(item.href));

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold transition ${
              isActive
                ? "bg-[#FEF7F9] text-[#AC1634]"
                : "text-[#324055]/72 hover:bg-[#FFFBFC] hover:text-[#3E0014]"
            }`}
          >
            <CandidateIcon name={item.icon} className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
    </>
  );
}

export function CandidateDashboardLayout({
  children,
  profile,
}: {
  children: ReactNode;
  profile: CandidateShellProfile;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#FFFCFF] text-[#3E0014]">
      <aside className="fixed left-0 top-0 z-30 hidden h-screen w-72 flex-col border-r border-[#F3E8F2] bg-white shadow-sm lg:flex">
        <div className="flex items-center justify-between border-b border-[#F3E8F2] px-6 py-5">
          <Link
            href="/"
            aria-label="Iara"
            className="flex h-11 w-24 items-center justify-center rounded-md bg-white shadow-[0_2px_10px_rgba(66,22,87,0.12)]"
          >
            <IaraLogo />
          </Link>
          <span className="rounded-full bg-[#FFFBFC] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#7A002B]">
            Candidata
          </span>
        </div>

        <nav className="flex-1 space-y-2 px-4 py-6">
          <NavLinks pathname={pathname} />
        </nav>

        <div className="border-t border-[#F3E8F2] px-4 py-5">
          <button className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-sm font-bold text-[#AC1634] transition hover:bg-[#FEF7F9]">
            <CandidateIcon name="logout" />
            Sair da plataforma
          </button>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-20 border-b border-[#F3E8F2] bg-white/95 shadow-sm backdrop-blur">
          <div className="flex h-[82px] items-center justify-between gap-4 px-4 sm:px-8">
            <div className="flex min-w-0 items-center gap-4">
              <Link
                href="/"
                aria-label="Iara"
                className="flex h-10 w-20 shrink-0 items-center justify-center rounded-md bg-white shadow-[0_2px_10px_rgba(66,22,87,0.12)] lg:hidden"
              >
                <IaraLogo compact />
              </Link>
              <h1 className="truncate text-xl font-black text-[#5B002C] sm:text-2xl">
                Olá, {profile.name}
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <button
                className="relative rounded-full bg-white p-2 text-[#5B002C] transition hover:bg-[#FEF7F9]"
                aria-label="Notificações"
              >
                <CandidateIcon name="bell" />
                <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-[#C21646] ring-2 ring-white" />
              </button>

              <div className="hidden items-center gap-3 border-l border-[#F3E8F2] pl-5 sm:flex">
                <Image
                  src={profile.avatarUrl}
                  alt={profile.name}
                  width={42}
                  height={42}
                  unoptimized
                  className="h-[42px] w-[42px] rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-black leading-tight text-[#5B002C]">
                    {profile.name}
                  </p>
                  <p className="mt-0.5 text-xs font-medium text-[#6B7280]">
                    {profile.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <nav className="flex gap-2 overflow-x-auto border-t border-[#F7EDF5] px-4 py-2 lg:hidden">
            <NavLinks pathname={pathname} />
          </nav>
        </header>

        <main className="px-4 py-8 sm:px-8">{children}</main>
      </div>
    </div>
  );
}
