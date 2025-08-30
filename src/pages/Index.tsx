import React from 'react';
import { AnimatePresence } from 'motion/react';
import { Layout } from '@/components/layout';
import { HeroSection } from '@/components/hero';
import { LoadingScreen } from '@/components/loading';
import { useLoadingScreen } from '@/hooks/useLoadingScreen';

const Index: React.FC = () => {
  const { isLoading, handleLoadingComplete } = useLoadingScreen();

  return (
    <>
      {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
      
      <AnimatePresence>
        {!isLoading && (
          <Layout>
            <HeroSection />
          </Layout>
        )}
      </AnimatePresence>
    </>
  );
};

export default Index;
