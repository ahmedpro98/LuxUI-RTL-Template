import React, { useEffect, useRef, useState } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: string | number;
  height?: string | number;
  placeholderSrc?: string;
}

/**
 * Lazy loading image component with intersection observer
 * Only loads images when they're about to enter the viewport
 */
const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  placeholderSrc = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiNlZWVlZWUiLz48L3N2Zz4=',
}) => {
  // Track loading state and current image source
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState(placeholderSrc);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // Reset states when src prop changes
    setIsLoaded(false);
    setCurrentSrc(placeholderSrc);

    // Create intersection observer to watch when image enters viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && imgRef.current) {
            // Preload actual image before switching src
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setCurrentSrc(src);
              setIsLoaded(true);
            };
            // Stop observing once image starts loading
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px 0px', // Start loading 200px before image is visible
        threshold: .5, // Trigger when 50% of image is in viewport
      }
    );

    // Start observing the image element
    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, placeholderSrc]);

  return (
    <img
      ref={imgRef}
      src={currentSrc}
      alt={alt}
      className={`transition-opacity duration-500 ease-in-out ${isLoaded ? 'opacity-100' : 'opacity-70'} ${className}`}
      width={width}
      height={height}
      loading="lazy" // Native lazy loading as fallback
    />
  );
};

export default LazyImage;