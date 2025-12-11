import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/90 dark:bg-[#003049]/90 backdrop-blur-sm border-b border-gray-200 dark:border-[#669BBC]/20 shadow-sm transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <div className="text-[#003049] dark:text-white dark:text-white font-bold text-xl">
          GM
        </div>

        <div className="hidden md:flex gap-8">
          <a
            href="#home"
            className="text-[#003049] dark:text-white dark:text-white font-medium relative group"
          >
            Home
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C1121F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a
            href="#about"
            className="text-[#003049]/80 dark:text-white dark:text-white/80 font-medium hover:text-[#003049] dark:hover:text-white dark:text-white transition-colors relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C1121F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a
            href="#highlights"
            className="text-[#003049]/80 dark:text-white dark:text-white/80 font-medium hover:text-[#003049] dark:hover:text-white dark:text-white transition-colors relative group"
          >
            Highlights
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C1121F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a
            href="#skills"
            className="text-[#003049]/80 dark:text-white dark:text-white/80 font-medium hover:text-[#003049] dark:hover:text-white dark:text-white transition-colors relative group"
          >
            Skills
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C1121F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
          <a
            href="#contact"
            className="text-[#003049]/80 dark:text-white dark:text-white/80 font-medium hover:text-[#003049] dark:hover:text-white dark:text-white transition-colors relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#C1121F] scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
          </a>
        </div>

        <div className="flex gap-4 items-center">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg bg-gray-100 dark:bg-[#669BBC]/20 hover:bg-gray-200 dark:hover:bg-[#669BBC]/30 transition-all duration-300"
            aria-label="Toggle theme"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5 text-[#003049]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-white dark:text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          <a
            href="https://github.com/goncalo80775"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-[#003049] dark:text-white dark:text-white hover:text-[#C1121F] dark:hover:text-[#C1121F] transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/gmartins1198/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[#003049] dark:text-white dark:text-white hover:text-[#C1121F] dark:hover:text-[#C1121F] transition-all duration-300 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
