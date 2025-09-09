import { useState, useCallback, useEffect } from 'react';

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(() => {
    // Only show loading if this is the first visit to the site
    return !sessionStorage.getItem('hasVisited');
  });

  useEffect(() => {
    // Mark that the user has visited the site
    if (!sessionStorage.getItem('hasVisited')) {
      sessionStorage.setItem('hasVisited', 'true');
    }
  }, []);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    handleLoadingComplete
  };
};