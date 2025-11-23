import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col gap-12">
      {/* Top: main hero */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left: Text */}
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.2em] text-gray-500">
            Hello, I’m
          </p>

          <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
            Mehul <span className="font-light">Kumawat</span>
          </h1>

          <p className="mt-4 text-lg text-gray-700">
            Developer crafting <span className="font-medium">scalable systems</span>{" "}
            and <span className="font-medium">user-centric interfaces</span>.
          </p>

          <p className="mt-3 text-sm text-gray-500">
            Frontend Developer · Salesforce Developer · Photographer · Travel Enthusiast
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link
              to="/contact"
              className="px-5 py-2 rounded-full bg-black text-white text-sm hover:opacity-90 transition text-center"
            >
              Contact
            </Link>
            <a
              href="#"
              className="px-5 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition text-center"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-gray-200/70">
          <img
            src="/mehul-hero.jpg" // your image in public/
            alt="Mehul Kumawat"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Bottom: quick preview cards */}
      <div className="grid gap-4 md:grid-cols-3">
        <Link
          to="/about"
          className="rounded-2xl border border-gray-200 bg-white/70 p-4 hover:shadow-md transition flex flex-col gap-2"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            About
          </p>
          <p className="text-sm text-gray-800">
            Who I am, what I care about, and how I think about building things.
          </p>
        </Link>

        <Link
          to="/projects"
          className="rounded-2xl border border-gray-200 bg-white/70 p-4 hover:shadow-md transition flex flex-col gap-2"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Projects
          </p>
          <p className="text-sm text-gray-800">
            Selected work across frontend and Salesforce—built to solve real problems.
          </p>
        </Link>

        <Link
          to="/photography"
          className="rounded-2xl border border-gray-200 bg-white/70 p-4 hover:shadow-md transition flex flex-col gap-2"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-gray-500">
            Photography & Journal
          </p>
          <p className="text-sm text-gray-800">
            Stories, frames, and notes from travels and everyday life.
          </p>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
