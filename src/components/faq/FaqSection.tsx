import { useState, useEffect } from "react";

const FaqSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSetupModal, setShowSetupModal] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("faq");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setShowSetupModal(false);
      }
    };

    if (showSetupModal) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [showSetupModal]);

  const faqItems = [
    {
      question: "Why sheenas.online?",
      answer:
        '"Sheenas" was a nickname I got back in university, and to this day, that\'s what my friends still call me. It also ended up being my gamertag in most games I play.',
      icon: "😵‍💫",
      style: "primary",
    },
    {
      question: "How is this website even online?",
      answer:
        "I coded everything in React on my personal PC, built a Docker image, and exported it to an old computer I had lying around. That machine now runs this and a bunch of other containers.\n\nTo actually make it accessible online, I use cloudflared to create a tunnel from the outside world into my local network. Then I use Nginx to handle the routing and reverse proxying—basically, it makes sure that when you hit the domain, the request ends up in the right container.",
      icon: "🤔",
      style: "light",
    },
    {
      question: "My setup",
      answer:
        "For years, I dreamed of building my own PC from scratch—and eventually, I made it happen. The setup is constantly evolving as I get new ideas or find inspiration online.\n\nWhat started as a simple desire to play games has evolved into a full workstation where I code, design, game, and occasionally pretend I'm a streamer when nobody's watching.\n\n**Current Build Specs:**\n\n**CPU:** AMD Ryzen 5 7500F 3.7 GHz 6-Core Processor\n**CPU Cooler:** Thermalright Aqua Elite V3 66.17 CFM Liquid CPU Cooler\n**Motherboard:** MSI PRO B650M-P Micro ATX AM5 Motherboard\n**Memory:** Corsair Vengeance RGB 32 GB (2 x 16 GB) DDR5-6000 CL30\n**Storage:** TEAMGROUP MP44L 1 TB M.2-2280 PCIe 4.0 X4 NVME SSD\n**Video Card:** XFX Core Edition Radeon RX 6750 XT 12 GB\n**Case:** Aerocool Viewport Mini V2 MicroATX Mini Tower Case\n**Power Supply:** Corsair RM750x White 750W 80+ Gold Certified Fully Modular\n\nThe RGB lighting changes based on my mood (or what game I'm playing), and I've got multiple monitors for productivity, a mechanical keyboard that sounds like pure satisfaction, and a mouse that's seen more action than most Netflix series.",
      hasImage: true,
      imageUrl: "/assets/setup.png",
      icon: "💻",
      style: "secondary",
    },
  ];

  const getCardStyle = (style: string) => {
    switch (style) {
      case "primary":
        return "bg-gradient-to-br from-[#003049] to-[#003049]/90 text-[#FDF0D5] border border-[#669BBC]/20";
      case "secondary":
        return "bg-gradient-to-br from-[#669BBC] to-[#669BBC]/90 text-[#FDF0D5] border border-[#003049]/20";
      default:
        return "bg-white/90 backdrop-blur-sm border-2 border-[#003049]/20";
    }
  };

  const getTextColor = (style: string) => {
    return style === "light" ? "text-[#003049]/80" : "text-[#FDF0D5]";
  };

  const getTitleColor = (style: string) => {
    switch (style) {
      case "primary":
        return "text-[#C1121F]";
      case "secondary":
        return "text-[#003049]";
      default:
        return "text-[#003049]";
    }
  };

  return (
    <>
      <section id="faq" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
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
                  FA
                </span>
                Q
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#C1121F] to-[#780000] rounded-full"></div>
              </h2>
              <p className="text-[#003049]">
                Not the normal FAQ, more like random facts
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className={`transform transition-all duration-1000 ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200 + 600}ms` }}
              >
                <div
                  className={`${getCardStyle(
                    item.style
                  )} p-8 rounded-3xl shadow-2xl relative overflow-hidden h-full flex flex-col`}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-[#669BBC]/10 rounded-full -translate-y-20 translate-x-20"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#C1121F]/10 rounded-full translate-y-16 -translate-x-16"></div>

                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-3xl">{item.icon}</span>
                      <h3
                        className={`text-2xl lg:text-3xl font-bold ${getTitleColor(
                          item.style
                        )}`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    {!item.hasImage && (
                      <div
                        className={`space-y-4 text-lg leading-relaxed ${getTextColor(
                          item.style
                        )} whitespace-pre-line flex-grow`}
                      >
                        {item.answer}
                      </div>
                    )}

                    {item.hasImage && (
                      <div className="space-y-6 flex-grow flex flex-col">
                        <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#003049] to-[#FDF0D5]/20 p-4">
                          <div className="relative w-full h-56 rounded-lg overflow-hidden">
                            <img
                              src={item.imageUrl}
                              alt="Setup Preview"
                              className="absolute inset-0 w-full h-full object-cover object-center"
                              style={{
                                imageRendering: "-webkit-optimize-contrast",
                              }}
                              loading="lazy"
                            />
                          </div>
                        </div>

                        <div
                          className={`text-lg leading-relaxed ${getTextColor(
                            item.style
                          )} flex-grow`}
                        >
                          <p>
                            For years, I dreamed of building my own PC from
                            scratch—and eventually, I made it happen. The setup
                            is constantly evolving as I get new ideas or find
                            inspiration online.
                          </p>
                        </div>

                        <div className="mt-auto">
                          <button
                            onClick={() => setShowSetupModal(true)}
                            className="w-full bg-[#FDF0D5]/10 hover:bg-[#FDF0D5]/20 text-[#FDF0D5] py-3 px-6 rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 border border-[#FDF0D5]/20 hover:border-[#FDF0D5]/40"
                          >
                            Read More
                            <svg
                              className="w-5 h-5"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {showSetupModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-6xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in fade-in duration-300">
            <div className="flex items-center justify-between p-6 border-b border-[#003049]/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden flex items-center justify-center text-xl">
                  💻
                </div>
                <h3 className="text-2xl font-bold text-[#003049]">My Setup</h3>
              </div>
              <button
                onClick={() => setShowSetupModal(false)}
                className="w-10 h-10 bg-[#003049]/5 hover:bg-[#C1121F]/10 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6 text-[#003049]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="p-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#003049] to-[#669BBC] p-4 mb-8">
                <div className="relative w-full h-80 md:h-[500px] rounded-lg overflow-hidden">
                  <img
                    src="/assets/setup.png"
                    alt="My Setup"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                      imageRendering: "-webkit-optimize-contrast",
                    }}
                  />
                </div>
              </div>

              <div className="text-[#003049]/80 leading-relaxed text-lg">
                <div className="space-y-6">
                  <p>
                    For years, I dreamed of building my own PC from scratch—and
                    eventually, I made it happen. The setup is constantly
                    evolving as I get new ideas or find inspiration online.
                  </p>
                  <p>
                    What started as a simple desire to play games has evolved
                    into a full workstation where I code, design, game, and
                    occasionally pretend I'm a streamer when nobody's watching.
                  </p>

                  <div className="mt-8">
                    <h4 className="text-2xl font-bold text-[#003049] mb-6 flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-[#C1121F] to-[#C1121F]/80 rounded-lg flex items-center justify-center">
                        <span className="text-white text-lg">⚡</span>
                      </div>
                      Build Specifications
                    </h4>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#C1121F]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#C1121F]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#C1121F]/20 to-[#C1121F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🔥</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#C1121F] text-lg mb-1">
                              CPU
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              AMD Ryzen 5 7500F
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              3.7 GHz 6-Core Processor
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#669BBC]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#669BBC]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#669BBC]/20 to-[#669BBC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">❄️</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#669BBC] text-lg mb-1">
                              CPU Cooler
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              Thermalright Aqua Elite V3
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              66.17 CFM Liquid CPU Cooler
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#003049]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#003049]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#003049]/20 to-[#003049]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🔌</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#003049] text-lg mb-1">
                              Motherboard
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              MSI PRO B650M-P
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              Micro ATX AM5 Motherboard
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#C1121F]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#C1121F]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#C1121F]/20 to-[#C1121F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🌈</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#C1121F] text-lg mb-1">
                              Memory
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              Corsair Vengeance RGB 32GB
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              2 x 16GB DDR5-6000 CL30
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#669BBC]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#669BBC]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#669BBC]/20 to-[#669BBC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">💾</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#669BBC] text-lg mb-1">
                              Storage
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              TEAMGROUP MP44L 1TB
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              M.2-2280 PCIe 4.0 X4 NVMe SSD
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#C1121F]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#C1121F]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#C1121F]/20 to-[#C1121F]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">🎮</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#C1121F] text-lg mb-1">
                              Graphics Card
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              XFX Radeon RX 6750 XT
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              12GB GDDR6 Video Card
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#003049]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#003049]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#003049]/20 to-[#003049]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">📦</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#003049] text-lg mb-1">
                              Case
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              Aerocool Viewport Mini V2
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              MicroATX Mini Tower Case
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="group bg-gradient-to-br from-white to-[#FDF0D5]/50 p-6 rounded-2xl border border-[#003049]/10 hover:border-[#C1121F]/30 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-20 h-20 bg-[#669BBC]/5 rounded-full -translate-y-10 translate-x-10 group-hover:bg-[#669BBC]/10 transition-colors duration-300"></div>
                        <div className="flex items-start gap-4 relative z-10">
                          <div className="w-12 h-12 bg-gradient-to-br from-[#669BBC]/20 to-[#669BBC]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <span className="text-xl">⚡</span>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-bold text-[#669BBC] text-lg mb-1">
                              Power Supply
                            </h5>
                            <p className="text-[#003049]/80 font-medium">
                              Corsair RM750x White
                            </p>
                            <p className="text-[#003049]/60 text-sm">
                              750W 80+ Gold Fully Modular
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FaqSection;
