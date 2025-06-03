import React, { useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: string;
  schemaType?: 'WebPage' | 'Organization' | 'LocalBusiness' | 'Product' | 'Service';
  breadcrumbs?: Array<{ name: string; url: string }>;
}

/**
 * SEO component that manages meta tags, structured data, and document head elements
 * Automatically updates based on language and route changes
 */
const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image = 'https://lovable.dev/opengraph-image-p98pqg.png',
  type = 'website',
  schemaType = 'WebPage',
  breadcrumbs = []
}) => {
  const { language, isRTL } = useLanguage();
  const location = useLocation();
  const currentUrl = `https://hibateast.com${location.pathname}`;

  // Default SEO content for both Arabic and English
  const defaultSEO = {
    ar: {
      title: 'هبات ايست - نجف وثريات فاخرة | تركيب وصيانة احترافية',
      description: 'هبات ايست متخصصة في تركيب وصيانة النجف والثريات الفاخرة للفنادق والقصور والمنازل. خدمات احترافية وتشكيلة واسعة من أفخم الثريات',
      keywords: 'هبات ايست, نجف, ثريات, تركيب نجف, صيانة نجف, فنادق, قصور, ديكور فاخر, اضاءة, شراء نجف, تركيب ثريات, جدة, السعودية',
      siteName: 'هبات ايست'
    },
    en: {
      title: 'Hibat East - Luxury Chandeliers | Professional Installation & Maintenance',
      description: 'Hibat East specializes in luxury chandelier installation and maintenance for hotels, palaces, and homes. Professional services and wide selection of premium chandeliers',
      keywords: 'Hibat East, chandeliers, luxury lighting, chandelier installation, chandelier maintenance, hotels, palaces, luxury decor, lighting solutions, Jeddah, Saudi Arabia',
      siteName: 'Hibat East'
    }
  };

  const seoData = defaultSEO[language];
  const finalTitle = title ? `${title} | ${seoData.siteName}` : seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;

  // Build JSON-LD structured data for search engines
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: seoData.siteName,
    description: finalDescription,
    url: currentUrl,
    image: image,
    // Add business-specific data when schema type is LocalBusiness
    ...(schemaType === 'LocalBusiness' && {
      '@type': 'LocalBusiness',
      name: seoData.siteName,
      image: image,
      telephone: '+966 50 000 0000',
      email: 'info@hebateast.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'King Faisal Road',
        addressLocality: 'Jeddah',
        addressCountry: 'SA'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '21.584524972944244',
        longitude: '39.18417487554701'
      },
      openingHours: 'Mo-Su 09:00-22:00',
      priceRange: '$$$',
      seriesAreaServed: 'Saudi Arabia'
    }),
    // Add breadcrumb navigation data when breadcrumbs exist
    ...(breadcrumbs.length > 0 && {
      breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: `https://hibateast.com${crumb.url}`
        }))
      }
    })
  };

  /**
   * Creates or updates meta tags in document head
   * @param name - Meta tag name or property
   * @param content - Meta tag content
   * @param property - Whether to use property attribute instead of name
   */
  const updateMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
    let meta = document.querySelector(selector) as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement('meta');
      if (property) {
        meta.setAttribute('property', name);
      } else {
        meta.setAttribute('name', name);
      }
      document.head.appendChild(meta);
    }
    meta.setAttribute('content', content);
  };

  /**
   * Creates or updates link tags in document head
   * @param rel - Link relationship (canonical, alternate, preconnect, etc.)
   * @param href - Link URL
   * @param additional - Additional attributes to set on the link
   */
  const updateLinkTag = (rel: string, href: string, additional?: Record<string, string>) => {
    let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;

    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', rel);
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);

    if (additional) {
      Object.entries(additional).forEach(([key, value]) => {
        link.setAttribute(key, value);
      });
    }
  };

  /**
   * Updates JSON-LD structured data script in document head
   * Removes existing script and adds new one to prevent duplicates
   */
  const updateStructuredData = () => {
    // Remove existing structured data
    const existingScript = document.querySelector('script[type="application/ld+json"]');
    if (existingScript) {
      existingScript.remove();
    }

    // Add new structured data
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);
  };

  // Update all SEO elements when dependencies change
  useEffect(() => {
    // Update page title
    document.title = finalTitle;

    // Set document language and direction
    document.documentElement.setAttribute('lang', language);
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr');

    // Update core meta tags
    updateMetaTag('description', finalDescription);
    updateMetaTag('keywords', finalKeywords);
    updateMetaTag('author', seoData.siteName);
    updateMetaTag('robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow');

    // Update social media meta tags (Open Graph)
    updateMetaTag('og:title', finalTitle, true);
    updateMetaTag('og:description', finalDescription, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', currentUrl, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:alt', finalTitle, true);
    updateMetaTag('og:site_name', seoData.siteName, true);
    updateMetaTag('og:locale', language === 'ar' ? 'ar_SA' : 'en_US', true);
    updateMetaTag('og:locale:alternate', language === 'ar' ? 'en_US' : 'ar_SA', true);

    // Update Twitter Card meta tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@hibateast');
    updateMetaTag('twitter:creator', '@hibateast');
    updateMetaTag('twitter:title', finalTitle);
    updateMetaTag('twitter:description', finalDescription);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', finalTitle);

    // Update mobile and app meta tags
    updateMetaTag('theme-color', '#D4AF37');
    updateMetaTag('msapplication-TileColor', '#D4AF37');
    updateMetaTag('application-name', seoData.siteName);
    updateMetaTag('apple-mobile-web-app-title', seoData.siteName);
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'default');
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('format-detection', 'telephone=no');

    // Set canonical URL
    updateLinkTag('canonical', currentUrl);

    // Set language alternatives for SEO
    updateLinkTag('alternate', currentUrl, { hreflang: 'ar' });
    updateLinkTag('alternate', currentUrl, { hreflang: 'en' });
    updateLinkTag('alternate', currentUrl, { hreflang: 'x-default' });

    // Preconnect to external resources for better performance
    updateLinkTag('preconnect', 'https://images.unsplash.com');
    updateLinkTag('preconnect', 'https://fonts.googleapis.com');
    updateLinkTag('preconnect', 'https://fonts.gstatic.com', { crossorigin: 'anonymous' });

    // Update structured data for search engines
    updateStructuredData();

  }, [finalTitle, finalDescription, finalKeywords, currentUrl, language, isRTL, seoData.siteName, image, type, structuredData]);

  // Component renders nothing - only manages document head
  return null;
};

export default SEOHead;