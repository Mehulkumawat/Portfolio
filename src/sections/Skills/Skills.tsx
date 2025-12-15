import { useSkills } from "../../hooks/useSkills";

const Skills = () => {
  const { data: skills, isLoading, error } = useSkills();

  const groupedSkills =
    skills?.reduce<Record<string, typeof skills>>((acc, skill) => {
      acc[skill.category] = acc[skill.category] || [];
      acc[skill.category].push(skill);
      return acc;
    }, {}) || {};

  return (
    <section className="min-h-[60vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Skills
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Tools & technologies I work with.
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          A mix of frontend engineering, Salesforce development, and creative
          skills built over time.
        </p>
      </header>

      {isLoading && (
        <p className="text-sm text-gray-500">Loading skills…</p>
      )}

        {error && (
        <div className="text-sm text-red-500">
            <p>Something went wrong while loading skills.</p>
            <p className="mt-1 text-xs text-red-400">
            {error.message}
            </p>
        </div>
        )}

      {!isLoading && !error && skills && (
        <div className="grid gap-8 md:grid-cols-2">
  {Object.entries(groupedSkills).map(([category, items]) => (
    <div
      key={category}
      className="rounded-2xl border border-gray-200 bg-white/60 p-6 shadow-sm"
    >
      <h3 className="mb-4 text-lg font-semibold">
        {category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill.id}
            className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700"
          >
            {skill.name}
            {skill.level && (
              <span className="ml-1 text-xs text-gray-500">
                ({skill.level})
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  ))}
</div>

      )}
    </section>
  );
};

export default Skills;
