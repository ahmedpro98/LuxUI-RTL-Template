/**
 * Application Entry Point
 * Initializes React app and handles language/direction setup
 */

import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Mount React application
createRoot(document.getElementById("root")!).render(<App />);

/**
 * Language Direction Setup
 * Sets HTML attributes for RTL/LTR support on page load
 */
document.addEventListener('DOMContentLoaded', () => {
    // Get saved language preference or default to English
    const lang = localStorage.getItem('language') || 'en';

    // Set document direction and language attributes
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);
});