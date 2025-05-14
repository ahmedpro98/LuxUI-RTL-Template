import React, { useEffect, useState } from 'react';
import { ArrowUp, ChevronUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isRTL, language } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const positionClass = isRTL ? 'left-6' : 'right-6';

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-50 w-12 h-12 rounded-full shadow-lg transition-all duration-300 transform 
        flex items-center justify-center group
        ${positionClass}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'} 
        ${language === 'ar' ? 'bg-gold hover:bg-gold-dark' : 'bg-gradient-to-r from-gold to-amber-500 hover:brightness-110 group'} 
        text-white`}
      aria-label={language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
      title={language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
    >
      {language === 'ar' ? (
        <ArrowUp size={20} className="transition-transform duration-500 delay-75 group-hover:animate-bounce group-active:animate-fade-out"
        />
      ) : (
        <ChevronUp size={24} className="mx-auto transition-transform duration-300 group-hover:animate-bounce " />

      )}
    </button>
  );
};

export default BackToTopButton;
