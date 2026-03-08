import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import ScrollProgress from "@/components/ScrollProgress";

const Index = () => {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden cursor-none md:cursor-none">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <CTASection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
