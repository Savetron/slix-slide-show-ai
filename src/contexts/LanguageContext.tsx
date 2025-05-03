
import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "tr";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Hero Section
    "hero.title": "Create Stunning Presentations with AI – Instantly.",
    "hero.subtitle": "Slix generates Slidev-based presentations using Gemini AI. You edit nothing — just input a topic and start presenting.",
    "hero.cta.primary": "Try It Free",
    "hero.cta.secondary": "See Demo",
    
    // How It Works
    "howItWorks.title": "How Slix Works",
    "howItWorks.subtitle": "From concept to presentation in minutes, not hours. No design skills needed.",
    "howItWorks.step1.title": "Type your topic",
    "howItWorks.step1.description": "Simply input your presentation topic or outline - that's all the AI needs to get started.",
    "howItWorks.step2.title": "AI writes the presentation",
    "howItWorks.step2.description": "Our Gemini AI creates presentation content and formats it perfectly as Slidev markdown.",
    "howItWorks.step3.title": "You present, instantly",
    "howItWorks.step3.description": "Your presentation renders immediately in the browser. Present, edit, or export - all in one place.",
    
    // Features Section
    "features.title": "Powerful Features",
    "features.subtitle": "Everything you need to create professional presentations in minutes",
    "features.ai.title": "AI-powered slide generation",
    "features.ai.description": "Enter your topic and watch as Gemini AI creates a complete, well-structured presentation.",
    "features.noMarkdown.title": "No need to learn markdown or Slidev",
    "features.noMarkdown.description": "Our system handles all the technical details so you can focus on your content.",
    "features.viewer.title": "Built-in live presentation viewer",
    "features.viewer.description": "Present directly from Slix with our integrated viewer - no need for external tools.",
    "features.export.title": "Export as PDF or keep it online",
    "features.export.description": "Flexibility to download your presentation or keep it accessible online.",
    "features.themes.title": "Custom themes (coming soon)",
    "features.themes.description": "Choose from a variety of professional themes or create your own for a custom look.",
    "features.customization.title": "Advanced customization options",
    "features.customization.description": "Fine-tune your presentation with simple editing tools and real-time updates.",
    
    // Testimonials
    "testimonials.title": "Trusted by Professionals",
    "testimonials.subtitle": "See how Slix is transforming presentation creation for people just like you",
    "testimonials.1.quote": "Slix has transformed how I prepare for lectures. What used to take hours now takes minutes, and the quality is consistently great.",
    "testimonials.1.name": "Dr. Sarah Johnson",
    "testimonials.1.role": "University Professor",
    "testimonials.2.quote": "As a startup founder, I'm pitching constantly. Slix helps me create professional decks on the fly without hiring a designer.",
    "testimonials.2.name": "Marcus Chen",
    "testimonials.2.role": "Tech Entrepreneur",
    "testimonials.3.quote": "I use Slix for all my client presentations. The AI understands my industry terminology and creates perfect slides every time.",
    "testimonials.3.name": "Taylor Wright",
    "testimonials.3.role": "Product Manager",
    
    // Use Cases
    "useCases.title": "Perfect For",
    "useCases.educators.title": "Educators",
    "useCases.educators.description": "Create engaging lecture slides and educational materials with minimal effort.",
    "useCases.product.title": "Product Managers",
    "useCases.product.description": "Generate product updates and roadmap presentations quickly and professionally.",
    "useCases.developers.title": "Developers",
    "useCases.developers.description": "Present technical concepts clearly without spending hours on slide design.",
    "useCases.startups.title": "Startups",
    "useCases.startups.description": "Create investor pitches and business presentations that look professionally designed.",
    
    // Pricing Section
    "pricing.title": "Simple, Transparent Pricing",
    "pricing.subtitle": "Start for free, upgrade when you need more power",
    "pricing.free.title": "Free",
    "pricing.free.price": "0",
    "pricing.free.description": "Perfect for trying out Slix",
    "pricing.free.cta": "Get Started",
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "19",
    "pricing.pro.description": "For professionals and educators",
    "pricing.pro.cta": "Start Free Trial",
    "pricing.pro.label": "Most Popular",
    "pricing.free.features.1": "5 AI presentations per month",
    "pricing.free.features.2": "Basic export to PDF",
    "pricing.free.features.3": "Standard themes",
    "pricing.free.features.4": "Public presentations only",
    "pricing.free.features.5": "Community support",
    "pricing.pro.features.1": "Unlimited AI presentations",
    "pricing.pro.features.2": "Advanced PDF and PPT exports",
    "pricing.pro.features.3": "Premium themes library",
    "pricing.pro.features.4": "Private presentations",
    "pricing.pro.features.5": "Edit generated slides",
    "pricing.pro.features.6": "Priority support",
    "pricing.note": "All plans include core features like Gemini AI-powered slide generation, built-in presentation viewer, and continuous updates. Need custom enterprise solutions?",
    "pricing.contactSales": "Contact our sales team",
    
    // FAQ Section
    "faq.title": "Frequently Asked Questions",
    "faq.subtitle": "Everything you need to know about Slix",
    "faq.questions.1.question": "Do I need to install anything?",
    "faq.questions.1.answer": "No, Slix is entirely web-based. You only need a modern browser to create, edit, and present your slides. There's nothing to download or install.",
    "faq.questions.2.question": "Can I export my slides?",
    "faq.questions.2.answer": "Yes! You can export your presentations as PDF files with our free plan. With the Pro plan, you'll also get PowerPoint export options and more advanced customization before exporting.",
    "faq.questions.3.question": "Is this really powered by AI?",
    "faq.questions.3.answer": "Absolutely. Slix uses Google's Gemini AI to generate both the content and structure of your presentations based on your input. The AI understands context and can create cohesive, well-organized slide decks on virtually any topic.",
    "faq.questions.4.question": "How many slides can I create?",
    "faq.questions.4.answer": "Free users can create up to 5 presentations per month, with a typical presentation containing 8-12 slides. Pro users have unlimited presentation creation.",
    "faq.questions.5.question": "Can I edit the AI-generated slides?",
    "faq.questions.5.answer": "Yes, you can edit the content after the AI generates it. Free users can make basic text edits, while Pro users have access to more advanced editing features including slide structure changes.",
    "faq.questions.6.question": "What if I'm not satisfied with the AI-generated presentation?",
    "faq.questions.6.answer": "You can regenerate your presentation with more specific instructions, or edit it manually. We're constantly improving our AI to produce better results with each update.",
    "faq.moreQuestions": "Still have questions?",
    "faq.contactSupport": "Contact our support team",
    
    // CTA Section
    "cta.title": "Ready to Transform Your Presentations?",
    "cta.subtitle": "Join thousands of professionals who save hours every week with Slix AI-powered presentations.",
    "cta.primary": "Try Slix For Free",
    "cta.secondary": "Schedule a Demo",
    
    // Header
    "header.features": "Features",
    "header.howItWorks": "How It Works",
    "header.pricing": "Pricing",
    "header.faq": "FAQ",
    "header.login": "Log in",
    "header.signup": "Sign up",
    
    // Footer
    "footer.product": "Product",
    "footer.features": "Features",
    "footer.pricing": "Pricing",
    "footer.roadmap": "Roadmap",
    "footer.requestFeature": "Request a feature",
    "footer.company": "Company",
    "footer.about": "About",
    "footer.blog": "Blog",
    "footer.careers": "Careers",
    "footer.contact": "Contact",
    "footer.copyright": "© 2025 Slix AI. All rights reserved.",
    "footer.privacyPolicy": "Privacy Policy",
    "footer.termsOfService": "Terms of Service",
    "footer.cookiePolicy": "Cookie Policy",
    "footer.tag": "AI Presentation Generator",
    "footer.description": "Create stunning presentations instantly with our AI-powered platform. No design skills required, just enter your topic and let the magic happen."
  },
  tr: {
    // Hero Section
    "hero.title": "Yapay Zekayla Etkileyici Sunumlar Hazırlayın – Anında.",
    "hero.subtitle": "Slix, Gemini AI kullanarak Slidev tabanlı sunumlar üretir. Kod yazmadan, slayt düzenlemeden, sadece konunuzu girin ve başlayın.",
    "hero.cta.primary": "Ücretsiz Dene",
    "hero.cta.secondary": "Demoyu Gör",
    
    // How It Works
    "howItWorks.title": "Slix Nasıl Çalışır",
    "howItWorks.subtitle": "Fikirden sunuma, saatler değil dakikalar içinde. Tasarım becerisi gerekmez.",
    "howItWorks.step1.title": "Konu başlığınızı yazın",
    "howItWorks.step1.description": "Sunum konunuzu veya anahatlarınızı girin - yapay zekanın başlaması için bu kadar yeterli.",
    "howItWorks.step2.title": "Yapay zekâ sunumu oluşturur",
    "howItWorks.step2.description": "Gemini AI'mız sunum içeriğini oluşturur ve Slidev markdown formatında mükemmel şekilde düzenler.",
    "howItWorks.step3.title": "Sunumunuz hazır, hemen sunun",
    "howItWorks.step3.description": "Sunumunuz anında tarayıcınızda görüntülenir. Sunun, düzenleyin veya dışa aktarın - hepsi tek bir yerde.",
    
    // Features Section
    "features.title": "Güçlü Özellikler",
    "features.subtitle": "Dakikalar içinde profesyonel sunumlar oluşturmak için ihtiyacınız olan her şey",
    "features.ai.title": "Yapay zekâ destekli slayt oluşturma",
    "features.ai.description": "Konunuzu girin ve Gemini AI'nın eksiksiz, iyi yapılandırılmış bir sunum oluşturmasını izleyin.",
    "features.noMarkdown.title": "Markdown veya Slidev öğrenmenize gerek yok",
    "features.noMarkdown.description": "Sistemimiz tüm teknik detaylarla ilgilenir, böylece içeriğinize odaklanabilirsiniz.",
    "features.viewer.title": "Dahili canlı sunum görüntüleyici",
    "features.viewer.description": "Harici araçlara gerek kalmadan entegre görüntüleyicimizle Slix'ten doğrudan sunum yapın.",
    "features.export.title": "PDF olarak dışa aktarın veya çevrimiçi tutun",
    "features.export.description": "Sunumunuzu indirme veya çevrimiçi erişilebilir tutma esnekliği.",
    "features.themes.title": "Özel temalar (yakında)",
    "features.themes.description": "Özel bir görünüm için çeşitli profesyonel temalar arasından seçim yapın veya kendi temanızı oluşturun.",
    "features.customization.title": "Gelişmiş özelleştirme seçenekleri",
    "features.customization.description": "Basit düzenleme araçları ve gerçek zamanlı güncellemelerle sunumunuzu ince ayarlayın.",
    
    // Testimonials
    "testimonials.title": "Profesyoneller Tarafından Güvenilir",
    "testimonials.subtitle": "Slix'in sizin gibi kişiler için sunum oluşturmayı nasıl dönüştürdüğünü görün",
    "testimonials.1.quote": "Slix, derslere nasıl hazırlandığımı değiştirdi. Eskiden saatler alan işler artık dakikalar sürüyor ve kalite tutarlı olarak harika.",
    "testimonials.1.name": "Dr. Sarah Johnson",
    "testimonials.1.role": "Üniversite Profesörü",
    "testimonials.2.quote": "Bir startup kurucusu olarak, sürekli sunum yapıyorum. Slix, tasarımcı kiralamadan anında profesyonel sunumlar oluşturmama yardımcı oluyor.",
    "testimonials.2.name": "Marcus Chen",
    "testimonials.2.role": "Teknoloji Girişimcisi",
    "testimonials.3.quote": "Tüm müşteri sunumlarım için Slix kullanıyorum. Yapay zeka sektör terminolojimi anlıyor ve her seferinde mükemmel slaytlar oluşturuyor.",
    "testimonials.3.name": "Taylor Wright",
    "testimonials.3.role": "Ürün Yöneticisi",
    
    // Use Cases
    "useCases.title": "Kimler İçin İdeal",
    "useCases.educators.title": "Eğitimciler",
    "useCases.educators.description": "Minimum çabayla etkileyici ders slaytları ve eğitim materyalleri oluşturun.",
    "useCases.product.title": "Ürün Yöneticileri",
    "useCases.product.description": "Ürün güncellemeleri ve yol haritası sunumlarını hızlı ve profesyonel şekilde oluşturun.",
    "useCases.developers.title": "Geliştiriciler",
    "useCases.developers.description": "Slayt tasarımına saatler harcamadan teknik konseptleri net bir şekilde sunun.",
    "useCases.startups.title": "Startuplar",
    "useCases.startups.description": "Profesyonel olarak tasarlanmış yatırımcı sunumları ve iş sunumları oluşturun.",
    
    // Pricing Section
    "pricing.title": "Basit, Şeffaf Fiyatlandırma",
    "pricing.subtitle": "Ücretsiz başlayın, daha fazla güce ihtiyacınız olduğunda yükseltin",
    "pricing.free.title": "Ücretsiz",
    "pricing.free.price": "0",
    "pricing.free.description": "Slix'i denemek için mükemmel",
    "pricing.free.cta": "Başlayın",
    "pricing.pro.title": "Pro",
    "pricing.pro.price": "19",
    "pricing.pro.description": "Profesyoneller ve eğitimciler için",
    "pricing.pro.cta": "Ücretsiz Deneme Başlat",
    "pricing.pro.label": "En Popüler",
    "pricing.free.features.1": "Ayda 5 yapay zeka sunumu",
    "pricing.free.features.2": "Temel PDF'e aktarma",
    "pricing.free.features.3": "Standart temalar",
    "pricing.free.features.4": "Yalnızca halka açık sunumlar",
    "pricing.free.features.5": "Topluluk desteği",
    "pricing.pro.features.1": "Sınırsız yapay zeka sunumları",
    "pricing.pro.features.2": "Gelişmiş PDF ve PPT dışa aktarımları",
    "pricing.pro.features.3": "Premium tema kütüphanesi",
    "pricing.pro.features.4": "Özel sunumlar",
    "pricing.pro.features.5": "Oluşturulan slaytları düzenleyin",
    "pricing.pro.features.6": "Öncelikli destek",
    "pricing.note": "Tüm planlar, Gemini AI destekli slayt oluşturma, dahili sunum görüntüleyici ve sürekli güncellemeler gibi temel özellikleri içerir. Özel kurumsal çözümlere mi ihtiyacınız var?",
    "pricing.contactSales": "Satış ekibimizle iletişime geçin",
    
    // FAQ Section
    "faq.title": "Sıkça Sorulan Sorular",
    "faq.subtitle": "Slix hakkında bilmeniz gereken her şey",
    "faq.questions.1.question": "Herhangi bir şey yüklemem gerekiyor mu?",
    "faq.questions.1.answer": "Hayır, Slix tamamen web tabanlıdır. Slaytlarınızı oluşturmak, düzenlemek ve sunmak için sadece modern bir tarayıcıya ihtiyacınız var. İndirilecek veya kurulacak bir şey yok.",
    "faq.questions.2.question": "Slaytlarımı dışa aktarabilir miyim?",
    "faq.questions.2.answer": "Evet! Ücretsiz planımızla sunumlarınızı PDF dosyaları olarak dışa aktarabilirsiniz. Pro plan ile PowerPoint dışa aktarma seçenekleri ve dışa aktarmadan önce daha gelişmiş özelleştirme seçenekleri de elde edersiniz.",
    "faq.questions.3.question": "Bu gerçekten yapay zeka ile mi çalışıyor?",
    "faq.questions.3.answer": "Kesinlikle. Slix, girişinize göre sunumlarınızın hem içeriğini hem de yapısını oluşturmak için Google'ın Gemini AI'sini kullanır. Yapay zeka bağlamı anlar ve neredeyse her konuda uyumlu, iyi organize edilmiş slayt destelerini oluşturabilir.",
    "faq.questions.4.question": "Kaç slayt oluşturabilirim?",
    "faq.questions.4.answer": "Ücretsiz kullanıcılar ayda 5 sunuma kadar oluşturabilir ve tipik bir sunum 8-12 slayt içerir. Pro kullanıcılar sınırsız sunum oluşturma hakkına sahiptir.",
    "faq.questions.5.question": "Yapay zeka tarafından oluşturulan slaytları düzenleyebilir miyim?",
    "faq.questions.5.answer": "Evet, yapay zeka içeriği oluşturduktan sonra düzenleyebilirsiniz. Ücretsiz kullanıcılar temel metin düzenlemeleri yapabilirken, Pro kullanıcılar slayt yapısı değişiklikleri dahil daha gelişmiş düzenleme özelliklerine erişebilir.",
    "faq.questions.6.question": "Yapay zeka tarafından oluşturulan sunumdan memnun kalmazsam ne olur?",
    "faq.questions.6.answer": "Sunumunuzu daha spesifik talimatlarla yeniden oluşturabilir veya manuel olarak düzenleyebilirsiniz. Her güncellemede daha iyi sonuçlar üretmek için yapay zekamızı sürekli geliştiriyoruz.",
    "faq.moreQuestions": "Başka sorularınız mı var?",
    "faq.contactSupport": "Destek ekibimizle iletişime geçin",
    
    // CTA Section
    "cta.title": "Sunumlarınızı Dönüştürmeye Hazır mısınız?",
    "cta.subtitle": "Slix yapay zeka destekli sunumlarla her hafta saatlerce tasarruf eden binlerce profesyonele katılın.",
    "cta.primary": "Slix'i Ücretsiz Deneyin",
    "cta.secondary": "Demo Planla",
    
    // Header
    "header.features": "Özellikler",
    "header.howItWorks": "Nasıl Çalışır",
    "header.pricing": "Fiyatlandırma",
    "header.faq": "SSS",
    "header.login": "Giriş yap",
    "header.signup": "Kaydol",
    
    // Footer
    "footer.product": "Ürün",
    "footer.features": "Özellikler",
    "footer.pricing": "Fiyatlandırma",
    "footer.roadmap": "Yol haritası",
    "footer.requestFeature": "Özellik iste",
    "footer.company": "Şirket",
    "footer.about": "Hakkımızda",
    "footer.blog": "Blog",
    "footer.careers": "Kariyer",
    "footer.contact": "İletişim",
    "footer.copyright": "© 2025 Slix AI. Tüm hakları saklıdır.",
    "footer.privacyPolicy": "Gizlilik Politikası",
    "footer.termsOfService": "Kullanım Şartları",
    "footer.cookiePolicy": "Çerez Politikası",
    "footer.tag": "Yapay Zeka Sunum Oluşturucu",
    "footer.description": "Yapay zeka destekli platformumuzla anında etkileyici sunumlar oluşturun. Tasarım becerisi gerekmez, sadece konunuzu girin ve sihrin gerçekleşmesine izin verin."
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("language");
    return (savedLanguage === "tr" ? "tr" : "en") as Language;
  });

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
