import React, { useEffect, useRef, ReactNode } from 'react';

interface ScrollObserverProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'scale';
    threshold?: number;
    delay?: number;
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({
    children,
    className = '',
    animation = 'fade-up',
    threshold = 0.1,
    delay = 0,
}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    if (elementRef.current) {
                        // Add animation classes when element is in view
                        setTimeout(() => {
                            if (elementRef.current) {
                                elementRef.current.classList.add('visible');
                                hasAnimated.current = true;
                            }
                        }, delay);
                    }
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -50px 0px'
            }
        );

        if (elementRef.current) {
            observer.observe(elementRef.current);
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current);
            }
        };
    }, [threshold, delay]);

    // Determine animation class based on prop
    const animationClass = `scroll-animate-${animation}`;

    return (
        <div
            ref={elementRef}
            className={`${animationClass} ${className}`}
            style={{ transitionDelay: delay > 0 ? `${delay}ms` : '0ms' }}
        >
            {children}
        </div>
    );
};

export default ScrollObserver;