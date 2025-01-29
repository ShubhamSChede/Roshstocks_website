import React from 'react';

const AnimatedGuideButton = ({ href = "#", children = "View Guide" }) => {
  return (
    <div className="inline-block">
      <button className="relative bg-transparent border-0 p-0">
        <a 
          href={href}
          className="relative inline-block px-8 py-4 border-2 border-red-950 text-red-950 no-underline font-semibold text-lg uppercase transition-all duration-300 hover:text-white group"
        >
          {/* Background layer 1 - vertical animation */}
          <div className="absolute top-1.5 -left-0.5 w-[calc(100%+4px)] h-[calc(100%-12px)] bg-red-950 transition-transform duration-300 ease-in-out transform origin-top group-hover:scale-y-0" />
          
          {/* Background layer 2 - horizontal animation */}
          <div className="absolute left-1.5 -top-0.5 w-[calc(100%-12px)] h-[calc(100%+4px)] bg-red-950 transition-transform duration-300 ease-in-out transform origin-left delay-500 group-hover:scale-x-0" />
          
          {/* Text content */}
          <span className="relative z-10">
            {children}
          </span>
        </a>
      </button>
    </div>
  );
};

export default AnimatedGuideButton;