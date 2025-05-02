
import { Check, Settings, FileText, Zap, Eye, Download, Palette } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-powered slide generation",
      description: "Enter your topic and watch as Gemini AI creates a complete, well-structured presentation."
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "No need to learn markdown or Slidev",
      description: "Our system handles all the technical details so you can focus on your content."
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Built-in live presentation viewer",
      description: "Present directly from Slix with our integrated viewer - no need for external tools."
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: "Export as PDF or keep it online",
      description: "Flexibility to download your presentation or keep it accessible online."
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Custom themes (coming soon)",
      description: "Choose from a variety of professional themes or create your own for a custom look."
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Advanced customization options",
      description: "Fine-tune your presentation with simple editing tools and real-time updates."
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Powerful Features</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to create professional presentations in minutes
          </p>
        </div>
        
        <div className="features-grid max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 hover:bg-white/[0.15] transition-all duration-300"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
