import React, { useEffect, useRef } from 'react';

const FloatingParticles: React.FC = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      
      const particleCount = 50;
      const container = particlesRef.current;
      
      // Clear existing particles
      container.innerHTML = '';
      
      for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
          position: absolute;
          width: 2px;
          height: 2px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          left: ${Math.random() * 100}%;
          animation: float-particles ${Math.random() * 10 + 15}s linear infinite;
          animation-delay: ${Math.random() * 20}s;
        `;
        container.appendChild(particle);
      }
    };

    createParticles();
  }, []);

  return (
    <div
      ref={particlesRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  );
};

export default FloatingParticles;