import { useLocation } from "react-router-dom";
import { useEffect } from "react";

/**
 * NotFound component displays a 404 error page when users access invalid routes
 * Also logs the attempted route for debugging purposes
 */

const NotFound = () => {
  // Get current location to access the pathname
  const location = useLocation();

  // Log 404 error for debugging when component mounts or route changes
  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* 404 Error Title */}
        <h1 className="text-4xl font-bold mb-4">404</h1>
        {/* Error Message */}
        <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
        {/* Navigation Link Back to Home */}
        <a href="/" className="text-blue-500 hover:text-blue-700 underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;