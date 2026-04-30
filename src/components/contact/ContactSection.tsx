import { useState, useEffect } from "react";

const ContactSection = () => {
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

    const section = document.getElementById("contact");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const contacts = [
    {
      name: "Email",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      link: "mailto:g.martins1198@gmail.com",
      display: "g.martins1198@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      link: "https://linkedin.com/in/gmartins1198/",
      display: "/gmartins1198",
    },
    {
      name: "GitHub",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/goncalo80775",
      display: "/goncalo80775",
    },
  ];

  const handleContactClick = (link: string | null) => {
    if (link) {
      if (link.startsWith("http")) {
        window.open(link, "_blank", "noopener,noreferrer");
      } else {
        window.location.href = link;
      }
    }
  };

  return (
    <section
      id="contact"
      className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-black text-[#003049] dark:text-white mb-4 relative">
              <span className="text-[#C1121F]">Get In</span> Touch
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#C1121F] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
          {contacts.map((contact, index) => (
            <div
              key={contact.name}
              className={`transform transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              <div
                className={`group bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-xl border border-gray-200 dark:border-gray-700 hover:border-[#C1121F]/30 dark:hover:border-[#C1121F]/50 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center h-full ${
                  contact.link ? "cursor-pointer" : ""
                }`}
                onClick={() => handleContactClick(contact.link)}
              >
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:bg-[#003049]/10 dark:group-hover:bg-[#669BBC]/20 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 group-hover:border-[#C1121F]/20 text-[#003049] dark:text-white group-hover:text-[#C1121F]">
                  {contact.icon}
                </div>

                <h3 className="text-xl font-bold text-[#003049] dark:text-white group-hover:text-[#C1121F] transition-colors duration-300 mb-2">
                  {contact.name}
                </h3>

                <span className="text-sm text-[#003049]/70 dark:text-white/70 group-hover:text-[#C1121F]/80 transition-colors duration-300">
                  {contact.display}
                </span>

                <div className="mt-4 w-8 h-0.5 bg-[#003049]/20 dark:bg-white/20 group-hover:bg-[#C1121F]/50 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

