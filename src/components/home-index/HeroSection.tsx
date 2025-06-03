
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { useIsMobile } from '../../hooks/use-mobile';

const HeroSection: React.FC = () => {
  const { isRTL } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const isMobile = useIsMobile();

  // Trigger entrance animations after component mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 bg-cover overlay bg-center bg-no-repeat" style={{ backgroundImage: 'url(/Logo_and_identity/NPP-luxury-home-interiors.png)' }}>
        <div className="absolute inset-0 bg-black opacity-35"></div>
      </div>

      {/* Main Content Container */}
      <div className="container-custom mx-auto relative z-10 pt-16 md:pt-24 px-4 md:px-6">
        <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'} mx-auto md:mx-0`}>
          {/* Main Heading with Animation */}
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white/95 mb-4 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isMobile ? 'text-center' : ''}`}
          >
            {isRTL
              ? 'التصميم الداخلي الفاخر للفلل والقصور'
              : 'Luxury Interior Design for Villas & Palaces'}
          </h1>

          {/* Subtitle with Delayed Animation */}
          <p
            className={`text-lg md:text-xl text-gray-200 mb-6 md:mb-8 transition-all duration-1000 ease-out delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              } ${isMobile ? 'text-center' : ''}`}
          >
            {isRTL
              ? 'نحوّل مساحاتك إلى تحف فنية بديكورات فاخرة وتصاميم استثنائية'
              : 'Transform your spaces into artistic masterpieces with luxury decor and exceptional designs'}
          </p>

          {/* Call-to-Action Buttons */}
          <div
            className={`flex flex-wrap gap-3 md:gap-4 ${isMobile ? 'justify-center' : isRTL ? 'justify-end' : 'justify-start'} transition-all duration-1000 ease-out delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* Primary CTA - Portfolio */}
            <Link
              to="/gallery"
              className="bg-primary text-white px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-primary-dark transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
            >
              {isRTL ? 'شاهد أعمالنا الفاخرة' : 'View Our Portfolio'}
            </Link>

            {/* Secondary CTA - Contact */}
            <Link
              to="/contact"
              className="bg-transparent border-2 border-white text-white px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-white hover:text-neutral transition-all duration-300 inline-block transform hover:scale-105 hover:shadow-lg text-sm md:text-base"
            >
              {isRTL ? 'احصل على استشارة تصميم مجانية' : 'Free Design Consultation'}
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative Bottom Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-1 md:h-2 primary-gradient"></div>
    </section>
  );
};

export default HeroSection;