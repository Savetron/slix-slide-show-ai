
import { Check, Settings, FileText, Zap, Eye, Download, Palette } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const FeaturesSection = () => {
  const { t } = useLanguage();
  
  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: t("features.ai.title"),
      description: t("features.ai.description")
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: t("features.noMarkdown.title"),
      description: t("features.noMarkdown.description")
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: t("features.viewer.title"),
      description: t("features.viewer.description")
    },
    {
      icon: <Download className="w-6 h-6" />,
      title: t("features.export.title"),
      description: t("features.export.description")
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: t("features.themes.title"),
      description: t("features.themes.description")
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: t("features.customization.title"),
      description: t("features.customization.description")
    }
  ];

  return (
    <section id="features" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("features.title")}</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            {t("features.subtitle")}
          </p>
        </div>
        
        <div className="features-grid max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="glass-card rounded-xl p-8 hover:bg-white/[0.15] transition-all duration-300"
            >
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-white/70">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
