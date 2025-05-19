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

    // Setup the intersection observer
    const setupObserver = useCallback(() => {
        // Clean up existing observer
        if (observerRef.current && elementRef.current) {
            observerRef.current.unobserve(elementRef.current);
            observerRef.current.disconnect();
        }

        // Create new observer
        observerRef.current = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    setWasEverVisible(true);

                    // If once is false, we want to hide the element when it's out of view
                    if (!once) {
                        // Do nothing here, handled below
                    } else if (elementRef.current) {
                        // If once is true, we disconnect the observer once the element is visible
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

        // Start observing
        if (elementRef.current) {
            observerRef.current.observe(elementRef.current);
        }
    }, [threshold, once]);

    // Initial setup
    useEffect(() => {
        setupObserver();

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [setupObserver]);

    // Handle language changes
    useEffect(() => {
        if (transitionState === 'start') {
            // Language transition is starting - prepare elements
            if (!once || !wasEverVisible) {
                setIsVisible(false);
            }
        } else if (transitionState === 'complete') {
            // After language change is complete
            const timer = setTimeout(() => {
                // If element was already visible or should show once when visible,
                // check if it's in viewport now
                if (wasEverVisible || !once) {
                    if (elementRef.current) {
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

    // Determine animation class based on props
    const getAnimationClass = () => {
        if (animation === 'custom' && customAnimation) {
            return customAnimation;
        }
        return `scroll-animate-${animation}`;
    };

    // Handle staggered children
    const renderChildren = () => {
        if (!staggerChildren || !React.isValidElement(children)) {
            return children;
        }

        // Clone the children element to add stagger class
        return React.cloneElement(children, {
            // className: `${children.props.className || ''} stagger-list`,
        });
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
            `}
            style={{
                transitionDelay: delay > 0 ? `${delay}ms` : '0ms',
                ['data-visible' as any]: isVisible ? 'true' : 'false',
                ['data-animation' as any]: animation,
                ['data-language' as any]: language,
            }}
        >
            {renderChildren()}
        </div>
    );
};

export default ScrollObserver;