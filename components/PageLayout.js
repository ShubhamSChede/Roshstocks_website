"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PageFlipTransition = ({ children, route }) => {
  const [isVisible, setIsVisible] = useState(true);

  // Improved page variants with more nuanced animation
  const pageVariants = {
    initial: { 
      rotateY: 90,
      opacity: 0,
      scale: 0.9,
      transformOrigin: 'center right'
    },
    in: { 
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transformOrigin: 'center right',
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 25,
        duration: 3.0
      }
    },
    out: { 
      rotateY: -90,
      opacity: 0,
      scale: 0.9,
      transformOrigin: 'center left',
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
        duration: 3.0
      }
    }
  };

  // Use useCallback to memoize the effect
  const handleRouteChange = useCallback(() => {
    setIsVisible(false);
    // Slight delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    handleRouteChange();
  }, [route, handleRouteChange]);

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          key={route}
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
          className="w-full h-full overflow-hidden"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Wrapper component for page layout
const PageLayout = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    // Use popstate and custom event for more robust route tracking
    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('custom-route-change', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('custom-route-change', handleRouteChange);
    };
  }, []);

  return (
    <PageFlipTransition route={currentRoute}>
      {children}
    </PageFlipTransition>
  );
};

export default PageLayout;