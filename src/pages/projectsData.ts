import { ProjectType } from '../hooks/project';

const getProjectsData = (isRTL: boolean): Record<string, ProjectType> => {
  return {
    // Luxury Villa Project Data
    'luxury-villa': {
      title: isRTL ? 'فيلا فاخرة' : 'Luxury Villa',
      subtitle: isRTL ? 'جدة, المملكة العربية السعودية' : 'Jeddah, KSA',
      description: isRTL
        ? 'مشروع تصميم داخلي وديكور فاخر لفيلا في جدة يجمع بين الأناقة العصرية والفخامة الكلاسيكية. تم التركيز على خلق مساحات معيشة مريحة وأنيقة تعكس ذوق المالك الرفيع.'
        : 'Luxury interior design and decoration project for a villa in Jeddah that combines modern elegance with classic luxury. The focus was on creating comfortable and elegant living spaces that reflect the owner\'s refined taste.',
      year: '2023',
      category: isRTL ? 'فيلا فاخرة' : 'Luxury Villa',
      client: isRTL ? 'دار المعمار' : 'darmamar.',
      location: isRTL ? 'جدة, المملكة العربية السعودية' : 'Jeddah, KSA',
      mainImage: '/projects-page/vila/hero.webp',
      // Gallery images for the project
      gallery: [
        '/projects-page/vila/luxury-1.webp',
        '/projects-page/vila/luxury-3.webp',
        '/projects-page/vila/luxury-5.webp',
        '/projects-page/vila/luxury-6.webp',
        '/projects-page/vila/outro.webp',
        '/projects-page/vila/luxury-7.webp',
      ],
      // Detailed sections about the project
      details: [
        {
          title: isRTL ? 'التصميم المعماري الداخلي' : 'Interior Architectural Design',
          content: isRTL
            ? 'تم تصميم المساحات الداخلية بما يتناغم مع الطابع المعماري الفريد للفيلا، مع إبراز العناصر الزخرفية والتفاصيل الجمالية. الهدف كان تعزيز الفخامة والراحة مع إبراز الجمال المعماري بطريقة راقية ومهيبة.'
            : 'The interior spaces were designed to harmonize with the unique architectural character of the villa, highlighting decorative elements and aesthetic details. The goal was to enhance luxury and comfort while showcasing architectural beauty in an elegant and majestic way.'
        },
        {
          title: isRTL ? 'ديكور الصالة الرئيسية' : 'Main Living Room Decor',
          content: isRTL
            ? 'استخدمنا مزيجاً من الأثاث الفاخر والألوان الدافئة والمواد الطبيعية لخلق مساحة معيشة أنيقة ومريحة تعكس الذوق الرفيع.'
            : 'We used a combination of luxury furniture, warm colors, and natural materials to create an elegant and comfortable living space that reflects refined taste.'
        },
        {
          title: isRTL ? 'التصميم الداخلي للغرف' : 'Bedroom Interior Design',
          content: isRTL ? 'تم تصميم الغرف بعناية فائقة لتوفير جو من الهدوء والاسترخاء، مع اختيار أثاث فاخر وألوان هادئة، مع مراعاة التوازن بين الجمال والوظيفة والراحة المطلقة.'
            : 'The bedrooms were carefully designed to provide an atmosphere of tranquility and relaxation, with luxury furniture and calm colors, balancing beauty, function, and absolute comfort.'
        }
      ]
    },
    // Royal Palace Project Data
    'interior-design': {
      title: isRTL ? 'فيلا فاخرة' : 'Royal vila',
      subtitle: isRTL ? 'نيوم، المملكة العربية السعودية' : 'Neom, Saudi Arabia',
      description: isRTL
        ? 'مشروع تصميم داخلي وديكور لقصر ملكي فاخر في نيوم يجمع بين الأناقة العصرية والعناصر التراثية الأصيلة. تم التركيز على استخدام مواد طبيعية فاخرة وتصميم داخلي متخصص لإبراز جمال وفخامة المساحات المختلفة.'
        : 'Interior design and decoration project for a royal luxury palace in Neom that combines modern elegance with authentic heritage elements. The focus was on using premium natural materials and specialized interior design to enhance the beauty and luxury of different spaces.',
      year: '2024',
      category: isRTL ? 'قصر ملكي' : 'Royal Palace',
      client: isRTL ? 'العائلة الملكية' : 'Royal Family',
      location: isRTL ? 'نيوم، ذا لاين' : 'Neom, The LINE',
      mainImage: '/projects-page/Interior/hero.jpg',
      // Gallery images for the royal palace project
      gallery: [
        '/projects-page/Interior/incover.webp',
        '/projects-page/Interior/Interior2.jpg',
        '/projects-page/Interior/Interior3.jpg',
        '/projects-page/Interior/Interior4.jpg',
        '/projects-page/Interior/Interior5.webp',
        '/projects-page/Interior/Interior6.webp',
        '/projects-page/Interior/Interior7.webp',
      ],
      // Detailed sections about the royal palace project
      details: [
        {
          title: isRTL ? 'المواد الفاخرة والطبيعية' : 'Luxury Natural Materials',
          content: isRTL
            ? 'تم استخدام مجموعة متنوعة من المواد الطبيعية الفاخرة مثل الرخام الإيطالي والخشب النادر والأحجار الكريمة لإضفاء الفخامة والأصالة على كافة المساحات.'
            : 'A variety of luxury natural materials such as Italian marble, rare wood, and precious stones were used to add luxury and authenticity to all spaces.'
        },
        {
          title: isRTL ? 'التصميم الداخلي المتكامل' : 'Integrated Interior Design',
          content: isRTL
            ? 'تم تصميم نظام تصميم داخلي متكامل يجمع بين الأثاث المخصص والديكورات الفنية والتفاصيل المعمارية لإنشاء مساحات ملكية جذابة ووظيفية.'
            : 'An integrated interior design system was designed combining custom furniture, artistic decorations, and architectural details to create appealing and functional royal spaces.'
        },
        {
          title: isRTL ? 'التراث والحداثة' : 'Heritage and Modernity',
          content: isRTL
            ? 'تم دمج العناصر التراثية السعودية الأصيلة مع التصميم العصري المتطور لإنشاء مساحة تعكس هوية المملكة العريقة مع الحفاظ على الفخامة العصرية المطلقة.'
            : 'Authentic Saudi heritage elements were integrated with advanced modern design to create a space that reflects the Kingdom\'s ancient identity while maintaining absolute contemporary luxury.'
        }
      ]
    }
  };
};

export default getProjectsData;
