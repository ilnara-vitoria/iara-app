import type { CandidateIconName } from "@/app/components/candidate/CandidateIcon";

export interface CandidateInfoItem {
  label: string;
  value: string;
  icon: CandidateIconName;
}

export interface CandidateProfileAction {
  label: string;
  href: string;
}

export interface ProfessionalLink {
  label: string;
  href: string;
  icon: CandidateIconName;
}

export interface CandidateExperience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface RecommendedJob {
  title: string;
  company: string;
  location: string;
  matchPercentage: number;
  badge?: string;
}

export interface CandidateProfile {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  completionPercentage: number;
  completionDescription: string;
  completionActions: CandidateProfileAction[];
  info: CandidateInfoItem[];
  professionalLinks: ProfessionalLink[];
  experiences: CandidateExperience[];
  recommendedJobs: RecommendedJob[];
}

const mockCandidateProfile: CandidateProfile = {
  id: "mock-marina-silva",
  name: "Marina Silva",
  title: "Candidata",
  avatarUrl: "/figma-assets/avatar-4.jpg",
  completionPercentage: 85,
  completionDescription:
    "Conclua seu perfil para aumentar o match com as melhores vagas.",
  completionActions: [
    { label: "Adicionar Certificações", href: "/dashboard/candidata/certificacoes" },
    { label: "Fazer Teste Comportamental", href: "/testes" },
  ],
  info: [
    { label: "E-mail", value: "marina.silva@email.com", icon: "mail" },
    { label: "Cargo atual", value: "Product Manager Sênior", icon: "briefcase" },
    { label: "Telefone", value: "(11) 98765-4321", icon: "phone" },
    { label: "Experiência", value: "8 anos", icon: "calendar" },
    { label: "Localização", value: "São Paulo, SP", icon: "mapPin" },
    { label: "Disponibilidade", value: "Remoto / Híbrido", icon: "target" },
  ],
  professionalLinks: [
    { label: "LinkedIn", href: "https://linkedin.com", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com", icon: "github" },
  ],
  experiences: [
    {
      role: "Product Manager Sênior",
      company: "FintechBR",
      period: "Jan 2024 - Presente",
      description:
        "Liderança de tribo de pagamentos com 4 squads. Redução de churn em 12% em 6 meses.",
    },
    {
      role: "Product Manager Pleno",
      company: "RetailCorp",
      period: "Fev 2021 - Dez 2023",
      description:
        "Gestão do app B2B e reestruturação do funil de onboarding de novos lojistas.",
    },
  ],
  recommendedJobs: [
    {
      title: "Group Product Manager",
      company: "Nubank",
      location: "Híbrido - SP",
      matchPercentage: 96,
      badge: "Novo",
    },
    {
      title: "Senior PM - Checkout",
      company: "Mercado Livre",
      location: "Remoto",
      matchPercentage: 91,
      badge: "Em alta",
    },
    {
      title: "Product Leader",
      company: "QuintoAndar",
      location: "Remoto",
      matchPercentage: 88,
    },
  ],
};

function springEndpoint() {
  const baseUrl = process.env.SPRING_API_BASE_URL;

  if (!baseUrl) {
    return null;
  }

  const path =
    process.env.SPRING_CANDIDATE_PROFILE_PATH ?? "/api/candidates/me/profile";

  return new URL(path, baseUrl).toString();
}

export async function getCandidateProfile(): Promise<CandidateProfile> {
  const endpoint = springEndpoint();

  if (!endpoint) {
    return mockCandidateProfile;
  }

  try {
    const response = await fetch(endpoint, {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Spring API returned ${response.status}`);
    }

    return (await response.json()) as CandidateProfile;
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Using mock candidate profile.", error);
    }

    return mockCandidateProfile;
  }
}
