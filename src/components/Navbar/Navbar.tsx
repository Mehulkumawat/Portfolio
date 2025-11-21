import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="border-b bg-[#fdf9f3]/90 backdrop-blur sticky top-0 z-20">
      <nav className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: Logo */}
        <NavLink to="/" className="text-xl font-bold">
          Mehul
        </NavLink>

        {/* Right: Links */}
        <div className="flex flex-wrap gap-3 text-sm sm:justify-end">
          <NavLink to="/about">About</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/photography">Photography</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/contact">Contact</NavLink>

          {/* Login placeholder – no logic yet */}
          <button className="opacity-50 cursor-not-allowed">
            Login
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
