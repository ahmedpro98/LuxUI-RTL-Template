import React, { useEffect, useCallback, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LazyImage from '../components/LazyImage';
import ScrollObserver from '../components/home-index/ScrollObserver';
import VideoPlayer from '../components/VideoPlayer';
import {
  Card,
  CardContent
} from "../components/ui/card";
import { AspectRatio } from '../components/ui/aspect-ratio';
import { useIsMobile } from '../hooks/use-mobile';
import {
  Quote,
  Star,
  Users,
  Award,
  TrendingUp
} from 'lucide-react';

const Testimonials = () => {
  const { isRTL } = useLanguage();
  const isMobile = useIsMobile();

  // Use useCallback to prevent unnecessary re-renders
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    // Use requestAnimationFrame to prevent blocking the main thread
    requestAnimationFrame(scrollToTop);
  }, [scrollToTop]);

  // Memoize testimonials data to prevent recreation on every render
  const testimonials = useMemo(() => [
    {
      name: isRTL ? 'أحمد العبدالله' : 'Ahmed Al-Abdullah',
      role: isRTL ? 'مالك فيلا فاخرة' : 'Luxury Villa Owner',
      content: isRTL
        ? 'التصميم الداخلي الذي قدمته هوم إيست حول فيلتنا إلى تحفة فنية. الذوق الراقي والاهتمام بالتفاصيل في كل ركن جعل المكان يعكس شخصيتنا بأناقة.'
        : 'The interior design provided by Home East transformed our villa into an artistic masterpiece. The refined taste and attention to detail in every corner made the place reflect our personality with elegance.',
      image: "/Clients/cl1.webp",
      rating: 5
    },
    {
      name: isRTL ? 'نورا المطيري' : 'Nora Al-Mutairi',
      role: isRTL ? 'مصممة ديكور - منتجع جدة' : 'Interior Designer - Jeddah Resort',
      content: isRTL
        ? 'تعاملنا مع هوم إيست في تصميم المنتجع، وكانت النتيجة مبهرة. إبداعهم في دمج الطابع العربي الأصيل مع اللمسات العصرية أضاف قيمة استثنائية للمشروع.'
        : 'We worked with Home East on the resort design, and the result was stunning. Their creativity in blending authentic Arabian character with modern touches added exceptional value to the project.',
      image: "/Clients/cl2.jpg",
      rating: 5
    },
    {
      name: isRTL ? 'خالد الشمري' : 'Khalid Al-Shamri',
      role: isRTL ? 'مالك قصر - الرياض' : 'Palace Owner - Riyadh',
      content: isRTL
        ? 'التصاميم الداخلية الفاخرة التي نفذتها هوم إيست في قصرنا تجاوزت كل التوقعات. كل تفصيلة تحكي قصة من الفخامة والذوق الرفيع.'
        : 'The luxury interior designs executed by Home East in our palace exceeded all expectations. Every detail tells a story of luxury and refined taste.',
      image: "/Clients/cl3.jpg",
      rating: 5
    }
  ], [isRTL]);

  // Memoize stats data
  const stats = useMemo(() => [
    {
      value: '300+',
      label: isRTL ? 'مشروع تصميم مكتمل' : 'Design Projects Completed',
      icon: Award,
      color: 'text-blue-400'
    },
    {
      value: '98%',
      label: isRTL ? 'عملاء راضون عن التصميم' : 'Satisfied Design Clients',
      icon: Users,
      color: 'text-green-400'
    },
    {
      value: '15+',
      label: isRTL ? 'سنوات في التصميم الداخلي' : 'Years in Interior Design',
      icon: TrendingUp,
      color: 'text-purple-400'
    },
    {
      value: '80+',
      label: isRTL ? 'تصميم فاخر حصري' : 'Exclusive Luxury Designs',
      icon: Star,
      color: 'text-yellow-400'
    }
  ], [isRTL]);

  const renderStars = useCallback((rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-primary fill-current' : 'text-gray-300'}`}
      />
    ));
  }, []);

  return (
    <div className="pt-16">
      {/* Header Section - Reduced padding for faster loading */}
      <section className="bg-gradient-to-br from-neutral via-neutral/95 to-neutral/90 text-white py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom mx-auto relative z-10">
          <div className={`max-w-4xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {isRTL ? "آراء عملائنا" : 'Client Testimonials'}
            </h1>
            <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
              {isRTL
                ? 'آراء عملائنا الكرام حول تجربتهم مع تصاميمنا الداخلية الفاخرة وخدماتنا المتميزة'
                : 'Discover what our valued clients say about their exceptional experience with our luxury interior designs and premium services'}
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonial - Optimized animation delays */}
      <section className="py-12 md:py-16">
        <div className="container-custom mx-auto">
          <ScrollObserver animation="fade-up" threshold={0.05} delay={100} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-neutral mb-3">
              {isRTL ? 'ما يقوله عملاؤنا' : 'What Our Clients Say'}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              {isRTL
                ? 'تجارب حقيقية من عملائنا المميزين في عالم التصميم الداخلي الفاخر'
                : 'Real experiences from our distinguished clients in the world of luxury interior design'}
            </p>
          </ScrollObserver>

          <ScrollObserver animation="fade-up" threshold={0.1} delay={200} className="mb-16">
            <Card className="bg-gradient-to-br from-primary/5 via-white to-neutral/5 shadow-xl border-0 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 h-full">
                  <AspectRatio ratio={isMobile ? 1 : 4 / 5} className="h-full">
                    <LazyImage
                      src="/Clients/mainCL.jpg"
                      alt="Featured Client"
                      className="w-full h-full object-cover"
                    />
                  </AspectRatio>
                </div>
                <div className="lg:col-span-3 p-6 md:p-8 lg:p-12 flex flex-col justify-center">
                  <div className={`mb-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <Quote size={40} className="text-primary/60" />
                  </div>
                  <p className={`text-lg md:text-xl lg:text-2xl text-gray-700 mb-6 leading-relaxed ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL
                      ? 'لقد كان التعامل مع هوم إيست تجربة متميزة من البداية للنهاية. خبرتهم في التصميم الداخلي الفاخر، والاهتمام بأدق التفاصيل، والتصاميم الاستثنائية جعلت قصرنا تحفة فنية حقيقية.'
                      : 'Working with Home East has been an outstanding experience from start to finish. Their expertise in luxury interior design, attention to detail, and exceptional designs made our palace a true artistic masterpiece.'}
                  </p>
                  <div className={`flex items-center gap-2 mb-4 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                    {renderStars(5)}
                  </div>
                  <div className={`${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-lg md:text-xl font-bold text-neutral">
                      {isRTL ? 'الأميرة فاطمة آل سعود' : 'Princess Fatima Al Saud'}
                    </h3>
                    <p className="text-primary font-medium">
                      {isRTL ? 'قصر الأميرات، الرياض' : 'Princess Palace, Riyadh'}
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </ScrollObserver>
        </div>
      </section>

      {/* Client Testimonials Grid - Faster animations */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, index) => (
              <ScrollObserver
                key={index}
                animation="fade-up"
                threshold={0.05}
                delay={100 * (index + 1)}
              >
                <Card className={`h-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white border-0 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <div className="h-56 md:h-64 sm:h-48">
                    <LazyImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6 relative">
                    <div className={`absolute -top-6 w-12 h-12 bg-primary text-white flex items-center justify-center rounded-full shadow-lg ${isRTL ? 'right-6' : 'left-6'}`}>
                      <Quote size={18} />
                    </div>
                    <div className={`flex items-center gap-1 mb-4 mt-2 ${isRTL ? 'justify-end' : 'justify-start'}`}>
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {testimonial.content}
                    </p>
                    <div className="border-t border-gray-100 pt-4">
                      <h3 className="text-lg font-bold text-neutral mb-1">
                        {testimonial.name}
                      </h3>
                      <p className="text-primary text-sm font-medium">
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

      {/* Stats Section - Enhanced with icons and faster animations */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-neutral via-neutral/98 to-neutral text-white">
        <div className="container-custom mx-auto">
          <ScrollObserver animation="fade-up" threshold={0.05} delay={100} className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? 'إنجازاتنا بالأرقام' : 'Our Achievements By Numbers'}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              {isRTL
                ? 'نفخر بما حققناه في مجال التصميم الداخلي على مدار السنوات الماضية'
                : 'We take pride in what we have achieved in interior design over the past years'}
            </p>
          </ScrollObserver>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <ScrollObserver
                  key={index}
                  animation="fade-up"
                  threshold={0.05}
                  delay={150 * (index + 1)}
                  className="text-center"
                >
                  <div className="p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-primary/20 rounded-xl transform transition-all duration-300 hover:scale-105 hover:bg-white/10">
                    <div className="flex justify-center mb-4">
                      <IconComponent size={32} className={`${stat.color}`} />
                    </div>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base">
                      {stat.label}
                    </p>
                  </div>
                </ScrollObserver>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Section - Now using the separate VideoPlayer component */}
      <VideoPlayer />

      {/* Call to Action - Faster animation */}
      <ScrollObserver animation="fade-up" threshold={0.05} delay={200}>
        <section className="py-12 md:py-16 bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-white relative">
          <div className="absolute inset-0 bg-black/10"></div>
          <div className="container-custom mx-auto text-center relative z-10">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              {isRTL ? 'هل أنت جاهز لتحويل مساحتك إلى تحفة فنية؟' : 'Ready to Transform Your Space into an Artistic Masterpiece?'}
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              {isRTL
                ? 'تواصل مع هوم إيست اليوم للحصول على استشارة مجانية في التصميم الداخلي واكتشف كيف يمكننا إضافة لمسة الفخامة لمنزلك'
                : 'Contact Home East today for a free interior design consultation and discover how we can add a touch of luxury to your home'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold hover:bg-neutral hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                {isRTL ? 'استشارة مجانية' : 'Free Consultation'}
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105">
                {isRTL ? 'معرض التصاميم' : 'Design Portfolio'}
              </button>
            </div>
          </div>
        </section>
      </ScrollObserver>
    </div>
  );
};

export default Testimonials;