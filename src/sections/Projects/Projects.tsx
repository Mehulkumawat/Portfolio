type Project = {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  github?: string;
};

const projects: Project[] = [
  {
    title: "Portfolio SPA",
    description:
      "A single-page portfolio built with React, TypeScript, and Tailwind, focused on clean UI and smooth content editing.",
    tech: ["React", "TypeScript", "Tailwind"],
    github: "#",
  },
  {
    title: "Salesforce Automation",
    description:
      "Custom Salesforce triggers and flows to automate business processes and reduce manual work.",
    tech: ["Apex", "Flows", "Salesforce"],
  },
  {
    title: "Photography Journal",
    description:
      "A visual journal concept to combine travel stories, photos, and narratives into one minimal experience.",
    tech: ["React", "Design", "Content"],
  },
];

const Projects = () => {
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

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="rounded-2xl border border-gray-200 bg-white/60 p-5 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-gray-600">{project.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-gray-300 px-2.5 py-0.5 text-xs text-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>

            {(project.link || project.github) && (
              <div className="mt-4 flex gap-4 text-sm">
                {project.link && (
                  <a
                    href={project.link}
                    className="underline underline-offset-4"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
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
    </section>
  );
};

export default Projects;
