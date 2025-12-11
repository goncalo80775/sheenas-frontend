const Footer = () => {
  return (
    <footer className="bg-[#003049] dark:bg-[#001a2b] text-white py-8 px-6 transition-colors duration-300">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-lg leading-relaxed">
          Crafted by{" "}
          <span className="font-semibold text-[#C1121F]">Gonçalo Martins</span>,
          2025.
        </p>
        <p className="text-white/80 mt-2">
          <a
            href="https://github.com/goncalo80775/sheenas-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#669BBC] hover:text-[#C1121F] transition-colors duration-300 font-medium underline"
          >
            GitHub repo
          </a>
        </p>

        <div className="mt-6 w-24 h-0.5 bg-[#C1121F] mx-auto rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
