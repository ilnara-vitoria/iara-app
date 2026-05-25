"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

/* ─── SVG Icons ─── */
function IconArrowLeft(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <path d="M19 12H5" /><path d="m11 6-6 6 6 6" />
    </svg>
  );
}
function IconUser(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <circle cx="12" cy="8" r="4" /><path d="M6 20a6 6 0 0 1 12 0" />
    </svg>
  );
}
function IconBuilding(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h2" /><path d="M13 9h2" />
      <path d="M9 13h2" /><path d="M13 13h2" />
      <path d="M9 17h6" />
    </svg>
  );
}
function IconMail(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m2 7 10 7 10-7" />
    </svg>
  );
}
function IconLock(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
function IconEye(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function IconEyeOff(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
      <line x1="1" y1="1" x2="23" y2="23" />
    </svg>
  );
}
function IconSparkle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <path d="M12 3 10 9l-6 2 6 2 2 6 2-6 6-2-6-2-2-6Z" />
    </svg>
  );
}

type UserType = "candidata" | "empresa";

export default function LoginPage() {
  const [userType, setUserType] = useState<UserType>("candidata");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    // TODO: integrate with auth backend
    setTimeout(() => setLoading(false), 1800);
  }

  const isCandidata = userType === "candidata";

  return (
    <div className="flex min-h-screen bg-white">
      {/* ── Left panel ── */}
      <div className="relative flex w-full flex-col px-6 py-10 sm:px-10 lg:w-[52%] lg:px-16 xl:px-24">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#5B002C]/70 transition hover:text-[#3E0014]"
        >
          <IconArrowLeft className="h-4 w-4" />
          Voltar para o início
        </Link>

        {/* Logo */}
        <div className="mt-6">
          <div className="inline-flex h-12 w-28 items-center justify-center rounded-sm bg-white shadow-[0_2px_9px_rgba(17,24,39,0.12)]">
            <Image
              src="/figma-assets/logonova.jpeg"
              alt="Iara"
              width={100}
              height={43}
              priority
              className="h-auto w-[100px]"
            />
          </div>
        </div>

        {/* Heading */}
        <div className="mt-10">
          <h1 className="text-[30px] font-black leading-tight text-[#3E0014]">
            Bem-vinda de volta
          </h1>
          <p className="mt-2 text-sm text-[#5B002C]/70">
            Acesse sua conta para continuar transformando sua jornada.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-8 flex overflow-hidden rounded-xl border border-[#EAD9EE] bg-[#FFFBFC]">
          <button
            id="toggle-candidata"
            type="button"
            onClick={() => setUserType("candidata")}
            className={`flex flex-1 items-center justify-center gap-2 py-3 text-sm font-bold transition-all duration-200 ${
              isCandidata
                ? "rounded-xl bg-white text-[#AC1634] shadow-[0_2px_8px_rgba(172,22,52,0.18)]"
                : "text-[#6c7c96] hover:text-[#3E0014]"
            }`}
          >
            <IconUser className="h-4 w-4" />
            Sou Candidata
          </button>
          <button
            id="toggle-empresa"
            type="button"
            onClick={() => setUserType("empresa")}
            className={`flex flex-1 items-center justify-center gap-2 py-3 text-sm font-bold transition-all duration-200 ${
              !isCandidata
                ? "rounded-xl bg-white text-[#3E0014] shadow-[0_2px_8px_rgba(62,0,20,0.18)]"
                : "text-[#6c7c96] hover:text-[#3E0014]"
            }`}
          >
            <IconBuilding className="h-4 w-4" />
            Sou Empresa
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5" noValidate>

          {/* Email */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-[#3E0014]">
              E-mail
            </label>
            <div className="relative">
              <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#AC1634]" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="seu@email.com.br"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-[#EAD9EE] bg-white py-3 pl-10 pr-4 text-sm text-[#3E0014] placeholder:text-[#6c7c96] outline-none transition focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="text-sm font-semibold text-[#3E0014]">
                Senha
              </label>
              <Link
                href="/recuperar-senha"
                className="text-xs font-semibold text-[#AC1634] transition hover:text-[#8C1030]"
              >
                Esqueceu a senha?
              </Link>
            </div>
            <div className="relative">
              <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6c7c96]" />
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                autoComplete="current-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-[#EAD9EE] bg-white py-3 pl-10 pr-10 text-sm text-[#3E0014] placeholder:text-[#6c7c96] outline-none transition focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20"
              />
              <button
                type="button"
                aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6c7c96] transition hover:text-[#3E0014]"
              >
                {showPassword ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            id="btn-login"
            type="submit"
            disabled={loading}
            className="mt-2 flex h-12 w-full items-center justify-center rounded-xl bg-[#AC1634] text-base font-extrabold text-white shadow-[0_8px_18px_rgba(172,22,52,0.32)] transition hover:bg-[#8C1030] disabled:opacity-60"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
                </svg>
                Entrando…
              </span>
            ) : (
              "Entrar na Plataforma"
            )}
          </button>
        </form>

        {/* Register link */}
        <p className="mt-6 text-center text-sm text-[#5B002C]/70">
          Ainda não tem conta?{" "}
          <Link
            href="/cadastro"
            className="font-extrabold text-[#AC1634] transition hover:text-[#8C1030]"
          >
            Cadastre-se grátis
          </Link>
        </p>

        {/* Decorative blob */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[#AC1634]/6 blur-3xl"
        />
      </div>

      {/* ── Right panel ── */}
      <div className="relative hidden overflow-hidden lg:flex lg:w-[48%]">
        <Image
          src="/figma-assets/mulher-negocios.jpg"
          alt="Profissional de sucesso"
          fill
          priority
          sizes="48vw"
          className="object-cover object-center"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#3E0014]/90 via-[#5B002C]/20 to-transparent" />

        {/* Quote card */}
        <div className="absolute inset-x-8 bottom-10 rounded-[14px] border border-white/25 bg-white/15 p-6 text-white shadow-[0_18px_35px_rgba(62,0,20,0.30)] backdrop-blur-xl">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-[#AC1634]/40">
            <IconSparkle className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-black leading-snug">
            Encontre oportunidades alinhadas ao seu potencial.
          </h2>
          <p className="mt-2 text-sm font-medium text-white/80">
            Nossa IA avalia suas habilidades reais além do currículo.
          </p>
        </div>
      </div>
    </div>
  );
}
