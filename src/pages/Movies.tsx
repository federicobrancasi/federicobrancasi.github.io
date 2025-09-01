import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import { createAnimationProps, createInitialProps, getAnimationDelay } from '@/utils/animations';

const MOVIES = [
  {
    id: 1,
    title: 'Arrival',
    poster: '/movies/Arrival.jpg',
    description: 'A thought-provoking sci-fi masterpiece about communication, time, and the nature of language.'
  },
  {
    id: 2,
    title: 'Tenet',
    poster: '/movies/Tenet.jpg',
    description: 'A mind-bending thriller that plays with time inversion and the nature of causality.'
  }
];

const Movies: React.FC = () => {
  const [currentMovie, setCurrentMovie] = useState(MOVIES[0]);

  const getRandomMovie = () => {
    const randomIndex = Math.floor(Math.random() * MOVIES.length);
    setCurrentMovie(MOVIES[randomIndex]);
  };

  useEffect(() => {
    // Set a random movie on component mount
    getRandomMovie();
  }, []);

  return (
    <Layout showParticles={false}>
      <div className="max-w-4xl mx-auto -mt-16 sm:mt-0">

        {/* Movie Display */}
        <motion.div
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(1))}
          className="flex flex-col items-center mb-2"
        >
          <div className="relative mb-6 max-w-sm">
            <img
              src={currentMovie.poster}
              alt={`${currentMovie.title} poster`}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>
          
          <div className="text-center max-w-md">
            <h2 className="text-2xl sm:text-3xl font-semibold text-portfolio-primary mb-3">
              {currentMovie.title}
            </h2>
            <p className="text-portfolio-muted text-sm sm:text-base leading-relaxed mb-4">
              {currentMovie.description}
            </p>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={createInitialProps()}
          animate={createAnimationProps(1, getAnimationDelay(2))}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button
            onClick={getRandomMovie}
            variant="outline"
            size="lg"
            className="gap-2 bg-portfolio-primary/10 border-portfolio-primary/30 hover:bg-portfolio-primary/20 hover:border-portfolio-primary/50 transition-colors touch-manipulation"
          >
            <RefreshCw className="w-4 h-4" />
            Another Recommendation
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            asChild
            className="gap-2 bg-portfolio-primary/10 border-portfolio-primary/30 hover:bg-portfolio-primary/20 hover:border-portfolio-primary/50 transition-colors touch-manipulation"
          >
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>
        </motion.div>
      </div>
    </Layout>
  );
};

export default Movies;