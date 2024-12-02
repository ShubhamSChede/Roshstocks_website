import React from 'react';
import { motion } from 'framer-motion';

const JourneySection = () => {
  // Variants for the header animation
  const headerVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Line animation for the borders
  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  // Text animation variants
  const textVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: (index) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2, duration: 0.6 },
    }),
  };

  return (
    <section className="mb-16">
      {/* Header with Animated Lines */}
      <motion.h2
        className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariant}
      >
        <motion.span
          className="flex-grow border-t border-gray-800"
          variants={lineVariant}
        ></motion.span>
        <span className="mx-4">My Freelance Journey</span>
        <motion.span
          className="flex-grow border-t border-gray-800"
          variants={lineVariant}
        ></motion.span>
      </motion.h2>

      {/* Journey Content */}
      <motion.div
        className="bg-white p-6 rounded-lg shadow-md"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {[
          "My journey as a freelancer began in [year], driven by a desire to create impactful designs and the freedom to work on diverse projects. Over the years, I've had the privilege of working with clients from various industries, each project adding to my experience and skill set.",
          "The path hasn't always been smooth - from navigating client expectations to balancing multiple projects, there have been challenges. But each obstacle has been a learning opportunity, shaping me into the designer and entrepreneur I am today.",
          "Roshstocks is the culmination of this journey - a platform where I can share my expertise, creativity, and passion with a wider audience, helping others bring their visual ideas to life.",
        ].map((text, index) => (
          <motion.p
            key={index}
            className="text-lg text-gray-700 mb-4 last:mb-0"
            custom={index}
            variants={textVariant}
          >
            {text}
          </motion.p>
        ))}
      </motion.div>
    </section>
  );
};

export default JourneySection;

