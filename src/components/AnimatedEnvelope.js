import React from 'react';

const AnimatedEnvelope = () => {
  return (
    <div className="w-96 h-72">
      <style>
        {`
          @keyframes flapAnimation {
            0%, 100% { d: path('M50,75 L200,175 L350,75 L200,75 Z'); }
            50% { d: path('M50,75 L200,25 L350,75 L200,75 Z'); }
          }
          
          @keyframes letterAnimation {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-60px); }
          }
          
                    @keyframes heartAnimation {
            0%, 100% { 
                opacity: 0;
                transform: scale(0.7) translate(85px, 20px);
            }
            50% { 
                opacity: 1;
                transform: scale(0.7) translate(85px, -20px);
            }
            }


          
          .envelope-flap {
            animation: flapAnimation 7s ease-in-out infinite;
          }
          
          .letter {
            animation: letterAnimation 7s ease-in-out infinite;
          }

          .heart {
  animation: heartAnimation 7s ease-in-out infinite;
}
          
        `}
      </style>
      
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300">
        <defs>
          <linearGradient id="heartGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ec4899"/>
            <stop offset="50%" stopColor="#ef4444"/>
            <stop offset="100%" stopColor="#eab308"/>
          </linearGradient>
        </defs>
        
        {/* Envelope body */}
        <rect 
          x="50" 
          y="75" 
          width="300" 
          height="200" 
          fill="#f5f5f5" 
          stroke="#d1d5db" 
          strokeWidth="2"
        />
        
        {/* Bottom fold */}
        <path 
          d="M50,75 L200,175 L350,75" 
          fill="none" 
          stroke="#d1d5db" 
          strokeWidth="1"
        />
        
        {/* Envelope flap */}
        <path 
          className="envelope-flap"
          d="M50,75 L200,175 L350,75 L200,75 Z"
          fill="#ffffff" 
          stroke="#d1d5db" 
          strokeWidth="2"
        />
        
        {/* Letter */}
        <rect 
          className="letter"
          x="75" 
          y="100"
          width="250" 
          height="150" 
          fill="white" 
          stroke="#e5e7eb" 
          strokeWidth="1"
        />
        
        {/* Heart on letter */}
        <path 
          className="heart"
          d="M200,140 
             C215,125 235,125 250,140 
             C265,155 265,180 250,195 
             L200,245 
             L150,195 
             C135,180 135,155 150,140 
             C165,125 185,125 200,140" 
          fill="url(#heartGradient)" 
          opacity="0"
          //transform="scale(0.7) translate(85, -20)"
        />
        
        {/* Left triangle */}
        <path 
          d="M50,75 L200,175 L50,275 Z" 
          fill="#ffffff" 
          stroke="#d1d5db" 
          strokeWidth="1"
        />
        
        {/* Right triangle */}
        <path 
          d="M350,75 L200,175 L350,275 Z" 
          fill="#f8fafc" 
          stroke="#d1d5db" 
          strokeWidth="1"
        />
      </svg>
    </div>
  );
};

export default AnimatedEnvelope;