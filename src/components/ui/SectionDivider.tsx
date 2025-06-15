import React from "react";

interface SectionDividerProps {
  isVisible?: boolean;
  delay?: number;
}

const SectionDivider: React.FC<SectionDividerProps> = ({
  isVisible = true,
  delay = 0,
}) => {
  return (
    <div
      className={`mt-16 flex justify-center transition-all duration-1000 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-24 h-1 bg-gradient-to-r from-[#C1121F] via-[#669BBC] to-[#003049] rounded-full"></div>
    </div>
  );
};

export default SectionDivider;
