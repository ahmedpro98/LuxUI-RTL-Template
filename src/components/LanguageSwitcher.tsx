import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import LanguageTransitionOverlay from './LanguageTransitionOverlay';

interface LanguageSwitcherProps {
  variant?: 'standard' | 'modern' | 'minimal';
  showIcon?: boolean;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({
  variant = 'standard',
  showIcon = true
}) => {
  const {
    language,
    setLanguage,
    isTransitioning,
    isLanguageChanging,
    transitionState
  } = useLanguage();

  const buttonRef = useRef<HTMLButtonElement>(null);

  // Ripple effect (modern variant only)
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (variant !== 'modern' || isLanguageChanging) return;

    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;
    const rect = button.getBoundingClientRect();

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - rect.left - radius}px`;
    circle.style.top = `${event.clientY - rect.top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) ripple.remove();

    button.appendChild(circle);

    setTimeout(() => {
      if (circle.parentNode === button) {
        button.removeChild(circle);
      }
    }, 600);
  };

  const toggleLanguage = (event: React.MouseEvent<HTMLButtonElement>) => {
    createRipple(event);
    if (!isTransitioning && !isLanguageChanging) {
      setLanguage(language === 'en' ? 'ar' : 'en');
    }
  };

  useEffect(() => {
    if (transitionState === 'start' && buttonRef.current) {
      buttonRef.current.classList.add('btn-transitioning');
      const resetTimeout = setTimeout(() => {
        buttonRef.current?.classList.remove('btn-transitioning');
      }, 800);
      return () => clearTimeout(resetTimeout);
    }
  }, [transitionState]);

  const buttonText = language === 'en' ? 'العربية' : 'English';
  const ariaLabel = language === 'en' ? 'Switch to Arabic language' : 'التبديل إلى اللغة الإنجليزية';

  const renderIcon = () => {
    if (!showIcon) return null;

    return (
      <span className="language-icon mr-2">
        {language === 'en' ? (
          <span role="img" aria-label="Arabic">🌍</span>
        ) : (
          <span role="img" aria-label="English">🇺🇸</span>
        )}
      </span>
    );
  };

  const getButtonClasses = () => {
    const baseClasses = 'transition-all duration-300';

    switch (variant) {
      case 'modern':
        return `${baseClasses} relative overflow-hidden bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white py-2 px-4 rounded-lg shadow-md transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50`;
      case 'minimal':
        return `${baseClasses} bg-transparent text-primary hover:underline focus:outline-none`;
      default:
        return `${baseClasses} bg-transparent border-primary text-primary hover:bg-primary hover:text-white shadow-sm text-sm md:text-base py-1.5 px-3 md:px-4 rounded-md`;
    }
  };

  return (
    <>
      <LanguageTransitionOverlay isVisible={isTransitioning} />

      <Button
        ref={buttonRef}
        onClick={toggleLanguage}
        disabled={isLanguageChanging || isTransitioning}
        className={`${getButtonClasses()} ${isLanguageChanging ? 'opacity-70 cursor-not-allowed' : ''}`}
        aria-label={ariaLabel}
        style={{ fontFamily: language === 'en' ? 'Cairo, sans-serif' : 'Roboto, sans-serif' }}
      >
        {showIcon && renderIcon()}
        {isLanguageChanging ? '...' : buttonText}

        {isLanguageChanging && (
          <span className="loading-indicator ml-3">
            <span className="dot"></span>
            <span className="dot"></span>
            <span className="dot"></span>
          </span>
        )}
      </Button>
    </>
  );
};

export default LanguageSwitcher;
