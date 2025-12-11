import type { FC } from "react";

interface SectionDividerProps {
  isVisible?: boolean;
  delay?: number;
}

const SectionDivider: FC<SectionDividerProps> = ({
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
      <div className="w-24 h-1 bg-[#C1121F] dark:bg-[#669BBC] rounded-full transition-colors duration-300"></div>
    </div>
  );
};

export default SectionDivider;
