import React from 'react';
import { motion } from "framer-motion";

const Timeline = () => {
  const steps = [
    { title: "Step 1", description: "Choose your product" },
    { title: "Step 2", description: "Add to cart" },
    { title: "Step 3", description: "Enter shipping details" },
    { title: "Step 4", description: "Review and place order" },
    { title: "Step 5", description: "Order confirmation" },
    { title: "Step 6", description: "Track your order" },
  ];

  return (
    <div className="relative w-full px-4 py-8 overflow-visible">
      {/* Vertical Timeline for Mobile */}
      <div className="md:hidden">
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-800 to-red-950"></div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex items-start mb-8 pl-16 group"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Vertical Connector Line */}
            <div className={`absolute left-1 top-10 w-1 bg-gradient-to-b from-red-800 to-red-950 
              ${index === steps.length - 1 ? 'h-0' : 'h-full'}`}></div>
            
            {/* Step Circle */}
            <motion.div 
              className="absolute -left-3 top-2 w-10 h-10 bg-red-950 rounded-full flex items-center justify-center 
                text-white font-semibold z-10 shadow-lg group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              {index + 1}
            </motion.div>
            
            {/* Step Content */}
            <motion.div 
              className="bg-white shadow-xl rounded-lg p-5 w-full border-l-4 border-red-950 
                group-hover:translate-x-2 transition-transform duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="text-lg font-bold text-red-950 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-700">{step.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Horizontal Timeline for Desktop */}
      <div className="hidden md:block relative">
        {/* Main Horizontal Line */}
        <div className="absolute left-0 right-0 top-16 h-1 bg-red-950"></div>
        
        <div className="flex justify-between relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className={`relative w-1/6 flex flex-col items-center 
                ${index % 2 === 0 ? 'top-0' : 'top-16'}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              
              {/* Step Circle */}
              <motion.div 
                className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center 
                  text-white font-semibold mb-4 z-10 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                {index + 1}
              </motion.div>
              
              {/* Step Content */}
              <div className="text-center mb-20">
                <h3 className="text-lg font-bold text-red-950">{step.title}</h3>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;