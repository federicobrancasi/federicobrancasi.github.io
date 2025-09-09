import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const NotFound = () => {
  console.log("NotFound component is being rendered!");
  const location = useLocation();
  
  const funnyMessages = [
    "Unfortunately, I still haven't programmed this page",
    "Oops! This page is still in beta, just like my social skills",
    "Sorry, even ML researchers can't predict every URL",
    "This page is missing, much like my work-life balance",
    "Error: Page not found, just like my motivation on Monday mornings",
    "This page is still in my TODO list (along with everything else)",
    "This page is as empty as my inbox after a vacation",
    "This page is having an identity crisis",
    "This page has the same reliability as my WiFi connection",
    "Error: Page not implemented, just like half of my ideas"
  ];

  const [message] = useState(() => 
    funnyMessages[Math.floor(Math.random() * funnyMessages.length)]
  );

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
        <p className="text-xl text-portfolio-muted mb-6">{message}</p>
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