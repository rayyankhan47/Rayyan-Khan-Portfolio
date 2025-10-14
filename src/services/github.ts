export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export const fetchPinnedRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    // GitHub doesn't have a REST API for pinned repos, so we'll use GraphQL
    const query = `
      query {
        user(login: "${username}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                id
                name
                description
                url
                homepageUrl
                repositoryTopics(first: 10) {
                  nodes {
                    topic {
                      name
                    }
                  }
                }
                primaryLanguage {
                  name
                }
                stargazerCount
                updatedAt
                owner {
                  login
                  avatarUrl
                }
              }
            }
          }
        }
      }
    `;

    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const result = await response.json();
    const pinnedItems = result.data?.user?.pinnedItems?.nodes || [];

    // Transform GraphQL response to match REST API format
    return pinnedItems.map((repo: any) => ({
      id: repo.id,
      name: repo.name,
      full_name: `${repo.owner.login}/${repo.name}`,
      description: repo.description,
      html_url: repo.url,
      homepage: repo.homepageUrl,
      topics: repo.repositoryTopics.nodes.map((t: any) => t.topic.name),
      language: repo.primaryLanguage?.name || null,
      stargazers_count: repo.stargazerCount,
      updated_at: repo.updatedAt,
      owner: {
        login: repo.owner.login,
        avatar_url: repo.owner.avatarUrl,
      },
    }));
  } catch (error) {
    console.error('Error fetching pinned repos:', error);
    // Fallback to REST API - get user's own repos and show most recent
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
      if (!response.ok) throw new Error('REST API fallback failed');
      return await response.json();
    } catch {
      throw error;
    }
  }
};

export const fetchStarredRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}/starred?per_page=100`);
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const repos: GitHubRepo[] = await response.json();
    
    // Sort by most recently updated
    return repos.sort((a, b) => 
      new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime()
    );
  } catch (error) {
    console.error('Error fetching starred repos:', error);
    throw error;
  }
};
