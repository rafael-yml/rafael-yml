import { useEffect, useState } from "react";

const roles = [
  "Automation Engineer",
  "Data Analyst", 
  "Cybersecurity Enthusiast",
  "Full-Stack Developer",
];

export const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 30 : 80;
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayed.length < currentRole.length) {
          setDisplayed(currentRole.slice(0, displayed.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayed.length > 0) {
          setDisplayed(displayed.slice(0, -1));
        } else {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, roleIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full animate-fade-in">
        <div className="text-muted-foreground text-sm mb-2">
          <span className="text-primary">$</span> whoami
        </div>
        
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">
          <span className="text-primary text-glow">Rafael</span>{" "}
          <span className="text-foreground">Hernández</span>
        </h1>
        
        <div className="text-lg md:text-xl text-muted-foreground mb-6 h-8">
          <span className="text-terminal-cyan">{displayed}</span>
          <span className="animate-blink text-primary">_</span>
        </div>
        
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
          Building automations that save 500+ hours monthly. 
          Turning complex data into actionable insights. 
          Securing systems with CompTIA Security+.
        </p>
        
        <div className="flex flex-wrap gap-3 text-sm">
          <a 
            href="#projects" 
            className="px-4 py-2 border border-primary text-primary rounded transition-all hover:bg-primary hover:text-primary-foreground"
          >
            <span className="text-muted-foreground mr-1">&gt;</span> view_projects
          </a>
          <a 
            href="#contact"
            className="px-4 py-2 border border-border text-muted-foreground rounded transition-all hover:border-primary hover:text-primary"
          >
            <span className="text-muted-foreground mr-1">&gt;</span> contact
          </a>
        </div>
      </div>
    </section>
  );
};
