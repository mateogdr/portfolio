"use client";

import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { TechBadge } from "@/components/ui/Badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { personalInfo, skills, skillCategories } from "@/lib/data";
import type { Skill } from "@/types";

function groupSkillsByCategory(skills: Skill[]) {
  return skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill.name);
      return acc;
    },
    {} as Record<string, string[]>,
  );
}

export function About() {
  const grouped = groupSkillsByCategory(skills);

  return (
    <SectionWrapper id="about" background="gray">
      <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-20 lg:grid-cols-[3fr_2fr]">
        {/* Left: Bio */}
        <div>
          <FadeIn>
            <SectionHeader
              label="About"
              title="Building things that matter."
              description=""
            />
          </FadeIn>

          <div className="space-y-5">
            {personalInfo.bio.map((paragraph, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-gray-500">
                  {paragraph}
                </p>
              </FadeIn>
            ))}
          </div>

          {/* Values row */}
          <FadeIn delay={0.3}>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {[
                { emoji: "⚡", label: "Fast learner" },
                { emoji: "🔨", label: "Builder mindset" },
                { emoji: "🎯", label: "Result-driven" },
                { emoji: "🤖", label: "AI-first approach" },
                { emoji: "📊", label: "Data-driven" },
                { emoji: "🚀", label: "Ship fast" },
              ].map((v) => (
                <div
                  key={v.label}
                  className="flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm text-gray-600"
                >
                  <span>{v.emoji}</span>
                  <span className="font-medium">{v.label}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right: Skills */}
        <div>
          <FadeIn delay={0.1}>
            <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-gray-400">
              Tech Stack
            </p>
          </FadeIn>

          <div className="space-y-6">
            {(Object.keys(skillCategories) as (keyof typeof skillCategories)[]).map(
              (category, idx) => (
                <FadeIn key={category} delay={idx * 0.07}>
                  <div>
                    <p className="mb-2.5 text-xs font-medium text-gray-400">
                      {skillCategories[category]}
                    </p>
                    <StaggerContainer className="flex flex-wrap gap-1.5">
                      {(grouped[category] ?? []).map((name) => (
                        <StaggerItem key={name}>
                          <TechBadge name={name} />
                        </StaggerItem>
                      ))}
                    </StaggerContainer>
                  </div>
                </FadeIn>
              ),
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
