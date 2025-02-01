import React from 'react';
import { useState } from 'react';

const testimonials = [
  { 
    name: "Sushant & Payal", 
    content: "We wanted something unique for our wedding invites, and this was beyond perfect! The customization options made it so personal, and our guests loved the design. Highly recommended!"
  },
  { 
    name: "Pankaj & Radhika", 
    content: "From Save the Dates to wedding itineraries, everything was seamless. The designs were elegant, and the team really understood our vision. Super happy with the service!"
  },
  {
    name: "Rahul & Priya",
    content: "Finding the right invite felt overwhelming, but this was a lifesaver! Beautiful themes, easy customization, and quick delivery. Our families were so impressed!"
  },
  {
    name: "Amit & Nidhi",
    content: "Our experience was amazing! Roshani was so patient and helpful, guiding us through every step. She understood exactly what we wanted and coordinated everything smoothly. The invites turned out beautiful, and we couldn't be happier. Thank you for making this so easy for us!"
  }
];

const TestimonialCard = ({ name, content }) => (
  <div className="flex-shrink-0 w-80 bg-white rounded-lg shadow-md p-6 mx-4">
    <p className="font-semibold text-red-950">{name}</p>
    <div className="flex items-center mb-2">
      {Array(5).fill().map((_, i) => (
        <span key={i} className="text-yellow-500 text-lg">★</span>
      ))}
    </div>
    <p className="text-gray-600 mb-4">&quot;{content}&quot;</p>
  </div>
);

const InfiniteTestimonials = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-14 overflow-hidden bg-gray-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
          <span className="flex-grow border-t border-gray-800"></span>
          <span className="mx-4">What Our Users Say</span>
          <span className="flex-grow border-t border-gray-800"></span>
        </h2>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className={`flex gap-4 ${isHovered ? 'animate-none' : 'animate-scrollH'}`}>
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`first-${index}`} {...testimonial} />
            ))}
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={`second-${index}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfiniteTestimonials;