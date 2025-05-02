
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const tiers = [
    {
      name: "Free",
      price: "0",
      description: "Perfect for trying out Slix",
      features: [
        "5 AI presentations per month",
        "Basic export to PDF",
        "Standard themes",
        "Public presentations only",
        "Community support"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "19",
      description: "For professionals and educators",
      features: [
        "Unlimited AI presentations",
        "Advanced PDF and PPT exports",
        "Premium themes library",
        "Private presentations",
        "Edit generated slides",
        "Priority support"
      ],
      cta: "Start Free Trial",
      popular: true
    }
  ];

  return (
    <section id="pricing" className="py-24 relative">
      <div className="hero-glow-2 bottom-0 left-1/4 transform -translate-x-1/2 animate-pulse-glow"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Start for free, upgrade when you need more power
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {tiers.map((tier, index) => (
            <div 
              key={index} 
              className={`rounded-xl overflow-hidden ${
                tier.popular 
                  ? 'border-2 border-purple-500 bg-gradient-to-br from-gray-900/90 to-gray-800/90' 
                  : 'border border-white/10 glass-card'
              }`}
            >
              {tier.popular && (
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold">${tier.price}</span>
                  <span className="text-white/60 ml-1">/month</span>
                </div>
                <p className="text-white/70 mb-6">{tier.description}</p>
                
                <ul className="space-y-4 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 text-green-500 mt-1">
                        <Check className="h-5 w-5" />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  {tier.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center text-white/60 max-w-2xl mx-auto">
          <p>All plans include core features like Gemini AI-powered slide generation, built-in presentation viewer, and continuous updates. Need custom enterprise solutions? <a href="#" className="text-purple-400 underline hover:text-purple-300">Contact our sales team</a>.</p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
