"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode, SVGProps } from "react";

export type CompanyIconName =
  | "analytics"
  | "briefcase"
  | "check"
  | "clock"
  | "filter"
  | "logout"
  | "more"
  | "plus"
  | "search"
  | "settings"
  | "sparkle"
  | "trending"
  | "users";

export function CompanyIcon({
  name,
  className = "h-5 w-5",
}: {
  name: CompanyIconName;
  className?: string;
}) {
  const commonProps: SVGProps<SVGSVGElement> = {
    className,
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  switch (name) {
    case "analytics":
      return (
        <svg {...commonProps}>
          <path d="M3 3v18h18" />
          <path d="M7 15v3" />
          <path d="M12 10v8" />
          <path d="M17 6v12" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "check":
      return (
        <svg {...commonProps}>
          <path d="m20 6-11 11-5-5" />
        </svg>
      );
    case "clock":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 3" />
        </svg>
      );
    case "filter":
      return (
        <svg {...commonProps}>
          <path d="M3 6h18" />
          <path d="M7 12h10" />
          <path d="M11 18h2" />
        </svg>
      );
    case "logout":
      return (
        <svg {...commonProps}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <path d="m16 17 5-5-5-5" />
          <path d="M21 12H9" />
        </svg>
      );
    case "more":
      return (
        <svg {...commonProps}>
          <circle cx="5" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="19" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "plus":
      return (
        <svg {...commonProps}>
          <path d="M12 5v14" />
          <path d="M5 12h14" />
        </svg>
      );
    case "search":
      return (
        <svg {...commonProps}>
          <circle cx="11" cy="11" r="7" />
          <path d="m16.5 16.5 4 4" />
        </svg>
      );
    case "settings":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "sparkle":
      return (
        <svg {...commonProps}>
          <path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" />
          <path d="M19 3v4M21 5h-4" />
        </svg>
      );
    case "trending":
      return (
        <svg {...commonProps}>
          <path d="m3 17 6-6 4 4 7-7" />
          <path d="M14 8h6v6" />
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

const navItems = [
  { href: "/dashboard/empresa", label: "Vagas Ativas", icon: "briefcase" },
  {
    href: "/dashboard/empresa/talentos",
    label: "Banco de Talentos",
    icon: "users",
  },
  {
    href: "/dashboard/empresa/analytics",
    label: "Analytics IA",
    icon: "analytics",
  },
  {
    href: "/dashboard/empresa/config",
    label: "Configuracoes",
    icon: "settings",
  },
] as const;

export function CompanyDashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#F9F5FA] text-[#3E0014]">
      <aside className="fixed left-0 top-0 z-20 hidden h-screen w-64 flex-col border-r border-[#EAD9EE] bg-white shadow-sm lg:flex">
        <div className="flex items-center gap-3 border-b border-[#EAD9EE] px-6 py-5">
          <Link href="/" className="flex items-center gap-3" aria-label="Iara">
            <Image
              src="/figma-assets/logonova.jpeg"
              alt="Iara"
              width={82}
              height={35}
              className="h-auto w-[82px]"
            />
          </Link>
          <span className="rounded-full border border-[#FDF0F4] bg-[#FEF7F9] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#7A002B]">
            Empresa
          </span>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/dashboard/empresa" &&
                pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold transition-all ${
                  isActive
                    ? "bg-[#FEF7F9] text-[#7A002B]"
                    : "text-[#5B002C]/55 hover:bg-[#FFFBFC] hover:text-[#3E0014]"
                }`}
              >
                <CompanyIcon name={item.icon} />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[#EAD9EE] px-4 pb-6 pt-4">
          <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#AC1634] transition-all hover:bg-[#FEF7F9]">
            <CompanyIcon name="logout" />
            Sair da plataforma
          </button>
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-10 border-b border-[#EAD9EE] bg-white/95 shadow-sm backdrop-blur">
          <div className="flex h-16 items-center justify-between gap-4 px-4 sm:px-8">
            <div className="flex items-center gap-3">
              <Link href="/" className="lg:hidden" aria-label="Iara">
                <Image
                  src="/figma-assets/logonova.jpeg"
                  alt="Iara"
                  width={64}
                  height={27}
                  className="h-auto w-16"
                />
              </Link>
              <div>
                <p className="text-sm font-bold text-[#3E0014]">
                  TechNova Corp
                </p>
                <p className="text-xs font-semibold text-[#AC1634]">
                  Painel da empresa
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                className="relative rounded-full border border-[#EAD9EE] bg-white p-2 text-[#7A002B] shadow-sm transition-shadow hover:shadow-md"
                aria-label="Notificacoes"
              >
                <CompanyIcon name="sparkle" />
                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full border-2 border-white bg-[#AC1634]" />
              </button>
              <div className="hidden items-center gap-3 border-l border-[#EAD9EE] pl-4 sm:flex">
                <div className="text-right">
                  <p className="text-sm font-bold leading-tight text-[#3E0014]">
                    TechNova Corp
                  </p>
                  <p className="text-xs text-[#AC1634]">Empresa</p>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#E77291] bg-[#FEF7F9] text-sm font-black text-[#3E0014]">
                  TN
                </div>
              </div>
            </div>
          </div>
          <nav className="flex gap-2 overflow-x-auto border-t border-[#FDF0F4] px-4 py-2 lg:hidden">
            {navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/dashboard/empresa" &&
                  pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-3 py-2 text-xs font-bold transition ${
                    isActive
                      ? "bg-[#3E0014] text-white"
                      : "bg-[#FFFBFC] text-[#5B002C]"
                  }`}
                >
                  <CompanyIcon name={item.icon} className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </header>

        <main className="min-h-[calc(100vh-4rem)] px-4 py-8 sm:px-8">
          {children}
        </main>
      </div>
    </div>
  );
}
