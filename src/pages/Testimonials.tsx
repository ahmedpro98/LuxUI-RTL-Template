import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LazyImage from '../components/LazyImage';
import ScrollObserver from '../components/home-index/ScrollObserver';
import {
  Card,
  CardContent
} from "../components/ui/card";
import { AspectRatio } from '../components/ui/aspect-ratio';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Quote
} from 'lucide-react';

const Testimonials = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const testimonials = [
    {
      name: isRTL ? 'محمد الغامدي' : 'Mohammed Al-Ghamdi',
      role: isRTL ? 'مالك القصر الملكي' : 'Royal Palace Owner',
      content: isRTL
        ? 'الثريات التي وفرتها الشركة أضافت لمسة من الفخامة والأناقة إلى قصرنا. جودة المنتجات والتركيب الاحترافي فاقت توقعاتنا.'
        : 'The chandeliers provided by the company added a touch of luxury and elegance to our palace. The quality of the products and professional installation exceeded our expectations.',
      image: "/testimonials/client1.jpg"
    },
    {
      name: isRTL ? 'سارة العتيبي' : 'Sarah Al-Otaibi',
      role: isRTL ? 'مديرة تصميم فندق الرياض' : 'Design Manager at Riyadh Hotel',
      content: isRTL
        ? 'تعاملنا معهم في مشروع تجديد الفندق، وكانت تجربة رائعة. الاهتمام بالتفاصيل والمهنية العالية جعلت المشروع يسير بسلاسة تامة.'
        : 'We worked with them on our hotel renovation project, and it was an amazing experience. The attention to detail and high professionalism made the project run very smoothly.',
      image: "/testimonials/client2.jpg"
    },
    {
      name: isRTL ? 'فهد السعدي' : 'Fahad Al-Saadi',
      role: isRTL ? 'مالك مجمع تجاري' : 'Commercial Complex Owner',
      content: isRTL
        ? 'اختيار التصاميم المناسبة وتنفيذها بهذه الدقة ساهم في خلق أجواء استثنائية في المجمع. أنصح بشدة بالتعامل معهم.'
        : 'The selection of appropriate designs and their implementation with such precision contributed to creating an exceptional atmosphere in the complex. I highly recommend working with them.',
      image: "/testimonials/client3.jpg"
    }
  ];

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Header Section */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {isRTL
                ? " أراء عملائنا"
                : ' our  clients '}

            </h1>
            <p>
              {isRTL
                ? 'آراء عملائنا الكرام حول تجربتهم مع منتجاتنا وخدماتنا'
                : 'Opinions of our valued clients about their experience with our products and services'}

            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <ScrollObserver animation="fade-up" threshold={0.1} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">
              {isRTL ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {isRTL
                ? 'آراء عملائنا الكرام حول تجربتهم مع منتجاتنا وخدماتنا'
                : 'Opinions of our valued clients about their experience with our products and services'}
            </p>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" threshold={0.2} className="mb-20">
            <Card className="bg-gradient-to-r from-gold/10 to-charcoal/5 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 h-full">
                  <AspectRatio ratio={isMobile ? 16 / 9 : 3 / 4} className="h-full">
                    <LazyImage
                      src="/testimonials/featured-client.jpg"
                      alt="Featured Client"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                  <div className={`mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <Quote size={48} className="text-gold opacity-50" />
                  </div>
                  <p className={`text-xl md:text-2xl text-gray-700 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL
                      ? 'لقد كان التعامل مع الشركة تجربة متميزة من البداية للنهاية. الاحترافية العالية، والاهتمام بأدق التفاصيل، والتصاميم الاستثنائية التي تناسب رؤيتنا تمامًا. الثريات التي تم تركيبها أصبحت محور إعجاب كل من يزور قصرنا.'
                      : 'Working with the company has been an outstanding experience from start to finish. The high professionalism, attention to the finest details, and exceptional designs that perfectly match our vision. The installed chandeliers have become the focus of admiration for everyone who visits our palace.'}
                  </p>
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-charcoal">
                      {isRTL ? 'الأمير عبدالله آل سعود' : 'Prince Abdullah Al Saud'}
                    </h3>
                    <p className="text-gold">
                      {isRTL ? 'قصر الأمراء، الرياض' : 'Princes Palace, Riyadh'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollObserver>
        </div>
      </section>

      {/* Client Testimonials Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollObserver
                key={index}
                animation={isRTL ? "fade-left" : "fade-right"}
                threshold={0.1}
                delay={150 * (index + 1)}
              >
                <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="h-48 overflow-hidden">
                    <LazyImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-110"
                    />
                  </div>
                  <CardContent className="p-8 relative">
                    <div className="absolute -top-6 left-8 bg-gold text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">
                      <Quote size={20} />
                    </div>
                    <p className="text-gray-600 mb-6 mt-4">
                      {testimonial.content}
                    </p>
                    <div className="border-t border-gray-200 pt-4">
                      <h3 className="text-lg font-bold text-charcoal">
                        {testimonial.name}
                      </h3>
                      <p className="text-gold text-sm">
                        {testimonial.role}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Alternate Fade Animations */}
      <section className="py-20 bg-charcoal text-white">
        <div className="container-custom mx-auto">
          <ScrollObserver animation="fade-up" threshold={0.1} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {isRTL ? 'بالأرقام' : 'By The Numbers'}
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'نفخر بما حققناه على مدار السنوات الماضية'
                : 'We take pride in what we have achieved over the past years'}
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: isRTL ? 'مشروع مكتمل' : 'Completed Projects' },
              { value: '95%', label: isRTL ? 'عملاء راضون' : 'Satisfied Clients' },
              { value: '20+', label: isRTL ? 'سنوات خبرة' : 'Years of Experience' },
              { value: '50+', label: isRTL ? 'تصميم حصري' : 'Exclusive Designs' }
            ].map((stat, index) => (
              <ScrollObserver
                key={index}
                animation={index % 2 === 0 ?
                  (isRTL ? "fade-left" : "fade-right") :
                  (isRTL ? "fade-right" : "fade-left")}
                threshold={0.1}
                delay={150 * (index + 1)}
                className="text-center"
              >
                <div className="p-8 bg-charcoal border border-gold/20 rounded-lg transform transition-transform hover:scale-105 duration-500">
                  <h3 className="text-4xl md:text-5xl font-bold text-gold mb-2">{stat.value}</h3>
                  <p className="text-gray-300">{stat.label}</p>
                </div>
              </ScrollObserver>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Video Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollObserver
              animation={isRTL ? "fade-left" : "fade-right"}
              threshold={0.2}
              className={`${isRTL ? 'order-2' : 'order-1'}`}
            >
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <AspectRatio ratio={16 / 9} className="bg-gray-100">
                  <LazyImage
                    src="/testimonials/video-thumbnail.jpg"
                    alt="Video Testimonial"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button className="w-20 h-20 rounded-full bg-gold/90 text-white flex items-center justify-center hover:bg-gold transition-all duration-300 transform hover:scale-110">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 3L19 12L5 21V3Z" fill="white" />
                      </svg>
                    </button>
                  </div>
                </AspectRatio>
              </div>
            </ScrollObserver>

            <ScrollObserver
              animation={isRTL ? "fade-right" : "fade-left"}
              threshold={0.2}
              className={`${isRTL ? 'order-1 text-right' : 'order-2 text-left'}`}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                {isRTL ? 'شاهد قصص نجاحنا' : 'Watch Our Success Stories'}
              </h2>
              <p className="text-gray-600 mb-6">
                {isRTL
                  ? 'استمع إلى تجارب عملائنا مباشرة واكتشف كيف ساهمت حلولنا في تحويل مساحاتهم إلى تحف فنية من خلال الإضاءة الاستثنائية.'
                  : 'Listen to our clients experiences directly and discover how our solutions have helped transform their spaces into works of art through exceptional lighting.'}
              </p>
              <p className="text-gray-600">
                {isRTL
                  ? 'نحن نؤمن بأن القيمة الحقيقية لمنتجاتنا وخدماتنا تظهر في رضا عملائنا ومدى تأثير أعمالنا على تجربتهم اليومية.'
                  : 'We believe that the true value of our products and services is shown in our clients.'}
              </p>
            </ScrollObserver>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ScrollObserver animation="fade-up" threshold={0.1} className="py-20 bg-gold text-white">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {isRTL ? 'هل أنت جاهز لإضافة لمسة من الفخامة؟' : 'Ready to Add a Touch of Luxury?'}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            {isRTL
              ? 'تواصل معنا اليوم للحصول على استشارة مجانية واكتشف كيف يمكننا تحويل مساحتك.'
              : 'Contact us today for a free consultation and discover how we can transform your space.'}
          </p>
          <button className="bg-white text-gold px-8 py-3 rounded-md font-bold hover:bg-charcoal hover:text-white transition-all duration-300 transform hover:scale-105">
            {isRTL ? 'تواصل معنا' : 'Contact Us'}
          </button>

        </div>
      </ScrollObserver>
    </div>
  );
};

export default Testimonials;