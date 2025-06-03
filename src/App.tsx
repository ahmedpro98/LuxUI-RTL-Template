/**
 * Main Application Component
 * Handles routing, providers, and global UI elements
 */

import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// UI Components
import { Toaster } from "./components/ui/toaster";
import { Toaster as Sonner } from "./components/ui/sonner";
import { TooltipProvider } from "./components/ui/tooltip";

// Page Components
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import NotFound from "./pages/NotFound";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import BackToTopButton from "./components/BackToTopButton";

// Context Providers
import { LanguageProvider, useLanguage } from "./context/LanguageContext";

// React Query configuration
const queryClient = new QueryClient();

/**
 * Main Content Wrapper
 * Handles language transition animations and routing
 */
const MainContent = () => {
  const { isTransitioning } = useLanguage();

  return (
    <main className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<ProjectDetail />} />
        <Route path="/contact" element={<Contact />} />
        {/* Catch-all route for 404 pages */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

/**
 * Root Application Component
 * Sets up all providers and global layout structure
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast notification systems */}
      <Toaster />
      <Sonner />

      <LanguageProvider>
        <BrowserRouter>
          {/* Global layout structure */}
          <Navbar />
          <MainContent />
          <Footer />

          {/* Floating action buttons */}
          <WhatsAppButton />
          <BackToTopButton />
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;