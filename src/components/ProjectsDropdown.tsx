import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

/**
 * Desktop dropdown menu for projects navigation
 * Displays with smooth animations and RTL/LTR support
 */
export const ProjectsDropdown: React.FC = () => {
    const { isRTL } = useLanguage();

    // Available projects with bilingual titles
    const projects = [
        {
            id: 'luxury-villa',
            title: isRTL ? 'تصميم فيلا فاخرة' : 'Luxury villa',
            path: '/projects/luxury-villa',
        },
        {
            id: 'Interior',
            title: isRTL ? "تصماميم داخلية" : 'Interior Design',
            path: '/projects/interior-design',
        }
    ];

    return (
        <motion.div
            className={`absolute ${isRTL ? 'right-0' : 'left-0'} mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50 overflow-hidden`}
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{
                opacity: 1,
                y: 0,
                height: 'auto',
                transition: {
                    duration: 0.3,
                    ease: "easeOut"
                }
            }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            style={{ transformOrigin: 'top' }}
        >
            <div className="py-3" role="menu" aria-orientation="vertical">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, x: isRTL ? 10 : -10 }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.2,
                                delay: index * 0.05, // Stagger animation
                                ease: "easeOut"
                            }
                        }}
                    >
                        <Link
                            to={project.path}
                            className="block px-4 py-3 text-sm text-neutral hover:bg-surface hover:text-primary transition-colors duration-200"
                            role="menuitem"
                        >
                            <div className="flex items-center space-x-2">
                                {/* Project indicator dot */}
                                <span className={`w-1.5 h-1.5 rounded-full bg-primary ${isRTL ? 'order-last mr-2' : 'order-first'}`}></span>
                                <span className={isRTL ? 'mr-0' : 'ml-0'}>{project.title}</span>
                            </div>
                        </Link>
                    </motion.div>
                ))}

                {/* Separator line */}
                <div className="my-1 border-t border-gray-100"></div>

                {/* View all projects link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            delay: 0.2,
                        }
                    }}
                >
                    <Link
                        to="/projects"
                        className="block px-4 py-3 text-sm text-primary hover:bg-primary hover:text-white transition-colors duration-200 font-medium"
                        role="menuitem"
                    >
                        {isRTL ? 'عرض كل المشروعات' : 'View All Projects'}
                    </Link>
                </motion.div>
            </div>
        </motion.div>
    );
};