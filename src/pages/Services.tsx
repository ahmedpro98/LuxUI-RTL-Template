/**
 * Services Page Component
 * Displays company services, process steps, and reasons to choose the company
 * Supports bilingual content (English/Arabic) with RTL layout
 */
import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import ScrollObserver from '../components/home-index/ScrollObserver';

const Services = () => {
  const { isRTL } = useLanguage();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /**
   * Service icons with gradient background effects and hover animations
   * Each icon has a glow effect and border styling
   */
  const serviceIcons = [
    (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative bg-white rounded-full p-4 shadow-lg border border-primary/20">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
          </svg>
        </div>
      </div>
    ),
    (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative bg-white rounded-full p-4 shadow-lg border border-primary/20">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
          </svg>
        </div>
      </div>
    ),
    (
      <div className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-lg opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative bg-white rounded-full p-4 shadow-lg border border-primary/20">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 3H5C3.89543 3 3 3.89543 3 5V9C3 10.1046 3.89543 11 5 11H9C10.1046 11 11 10.1046 11 9V5C11 3.89543 10.1046 3 9 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
            <path d="M19 3H15C13.8954 3 13 3.89543 13 5V9C13 10.1046 13.8954 11 15 11H19C20.1046 11 21 10.1046 21 9V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
            <path d="M9 13H5C3.89543 13 3 13.8954 3 15V19C3 20.1046 3.89543 21 5 21H9C10.1046 21 11 20.1046 11 19V15C11 13.8954 10.1046 13 9 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
            <path d="M19 13H15C13.8954 13 13 13.8954 13 15V19C13 20.1046 13.8954 21 15 21H19C20.1046 21 21 20.1046 21 19V15C21 13.8954 20.1046 13 19 13Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary" />
          </svg>
        </div>
      </div>
    )
  ];

  /**
   * Services data array with bilingual content
   * Each service includes icon, title, description, and feature list
   */
  const services = [
    {
      icon: serviceIcons[0],
      titleEN: 'Luxury Interior Design',
      titleAR: 'التصميم الداخلي الفاخر',
      descEN: 'Complete interior design solutions for villas and palaces with sophisticated elegance and premium finishes that reflect your unique style.',
      descAR: 'حلول تصميم داخلي شاملة للفلل والقصور بأناقة راقية ولمسات نهائية فاخرة تعكس أسلوبك الفريد.',
      features: isRTL ? ['تصميم مساحات فاخرة', 'مواد عالية الجودة', 'إشراف متخصص'] : ['Luxury space design', 'Premium materials', 'Expert supervision']
    },
    {
      icon: serviceIcons[1],
      titleEN: 'Design Consultation',
      titleAR: 'استشارات التصميم',
      descEN: 'Expert consultation to create personalized design concepts that perfectly reflect your taste, lifestyle, and functional needs.',
      descAR: 'استشارات خبراء لإنشاء مفاهيم تصميم شخصية تعكس ذوقك وأسلوب حياتك واحتياجاتك الوظيفية بشكل مثالي.',
      features: isRTL ? ['تحليل المساحة', 'اقتراحات مخصصة', 'خطة تنفيذ'] : ['Space analysis', 'Custom suggestions', 'Implementation plan']
    },
    {
      icon: serviceIcons[2],
      titleEN: 'Custom Decoration',
      titleAR: 'ديكورات مخصصة',
      descEN: 'Bespoke decoration solutions crafted with precision to transform your space into a luxurious living environment that exceeds expectations.',
      descAR: 'حلول ديكورات مخصصة مصنوعة بدقة لتحويل مساحتك إلى بيئة معيشة فاخرة تفوق التوقعات.',
      features: isRTL ? ['قطع مخصصة', 'تنسيق ألوان', 'لمسات نهائية'] : ['Custom pieces', 'Color coordination', 'Finishing touches']
    }
  ];

  /**
   * Process steps with icons and bilingual descriptions
   * Shows the 4-step workflow from consultation to support
   */
  const processSteps = [
    {
      number: 1,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 10H16M8 14H12M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Initial Consultation',
      titleAR: 'الاستشارة الأولية',
      descEN: 'We understand your vision, analyze your space, and discuss your style preferences and budget requirements.',
      descAR: 'نتفهم رؤيتك، نحلل مساحتك، ونناقش تفضيلاتك ومتطلبات ميزانيتك.'
    },
    {
      number: 2,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 14L13.5 9M10.5 14L9 9M14 17H10M16 5H8C6.89543 5 6 5.89543 6 7V19C6 20.1046 6.89543 21 8 21H16C17.1046 21 18 20.1046 18 19V7C18 5.89543 17.1046 5 16 5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 5C10 3.89543 10.8954 3 12 3C13.1046 3 14 3.89543 14 5V5.5H10V5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Design Development',
      titleAR: 'تطوير التصميم',
      descEN: 'Create detailed design concepts, mood boards, and 3D visualizations tailored to your specific needs.',
      descAR: 'إنشاء مفاهيم تصميم مفصلة ولوحات مزاجية وتصورات ثلاثية الأبعاد مخصصة لاحتياجاتك.'
    },
    {
      number: 3,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 6L11 7.5M11 7.5L9.5 9M11 7.5H6M14.5 13L13 11.5M13 11.5L14.5 10M13 11.5H18M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Professional Implementation',
      titleAR: 'التنفيذ الاحترافي',
      descEN: 'Skilled craftsmen execute the design with meticulous attention to detail and premium quality standards.',
      descAR: 'حرفيون مهرة ينفذون التصميم بعناية فائقة بالتفاصيل ومعايير جودة عالية.'
    },
    {
      number: 4,
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12H18L15 21L9 3L6 12H2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      titleEN: 'Ongoing Support',
      titleAR: 'الدعم المستمر',
      descEN: 'Comprehensive aftercare service including maintenance guidance and design adjustments as needed.',
      descAR: 'خدمة رعاية شاملة تشمل إرشادات الصيانة وتعديلات التصميم حسب الحاجة.'
    }
  ];

  return (
    <div className="pt-24">
      {/* Page Header Section */}
      <ScrollObserver animation="fade-up" threshold={0.2}>
        <section className="bg-neutral text-white py-20">
          <div className="container mx-auto px-6 max-w-6xl">
            <div className={`text-center max-w-7xl mx-auto ${isRTL ? 'rtl' : 'ltr'}`}>
              <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'خدماتنا' : 'Our Services'}
              </h1>
              <p className={`text-xl text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                {isRTL ? 'حلول ديكورات وتصميم داخلي فاخرة للفلل والقصور' : 'Luxury decoration and interior design solutions for villas and palaces'}
              </p>
            </div>
          </div>
        </section>
      </ScrollObserver>

      {/* Main Services Section */}
      <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollObserver animation="fade-up" threshold={0.2} delay={100}>
            <div className={`text-center mb-20 ${isRTL ? 'rtl' : 'ltr'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-6 font-playfair">
                {isRTL ? 'خدماتنا المتميزة' : 'Our Premium Services'}
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto leading-relaxed">
                {isRTL ? 'نقدم حلول ديكورات وتصميم داخلي متكاملة تناسب جميع الاحتياجات بأعلى معايير الجودة والإبداع' : 'We provide comprehensive decoration and interior design solutions for all your needs with the highest standards of quality and creativity'}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mt-8 rounded-full"></div>
            </div>
          </ScrollObserver>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {services.map((service, idx) => (
              <ScrollObserver
                key={idx}
                animation="fade-up"
                threshold={0.1}
                delay={idx * 150} // Staggered animation delay
              >
                <div className={`group bg-white rounded-3xl shadow-lg border border-gray-100 p-10 flex flex-col ${isRTL ? 'text-right' : 'text-center'} transition-all duration-500 hover:shadow-2xl hover:-translate-y-3 h-full relative overflow-hidden`}>
                  {/* Decorative background element */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-transparent rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

                  <div className="relative z-10">
                    <div className="mb-8 transform group-hover:scale-110 transition-transform duration-500 flex justify-center">
                      {service.icon}
                    </div>

                    <h3 className="text-2xl font-bold mb-6 text-neutral group-hover:text-primary transition-colors duration-300 font-cairo">
                      {isRTL ? service.titleAR : service.titleEN}
                    </h3>

                    <p className="text-lg text-neutral-light leading-relaxed mb-8">
                      {isRTL ? service.descAR : service.descEN}
                    </p>

                    {/* Service Features List */}
                    <div className="space-y-3 mb-8">
                      {service.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className={`flex items-center ${isRTL ? 'justify-end' : 'justify-center'} text-sm text-neutral-light`}>
                          <div className={`w-2 h-2 bg-primary rounded-full ${isRTL ? 'ml-3' : 'mr-3'}`}></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent group-hover:via-primary transition-colors duration-300 mx-auto"></div>
                  </div>
                </div>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Section */}
      <section className="py-32 bg-white relative">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <ScrollObserver animation="fade-up" threshold={0.2}>
            <div className={`text-center mb-20 ${isRTL ? 'rtl' : 'ltr'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-6 font-playfair">
                {isRTL ? 'كيف نعمل' : 'Our Process'}
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto leading-relaxed">
                {isRTL ? 'نهج منظم وفعال لتحقيق نتائج استثنائية تفوق التوقعات في كل مرة' : 'A systematic and effective approach to achieve exceptional results that exceed expectations every time'}
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto mt-8 rounded-full"></div>
            </div>
          </ScrollObserver>

          {/* Process Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {processSteps.map((step, index) => (
              <ScrollObserver
                key={index}
                animation="fade-up"
                threshold={0.2}
                delay={index * 150}
              >
                <div className={`flex flex-col items-center ${isRTL ? 'text-right' : 'text-center'} group relative`}>
                  {/* Connection line between steps (desktop only) */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-12 h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
                  )}

                  <div className="relative mb-8 z-10">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                      <div className="text-white">
                        {step.icon}
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-neutral rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-neutral mb-4 group-hover:text-primary transition-colors duration-300 font-cairo">
                    {isRTL ? step.titleAR : step.titleEN}
                  </h3>
                  <p className="text-lg text-neutral-light leading-relaxed">
                    {isRTL ? step.descAR : step.descEN}
                  </p>
                </div>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <ScrollObserver animation="fade-up" threshold={0.2}>
            <div className={`text-center mb-20 ${isRTL ? 'rtl' : 'ltr'}`}>
              <h2 className="text-4xl md:text-5xl font-bold text-neutral mb-6 font-playfair">
                {isRTL ? 'لماذا تختارنا' : 'Why Choose Us'}
              </h2>
              <p className="text-xl text-neutral-light max-w-3xl mx-auto leading-relaxed">
                {isRTL ? 'نتميز بالخبرة والجودة والابتكار في كل مشروع نقوم به' : 'We excel in experience, quality, and innovation in every project we undertake'}
              </p>
            </div>
          </ScrollObserver>

          {/* Achievement Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                titleEN: '10+ Years Experience',
                titleAR: '10+ سنوات خبرة',
                descEN: 'Decade of expertise in luxury interior design',
                descAR: 'عقد من الخبرة في التصميم الداخلي الفاخر',
                icon: '🏆'
              },
              {
                titleEN: '500+ Happy Clients',
                titleAR: '500+ عميل سعيد',
                descEN: 'Satisfied customers across the region',
                descAR: 'عملاء راضون في جميع أنحاء المنطقة',
                icon: '😊'
              },
              {
                titleEN: 'Premium Materials',
                titleAR: 'مواد فاخرة',
                descEN: 'Only the finest quality materials',
                descAR: 'أجود أنواع المواد فقط',
                icon: '✨'
              }
            ].map((item, idx) => (
              <ScrollObserver key={idx} animation="fade-up" delay={idx * 100}>
                <div className={`text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300`}>
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold text-neutral mb-3 font-cairo">
                    {isRTL ? item.titleAR : item.titleEN}
                  </h3>
                  <p className="text-neutral-light">
                    {isRTL ? item.descAR : item.descEN}
                  </p>
                </div>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <ScrollObserver animation="fade-up" threshold={0.3}>
        <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white relative overflow-hidden">
          {/* Background decoration elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white rounded-full blur-xl"></div>
          </div>

          <div className={`container mx-auto px-6 max-w-6xl ${isRTL ? 'text-right' : 'text-center'} relative z-10`}>
            <h2 className="text-heading-2 md:text-3xl font-bold mb-6 font-playfair">
              {isRTL ? 'جاهز لتحويل مساحتك؟' : 'Ready to Transform Your Space?'}
            </h2>
            <p className="text-white/90 max-w-xl mx-auto mb-10 text-body-large leading-relaxed">
              {isRTL ? 'تواصل معنا اليوم للحصول على استشارة مجانية' : 'Contact us today for a free consultation'}
            </p>
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-primary px-8 py-3 rounded-xl hover:bg-gray-50 font-semibold text-body-large transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <span>{isRTL ? 'احصل على استشارة مجانية' : 'Get Free Consultation'}</span>
                <svg className={`w-4 h-4 ${isRTL ? 'mr-3' : 'ml-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isRTL ? "M7 16l-4-4m0 0l4-4m-4 4h18" : "M17 8l4 4m0 0l-4 4m4-4H3"} />
                </svg>
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center bg-transparent border-2 border-white text-white px-8 py-3 rounded-xl hover:bg-white hover:text-primary font-semibold text-body-large transition-all duration-300 transform hover:-translate-y-1"
              >
                <span>{isRTL ? 'شاهد مشاريعنا' : 'View Our Projects'}</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollObserver>
    </div>
  );
};

export default Services;