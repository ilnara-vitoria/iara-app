"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

type IconName = "profile" | "vagas" | "testes" | "comunidade" | "config" | "sair";

function NavIcon({ name }: { name: IconName }) {
  const commonProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 2,
    viewBox: "0 0 24 24",
    className: "w-5 h-5",
    "aria-hidden": true,
  };

  switch (name) {
    case "profile":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="8" r="4" />
          <path d="M6 20a6 6 0 0 1 12 0" />
        </svg>
      );
    case "vagas":
      return (
        <svg {...commonProps}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "testes":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M9 12h3l2-4" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
        </svg>
      );
    case "comunidade":
      return (
        <svg {...commonProps}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="M16 11a3 3 0 0 0 0-6" />
          <path d="M18 19a5 5 0 0 0-3-4.6" />
        </svg>
      );
    case "config":
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="3" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      );
    case "sair":
      return (
        <svg {...commonProps}>
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
          <polyline points="16 17 21 12 16 7" />
          <line x1="21" y1="12" x2="9" y2="12" />
        </svg>
      );
  }
}

const navItems = [
  { href: "/perfil", label: "Meu Perfil", icon: "profile" as IconName },
  { href: "/empregos", label: "Vagas", icon: "vagas" as IconName },
  { href: "/testes", label: "Testes e IA", icon: "testes" as IconName },
  { href: "/comunidade", label: "Comunidade", icon: "comunidade" as IconName },
  { href: "/configuracoes", label: "Configurações", icon: "config" as IconName },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-100 shadow-sm flex flex-col z-20">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-3">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/figma-assets/logonova.jpeg"
            alt="Iara"
            width={80}
            height={34}
            className="h-auto w-[80px]"
          />
        </Link>
        <span className="text-xs font-bold text-[#8b3889] uppercase tracking-wider bg-[#fbf4fb] px-2 py-1 rounded-full border border-[#ecdfee]">
          Candidata
        </span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                isActive
                  ? "text-[#7A002B]"
                  : "text-[#5B002C]/50 hover:text-[#3E0014]"
              }`}
              style={isActive ? { background: "#FEF7F9" } : {}}
            >
              <NavIcon name={item.icon} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="px-4 pb-6 pt-4" style={{ borderTop: "1px solid #EAD9EE" }}>
        <button
          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all w-full hover:opacity-80"
          style={{ color: "#AC1634" }}
        >
          <NavIcon name="sair" />
          Sair da plataforma
        </button>
      </div>
    </aside>
  );
}
