// import React from 'react';
// import { motion } from "framer-motion";

// const Timeline = () => {
//   const steps = [
//     { title: "Step 1", description: "Choose your product" },
//     { title: "Step 2", description: "Add to cart" },
//     { title: "Step 3", description: "Enter shipping details" },
//     { title: "Step 4", description: "Review and place order" },
//     { title: "Step 5", description: "Order confirmation" },
//     { title: "Step 6", description: "Track your order" },
//   ];

//   return (
//     <div className="relative w-full px-4 py-8 overflow-visible">
//       {/* Vertical Timeline for Mobile */}
//       <div className="md:hidden">
//         <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-red-800 to-red-950"></div>
//         {steps.map((step, index) => (
//           <motion.div
//             key={index}
//             className="relative flex items-start mb-8 pl-16 group"
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//           >
//             {/* Vertical Connector Line */}
//             <div className={`absolute left-1 top-10 w-1 bg-gradient-to-b from-red-800 to-red-950 
//               ${index === steps.length - 1 ? 'h-0' : 'h-full'}`}></div>
            
//             {/* Step Circle */}
//             <motion.div 
//               className="absolute -left-3 top-2 w-10 h-10 bg-red-950 rounded-full flex items-center justify-center 
//                 text-white font-semibold z-10 shadow-lg group-hover:scale-110 transition-transform"
//               whileHover={{ rotate: 360 }}
//               transition={{ duration: 0.5 }}
//             >
//               {index + 1}
//             </motion.div>
            
//             {/* Step Content */}
//             <motion.div 
//               className="bg-white shadow-xl rounded-lg p-5 w-full border-l-4 border-red-950 
//                 group-hover:translate-x-2 transition-transform duration-300"
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//             >
//               <h3 className="text-lg font-bold text-red-950 mb-2">{step.title}</h3>
//               <p className="text-sm text-gray-700">{step.description}</p>
//             </motion.div>
//           </motion.div>
//         ))}
//       </div>

//       {/* Horizontal Timeline for Desktop */}
//       <div className="hidden md:block relative">
//         {/* Main Horizontal Line */}
//         <div className="absolute left-0 right-0 top-16 h-1 bg-red-950"></div>
        
//         <div className="flex justify-between relative">
//           {steps.map((step, index) => (
//             <motion.div
//               key={index}
//               className={`relative w-1/6 flex flex-col items-center 
//                 ${index % 2 === 0 ? 'top-0' : 'top-16'}`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//             >
              
//               {/* Step Circle */}
//               <motion.div 
//                 className="w-16 h-16 bg-red-950 rounded-full flex items-center justify-center 
//                   text-white font-semibold mb-4 z-10 shadow-2xl"
//                 whileHover={{ scale: 1.1, rotate: 360 }}
//                 transition={{ duration: 0.5 }}
//               >
//                 {index + 1}
//               </motion.div>
              
//               {/* Step Content */}
//               <div className="text-center mb-20">
//                 <h3 className="text-lg font-bold text-red-950">{step.title}</h3>
//                 <p className="text-sm text-gray-700">{step.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Timeline;
// components/StepsFlow.js
// components/StepsFlow.js
import { FaCogs, FaClipboardCheck, FaShoppingCart, FaCheckCircle, FaRocket } from 'react-icons/fa';

const Timeline = () => {
  const steps = [
    { name: 'Design & Selection', icon: <FaCogs />, color: 'text-green-500', border: 'border-green-500' },
    { name: 'Consultation & Estimate', icon: <FaClipboardCheck />, color: 'text-blue-500', border: 'border-blue-500' },
    { name: 'Placing Order', icon: <FaShoppingCart />, color: 'text-purple-500', border: 'border-purple-500' },
    { name: 'Approval', icon: <FaCheckCircle />, color: 'text-red-500', border: 'border-red-500' },
    { name: 'Payoff & Delivery', icon: <FaRocket />, color: 'text-yellow-500', border: 'border-yellow-500' },
  ];

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mx-auto p-4 max-w-6xl">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center flex-col md:flex-row">
          {/* Step Circle */}
          <div
            className={`flex items-center justify-center w-16 h-16 rounded-full border-4 ${step.border} ${step.color} bg-white shadow-md`}
          >
            <span className="text-2xl">{step.icon}</span>
          </div>

          {/* Step Text */}
          <div className="text-center md:mt-0 mt-2 md:ml-2">
            <p className="text-sm font-medium mt-2 md:mt-0">{step.name}</p>
          </div>

          {/* Decorative Line (skip on last step) */}
          {index < steps.length - 1 && (
            <div className="hidden md:flex w-24 h-2 bg-gradient-to-r from-gray-300 to-gray-400 mx-2 rounded-full"></div>
          )}

          {/* Responsive Line for small screens */}
          {index < steps.length - 1 && (
            <div className="md:hidden w-1 h-12 bg-gradient-to-b from-gray-300 to-gray-400 my-2 rounded-full"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
