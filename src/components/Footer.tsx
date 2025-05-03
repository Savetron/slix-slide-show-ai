
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { language, setLanguage, t } = useLanguage();
  const year = new Date().getFullYear();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <footer className="py-12 bg-gray-900/50 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mr-2">
                Slix
              </span>
              <span className="text-sm text-white/50">
                {t("footer.tag")}
              </span>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4 mb-4">
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-white/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-white/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-white/10">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full bg-white/5 hover:bg-white/10">
                <Linkedin className="h-5 w-5" />
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="sm" 
              className="text-white/70 hover:bg-white/10"
              onClick={toggleLanguage}
            >
              {language === "en" ? "TR" : "EN"}
            </Button>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">{t("footer.product")}</h3>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white/70 hover:text-white transition-colors">{t("footer.features")}</a></li>
              <li><a href="#pricing" className="text-white/70 hover:text-white transition-colors">{t("footer.pricing")}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t("footer.roadmap")}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t("footer.requestFeature")}</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold mb-4 text-lg">{t("footer.company")}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t("footer.about")}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t("footer.blog")}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t("footer.careers")}</a></li>
              <li><a href="#" className="text-white/70 hover:text-white transition-colors">{t("footer.contact")}</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 text-sm mb-4 md:mb-0">
            {t("footer.copyright").replace("2025", year.toString())}
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{t("footer.privacyPolicy")}</a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{t("footer.termsOfService")}</a>
            <a href="#" className="text-white/70 text-sm hover:text-white transition-colors">{t("footer.cookiePolicy")}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
