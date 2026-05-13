"use client";

import { Briefcase, GraduationCap, Trophy, BookOpen } from "lucide-react";
import { timeline } from "@/lib/data";
import { Fragment } from "react";
import type { TimelineItem } from "@/types";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { TechBadge } from "@/components/ui/Badge";
import { FadeIn } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const typeConfig: Record<
  TimelineItem["type"],
  { icon: React.ElementType; color: string; bg: string }
> = {
  work: {
    icon: Briefcase,
    color: "text-blue-600",
    bg: "bg-blue-50 border-blue-100",
  },
  education: {
    icon: GraduationCap,
    color: "text-gray-700",
    bg: "bg-gray-100 border-gray-200",
  },
  achievement: {
    icon: Trophy,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
  },
  course: {
    icon: BookOpen,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
  },
};

function TimelineCard({ item, index }: { item: TimelineItem; index: number }) {
  const { icon: Icon, color, bg } = typeConfig[item.type];

  return (
    <FadeIn delay={index * 0.08}>
      <div className="relative flex gap-6">
        {/* Line connector */}
        <div className="relative flex flex-col items-center">
          <div
            className={cn(
              "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
              bg,
            )}
          >
            <Icon size={15} className={color} />
          </div>
          {/* Vertical line */}
          <div className="mt-2 w-px flex-1 bg-gray-200" />
        </div>

        {/* Card content */}
        <div className="flex-1 pb-10">
          <div className="rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-sm">
            <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-gray-950">{item.title}</h3>
                  {item.current && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-medium text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm font-medium text-gray-500">
                  {item.organization}
                  {item.location && (
                    <span className="text-gray-400"> · {item.location}</span>
                  )}
                </p>
              </div>
              <span className="shrink-0 rounded-md border border-gray-100 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-400">
                {item.period}
              </span>
            </div>

            <p className="text-sm leading-relaxed text-gray-500">
              {item.description}
            </p>

            {item.technologies && item.technologies.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.technologies.map((tech) => (
                  <TechBadge key={tech} name={tech} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

export function Experience() {
  return (
    <SectionWrapper id="experience" background="gray">
      <FadeIn>
        <SectionHeader
          label="Experience"
          title="Background & education."
          description="My journey in software engineering — from the classroom to client projects and beyond."
        />
      </FadeIn>

      {/* Education & Work */}
      <div className="relative">
        {timeline.filter((i) => i.type !== "course").map((item, index) => (
          <TimelineCard key={item.id} item={item} index={index} />
        ))}
      </div>

      {/* Formación complementaria */}
      {timeline.some((i) => i.type === "course") && (
        <Fragment>
          <FadeIn>
            <p className="mb-6 mt-4 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Formación complementaria
            </p>
          </FadeIn>
          <div className="relative">
            {timeline.filter((i) => i.type === "course").map((item, index) => (
              <TimelineCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </Fragment>
      )}
    </SectionWrapper>
  );
}
