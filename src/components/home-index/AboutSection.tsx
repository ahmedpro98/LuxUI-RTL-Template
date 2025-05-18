import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import ScrollObserver from './ScrollObserver';

const AboutSection = () => {
    const { t, isRTL } = useLanguage();

    return (
        <section className="py-16 md:py-20">
            <div className="container-custom mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

                    {/* paragraph */}
                    <ScrollObserver
                        animation={isRTL ? "fade-left" : "fade-right"}
                        className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'}`}
                        threshold={0.15}
                        delay={105}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 md:mb-6">
                            {isRTL ? 'هبات أيست' : 'Hebat East'}
                        </h2>
                        <p className="text-gray-600 mb-4 md:mb-6">{t('about-paragraph-1')}</p>
                        <p className="text-gray-600 mb-4 md:mb-8">{t('about-paragraph-2')}</p>
                        <Link
                            to="/about"
                            className="inline-block bg-gold text-white px-5 py-2 md:px-6 md:py-3 rounded-md hover:bg-gold-dark transition-colors duration-300"
                        >
                            {isRTL ? 'اقرأ المزيد عنا' : 'Read More About Us'}
                        </Link>
                    </ScrollObserver>

                    {/* image with square */}
                    <ScrollObserver
                        animation={isRTL ? "fade-right" : "fade-left"}
                        className={`${isRTL ? 'order-1' : 'order-2'} relative`}
                        threshold={0.15}
                        delay={190}
                    >
                        <div className="relative group">
                            {/* Self Image */}
                            <LazyImage
                                src='/Logo_and_identity/main.jpg'
                                alt="Luxury Chandelier"
                                className="rounded-lg shadow-xl w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Down Square */}
                            <div className="absolute -bottom-4 -right-4 w-14 h-14 md:w-20 md:h-20 gold-gradient rounded-lg z-10 overflow-hidden"></div>

                            {/* Up Square */}
                            <div className="absolute -top-3 -left-4 w-14 h-14 md:w-20 md:h-20 border-4 border-gold rounded-lg z-10 overflow-hidden"></div>
                        </div>
                    </ScrollObserver>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;