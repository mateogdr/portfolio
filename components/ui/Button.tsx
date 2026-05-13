"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const variants = {
  primary:
    "bg-gray-950 text-white hover:bg-gray-800 border border-gray-950 hover:border-gray-800",
  secondary:
    "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 hover:border-gray-300",
  ghost:
    "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-transparent",
};

const sizes = {
  sm: "px-3.5 py-2 text-sm gap-1.5",
  md: "px-4 py-2.5 text-sm gap-2",
  lg: "px-5 py-3 text-base gap-2",
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  external,
  onClick,
  className,
  disabled,
  type = "button",
  icon,
  iconPosition = "right",
}: ButtonProps) {
  const baseClasses = cn(
    "inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 ease-in-out cursor-pointer select-none whitespace-nowrap",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variants[variant],
    sizes[size],
    className,
  );

  const content = (
    <>
      {icon && iconPosition === "left" && (
        <span className="shrink-0">{icon}</span>
      )}
      {children}
      {icon && iconPosition === "right" && (
        <span className="shrink-0">{icon}</span>
      )}
    </>
  );

  if (href) {
    if (external) {
      return (
        <motion.a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
          whileTap={{ scale: 0.97 }}
        >
          {content}
        </motion.a>
      );
    }
    return (
      <motion.div whileTap={{ scale: 0.97 }}>
        <Link href={href} className={baseClasses}>
          {content}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={baseClasses}
      whileTap={{ scale: 0.97 }}
    >
      {content}
    </motion.button>
  );
}
