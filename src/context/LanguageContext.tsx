import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isRTL: boolean;
  t: (key: string) => string;
}

interface LanguageProviderProps {
  children: ReactNode;
}

// Minimal translations dictionary for essential UI elements
// Most text will be handled directly in components using isRTL
const translations: Record<string, Record<Language, string>> = {
  // Keep only essential UI elements that need to be reused across components
  'whatsapp-text': {
    en: 'Contact us via WhatsApp',
    ar: 'تواصل معنا عبر واتساب'
  },
  'footer-rights': {
    en: 'All Rights Reserved',
    ar: 'جميع الحقوق محفوظة'
  },
  'copyright': {
    en: '© 2025 Luxury Chandeliers',
    ar: '© 2025 الثريات الفاخرة'
  },
  'section-testimonials-title': {
    en: 'What Our Clients Say',
    ar: 'ماذا يقول عملاؤنا'
  },
  'section-testimonials-subtitle': {
    en: 'Real feedback from satisfied customers',
    ar: 'آراء حقيقية من عملاء راضين'
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<Language>('ar'); // Default is Arabic

  // Save selected language to localStorage
  useEffect(() => {
    // Update localStorage when language changes
    localStorage.setItem('language', language);

    // Set page direction based on language
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);

    // Add transition for better user experience
    document.body.style.transition = 'opacity 0.3s ease';
    document.body.style.opacity = '0.8';

    setTimeout(() => {
      document.body.style.opacity = '1';
    }, 300);
  }, [language]);

  const isRTL = language === 'ar';

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL, t }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'ar' : 'en'}>
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