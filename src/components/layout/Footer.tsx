const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#003049] to-[#003049]/95 text-[#FDF0D5] py-8 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-32 h-32 bg-[#669BBC]/10 rounded-full -translate-y-16 -translate-x-16"></div>
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-[#C1121F]/10 rounded-full translate-y-12 translate-x-12"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <p className="text-lg leading-relaxed">
          Crafted by{" "}
          <span className="font-semibold text-[#C1121F]">Gonçalo Martins</span>,
          2025.
        </p>
        <p className="text-[#FDF0D5]/80 mt-2">
          Open source, like all good things:{" "}
          <a
            href="https://github.com/goncalo80775/sheenas-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#669BBC] hover:text-[#C1121F] transition-colors duration-300 font-medium underline"
          >
            GitHub repo
          </a>
        </p>

        {/* Decorative line */}
        <div className="mt-6 w-24 h-0.5 bg-gradient-to-r from-[#C1121F] to-[#669BBC] mx-auto rounded-full"></div>
      </div>
    </footer>
  );
};

export default Footer;
