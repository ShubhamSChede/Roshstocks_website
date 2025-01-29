import { motion, useAnimation } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const StatsStrip = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          controls.start({
            count: 500,
            transition: { duration: 2, ease: 'easeOut' },
          });
        }
      },
      {
        threshold: 0.1,
      }
    );
  
    const currentRef = sectionRef.current;
  
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [controls, isVisible]);

  return (
    <div 
      ref={sectionRef}
      className="w-full bg-gradient-to-r from-[#C8A2C8] to-[#FFB6C1] py-8 mb-10"
    >
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center lg:text-left gap-8">
        
        {/* First Stat */}
        <motion.div
          className="text-2xl lg:text-3xl font-bold px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Trusted by{' '}
          <motion.span
            className="text-5xl lg:text-6xl text-red-600"
            animate={controls}
            initial={{ count: 0 }}
            onUpdate={(latest) => isVisible && setCount(Math.round(latest.count))}
          >
            {count}
            +
          </motion.span>
          <span className="lg:hidden">
            <br />
          </span>
          Happy Clients!
        </motion.div>

        {/* Second Stat */}
        <motion.div
          className="text-lg lg:text-xl font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: isVisible ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          We&apos;ve created{' '}
          <span className="font-bold text-red-600">1000+</span> Stunning
          Designs and crafted{' '}
          <span className="font-bold text-red-600">750+</span> Unique Wedding
          Invites.
        </motion.div>
      </div>
    </div>
  );
};

export default StatsStrip;
