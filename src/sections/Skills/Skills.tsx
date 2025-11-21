const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
  },
  {
    category: "Salesforce",
    items: ["Apex", "LWC", "Triggers", "Flows", "SOQL"],
  },
  {
    category: "Photography",
    items: ["Street", "Travel", "Portraits"],
  },
  {
    category: "Other",
    items: ["Git", "REST APIs", "Performance tuning"],
  },
];

const Skills = () => {
  return (
    <section className="min-h-[50vh]">
      <header className="mb-8 text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500">
          Skills
        </p>
        <h2 className="mt-2 text-3xl md:text-4xl font-semibold">
          Tools, stacks, and areas I’m comfortable with.
        </h2>
      </header>

      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group) => (
          <div
            key={group.category}
            className="rounded-2xl border border-gray-200 bg-white/60 p-5"
          >
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
