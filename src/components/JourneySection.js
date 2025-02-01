import React from 'react';
import { motion } from 'framer-motion';

const JourneySection = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  const lineVariant = {
    hidden: { scaleX: 0 },
    visible: { 
      scaleX: 1,
      transition: { duration: 0.6 } 
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const journeyTexts = [
    {
      year: "[year]",
      content: "My journey as a freelancer began in [year], driven by a desire to create impactful designs and the freedom to work on diverse projects."
    },
    {
      year: "Growth",
      content: "The path hasn't always been smooth - from navigating client expectations to balancing multiple projects, each obstacle has been a learning opportunity."
    },
    {
      year: "Present",
      content: "Roshstocks is the culmination of this journey - a platform where I can share my expertise and creativity with a wider audience."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-2xl font-light text-gray-900 mb-12 flex items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <motion.span
            className="flex-grow border-t border-gray-200"
            variants={lineVariant}
          />
          <span className="mx-4">Journey</span>
          <motion.span
            className="flex-grow border-t border-gray-200"
            variants={lineVariant}
          />
        </motion.h2>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-12"
        >
          {journeyTexts.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="group flex gap-8 items-start"
            >
              <span className="text-sm font-mono text-gray-400 pt-1 w-16">
                {item.year}
              </span>
              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed">
                  {item.content}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default JourneySection;