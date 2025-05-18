import React, { useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import PartnerSlider from '@/components/PartnerSlider';
import ScrollObserver from './ScrollObserver';

const PartnersSection = () => {
    const { t, isRTL } = useLanguage();
    const partnersRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden" ref={partnersRef}>
            {/* زخارف SVG عضوية */}
            <div className="absolute -top-12 right-0 w-64 h-64 opacity-5 pointer-events-none">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob-animate">
                    <path fill="#D4AF37" d="M42,-54.9C55.3,-44.8,67.7,-33.4,72.4,-19.4C77,-5.3,74,11.4,67.1,25.9C60.2,40.3,49.6,52.5,36.3,60.2C23.1,67.9,7.3,71.1,-8,69.6C-23.2,68.2,-38,62.2,-49.7,52C-61.3,41.9,-69.9,27.6,-72,12.4C-74.1,-2.8,-69.9,-18.9,-61.2,-31.1C-52.4,-43.3,-39.2,-51.7,-25.9,-61.6C-12.6,-71.6,0.8,-83.1,13.2,-78.4C25.5,-73.8,28.8,-52.9,42,-39.9Q40,-54.9,42,-54.9Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="absolute -bottom-20 left-0 w-64 h-64 opacity-5 pointer-events-none transform rotate-45">
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="blob-animate">
                    <path fill="#D4AF37" d="M48.6,-57.6C59.5,-51.9,62.8,-33.2,65.4,-15.6C68,2,69.9,18.5,63.1,30.8C56.4,43.1,41,51.1,25,58.2C8.9,65.3,-7.9,71.4,-25,69.2C-42.1,67,-59.6,56.6,-68.9,41C-78.3,25.4,-79.5,4.6,-73.3,-12.4C-67.1,-29.4,-53.5,-42.6,-39.1,-47.8C-24.6,-52.9,-9.3,-49.9,6.3,-57.5C22,-65.2,37.8,-63.4,48.6,-57.6Z" transform="translate(100 100)" />
                </svg>
            </div>

            <div className="container-custom mx-auto px-4 relative z-10">
                <ScrollObserver animation="fade-up">
                    <div className={`text-center mb-8 md:mb-12 ${isRTL ? 'rtl' : ''}`}>
                        <h2 className={`text-2xl md:text-3xl font-bold text-charcoal mb-3`}>
                            {isRTL ? 'شركاؤنا واعتماداتنا' : 'Our Partners & Certifications'}
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            {isRTL
                                ? 'نفتخر بالعمل مع أفضل الشركات العالمية لتقديم أرقى المنتجات لعملائنا.'
                                : 'We proudly work with the world\'s best companies to deliver the finest products to our customers.'}
                        </p>
                    </div>
                </ScrollObserver>

                <ScrollObserver animation="fade-up" delay={200}>
                    <PartnerSlider />
                </ScrollObserver>
            </div>
        </section>
    );
};

export default PartnersSection;