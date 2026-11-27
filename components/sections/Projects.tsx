"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { TechBadge } from "@/components/ui/Badge";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { ProjectCover, StatusPill } from "@/components/projects/ProjectCover";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
const MAX_BADGES = 3;

function StackPreview({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {stack.slice(0, MAX_BADGES).map((tech) => (
        <TechBadge key={tech} name={tech} />
      ))}
      {stack.length > MAX_BADGES && (
        <span className="text-xs text-gray-400">+{stack.length - MAX_BADGES}</span>
      )}
    </div>
  );
}

function ViewProject() {
  return (
    <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-900">
      View project
      <ArrowRight
        size={14}
        className="transition-transform duration-200 group-hover:translate-x-0.5"
      />
    </span>
  );
}

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
    >
      <Link
        href={`/projects/${project.id}`}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2"
      >
        <div className="relative h-44 w-full overflow-hidden bg-gray-50">
          <ProjectCover project={project} />
          <div className="absolute inset-0 bg-gray-950/0 transition-colors duration-300 group-hover:bg-gray-950/10" />
          <div className="absolute left-4 top-4">
            <StatusPill status={project.status} />
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <h3 className="text-lg font-semibold text-gray-950">{project.title}</h3>
          <p className="mt-1 text-sm leading-relaxed text-gray-500">{project.tagline}</p>

          <div className="mt-4">
            <StackPreview stack={project.stack} />
          </div>

          <div className="mt-auto pt-5">
            <ViewProject />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.id}`}
      className="group flex h-full flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md hover:shadow-gray-100"
    >
      <div>
        <div className="mb-2 flex items-start justify-between gap-2">
          <h3 className="font-semibold text-gray-950">{project.title}</h3>
          <StatusPill status={project.status} />
        </div>
        <p className="text-sm leading-relaxed text-gray-500">{project.tagline}</p>
        <div className="mt-3">
          <StackPreview stack={project.stack} />
        </div>
      </div>
      <div className="mt-4 border-t border-gray-100 pt-4">
        <ViewProject />
      </div>
    </Link>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const featured = projects.filter((p) => p.featured);
  const secondary = projects.filter((p) => !p.featured);

  return (
    <SectionWrapper id="projects">
      <FadeIn>
        <SectionHeader
          label="Projects"
          title="What I've built."
          description="Data, machine learning and full-stack projects, each one built end to end."
        />
      </FadeIn>

      {/* Featured */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Secondary */}
      {secondary.length > 0 && (
        <div className="mt-12">
          <FadeIn>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-sm font-semibold uppercase tracking-widest text-gray-400">
                Other Projects
              </h3>
              {secondary.length > 2 && (
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-sm text-gray-400 transition-colors hover:text-gray-700"
                >
                  {showAll ? "Show less" : `Show all (${secondary.length})`}
                </button>
              )}
            </div>
          </FadeIn>

          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {(showAll ? secondary : secondary.slice(0, 2)).map((project) => (
              <StaggerItem key={project.id}>
                <SecondaryProjectCard project={project} />
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      )}
    </SectionWrapper>
  );
}
