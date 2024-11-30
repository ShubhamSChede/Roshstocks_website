'use client';
import dynamic from 'next/dynamic';
import { Rochester } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Link from 'next/link';
import Footer from '../../components/Footer';
import { useState, useEffect, useRef } from 'react';
import FadeInOnScroll from '../../components/FadeInOnScroll';
import FixedWhatsappButton from '../../components/FixedWhatsapp';

const rochester = Rochester({
  subsets: ['latin'],  // Choose the subset you need
  weight: ['400'],  // Define the weights you will use
  variable: '--font-rochester', 
});

const Slider = dynamic(() => import("react-slick").then(mod => mod.default), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const featuredCategories = [
  {
    name: 'Static Invites',
    price: 3000,
    imageUrl: '/FC1.jpg', 
  },
  {
    name: 'Wedding Invites',
    price: 5000,
    imageUrl: '/FC1.jpg',
  },
  {
    name: 'Save the Date',
    price: 2000,
    imageUrl: '/FC1.jpg',
  },
  {
    name: 'Wardrobe Planner',
    price: 3500,
    imageUrl: '/FC1.jpg',
  },
];

const testimonials = [
  { name: 'Sushant & Payal', content: 'This platform has revolutionized my shopping experience!' },
  { name: 'Pankaj & Radhika', content: 'I found exactly what I was looking for. Highly recommended!' },
];

const cards = [
  { step: 1, color: 'bg-red-950', message: 'Contact us' },
  { step: 2, color: 'bg-red-950', message: 'Let us know their requirement' },
  { step: 3, color: 'bg-red-950', message: 'Share references, song, faces as required/told by you' },
  { step: 4, color: 'bg-red-950', message: 'Confirm order and pay 50%' },
  { step: 5, color: 'bg-red-950', message: 'Get continuously updated' },
  { step: 6, color: 'bg-red-950', message: 'Confirm final output, pay and get original file' },
];

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [rotationActive, setRotationActive] = useState(true);
  const [currentStep, setCurrentStep] = useState(null);
  const orbitContainerRef = useRef(null);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    setIsClient(true); // Set isClient to true after component mounts
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  // Handle card click to stop rotation and set current step
  const handleCardClick = (card, event) => {
    event.stopPropagation();
    setRotationActive(false); // Stop the rotation
    setCurrentStep(card); // Set the current step to display details
    setShowText(true); // Set showText to true to display text horizontally
  };
  return (
    <div className="`${rochester.variable} font-rochester min-h-screen bg-gray-100`">
      <Navbar />

      {/* Slider Section */}
      {isClient ? (
  <div className="w-full overflow-hidden">
    <Slider {...sliderSettings}>
      {[1, 2, 3].map((num) => (
        <div key={num} className="relative w-full">
          <img 
            src={`/Mask group (${num}).png`} 
            alt={`Featured Product ${num}`} 
            className="w-full object-cover"
            style={{
              aspectRatio: '3 / 1', // Default for larger screens
            }} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = `https://via.placeholder.com/800x400?text=Featured+Product+${num}`;
            }}
          />
        </div>
      ))}
    </Slider>
  </div>
) : (
  <p className="text-center py-20">Loading featured products...</p>
)}

    {/* Featured Categories */}
<FadeInOnScroll>
  <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <h2 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">
      ___ Featured Categories ___
    </h2>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {featuredCategories.map((category, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
        >
          {/* Image */}
          <div className="aspect-w-3 aspect-h-4">
            <img
              src={category.imageUrl}
              alt={category.name}
              className="w-full h-full object-cover"
            />
          </div>
          {/* Category Information */}
          <div className="p-6 text-center">
            <h3 className="text-xl sm:text-md font-semibold text-gray-900 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-700 font-medium">Rs. {category.price} onwards</p>
          </div>
        </div>
      ))}
    </div>
    <div className="text-center mt-8">
      <Link
        href="/categories"
        className="bg-white text-red-950 py-3 px-8 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300"
      >
        Explore Categories
      </Link>
    </div>
  </section>
</FadeInOnScroll>

      <section className="pb-16 relative">
        <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
            Our Order Process
          </h2>
          <div className="text-center mt-8 mb-10">
            <Link
              href="/faqs"
              className="bg-white text-red-950 rounded-full font-bold text-md hover:bg-indigo-100 transition duration-300 m-10"
            >
              View the complete guide to orders
            </Link>
          </div>
          <div className="orbit-container relative w-80 h-80 mx-auto" ref={orbitContainerRef}>
            {cards.map((card, index) => (
              <div
                key={index}
                className={`circular-card absolute ${card.color} text-white rounded-full shadow-md flex items-center justify-center w-16 h-16 transition-all duration-300 ease-in-out`}
                style={{
                  animation: rotationActive ? `revolve 24s linear infinite` : 'none',
                  animationDelay: `${index * -4}s`,
                  cursor: 'pointer',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) rotate(${(index * 60)}deg) translateX(140px)`,
                }}
                onClick={(e) => handleCardClick(card, e)}
              >
                {/* Display text horizontally when rotation is stopped */}
                {showText ? (
                  <p className="font-semibold text-sm">{card.step}</p>
                ) : (
                  <p className="font-semibold text-sm">Step {card.step}</p>
                )}
              </div>
            ))}

            {/* Center Content Display */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-white shadow-lg flex items-center justify-center p-4 text-center">
              {currentStep ? (
                <div>
                  <h3 className="text-md font-bold mb-2">{currentStep.message}</h3>
                  <p className="text-sm text-gray-600">{currentStep.details}</p>
                </div>
              ) : (
                <p className="text-gray-600 text-sm">Click on a step to see details</p>
              )}
            </div>
          </div>
        </div>

        <style jsx>{`
          .orbit-container {
            perspective: 1000px;
          }
          .circular-card {
            position: absolute;
            transform: translate(-50%, -50%);
          }
          @keyframes revolve {
            from {
              transform: translate(-50%, -50%) rotate(0deg) translateX(140px) rotate(0deg);
            }
            to {
              transform: translate(-50%, -50%) rotate(360deg) translateX(140px) rotate(-360deg);
            }
          }
        `}</style>
      </section>

      {/* Testimonials */}
      <FadeInOnScroll>
        <section className="pb-14">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
              What Our Users Say
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <p className="font-semibold text-red-950">{testimonial.name}</p>
                  <div className="flex items-center mb-2">
                    {Array(5).fill().map((_, i) => (
                      <span key={i} className="text-yellow-500 text-lg">&#9733;</span> // Filled star
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </FadeInOnScroll>

      {/* WhatsApp Us Button */}
     <FixedWhatsappButton/>

      <Footer />
    </div>
  );
}
