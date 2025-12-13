import { useState } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold cursor-pointer">
          Dharmendra<span className="text-indigo-500">.dev</span>
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-lg">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-indigo-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-indigo-400"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-indigo-400"
            >
              Skills
            </Link>
          </li>

          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-indigo-400"
            >
              Projects
            </Link>
          </li>

          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer hover:text-indigo-400"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? (
            <span className="text-3xl">✖</span>
          ) : (
            <span className="text-3xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {["home", "about", "skills", "projects", "contact"].map(
              (section) => (
                <li key={section}>
                  <Link
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(false)}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
