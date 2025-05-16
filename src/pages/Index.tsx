import React, { useEffect } from 'react';
import HeroSection from '../components/home-index/HeroSection';
import FeaturedCollection from '../components/home-index/FeaturedCollection';
import FeaturedTestimonials from '../components/home-index/FeaturedTestimonials';
import PartnersSection from '../components/home-index/PartnersSection';
import AboutSection from '../components/home-index/AboutSection';
import ServicesSection from '../components/home-index/ServicesSection';
import ContactSection from '../components/home-index/ContactSection';
import CtaSection from '../components/home-index/CtaSection';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>

      {/* قسم الغلاف الرئيسي */}
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Collection Section */}
      {/* قسم المعرض */}
      <FeaturedCollection />

      {/* قسم الشركاء */}
      <PartnersSection />

      {/* قسم حول الشركة */}
      <AboutSection />

      {/* قسم الخدمات */}
      <ServicesSection />

      {/* قسم الشهادات */}
      <FeaturedTestimonials />

      {/* قسم التواصل */}
      <ContactSection />

      {/* قسم الدعوة للاتصال */}
      <CtaSection />
    </div>
  );
};

export default Index;
