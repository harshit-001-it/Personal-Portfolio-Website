export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  language: string;
  topics: string[];
  fork: boolean;
}

export async function fetchGitHubRepos(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=10`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error("Failed to fetch repositories");
    }

    const data = await response.json();
    
    // Sort by stars and filter out forks
    return data
      .filter((repo: GitHubRepo) => !repo.fork)
      .sort((a: GitHubRepo, b: GitHubRepo) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("GitHub Fetch Error:", error);
    return [];
  }
}
