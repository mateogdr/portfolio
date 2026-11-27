import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ExternalLink, Github, Zap } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { TechBadge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProjectCover, StatusPill } from "@/components/projects/ProjectCover";
import { personalInfo, projects } from "@/lib/data";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};
  const title = `${project.title} — ${personalInfo.name}`;
  return {
    title,
    description: project.tagline,
    openGraph: { title, description: project.tagline, type: "article" },
  };
}

function SidebarBlock({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-gray-400">
        {title}
      </p>
      {children}
    </div>
  );
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const index = projects.findIndex((p) => p.id === id);
  if (index === -1) notFound();

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  const meta = [project.context, project.period].filter(Boolean).join(" · ");

  return (
    <>
      <Navbar />
      <main className="bg-white pb-24 pt-28 md:pt-32">
        <article className="mx-auto max-w-5xl px-6 md:px-8 lg:px-12">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-gray-700"
          >
            <ArrowLeft size={14} />
            All projects
          </Link>

          {/* Header */}
          <header className="mt-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <StatusPill status={project.status} />
              {meta && <span className="text-sm text-gray-400">{meta}</span>}
            </div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-lg text-gray-500">{project.tagline}</p>
          </header>

          {/* Cover */}
          <div className="relative mt-8 h-40 w-full overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 sm:h-52">
            <ProjectCover
              project={project}
              size="lg"
              sizes="(max-width: 1024px) 100vw, 960px"
              priority
            />
          </div>

          {/* Body */}
          <div className="mt-14 grid gap-12 md:grid-cols-[2fr_1fr] md:gap-16">
            <div className="space-y-12">
              <section>
                <h2 className="text-xl font-semibold text-gray-950">Overview</h2>
                <p className="mt-4 text-base leading-relaxed text-gray-500">
                  {project.description}
                </p>
              </section>

              {project.details && project.details.length > 0 && (
                <section>
                  <h2 className="text-xl font-semibold text-gray-950">What I did</h2>
                  <ul className="mt-4 space-y-3">
                    {project.details.map((d) => (
                      <li key={d} className="flex gap-3 text-base leading-relaxed text-gray-500">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-300" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              <section className="rounded-xl border border-gray-100 bg-gray-50 p-5">
                <h2 className="text-sm font-semibold text-gray-950">Problem solved</h2>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">{project.problem}</p>
              </section>
            </div>

            <aside className="space-y-10">
              {project.metrics && project.metrics.length > 0 && (
                <SidebarBlock title="Highlights">
                  <ul className="space-y-2.5">
                    {project.metrics.map((m) => (
                      <li key={m} className="flex items-start gap-2 text-sm text-gray-600">
                        <Zap size={13} className="mt-0.5 shrink-0 text-amber-500" />
                        {m}
                      </li>
                    ))}
                  </ul>
                </SidebarBlock>
              )}

              <SidebarBlock title="Stack">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </SidebarBlock>

              {(project.githubUrl || project.liveUrl) && (
                <SidebarBlock title="Links">
                  <div className="flex flex-wrap gap-2">
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
                    {project.githubUrl && (
                      <Button
                        href={project.githubUrl}
                        external
                        variant="secondary"
                        size="sm"
                        icon={<Github size={13} />}
                      >
                        Source code
                      </Button>
                    )}
                  </div>
                </SidebarBlock>
              )}
            </aside>
          </div>

          {/* Next project */}
          {next.id !== project.id && (
            <Link
              href={`/projects/${next.id}`}
              className="group mt-20 flex items-center justify-between gap-6 rounded-2xl border border-gray-200 p-6 transition-shadow hover:shadow-md hover:shadow-gray-100"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                  Next project
                </p>
                <p className="mt-2 text-lg font-semibold text-gray-950">{next.title}</p>
                <p className="mt-0.5 text-sm text-gray-500">{next.tagline}</p>
              </div>
              <ArrowRight
                size={20}
                className="shrink-0 text-gray-400 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-gray-900"
              />
            </Link>
          )}
        </article>
      </main>
      <Footer />
    </>
  );
}
