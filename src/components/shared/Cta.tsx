import Link from "next/link";
import type React from "react";
import { twMerge } from "tailwind-merge";

type CtaProps = {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
} & ({ href: string; onClick?: never } | { href?: never; onClick: () => void });

const baseClass = `
  inline-flex items-center justify-center px-6 py-3 
  text-lg font-bold text-white 
  bg-gradient-to-r from-purple-600 to-blue-500 
  rounded-full transition-all duration-300 
  hover:scale-105 hover:shadow-lg`;

const Cta: React.FC<CtaProps> = ({
  href,
  onClick,
  children,
  className = "",
  disabled,
}) => {
  const btnClass = twMerge(baseClass, className, disabled ? "opacity-50" : "");
  if (onClick) {
    return (
      <button onClick={onClick} className={btnClass} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={btnClass}>
      {children}
    </Link>
  );
};

export default Cta;
