import React, { useEffect } from 'react';
import HeroSection from '../components/home-index/HeroSection';
import FeaturedCollection from '../components/home-index/FeaturedCollection';
import FeaturedTestimonials from '../components/home-index/FeaturedTestimonials';
import PartnersSection from '../components/home-index/PartnersSection';
import AboutSection from '../components/home-index/AboutSection';
import ServicesSection from '../components/home-index/ServicesSection';
import ContactSection from '../components/home-index/ContactSection';
import CtaSection from '../components/home-index/CtaSection';
import ScrollObserver from '../components/home-index/ScrollObserver';



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

      <ScrollObserver animation="fade-up">
        <FeaturedCollection />
      </ScrollObserver>



      {/* قسم الشركاء */}

      <ScrollObserver animation="fade-up">
        <PartnersSection />
      </ScrollObserver>



      {/* قسم حول الشركة */}

      <ScrollObserver animation="fade-up">
        <AboutSection />
      </ScrollObserver>



      {/* قسم الخدمات */}

      <ScrollObserver animation="fade-up">
        <ServicesSection />
      </ScrollObserver>



      {/* قسم الشهادات */}

      <ScrollObserver animation="fade-up">
        <FeaturedTestimonials />
      </ScrollObserver>



      {/* قسم التواصل */}
      {/* Section animation */}
      <ScrollObserver animation="fade-up">
        <ContactSection />
      </ScrollObserver>
      {/* END */}



      {/* قسم الدعوة للاتصال */}
      {/* Section animation */}

      <ScrollObserver animation="fade-up">
        <CtaSection />
      </ScrollObserver>
      {/* END */}


    </div>
  );
};

export default Index;
