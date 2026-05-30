import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  ...props
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    primary:
      "bg-[#AC1634] text-white hover:bg-[#8C1030] shadow-[0_8px_18px_rgba(172,22,52,0.28)]",
    secondary:
      "bg-[#3E0014] text-white hover:bg-[#5B002C] shadow-sm",
    ghost:
      "text-[#5B002C]/60 hover:bg-[#FFFBFC] hover:text-[#3E0014]",
    outline:
      "border border-[#EAD9EE] text-[#3E0014] hover:bg-[#FFFBFC]",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
