"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Download, Github, Linkedin } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export function Hero() {
  const handleScrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-white pt-16">
      {/* Subtle grid background */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-pattern bg-grid-sm opacity-[0.35]"
        aria-hidden="true"
      />

      {/* Subtle radial gradient to fade grid at edges */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, transparent 40%, white 100%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-5xl px-6 py-24 md:px-8 md:py-32 lg:px-12">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          {/* Status badge */}
          <motion.div variants={item} className="mb-8">
            <Badge variant="dot" color="green">
              Available for internships & junior roles
            </Badge>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            variants={item}
            className="text-5xl font-semibold tracking-tight text-gray-950 sm:text-6xl md:text-7xl"
          >
            {personalInfo.name}
          </motion.h1>

          {/* Title */}
          <motion.p
            variants={item}
            className="mt-4 text-xl font-medium text-gray-400 sm:text-2xl"
          >
            {personalInfo.title}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-lg leading-relaxed text-gray-500"
          >
            {personalInfo.subtitle}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={item}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Button
              onClick={handleScrollToProjects}
              variant="primary"
              size="lg"
              icon={<ArrowUpRight size={16} />}
            >
              View Projects
            </Button>

            <Button
              href="/cv.pdf"
              external
              variant="secondary"
              size="lg"
              icon={<Download size={16} />}
            >
              Download CV
            </Button>

            <Button
              href={personalInfo.github}
              external
              variant="ghost"
              size="lg"
              icon={<Github size={16} />}
            >
              GitHub
            </Button>

            <Button
              href={personalInfo.linkedin}
              external
              variant="ghost"
              size="lg"
              icon={<Linkedin size={16} />}
            >
              LinkedIn
            </Button>
          </motion.div>

          {/* Subtle stats row */}
          <motion.div
            variants={item}
            className="mt-16 flex flex-wrap items-center gap-8 border-t border-gray-100 pt-8"
          >
            {[
              { value: "5+", label: "Projects shipped" },
              { value: "3+", label: "Years coding" },
              { value: "2", label: "Languages" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-gray-950">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-1.5"
        >
          <div className="h-8 w-5 rounded-full border border-gray-300 p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-1.5 w-1.5 rounded-full bg-gray-400"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
