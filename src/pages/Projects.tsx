import React, { useState, useEffect } from 'react';
import { fetchPinnedRepos, fetchStarredRepos } from '../services/github';
import type { GitHubRepo } from '../services/github';

const Projects: React.FC = () => {
  const [pinnedRepos, setPinnedRepos] = useState<GitHubRepo[]>([]);
  const [starredRepos, setStarredRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        const [pinned, starred] = await Promise.all([
          fetchPinnedRepos('rayyankhan47'),
          fetchStarredRepos('rayyankhan47'),
        ]);
        setPinnedRepos(pinned);
        setStarredRepos(starred);
        setError(null);
      } catch (err) {
        setError('Failed to load projects. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="mb-8">Projects</h1>
        <p className="text-gray-600">Loading projects...</p>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="mb-8">Projects</h1>
        <p className="text-red-600">{error}</p>
      </section>
    );
  }

  const RepoCard: React.FC<{ repo: GitHubRepo }> = ({ repo }) => (
    <article className="border border-gray-200 rounded-lg p-6 hover:border-gray-400 transition">
      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <h3 className="font-semibold text-lg">
            <a 
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="no-underline hover:underline"
            >
              {repo.name}
            </a>
          </h3>
          {repo.language && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-700 rounded">
              {repo.language}
            </span>
          )}
        </div>

        {repo.description && (
          <p className="text-gray-600 text-sm leading-relaxed">
            {repo.description}
          </p>
        )}

        {repo.topics && repo.topics.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <span 
                key={topic}
                className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-4 text-xs text-gray-500 pt-2">
          <span>⭐ {repo.stargazers_count}</span>
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black no-underline hover:underline"
            >
              Live Demo →
            </a>
          )}
        </div>
      </div>
    </article>
  );

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="space-y-12">
        <div>
          <h1 className="mb-4">Projects</h1>
          <p className="text-gray-700">
            A collection of my work and interesting repositories I've found.
          </p>
        </div>

        {/* My Projects (Pinned) */}
        <div>
          <h2 className="mb-6">My Projects</h2>
          {pinnedRepos.length === 0 ? (
            <p className="text-gray-600">No projects found.</p>
          ) : (
            <div className="grid gap-6">
              {pinnedRepos.map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </div>

        {/* Interesting Finds (Starred) */}
        <div className="pt-8 border-t border-gray-200">
          <h2 className="mb-4">Interesting Finds</h2>
          <p className="text-gray-600 text-sm mb-6">
            Projects and repositories I've found valuable, including resources on mathematics, 
            machine learning, and computer science theory.
          </p>
          {starredRepos.length === 0 ? (
            <p className="text-gray-600">No starred repositories found.</p>
          ) : (
            <div className="grid gap-6">
              {starredRepos.slice(0, 12).map((repo) => (
                <RepoCard key={repo.id} repo={repo} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
