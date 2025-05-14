// ... import statements
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';

const Services = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Service icons
  const serviceIcons = [
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 14L13.5 9M10.5 14L9 9M14 17H10M16 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.5H10V5Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 12.0001M14 11.9976C14 14.4893 11.683 16.9953 8.85714 16.9953C8.52241 16.9953 7.41904 16.9953 7.14286 16.9953C4.30254 16.9953 2 14.7577 2 12.0001M14 11.9976L22 12.0001M2 12.0001H22" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 18V15M10.293 7.293L12 5.586L13.707 7.293C14.077 7.663 14.523 7.9389 15.0148 8.0982C15.5067 8.2575 16.0322 8.2961 16.5432 8.211C17.0542 8.1259 17.5336 7.9197 17.9397 7.6106C18.3459 7.3015 18.6671 6.8986 18.8747 6.4402M3 3L21 21M13.1962 13.1962C12.8045 13.6398 12.2384 13.9109 11.6325 13.9588C11.0267 14.0068 10.4244 13.8284 9.95548 13.4587C9.48653 13.0889 9.18361 12.5526 9.11394 11.9647C9.04427 11.3768 9.2142 10.7796 9.58062 10.3069M10.5 5.5L4 12L10.5 18.5" stroke="#D4AF37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  ];

  const services = [
    {
      icon: serviceIcons[0],
      titleEN: 'Luxury Chandelier Installation',
      titleAR: 'تركيب الثريات الفاخرة',
      descEN: 'Professional installation by certified experts ensuring perfection and safety for chandeliers of all sizes.',
      descAR: 'تركيب احترافي بواسطة خبراء معتمدين يضمنون الكمال والسلامة للثريات من جميع الأحجام.'
    },
    {
      icon: serviceIcons[1],
      titleEN: 'Lighting Consultation',
      titleAR: 'استشارات الإضاءة',
      descEN: 'Personalized advice to select the perfect lighting solutions that enhance your space and reflect your style.',
      descAR: 'نصائح مخصصة لاختيار حلول الإضاءة المثالية التي تعزز مساحتك وتعكس أسلوبك.'
    },
    {
      icon: serviceIcons[2],
      titleEN: 'Maintenance & Cleaning',
      titleAR: 'الصيانة والتنظيف',
      descEN: 'Expert care to keep your chandeliers pristine and functioning perfectly, extending their life and beauty.',
      descAR: 'عناية متخصصة للحفاظ على ثرياتك نظيفة وتعمل بشكل مثالي، مما يطيل عمرها وجمالها.'
    },
    {
      icon: serviceIcons[3],
      titleEN: 'Custom Design',
      titleAR: 'تصميم مخصص',
      descEN: 'Create unique lighting pieces tailored to your vision and space requirements with our design experts.',
      descAR: 'إنشاء قطع إضاءة فريدة مصممة وفقًا لرؤيتك ومتطلبات المساحة مع خبراء التصميم لدينا.'
    },
    {
      icon: serviceIcons[4],
      titleEN: 'Energy-Efficient Solutions',
      titleAR: 'حلول موفرة للطاقة',
      descEN: 'Upgrade to modern, sustainable lighting systems while maintaining elegant aesthetics.',
      descAR: 'الترقية إلى أنظمة إضاءة حديثة ومستدامة مع الحفاظ على الجماليات الأنيقة.'
    },
    {
      icon: serviceIcons[5],
      titleEN: 'Emergency Services',
      titleAR: 'خدمات الطوارئ',
      descEN: 'Rapid response for urgent repairs and troubleshooting to restore your lighting quickly.',
      descAR: 'استجابة سريعة للإصلاحات العاجلة واستكشاف الأخطاء وإصلاحها لاستعادة الإضاءة بسرعة.'
    }
  ];

  // Process steps with improved visuals
  const processSteps = [
    {
      number: 1,
      titleEN: 'Consultation',
      titleAR: 'الاستشارة',
      descEN: 'We understand your needs, style preferences, and budget requirements.',
      descAR: 'نتفهم احتياجاتك وتفضيلاتك وميزانيتك.'
    },
    {
      number: 2,
      titleEN: 'Design Selection',
      titleAR: 'اختيار التصميم',
      descEN: 'Choose from curated options or create a custom design for your space.',
      descAR: 'اختر من الخيارات المنتقاة أو أنشئ تصميمًا مخصصًا لمساحتك.'
    },
    {
      number: 3,
      titleEN: 'Implementation',
      titleAR: 'التنفيذ',
      descEN: 'Professional installation with meticulous attention to every detail.',
      descAR: 'تركيب احترافي مع الاهتمام الدقيق بكل التفاصيل.'
    },
    {
      number: 4,
      titleEN: 'Support',
      titleAR: 'الدعم',
      descEN: 'Ongoing maintenance and assistance whenever you need it.',
      descAR: 'صيانة مستمرة ومساعدة عند الحاجة.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Header */}
      <section className="bg-gradient-to-r from-charcoal to-charcoal-dark text-white py-16">
        <div className="container-custom mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('services')}</h1>
            <p className="text-xl text-gray-300">{isRTL ? 'حلول إضاءة فاخرة مصممة لمساحتك' : 'Luxury lighting solutions designed for your space'}</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-cream">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all hover:shadow-xl">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-charcoal">{isRTL ? service.titleAR : service.titleEN}</h3>
                <p className="text-gray-600">{isRTL ? service.descAR : service.descEN}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-white">
        <div className="container-custom mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-charcoal mb-4">{isRTL ? 'كيف نعمل' : 'Our Process'}</h2>
            <p className="text-gray-600 max-w-xl mx-auto">{isRTL ? 'نهج بسيط وفعال لتحقيق نتائج استثنائية' : 'A simple yet effective approach to achieve exceptional results'}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-[#dac379] to-[#CBAF6A] rounded-full flex items-center justify-center text-white text-xl font-bold shadow-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">{isRTL ? step.titleAR : step.titleEN}</h3>
                <p className="text-gray-600">{isRTL ? step.descAR : step.descEN}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CTA Contact */}
      <section className="py-16 bg-gradient-to-r from-gold-dark to-gold text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{isRTL ? 'جاهز لإضاءة مساحتك؟' : 'Ready to Illuminate Your Space?'}</h2>
          <p className="text-white/90 max-w-xl mx-auto mb-8">{isRTL ? 'تواصل معنا اليوم للحصول على استشارة مجانية' : 'Contact us today for a free consultation'}</p>
          <Link to="/contact" className="inline-block bg-white text-gold px-8 py-4 rounded-md hover:bg-gray-100 font-bold shadow-lg transition-colors">
            {isRTL ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}
          </Link>
          {/* <div className="text-center mt-10">
            <Link
              to="/Gallery"
              className="inline-block bg-[#c2a450f0] text-white px-8 py-3 rounded-md hover:bg-gold transition-all duration-300 shadow-md font-semibold"
            >
              {isRTL ? 'تصفح مشاريعنا الأن' : 'Browse Our Projects NOW'}
            </Link>
          </div> */}

        </div>

      </section>
    </div>
  );
};

export default Services;
