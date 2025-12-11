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
      icon: "📧",
      link: "mailto:g.martins1198@gmail.com",
      display: "g.martins1198@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: "💼",
      link: "https://linkedin.com/in/gmartins1198/",
      display: "/gmartins1198",
    },
    {
      name: "Location",
      icon: "📍",
      link: null,
      display: "Portugal",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:bg-[#003049]/10 dark:group-hover:bg-[#669BBC]/20 transition-all duration-300 border-2 border-gray-200 dark:border-gray-600 group-hover:border-[#C1121F]/20">
                  <span className="text-3xl filter group-hover:brightness-110 transition-all duration-300">
                    {contact.icon}
                  </span>
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
