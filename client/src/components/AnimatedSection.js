import React, { useEffect, useRef } from 'react';

const AnimatedSection = ({ 
  children, 
  animationClass = 'fade-in', 
  threshold = 0.1, 
  rootMargin = '0px 0px -50px 0px',
  className = '',
  ...props 
}) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return (
    <div 
      ref={sectionRef} 
      className={`${animationClass} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection; 