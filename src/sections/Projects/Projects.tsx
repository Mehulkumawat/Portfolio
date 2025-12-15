import { useProjects } from "../../hooks/useProjects";

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();

  return (
    <section className="min-h-[60vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Projects
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Things I’ve built & worked on.
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          A mix of frontend work, Salesforce development, and ideas that connect
          design, code, and storytelling.
        </p>
      </header>

      {/* Loading / Error / Empty states */}
      {isLoading && (
        <p className="text-sm text-gray-500">Loading projects…</p>
      )}

        {error && (
        <div className="text-sm text-red-500">
            <p>Something went wrong while loading projects.</p>
            <p className="mt-1 text-xs text-red-400">
            {error.message}
            </p>
        </div>
        )}


      {!isLoading && !error && (!projects || projects.length === 0) && (
        <p className="text-sm text-gray-500">No projects found yet.</p>
      )}

      {/* Projects grid */}
      {!isLoading && !error && projects && projects.length > 0 && (
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.id}
              className="rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{project.title}</h3>
              {project.description && (
                <p className="mt-2 text-sm text-gray-600">
                  {project.description}
                </p>
              )}

              {project.tech_stack && project.tech_stack.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech_stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-gray-300 px-2.5 py-0.5 text-xs text-gray-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {(project.live_link || project.github_link) && (
                <div className="mt-4 flex gap-4 text-sm">
                  {project.live_link && (
                    <a
                      href={project.live_link}
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {project.github_link && (
                    <a
                      href={project.github_link}
                      className="underline underline-offset-4"
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;
