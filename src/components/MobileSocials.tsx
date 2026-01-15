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

export const MobileSocials = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-card/95 backdrop-blur-md border-t border-border">
      <div className="flex justify-around items-center py-3 px-4">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-1 text-muted-foreground transition-colors active:text-primary"
            aria-label={social.name}
          >
            <social.icon className="w-5 h-5" />
            <span className="text-[10px]">{social.name}</span>
          </a>
        ))}
      </div>
    </nav>
  );
};
