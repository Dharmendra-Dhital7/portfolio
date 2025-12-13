import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio built using React and Tailwind CSS to showcase my skills and projects.",
      tech: ["React", "Tailwind CSS"],
      github: "#",
      demo: "#",
    },

    {
      title: "Stock Market Frontend",
      description:
        "A stock Market Platform frontend built using reactand bootstrap",
      tech: ["React", "API", "Bootstrap"],
      github:
        "https://github.com/Dharmendra-Dhital7/stockmarketplatform/tree/main/frontend",
      demo: "https://stockmarketfrontend-5igaj6ezj-dharmendras-projects-f6d41f46.vercel.app",
    },
    {
      title: "Stock Market Dashboard",
      description:
        "A stock Market Platform dashboard built using react and bootstrap",
      tech: ["React", "API", "Bootstrap", "MongoDB"],
      github:
        "https://github.com/Dharmendra-Dhital7/stockmarketplatform/tree/main/dashboard",
      demo: "https://stockmarketdashboard.vercel.app/",
    },
    {
      title: "Todo App",
      description:
        "A simple todo app with add, edit, and delete features using React Hooks and local storage.",
      tech: ["React", "JavaScript"],
      github: "https://github.com/Dharmendra-Dhital7/Todo-App",
      demo: "https://todoapp-bq220yi9w-dharmendras-projects-f6d41f46.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-gray-900 text-white py-20 px-6 md:px-16 lg:px-24"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-indigo-400">Projects</h2>
        <p className="text-gray-400 mb-12 text-lg">
          Here are a few beginner-level projects I’ve built while learning. More
          full-stack projects coming soon!
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 flex flex-col justify-between shadow-md hover:scale-105 transition duration-300 hover:shadow-indigo-500/30"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-400 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="bg-indigo-500/20 text-indigo-300 px-3 py-1 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex justify-center gap-6 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-2xl"
                >
                  <FaGithub />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition text-2xl"
                >
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
