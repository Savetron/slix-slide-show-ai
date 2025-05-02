
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Do I need to install anything?",
      answer: "No, Slix is entirely web-based. You only need a modern browser to create, edit, and present your slides. There's nothing to download or install."
    },
    {
      question: "Can I export my slides?",
      answer: "Yes! You can export your presentations as PDF files with our free plan. With the Pro plan, you'll also get PowerPoint export options and more advanced customization before exporting."
    },
    {
      question: "Is this really powered by AI?",
      answer: "Absolutely. Slix uses Google's Gemini AI to generate both the content and structure of your presentations based on your input. The AI understands context and can create cohesive, well-organized slide decks on virtually any topic."
    },
    {
      question: "How many slides can I create?",
      answer: "Free users can create up to 5 presentations per month, with a typical presentation containing 8-12 slides. Pro users have unlimited presentation creation."
    },
    {
      question: "Can I edit the AI-generated slides?",
      answer: "Yes, you can edit the content after the AI generates it. Free users can make basic text edits, while Pro users have access to more advanced editing features including slide structure changes."
    },
    {
      question: "What if I'm not satisfied with the AI-generated presentation?",
      answer: "You can regenerate your presentation with more specific instructions, or edit it manually. We're constantly improving our AI to produce better results with each update."
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Everything you need to know about Slix
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-white/10 rounded-lg bg-white/5 px-6 py-2 hover:bg-white/10 transition-colors"
              >
                <AccordionTrigger className="text-lg font-medium py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/70 pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-white/70 mb-4">Still have questions?</p>
            <a 
              href="#" 
              className="text-purple-400 underline hover:text-purple-300"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
