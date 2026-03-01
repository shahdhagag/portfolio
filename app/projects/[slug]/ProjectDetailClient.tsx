"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  FiArrowLeft,
  FiGithub,
  FiExternalLink,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiCheckCircle,
  FiImage,
  FiPlay,
} from "react-icons/fi";
import { type Project } from "@/lib/data";

interface Props {
  project: Project;
  screenshots: string[];
}

function ScreenshotGallery({ screenshots }: Readonly<{ screenshots: string[] }>) {
  const [selected, setSelected] = useState<number | null>(null);

  if (screenshots.length === 0) {
    return (
      <div className="text-center py-16 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
        <FiImage className="w-12 h-12 mx-auto text-gray-400 mb-3" />
        <p className="text-gray-500 dark:text-gray-400">
          No screenshots available yet
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">
          Screenshots will appear when added to the repository&apos;s /assets or
          /screenshots folder
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {screenshots.map((url, i) => (
          <motion.button
            key={url}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setSelected(i)}
            className="group"
          >
            {/* Phone frame */}
            <div className="relative bg-gray-900 dark:bg-gray-950 rounded-[2rem] p-[5px] shadow-lg hover:shadow-xl transition-shadow">
              {/* Notch */}
              <div className="absolute top-[5px] left-1/2 -translate-x-1/2 w-1/3 h-[18px] bg-gray-900 dark:bg-gray-950 rounded-b-xl z-10" />
              {/* Screen */}
              <div className="relative aspect-[9/19.5] rounded-[1.75rem] overflow-hidden bg-white dark:bg-gray-800">
                <Image
                  src={url}
                  alt={`Screenshot ${i + 1}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-[1.75rem]" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox modal */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 z-10"
            aria-label="Close"
          >
            <FiX className="w-8 h-8" />
          </button>

          {screenshots.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(
                    selected === 0 ? screenshots.length - 1 : selected - 1
                  );
                }}
                className="absolute left-4 text-white/80 hover:text-white p-2 z-10"
                aria-label="Previous"
              >
                <FiChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelected(
                    selected === screenshots.length - 1 ? 0 : selected + 1
                  );
                }}
                className="absolute right-4 text-white/80 hover:text-white p-2 z-10"
                aria-label="Next"
              >
                <FiChevronRight className="w-8 h-8" />
              </button>
            </>
          )}

          <div
            role="dialog"
            className="relative max-w-sm w-full max-h-[85vh]"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => {
              if (e.key === "Escape") setSelected(null);
            }}
          >
            {/* Phone frame in lightbox */}
            <div className="relative bg-gray-900 rounded-[2.5rem] p-[6px] shadow-2xl mx-auto max-w-[320px]">
              {/* Notch */}
              <div className="absolute top-[6px] left-1/2 -translate-x-1/2 w-1/3 h-[22px] bg-gray-900 rounded-b-xl z-10" />
              {/* Screen */}
              <div className="relative rounded-[2.2rem] overflow-hidden">
                <Image
                  src={screenshots[selected]}
                  alt={`Screenshot ${selected + 1}`}
                  width={400}
                  height={800}
                  className="w-full h-auto max-h-[80vh] object-contain"
                  unoptimized
                />
              </div>
            </div>
            <p className="text-center text-white/60 text-sm mt-4">
              {selected + 1} / {screenshots.length}
            </p>
          </div>
        </motion.div>
      )}
    </>
  );
}

export default function ProjectDetailClient({ project, screenshots }: Readonly<Props>) {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors mb-8 group"
          >
            <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium">Back to Projects</span>
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <div className="flex items-start justify-between flex-wrap gap-4 mb-4">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
                {project.title}
              </h1>
              {project.featured && (
                <span className="inline-block mt-3 text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300 px-3 py-1 rounded-full font-medium">
                  Featured Project
                </span>
              )}
            </div>
          </div>

          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
            {project.longDescription || project.description}
          </p>
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-3 mb-12"
        >
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium text-sm"
            >
              <FiGithub className="w-4 h-4" />
              View on GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition-colors font-medium text-sm"
            >
              <FiExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          )}
          {project.demoVideo && (
            <a
              href={project.demoVideo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors font-medium text-sm"
            >
              <FiPlay className="w-4 h-4" />
              Watch Demo Video
            </a>
          )}
        </motion.div>

        {/* Tech stack & Features grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-14">
          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center">
                <span className="text-sm">⚡</span>
              </span>
              Tools & Technologies
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 border border-gray-200 dark:border-gray-700"
          >
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <span className="w-8 h-8 bg-cyan-100 dark:bg-cyan-900/40 rounded-lg flex items-center justify-center">
                <span className="text-sm">✨</span>
              </span>
              Key Features
            </h2>
            <ul className="space-y-2.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-gray-600 dark:text-gray-300"
                >
                  <FiCheckCircle className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Screenshots section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
            <span className="w-10 h-10 bg-cyan-100 dark:bg-cyan-900/40 rounded-xl flex items-center justify-center">
              <FiImage className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
            </span>
            Screenshots
          </h2>
          <ScreenshotGallery screenshots={screenshots} />
        </motion.div>
      </div>
    </div>
  );
}
