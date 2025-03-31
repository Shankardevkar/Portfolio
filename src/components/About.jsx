import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiMongodb,
  SiPostman,
  SiEclipseide,
  SiIntellijidea,
} from "react-icons/si";
import {
  BsLightningCharge,
  BsPeople,
  BsKanban,
  BsPencilSquare,
  BsMic,
} from "react-icons/bs";
import { RiCodeSSlashLine } from "react-icons/ri";

function About() {
  const skills = [
    {
      category: "Frontend",
      items: [
        { name: "React", icon: <FaReact className="text-blue-400" /> },
        { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss className="text-cyan-400" />,
        },
      ],
    },
    {
      category: "Backend",
      items: [
        { name: "Java", icon: <SiSpringboot className="text-green-500" /> },
        {
          name: "Spring Boot",
          icon: <SiSpringboot className="text-green-500" />,
        },
        { name: "MySQL", icon: <SiMysql className="text-blue-500" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
        {
          name: "RESTful APIs",
          icon: <BsLightningCharge className="text-yellow-400" />,
        },
      ],
    },
    {
      category: "Tools & DevOps",
      items: [
        { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
        {
          name: "VS Code",
          icon: <RiCodeSSlashLine className="text-blue-500" />,
        },
        { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
        { name: "Eclipse", icon: <SiEclipseide className="text-purple-500" /> },
        { name: "IntelliJ", icon: <SiIntellijidea className="text-red-500" /> },
        { name: "Github", icon: <FaGithub className="text-white" /> },
      ],
    },
    {
      category: "Soft Skills",
      items: [
        {
          name: "Problem Solving",
          icon: <BsLightningCharge className="text-yellow-400" />,
        },
        {
          name: "Team Leadership",
          icon: <BsPeople className="text-blue-400" />,
        },
        {
          name: "Agile Methodologies",
          icon: <BsKanban className="text-green-400" />,
        },
        {
          name: "Technical Writing",
          icon: <BsPencilSquare className="text-purple-400" />,
        },
        { name: "Public Speaking", icon: <BsMic className="text-red-400" /> },
      ],
    },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="relative">
              <div className="w-56 h-56 mx-auto rounded-full overflow-hidden border-4 border-blue-400/30 shadow-2xl shadow-blue-500/30 relative group">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 z-10"></div>
                <img
                  src="/images/Profile/pic.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-all duration-500 ease-out"
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/200x200/1a1a1a/ffffff?text=Your+Photo";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-2 rounded-full text-sm shadow-lg hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300">
                Available for Hire
              </div>
            </div>

            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-lg">
                Hello! I'm{" "}
                <span className="text-blue-400 font-semibold">Shankar </span>, a
                passionate full-stack developer with over X years of experience
                in crafting exceptional digital experiences. My journey in tech
                began with a simple "Hello World" and has evolved into building
                complex, scalable applications that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in creating modern, responsive web applications
                that combine elegant design with powerful functionality. My
                approach to development is rooted in writing clean, maintainable
                code and following best practices to ensure long-term success.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me contributing to open-source
                projects, writing technical articles, or exploring new
                technologies. I'm always excited to learn and share knowledge
                with the developer community.
              </p>
            </div>

            <div className="flex gap-4 justify-center">
              <a
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full hover:from-blue-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 flex items-center gap-2"
              >
                <BsPeople className="text-lg" />
                Let's Connect
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border border-blue-500 text-blue-400 rounded-full hover:bg-blue-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <BsPencilSquare className="text-lg" />
                Download Resume
              </a>
            </div>
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 space-y-8 border border-white/10 shadow-xl">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-2">
              <BsLightningCharge className="text-blue-400 text-2xl" />
              Skills & Technologies
            </h3>
            <div className="space-y-8">
              {skills.map((skillGroup) => (
                <div key={skillGroup.category}>
                  <h4 className="text-blue-400 font-medium mb-4 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                    {skillGroup.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill.name}
                        className="px-4 py-2 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                      >
                        {skill.icon}
                        {skill.name}
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
