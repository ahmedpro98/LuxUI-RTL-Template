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
}

interface LanguageProviderProps {
  children: ReactNode;
  transitionDuration?: number;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({
  children,
  transitionDuration = 800
}: LanguageProviderProps) => {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('language');
      return (savedLanguage === 'en' || savedLanguage === 'ar') ? savedLanguage : 'ar';
    }
    return 'ar';
  });

  const [previousLanguage, setPreviousLanguage] = useState<Language | null>(null);
  const [transitionState, setTransitionState] = useState<TransitionState>('idle');

  const isLanguageChanging = transitionState !== 'idle';
  const isRTL = language === 'ar';

  // Initialize document settings on mount
  useEffect(() => {
    // إضافة CSS classes للتحكم في الخطوط والاتجاه
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);

    // إضافة language classes للتحكم في الخطوط
    document.documentElement.classList.add(language);
    document.documentElement.classList.remove(language === 'ar' ? 'en' : 'ar');

    // إضافة RTL/LTR classes
    document.documentElement.classList.toggle('rtl', isRTL);
    document.documentElement.classList.toggle('ltr', !isRTL);

    // إضافة font classes بناءً على اللغة
    document.documentElement.classList.toggle('font-arabic', isRTL);
    document.documentElement.classList.toggle('font-english', !isRTL);

    if (typeof window !== 'undefined') {
      localStorage.setItem('language', language);
    }
  }, []);

  const setLanguage = useCallback((newLanguage: Language) => {
    if (newLanguage !== language && transitionState === 'idle') {
      setPreviousLanguage(language);
      setTransitionState('start');

      document.documentElement.classList.add('language-transition');
      document.documentElement.setAttribute('data-prev-lang', language);
      document.documentElement.setAttribute('data-new-lang', newLanguage);

      setTimeout(() => {
        setTransitionState('changing');
        setLanguageState(newLanguage);
      }, 50);
    }
  }, [language, transitionState]);

  useEffect(() => {
    if (transitionState === 'changing') {
      const newIsRTL = language === 'ar';

      // تحديث جميع الخصائص
      document.documentElement.setAttribute('dir', newIsRTL ? 'rtl' : 'ltr');
      document.documentElement.setAttribute('lang', language);

      // تحديث language classes
      document.documentElement.classList.add(language);
      document.documentElement.classList.remove(language === 'ar' ? 'en' : 'ar');

      // تحديث RTL/LTR classes
      document.documentElement.classList.toggle('rtl', newIsRTL);
      document.documentElement.classList.toggle('ltr', !newIsRTL);

      // تحديث font classes
      document.documentElement.classList.toggle('font-arabic', newIsRTL);
      document.documentElement.classList.toggle('font-english', !newIsRTL);

      if (typeof window !== 'undefined') {
        localStorage.setItem('language', language);
      }

      setTransitionState('complete');
    }
  }, [language, transitionState]);

  useEffect(() => {
    if (transitionState === 'complete') {
      const completeTimeout = setTimeout(() => {
        document.documentElement.classList.remove('language-transition');
        document.documentElement.removeAttribute('data-prev-lang');
        document.documentElement.removeAttribute('data-new-lang');

        setTransitionState('idle');
        setPreviousLanguage(null);
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
    }}>
      {children}
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
