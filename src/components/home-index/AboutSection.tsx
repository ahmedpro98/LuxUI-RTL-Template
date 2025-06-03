// * Supports both Arabic (RTL) and English (LTR) layouts
import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import LazyImage from '../LazyImage';
import ScrollObserver from './ScrollObserver';

const AboutSection = () => {
    // Get RTL direction status from language context
    const { isRTL } = useLanguage();

    return (
        <section className="py-20 md:py-24 ">
            <div className="container-custom mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">

                    {/* Company description text */}
                    <ScrollObserver
                        animation={isRTL ? "fade-left" : "fade-right"}
                        className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'}`}
                        threshold={0.15}
                        delay={105}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 md:mb-6">
                            {isRTL ? 'هوم إيست' : 'Home East'}
                        </h2>
                        <p className="text-gray-600 mb-4 md:mb-6">
                            {isRTL
                                ? 'متخصصون في التصميم الداخلي والديكورات الفاخرة للفلل والقصور والمشاريع الكبرى، لنحولها إلى تحف معمارية أنيقة.'
                                : 'We specialize in luxury interior design and decorations for villas, palaces, and grand projects – transforming them into elegant architectural masterpieces.'}
                        </p>
                        <p className="text-gray-600 mb-4 md:mb-8">
                            {isRTL
                                ? 'بخبرة وإبداع، يقدم فريقنا تصاميم مبهرة تجمع بين الفخامة والوظيفة والجمال.'
                                : 'With experience and creativity, our expert team delivers stunning designs that blend luxury, functionality, and beauty.'}
                        </p>
                        <Link
                            to="/about"
                            className="inline-block bg-primary text-white px-8 py-4 md:px-6 md:py-3 rounded-md hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                        >
                            {isRTL ? 'اقرأ المزيد عنا' : 'Read More About Us'}
                        </Link>
                    </ScrollObserver>

                    {/* Image with decorative squares */}
                    <ScrollObserver
                        animation={isRTL ? "fade-right" : "fade-left"}
                        className={`${isRTL ? 'order-1' : 'order-2'} relative`}
                        threshold={0.15}
                        delay={190}
                    >
                        <div className="relative group">
                            {/* Main company image */}
                            <LazyImage
                                src='/Logo_and_identity/109038.3.-Go-for-Gold.webp'
                                alt="Luxury Chandelier"
                                className="rounded-lg shadow-xl w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                            />

                            {/* Bottom right decorative square */}
                            <div className="absolute -bottom-4 -right-4 w-14 h-14 md:w-20 md:h-20 primary-gradient rounded-lg z-10 overflow-hidden"></div>

                            {/* Top left decorative square */}
                            <div className="absolute -top-3 -left-4 w-14 h-14 md:w-20 md:h-20 border-4 border-primary rounded-lg z-10 overflow-hidden"></div>
                        </div>
                    </ScrollObserver>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;