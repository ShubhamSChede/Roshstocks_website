import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedEnvelope from './AnimatedEnvelope';

const LoveInPixels = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const variants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative bg-white min-h-80 px-6 py-12 overflow-hidden">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/svt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        {/* Envelope - Left side on desktop, top on mobile */}
        <div className="w-full md:w-1/2 max-w-md mx-auto md:mx-0">
          <AnimatedEnvelope />
        </div>

        {/* Text content - Right side on desktop, bottom on mobile */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-7xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-pink-700 to-pink-900 text-transparent bg-clip-text">
              Love in Pixels
            </span>
          </h1>
          <p className="text-lg md:text-2xl text-gray-700 font-medium mt-4">
            Bookings Open
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveInPixels;