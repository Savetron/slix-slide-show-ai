
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "tr" : "en");
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-background/80 backdrop-blur-lg shadow-md' : ''
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Slix
              </span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav>
              <ul className="flex space-x-8 text-sm font-medium">
                <li><a href="#features" className="text-white/80 hover:text-white transition-colors">{t("header.features")}</a></li>
                <li><a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">{t("header.howItWorks")}</a></li>
                <li><a href="#pricing" className="text-white/80 hover:text-white transition-colors">{t("header.pricing")}</a></li>
                <li><a href="#faq" className="text-white/80 hover:text-white transition-colors">{t("header.faq")}</a></li>
              </ul>
            </nav>
            
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={toggleLanguage}
              >
                {language === "en" ? "TR" : "EN"}
              </Button>
              <ThemeToggle />
              <Button variant="ghost" className="text-white hover:bg-white/10">
                {t("header.login")}
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                {t("header.signup")}
              </Button>
            </div>
          </div>
          
          <div className="flex md:hidden items-center space-x-4">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/10"
              onClick={toggleLanguage}
            >
              {language === "en" ? "TR" : "EN"}
            </Button>
            <ThemeToggle />
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white"
            >
              <Menu />
            </Button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-card rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-6">
              <a href="#features" className="text-white/80 hover:text-white py-2 transition-colors">{t("header.features")}</a>
              <a href="#how-it-works" className="text-white/80 hover:text-white py-2 transition-colors">{t("header.howItWorks")}</a>
              <a href="#pricing" className="text-white/80 hover:text-white py-2 transition-colors">{t("header.pricing")}</a>
              <a href="#faq" className="text-white/80 hover:text-white py-2 transition-colors">{t("header.faq")}</a>
              <div className="flex flex-col space-y-3 pt-3 border-t border-gray-700">
                <Button variant="ghost" className="text-white justify-start hover:bg-white/10">
                  {t("header.login")}
                </Button>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  {t("header.signup")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
