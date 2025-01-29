// components/RatingStatistics.js
import React from 'react';
import { motion } from 'framer-motion';

export const RatingStatistics = ({ 
  averageRating, 
  ratingDistribution, 
  reviews, 
  displayStars 
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
      {/* Average Rating Card */}
      <motion.div 
        className="bg-pink-50 rounded-lg p-6 shadow-md"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <h2 className="text-2xl font-semibold mb-2">
          Average Rating: {typeof averageRating === 'number' ? averageRating.toFixed(1) : '0.0'}
        </h2>
        <div className="flex items-center text-2xl">
          {displayStars(Math.round(averageRating || 0))}
        </div>
      </motion.div>

      {/* Rating Distribution Card */}
      <div className="bg-pink-50 rounded-lg p-6 shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Rating Distribution</h2>
        {[5, 4, 3, 2, 1].map((star) => (
          <motion.div
            key={star}
            className="flex items-center mb-2"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: star * 0.1 }}
          >
            <span className="w-16">{star} Stars</span>
            <div className="flex-1 mx-4 h-4 bg-gray-200 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-yellow-400"
                style={{ width: `${(ratingDistribution[star] / reviews.length) * 100}%` }}
                initial={{ width: 0 }}
                animate={{ width: `${(ratingDistribution[star] / reviews.length) * 100}%` }}
                transition={{ type: "spring", stiffness: 200 }}
              ></motion.div>
            </div>
            <span className="w-16 text-right">{ratingDistribution[star]}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};