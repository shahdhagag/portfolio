// ============================================================================
// GitHub API — Fetch screenshots from repository /assets or /screenshots
// ============================================================================

export interface GitHubFile {
  name: string;
  download_url: string;
  type: string;
}

const GITHUB_USER = "shahdhagag";
const IMAGE_EXTENSIONS = [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"];

function isImage(filename: string): boolean {
  return IMAGE_EXTENSIONS.some((ext) =>
    filename.toLowerCase().endsWith(ext)
  );
}

/**
 * Fetch screenshot image URLs from a GitHub repo.
 * Looks in /assets, /screenshots, and /images folders.
 * Falls back to an empty array if nothing is found.
 */
export async function fetchRepoScreenshots(
  repoName: string
): Promise<string[]> {
  const foldersToTry = ["assets", "screenshots", "images", "Screenshots", "Assets"];
  const images: string[] = [];

  for (const folder of foldersToTry) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USER}/${repoName}/contents/${folder}`,
        {
          headers: {
            Accept: "application/vnd.github.v3+json",
          },
          next: { revalidate: 3600 }, // cache for 1 hour
        }
      );

      if (!res.ok) continue;

      const files: GitHubFile[] = await res.json();

      if (!Array.isArray(files)) continue;

      for (const file of files) {
        if (file.type === "file" && isImage(file.name) && file.download_url) {
          images.push(file.download_url);
        }
      }

      // If we found images in this folder, no need to check others
      if (images.length > 0) break;
    } catch {
      // Silently continue to next folder
      continue;
    }
  }

  return images;
}

/**
 * Fetch README content from a GitHub repo.
 */
export async function fetchRepoReadme(repoName: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${repoName}/readme`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return null;

    const data = await res.json();
    if (data.content) {
      return Buffer.from(data.content, "base64").toString("utf-8");
    }
    return null;
  } catch {
    return null;
  }
}
