import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard';

const ServicesSection = () => {
    const { t, isRTL } = useLanguage();
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-reveal-smooth');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe services section
        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Service icons
    const serviceIcons = {
        installation: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        consultation: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
        maintenance: (
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 14L13.5 9M10.5 14L9 9M14 17H10M16 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.5H10V5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        ),
    };

    return (
        <section className="py-16 md:py-20 bg-white" ref={servicesRef}>
            <div className="container-custom mx-auto">
                <div className={`text-center mb-10 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
                    <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3 md:mb-4`}>
                        {t('section-services-title')}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {t('section-services-subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Service Cards */}
                    <div>
                        <ServiceCard
                            title={t('service-chandelier-title')}
                            description={t('service-chandelier-desc')}
                            icon={serviceIcons.installation}
                            isRTL={isRTL}
                        />
                    </div>

                    <div>
                        <ServiceCard
                            title={t('service-consultation-title')}
                            description={t('service-consultation-desc')}
                            icon={serviceIcons.consultation}
                            isRTL={isRTL}
                        />
                    </div>

                    <div>
                        <ServiceCard
                            title={t('service-maintenance-title')}
                            description={t('service-maintenance-desc')}
                            icon={serviceIcons.maintenance}
                            isRTL={isRTL}
                        />
                    </div>
                </div>

                <div className="text-center mt-10">
                    <Link
                        to="/services"
                        className="inline-block bg-transparent border-2 border-gold text-gold px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
                    >
                        {isRTL ? 'عرض جميع الخدمات' : 'View All Services'}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
