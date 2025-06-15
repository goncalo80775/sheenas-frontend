import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import BackgroundDecorations from "./components/layout/BackgroundDecorations";
import HeroSection from "./components/home/HeroSection";
import AboutSection from "./components/about/AboutSection";
import SkillsSection from "./components/skills/SkillsSection";
import FaqSection from "./components/faq/FaqSection";
import SectionDivider from "./components/ui/SectionDivider";
import ContactSection from "./components/contact/ContactSection";
import Footer from "./components/layout/Footer";
import ResumePage from "./components/resume/ResumePage";

function HomePage() {
  return (
    <div className="min-h-screen bg-[#FDF0D5] relative overflow-hidden">
      <BackgroundDecorations />
      <Navbar />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <SkillsSection />
      <SectionDivider />
      <FaqSection />
      <SectionDivider />
      <ContactSection />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
