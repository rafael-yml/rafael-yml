import { FloatingSocials } from "@/components/FloatingSocials";
import { MobileSocials } from "@/components/MobileSocials";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Subtle scan lines overlay */}
      <div className="fixed inset-0 scan-line pointer-events-none z-40" />
      
      {/* Floating social links */}
      <FloatingSocials />
      <MobileSocials />
      
      {/* Main content */}
      <main className="relative z-10 md:ml-16">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
