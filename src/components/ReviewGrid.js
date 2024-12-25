// components/ReviewGrid.js
import React from 'react';
import { motion } from 'framer-motion';

export const ReviewGrid = ({ 
  reviews, 
  displayStars, 
  formatDate 
}) => {
  return (
    <div className="mt-8 mb-10">
      {reviews.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => {
            if (!review || !review._id) return null;

            return (
              <motion.div 
                key={review._id} 
                className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 border-2 border-red-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
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