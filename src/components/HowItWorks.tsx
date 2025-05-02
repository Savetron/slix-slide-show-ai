
import { ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Enter your topic",
      description: "Simply input your presentation topic or outline - that's all the AI needs to get started."
    },
    {
      number: 2,
      title: "AI generates Slidev markdown",
      description: "Our Gemini AI creates presentation content and formats it perfectly as Slidev markdown."
    },
    {
      number: 3,
      title: "View and control the presentation instantly",
      description: "Your presentation renders immediately in the browser. Present, edit, or export - all in one place."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-background/0 to-background/100 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Slix Works</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            From concept to presentation in minutes, not hours. No design skills needed.
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <div 
                key={step.number} 
                className="glass-card rounded-xl p-8 relative group hover:-translate-y-1 transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-blue-600 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center mb-6 text-xl font-bold">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-white/70">{step.description}</p>
                
                {step.number < 3 && (
                  <div className="hidden md:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-8 h-8 text-purple-500" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="slide-bg mx-auto max-w-3xl rounded-lg p-6 overflow-hidden">
              <div className="font-mono text-sm text-green-400 bg-gray-900 p-4 rounded-md overflow-x-auto max-h-72">
                <pre>
{`---
theme: seriph
background: https://source.unsplash.com/1600x900/?gradient
class: text-center
highlighter: shiki
---

# Introduction to AI Presentations
Powered by Slix & Gemini

---

## What makes Slix different?

- AI-powered slide generation
- No markdown knowledge required
- Built-in presentation viewer
- Export capabilities

---

## The Future of Presentations

1. Faster creation
2. More consistent design
3. Focus on content, not formatting

---

# Thank You!`}
                </pre>
              </div>
              <div className="mt-4 border-t border-gray-700 pt-4 text-sm text-white/60 text-left">
                AI-generated markdown automatically converts to professional slides
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
