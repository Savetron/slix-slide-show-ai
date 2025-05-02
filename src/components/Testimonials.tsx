
import { Avatar } from '@/components/ui/avatar';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Slix has transformed how I prepare for lectures. What used to take hours now takes minutes, and the quality is consistently great.",
      name: "Dr. Sarah Johnson",
      role: "University Professor",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "As a startup founder, I'm pitching constantly. Slix helps me create professional decks on the fly without hiring a designer.",
      name: "Marcus Chen",
      role: "Tech Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "I use Slix for all my client presentations. The AI understands my industry terminology and creates perfect slides every time.",
      name: "Taylor Wright",
      role: "Product Manager",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=150&auto=format&fit=crop"
    }
  ];

  const useCards = [
    {
      title: "Educators",
      description: "Create engaging lecture slides and educational materials with minimal effort.",
      color: "from-blue-600 to-blue-800"
    },
    {
      title: "Product Managers",
      description: "Generate product updates and roadmap presentations quickly and professionally.",
      color: "from-purple-600 to-purple-800"
    },
    {
      title: "Developers",
      description: "Present technical concepts clearly without spending hours on slide design.",
      color: "from-pink-600 to-pink-800"
    },
    {
      title: "Startups",
      description: "Create investor pitches and business presentations that look professionally designed.",
      color: "from-indigo-600 to-indigo-800"
    }
  ];

  return (
    <section className="py-24 relative bg-gradient-to-b from-background/50 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Trusted by Professionals</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See how Slix is transforming presentation creation for people just like you
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 flex flex-col h-full hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex-grow">
                <p className="italic text-white/80 mb-6">"{testimonial.quote}"</p>
              </div>
              <div className="flex items-center">
                <Avatar className="h-12 w-12 border-2 border-purple-500">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                </Avatar>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center">Perfect For</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {useCards.map((card, index) => (
              <div 
                key={index} 
                className={`rounded-xl p-6 text-center bg-gradient-to-br ${card.color} hover:shadow-lg transition-all duration-300`}
              >
                <h4 className="text-xl font-semibold mb-3">{card.title}</h4>
                <p className="text-white/80 text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
