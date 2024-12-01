import React from "react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, title: "Step 1", description: "Choose your product", icon: "📱" },
  { id: 2, title: "Step 2", description: "Add to cart", icon: "☁️" },
  { id: 3, title: "Step 3", description: "Enter shipping details", icon: "📊" },
  { id: 4, title: "Step 4", description: "Review and place order", icon: "📷" },
  { id: 5, title: "Step 5", description: "Order confirmation", icon: "📧" },
  { id: 6, title: "Step 6", description: "Track your order", icon: "📄" },
];

const Timeline = () => {
  return (
    <div className="pb-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 w-full">
          {steps.map((step, index) => (
            <Step key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const Step = ({ step, index }) => {
  return (
    <motion.div
      className="relative aspect-square flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.6 }}
      whileInView={{ 
        opacity: 1, 
        scale: 1,
        transition: { 
          type: "spring", 
          stiffness: 300, 
          damping: 20 
        }
      }}
      viewport={{ 
        once: false, // Allow multiple triggers
        amount: 0.2 // Trigger when 20% of the element is in view
      }}
      transition={{ 
        delay: index * 0.4, 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }}
    >
      {/* Hexagon Background */}
      <div 
        className="absolute inset-0 bg-red-950 opacity-90"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      />

      {/* Hexagon Content Container */}
      <div 
        className="relative z-10 flex flex-col items-center justify-center w-full h-full p-4 text-center"
        style={{
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
        }}
      >
        {/* Hexagonal Icon */}
        <motion.div 
          className="w-16 h-16 flex items-center justify-center text-3xl font-bold bg-white text-gray-800 mb-2 shadow-2xl"
          style={{
            clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          }}
          whileHover={{ 
            rotate: 360,
            scale: 1.1,
            transition: { duration: 0.5 }
          }}
        >
          {step.icon}
        </motion.div>

        {/* Step Content */}
        <h3 className="text-base font-bold text-white mb-1">{step.title}</h3>
        <p className="text-xs text-white opacity-80 leading-tight">{step.description}</p>
      </div>
    </motion.div>
  );
};

export default Timeline;