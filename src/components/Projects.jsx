import data from '../data/data.json'
import { FaSquareGithub } from "react-icons/fa6";

function Projects() {

  return (
    <section id="projects" className="py-20 px-10 bg-[#0a192f] text-[#ccd6f6]">
      <h2 className="text-3xl font-bold text-[#64ffda] mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#112240] p-6 rounded-lg border border-[#64ffda]/20 hover:shadow-lg hover:scale-105 transition relative"
          >
            <h3 className="text-xl font-semibold text-[#64ffda] mb-4">{project.name}</h3>
            <p className="text-[#8892b0]">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, techIndex) => (
                <span
                  key={techIndex}
                  className="bg-[#64ffda]/10 text-[#64ffda] text-sm px-2 py-1 rounded-md border border-[#64ffda]/50"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {project.link &&
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="absolute top-0 right-0 bg-[#64ffda] hover:underline rounded-sm">
              <FaSquareGithub className='text-3xl text-black' />
            </a>
            }
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
