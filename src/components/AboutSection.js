import React from 'react';
import { motion } from 'framer-motion';
import AboutButtons from './AboutButtons';
import Image from 'next/image';

const AboutSection = () => {

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Variants for image animation
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  // Typing effect for name
  const typingEffect = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const typingLetter = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    
    <section className="mb-2 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        {/* Left Content */}
        <motion.div
          className="md:w-1/2 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Typing Animation for Name */}
          <motion.h2
            className="text-5xl mt-5 mx-1 font-bold  text-gray-900 flex"
            variants={typingEffect}
          >
            {'Roshani Chede'.split('').map((letter, index) => (
              <motion.span key={index} variants={typingLetter}>
                {letter}
              </motion.span>
            ))}
          </motion.h2>

                 {/*about buttons*/}
                    <AboutButtons />


          {/* Other Text Animations */}
          <motion.p
            className="text-3xl font-semibold text-gray-700 my-2 mx-1"
            variants={textVariant}
          >
            freelancer | computer engineer
          </motion.p>
          <motion.p
            className="text-m ml-1 text-gray-700"
            variants={textVariant}
          >
            I am a passionate freelancer and a computer engineer with a deep
            interest in technology and design. With my expertise in the field,
            I aim to create innovative solutions that help individuals and
            businesses thrive. My work is driven by creativity, precision, and
            a strong desire to deliver high-quality results.
          </motion.p>
        </motion.div>

        {/* Image Animation */}
        <motion.div
          className="md:w-1/2 px-2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
        >
          <Image
            src="/roshaniimage.jpg"
            alt="Roshani_chede_image"
            className="mb-6 border-4 shadow-lg w-full h-auto object-contain"
            width={500}
            height={300}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
