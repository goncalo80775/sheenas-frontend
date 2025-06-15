import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div
      id="home"
      className="flex items-center justify-center min-h-screen px-4 pt-20 pb-10"
    >
      <div
        className={`relative w-11/12 max-w-5xl transition-all duration-1000 ease-out ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="relative bg-[#003049] rounded-3xl p-8 md:p-16 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 border border-[#669BBC]/30 min-h-[70vh] flex flex-col justify-center">
          <div
            className={`absolute top-8 left-8 inline-flex items-center gap-2 bg-[#C1121F] text-[#FDF0D5] px-4 py-2 rounded-full text-sm font-semibold transition-all duration-700 max-w-fit ${
              isLoaded
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <div className="w-2 h-2 bg-[#FDF0D5] rounded-full animate-pulse"></div>
            302 Found
          </div>

          <div className="text-center flex-grow flex flex-col justify-center">
            <h1
              className={`text-5xl md:text-7xl lg:text-8xl font-black text-[#FDF0D5] mb-6 leading-none tracking-tight transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              GONÇALO
              <br />
              <span className="text-[#C1121F] drop-shadow-lg">MARTINS</span>
            </h1>

            <p
              className={`text-xl md:text-3xl text-[#FDF0D5]/90 mb-10 font-light transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              Full Stack Engineer & DIY Tech Explorer
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-5 justify-center items-center transition-all duration-700 ${
                isLoaded
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: "800ms" }}
            >
              <a
                href="#about"
                className="group border-2 border-[#FDF0D5] text-[#FDF0D5] hover:bg-[#FDF0D5] hover:text-[#003049] px-10 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 flex items-center gap-2 text-lg"
              >
                About Me
                <svg
                  className="w-5 h-5 group-hover:translate-y-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className="absolute -bottom-5 -right-5 w-28 h-28 bg-[#669BBC]/20 rounded-full blur-lg"></div>
          <div className="absolute -top-5 -left-5 w-28 h-28 bg-[#780000]/20 rounded-full blur-lg"></div>
        </div>

        <div className="absolute -z-10 -inset-2 bg-gradient-to-r from-[#003049]/15 via-[#669BBC]/15 to-[#003049]/15 rounded-3xl blur-2xl opacity-70"></div>
      </div>
    </div>
  );
};

export default HeroSection;
