import { ExternalLink, Github, Trophy, Play } from "lucide-react";

const projects = [
  {
    title: "Email Automation System",
    description: "Power Automate + Office Scripts solution that won 1st place at company Innovation event. Saves 1-2 hours daily per team member.",
    tags: ["Power Automate", "TypeScript", "Office Scripts"],
    links: {
      demo: "https://youtu.be/PVYCskTed2A",
    },
    highlight: true,
    icon: Trophy,
  },
  {
    title: "SAP ERP Automation Suite",
    description: "VBA automations integrated with SAP Scripting. Increased team efficiency by 60% and saved 500+ hours monthly.",
    tags: ["VBA", "SAP", "Excel"],
  },
  {
    title: "Azure Data Pipeline",
    description: "End-to-end data flow using Azure Data Factory, Databricks, and Python Pandas. Outputs to PowerBI dashboards.",
    tags: ["Azure", "Python", "Pandas", "PowerBI"],
  },
  {
    title: "Final Year Project",
    description: "Full-stack web application built with Ruby on Rails and PostgreSQL. Features UML-driven architecture.",
    tags: ["Ruby on Rails", "PostgreSQL", "UML"],
    links: {
      github: "https://github.com/rafael-yml",
    },
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-muted-foreground text-sm mb-6">
          <span className="text-primary">$</span> ls projects/
        </div>
        
        <div className="grid gap-4">
          {projects.map((project, i) => (
            <article 
              key={project.title}
              className={`border rounded p-4 transition-all animate-fade-in ${
                project.highlight 
                  ? "border-primary/50 bg-primary/5" 
                  : "border-border bg-card/50"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="text-foreground font-medium flex items-center gap-2">
                  {project.highlight && (
                    <Trophy className="w-4 h-4 text-primary" />
                  )}
                  {project.title}
                </h3>
                
                {project.links && (
                  <div className="flex gap-2">
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.links.demo && (
                      <a
                        href={project.links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="Watch demo"
                      >
                        <Play className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                )}
              </div>
              
              <p className="text-sm text-muted-foreground mb-3">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-0.5 text-terminal-dim border border-border rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
