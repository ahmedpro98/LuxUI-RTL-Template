import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

interface LanguageTransitionOverlayProps {
    isVisible: boolean;
}

/**
 * Full-screen overlay shown during language transitions
 * Displays animated loading spinner and text while language changes
 */
const LanguageTransitionOverlay: React.FC<LanguageTransitionOverlayProps> = ({ isVisible }) => {
    const { language } = useLanguage();

    // Loading text in current language
    const loadingText = language === 'en' ? 'Changing language...' : 'جاري تغيير اللغة...';

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-background bg-opacity-95 backdrop-blur-sm z-50 flex flex-col items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-center"
                    >
                        <div className="mb-4">
                            {/* Rotating globe icon */}
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                                className="inline-block text-primary"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="40"
                                    height="40"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                                    <path d="m5 15 2-3"></path>
                                    <path d="M5 9h5"></path>
                                    <path d="m9 19 2-3"></path>
                                    <path d="M12.493 5.023 12 5l-.493.023C10.113 7.983 9 10.5 9 12s1.113 4.017 2.507 6.977L12 19l.493-.023C13.887 16.017 15 13.5 15 12s-1.113-4.017-2.507-6.977z"></path>
                                    <path d="M17 9h2"></path>
                                    <path d="m17 15 2 3"></path>
                                </svg>
                            </motion.div>
                        </div>

                        {/* Loading text with slide-up animation */}
                        <motion.p
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg font-medium text-neutral"
                        >
                            {loadingText}
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default LanguageTransitionOverlay;