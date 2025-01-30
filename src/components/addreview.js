import React, { useState } from 'react';

// Add keyframes for the animations
const style = document.createElement('style');
style.textContent = `
  @keyframes displayStar {
    0% {
      transform: rotateX(100deg) rotateY(100deg) translateY(10px);
    }
    100% {
      transform: rotateX(0deg) rotateY(0deg) translateY(0px);
    }
  }

  @keyframes checkStar {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(-20deg);
    }
    50% {
      transform: rotate(20deg);
    }
    80% {
      transform: rotate(-20deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;
document.head.appendChild(style);

const AddReview = ({ onSubmit, formData, handleChange }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(e);
    setShowForm(false);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <button
        onClick={() => setShowForm(!showForm)}
        className="group flex items-center space-x-3 px-6 py-3 border-2 border-pink-100 rounded-full bg-white hover:bg-red-50 text-black font-semibold cursor-pointer outline-none transition-all duration-300 mt-4 shadow-sm hover:shadow-md"
      >
        <span className="text-lg">{showForm ? 'Cancel Review' : 'Write a Review'}</span>
        <span className={`transform transition-transform duration-300 ${showForm ? 'rotate-45' : ''}`}>
          <svg
            className="stroke-pink-500 w-6 h-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeWidth="2" d="M12 5v14M5 12h14" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      {showForm && (
        <form onSubmit={handleSubmitForm} className="bg-white p-8 mt-6 rounded-2xl shadow-lg border border-red-100">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Share Your Experience</h2>
          
          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-4">Rating</label>
            <div className=" align-top flex flex-row-reverse gap-1 [transform-style:preserve-3d] [perspective:1000px] left-1">
              {[5, 4, 3, 2, 1].map((star) => (
                <label key={star} className="relative cursor-pointer group flex flex-col items-center justify-center gap-1">
                  <input
                    type="radio"
                    name="rating"
                    className="hidden"
                    value={star}
                    checked={formData.rating === star}
                    onChange={() => handleChange({ target: { name: 'rating', value: star } })}
                  />
                  {/* Base star */}
                  <svg 
                    className={`w-8 h-8 transition-all duration-500 ease-in-out ${
                      formData.rating >= star 
                        ? 'stroke-transparent' 
                        : 'stroke-gray-300 group-hover:stroke-yellow-400'
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon 
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  {/* Overlay star with animation */}
                  <svg 
                    style={{
                      animation: formData.rating >= star ? 'displayStar 0.5s cubic-bezier(0.75, 0.41, 0.82, 1.2)' : 'none',
                    }}
                    className={`w-8 h-8 absolute top-0 transition-all duration-500 ease-in-out 
                      ${formData.rating >= star 
                        ? 'opacity-100 fill-yellow-400 stroke-transparent hover:animate-[checkStar_0.6s_ease-out]' 
                        : 'opacity-0 fill-transparent stroke-transparent'
                      }
                      group-hover:opacity-100 group-hover:fill-yellow-400
                    `}
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <polygon 
                      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    />
                  </svg>
                  
                  {/* Shadow effect */}
                  <div 
                    className={`h-2 w-6 rounded-full transition-opacity duration-500 ease-in-out
                      bg-[radial-gradient(ellipse_closest-side,rgba(0,0,0,0.24),rgba(0,0,0,0))]
                      ${formData.rating >= star ? 'opacity-100' : 'opacity-0 group-hover:opacity-30'}
                    `}
                  />
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100/20 focus:border-pink-100 transition-all duration-200"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100/20 focus:border-pink-100 transition-all duration-200"
                placeholder="your.email@example.com"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100/20 focus:border-pink-100 transition-all duration-200"
              placeholder="(123) 456-7890"
              required
            />
          </div>

          <div className="mb-8">
            <label className="block text-gray-700 font-medium mb-2" htmlFor="reviewText">
              Your Review
            </label>
            <textarea
              id="reviewText"
              name="reviewText"
              value={formData.reviewText}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-100/20 focus:border-pink-100 transition-all duration-200 min-h-[120px] resize-y"
              placeholder="Share your thoughts about the product..."
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="inline-flex items-center bg-pink-200 text-black px-6 py-3 rounded-lg font-semibold hover:bg-pink-800 hover:text-red-50 active:bg-red-950 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              Submit Review
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddReview;