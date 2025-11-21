import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="min-h-[70vh] flex flex-col-reverse md:flex-row items-center justify-between gap-10">
      <div className="max-w-xl text-center md:text-left">
        <p className="text-sm uppercase tracking-[0.2em] text-gray-500">Hello, I’m</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-semibold leading-tight">
          Mehul <span className="font-light">Kumawat</span>
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Developer crafting <span className="font-medium">scalable systems</span> and{" "}
          <span className="font-medium">user-centric interfaces</span>.
        </p>
        <p className="mt-3 text-sm text-gray-500">
          Frontend Developer · Salesforce Developer · Photographer · Travel Enthusiast
        </p>

        <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <Link to="/contact" className="px-5 py-2 rounded-full bg-black text-white text-sm hover:opacity-90 transition text-center">
            Contact
          </Link>
          <a href="#" className="px-5 py-2 rounded-full border border-black text-sm hover:bg-black hover:text-white transition text-center">
            View Resume
          </a>
        </div>
      </div>

    <div className="w-40 h-40 md:w-56 md:h-56 rounded-2xl overflow-hidden bg-gray-200/70">
    <img
        src="/mehul-hero.jpg"
        alt="Mehul Kumawat"
        className="w-full h-full object-cover"
    />
    </div>

    </section>
  );
};

export default Hero;
