"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { personalInfo, education } from "@/lib/data";
import { FiMapPin, FiPhone, FiCalendar, FiAward } from "react-icons/fi";
import { SiFlutter } from "react-icons/si";

export default function AboutSection() {
  const edu = education[0];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Get to know me">About Me</SectionHeading>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar / Branding card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="w-72 sm:w-80 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <SiFlutter className="w-10 h-10" />
                <div>
                  <p className="text-lg font-bold">Shahd Ahmed</p>
                  <p className="text-cyan-100 text-sm">Flutter Developer</p>
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2 text-cyan-100">
                  <FiMapPin className="w-4 h-4 flex-shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-100">
                  <FiPhone className="w-4 h-4 flex-shrink-0" />
                  <span>{personalInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-100">
                  <FiCalendar className="w-4 h-4 flex-shrink-0" />
                  <span>Class of 2025</span>
                </div>
                <div className="flex items-center gap-2 text-cyan-100">
                  <FiAward className="w-4 h-4 flex-shrink-0" />
                  <span>CGPA {edu.cgpa}</span>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="text-xs text-cyan-100">{edu.degree}</p>
                <p className="text-xs text-cyan-200 mt-0.5">{edu.institution}</p>
              </div>
            </div>
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              {personalInfo.role}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              I am passionate about crafting pixel-perfect, performant mobile
              experiences. I thrive on turning ideas into production-ready apps
              with clean code and scalable architecture. Always eager to learn
              new tools and contribute to impactful projects.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={personalInfo.resumeUrl}
                className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-full transition-colors"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-cyan-600 text-cyan-600 dark:text-cyan-400 dark:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 font-medium rounded-full transition-colors"
              >
                Let&apos;s Talk
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
