import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PartnerSlider from '../PartnerSlider';

const PartnersSection = () => {
    const { isRTL } = useLanguage();
    const partnersRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Intersection Observer for scroll animations - with smoother transitions
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Add a slower, smoother animation class
                    entry.target.classList.add('animate-reveal-smooth');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe partners section
        if (partnersRef.current) {
            observer.observe(partnersRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-12 md:py-16 bg-white" ref={partnersRef}>
            <div className="container-custom mx-auto px-4">
                <div className={`text-center mb-8 md:mb-12 ${isRTL ? 'rtl' : ''}`}>
                    <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3 transition-opacity duration-700`}>
                        {isRTL ? 'شركاؤنا واعتماداتنا' : 'Our Partners & Certifications'}
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        {isRTL
                            ? 'نفتخر بالعمل مع أفضل الشركات العالمية لتقديم أرقى المنتجات لعملائنا.'
                            : 'We proudly work with the world\'s best companies to deliver the finest products to our customers.'}
                    </p>
                </div>

                <PartnerSlider />
            </div>
        </section>
    );
};

export default PartnersSection;
