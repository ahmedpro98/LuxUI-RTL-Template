import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white pt-20 pb-10 px-6 font-cairo motion-safe:animate-fade-in">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo and Description */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-6`}>
          <div className="group">
            <h2 className="text-heading-4 font-bold text-white text-2xl space-y-6 transition-all duration-500 
                         group-hover:text-gold">
              {
                isRTL
                  ? "هبات أيست"
                  : "Hebat East"
              }
            </h2>
            <div className="relative mt-2 h-1 w-8 bg-gold rounded-full transition-all duration-700 group-hover:w-32 
              bg-gradient-to-r from-gold to-gold-light"></div>

          </div>
          <p className="text-base text-white">
            {isRTL
              ? 'نحول مساحتك إلى تحفة فنية مع أرقى الثريات وأنظمة الإضاءة المستوحاة من التصاميم العالمية.'
              : 'Transforming your space into a masterpiece with the finest chandeliers and luxury lighting inspired by global designs.'}
          </p>
        </div>

        {/* Quick Links */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-4`}>
          <h3 className="text-heading-4 font-semibold text-gold">
            {isRTL ? 'روابط سريعة' : 'Quick Links'}
          </h3>
          <ul className="text-base text-white space-y-2">
            {[
              { key: 'home', label: isRTL ? 'الرئيسية' : 'Home' },
              { key: 'about', label: isRTL ? 'من نحن' : 'About Us' },
              { key: 'services', label: isRTL ? 'خدماتنا' : 'Services' },
              { key: 'gallery', label: isRTL ? 'معرض الأعمال' : 'Gallery' },
              { key: 'contact', label: isRTL ? 'اتصل بنا' : 'Contact Us' }
            ].map((item) => (
              <li key={item.key}>
                <Link
                  to={`/${item.key === 'home' ? '' : item.key}`}
                  className="transition-all duration-300 hover:text-gold hover:translate-x-1 inline-block"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-4`}>
          <h3 className="text-heading-4 font-semibold text-gold">
            {isRTL ? 'معلومات التواصل' : 'Contact Info'}
          </h3>
          <div className="text-base text-white space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold" />
              <span>
                {isRTL ? 'شارع الملك فيصل، جدة، السعودية' : 'King Faisal St, Jeddah, Saudi Arabia'}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-gold" />
              <span>+966 50 000 0000</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-gold" />
              <span>info@hebateast.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-4`}>
          <h3 className="text-heading-4 font-semibold text-gold">
            {isRTL ? 'النشرة البريدية' : 'Newsletter'}
          </h3>
          <p className="text-base text-white">
            {isRTL ? 'اشترك للحصول على آخر العروض والتحديثات' : 'Subscribe for latest offers and updates'}
          </p>
          <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
            <input
              type="email"
              placeholder={isRTL ? 'البريد الإلكتروني' : 'Email address'}
              className="bg-white/10 border border-gold text-white px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-gold rounded-l-md transition"
            />
            <button className="bg-gold hover:bg-gold-dark text-white px-4 py-2 rounded-r-md transition-all hover:scale-105">
              {isRTL ? 'اشتراك' : 'Subscribe'}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-gold transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-charcoal-light pt-6 text-center text-base text-white">
        <p>{isRTL ? `© ${currentYear} هبات أيست. جميع الحقوق محفوظة.` : `© ${currentYear} Hebat East. All rights reserved.`}</p>
        <p className="mt-1 cursor-pointer">
          {isRTL ? 'تصميم بواسطة' : 'Designed by'}{' '}
          <span className="text-gold font-semibold hover:tracking-wide transition-all duration-200">
            Ahmad Abdulwahid
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;