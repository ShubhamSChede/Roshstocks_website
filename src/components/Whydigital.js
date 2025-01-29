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
      className={`transform transition-all duration-1000 opacity-0 translate-y-10`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const HexagonCard = ({ icon, title, description, color, gradient, className = '' }) => (
  <div className={`group relative w-64 h-72 ${className}`}>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className={`w-full h-full transform transition-all duration-500 
        hover:scale-105 cursor-pointer
        ${color} group-hover:shadow-2xl
        clip-path-hexagon`}>
        
        <div className="absolute inset-0 bg-fuchsia-100 opacity-90 clip-path-hexagon" />
        
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
  </div>
);

const WhyChoose = () => {
  const reasons = [
    {
      icon: <Leaf className="w-6 h-6 text-emerald-500 transition-transform duration-300 group-hover:rotate-12" />,
      title: "Eco-Friendly",
      description: "Reduce paper waste and promote sustainability.",
      color: "bg-emerald-50",
      gradient: "from-emerald-500"
    },
    {
      icon: <DollarSign className="w-6 h-6 text-blue-500 transition-transform duration-300 group-hover:scale-110" />,
      title: "Cost-Effective",
      description: "Save on printing and postage costs with beautiful designs.",
      color: "bg-blue-50",
      gradient: "from-blue-500"
    },
    {
      icon: <Send className="w-6 h-6 text-purple-500 transition-transform duration-300 group-hover:translate-x-1" />,
      title: "Instant Delivery",
      description: "Send invitations quickly via email or messaging apps.",
      color: "bg-purple-50",
      gradient: "from-purple-500"
    },
    {
      icon: <Palette className="w-6 h-6 text-pink-500 transition-transform duration-300 group-hover:rotate-45" />,
      title: "Customizable",
      description: "Easily edit designs to match your theme or preferences.",
      color: "bg-pink-50",
      gradient: "from-pink-500"
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500 transition-transform duration-300 group-hover:scale-125" />,
      title: "Interactive Features",
      description: "Include RSVP buttons, maps, or videos for engagement.",
      color: "bg-red-50",
      gradient: "from-red-500"
    },
    {
      icon: <Globe className="w-6 h-6 text-indigo-500 transition-transform duration-300 group-hover:rotate-180" />,
      title: "Wide Reach",
      description: "Share globally with no delays or additional costs.",
      color: "bg-indigo-50",
      gradient: "from-indigo-500"
    },
    {
      icon: <Smartphone className="w-6 h-6 text-orange-500 transition-transform duration-300 group-hover:translate-y-1" />,
      title: "Accessible Anywhere",
      description: "Guests can access invitations on any device.",
      color: "bg-orange-50",
      gradient: "from-orange-500"
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-500 transition-transform duration-300 group-hover:rotate-90" />,
      title: "Modern and Trendy",
      description: "Align with tech-savvy lifestyles for a contemporary touch.",
      color: "bg-teal-50",
      gradient: "from-teal-500"
    }
  ];

  return (
    <div className="py-24 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <style jsx global>{`
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
              Discover the advantages of going digital with your invitations
            </p>
          </div>
        </FadeInSection>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {reasons.map((reason, index) => (
            <FadeInSection key={index} delay={index * 100}>
              <HexagonCard {...reason} />
            </FadeInSection>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;