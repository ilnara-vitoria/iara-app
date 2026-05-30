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
function IconPhone(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2}
      strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5.09 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.71 2.81a2 2 0 0 1-.45 2.11L9.22 9.7a16 16 0 0 0 6.07 6.07l1.06-1.06a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.71A2 2 0 0 1 22 16.92Z" />
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

/* ─── Input helper ─── */
const inputCls =
  "w-full rounded-xl border border-[#EAD9EE] bg-white py-3 pl-10 pr-4 text-sm text-[#3E0014] placeholder:text-[#6c7c96] outline-none transition focus:border-[#AC1634] focus:ring-2 focus:ring-[#AC1634]/20";

type UserType = "candidata" | "empresa";

export default function CadastroPage() {
  const [userType, setUserType] = useState<UserType>("candidata");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

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
        <div className="mt-8">
          <h1 className="text-[30px] font-black leading-tight text-[#3E0014]">
            Crie sua conta grátis
          </h1>
          <p className="mt-2 text-sm text-[#5B002C]/70">
            Comece sua jornada profissional com a gente.
          </p>
        </div>

        {/* Toggle */}
        <div className="mt-6 flex overflow-hidden rounded-xl border border-[#EAD9EE] bg-[#FFFBFC]">
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
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4" noValidate>
          {/* Nome */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-sm font-semibold text-[#3E0014]">
              {isCandidata ? "Nome Completo" : "Razão Social"}
            </label>
            <div className="relative">
              <IconUser className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#AC1634]" />
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder={isCandidata ? "Maria da Silva" : "Empresa LTDA"}
                value={form.name}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
          </div>

          {/* E-mail */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-[#3E0014]">
              E-mail
            </label>
            <div className="relative">
              <IconMail className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#AC1634]" />
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="seu@email.com.br"
                value={form.email}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
          </div>

          {/* Telefone */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-sm font-semibold text-[#3E0014]">
              Telefone
            </label>
            <div className="relative">
              <IconPhone className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6c7c96]" />
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="(11) 98765-4321"
                value={form.phone}
                onChange={handleChange}
                className={inputCls}
              />
            </div>
          </div>

          {/* Senha */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-semibold text-[#3E0014]">
              Senha
            </label>
            <div className="relative">
              <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6c7c96]" />
              <input
                id="password"
                name="password"
                type={showPass ? "text" : "password"}
                autoComplete="new-password"
                required
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className={`${inputCls} pr-10`}
              />
              <button
                type="button"
                aria-label={showPass ? "Ocultar senha" : "Mostrar senha"}
                onClick={() => setShowPass((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6c7c96] transition hover:text-[#3E0014]"
              >
                {showPass ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Confirmar Senha */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="confirm" className="text-sm font-semibold text-[#3E0014]">
              Confirmar Senha
            </label>
            <div className="relative">
              <IconLock className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6c7c96]" />
              <input
                id="confirm"
                name="confirm"
                type={showConfirm ? "text" : "password"}
                autoComplete="new-password"
                required
                placeholder="••••••••"
                value={form.confirm}
                onChange={handleChange}
                className={`${inputCls} pr-10`}
              />
              <button
                type="button"
                aria-label={showConfirm ? "Ocultar confirmação" : "Mostrar confirmação"}
                onClick={() => setShowConfirm((v) => !v)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[#6c7c96] transition hover:text-[#3E0014]"
              >
                {showConfirm ? <IconEyeOff className="h-4 w-4" /> : <IconEye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          {/* Termos */}
          <label className="flex cursor-pointer items-start gap-3 pt-1">
            <input
              id="terms"
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 h-4 w-4 shrink-0 cursor-pointer accent-[#AC1634]"
              required
            />
            <span className="text-sm text-[#5B002C]/80">
              Aceito os{" "}
              <Link href="/termos" className="font-bold text-[#AC1634] hover:text-[#8C1030]">
                Termos de Uso
              </Link>{" "}
              e{" "}
              <Link href="/privacidade" className="font-bold text-[#AC1634] hover:text-[#8C1030]">
                Política de Privacidade
              </Link>
            </span>
          </label>

          {/* Submit */}
          <button
            id="btn-cadastro"
            type="submit"
            disabled={loading || !accepted}
            className="mt-1 flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-[#AC1634] text-base font-extrabold text-white shadow-[0_8px_18px_rgba(172,22,52,0.32)] transition hover:bg-[#8C1030] disabled:opacity-60"
          >
            {loading ? (
              <>
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
                </svg>
                Criando conta…
              </>
            ) : (
              <>
                <IconSparkle className="h-4 w-4" />
                Criar Conta Grátis
              </>
            )}
          </button>
        </form>

        {/* Login link */}
        <p className="mt-5 text-center text-sm text-[#5B002C]/70">
          Já tem uma conta?{" "}
          <Link
            href="/login"
            className="font-extrabold text-[#AC1634] transition hover:text-[#8C1030]"
          >
            Fazer login
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
          src="/figma-assets/image-3.png"
          alt="Profissional de sucesso"
          fill
          priority
          sizes="48vw"
          className="object-cover object-center"
        />

        {/* Warm dark overlay — tom âmbar/vinho do mockup */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#3E0014]/80 via-[#5B002C]/60 to-[#AC1634]/20" />

        {/* Quote card */}
        <div className="absolute inset-x-8 bottom-10 rounded-[14px] border border-white/25 bg-white/15 p-6 text-white shadow-[0_18px_35px_rgba(62,0,20,0.30)] backdrop-blur-xl">
          <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-[10px] border border-white/10 bg-[#AC1634]/40">
            <IconSparkle className="h-5 w-5 text-white" />
          </div>
          <h2 className="text-xl font-black leading-snug">
            Junte-se a milhares de mulheres transformando suas carreiras.
          </h2>
          <p className="mt-2 text-sm font-medium text-white/80">
            Cadastro 100% gratuito e seguro. Comece agora mesmo!
          </p>
        </div>
      </div>
    </div>
  );
}
