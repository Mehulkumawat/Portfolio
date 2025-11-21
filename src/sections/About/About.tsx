const About = () => {
  return (
    <section className="min-h-[60vh] flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
      {/* Left: Main bio */}
      <div className="max-w-2xl">
        <p className="text-sm uppercase tracking-[0.18em] text-gray-500 mb-2">
          About
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold">
          A developer who loves clean UX, good stories, and curious journeys.
        </h2>

        <p className="mt-5 text-gray-700 leading-relaxed">
          I’m Mehul Kumawat, a frontend and Salesforce developer who enjoys building
          scalable systems that still feel simple and human to use. I care about how
          things look, but even more about how they feel when someone actually uses them.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Outside of code, you’ll usually find me with a camera in hand or planning
          the next place to explore. Photography and travel help me notice details,
          patterns, and emotions that I bring back into the products I build.
        </p>

        <p className="mt-4 text-gray-700 leading-relaxed">
          Right now, I’m focused on leveling up as a frontend engineer—balancing clean
          UI, performance, and maintainable architecture—while still staying close to
          the people and stories behind the screen.
        </p>
      </div>

      {/* Right: Small info panel */}
      <aside className="md:min-w-[200px] space-y-4 text-sm text-gray-700">
        <div>
          <p className="font-semibold text-gray-900">Currently</p>
          <p>Building my portfolio & sharpening frontend craft.</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Based in</p>
          <p>India</p>
        </div>
        <div>
          <p className="font-semibold text-gray-900">Roles</p>
          <p>Frontend Developer</p>
          <p>Salesforce Developer</p>
          <p>Photographer</p>
          <p>Travel Enthusiast</p>
        </div>
      </aside>
    </section>
  );
};

export default About;
