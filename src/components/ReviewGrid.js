'use client';
import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';

const Loader = () => (
  <div className="flex justify-center items-center min-h-[400px]">
    <motion.div 
      className="relative w-20 h-20"
      animate={{ rotate: 360 }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="w-4 h-4 bg-pink-500 rounded-full absolute top-0 left-1/2 transform -translate-x-1/2 opacity-90"></div>
        <div className="w-4 h-4 bg-pink-400 rounded-full absolute top-1/4 right-0 opacity-80"></div>
        <div className="w-4 h-4 bg-pink-300 rounded-full absolute bottom-1/4 right-0 opacity-70"></div>
        <div className="w-4 h-4 bg-pink-200 rounded-full absolute bottom-0 left-1/2 transform -translate-x-1/2 opacity-60"></div>
        <div className="w-4 h-4 bg-pink-300 rounded-full absolute bottom-1/4 left-0 opacity-70"></div>
        <div className="w-4 h-4 bg-pink-400 rounded-full absolute top-1/4 left-0 opacity-80"></div>
      </div>
    </motion.div>
  </div>
);

export const ReviewGrid = ({ 
  reviews = [], 
  displayStars, 
  formatDate,
  isLoading = false 
}) => {
  const [sortType, setSortType] = useState('newest');

  const sortedReviews = useMemo(() => {
    if (!reviews.length) return [];
    
    const reviewsCopy = [...reviews];
    
    switch (sortType) {
      case 'highest':
        return reviewsCopy.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'lowest':
        return reviewsCopy.sort((a, b) => (a.rating || 0) - (b.rating || 0));
      case 'oldest':
        return reviewsCopy.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
      case 'newest':
      default:
        return reviewsCopy.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    }
  }, [reviews, sortType]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-8 mb-10">
      <div className="mb-6 flex justify-end">
        <select
          className="bg-white border border-gray-300 rounded-md px-4 py-2 text-sm"
          value={sortType}
          onChange={(e) => setSortType(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
          <option value="highest">Highest Rated</option>
          <option value="lowest">Lowest Rated</option>
        </select>
      </div>

      {sortedReviews.length > 0 ? (
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {sortedReviews.map((review) => {
            if (!review || !review._id) return null;

            return (
              <motion.div 
                key={review._id} 
                className="bg-pink-50 shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 "
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100  flex items-center justify-center">
                    <span className="text-xl font-bold text-blue-600">
                      {review.name ? review.name.charAt(0).toUpperCase() : 'A'}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold">{review.name || 'Anonymous'}</h3>
                    <div className="text-yellow-400">
                      {displayStars(review.rating || 0)}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-2">{review.email || 'No email provided'}</p>
                <p className="text-gray-600 text-sm mb-4">{review.phone || 'No phone provided'}</p>
                <p className="text-gray-800 mb-4">{review.reviewText || 'No review text provided'}</p>
                <p className="text-gray-500 text-sm">
                  {review && review.createdAt ? formatDate(review.createdAt) : 'Recently added'}
                </p>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <p className="text-gray-600">No reviews yet.</p>
      )}
    </div>
  );
};

export default ReviewGrid;