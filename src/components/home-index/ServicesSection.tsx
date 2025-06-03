import React, { useRef, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';
import ServiceCard from '../ServiceCard';

/**
 * ServicesSection - Displays specialized services with animated service cards
 * Features custom intersection observer for staggered card animations
 */
const ServicesSection = () => {
    const { isRTL } = useLanguage();
    const servicesRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Enhanced Intersection Observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Staggered animation for service cards with 150ms delays
                    const cards = entry.target.querySelectorAll('.service-card');
                    cards.forEach((card, cardIndex) => {
                        setTimeout(() => {
                            card.classList.add('animate-slide-up');
                        }, cardIndex * 150);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => observer.disconnect();
    }, []);

    /**
     * Service icons with hover animations and decorative elements
     * Each icon has scaling effects and animated accent dots
     */
    const serviceIcons = {
        installation: (
            <div className="relative">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-110 stroke-primary">
                    <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {/* Animated accent dot */}
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-primary-light to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        ),
        consultation: (
            <div className="relative">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-110 stroke-primary">
                    <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-primary-light to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        ),
        maintenance: (
            <div className="relative">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:scale-110 stroke-primary">
                    <path d="M15 14L13.5 9M10.5 14L9 9M14 17H10M16 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5Z"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.5H10V5Z"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-gradient-to-br from-primary-light to-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
        ),
    };

    return (
        <>
            <section className="py-20 md:py-24 bg-surface relative " ref={servicesRef}>
                {/* Background decorative elements for visual interest */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className="absolute top-10 left-10 w-16 h-16 border border-primary/10 rounded-full"></div>
                    <div className="absolute bottom-20 right-20 w-12 h-12 border border-primary/10 rounded-full"></div>
                    <div className="absolute top-1/2 left-1/4 w-1 h-12 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
                    <div className="absolute top-1/3 right-1/3 w-1 h-8 bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
                </div>

                <div className="container-custom mx-auto relative z-10">
                    {/* Section header with gradient underline */}
                    <div className={`text-center mb-12 md:mb-16 ${isRTL ? 'rtl' : ''}`}>
                        <div className="relative inline-block">
                            <h2 className={`text-3xl md:text-4xl font-bold text-neutral mb-4 md:mb-6 relative`}>
                                {isRTL ? 'خدماتنا المتخصصة' : 'Our Specialized Services'}
                                {/* Gradient underline decoration */}
                                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                            </h2>
                        </div>
                        <p className="text-lg text-neutral-light max-w-2xl mx-auto text-center">
                            {isRTL ? 'نقدم حلول التصميم الداخلي الشاملة من التخطيط إلى التنفيذ' : 'We provide comprehensive interior design solutions from planning to execution'}
                        </p>
                    </div>

                    {/* Service cards grid with hover effects */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Luxury Interior Design Service */}
                        <div className="service-card group">
                            <div className="enhanced-service-card p-5 md:p-6 rounded-xl h-full relative">
                                {/* Floating decorative dots */}
                                <div className="floating-dots"></div>
                                <div className="floating-dots"></div>

                                <div className="text-center">
                                    <div className="flex justify-center mb-5">
                                        <div className="p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300">
                                            {serviceIcons.installation}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                                            {isRTL ? 'التصميم الداخلي الفاخر' : 'Luxury Interior Design'}
                                        </h3>

                                        <p className="text-sm text-neutral-light leading-relaxed text-center max-w-sm mx-auto">
                                            {isRTL ? 'نصمم مساحات داخلية فاخرة تجمع بين الأناقة والوظيفية لتناسب ذوقكم الراقي وأسلوب حياتكم' : 'We design luxury interior spaces that combine elegance and functionality to match your refined taste and lifestyle'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Design Consultation Service */}
                        <div className="service-card group">
                            <div className="enhanced-service-card p-5 md:p-6 rounded-xl h-full relative">
                                <div className="floating-dots"></div>
                                <div className="floating-dots"></div>

                                <div className="text-center">
                                    <div className="flex justify-center mb-5">
                                        <div className="p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300">
                                            {serviceIcons.consultation}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                                            {isRTL ? 'الاستشارات التصميمية' : 'Design Consultation'}
                                        </h3>

                                        <p className="text-sm text-neutral-light leading-relaxed text-center max-w-sm mx-auto">
                                            {isRTL ? 'استشارات متخصصة من خبراء التصميم لاختيار أفضل الحلول التصميمية والديكورية لمشروعكم' : 'Specialized consultations from design experts to choose the best design and decorative solutions for your project'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Execution & Supervision Service */}
                        <div className="service-card group">
                            <div className="enhanced-service-card p-5 md:p-6 rounded-xl h-full relative">
                                <div className="floating-dots"></div>
                                <div className="floating-dots"></div>

                                <div className="text-center">
                                    <div className="flex justify-center mb-5">
                                        <div className="p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-xl group-hover:from-primary/10 group-hover:to-primary/20 transition-all duration-300">
                                            {serviceIcons.maintenance}
                                        </div>
                                    </div>

                                    <div className="space-y-3">
                                        <h3 className="text-lg md:text-xl font-semibold text-neutral group-hover:text-primary transition-colors duration-300">
                                            {isRTL ? 'التنفيذ والإشراف' : 'Execution & Supervision'}
                                        </h3>

                                        <p className="text-sm text-neutral-light leading-relaxed text-center max-w-sm mx-auto">
                                            {isRTL ? 'تنفيذ المشاريع بأعلى معايير الجودة مع إشراف مباشر لضمان تحقيق رؤيتكم التصميمية' : 'Project execution with the highest quality standards and direct supervision to ensure your design vision is realized'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Call-to-action button with animated effects */}
                    <div className="text-center mt-12">
                        <Link
                            to="/services"
                            className="inline-block bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary hover:text-white transition-colors duration-300 text-base font-semibold relative overflow-hidden group"
                        >
                            <span className="relative z-10">{isRTL ? 'عرض جميع الخدمات' : 'View All Services'}</span>
                            {/* Animated shimmer effect on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/10 to-primary/0 transform -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServicesSection;