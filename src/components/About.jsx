function About() {
  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS"] },
    { category: "Backend", items: ["Java", "Spring Boot", "MySQL", "RESTful APIs"] },
    { category: "Tools", items: ["Git", "VS Code","Postman","Eclipse","Intellij","Github"] }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for creating seamless user experiences. 
              With a strong foundation in both frontend and backend technologies, I bring ideas to life through clean, efficient code.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My journey in web development started with curiosity and has evolved into a professional pursuit of excellence in 
              creating modern, responsive, and user-friendly applications.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-6">Skills & Technologies</h3>
            <div className="space-y-6">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-blue-400 font-medium mb-2">{skillGroup.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About; 