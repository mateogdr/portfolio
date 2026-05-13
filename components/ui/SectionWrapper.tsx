import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
  background?: "white" | "gray";
}

export function SectionWrapper({
  id,
  children,
  className,
  innerClassName,
  background = "white",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn(
        "w-full py-24 md:py-32",
        background === "gray" && "bg-gray-50",
        background === "white" && "bg-white",
        className,
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-5xl px-6 md:px-8 lg:px-12",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-16",
        align === "center" && "text-center",
      )}
    >
      {label && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-gray-950 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-500">
          {description}
        </p>
      )}
    </div>
  );
}
