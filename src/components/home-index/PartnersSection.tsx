import React, { useRef } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import PartnerSlider from '../PartnerSlider';
import ScrollObserver from './ScrollObserver';

/**
 * PartnersSection - Displays global partners and suppliers section
 * Features animated content with scroll-triggered animations and RTL support
 */
const PartnersSection = () => {
    const { isRTL } = useLanguage();
    const partnersRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-12 md:py-16 bg-white relative overflow-hidden" ref={partnersRef}>
            <div className="w-full relative z-10">
                {/* Section header with fade-up animation */}
                <ScrollObserver animation="fade-up">
                    <div className={`text-center mb-8 md:mb-12 px-4 ${isRTL ? 'rtl' : ''}`}>
                        <div className="inline-block">
                            <h2 className={`text-3xl md:text-4xl font-bold text-charcoal mb-4 relative`}>
                                {isRTL ? 'شركاؤنا وموردونا العالميون' : 'Our Global Partners & Suppliers'}
                                {/* Decorative underline */}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full"></div>
                            </h2>
                        </div>
                        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
                            {isRTL
                                ? 'نتعاون مع أرقى العلامات التجارية العالمية في مجال الأثاث والديكور والخامات الفاخرة لتقديم تصاميم استثنائية تليق بذوقكم الراقي.'
                                : 'We collaborate with the world\'s finest brands in furniture, decor, and luxury materials to deliver exceptional designs that match your refined taste.'}
                        </p>
                    </div>
                </ScrollObserver>

                {/* Partner slider with trust indicators - delayed animation */}
                <ScrollObserver animation="fade-up" delay={200}>
                    <div className="relative">
                        <PartnerSlider />

                        {/* Trust indicators with colored dots */}
                        <div className="mt-6 text-center">
                            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span>{isRTL ? 'علامات تجارية عالمية' : 'Global Brands'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                                    <span>{isRTL ? 'خامات فاخرة معتمدة' : 'Certified Luxury Materials'}</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                                    <span>{isRTL ? 'تصاميم حصرية' : 'Exclusive Designs'}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </ScrollObserver>
            </div>
        </section>
    );
};

export default PartnersSection;