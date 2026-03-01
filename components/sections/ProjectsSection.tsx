"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FiGithub, FiExternalLink, FiArrowRight } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const router = useRouter();
  const previewScreenshots = project.screenshots?.slice(0, 3) ?? [];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      onClick={() => router.push(`/projects/${project.slug}`)}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-cyan-300 dark:hover:border-cyan-700 transition-all group cursor-pointer h-full"
    >
      {/* Card cover */}
      <div className="h-52 relative overflow-hidden">
        {project.coverImage ? (
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : previewScreenshots.length > 0 ? (
          /* Auto-generated phone mockup preview from screenshots */
          <div className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 flex items-center justify-center gap-3 px-6 py-4">
            {previewScreenshots.map((url, i) => (
              <div
                key={url}
                className={`relative flex-shrink-0 transition-transform duration-300 ${
                  i === 1
                    ? "w-[72px] h-[140px] z-10 group-hover:scale-110"
                    : "w-[60px] h-[120px] opacity-80 group-hover:opacity-100"
                } ${i === 0 ? "-rotate-6" : i === 2 ? "rotate-6" : ""}`}
              >
                <div className="w-full h-full bg-gray-700 rounded-xl p-[2px] shadow-lg">
                  <div className="relative w-full h-full rounded-[10px] overflow-hidden bg-white dark:bg-gray-800">
                    <Image
                      src={url}
                      alt={`${project.title} preview ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                      unoptimized
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full bg-gradient-to-br from-cyan-500/80 to-blue-600/80 flex items-center justify-center">
            <span className="text-white text-lg font-semibold opacity-80 group-hover:opacity-100 transition-opacity">
              {project.title}
            </span>
          </div>
        )}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="inline-flex items-center gap-1 text-xs text-white/90 bg-white/20 backdrop-blur-sm px-2.5 py-1 rounded-full">
            View Details <FiArrowRight className="w-3 h-3" />
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>
          {project.featured && (
            <span className="text-xs bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300 px-2 py-1 rounded-full font-medium flex-shrink-0">
              Featured
            </span>
          )}
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="text-xs px-2.5 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="text-xs px-2.5 py-1 text-gray-400 dark:text-gray-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
          <div className="flex items-center gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiGithub className="w-4 h-4" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-gray-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                <FiExternalLink className="w-4 h-4" />
                Demo
              </a>
            )}
          </div>
          <span className="flex items-center gap-1 text-sm text-cyan-600 dark:text-cyan-400 group-hover:text-cyan-700 dark:group-hover:text-cyan-300 font-medium transition-colors">
            Details <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading subtitle="Flutter apps I've built">
          Projects
        </SectionHeading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
