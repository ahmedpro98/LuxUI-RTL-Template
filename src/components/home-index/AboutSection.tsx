import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';

const AboutSection = () => {
    const { t, isRTL } = useLanguage();
    const aboutRef = useRef<HTMLDivElement>(null);

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

        // Observe about section
        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-16 md:py-20" ref={aboutRef}>
            <div className="container-custom mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">

                    {/* paragraph */}
                    <div className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'} transition-transform duration-700 ease-out`}>
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
                    </div>

                    {/* image with square */}
                    <div className={`${isRTL ? 'order-1' : 'order-2'} relative transition-all duration-700 ease-in-out`}>
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;