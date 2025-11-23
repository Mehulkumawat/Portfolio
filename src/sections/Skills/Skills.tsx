const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux / State Management"],
  },
  {
    category: "Salesforce",
    items: ["Apex", "Lightning Web Components (LWC)", "Triggers", "Flows", "SOQL"],
  },
  {
    category: "Photography",
    items: ["Street", "Travel", "Portrait", "Composition"],
  },
  {
    category: "Other",
    items: ["Git", "REST APIs", "Performance Optimization", "Agile Methodologies"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-[60vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Skills
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Tools, stacks & areas I’m confident in.
        </h2>
        <p className="mt-3 text-gray-600 max-w-2xl">
          These skills come from engineering work, project experience, and personal learning. Each reflects how I build, solve, and create.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div key={group.category} className="rounded-2xl border border-gray-200 bg-white/60 p-5">
            <h3 className="text-base font-semibold">{group.category}</h3>
            <ul className="mt-2 flex flex-wrap gap-2 text-sm text-gray-700">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-gray-300 px-3 py-0.5"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
