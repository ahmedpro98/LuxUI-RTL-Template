import React, { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/use-mobile';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRTL?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, isRTL = false }) => {
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 h-full transform hover:-translate-y-1 hover:scale-[1.01] ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      style={{ transitionDelay: '100ms' }}
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className={`flex flex-col items-center text-center ${isRTL ? 'rtl' : ''}`}>
        <div className="mb-4 text-gold bg-gold/10 p-3 rounded-full transform transition-transform duration-300 hover:scale-110">
          {icon}
        </div>
        <h3
          className="text-lg md:text-xl font-semibold text-charcoal mb-2"
          itemProp="name"
        >
          {title}
        </h3>
        <p
          className="text-gray-600 text-sm md:text-base"
          itemProp="description"
        >
          {description}
        </p>
        <meta itemProp="provider" content="هبات ايست | Hebat East" />
        <meta itemProp="areaServed" content="المملكة العربية السعودية | Saudi Arabia" />
      </div>
    </div>
  );
};

export default ServiceCard;