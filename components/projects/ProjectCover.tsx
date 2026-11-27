import Image from "next/image";
import type { Project } from "@/types";
import { cn } from "@/lib/utils";

export const statusLabel: Record<Project["status"], { label: string; color: string }> = {
  live: { label: "Live", color: "text-emerald-600 bg-emerald-50" },
  completed: { label: "Completed", color: "text-sky-700 bg-sky-50" },
  building: { label: "Building", color: "text-amber-600 bg-amber-50" },
  archived: { label: "Archived", color: "text-gray-500 bg-gray-100" },
};

export function StatusPill({ status }: { status: Project["status"] }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
        statusLabel[status].color,
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {statusLabel[status].label}
    </span>
  );
}

/**
 * Photo when the project has one; otherwise a dark cover with its key figure.
 * Fills its (relative, sized) parent.
 */
export function ProjectCover({
  project,
  size = "md",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority,
}: {
  project: Project;
  size?: "md" | "lg";
  sizes?: string;
  priority?: boolean;
}) {
  if (project.image) {
    return (
      <Image
        src={project.image}
        alt={project.title}
        fill
        priority={priority}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes={sizes}
      />
    );
  }

  return (
    <div className="absolute inset-0 flex flex-col items-start justify-end bg-gray-950 p-6 transition-transform duration-500 group-hover:scale-[1.03] sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid-sm opacity-[0.08] invert"
        aria-hidden="true"
      />
      {project.highlight && (
        <div className="relative">
          <p
            className={cn(
              "font-semibold tracking-tight text-white",
              size === "lg" ? "text-6xl sm:text-7xl" : "text-5xl",
            )}
          >
            {project.highlight.value}
          </p>
          <p className="mt-1 text-sm text-gray-400">{project.highlight.label}</p>
        </div>
      )}
    </div>
  );
}
