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
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
  transitionDuration?: number;
}

// Translation dictionary
const translations: Record<string, Record<Language, string>> = {
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
  children,
  transitionDuration = 800
}: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Try to read from localStorage or default to 'ar'
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'ar';
  });

  const [previousLanguage, setPreviousLanguage] = useState<Language | null>(null);
  const [transitionState, setTransitionState] = useState<TransitionState>('idle');

  // Derived state for cleaner component usage
  const isLanguageChanging = transitionState !== 'idle';
  const isRTL = language === 'ar';

  // Orchestrated language change function with proper sequencing
  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage !== language && transitionState === 'idle') {
      // Store previous language for transition effects
      setPreviousLanguage(language);

      // Start transition sequence
      setTransitionState('start');

      // Signal transition beginning to components
      document.documentElement.classList.add('language-transition');

      // Add data attributes to help with CSS selectors
      document.documentElement.setAttribute('data-prev-lang', language);
      document.documentElement.setAttribute('data-new-lang', newLanguage);

      // Small delay before actually changing language to allow CSS transitions to begin
      setTimeout(() => {
        setTransitionState('changing');
        setLanguageState(newLanguage);
      }, 50);
    }
  }, [language, transitionState]);

  // Apply language changes to the document
  useEffect(() => {
    if (transitionState === 'changing') {
      // Change language settings
      document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', language);
      document.documentElement.classList.add(language);
      document.documentElement.classList.remove(language === 'ar' ? 'en' : 'ar');

      // Store language preference
      localStorage.setItem('language', language);

      // Signal transition is completing
      setTransitionState('complete');
    }
  }, [language, isRTL, transitionState]);

  // Handle transition completion
  useEffect(() => {
    if (transitionState === 'complete') {
      // Allow time for DOM to update and transitions to complete
      const completeTimeout = setTimeout(() => {
        // Remove transition classes
        document.documentElement.classList.remove('language-transition');

        // Reset state to idle
        setTransitionState('idle');
      }, transitionDuration);

      return () => clearTimeout(completeTimeout);
    }
  }, [transitionState, transitionDuration]);

  // Translation function
  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{
      language,
      setLanguage,
      previousLanguage,
      isRTL,
      isLanguageChanging,
      transitionState,
      t
    }}>
      <div
        className={`app-container ${isRTL ? 'rtl' : 'ltr'} ${language} ${isLanguageChanging ? 'transitioning' : ''
          }`}
        data-transition-state={transitionState}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};