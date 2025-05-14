import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const { t, isRTL } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-dark text-white pt-20 pb-10 px-6 font-cairo motion-safe:animate-fade-in">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo and Description */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-6`}>
          <div className="group">
            <h2 className="text-heading-4 font-bold text-[#d4af37] transition-all duration-300 group-hover:text-[#c6ad58]">
              {
                isRTL
                  ? "هبات أيست"
                  : "Hebat East"
              }
            </h2>
            <div className="relative mt-2 h-1 w-8 bg-[#d4af37] rounded-full transition-all duration-700 group-hover:w-32"></div>
          </div>
          <p className="text-base text-white ">
            {isRTL
              ? 'نحول مساحتك إلى تحفة فنية مع أرقى الثريات وأنظمة الإضاءة المستوحاة من التصاميم العالمية.'
              : 'Transforming your space into a masterpiece with the finest chandeliers and luxury lighting inspired by global designs.'}
          </p>
        </div>

        {/* Quick Links */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-4`}>
          <h3 className="text-heading-4 font-semibold text-[#d4af37]">
            {isRTL ? 'روابط سريعة' : 'Quick Links'}
          </h3>
          <ul className="text-base text-white space-y-2">
            {['home', 'about', 'services', 'gallery', 'contact'].map((key) => (
              <li key={key}>
                <Link
                  to={`/${key === 'home' ? '' : key}`}
                  className="transition-all duration-300 hover:text-[#d4af37] hover:translate-x-1 inline-block"
                >
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-4`}>
          <h3 className="text-heading-4 font-semibold text-[#d4af37]">
            {isRTL ? 'معلومات التواصل' : 'Contact Info'}
          </h3>
          <div className="text-base text-white space-y-3">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-[#d4af37]" />
              <span>
                {isRTL ? 'شارع الملك فيصل، جدة، السعودية' : 'King Faisal St, Jeddah, Saudi Arabia'}
              </span>
            </div>
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-[#d4af37]" />
              <span>+966 50 000 0000</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-[#d4af37]" />
              <span>info@hebateast.com</span>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className={`${isRTL ? 'text-right' : 'text-left'} space-y-4`}>
          <h3 className="text-heading-4 font-semibold text-[#d4af37]">
            {isRTL ? 'النشرة البريدية' : 'Newsletter'}
          </h3>
          <p className="text-base text-white">
            {isRTL ? 'اشترك للحصول على آخر العروض والتحديثات' : 'Subscribe for latest offers and updates'}
          </p>
          <div className={`flex ${isRTL ? 'flex-row-reverse' : ''}`}>
            <input
              type="email"
              placeholder={isRTL ? 'البريد الإلكتروني' : 'Email address'}
              className="bg-white/10 border border-[#d4af37] text-white px-4 py-2 flex-1 focus:outline-none focus:ring-2 focus:ring-[#d4af37] rounded-l-md transition"
            />
            <button className="bg-[#d4af37] hover:bg-[#c79e2f] text-white px-4 py-2 rounded-r-md transition-all hover:scale-105">
              {isRTL ? 'اشتراك' : 'Subscribe'}
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 pt-4">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, index) => (
              <a
                key={index}
                href="#"
                className="text-white hover:text-[#d4af37] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-12 border-t border-charcoal-light pt-6 text-center text-base text-white">
        <p>© {currentYear} Hebat East. All rights reserved.</p>
        <p className="mt-1 cursor-pointer">
          {isRTL ? 'بواسطة' : 'Designed by'}{' '}
          <span className="text-[#d4af37] font-semibold hover:tracking-wide transition-all duration-200">
            Ahmad Abdulwahid
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
