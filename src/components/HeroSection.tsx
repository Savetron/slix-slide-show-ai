
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      <div className="hero-glow top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
      <div className="hero-glow-2 top-3/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            Create Stunning Presentations with AI – Instantly.
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
            Slix generates fully designed, markdown-based slide decks using Gemini AI and displays them live within your browser.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-all w-64"
              style={{ height: 'auto' }}
            >
              Try it Free
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-lg w-64"
              style={{ height: 'auto' }}
            >
              See Example <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none h-32 bottom-0 top-auto"></div>
            <div className="mx-auto rounded-xl overflow-hidden border border-white/10 shadow-2xl relative">
              <div className="absolute top-0 left-0 right-0 h-12 bg-gray-900/80 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="mx-auto text-sm opacity-80">Slix Presentation Viewer</div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1626908013351-800ddd734b8a?q=80&w=2000&auto=format&fit=crop" 
                alt="Slix presentation demo" 
                className="w-full object-cover"
                style={{ height: '350px', marginTop: '48px' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
