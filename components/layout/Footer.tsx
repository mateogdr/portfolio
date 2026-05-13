import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-5xl px-6 py-10 md:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <p className="text-sm text-gray-400">
            © {year}{" "}
            <span className="text-gray-600 font-medium">{personalInfo.name}</span>
          </p>

          <div className="flex items-center gap-1">
            <Link
              href={`mailto:${personalInfo.email}`}
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label="Email"
            >
              <Mail size={16} />
            </Link>
            <Link
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label="GitHub"
            >
              <Github size={16} />
            </Link>
            <Link
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
