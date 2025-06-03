import React, { createContext, useState, useContext, ReactNode, useEffect, useCallback } from 'react';

type Language = 'en' | 'ar';
type TransitionState = 'idle' | 'start' | 'changing' | 'complete';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  previousLanguage: Language | null;
  isRTL: boolean;
  isLanguageChanging: boolean;
  transitionState: TransitionState;
  isTransitioning: boolean;
}

interface LanguageProviderProps {
  children: ReactNode;
  transitionDuration?: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

/**
 * Language provider that manages language state and smooth transitions
 * Handles RTL/LTR switching, localStorage persistence, and document-level changes
 */
export const LanguageProvider = ({
  children,
  transitionDuration = 777
}: LanguageProviderProps) => {
  // Initialize language from localStorage or fallback to Arabic
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      try {
        const savedLanguage = localStorage.getItem('language');
        return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'en'; // Default language can be changed here
      } catch (error) {
        console.warn('Cannot access localStorage:', error);
        return 'ar';
      }
    }
    return 'ar';
  });

  // Transition state management
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [previousLanguage, setPreviousLanguage] = useState<Language | null>(null);
  const [transitionState, setTransitionState] = useState<TransitionState>('idle');

  const isLanguageChanging = transitionState !== 'idle';
  const isRTL = language === 'ar';

  /**
   * Initiates language change with smooth transition
   * Prevents multiple simultaneous transitions
   */
  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage !== language && transitionState === 'idle') {
      setPreviousLanguage(language);
      setTransitionState('start');
      setIsTransitioning(true);

      // Add CSS classes for transition styling
      if (typeof document !== 'undefined') {
        document.documentElement.classList.add('language-transition');
        document.documentElement.setAttribute('data-prev-lang', language);
        document.documentElement.setAttribute('data-new-lang', newLanguage);
      }

      // Start actual language change after brief delay
      setTimeout(() => {
        setTransitionState('changing');
        setLanguageState(newLanguage);
      }, 50);
    }
  }, [language, transitionState]);

  // Handle document-level changes when language is switching
  useEffect(() => {
    if (transitionState === 'changing') {
      if (typeof document === 'undefined') return;

      const newIsRTL = language === 'ar';

      // Update document attributes for new language
      document.documentElement.setAttribute('dir', newIsRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', language);

      // Update CSS classes for language-specific styling
      document.documentElement.classList.add(language);
      document.documentElement.classList.remove(language === 'ar' ? 'en' : 'ar');

      // Update direction classes
      document.documentElement.classList.toggle('rtl', newIsRTL);
      document.documentElement.classList.toggle('ltr', !newIsRTL);

      // Update font classes for language-specific fonts
      document.documentElement.classList.toggle('font-arabic', newIsRTL);
      document.documentElement.classList.toggle('font-english', !newIsRTL);

      // Save to localStorage for persistence
      if (typeof window !== 'undefined') {
        try {
          localStorage.setItem('language', language);
        } catch (error) {
          console.warn('Cannot save to localStorage:', error);
        }
      }

      setTransitionState('complete');
    }
  }, [language, transitionState]);

  // Clean up transition state and CSS classes after completion
  useEffect(() => {
    if (transitionState === 'complete') {
      const completeTimeout = setTimeout(() => {
        if (typeof document !== 'undefined') {
          document.documentElement.classList.remove('language-transition');
          document.documentElement.removeAttribute('data-prev-lang');
          document.documentElement.removeAttribute('data-new-lang');
        }

        // Reset transition state
        setTransitionState('idle');
        setPreviousLanguage(null);
        setIsTransitioning(false);
      }, transitionDuration);

      return () => clearTimeout(completeTimeout);
    }
  }, [transitionState, transitionDuration]);

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      previousLanguage,
      isRTL,
      isLanguageChanging,
      transitionState,
      isTransitioning,
    }}>
      {children}
    </LanguageContext.Provider>
  );
};

/**
 * Hook to access language context
 * Throws error if used outside LanguageProvider
 */
export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};