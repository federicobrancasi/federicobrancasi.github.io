import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-portfolio">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-portfolio-muted mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="inline-flex items-center glass text-portfolio-primary px-6 py-3 rounded-full font-medium transition-all duration-300 hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
