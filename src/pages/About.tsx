import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LazyImage from '../components/LazyImage';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent
} from "@/components/ui/card";
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { useIsMobile } from '../hooks/use-mobile';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerChildren = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const About = () => {
  const { t, isRTL } = useLanguage();
  const isMobile = useIsMobile();
  const [activeTeamMember, setActiveTeamMember] = useState<number | null>(null);

  // Intersection observer refs for different sections
  const [storyRef, storyInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [missionRef, missionInView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [valuesRef, valuesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [teamRef, teamInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: isRTL ? 'م/اشرف محمد السيد' : 'Eng / Ashraf Mohamed El-Sayed ',
      role: isRTL ? 'المدير التنفيذي' : 'CEO & Founder',
      bio: isRTL
        ? 'خبرة 20 عامًا في مجال الإضاءة الفاخرة والتركيب الداخلي. وادارة المشروعات الضخمة'
        : '20 years of experience in luxury lighting and interior design.',
      image: "/team/ashraf.jpg"
    },
    {
      name: isRTL ? 'أ/ ابراهيم محمد السيد' : 'Mr / Ibrahim Muhammad Al-Sayed',
      role: isRTL ? 'المدير التشغيلي' : 'Operational manager',
      bio: isRTL
        ? 'خبرة في إدارة سلسلة التوريد، تحسين العمليات، وضمان التكلفة والجودة وقيادة الفرق التشغيلية'
        : 'Experience in supply chain management, process optimization, and ensuring cost efficiency & quality control',
      image: "/team/Ibrahim.jpg"
    },
    {
      name: isRTL ? 'م/خالد الراشد' : 'Eng / Khalid Al-Rashid',
      role: isRTL ? 'مدير التركيب' : 'Installation Manager',
      bio: isRTL
        ? 'خبير تقني بخبرة 15 عامًا في تركيب الإضاءة الفاخرة.'
        : 'Technical expert with 15 years of experience in luxury lighting installation.',
      image: "/team/khalid.jpg"
    }
  ];

  const ValuesIcon = ({ index }: { index: number }) => {
    switch (index) {
      case 0:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 1:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 2:
        return (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 10H16.01M12 10H12.01M8 10H8.01M3 10C3 4.64706 5.11765 3 12 3C18.8824 3 21 4.64706 21 10C21 15.3529 18.8824 17 12 17C11.6592 17 11.3301 16.996 11.0124 16.9876L7 21V16.4939C4.0328 15.6692 3 13.7383 3 10Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="pt-24 overflow-x-hidden">
      {/* Header - Enhanced with motion */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.3
            }
          }
        }}
        className="bg-charcoal text-white py-20"
      >
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              {t('about')}
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-xl text-gray-300"
            >
              {t('section-about-subtitle')}
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Our Story - Enhanced with scroll animations and better image display */}
      <section ref={storyRef} className="py-20">
        <div className="container-custom mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={fadeInUp}
              className={`${isRTL ? 'order-2 text-right' : 'order-1 text-left'}`}
            >
              <h2 className="text-3xl font-bold text-charcoal mb-6">
                {isRTL ? 'قصتنا' : 'Our Story'}
              </h2>
              <p className="text-gray-600 mb-4">
                {isRTL
                  ? 'تأسست شركتنا في عام 2005 بهدف واحد: تقديم أفضل الثريات الفاخرة للمساحات المميزة. بدأنا كمتجر صغير في قلب المدينة، وسرعان ما توسعت أعمالنا لتشمل الاستشارات وخدمات التركيب.'
                  : 'Our company was founded in 2005 with one goal: providing the finest luxury chandeliers for distinguished spaces. We started as a small shop in the heart of the city, and quickly expanded our business to include consultation and installation services.'}
              </p>
              <p className="text-gray-600">
                {isRTL
                  ? 'على مدار السنوات، أصبحنا المزود الرئيسي للثريات الفاخرة للفنادق والقصور والمساحات التجارية الراقية في المملكة. نحن نفخر بتقديم الجودة والأناقة في كل تفاصيل عملنا.'
                  : 'Over the years, we have become the premier provider of luxury chandeliers for hotels, palaces, and upscale commercial spaces in the Kingdom. We take pride in delivering quality and elegance in every detail of our work.'}
              </p>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={storyInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                visible: {
                  opacity: 1,
                  scale: 1,
                  transition: {
                    duration: 0.8,
                    delay: 0.3
                  }
                }
              }}
              className={`${isRTL ? 'order-1' : 'order-2'} rounded-lg overflow-hidden shadow-xl`}
            >
              <AspectRatio ratio={4 / 3} className="bg-gray-100">
                <LazyImage
                  src="/Logo_and_identity/about.jpg"
                  alt="Our Story"
                  className="w-full h-full object-cover rounded-lg hover:scale-105 transition-transform duration-700"
                />
              </AspectRatio>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision - Enhanced with animations */}
      <section ref={missionRef} className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            animate={missionInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            {/* Mission */}
            <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
              <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                <CardContent className="p-8">
                  <div className="bg-gold text-white w-14 h-14 flex items-center justify-center rounded-full mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L4 6V12C4 15.31 7.58 20 12 22C16.42 20 20 15.31 20 12V6L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {isRTL ? 'مهمتنا' : 'Our Mission'}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL
                      ? 'مهمتنا هي إضاءة المساحات بتصاميم فريدة وأنيقة تتجاوز التوقعات. نحن نهدف إلى تحويل أي مكان إلى تحفة فنية من خلال الإضاءة الاستثنائية والتفاصيل الدقيقة، مع التزامنا المطلق بالجودة والخدمة.'
                      : 'Our mission is to illuminate spaces with unique and elegant designs that exceed expectations. We aim to transform any place into a work of art through exceptional lighting and meticulous details, with our absolute commitment to quality and service.'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Vision */}
            <motion.div variants={fadeInUp} whileHover={{ y: -8, transition: { duration: 0.3 } }}>
              <Card className={`h-full shadow-lg hover:shadow-xl transition-all duration-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                <CardContent className="p-8">
                  <div className="bg-gold text-white w-14 h-14 flex items-center justify-center rounded-full mb-6">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal mb-4">
                    {isRTL ? 'رؤيتنا' : 'Our Vision'}
                  </h3>
                  <p className="text-gray-600">
                    {isRTL
                      ? 'نتطلع إلى أن نكون الخيار الأول في مجال الإضاءة الفاخرة، معروفين بالابتكار والتفرد. نسعى لتوسيع بصمتنا عالميًا وإلهام الناس من خلال الجمع بين الحرفية التقليدية والتصميم المعاصر.'
                      : 'We aspire to be the first choice in luxury lighting, known for innovation and uniqueness. We seek to expand our global footprint and inspire people by combining traditional craftsmanship with contemporary design.'}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>


      {/* Our Team - Enhanced with motion and interactive hover effects */}
      <section ref={teamRef} className="py-20 bg-gray-50">
        <div className="container-custom mx-auto">
          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className={`text-center mb-16`}
          >
            <motion.h2
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-charcoal mb-4"
            >
              {isRTL ? 'فريقنا' : 'Our Team'}
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-gray-600 max-w-2xl mx-auto"
            >
              {isRTL
                ? 'تعرف على الخبراء الذين يقفون وراء تصاميمنا وتركيباتنا الاستثنائية'
                : 'Meet the experts behind our exceptional designs and installations'}
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            animate={teamInView ? "visible" : "hidden"}
            variants={staggerChildren}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.3 }
                }}
                className="relative"
                onMouseEnter={() => setActiveTeamMember(index)}
                onMouseLeave={() => setActiveTeamMember(null)}
              >
                <Card className="overflow-hidden h-full">
                  <div className="h-80 overflow-hidden relative">
                    <LazyImage
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-all duration-700 ${activeTeamMember === index ? 'scale-110' : 'scale-100'}`}
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-charcoal to-transparent opacity-0 transition-opacity duration-300 ${activeTeamMember === index ? 'opacity-60' : ''}`}
                    ></div>
                  </div>
                  <CardContent className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-charcoal mb-1">
                      {member.name}
                    </h3>
                    <p className="text-gold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600">
                      {member.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
