import React, { useEffect, useRef, useState, useCallback, ReactNode } from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface ScrollObserverProps {
    children: ReactNode;
    className?: string;
    animation?: 'fade-up' | 'fade-right' | 'fade-left' | 'scale' | 'custom';
    threshold?: number;
    delay?: number;
    stagger?: boolean;
    staggerChildren?: boolean;
    customAnimation?: string;
    once?: boolean;
}

/**
 * ScrollObserver - Provides scroll-triggered animations with RTL support
 * Monitors element visibility and applies animations when elements enter viewport
 * Handles language transitions and re-initialization of observers
 */
const ScrollObserver: React.FC<ScrollObserverProps> = ({
    children,
    className = '',
    animation = 'fade-up',
    threshold = 0.1,
    delay = 0,
    stagger = false,
    staggerChildren = false,
    customAnimation = '',
    once = true,
}) => {
    const elementRef = useRef<HTMLDivElement>(null);
    const observerRef = useRef<IntersectionObserver | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [wasEverVisible, setWasEverVisible] = useState(false);
    const { language, isLanguageChanging, transitionState } = useLanguage();

    /**
     * Sets up the intersection observer to monitor element visibility
     * Handles cleanup and re-initialization when configuration changes
     */
    const setupObserver = useCallback(() => {
        // Ensure IntersectionObserver is available
        if (typeof window === 'undefined' || !window.IntersectionObserver) {
            return;
        }

        // Clean up existing observer
        if (observerRef.current && elementRef.current) {
            observerRef.current.unobserve(elementRef.current);
            observerRef.current.disconnect();
        }

        // Create new observer with visibility tracking
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setWasEverVisible(true);

                    // Disconnect observer if animation should only run once
                    if (once && elementRef.current) {
                        observerRef.current?.disconnect();
                    }
                } else if (!once) {
                    // Only hide if we're not using "once" mode
                    setIsVisible(false);
                }
            },
            {
                threshold: threshold,
                rootMargin: '0px 0px -10% 0px'
            }
        );

        // Start observing the element
        if (elementRef.current) {
            observerRef.current.observe(elementRef.current);
        }
    }, [threshold, once]);

    // Initialize observer on component mount
    useEffect(() => {
        setupObserver();

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [setupObserver]);

    /**
     * Handles language changes and re-initialization of animations
     * Manages visibility state during language transitions
     */
    useEffect(() => {
        if (transitionState === 'start') {
            // Language transition is starting - prepare elements
            if (!once || !wasEverVisible) {
                setIsVisible(false);
            }
        } else if (transitionState === 'complete') {
            // After language change is complete
            const timer = setTimeout(() => {
                // Check if element should be visible after language change
                if (wasEverVisible || !once) {
                    if (elementRef.current && typeof window !== 'undefined') {
                        const rect = elementRef.current.getBoundingClientRect();
                        const isInViewport =
                            rect.top < window.innerHeight &&
                            rect.bottom > 0 &&
                            rect.left < window.innerWidth &&
                            rect.right > 0;

                        if (isInViewport) {
                            setIsVisible(true);
                        } else if (!once) {
                            setIsVisible(false);
                        }
                    }
                }

                // Reinitialize observer to account for layout changes
                setupObserver();
            }, 100);

            return () => clearTimeout(timer);
        }
    }, [language, transitionState, setupObserver, once, wasEverVisible]);

    /**
     * Determines animation class based on props
     * Returns appropriate CSS class for animation type
     */
    const getAnimationClass = () => {
        if (animation === 'custom' && customAnimation) {
            return customAnimation;
        }
        return `scroll-animate-${animation}`;
    };

    /**
     * Handles staggered children animations
     * Clones React elements to add stagger classes
     */
    const renderChildren = () => {
        if (!staggerChildren) {
            return children;
        }

        // Add stagger class to React elements
        if (React.isValidElement(children)) {
            const existingClassName = (children.props as any).className || '';
            return React.cloneElement(children, {
                className: `${existingClassName} stagger-list`,
            } as any);
        }

        return children;
    };

    // Create style object with transition delay
    const elementStyle: React.CSSProperties = {
        transitionDelay: delay > 0 ? `${delay}ms` : '0ms',
    };

    // Create data attributes for debugging and styling
    const dataAttributes = {
        'data-visible': isVisible ? 'true' : 'false',
        'data-animation': animation,
        'data-language': language,
    };

    return (
        <div
            ref={elementRef}
            className={`
                ${getAnimationClass()} 
                ${className} 
                ${isVisible ? 'visible' : ''}
                ${stagger ? 'stagger-item' : ''}
                ${isLanguageChanging ? 'language-transitioning' : ''}
            `.trim().replace(/\s+/g, ' ')}
            style={elementStyle}
            {...dataAttributes}
        >
            {renderChildren()}
        </div>
    );
};

export default ScrollObserver;