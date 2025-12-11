import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "./context/ThemeContext";
import Navbar from "./components/layout/Navbar";
import BackgroundDecorations from "./components/layout/BackgroundDecorations";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import HighlightsSection from "./components/highlights/HighlightsSection";
import SectionDivider from "./components/ui/SectionDivider";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/layout/Footer";
import ResumePage from "./components/resume/ResumePage";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 relative overflow-hidden transition-colors duration-300">
      <BackgroundDecorations />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <HighlightsSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resume" element={<ResumePage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
