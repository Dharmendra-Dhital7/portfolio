import { motion } from "framer-motion";

import profilePic from "../assets/profile2.jpg";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gray-950 text-gray-200 flex flex-col justify-center items-center px-6 md:px-20 py-16"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-indigo-400"
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl">
        {/* Profile Image */}
        <motion.img
          src={profilePic}
          alt="Dharmendra Dhital"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-52 h-52 object-cover rounded-full border-4 border-indigo-500 shadow-lg"
        />

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-2xl"
        >
          <h3 className="text-2xl font-semibold mb-4 text-white">
            I'm <span className="text-indigo-400">Dharmendra Dhital</span>
          </h3>
          <p className="text-lg leading-relaxed text-gray-300">
            I’m a{" "}
            <span className="text-indigo-400">Full Stack Web Developer</span>{" "}
            with a passion for turning ideas into reality using clean, scalable,
            and user-friendly code. I specialize in modern technologies like
            <span className="text-indigo-400"> JavaScript</span>,
            <span className="text-indigo-400"> React.js</span>,
            <span className="text-indigo-400"> Tailwind CSS</span>,
            <span className="text-indigo-400"> Node.js</span>, and
            <span className="text-indigo-400"> MongoDB</span>.
            <br />
            <br />
            My goal is to craft beautiful, responsive web applications that
            solve real-world problems and provide seamless digital experiences.
          </p>

          <div className="mt-6">
            <a
              href="/Dharmendra_Resume.pdf" // add your resume later
              className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition"
              download
            >
              Download Resume
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
