import React from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  isRTL?: boolean;
}

/**
 * Service card component with hover effects and structured data
 * Displays service information with icon, title, and description
 */
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, isRTL = false }) => {
  return (
    <div
      className="bg-white p-5 md:p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-500 h-full transform"
      itemScope
      itemType="https://schema.org/Service"
    >
      <div className={`flex flex-col ${isRTL ? 'items-end text-right' : 'items-start text-left'}`}>
        {/* Icon with hover scale effect */}
        <div className="mb-4 text-primary bg-primary/10 p-3 rounded-full transform transition-transform duration-300 hover:scale-110">
          {icon}
        </div>

        {/* Service title with structured data */}
        <h3
          className="text-lg md:text-xl font-semibold text-neutral mb-2"
          itemProp="name"
        >
          {title}
        </h3>

        {/* Service description with structured data */}
        <p
          className="text-gray-600 text-sm md:text-base"
          itemProp="description"
        >
          {description}
        </p>

        {/* Hidden structured data for SEO */}
        <meta itemProp="provider" content="هبات ايست | Hebat East" />
        <meta itemProp="areaServed" content="المملكة العربية السعودية | Saudi Arabia" />
      </div>
    </div>
  );
};

export default ServiceCard;