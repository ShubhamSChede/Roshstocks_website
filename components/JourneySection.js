// components/JourneySection.js
import React from 'react';

const JourneySection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center justify-center">
        <span className="flex-grow border-t border-gray-800"></span>
        <span className="mx-4">My Freelance Journey</span>
        <span className="flex-grow border-t border-gray-800"></span>
      </h2>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-4">
          My journey as a freelancer began in [year], driven by a desire to create impactful designs and the freedom to work on diverse projects.
          Over the years, I've had the privilege of working with clients from various industries, each project adding to my experience and skill set.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          The path hasn't always been smooth - from navigating client expectations to balancing multiple projects, there have been challenges.
          But each obstacle has been a learning opportunity, shaping me into the designer and entrepreneur I am today.
        </p>
        <p className="text-lg text-gray-700">
          Roshstocks is the culmination of this journey - a platform where I can share my expertise, creativity, and passion with a wider audience,
          helping others bring their visual ideas to life.
        </p>
      </div>
    </section>
  );
};

export default JourneySection;
