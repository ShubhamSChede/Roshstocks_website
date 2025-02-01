import React from 'react';
import { 
  Leaf, 
  DollarSign, 
  Send, 
  Palette, 
  Heart, 
  Globe, 
  Smartphone, 
  Clock 
} from 'lucide-react';

const benefits = [
  { icon: Leaf, title: "Eco-Friendly", description: "Reduce paper waste and promote sustainability.", color: "bg-emerald-50" },
  { icon: DollarSign, title: "Cost-Effective", description: "Save on printing and postage costs.", color: "bg-blue-50" },
  { icon: Send, title: "Instant Delivery", description: "Send invitations instantly worldwide.", color: "bg-purple-50" },
  { icon: Palette, title: "Customizable", description: "Personalize every aspect of your invitation.", color: "bg-pink-50" },
  { icon: Heart, title: "Interactive", description: "Add RSVP buttons, maps, and videos.", color: "bg-red-50" },
  { icon: Globe, title: "Global Reach", description: "Share moments with loved ones worldwide.", color: "bg-indigo-50" },
  { icon: Smartphone, title: "Mobile-First", description: "Perfect viewing experience on any device.", color: "bg-orange-50" },
  { icon: Clock, title: "Always Modern", description: "Stay current with contemporary designs.", color: "bg-teal-50" }
];

const VerticalScrollingCards = () => {
  // Duplicate the benefits array to create a seamless loop
  const duplicatedBenefits = [...benefits, ...benefits];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-bold font-poppins leading-tight">
              Digital Invitation Benefits
            </h2>
            <p className="text-lg text-gray-600">
              Discover why digital invitations are the smart choice for your next event. 
              Our features make event planning easier and more sustainable than ever.
            </p>
            <p className="text-lg text-gray-600">
            At Roshstocks, we blend creativity with personalization to craft invites that truly reflect your story. From elegant themes to custom video invites, we offer a seamless experience with exceptional coordination and customer-friendly service. Every detail is designed with care, ensuring your special moments start with the perfect invite. Choose us for a stress-free, beautifully crafted invitation experience!
            </p>
          </div>

          {/* Right Section - Scrolling Cards */}
          <div className="relative h-[36rem] overflow-hidden">
            {/* First set of scrolling cards */}
            <div className="absolute w-full animate-scroll-slow">
              {duplicatedBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={`${benefit.title}-${index}`}
                    className={`w-full p-6 mb-4 rounded-xl shadow-lg ${benefit.color} 
                              transition-all duration-300 hover:scale-105`}
                    style={{
                      opacity: 1,
                    }}
                  >
                    <div className="space-y-4">
                      <IconComponent className="w-8 h-8" />
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Copy of cards for seamless loop */}
            <div className="absolute w-full animate-scroll-slow-delayed">
              {duplicatedBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={`${benefit.title}-${index}-copy`}
                    className={`w-full p-6 mb-4 rounded-xl shadow-lg ${benefit.color} 
                              transition-all duration-300 hover:scale-105`}
                    style={{
                      opacity: 1,
                    }}
                  >
                    <div className="space-y-4">
                      <IconComponent className="w-8 h-8" />
                      <h3 className="text-xl font-bold">{benefit.title}</h3>
                      <p className="text-gray-700">{benefit.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Add this to your tailwind.config.js
// extend: {
//   animation: {
//     'scroll-slow': 'scroll 40s linear infinite',
//     'scroll-slow-delayed': 'scroll 40s linear infinite -20s',
//   },
//   keyframes: {
//     scroll: {
//       '0%': { transform: 'translateY(0)' },
//       '100%': { transform: 'translateY(-50%)' },
//     },
//   },
// }

export default VerticalScrollingCards;