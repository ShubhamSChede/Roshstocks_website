// components/AboutSection.js
import React from 'react';

const AboutSection = () => {
  return (
    <section className="mb-2 w-full">
      <div className="flex flex-col md:flex-row items-center gap-8 w-full">
        <div className="md:w-1/2 px-4">
          <h2 className="text-6xl mt-5 font-bold mb-6 text-gray-900">Roshani Chede</h2>
          <p className="text-3xl text-gray-700 mb-4">freelancer | computer engineer</p>
          <p className="text-xl text-gray-700">
            I am a passionate freelancer and a computer engineer with a deep interest in technology and design. With my expertise in the field, I aim to create innovative solutions that help individuals and businesses thrive. My work is driven by creativity, precision, and a strong desire to deliver high-quality results.
          </p>
        </div>
        <div className="md:w-1/2 px-2">
          <img
            src="/roshaniimage.jpg"
            alt="Roshani_chede_image"
            className="mb-6 border-4 shadow-lg w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
