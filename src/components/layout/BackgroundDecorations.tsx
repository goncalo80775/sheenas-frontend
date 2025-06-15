const BackgroundDecorations = () => {
  return (
    <>
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-36 h-36 bg-[#669BBC] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-48 h-48 bg-[#003049] opacity-5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-[40%] w-32 h-32 bg-[#780000] opacity-5 rounded-full blur-3xl"></div>
      </div>
    </>
  );
};

export default BackgroundDecorations;
