import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useIsMobile } from '../hooks/use-mobile';

/*
 * BackToTopButton Component
 */


const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Get language preferences from context
  const { isRTL, language } = useLanguage();

  // Check if user is on mobile device
  const isMobile = useIsMobile();

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', toggleVisibility);

    // Cleanup when component unmounts
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  //up
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Position based on language direction
  const positionClass = isRTL ? 'left-6' : 'right-6';

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-6 z-50 w-12 h-12 rounded-full shadow-lg 
        transition-all duration-300 transform 
        flex items-center justify-center group
        ${positionClass}
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12 pointer-events-none'} 
        bg-gradient-to-r from-primary to-amber-500  hover:brightness-110
        text-white`}
      aria-label={language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
      title={language === 'ar' ? 'العودة إلى الأعلى' : 'Back to top'}
    >
      {/* Same arrow icon for both languages - keeping it consistent! */}
      <ArrowUp
        size={isMobile ? 18 : 22}
        className="transition-transform duration-500 group-hover:animate-bounce"
      />
    </button>
  );
};

export default BackToTopButton;
