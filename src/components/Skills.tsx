const skillCategories = [
  {
    title: "Data & Analytics",
    skills: ["Python", "Pandas", "PowerBI", "Azure", "SQL", "Excel"],
  },
  {
    title: "Automation",
    skills: ["VBA", "UiPath", "Power Automate", "Office Scripts", "AutoHotkey"],
  },
  {
    title: "Development",
    skills: ["TypeScript", "JavaScript", "Ruby on Rails", "Java", "Git"],
  },
  {
    title: "Cybersecurity",
    skills: ["Splunk", "Wireshark", "Nmap", "Chronicle", "Security+"],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-muted-foreground text-sm mb-6">
          <span className="text-primary">$</span> cat skills.json
        </div>
        
        <div className="grid gap-4">
          {skillCategories.map((category, i) => (
            <div 
              key={category.title}
              className="border border-border rounded p-4 bg-card/50 animate-fade-in"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="text-primary text-sm font-medium mb-3">
                "{category.title}"<span className="text-muted-foreground">:</span>
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span 
                    key={skill}
                    className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded border border-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
