
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

const FAQSection = () => {
  const { t } = useLanguage();
  
  const faqs = [
    {
      question: t("faq.questions.1.question"),
      answer: t("faq.questions.1.answer")
    },
    {
      question: t("faq.questions.2.question"),
      answer: t("faq.questions.2.answer")
    },
    {
      question: t("faq.questions.3.question"),
      answer: t("faq.questions.3.answer")
    },
    {
      question: t("faq.questions.4.question"),
      answer: t("faq.questions.4.answer")
    },
    {
      question: t("faq.questions.5.question"),
      answer: t("faq.questions.5.answer")
    },
    {
      question: t("faq.questions.6.question"),
      answer: t("faq.questions.6.answer")
    }
  ];

  return (
    <section id="faq" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("faq.title")}</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t("faq.subtitle")}
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
            <p className="text-white/70 mb-4">{t("faq.moreQuestions")}</p>
            <a 
              href="#" 
              className="text-purple-400 underline hover:text-purple-300"
            >
              {t("faq.contactSupport")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
