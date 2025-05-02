
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="py-20 relative">
      <div className="hero-glow top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-12 border-2 border-purple-500/30">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Presentations?
          </h2>
          <p className="text-xl text-white/80 mb-10">
            Join thousands of professionals who save hours every week with Slix AI-powered presentations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-6 text-lg rounded-lg"
              style={{ height: 'auto' }}
            >
              Try Slix For Free
            </Button>
            <Button 
              variant="outline" 
              className="border-white/20 hover:bg-white/10 text-white font-semibold px-8 py-6 text-lg rounded-lg"
              style={{ height: 'auto' }}
            >
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
