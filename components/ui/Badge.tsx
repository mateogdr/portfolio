import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "outline" | "dot";
  color?: "gray" | "green" | "blue" | "amber";
  className?: string;
}

const variantClasses = {
  default: {
    gray: "bg-gray-100 text-gray-700 border-transparent",
    green: "bg-emerald-50 text-emerald-700 border-transparent",
    blue: "bg-blue-50 text-blue-700 border-transparent",
    amber: "bg-amber-50 text-amber-700 border-transparent",
  },
  outline: {
    gray: "bg-transparent text-gray-600 border-gray-200",
    green: "bg-transparent text-emerald-600 border-emerald-200",
    blue: "bg-transparent text-blue-600 border-blue-200",
    amber: "bg-transparent text-amber-600 border-amber-200",
  },
  dot: {
    gray: "bg-gray-100 text-gray-700 border-transparent",
    green: "bg-emerald-50 text-emerald-700 border-transparent",
    blue: "bg-blue-50 text-blue-700 border-transparent",
    amber: "bg-amber-50 text-amber-700 border-transparent",
  },
};

const dotColors = {
  gray: "bg-gray-400",
  green: "bg-emerald-500",
  blue: "bg-blue-500",
  amber: "bg-amber-500",
};

export function Badge({
  children,
  variant = "default",
  color = "gray",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium border transition-colors",
        variantClasses[variant][color],
        className,
      )}
    >
      {variant === "dot" && (
        <span
          className={cn("h-1.5 w-1.5 rounded-full", dotColors[color])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}

export function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-mono font-medium text-gray-600 transition-colors hover:border-gray-300 hover:bg-gray-100">
      {name}
    </span>
  );
}
