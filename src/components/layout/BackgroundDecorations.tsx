const BackgroundDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30 dark:opacity-20 transition-opacity duration-300">
      <div className="absolute top-20 left-10 w-36 h-36 bg-[#669BBC] rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#003049] rounded-full blur-3xl"></div>
      <div className="absolute bottom-32 left-[40%] w-32 h-32 bg-[#C1121F] rounded-full blur-3xl"></div>
    </div>
  );
};

export default BackgroundDecorations;
