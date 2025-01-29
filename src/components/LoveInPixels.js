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
    <section className="bg-white min-h-80 px-6 py-12">
      <motion.div
        ref={ref}
        className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8"
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
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight">
            <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-transparent bg-clip-text">
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