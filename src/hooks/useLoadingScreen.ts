import { useState, useCallback } from 'react';

export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    handleLoadingComplete
  };
};