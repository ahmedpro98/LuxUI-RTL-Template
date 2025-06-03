/**
 * Gallery Component - Displays a filterable collection of interior design projects
 */

import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';
import LazyImage from '../components/LazyImage';

const Gallery = () => {
  const { isRTL } = useLanguage();

  // State for filtering gallery items by category
  const [activeCategory, setActiveCategory] = useState('all');

  // State for pagination - shows more items when user clicks "Load More"
  const [visibleItems, setVisibleItems] = useState(9);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Category filter options with bilingual names
  const categories = [
    { id: 'all', nameEN: 'All', nameAR: 'الكل' },
    { id: 'modern', nameEN: 'Modern', nameAR: 'عصري' },
    { id: 'islamic', nameEN: 'Islamic', nameAR: 'إسلامي' },
    { id: 'lighting', nameEN: 'Lighting', nameAR: 'إضاءة' },
    { id: 'custom', nameEN: 'Custom', nameAR: 'مخصص' }
  ];

  // Static gallery data with project details in both languages
  const galleryItems = [
    {
      id: 1,
      category: 'modern',
      imageUrl: '/gallery/modern2.webp',
      titleEN: 'Contemporary Living Room',
      titleAR: 'غرفة معيشة عصرية',
      locationEN: 'Luxury Villa, Riyadh',
      locationAR: 'فيلا فاخرة، الرياض'
    },
    {
      id: 2,
      category: 'islamic',
      imageUrl: '/gallery/Islamic-Palace1.webp',
      titleEN: 'Arabesque Majlis Design',
      titleAR: 'تصميم مجلس عربي فاخر',
      locationEN: 'Arabian Palace, Jeddah',
      locationAR: 'قصر عربي، جدة'
    },
    {
      id: 3,
      category: 'lighting',
      imageUrl: '/gallery/light3.webp',
      titleEN: 'Sculpted Ceiling Lighting',
      titleAR: 'إضاءة سقفية فنية',
      locationEN: 'Resort Lobby, Riyadh',
      locationAR: 'منتجع فاخر، الرياض'
    },
    {
      id: 4,
      category: 'modern',
      imageUrl: '/gallery/modern.png',
      titleEN: 'Minimalist Bedroom',
      titleAR: 'غرفة نوم مينيمل',
      locationEN: 'Urban Apartment, Dammam',
      locationAR: 'شقة حضرية، الدمام'
    },
    {
      id: 5,
      category: 'custom',
      imageUrl: '/gallery/sp3.jpg',
      titleEN: 'Signature Interior Concept',
      titleAR: 'تصميم داخلي بتوقيع خاص',
      locationEN: 'Private Villa, Riyadh',
      locationAR: 'فيلا خاصة، الرياض'
    },
    {
      id: 6,
      category: 'lighting',
      imageUrl: '/gallery/light1.jpg',
      titleEN: 'Golden Ring Chandelier',
      titleAR: 'ثريا ذهبية دائرية',
      locationEN: 'Luxury Restaurant, Khobar',
      locationAR: 'مطعم فاخر، الخبر'
    },
    {
      id: 7,
      category: 'islamic',
      imageUrl: '/gallery/Islamic-Palace2.webp',
      titleEN: 'Moorish-Inspired Hall',
      titleAR: 'قاعة مستوحاة من الطراز المغربي',
      locationEN: 'Andalusian Palace, Riyadh',
      locationAR: 'قصر أندلسي، الرياض'
    },
    {
      id: 8,
      category: 'modern',
      imageUrl: '/gallery/00016-2048x1448-1-1400x990.webp',
      titleEN: 'Linear Workspace Lighting',
      titleAR: 'إضاءة خطية للمكاتب',
      locationEN: 'Executive Office, Jeddah',
      locationAR: 'مكتب تنفيذي، جدة'
    },
    {
      id: 9,
      category: 'custom',
      imageUrl: '/gallery/sp1.jpg',
      titleEN: 'Floating Shelves & Spotlights',
      titleAR: 'رفوف طائرة وإضاءة نقطية',
      locationEN: 'Boutique Studio, Dubai',
      locationAR: 'استوديو تصميم، دبي'
    },
    {
      id: 10,
      category: 'lighting',
      imageUrl: '/gallery/light2.jpg  ',
      titleEN: 'Layered Luxury Lights',
      titleAR: 'إضاءة فاخرة متعددة المستويات',
      locationEN: 'Fashion Mall, Riyadh',
      locationAR: 'مول أزياء، الرياض'
    },
    {
      id: 11,
      category: 'islamic',
      imageUrl: '/gallery/Islamic-Palace3.jpg',
      titleEN: 'Traditional Islamic Lounge',
      titleAR: 'صالون تقليدي إسلامي',
      locationEN: 'Heritage Mansion, Jeddah',
      locationAR: 'قصر تراثي، جدة'
    },
    {
      id: 12,
      category: 'custom',
      imageUrl: '/gallery/sp2.jpg',
      hoverImageUrl: '/gallery/hover-hala.jpg',
      titleEN: 'Royal Entrance Design',
      titleAR: 'مدخل ملكي فخم',
      locationEN: 'Elite Mansion, Dammam',
      locationAR: 'قصر النخبة، الدمام'
    },
  ];

  // Filter items based on selected category
  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  /**
   * Load more items handler - increases visible items by 6
   */
  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredItems.length));
  };

  // Animation variants for the gallery grid container
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Animate children one after another
        delayChildren: 0.3
      }
    }
  };

  // Animation variants for individual gallery items
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: isRTL ? -40 : 40 // Slide direction depends on language (RTL/LTR)
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <div className="pt-24">
      {/* Hero Section with page title */}
      <section className="bg-neutral text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {isRTL ? 'تشكيلة أعمالنا' : 'Our Collection'}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isRTL
                ? 'استكشف مجموعتنا من التصاميم الداخلية والإضاءات المخصصة'
                : 'Explore our collection of interior designs and custom lighting solutions'}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Gallery Section */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          {/* Category Filter Buttons */}
          <motion.div
            className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'justify-end' : 'justify-start'}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleItems(9); // Reset visible items when changing category
                }}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category.id
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-neutral hover:bg-gray-200'
                  }`}
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isRTL ? category.nameAR : category.nameEN}
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            key={activeCategory} // Re-animate when category changes
          >
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow group"
              >
                {/* Project Image with hover effect */}
                <div className="h-64 overflow-hidden">
                  <LazyImage
                    src={item.imageUrl}
                    alt={isRTL ? item.titleAR : item.titleEN}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>

                {/* Project Details */}
                <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <h3 className="text-xl font-bold text-neutral mb-1">
                    {isRTL ? item.titleAR : item.titleEN}
                  </h3>
                  <p className="text-primary">
                    {isRTL ? item.locationAR : item.locationEN}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button - only show if there are more items */}
          {visibleItems < filteredItems.length && (
            <motion.div
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <motion.button
                onClick={loadMore}
                className="inline-block bg-transparent border-2 border-primary text-primary px-6 py-3 rounded-md hover:bg-primary hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isRTL ? 'عرض المزيد' : 'Load More'}
              </motion.button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;