function Projects() {
  const projects = [
    {
      title: "Calculator App",
      description: "A modern calculator application built with React and Tailwind CSS, featuring a clean interface and smooth animations.",
      tech: ["React", "Tailwind CSS"],
      image: "./images/Calculator.png",
      link: "https://calculatorbyshankar.netlify.app/"
    },
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, product management, and payment integration.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "./images/Ecommerce.png",
    },
    {
      title: "Task Management App",
      description: "A responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      tech: ["React", "Firebase", "Tailwind CSS"],
      image: "./images/TaskManagement.png",
    },
    {
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and Tailwind CSS, featuring smooth animations and responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      image: "./images/Portfolio.png",
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          My Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300 group"
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  {project.link ? (
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white font-medium px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300"
                    >
                      View Project
                    </a>
                  ) : (
                    <span className="text-white font-medium px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                      Coming Soon
                    </span>
                  )}
                </div>
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects; 