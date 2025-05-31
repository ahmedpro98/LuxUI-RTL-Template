import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

const Projects = () => {
    const { isRTL } = useLanguage();

    // Project data
    const projects = [
        {
            id: 'luxury-villa',
            title: isRTL ? 'فيلا فاخرة - الرياض' : 'Luxury Villa - Riyadh',
            description: isRTL
                ? 'تصميم داخلي فاخر لفيلا تجمع بين الأناقة العصرية والطابع الكلاسيكي مع ديكورات راقية'
                : 'Luxurious interior design for a villa combining modern elegance with classical character and sophisticated decorations',
            image: '/projects-page/mosque/WhatsApp-Image-2025-02-28-at-20.30.59_2323b763.jpg',
            path: '/projects/luxury-villa',
            category: isRTL ? 'فيلا فاخرة' : 'Luxury Villa',
            year: '2023'
        },
        {
            id: 'commercial-plaza',
            title: isRTL ? 'قصر ملكي - جدة' : 'Royal Palace - Jeddah',
            description: isRTL
                ? 'تصميم داخلي راقي لقصر ملكي يتميز بالفخامة والديكورات الكلاسيكية المميزة'
                : 'Sophisticated interior design for a royal palace featuring luxury and distinctive classical decorations',
            image: '/projects-page/mall/443527896_1564884910745038_3758099768104307627_n.jpg',
            path: '/projects/commercial-plaza',
            category: isRTL ? 'قصر ملكي' : 'Royal Palace',
            year: '2025'
        },
        {
            id: 'hotel-lobby',
            title: isRTL ? 'منتجع فاخر - الخبر' : 'Luxury Resort - Al Khobar',
            description: isRTL
                ? 'تصميم داخلي لمنتجع فاخر مع التركيز على الديكورات العصرية والأثاث الراقي'
                : 'Interior design for a luxury resort with focus on modern decorations and sophisticated furniture',
            image: '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.21-PM.jpg',
            path: '/projects/hotel-lobby',
            category: isRTL ? 'منتجع فاخر' : 'Luxury Resort',
            year: '2024'
        },
        {
            id: 'interior-design',
            title: isRTL ? 'بنتهاوس عصري - دبي' : 'Modern Penthouse - Dubai',
            description: isRTL
                ? 'تصميم داخلي عصري لبنتهاوس فاخر يجمع بين الأناقة والحداثة مع لمسات ديكورية مميزة'
                : 'Modern interior design for a luxury penthouse combining elegance and modernity with distinctive decorative touches',
            image: 'projects-page/Interior/Interior5.jpg',
            path: '/projects/interior-design',
            category: isRTL ? 'بنتهاوس' : 'Penthouse',
            year: '2024'
        }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="pt-24 pb-20">
            <div className="container-custom">
                {/* Header */}
                <div className={`text-center mb-12 ${isRTL ? 'font-tajawal' : 'font-playfair'}`}>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                        {isRTL ? 'مشروعاتنا' : 'Our Projects'}
                    </h1>
                    <div className="w-20 h-1 primary-gradient mx-auto mb-6"></div>
                    <p className="text-lg max-w-3xl mx-auto text-neutral-light">
                        {isRTL
                            ? 'استكشف مجموعة من المشاريع المميزة التي قمنا بتنفيذها، تبرز خبرتنا في التصميم الداخلي والديكورات الفاخرة'
                            : 'Explore our collection of distinctive projects that showcase our expertise in interior design and luxury decorations'
                        }
                    </p>
                </div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            variants={itemVariants}
                            className="group"
                        >
                            <Link to={project.path} className="block">
                                <div className="overflow-hidden rounded-lg shadow-md hover-lift">
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                                        <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 text-xs rounded">
                                            {project.category}
                                        </div>
                                    </div>

                                    <div className="p-6 bg-white">
                                        <div className="flex justify-between items-center mb-3">
                                            <h3 className="text-xl font-bold text-neutral group-hover:text-primary transition-colors">
                                                {project.title}
                                            </h3>
                                            <span className="text-sm text-primary">{project.year}</span>
                                        </div>
                                        <p className="text-neutral-light text-sm mb-4">
                                            {project.description}
                                        </p>
                                        <div className={`flex ${isRTL ? 'justify-start' : 'justify-end'}`}>
                                            <span className="text-primary font-medium text-sm flex items-center">
                                                {isRTL ? 'عرض المزيد' : 'View Project'}
                                                <svg className={`w-4 h-4 ${isRTL ? 'mr-1 rotate-180' : 'ml-1'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Other projects banner */}
                <div className="mt-16">
                    <div className="bg-surface rounded-lg p-8 md:p-12 text-center">
                        <h2 className="text-2xl md:text-3xl font-bold mb-4">
                            {isRTL ? 'هل لديك مشروع في ذهنك؟' : 'Have a project in mind?'}
                        </h2>
                        <p className="max-w-2xl mx-auto mb-6 text-neutral-light">
                            {isRTL
                                ? 'نحن نقدم حلول تصميم داخلي مبتكرة وديكورات فاخرة تناسب متطلبات مشروعك. اتصل بنا اليوم لمناقشة أفكارك.'
                                : 'We offer innovative interior design solutions and luxury decorations tailored to your project requirements. Contact us today to discuss your ideas.'
                            }
                        </p>
                        <Link
                            to="/contact"
                            className="btn-primary inline-block transform transition-transform duration-300 hover:scale-105"
                        >
                            {isRTL ? 'تواصل معنا' : 'Get in Touch'}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;