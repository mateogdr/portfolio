"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98];
import { Download, Eye, X, FileText } from "lucide-react";
import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/animations/FadeIn";
import { personalInfo } from "@/lib/data";

function CVPreviewModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950/60 px-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: EASE }}
          className="relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
            <div className="flex items-center gap-2.5">
              <div className="rounded-lg bg-gray-100 p-1.5">
                <FileText size={14} className="text-gray-600" />
              </div>
              <span className="text-sm font-semibold text-gray-950">
                {personalInfo.name} — CV
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Button
                href="/cv.pdf"
                external
                variant="secondary"
                size="sm"
                icon={<Download size={13} />}
              >
                Download PDF
              </Button>
              <button
                onClick={onClose}
                className="ml-1 rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* PDF iframe — overflow hidden oculta la toolbar de Chrome */}
          <div className="relative h-[70vh] w-full overflow-hidden bg-gray-50">
            <iframe
              src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0"
              className="absolute inset-0 w-full"
              style={{
                height: "calc(100% + 48px)",
                marginTop: "-48px",
              }}
              title="CV Preview"
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export function CV() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <>
      <SectionWrapper id="cv">
        <FadeIn>
          <div className="relative overflow-hidden rounded-2xl border border-gray-200">
            {/* Blurred CV background */}
            <div className="absolute inset-0 overflow-hidden">
              <iframe
                src="/cv.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                className="pointer-events-none h-full w-full"
                style={{ filter: "blur(2px)", opacity: 0.35 }}
                title="CV background"
              />
            </div>

            {/* Gradient overlay — keeps text readable */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/75 via-white/70 to-white/80" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center px-8 py-14 text-center sm:py-16">
              {/* Icon */}
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-gray-200 bg-white shadow-sm">
                <FileText size={22} className="text-gray-700" />
              </div>

              {/* Text */}
              <h2 className="text-2xl font-semibold tracking-tight text-gray-950 sm:text-3xl">
                Curriculum Vitae
              </h2>
              <p className="mt-3 max-w-md text-base text-gray-500">
                A summary of my education, projects, skills, and experience —
                ready for recruiters and engineers alike.
              </p>

              {/* Actions */}
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Button
                  onClick={() => setPreviewOpen(true)}
                  variant="secondary"
                  size="lg"
                  icon={<Eye size={16} />}
                  iconPosition="left"
                >
                  Preview CV
                </Button>
                <Button
                  href="/cv.pdf"
                  external
                  variant="primary"
                  size="lg"
                  icon={<Download size={16} />}
                  iconPosition="left"
                >
                  Download PDF
                </Button>
              </div>

              {/* Last updated */}
              <p className="mt-6 text-xs text-gray-400">
                Last updated: May 2025
              </p>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>

      {previewOpen && <CVPreviewModal onClose={() => setPreviewOpen(false)} />}
    </>
  );
}
