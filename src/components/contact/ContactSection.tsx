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
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
                Get In
              </span>{" "}
              Touch
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#C1121F] to-[#780000] rounded-full"></div>
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
                className={`group bg-white/90 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center h-full relative overflow-hidden ${
                  contact.link ? "cursor-pointer" : ""
                }`}
                onClick={() => handleContactClick(contact.link)}
              >
                <div className="absolute top-0 right-0 w-20 h-20 bg-[#669BBC]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#C1121F]/10 transition-colors duration-300"></div>
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FDF0D5]/30 rounded-full translate-y-8 -translate-x-8 group-hover:bg-[#780000]/10 transition-colors duration-300"></div>

                <div className="w-20 h-20 mb-6 flex items-center justify-center bg-gradient-to-br from-[#FDF0D5] to-[#FDF0D5]/80 rounded-2xl shadow-lg group-hover:shadow-xl group-hover:from-[#003049]/10 group-hover:to-[#669BBC]/10 transition-all duration-300 relative z-10 border-2 border-[#003049]/5 group-hover:border-[#C1121F]/20">
                  <span className="text-3xl filter group-hover:brightness-110 transition-all duration-300">
                    {contact.icon}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-[#003049] group-hover:text-[#C1121F] transition-colors duration-300 relative z-10 mb-2">
                  {contact.name}
                </h3>

                <span className="text-sm text-[#003049]/70 group-hover:text-[#C1121F]/80 transition-colors duration-300 relative z-10">
                  {contact.display}
                </span>

                <div className="mt-4 w-8 h-0.5 bg-gradient-to-r from-[#003049]/20 to-[#669BBC]/20 group-hover:from-[#C1121F]/50 group-hover:to-[#780000]/50 transition-all duration-300 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
