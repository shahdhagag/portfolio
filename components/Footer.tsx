import { personalInfo } from "@/lib/data";
import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { SiFlutter } from "react-icons/si";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <FiGithub className="w-5 h-5" />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all hover:scale-110"
              aria-label="Email"
            >
              <FiMail className="w-5 h-5" />
            </a>
          </div>

          <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
            Built with <FiHeart className="w-4 h-4 text-red-500" /> &amp; <SiFlutter className="w-4 h-4 text-cyan-500" />
          </p>
        </div>
      </div>
    </footer>
  );
}
