import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const personalityTags = [
    "Full-Stack Developer",
    "Music Festival Lover",
    "Problem Solver",
    "Tech Enthusiast",
    "Gamer",
  ];

  return (
    <section
      id="about"
      className="py-20 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#003049] dark:text-white mb-4 relative">
              <span className="text-[#C1121F]">About</span> Me
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C1121F] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 md:gap-10 items-start">
          {/* Left Side - Profile Card */}
          <div className="lg:col-span-4 flex flex-col items-center gap-6">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="w-64 h-80 bg-[#003049] dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/assets/personal.jpg"
                  alt="Gonçalo Martins"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Personality Tags */}
            <div
              className={`flex flex-wrap gap-2 justify-center transform transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              {personalityTags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1.5 rounded-full text-sm font-medium tracking-wide ${
                    index % 2 === 0
                      ? "bg-[#003049] text-white"
                      : "bg-[#669BBC]/20 text-[#003049] dark:text-[#669BBC] border border-[#669BBC]"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Resume Button */}
            <div
              className={`w-full transform transition-all duration-700 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <a
                href="/resume"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#003049] dark:bg-[#669BBC] text-white px-6 py-3 rounded-xl font-semibold text-center shadow-md hover:bg-[#C1121F] dark:hover:bg-[#C1121F] hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 text-sm uppercase tracking-widest"
              >
                View Resume
              </a>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="lg:col-span-8 space-y-6">
            {/* Professional Background */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "500ms" }}
            >
              <div className="bg-[#003049] dark:bg-gray-800 text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold text-[#C1121F] uppercase tracking-widest mb-4">
                  Professional Background
                </h3>
                <p className="text-lg leading-relaxed text-white/90">
                  Full-Stack Developer with 4+ years building scalable web
                  applications. I work with React, TypeScript, Node.js, and
                  Java Spring Boot on a daily basis.
                </p>
              </div>
            </div>

            {/* What I Do */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "700ms" }}
            >
              <div className="border-l-4 border-[#669BBC] bg-[#669BBC]/10 dark:bg-gray-800 p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-[#003049] dark:text-white uppercase tracking-widest mb-4">
                  What I Do
                </h3>
                <div className="space-y-3 text-lg leading-relaxed text-[#003049]/80 dark:text-gray-300">
                  <p>
                    I build end-to-end solutions: responsive UIs with React and
                    TypeScript, RESTful APIs with Node.js and Spring Boot.
                  </p>
                  <p>
                    Working in agile teams, mentoring junior devs, doing code
                    reviews, and making sure everything from concept to
                    deployment runs smoothly.
                  </p>
                </div>
              </div>
            </div>

            {/* Beyond Work */}
            <div
              className={`transform transition-all duration-1000 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "900ms" }}
            >
              <div className="border-l-4 border-[#C1121F] bg-[#C1121F]/5 dark:bg-gray-800 p-8 rounded-2xl shadow-md">
                <h3 className="text-xl font-bold text-[#003049] dark:text-white uppercase tracking-widest mb-4">
                  Beyond Work
                </h3>
                <div className="space-y-3 text-lg leading-relaxed text-[#003049]/80 dark:text-gray-300">
                  <p>
                    I run a homelab at home where I self-host a lot of solutions
                    from Jellyfin and Nextcloud to monitoring dashboards with
                    Grafana. All containerized with Docker and Portainer.
                  </p>
                  <p>
                    Got tired of subscription fees and wanted more control over
                    my data. Built a homelab to solve both, deep diving into
                    some open-source and self-hosted solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
