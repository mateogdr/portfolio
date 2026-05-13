"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/animations/FadeIn";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    label: "GitHub",
    value: "@mateg",
    href: personalInfo.github,
    icon: Github,
    description: "Code & open source",
  },
  {
    label: "LinkedIn",
    value: "Mateo García",
    href: personalInfo.linkedin,
    icon: Linkedin,
    description: "Professional profile",
  },
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    description: "Best way to reach me",
  },
];

type FormState = "idle" | "loading" | "success" | "error";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState<FormData>({ name: "", email: "", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      setFormState("success");
    } else {
      setFormState("error");
    }
  };

  const inputClass = cn(
    "w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder-gray-400",
    "transition-all duration-150",
    "focus:border-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-950/10",
  );

  return (
    <SectionWrapper id="contact" background="white">
      <div className="grid gap-16 md:grid-cols-[1fr_1fr] md:gap-20">
        {/* Left: heading + socials */}
        <div>
          <FadeIn>
            <SectionHeader
              label="Contact"
              title="Let's work together."
              description="I'm actively looking for internship and junior positions in software engineering, AI, or data. Open to remote or on-site opportunities."
            />
          </FadeIn>

          {/* Availability indicator */}
          <FadeIn delay={0.1}>
            <div className="mb-8 inline-flex items-center gap-2 rounded-xl border border-emerald-100 bg-emerald-50 px-4 py-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="text-sm font-medium text-emerald-700">
                Available for new opportunities
              </span>
            </div>
          </FadeIn>

          <StaggerContainer className="space-y-3">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <StaggerItem key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white p-4 transition-all hover:border-gray-300 hover:shadow-sm"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-gray-100 bg-gray-50">
                      <Icon size={16} className="text-gray-600" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-950">
                        {link.label}
                      </p>
                      <p className="text-xs text-gray-400">{link.description}</p>
                    </div>
                    <p className="ml-auto text-sm text-gray-500">{link.value}</p>
                  </a>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Right: contact form */}
        <FadeIn delay={0.15}>
          <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
            {formState === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex h-full min-h-[320px] flex-col items-center justify-center text-center"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-50">
                  <CheckCircle size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-950">
                  Message sent!
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  Thanks for reaching out. I'll get back to you within 24
                  hours.
                </p>
                <button
                  onClick={() => {
                    setFormState("idle");
                    setForm({ name: "", email: "", message: "" });
                  }}
                  className="mt-6 text-sm text-gray-400 underline underline-offset-4 hover:text-gray-700"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {formState === "error" && (
                  <div className="rounded-lg border border-red-100 bg-red-50 px-4 py-3 text-sm text-red-600">
                    Something went wrong. Please try emailing directly at{" "}
                    <a href="mailto:mategdr@gmail.com" className="underline underline-offset-2">
                      mategdr@gmail.com
                    </a>
                  </div>
                )}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-1.5 block text-xs font-medium text-gray-600"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-gray-600"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-gray-600"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    value={form.message}
                    onChange={handleChange}
                    className={cn(inputClass, "resize-none")}
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={formState === "loading"}
                  icon={
                    formState === "loading" ? (
                      <svg
                        className="animate-spin"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8v8z"
                        />
                      </svg>
                    ) : (
                      <Send size={14} />
                    )
                  }
                  className="w-full justify-center"
                >
                  {formState === "loading" ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
        </FadeIn>
      </div>
    </SectionWrapper>
  );
}
