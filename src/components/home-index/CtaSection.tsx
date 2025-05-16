import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from 'react-router-dom';

const CtaSection = () => {
    const { isRTL } = useLanguage();

    return (
        <section className="py-12 md:py-20 bg-charcoal text-white">
            <div className="container-custom mx-auto text-center px-4">
                <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-4`}>
                    {isRTL ? 'جاهز للعمل معنا' : 'Ready to Transform Your Space?'}
                </h2>
                <div>
                    <Link
                        to="/contact"
                        className="inline-block bg-gold text-white px-6 py-3 md:px-8 md:py-4 rounded-md hover:bg-gold-dark transition-colors duration-300"
                    >
                        {isRTL ? 'تواصل معنا الآن' : 'Contact Us Now'}
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default CtaSection;
