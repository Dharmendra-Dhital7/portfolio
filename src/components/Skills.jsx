import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-6xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-6xl" /> },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400 text-6xl" />,
    },
    { name: "React JS", icon: <FaReact className="text-blue-400 text-6xl" /> },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-cyan-400 text-6xl" />,
    },
    { name: "Node JS", icon: <FaNodeJs className="text-green-500 text-6xl" /> },
    {
      name: "Express JS",
      icon: <SiExpress className="text-gray-400 text-6xl" />,
    },
    {
      name: "MongoDB",
      icon: <SiMongodb className="text-green-600 text-6xl" />,
    },
    { name: "MySQL", icon: <SiMysql className="text-blue-600 text-6xl" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600 text-6xl" /> },
    { name: "GitHub", icon: <FaGithub className="text-gray-300 text-6xl" /> },
    {
      name: "Database",
      icon: <FaDatabase className="text-teal-400 text-6xl" />,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-gray-900 text-white py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">Skills</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Here are the technologies and tools I use to build modern, responsive,
          and scalable web applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center hover:scale-105 transform transition duration-300 shadow-md hover:shadow-indigo-500/30"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
