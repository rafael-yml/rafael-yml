import { Github, Linkedin, Mail, Youtube } from "lucide-react";

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/rafael-yml",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/rafael-yml/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    href: "https://youtu.be/PVYCskTed2A",
    icon: Youtube,
  },
  {
    name: "Email",
    href: "mailto:rafihernandez@gmail.com",
    icon: Mail,
  },
];

export const FloatingSocials = () => {
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-4">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3"
          aria-label={social.name}
        >
          <span className="p-2 border border-border rounded bg-card/80 backdrop-blur-sm transition-all duration-200 group-hover:border-primary group-hover:text-primary group-hover:border-glow">
            <social.icon className="w-4 h-4" />
          </span>
          <span className="text-xs text-muted-foreground opacity-0 -translate-x-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-primary">
            {social.name}
          </span>
        </a>
      ))}
    </nav>
  );
};
