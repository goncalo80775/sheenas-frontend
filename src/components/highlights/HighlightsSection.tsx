import { useState, useEffect } from "react";
import HomelabDiagram from "./HomelabDiagram";

interface Tab {
  label: string;
  imageUrl: string;
  imageFit?: string;
}

interface HighlightItem {
  title: string;
  subtitle: string;
  icon: string;
  type: "video" | "image" | "component" | "tabs";
  videoUrl?: string;
  imageUrl?: string;
  imageFit?: string;
  component?: React.ReactNode;
  tabs?: Tab[];
  bgColor: string;
}

const HighlightsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeToolTab, setActiveToolTab] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("highlights");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  const highlightItems: HighlightItem[] = [
    {
      title: "Homelab Architecture",
      subtitle: "Self-hosted infrastructure with Docker, Tailscale mesh, and multi-site setup",
      icon: "🏠",
      type: "component",
      component: <HomelabDiagram />,
      bgColor: "bg-white dark:bg-[#003049]",
    },
    {
      title: "Master's degree mobile app",
      subtitle: "Mobile library solution built with React Native, Node.js, MySQL & MongoDB",
      icon: "📱",
      type: "video",
      videoUrl: "https://www.youtube.com/embed/-1N8xAC7CyI?start=113",
      bgColor: "bg-[#003049]",
    },
    {
      title: "Homelab in Action",
      subtitle: "Container management with Portainer, load testing with Artillery, and server monitoring via Grafana",
      icon: "🔧",
      type: "tabs",
      tabs: [
        { label: "Server Monitoring", imageUrl: "/assets/server-monitoring.png", imageFit: "contain" },
        { label: "App Testing", imageUrl: "/assets/artillery-grafana.png", imageFit: "contain" },
        { label: "Container Management", imageUrl: "/assets/portainer-dashboard.png", imageFit: "cover" },
      ],
      bgColor: "bg-[#669BBC]",
    },
  ];

  return (
    <section id="highlights" className="py-32 px-6 bg-white dark:bg-gray-900 transition-colors duration-300 min-h-screen flex items-center">
      <div className="max-w-[1600px] mx-auto w-full">
        <div className="text-center mb-20">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }`}
          >
            <h2 className="text-6xl md:text-7xl font-black text-[#003049] dark:text-white mb-6 relative">
              <span className="text-[#C1121F]">High</span>lights
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1.5 bg-[#C1121F] rounded-full"></div>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {highlightItems.map((item, index) => (
            <div
              key={index}
              className={`transform transition-all duration-1000 ${
                index === 0 ? "lg:col-span-2" : ""
              } ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 200 + 400}ms` }}
            >
              <div
                className={`${item.bgColor} dark:opacity-90 p-10 rounded-3xl shadow-2xl ${
                  item.bgColor.includes("white") ? "text-[#003049] dark:text-white" : "text-white"
                } h-full flex flex-col min-h-[500px] transition-all duration-300`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="text-5xl">{item.icon}</span>
                    <h3 className="text-3xl lg:text-4xl font-bold leading-tight">
                      {item.title}
                    </h3>
                  </div>

                  <p className={`${
                    item.bgColor.includes("white") ? "text-slate-600" : "text-white/90"
                  } text-base mb-8 leading-relaxed`}>
                    {item.subtitle}
                  </p>

                  <div className="flex-grow mt-auto">
                    {item.type === "video" ? (
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video">
                        <iframe
                          src={item.videoUrl}
                          title={item.title}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
                    ) : item.type === "component" ? (
                      <div className="bg-white dark:bg-[#003049] p-4 overflow-auto">
                        {item.component}
                      </div>
                    ) : item.type === "tabs" ? (
                      <div className="flex flex-col gap-4">
                        <div className="flex flex-wrap gap-2">
                          {item.tabs!.map((tab, tabIndex) => (
                            <button
                              key={tabIndex}
                              onClick={() => setActiveToolTab(tabIndex)}
                              className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                                activeToolTab === tabIndex
                                  ? "bg-white text-[#003049]"
                                  : "bg-white/20 text-white hover:bg-white/30"
                              }`}
                            >
                              {tab.label}
                            </button>
                          ))}
                        </div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black/20">
                          <img
                            src={item.tabs![activeToolTab].imageUrl}
                            alt={item.tabs![activeToolTab].label}
                            className={`absolute inset-0 w-full h-full ${
                              item.tabs![activeToolTab].imageFit === "cover" ? "object-cover" : "object-contain"
                            }`}
                            loading="lazy"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-black/20">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className={`absolute inset-0 w-full h-full ${
                            item.imageFit === "cover" ? "object-cover" : "object-contain"
                          }`}
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;