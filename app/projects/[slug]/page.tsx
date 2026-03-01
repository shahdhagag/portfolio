import { projects } from "@/lib/data";
import { fetchRepoScreenshots } from "@/lib/github";
import ProjectDetailClient from "./ProjectDetailClient";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Dynamic metadata for SEO
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Shahd Ahmed Youssef`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: Readonly<{
  params: { slug: string };
}>) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  // Merge hardcoded screenshots with any fetched from GitHub repo folders
  const screenshots: string[] = project.screenshots ? [...project.screenshots] : [];
  if (project.repoName) {
    const fetched = await fetchRepoScreenshots(project.repoName);
    // Add fetched screenshots that aren't already in the hardcoded list
    for (const url of fetched) {
      if (!screenshots.includes(url)) {
        screenshots.push(url);
      }
    }
  }

  return <ProjectDetailClient project={project} screenshots={screenshots} />;
}
