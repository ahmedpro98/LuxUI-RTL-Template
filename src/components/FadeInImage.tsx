import React, { useState } from 'react';

type Props = {
    src: string;
    alt: string;
    className?: string;
};

/**
 * Image component with smooth fade-in animation when loaded
 * Improves user experience by hiding images until fully loaded
 */
const FadeInImage: React.FC<Props> = ({ src, alt, className = '' }) => {
    // Track whether image has finished loading
    const [loaded, setLoaded] = useState(false);

    return (
        <img
            src={src}
            alt={alt}
            onLoad={() => setLoaded(true)} // Set loaded state when image loads
            className={`
        transition-opacity duration-700 ease-in-out 
        ${loaded ? 'opacity-100' : 'opacity-0'}
        ${className}
      `}
        />
    );
};

export default FadeInImage;