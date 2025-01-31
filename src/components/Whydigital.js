import React, { useState } from 'react';
import { Heart, Send, Palette, Globe, Clock, DollarSign, Smartphone, Leaf } from 'lucide-react';

const Card3D = ({ icon: Icon, title, description, color, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getRandomRotation = (index) => {
    const rotations = [
      { x: 15, y: -15 },
      { x: -15, y: 15 },
      { x: 15, y: 15 },
      { x: -15, y: -15 }
    ];
    return rotations[index % 4];
  };

  const baseRotation = getRandomRotation(index);

  return (
    <div
      className="group perspective-1000 w-72 h-96"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full transition-all duration-500 preserve-3d
          ${isHovered ? 'translate-z-12 shadow-2xl' : 'translate-z-0 shadow-lg'}`}
        style={{
          transform: isHovered
            ? 'translateZ(50px)'
            : `rotateX(${baseRotation.x}deg) rotateY(${baseRotation.y}deg)`
        }}
      >
        {/* Front face */}
        <div className={`absolute inset-0 backface-hidden rounded-xl ${color} p-6
          bg-gradient-to-br from-white/80 to-white/20 backdrop-blur-sm
          border border-white/20`}>
          <div className="h-full flex flex-col items-center justify-center space-y-6">
            <div className={`p-4 rounded-full bg-white/30 backdrop-blur-sm
              transform transition-transform duration-500
              ${isHovered ? 'scale-110 rotate-12' : ''}`}>
              <Icon className="w-8 h-8" />
            </div>
            
            <h3 className={`text-xl font-bold text-gray-800 text-center
              transform transition-all duration-500
              ${isHovered ? 'scale-110' : 'scale-100'}`}>
              {title}
            </h3>
            
            <p className={`text-sm text-gray-600 text-center leading-relaxed
              transform transition-all duration-500 delay-100
              ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              {description}
            </p>
          </div>
        </div>

        {/* Reflection effect */}
        <div className={`absolute inset-0 rounded-xl bg-gradient-to-t from-white/5 to-transparent
          opacity-0 transition-opacity duration-500 pointer-events-none
          ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
        </div>
      </div>
    </div>
  );
};

const BenefitsGrid = () => {
  const benefits = [
    {
      icon: Leaf,
      title: "Eco-Friendly",
      description: "Reduce paper waste and promote sustainability with digital alternatives.",
      color: "bg-emerald-50"
    },
    {
      icon: DollarSign,
      title: "Cost-Effective",
      description: "Save significantly on printing and postage costs without compromising on style.",
      color: "bg-blue-50"
    },
    {
      icon: Send,
      title: "Instant Delivery",
      description: "Send invitations instantly to anyone, anywhere in the world.",
      color: "bg-purple-50"
    },
    {
      icon: Palette,
      title: "Customizable",
      description: "Personalize every aspect of your invitation with easy-to-use tools.",
      color: "bg-pink-50"
    },
    {
      icon: Heart,
      title: "Interactive",
      description: "Add RSVP buttons, maps, and videos for an engaging experience.",
      color: "bg-red-50"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Share your special moments with loved ones across the globe instantly.",
      color: "bg-indigo-50"
    },
    {
      icon: Smartphone,
      title: "Mobile-First",
      description: "Perfect viewing experience on any device, anywhere, anytime.",
      color: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Always Modern",
      description: "Stay current with contemporary designs and features.",
      color: "bg-teal-50"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Digital Invitations?
          </h1>
          <p className="text-xl text-gray-600">
            Experience the future of event planning
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card3D key={index} {...benefit} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BenefitsGrid;