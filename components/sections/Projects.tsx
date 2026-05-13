"use client";

import { useState } from "react";
import { motion, type Variants } from "framer-motion";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
import Image from "next/image";
import { ArrowUpRight, Github, ExternalLink, Zap } from "lucide-react";
import { projects } from "@/lib/data";
import type { Project } from "@/types";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { TechBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const statusLabel: Record<Project["status"], { label: string; color: string }> = {
  live: { label: "Live", color: "text-emerald-600 bg-emerald-50" },
  building: { label: "Building", color: "text-amber-600 bg-amber-50" },
  archived: { label: "Archived", color: "text-gray-500 bg-gray-100" },
};

function FeaturedProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: EASE }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl hover:shadow-gray-100"
    >
      {/* Image */}
      <div className="relative h-52 w-full overflow-hidden bg-gray-50 sm:h-64">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gray-950/0 transition-colors duration-300 group-hover:bg-gray-950/10" />

        {/* Status pill */}
        <div className="absolute left-4 top-4">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium",
              statusLabel[project.status].color,
            )}
          >
            <span className="h-1.5 w-1.5 rounded-full bg-current" />
            {statusLabel[project.status].label}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-950 transition-colors group-hover:text-gray-700">
            {project.title}
          </h3>
          <p className="mt-0.5 text-sm text-gray-400">{project.tagline}</p>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-gray-500">
          {project.description}
        </p>

        {/* Problem statement */}
        <div className="mb-4 rounded-lg border border-gray-100 bg-gray-50 px-3 py-2.5">
          <p className="text-xs font-medium text-gray-400">Problem solved</p>
          <p className="mt-0.5 text-xs text-gray-600 leading-relaxed">{project.problem}</p>
        </div>

        {/* Metrics */}
        {project.metrics && (
          <div className="mb-4 flex flex-wrap gap-2">
            {project.metrics.map((metric) => (
              <span
                key={metric}
                className="inline-flex items-center gap-1 text-xs text-gray-500"
              >
                <Zap size={10} className="text-amber-500" />
                {metric}
              </span>
            ))}
          </div>
        )}

        {/* Stack */}
        <div className="mb-5 flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {project.liveUrl && (
            <Button
              href={project.liveUrl}
              external
              variant="primary"
              size="sm"
              icon={<ExternalLink size={13} />}
            >
              Live Demo
            </Button>
          )}
          <Button
            href={project.githubUrl}
            external
            variant="secondary"
            size="sm"
            icon={<Github size={13} />}
          >
            Source
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

function SecondaryProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group flex flex-col justify-between rounded-xl border border-gray-200 bg-white p-5 transition-shadow hover:shadow-md hover:shadow-gray-100"
    >
      <div>
        <div className="mb-3 flex items-start justify-between">
          <h3 className="font-semibold text-gray-950">{project.title}</h3>
          <span
            className={cn(
              "ml-2 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium",
              statusLabel[project.status].color,
            )}
          >
            {statusLabel[project.status].label}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-gray-500">{project.description}</p>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 4).map((tech) => (
            <TechBadge key={tech} name={tech} />
          ))}
          {project.stack.length > 4 && (
            <span className="text-xs text-gray-400">+{project.stack.length - 4}</span>
          )}
        </div>
      </div>
      <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-700"
        >
          <Github size={13} />
          Repository
          <ArrowUpRight size={11} />
        </a>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-400 transition-colors hover:text-gray-700"
          >
            <ExternalLink size={13} />
            Demo
            <ArrowUpRight size={11} />
          </a>
        )}
      </div>
    </motion.div>
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
          description="A selection of projects spanning AI, automation, data engineering, and full-stack SaaS — each one solving a real problem."
        />
      </FadeIn>

      {/* Featured */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project) => (
          <FeaturedProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Secondary */}
      <div className="mt-12">
        <FadeIn>
          <div className="mb-6 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
              Other Projects
            </h3>
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-sm text-gray-400 transition-colors hover:text-gray-700"
            >
              {showAll ? "Show less" : `Show all (${secondary.length})`}
            </button>
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
    </SectionWrapper>
  );
}
