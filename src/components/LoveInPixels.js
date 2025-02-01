import React from 'react';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimatedEnvelope from './AnimatedEnvelope';
import Link from 'next/link';

// Updated WhatsApp component without absolute positioning
const WhatsappButton = () => {
  return (

    <div className="inline-block">
      <ul className="m-0 p-0 flex justify-center">
        <li className="list-none">
          <a 
            href="https://wa.me/message/YU52PAPPPJQDJ1" 
            className="group block relative w-16 h-16 md:w-20 md:h-20 leading-[64px] md:leading-[80px] 
              text-3xl md:text-4xl text-center text-gray-600 transition-colors duration-500 
              hover:text-[#25d366]"
          >
            {/* Top line */}
            <span className="absolute top-0 left-0 w-full h-[3px] bg-gray-600 
              origin-right transform transition-transform duration-500 
              group-hover:origin-left group-hover:scale-x-0
              group-hover:bg-[#25d366]" />
            
            {/* Left line */}
            <span className="absolute top-0 left-0 w-[3px] h-full bg-gray-600 
              origin-bottom transform scale-y-0 transition-transform duration-500 
              group-hover:origin-top group-hover:scale-y-100
              group-hover:bg-[#25d366]" />
            
            {/* Bottom line */}
            <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gray-600 
              origin-left transform transition-transform duration-500 
              group-hover:origin-right group-hover:scale-x-0
              group-hover:bg-[#25d366]" />
            
            {/* Right line */}
            <span className="absolute top-0 right-0 w-[3px] h-full bg-gray-600 
              origin-top transform scale-y-0 transition-transform duration-500 
              group-hover:origin-bottom group-hover:scale-y-100
              group-hover:bg-[#25d366]" />
            
            {/* WhatsApp Icon */}
            <svg 
              viewBox="0 0 16 16" 
              className="bi bi-whatsapp inline-block w-8 h-8 md:w-10 md:h-10" 
              fill="currentColor" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>
        </li>
      </ul>
    </div>
 
  );
};

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
    <section className="relative bg-white min-h-60 px-6 py-12 overflow-hidden">
      {/* Background Image with Opacity */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/svt.jpg')",
          backgroundSize: "cover",
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.2
        }}
      />

      {/* Content */}
      <motion.div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8 h-full"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
      >
        <div className="w-full md:w-1/2 flex justify-center md:justify-start">
  <div className="max-w-md w-full flex justify-center">
    <AnimatedEnvelope />
  </div>
</div>

        {/* Text content - Right side on desktop, bottom on mobile */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight text-center md:text-left">
            <span className="bg-gradient-to-r from-pink-500 via-pink-700 to-pink-900 text-transparent bg-clip-text">
              Love in Pixels
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-700 font-medium">
            Bookings Open
          </p>
          
          <div className="mt-8 flex justify-center md:justify-start w-full">
            <WhatsappButton  />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LoveInPixels;