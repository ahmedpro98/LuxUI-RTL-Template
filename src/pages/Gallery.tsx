
import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { loadavg } from 'node:os';

const Gallery = () => {
  const { t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('all');
  const [visibleItems, setVisibleItems] = useState(9);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    { id: 'all', nameEN: 'All', nameAR: 'الكل' },
    { id: 'modern', nameEN: 'Modern', nameAR: 'عصري' },
    { id: 'classic', nameEN: 'Classic', nameAR: 'كلاسيكي' },
    { id: 'crystal', nameEN: 'Ring modern', nameAR: 'نجف حلقي ' },
    { id: 'custom', nameEN: 'Custom', nameAR: 'مخصص' }
  ];

  const galleryItems = [
    {
      id: 1,
      category: 'modern',
      imageUrl: '/gallery/4-modern.jpg',
      titleEN: 'Cylindrical chandelier',
      titleAR: 'اكواب اسطوانية',
      locationEN: 'Luxury Villa, Riyadh',
      locationAR: 'فيلا فاخرة، الرياض'
    },
    {
      id: 2,
      category: 'classic',
      imageUrl: '/gallery/1-classic.jpg',
      titleEN: 'Grand Classic',
      titleAR: 'كلاسيكي فخم',
      locationEN: 'Royal Palace, Jeddah',
      locationAR: 'مسجد الرحمن , جدة'
    },
    {
      id: 3,
      category: 'crystal',
      imageUrl: '/gallery/2-ring.jpeg',
      titleEN: 'Modern Ring',
      titleAR: 'تصميم دائري عصري',
      locationEN: 'Grand Hotel, Riyadh',
      locationAR: 'فندق جراند، الرياض'
    },
    {
      id: 4,
      category: 'modern',
      imageUrl: '/gallery/3-modern.jpeg',
      titleEN: 'modern chandelier',
      titleAR: ' ثريا هندسية ',
      locationEN: 'Modern office, Dammam',
      locationAR: 'شقة حديثة، الدمام'
    },
    {
      id: 5,
      category: 'custom',
      imageUrl: '/gallery/2-modern.jpg',
      titleEN: 'Bespoke Design',
      titleAR: 'تصميم مخصص',
      locationEN: 'Private Residence, Riyadh',
      locationAR: 'إقامة خاصة، الرياض'
    },
    {
      id: 6,
      category: 'crystal',
      imageUrl: '/gallery/3-ring.jpg',
      titleEN: 'ring luxurious',
      titleAR: 'تصميم دائري فاخر',
      locationEN: 'Luxury Mall, Khobar',
      locationAR: 'مطعم فاخر، الخبر'
    },
    {
      id: 7,
      category: 'classic',
      imageUrl: '/gallery/2-classic.jpg',
      titleEN: 'Islamic chandelier',
      titleAR: 'نجفة اسلامية',
      locationEN: 'Heritage Hotel, Riyadh',
      locationAR: 'فندق تراثي، جدة'
    },
    {
      id: 8,
      category: 'modern',
      imageUrl: '/gallery/liner.jpg',
      titleEN: 'liner Chandelier',
      titleAR: 'ثرايا خطية',
      locationEN: 'Conference hall, Jeddah',
      locationAR: 'قاعة مؤاتمرات، جدة'
    },
    {
      id: 9,
      category: 'custom',
      imageUrl: '/gallery/1-modern.jpg',
      titleEN: 'Modern lamb',
      titleAR: 'داليات مودرن',
      locationEN: 'Art Gallery, Dubai',
      locationAR: 'معرض فني، الرياض'
    },
    {
      id: 10,
      category: 'crystal',
      imageUrl: '/gallery/1-ring.jpg',
      titleEN: 'Multi-Tier ring',
      titleAR: 'تصميم دائري متعدد ',
      locationEN: 'Luxury mall, Riyadh',
      locationAR: 'مول فاخر، الرياض'
    },
    {
      id: 11,
      category: 'classic',
      imageUrl: '/gallery/3-classic.jpg',
      titleEN: 'Modern metal roof',
      titleAR: 'سقف معدني',
      locationEN: 'Luxury hotel bar, Jeddah',
      locationAR: 'مطعم فاخر , جدة'
    },
    {
      id: 1,
      category: 'custom',
      imageUrl: '/gallery/halal-Mosque.jpg',
      hoverImageUrl: '/gallery/hover-hala.jpg',
      titleEN: 'Hilal Mosque',
      titleAR: 'هلال جامع',
      locationEN: 'Kuwaiti Mosque, Dammam',
      locationAR: 'مسجد الكويتي ، الدمام'
    },
  ];

  const filteredItems = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const loadMore = () => {
    setVisibleItems(prev => Math.min(prev + 6, filteredItems.length));
  };

  return (
    <div className="pt-24">
      {/* Header - Updated title */}
      <section className="bg-charcoal text-white py-20">
        <div className="container-custom mx-auto">
          <div className={`max-w-3xl ${isRTL ? 'text-right' : 'text-left'}`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
              {isRTL ? 'تشكيلة أعمالنا' : 'Our Collection'}
            </h1>
            <p className="text-xl text-gray-300 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {isRTL
                ? 'استكشف مجموعتنا من الثريات الفاخرة ومشاريعنا السابقة'
                : 'Explore our collection of luxury chandeliers and previous projects'}
            </p>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container-custom mx-auto">
          {/* Categories */}
          <div className={`flex flex-wrap gap-4 mb-12 ${isRTL ? 'justify-end' : 'justify-start'}`}>
            {categories.map(category => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setVisibleItems(9);
                }}
                className={`px-6 py-2 rounded-full transition-colors duration-300 ${activeCategory === category.id
                  ? 'bg-gold text-white'
                  : 'bg-gray-100 text-charcoal hover:bg-gray-200'
                  }`}
              >
                {isRTL ? category.nameAR : category.nameEN}
              </button>
            ))}
          </div>

          {/* Gallery Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.slice(0, visibleItems).map((item, index) => (
              <div
                key={item.id}
                className="animate-fade-in"
                style={{ animationDelay: `${0.1 + index * 0.1}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg elegant-shadow group">
                  <div className="h-64 overflow-hidden">
                    <div className="relative h-64 overflow-hidden group">
                      {item.hoverImageUrl ? (
                        <>
                          <img
                            src={item.imageUrl}
                            alt={isRTL ? item.titleAR : item.titleEN}
                            className="w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0 absolute top-0 left-0"
                          />
                          <img
                            src={item.hoverImageUrl}
                            alt={isRTL ? item.titleAR : item.titleEN}
                            className="w-full h-full object-cover transition-opacity duration-1000 opacity-0 group-hover:opacity-100 absolute top-0 left-0"
                          />
                        </>
                      ) : (
                        <img
                          src={item.imageUrl}
                          alt={isRTL ? item.titleAR : item.titleEN}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                    </div>

                  </div>
                  <div className={`p-6 ${isRTL ? 'text-right' : 'text-left'}`}>
                    <h3 className="text-xl font-bold text-charcoal mb-1">
                      {isRTL ? item.titleAR : item.titleEN}
                    </h3>
                    <p className="text-gold">
                      {isRTL ? item.locationAR : item.locationEN}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          {visibleItems < filteredItems.length && (
            <div className="text-center mt-12">
              <button
                onClick={loadMore}
                className="inline-block bg-transparent border-2 border-gold text-gold px-6 py-3 rounded-md hover:bg-gold hover:text-white transition-colors duration-300"
              >
                {isRTL ? 'عرض المزيد' : 'Load More'}
              </button>
            </div>
          )}
        </div>
      </section>
    </div>

  );
};

export default Gallery;
