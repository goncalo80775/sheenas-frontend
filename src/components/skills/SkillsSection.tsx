import { useState, useEffect } from "react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const technologies = [
    { name: "React", icon: "/assets/skills/React.svg" },
    { name: "TypeScript", icon: "/assets/skills/TypeScript.svg" },
    { name: "JavaScript", icon: "/assets/skills/JavaScript.svg" },
    { name: "Node.js", icon: "/assets/skills/Nodejs.svg" },
    { name: "Java", icon: "/assets/skills/Java.svg" },
    { name: "Spring", icon: "/assets/skills/Spring.svg" },
    { name: "Maven", icon: "/assets/skills/Maven.svg" },
    { name: "Kafka", icon: "/assets/skills/Kafka.svg" },
    { name: "Tailwind CSS", icon: "/assets/skills/Tailwindcss.svg" },
    { name: "SQL", icon: "/assets/skills/SQL.svg" },
    { name: "Docker", icon: "/assets/skills/Docker.svg" },
    { name: "Figma", icon: "/assets/skills/Figma.svg" },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#C1121F]/5 rounded-full blur-3xl -translate-x-48 -translate-y-48"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#669BBC]/8 rounded-full blur-3xl translate-x-40 translate-y-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-[#003049] mb-4 relative">
              <span className="bg-gradient-to-r from-[#C1121F] to-[#780000] bg-clip-text text-transparent">
                Skills &
              </span>{" "}
              Technologies
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#C1121F] to-[#780000] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div className="group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#669BBC]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#C1121F]/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FDF0D5]/30 rounded-full translate-y-8 -translate-x-8 group-hover:bg-[#780000]/10 transition-colors duration-300"></div>

                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-[#FDF0D5] to-[#FDF0D5]/80 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:from-[#003049]/10 group-hover:to-[#669BBC]/10 transition-all duration-300 relative z-10 border-2 border-[#003049]/5 group-hover:border-[#C1121F]/20">
                  <img
                    src={tech.icon}
                    alt={`${tech.name} icon`}
                    className="w-14 h-14 object-contain filter group-hover:brightness-110 transition-all duration-300"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      if (e.currentTarget.nextElementSibling) {
                        (
                          e.currentTarget.nextElementSibling as HTMLElement
                        ).style.display = "flex";
                      }
                    }}
                  />
                  <div className="w-14 h-14 bg-gradient-to-br from-[#003049] to-[#669BBC] rounded-xl items-center justify-center text-[#FDF0D5] font-bold text-2xl hidden shadow-lg">
                    {tech.name.charAt(0)}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#003049] group-hover:text-[#C1121F] transition-colors duration-300 relative z-10">
                  {tech.name}
                </h3>

                <div className="mt-4 w-8 h-0.5 bg-gradient-to-r from-[#003049]/20 to-[#669BBC]/20 group-hover:from-[#C1121F]/50 group-hover:to-[#780000]/50 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
