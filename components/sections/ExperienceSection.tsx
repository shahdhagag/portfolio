"use client";

import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { education } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="My academic background">
          Education
        </SectionHeading>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700" />

          {education.map((edu, i) => (
            <motion.div
              key={`${edu.institution}-${edu.degree}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="relative flex flex-col md:flex-row gap-4 md:gap-8 mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center z-10">
                <FiBookOpen className="w-4 h-4 text-white" />
              </div>

              {/* Content card */}
              <div className="ml-16 md:ml-0 md:w-1/2">
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm border border-gray-200 dark:border-gray-700">
                  <span className="text-sm text-cyan-600 dark:text-cyan-400 font-medium">
                    {edu.duration}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-1">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                    {edu.institution}
                  </p>
                  {edu.cgpa && (
                    <div className="flex items-center gap-1.5 mb-3">
                      <FiAward className="w-4 h-4 text-cyan-500" />
                      <span className="text-sm font-medium text-cyan-600 dark:text-cyan-400">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  )}
                  {edu.highlights && (
                    <ul className="space-y-2">
                      {edu.highlights.map((item, j) => (
                        <li
                          key={j}
                          className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2"
                        >
                          <span className="mt-1.5 w-1.5 h-1.5 bg-cyan-500 rounded-full flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
