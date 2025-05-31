import { ProjectType } from '../hooks/project';

const getProjectsData = (isRTL: boolean): Record<string, ProjectType> => {
  return {
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
      mainImage: '/projects-page/mosque/into-cover.jpg',
      gallery: [
        '/projects-page/mosque/11.jpg',
        '/projects-page/mosque/9.jpg',
        '/projects-page/mosque/3.jpg',
        '/projects-page/mosque/6.jpg',
        '/projects-page/mosque/13.jpg',
        '/projects-page/mosque/12.jpg',
      ],
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
    'commercial-plaza': {
      title: isRTL ? 'مجمع تجاري فاخر' : 'Luxury Commercial Complex',
      subtitle: isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      description: isRTL
        ? 'مشروع تصميم داخلي وديكور لمجمع تجاري فاخر في الرياض، يركز على خلق تجربة تسوق مميزة من خلال التصميم الداخلي المبتكر والديكورات الراقية. تم تصميم المساحات لتعزيز هوية العلامة التجارية وخلق بيئة جذابة للزوار.'
        : 'Interior design and decoration project for a luxury commercial complex in Riyadh, focusing on creating a distinctive shopping experience through innovative interior design and elegant decorations. The spaces were designed to enhance brand identity and create an attractive environment for visitors.',
      year: '2024',
      category: isRTL ? 'تجاري فاخر' : 'Luxury Commercial',
      client: isRTL ? 'مجموعة الاستثمار العقاري' : 'Real Estate Investment Group',
      location: isRTL ? 'الرياض، المملكة العربية السعودية' : 'Riyadh, Saudi Arabia',
      mainImage: '/projects-page/mall/landpage.jpg',
      gallery: [
        '/projects-page/mall/cropped-WhatsApp-Image-2025-02-28-at-3.05.44-PM.jpg',
        '/projects-page/mall/IMG_7395-scaled.jpg',
        '/projects-page/mall/Customized-Large-Luxury-K9-Crystal-Chandeliers-Pendant-Light-Pefect-for-Shopping-Mall-Hotel-Stairs.jpg',
        '/projects-page/mall/High-Quality-Custom-Project-Mall-Hotel-Lobby-Large-Glass-Modern-Chandelier-Light (1).jpg',
        '/projects-page/mall/p1-1000x1000.jpg',
        '/projects-page/mall/16.jpg',
      ],
      details: [
        {
          title: isRTL ? 'ديكور المداخل الرئيسية' : 'Main Entrance Decor',
          content: isRTL
            ? 'تم تصميم ديكور المداخل الرئيسية لجذب الانتباه وإبراز الهوية المعمارية للمبنى، مع استخدام عناصر ديكورية فاخرة ومواد عالية الجودة.'
            : 'The main entrance decor was designed to attract attention and highlight the architectural identity of the building, using luxury decorative elements and high-quality materials.'
        },
        {
          title: isRTL ? 'تصميم المناطق العامة' : 'Common Area Design',
          content: isRTL
            ? 'تم تصميم المناطق العامة لخلق تجربة تسوق مريحة وممتعة، مع التركيز على سهولة التنقل وجاذبية المكان من خلال الديكورات الأنيقة.'
            : 'Common areas were designed to create a comfortable and enjoyable shopping experience, focusing on ease of navigation and attractiveness through elegant decorations.'
        },
        {
          title: isRTL ? 'التصميم الداخلي للمتاجر' : 'Shop Interior Design',
          content: isRTL
            ? 'تم وضع معايير تصميمية موحدة للمتاجر تحافظ على الطابع الفاخر للمجمع مع السماح بالتميز الفردي لكل علامة تجارية.'
            : 'Unified design standards were established for shops that maintain the luxury character of the complex while allowing individual distinction for each brand.'
        }
      ]
    },
    'hotel-lobby': {
      title: isRTL ? 'بهو فندق فاخر' : 'Luxury Hotel Lobby',
      subtitle: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      description: isRTL
        ? 'مشروع تصميم داخلي وديكور لبهو فندق فاخر في جدة، يركز على خلق انطباع أول مذهل للضيوف. تم استخدام عناصر ديكورية مخصصة وتصميم داخلي فني لخلق أجواء فاخرة ودافئة تعكس الضيافة العربية الأصيلة.'
        : 'Interior design and decoration project for a luxury hotel lobby in Jeddah, focusing on creating a stunning first impression for guests. Custom decorative elements and artistic interior design were used to create a luxurious and warm atmosphere that reflects authentic Arabian hospitality.',
      year: '2025',
      category: isRTL ? 'ضيافة فاخرة' : 'Luxury Hospitality',
      client: isRTL ? 'مجموعة فنادق الشرق' : 'East Hotels Group',
      location: isRTL ? 'جدة، المملكة العربية السعودية' : 'Jeddah, Saudi Arabia',
      mainImage: '/projects-page/hotel/IMG_7388-1-scaled.jpg',
      gallery: [
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.21-PM-1.jpg',
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.21-PM.jpg',
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.19-PM-1.jpg',
        '/projects-page/hotel/WhatsApp-Image-2025-04-20-at-8.59.19-PM.jpg',
        '/projects-page/hotel/property-image_7H9Bo1ONxZFC0Tl.jpg',
        '/projects-page/hotel/IMG_7398-scaled.jpg',
        '/projects-page/hotel/IMG_7397-scaled.jpg',
        '/projects-page/hotel/25.jpg',
      ],
      details: [
        {
          title: isRTL ? 'التصميم المركزي للبهو' : 'Central Lobby Design',
          content: isRTL
            ? 'تم تصميم وتنفيذ منطقة استقبال مركزية مخصصة لتكون نقطة محورية في البهو، مما يعكس فخامة وأناقة الفندق من خلال التصميم الداخلي المتميز.'
            : 'A custom central reception area was designed and implemented to be a focal point in the lobby, reflecting the luxury and elegance of the hotel through distinguished interior design.'
        },
        {
          title: isRTL ? 'ديكور الجدران والأسقف' : 'Wall and Ceiling Decor',
          content: isRTL
            ? 'تم استخدام ديكورات جدارية وسقفية فنية لخلق عمق وإضافة لمسات من الدفء والفخامة إلى المساحة مع مراعاة الطابع المعماري.'
            : 'Artistic wall and ceiling decorations were used to create depth and add touches of warmth and luxury to the space while respecting the architectural character.'
        },
        {
          title: isRTL ? 'تصميم مناطق الجلوس' : 'Seating Area Design',
          content: isRTL
            ? 'تم تصميم مناطق جلوس متنوعة ومريحة تلبي احتياجات النزلاء المختلفة، مع اختيار أثاث فاخر وترتيب يخلق أجواء دافئة ومريحة.'
            : 'Various and comfortable seating areas were designed to meet different guest needs, with luxury furniture selection and arrangement that creates a warm and comfortable atmosphere.'
        }
      ]
    },
    'interior-design': {
      title: isRTL ? 'قصر ملكي فاخر' : 'Royal Luxury Palace',
      subtitle: isRTL ? 'نيوم، المملكة العربية السعودية' : 'Neom, Saudi Arabia',
      description: isRTL
        ? 'مشروع تصميم داخلي وديكور لقصر ملكي فاخر في نيوم يجمع بين الأناقة العصرية والعناصر التراثية الأصيلة. تم التركيز على استخدام مواد طبيعية فاخرة وتصميم داخلي متخصص لإبراز جمال وفخامة المساحات المختلفة.'
        : 'Interior design and decoration project for a royal luxury palace in Neom that combines modern elegance with authentic heritage elements. The focus was on using premium natural materials and specialized interior design to enhance the beauty and luxury of different spaces.',
      year: '2024',
      category: isRTL ? 'قصر ملكي' : 'Royal Palace',
      client: isRTL ? 'العائلة الملكية' : 'Royal Family',
      location: isRTL ? 'نيوم، ذا لاين' : 'Neom, The LINE',
      mainImage: '/projects-page/Interior/incover.jpg',
      gallery: [
        '/projects-page/Interior/incover.jpg',
        '/projects-page/Interior/Interior1.jpg',
        '/projects-page/Interior/Interior2.jpg',
        '/projects-page/Interior/Interior3.1.jpg',
        '/projects-page/Interior/Interior3.jpg',
        '/projects-page/Interior/Interior5.jpg',
        '/projects-page/Interior/18.jpg',
      ],
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