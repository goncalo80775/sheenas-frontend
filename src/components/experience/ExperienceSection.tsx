import { useState, useEffect } from "react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  highlights: string[];
  tags: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Accenture",
    role: "Full-Stack Developer",
    period: "2021 – Present",
    current: true,
    highlights: [
      "Build and maintain scalable web applications with React, TypeScript and Java Spring Boot",
      "Lead code reviews and mentor junior developers within agile teams",
      "Design and implement RESTful APIs consumed by web and mobile clients",
    ],
    tags: ["React", "TypeScript", "Spring Boot", "Node.js", "SQL", "Docker"],
  }
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("experience");
    if (section) observer.observe(section);
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="experience"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-[#003049] dark:text-white mb-4 relative">
              <span className="text-[#C1121F]">Work</span> Experience
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C1121F] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-4 md:left-7 top-2 bottom-2 w-0.5 bg-[#669BBC]/30 dark:bg-[#669BBC]/20 rounded-full" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-12 md:pl-20 transform transition-all duration-700 ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 300}ms` }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-2 md:left-5 top-5 w-4 h-4 rounded-full border-2 border-white dark:border-gray-900 shadow-md ${
                    exp.current ? "bg-[#C1121F]" : "bg-[#669BBC]"
                  }`}
                />

                <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 shadow-md border border-gray-100 dark:border-gray-700 hover:border-[#C1121F]/20 hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                    <div>
                      <h3 className="text-xl font-bold text-[#003049] dark:text-white leading-tight">
                        {exp.role}
                      </h3>
                      <p className="text-[#C1121F] font-semibold mt-0.5">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      {exp.current && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-semibold bg-[#C1121F]/10 text-[#C1121F] border border-[#C1121F]/20">
                          Current
                        </span>
                      )}
                      <span className="text-sm text-[#003049]/50 dark:text-white/40 whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-5">
                    {exp.highlights.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-[#003049]/80 dark:text-gray-300 leading-relaxed">
                        <div className="mt-2 w-1.5 h-1.5 rounded-full bg-[#669BBC] flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[#003049]/5 dark:bg-[#669BBC]/10 text-[#003049] dark:text-[#669BBC] border border-[#003049]/10 dark:border-[#669BBC]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
