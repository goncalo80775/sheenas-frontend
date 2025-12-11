import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const personalityTags = [
    { text: "Full-Stack Developer", icon: "💻" },
    { text: "Music Festival Lover", icon: "🎵" },
    { text: "Problem Solver", icon: "🧩" },
    { text: "Tech Enthusiast", icon: "⚡" },
    { text: "Gamer", icon: "🎮" },
  ];

  return (
    <section
      id="about"
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
              <span className="text-[#C1121F]">About</span> Me
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C1121F] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Profile Card */}
          <div className="lg:col-span-5">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div>
                <div className="relative mb-8">
                  <div className="w-64 h-80 mx-auto bg-[#003049] dark:bg-gray-800 rounded-2xl overflow-hidden relative shadow-xl">
                    <img
                      src="/assets/personal.jpg"
                      alt="Gonçalo Martins"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Personality Tags */}
                <div className="space-y-3">
                  {personalityTags.map((tag, index) => (
                    <div
                      key={index}
                      className={`transform transition-all duration-700 ${
                        isVisible
                          ? "translate-x-0 opacity-100"
                          : "translate-x-8 opacity-0"
                      }`}
                      style={{ transitionDelay: `${index * 100 + 400}ms` }}
                    >
                      <div
                        className={`${
                          index % 2 === 0 ? "bg-[#003049]" : "bg-[#669BBC]"
                        } text-white px-4 py-3 rounded-xl font-semibold text-sm shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default flex items-center gap-3`}
                      >
                        <span className="text-lg">{tag.icon}</span>
                        {tag.text}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Resume Button */}
                <div
                  className={`mt-6 transform transition-all duration-700 ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{
                    transitionDelay: `${personalityTags.length * 100 + 300}ms`,
                  }}
                >
                  <a
                    href="/resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#003049] dark:bg-[#669BBC] text-white px-6 py-4 rounded-2xl font-semibold text-center shadow-lg border-4 border-[#003049] dark:border-[#669BBC] transform hover:scale-105 hover:bg-[#C1121F] dark:hover:bg-[#C1121F] hover:border-[#C1121F] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                        clipRule="evenodd"
                      />
                    </svg>
                    View My Resume
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Content Cards */}
          <div className="lg:col-span-7 space-y-6">
            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <div className="bg-[#003049] dark:bg-gray-800 text-white p-8 rounded-3xl shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">💼</span>
                  <h3 className="text-3xl font-bold text-[#C1121F]">
                    Professional Background
                  </h3>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p>
                    Full-Stack Developer with 4+ years building scalable web
                    applications. I work with React, TypeScript, Node.js, and
                    Java Spring Boot on a daily basis.
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <div className="bg-white dark:bg-gray-800 text-[#003049] dark:text-white p-8 rounded-3xl shadow-2xl transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">⚡</span>
                  <h3 className="text-3xl font-bold">What I Do</h3>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
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

            <div
              className={`transform transition-all duration-1000 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: "1000ms" }}
            >
              <div className="bg-[#669BBC] dark:bg-gray-800 text-white p-8 rounded-3xl shadow-2xl transition-colors duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl">🚀</span>
                  <h3 className="text-3xl font-bold">Beyond Work</h3>
                </div>
                <div className="space-y-4 text-lg leading-relaxed">
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
