const ResumePage = () => {
  return (
    <div className="min-h-screen bg-[#FDF0D5] p-4 flex flex-col">
      <div className="mx-auto w-full flex-grow">
        <div className="bg-white rounded-lg shadow-lg p-4 h-full">
          <object
            data="./assets/Goncalo_Martins.pdf"
            type="application/pdf"
            className="w-full h-full min-h-[calc(100vh-8rem)]"
          >
            <p>
              It appears your browser doesn't support embedded PDFs.
              You can <a 
                href="/assets/Goncalo_Martins.pdf"
                download="Goncalo_Martins_Resume.pdf"
                className="text-[#C1121F] underline hover:text-[#780000]"
              >
                download the PDF
              </a> instead.
            </p>
          </object>
        </div>
      </div>
      
      <div className="mt-4 flex justify-center">
        <a 
          href="/assets/Goncalo_Martins.pdf"
          download="Goncalo_Martins_Resume.pdf"
          className="ml-4 bg-[#780000] text-[#FDF0D5] px-6 py-2 rounded-full font-medium hover:bg-[#C1121F] transition-colors duration-300"
        >
          Download PDF
        </a>
      </div>
    </div>
  );
};

export default ResumePage;