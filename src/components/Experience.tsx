const experiences = [
  {
    role: "AR & Automations Coordinator",
    company: "Air Products",
    period: "2+ years · Present",
    highlights: [
      "Shipped automations saving 500+ hours/month",
      "Won 1st place at Innovation Idea event",
      "99% automation uptime maintenance",
    ],
  },
  {
    role: "Data Analyst Intern",
    company: "Nestlé",
    period: "1 year",
    highlights: [
      "Built Azure Data Factory pipelines",
      "Cut report prep time by 1.5+ hours/week",
      "Mentored full-time team members",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-muted-foreground text-sm mb-6">
          <span className="text-primary">$</span> git log --oneline
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div 
              key={exp.company}
              className="relative pl-6 border-l border-border animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="absolute left-0 top-0 w-2 h-2 -translate-x-[5px] rounded-full bg-primary" />
              
              <div className="mb-2">
                <h3 className="text-foreground font-medium">{exp.role}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.company} · <span className="text-terminal-dim">{exp.period}</span>
                </p>
              </div>
              
              <ul className="space-y-1">
                {exp.highlights.map((highlight) => (
                  <li key={highlight} className="text-sm text-muted-foreground flex items-start gap-2">
                    <span className="text-primary mt-1">›</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
