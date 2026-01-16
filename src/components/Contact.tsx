import { Mail, MapPin, MessageCircle } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-16 px-4 pb-24 md:pb-16">
      <div className="max-w-2xl mx-auto">
        <div className="text-muted-foreground text-sm mb-6">
          <span className="text-primary">$</span> echo $CONTACT
        </div>
        
        <div className="border border-border rounded p-6 bg-card/50">
          <p className="text-muted-foreground mb-6">
            Open to opportunities in automation, data analytics, and cybersecurity. 
            Let's connect.
          </p>
          
          <div className="space-y-3 text-sm">
            <a 
              href="mailto:rafihernandez@gmail.com"
              className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4" />
              rafihernandez@gmail.com
            </a>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <MapPin className="w-4 h-4" />
              Kuala Lumpur, Malaysia ✈️ > Spain 
            </div>
            
            <div className="flex items-center gap-3 text-muted-foreground">
              <MessageCircle className="w-4 h-4" />
              Spanish (Native) · English (Native) · Malay · Japanese
            </div>
          </div>
          
          <div className="mt-6 pt-4 border-t border-border">
            <a
              href="mailto:rafihernandez@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium transition-all hover:opacity-90"
            >
              <span className="text-primary-foreground/70">&gt;</span>
              send_message
            </a>
          </div>
        </div>
        
        <div className="mt-12 text-center text-xs text-muted-foreground">
          <span className="text-terminal-dim">// Built with </span>
          <span className="text-primary">React</span>
          <span className="text-terminal-dim"> + </span>
          <span className="text-primary">TypeScript</span>
        </div>
      </div>
    </section>
  );
};
