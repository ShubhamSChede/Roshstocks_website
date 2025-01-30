import React, { useEffect, useRef } from 'react';
import { Heart, Send, Palette, Globe, Clock, DollarSign, Smartphone, Leaf } from 'lucide-react';

const FadeInSection = ({ children, delay = 0 }) => {
  const domRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-10');
        }
      });
    });

    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      ref={domRef}
      className="transform transition-all duration-1000 opacity-0 translate-y-10"
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const HexagonCard = ({ icon, title, description, color, gradient, position, isConnector }) => (
  <div className={`relative ${isConnector ? 'w-16 h-16' : 'w-64 h-72'} ${position}`}>
    {!isConnector && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className={`w-full h-full transform transition-all duration-500 
          hover:scale-105 cursor-pointer ${color} group-hover:shadow-2xl
          clip-path-hexagon`}>
          
          <div className="absolute inset-0 bg-pink-50 opacity-90 clip-path-hexagon" />
          
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} to-transparent 
            opacity-0 group-hover:opacity-10 clip-path-hexagon transition-opacity duration-500`} />
          
          <div className="relative h-full flex flex-col items-center justify-center p-6 text-center">
            <div className={`p-4 rounded-full ${color} transition-transform duration-300 
              group-hover:scale-110 mb-4`}>
              {icon}
            </div>
            
            <h3 className="text-lg font-semibold text-gray-900 mb-2 transition-colors 
              duration-300 group-hover:text-indigo-600">
              {title}
            </h3>
            
            <p className="text-sm text-gray-600 transition-colors duration-300 
              group-hover:text-gray-900">
              {description}
            </p>
          </div>
        </div>
      </div>
    )}
    {isConnector && (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-full h-2 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform rotate-45" />
      </div>
    )}
  </div>
);

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-500 transition-transform duration-300 group-hover:rotate-12" />,
      title: "Eco-Friendly",
      description: "Reduce paper waste and promote sustainability.",
      color: "bg-emerald-50",
      gradient: "from-emerald-500",
      position: "col-span-2 row-span-2"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />,
      title: "Cost-Effective",
      description: "Save on printing and postage costs with beautiful designs.",
      color: "bg-blue-50",
      gradient: "from-blue-500",
      position: "col-start-4 col-span-2 row-span-2"
    },
    {
      icon: <Send className="w-6 h-6 text-purple-500 transition-transform duration-300 group-hover:translate-x-1" />,
      title: "Instant Delivery",
      description: "Send invitations quickly via email or messaging apps.",
      color: "bg-purple-50",
      gradient: "from-purple-500",
      position: "col-start-2 row-start-3 col-span-2 row-span-2"
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-500 transition-transform duration-300 group-hover:rotate-45" />,
      title: "Customizable",
      description: "Easily edit designs to match your theme or preferences.",
      color: "bg-pink-50",
      gradient: "from-pink-500",
      position: "col-start-5 row-start-3 col-span-2 row-span-2"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500 transition-transform duration-300 group-hover:scale-125" />,
      title: "Interactive Features",
      description: "Include RSVP buttons, maps, or videos for engagement.",
      color: "bg-red-50",
      gradient: "from-red-500",
      position: "col-start-1 row-start-5 col-span-2 row-span-2"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500 transition-transform duration-300 group-hover:rotate-180" />,
      title: "Wide Reach",
      description: "Share globally with no delays or additional costs.",
      color: "bg-indigo-50",
      gradient: "from-indigo-500",
      position: "col-start-3 row-start-5 col-span-2 row-span-2"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-orange-500 transition-transform duration-300 group-hover:translate-y-1" />,
      title: "Accessible Anywhere",
      description: "Guests can access invitations on any device.",
      color: "bg-orange-50",
      gradient: "from-orange-500",
      position: "col-start-2 row-start-7 col-span-2 row-span-2"
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-500 transition-transform duration-300 group-hover:rotate-90" />,
      title: "Modern and Trendy",
      description: "Align with tech-savvy lifestyles for a contemporary touch.",
      color: "bg-teal-50",
      gradient: "from-teal-500",
      position: "col-start-4 row-start-7 col-span-2 row-span-2"
    }
  ];

  // Add connector positions for the maze effect
  const connectors = [
    { position: "col-start-3 row-start-2", rotation: "45deg" },
    { position: "col-start-4 row-start-3", rotation: "-45deg" },
    { position: "col-start-2 row-start-4", rotation: "45deg" },
    { position: "col-start-3 row-start-5", rotation: "-45deg" },
    { position: "col-start-4 row-start-6", rotation: "45deg" },
    { position: "col-start-2 row-start-6", rotation: "-45deg" }
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <style jsx>{`
        .clip-path-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        <FadeInSection>
          <div className="text-center mb-16">
            <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
              Why Choose Digital Invitations?
            </h1>
            <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
              Navigate through the benefits of going digital
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-6 gap-4 justify-items-center relative">
          {reasons.map((reason, index) => (
            <FadeInSection key={index} delay={index * 150}>
              <div className="group">
                <HexagonCard {...reason} />
              </div>
            </FadeInSection>
          ))}
          
          {connectors.map((connector, index) => (
            <div key={`connector-${index}`} className={`${connector.position}`}>
              <div className="w-16 h-2 bg-gradient-to-r from-transparent via-gray-200 to-transparent transform transition-all duration-300 hover:via-pink-200"
                   style={{ transform: `rotate(${connector.rotation})` }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;