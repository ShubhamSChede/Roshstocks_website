// "use client";

// import React, { useState, useEffect, useCallback } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const PageFlipTransition = ({ children, route }) => {
//   const [isVisible, setIsVisible] = useState(true);

//   // Improved page variants with more nuanced animation
//   const pageVariants = {
//     initial: { 
//       rotateY: 90,
//       opacity: 0,
//       scale: 0.9,
//       transformOrigin: 'center right'
//     },
//     in: { 
//       rotateY: 0,
//       opacity: 1,
//       scale: 1,
//       transformOrigin: 'center right',
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 25,
//         duration: 3.0
//       }
//     },
//     out: { 
//       rotateY: -90,
//       opacity: 0,
//       scale: 0.9,
//       transformOrigin: 'center left',
//       transition: {
//         type: "spring",
//         stiffness: 300,
//         damping: 25,
//         duration: 3.0
//       }
//     }
//   };

//   // Use useCallback to memoize the effect
//   const handleRouteChange = useCallback(() => {
//     setIsVisible(false);
//     // Slight delay to ensure smooth transition
//     const timer = setTimeout(() => {
//       setIsVisible(true);
//     }, 300);
//     return () => clearTimeout(timer);
//   }, []);

//   useEffect(() => {
//     handleRouteChange();
//   }, [route, handleRouteChange]);

//   return (
//     <AnimatePresence mode="wait">
//       {isVisible && (
//         <motion.div
//           key={route}
//           initial="initial"
//           animate="in"
//           exit="out"
//           variants={pageVariants}
//           className="w-full h-full overflow-hidden"
//         >
//           {children}
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// };

// // Wrapper component for page layout
// const PageLayout = ({ children }) => {
//   const [currentRoute, setCurrentRoute] = useState(typeof window !== 'undefined' ? window.location.pathname : '/');

//   useEffect(() => {
//     const handleRouteChange = () => {
//       setCurrentRoute(window.location.pathname);
//     };

//     // Use popstate and custom event for more robust route tracking
//     window.addEventListener('popstate', handleRouteChange);
//     window.addEventListener('custom-route-change', handleRouteChange);

//     return () => {
//       window.removeEventListener('popstate', handleRouteChange);
//       window.removeEventListener('custom-route-change', handleRouteChange);
//     };
//   }, []);

//   return (
//     <PageFlipTransition route={currentRoute}>
//       {children}
//     </PageFlipTransition>
//   );
// };

// export default PageLayout;

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoaderTransition = ({ children, route }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  // Page variants for smooth transition animations
  const pageVariants = {
    initial: {
      opacity: 0,
      scale: 0.9,
      y: 30,
    },
    in: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 150,
        damping: 20,
        duration: 0.8,
      },
    },
    out: {
      opacity: 0,
      scale: 0.95,
      y: -30,
      transition: {
        type: "tween",
        ease: "easeInOut",
        duration: 0.5,
      },
    },
  };

  // Loader animation variants
  const loaderVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
    },
    animate: {
      opacity: 1,
      scale: 1,
      rotate: [0, 360],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.5,
      },
    },
  };

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsVisible(true);
    }, 1500); // Loader duration
    return () => clearTimeout(timer);
  }, [route]);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="flex items-center justify-center w-full h-full bg-red-950 text-white fixed z-50"
          initial="initial"
          animate="animate"
          exit="exit"
          variants={loaderVariants}
        >
          <div className="loader-circle" />
        </motion.div>
      ) : (
        isVisible && (
          <motion.div
            key={route}
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            className="w-full h-full"
          >
            {children}
          </motion.div>
        )
      )}
    </AnimatePresence>
  );
};

// Page layout component
const PageLayout = ({ children }) => {
  const [currentRoute, setCurrentRoute] = useState(
    typeof window !== "undefined" ? window.location.pathname : "/"
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentRoute(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("custom-route-change", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("custom-route-change", handleRouteChange);
    };
  }, []);

  return <LoaderTransition route={currentRoute}>{children}</LoaderTransition>;
};

export default PageLayout;
