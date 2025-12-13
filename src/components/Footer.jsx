import React from "react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left Side */}
        <p className="text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="text-indigo-400 font-semibold">
            Dharmendra Dhital
          </span>
          . All rights reserved.
        </p>

        {/* Right Side */}
        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Dharmendra-Dhital7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/dharmendra-dhital-128592290/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Dharmendra23062"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition duration-300 hover:scale-110"
          >
            <FaXTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
