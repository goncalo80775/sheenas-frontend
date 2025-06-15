import { useState, useEffect } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const personalityTags = [
    { text: "Full-Stack Developer", color: "bg-[#C1121F]", icon: "💻" },
    { text: "Music Festival Lover", color: "bg-[#669BBC]", icon: "🎵" },
    { text: "Problem Solver", color: "bg-[#C1121F]", icon: "🧩" },
    { text: "Tech Enthusiast", color: "bg-[#003049]", icon: "⚡" },
    { text: "Gamer", color: "bg-[#780000]", icon: "🎮" },
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
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
                About
              </span>{" "}
              Me
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#C1121F] to-[#780000] rounded-full"></div>
            </h2>
          </div>
        </div>

        {/* Main Content Grid */}
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
                  <div className="w-64 h-80 mx-auto bg-gradient-to-br from-[#003049] to-[#669BBC] rounded-2xl overflow-hidden relative shadow-xl">
                    <img
                      src="/assets/personal.jpg"
                      alt="Gonçalo Martins"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#003049]/60 to-transparent"></div>
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
                        className={`${tag.color} text-[#FDF0D5] px-4 py-3 rounded-xl font-semibold text-sm shadow-lg transform hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-default flex items-center gap-3`}
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
                    className="bg-[#003049] text-[#FDF0D5] px-6 py-4 rounded-2xl font-semibold text-center shadow-lg border-4 border-[#003049] transform hover:scale-105 hover:bg-[#669BBC] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3"
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
              <div className="bg-gradient-to-br from-[#003049] to-[#003049]/90 text-[#FDF0D5] p-8 rounded-3xl shadow-2xl border border-[#669BBC]/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#669BBC]/10 rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C1121F]/10 rounded-full translate-y-16 -translate-x-16"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">👋</span>
                    <h3 className="text-3xl font-bold text-[#C1121F]">
                      Hey there!
                    </h3>
                  </div>
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                      I'm a software developer with a solid background in{" "}
                      <span className="font-semibold text-[#669BBC]">Java</span>{" "}
                      and{" "}
                      <span className="font-semibold text-[#669BBC]">
                        JavaScript
                      </span>
                      , but I'm always chasing new tech and fresh ideas.
                    </p>
                    <p>
                      From fixing bugs to dreaming up new features, if it's
                      challenging, I'm in. Let's build something amazing
                      together!
                    </p>
                  </div>
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
              <div className="bg-white/90 backdrop-blur-sm border-2 border-[#003049]/20 p-8 rounded-3xl shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#C1121F]/5 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#669BBC]/10 rounded-full translate-y-12 -translate-x-12"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">🎵</span>
                    <h3 className="text-3xl font-bold text-[#003049]">
                      When I'm Not Coding
                    </h3>
                  </div>
                  <div className="space-y-4 text-lg text-[#003049]/80 leading-relaxed">
                    <p>
                      You'll probably find me at a bar with friends, at{" "}
                      <span className="font-semibold text-[#C1121F]">
                        Estádio da Luz
                      </span>
                      , or at home doing some classic nerd stuff.
                    </p>
                    <p>
                      In the summer, I'm all about music festivals. Whether it's{" "}
                      <span className="font-semibold text-[#780000]">
                        Hip Hop
                      </span>{" "}
                      or{" "}
                      <span className="font-semibold text-[#780000]">
                        Metal
                      </span>
                      , my music taste is probably the most unpredictable thing
                      in my life.
                    </p>
                  </div>
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
              <div className="bg-gradient-to-br from-[#669BBC] to-[#669BBC]/90 text-[#FDF0D5] p-8 rounded-3xl shadow-2xl border border-[#003049]/20 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-36 h-36 bg-[#FDF0D5]/5 rounded-full -translate-y-18 -translate-x-18"></div>
                <div className="absolute bottom-0 right-0 w-28 h-28 bg-[#C1121F]/10 rounded-full translate-y-14 translate-x-14"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">💭</span>
                    <h3 className="text-3xl font-bold text-[#003049]">
                      Why This Page?
                    </h3>
                  </div>
                  <div className="space-y-4 text-lg leading-relaxed">
                    <p>
                      This site came to life when I had a bunch of personal
                      projects running locally on my Linux machine and thought:
                    </p>
                    <blockquote className="border-l-4 border-[#FDF0D5]/50 pl-4 italic font-medium text-[#FDF0D5]/90">
                      "Why not put them online and access them from anywhere?"
                    </blockquote>
                    <p>
                      So here we are—a little landing page for my new domain,
                      born from one of those nerdy ideas I mentioned above.
                      Welcome to my digital playground! 🚀
                    </p>
                  </div>
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
