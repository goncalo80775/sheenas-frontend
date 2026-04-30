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

  const skillGroups = [
    {
      label: "Frontend",
      labelClass: "text-[#669BBC]",
      lineClass: "bg-[#669BBC]",
      skills: [
        { name: "React", icon: "/assets/skills/React.svg" },
        { name: "TypeScript", icon: "/assets/skills/TypeScript.svg" },
        { name: "JavaScript", icon: "/assets/skills/JavaScript.svg" },
        { name: "Tailwind CSS", icon: "/assets/skills/Tailwindcss.svg" },
        { name: "Figma", icon: "/assets/skills/Figma.svg" },
      ],
    },
    {
      label: "Backend",
      labelClass: "text-[#C1121F]",
      lineClass: "bg-[#C1121F]",
      skills: [
        { name: "Node.js", icon: "/assets/skills/Nodejs.svg" },
        { name: "Java", icon: "/assets/skills/Java.svg" },
        { name: "Spring", icon: "/assets/skills/Spring.svg" },
        { name: "Maven", icon: "/assets/skills/Maven.svg" },
        { name: "Kafka", icon: "/assets/skills/Kafka.svg" },
        { name: "SQL", icon: "/assets/skills/SQL.svg" },
      ],
    },
    {
      label: "DevOps & Tools",
      labelClass: "text-[#003049] dark:text-white",
      lineClass: "bg-[#003049] dark:bg-white",
      skills: [
        { name: "Docker", icon: "/assets/skills/Docker.svg" },
        { name: "GitLab", icon: "/assets/skills/GitLab.svg" },
        { name: "Jenkins", icon: "/assets/skills/Jenkins.svg" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-[#003049] dark:text-white mb-4 relative">
              <span className="text-[#C1121F]">Skills &</span> Technologies
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C1121F] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="space-y-12">
          {skillGroups.map((group, groupIndex) => {
            const globalStartIndex = skillGroups
              .slice(0, groupIndex)
              .reduce((sum, g) => sum + g.skills.length, 0);

            return (
              <div
                key={group.label}
                className={`transform transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${groupIndex * 150 + 200}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className={`text-xs font-bold uppercase tracking-widest whitespace-nowrap ${group.labelClass}`}>
                    {group.label}
                  </span>
                  <div className={`flex-1 h-px opacity-25 ${group.lineClass}`} />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {group.skills.map((tech, index) => (
                    <div
                      key={tech.name}
                      className={`transform transition-all duration-700 ${
                        isVisible
                          ? "translate-y-0 opacity-100"
                          : "translate-y-10 opacity-0"
                      }`}
                      style={{
                        transitionDelay: `${(globalStartIndex + index) * 80 + 350}ms`,
                      }}
                    >
                      <div className="group bg-white dark:bg-gray-800 rounded-2xl p-4 shadow-md border border-gray-200 dark:border-gray-700 hover:border-[#C1121F]/30 dark:hover:border-[#C1121F]/50 hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center h-full">
                        <div className="w-14 h-14 mb-3 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl shadow group-hover:bg-[#003049]/10 dark:group-hover:bg-[#669BBC]/20 transition-all duration-300 border border-gray-200 dark:border-gray-600 group-hover:border-[#C1121F]/20">
                          <img
                            src={tech.icon}
                            alt={`${tech.name} icon`}
                            className="w-9 h-9 object-contain filter group-hover:brightness-110 transition-all duration-300"
                            onError={(e) => {
                              e.currentTarget.style.display = "none";
                              if (e.currentTarget.nextElementSibling) {
                                (
                                  e.currentTarget.nextElementSibling as HTMLElement
                                ).style.display = "flex";
                              }
                            }}
                          />
                          <div className="w-9 h-9 bg-[#003049] dark:bg-[#669BBC] rounded-lg items-center justify-center text-white font-bold text-sm hidden shadow-lg">
                            {tech.name.charAt(0)}
                          </div>
                        </div>

                        <h3 className="text-sm font-bold text-[#003049] dark:text-white group-hover:text-[#C1121F] transition-colors duration-300">
                          {tech.name}
                        </h3>

                        <div className="mt-3 w-6 h-0.5 bg-[#003049]/20 dark:bg-white/20 group-hover:bg-[#C1121F]/50 transition-all duration-300 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

