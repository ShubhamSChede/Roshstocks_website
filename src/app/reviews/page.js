'use client';
import FixedWhatsappButton from '../../../components/FixedWhatsapp';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { useEffect, useState } from 'react';
import AddReview from '../../../components/addreview';
import { motion } from 'framer-motion';
import { Josefin_Sans } from 'next/font/google';

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});


const formatDate = (dateString) => {
  if (!dateString) return 'Recently added';

  try {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  } catch (error) {
    return 'Recently added';
  }
};

export default function ReviewComponent() {
  const [reviews, setReviews] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    rating: '',
    reviewText: '',
  });
  const [averageRating, setAverageRating] = useState(0.0);
  const [ratingDistribution, setRatingDistribution] = useState({
    1: 0, 2: 0, 3: 0, 4: 0, 5: 0
  });

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews', {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews);

          // Calculate average rating
          const validReviews = data.reviews.filter(review => review && review.rating);
          const avgRating = validReviews.length > 0
            ? validReviews.reduce((sum, review) => sum + review.rating, 0) / validReviews.length
            : 0;
          setAverageRating(avgRating);

          // Calculate rating distribution
          const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
          data.reviews.forEach(review => {
            if (review && review.rating) {
              distribution[review.rating]++;
            }
          });
          setRatingDistribution(distribution);
        } else {
          console.error('Failed to fetch reviews:', response.status);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const displayStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  const scrollToReviewSection = () => {
    const addReviewSection = document.querySelector('.add-review-section');
    if (addReviewSection) {
      addReviewSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Reset form data
        setFormData({
          name: '',
          email: '',
          phone: '',
          rating: '',
          reviewText: '',
        });

        // Refresh reviews list
        const updatedResponse = await fetch('/api/reviews');
        const data = await updatedResponse.json();
        setReviews(data.reviews);

        // Recalculate average rating and distribution
        const validReviews = data.reviews.filter(review => review && review.rating);
        const avgRating = validReviews.length > 0
          ? validReviews.reduce((sum, review) => sum + review.rating, 0) / validReviews.length
          : 0;
        setAverageRating(avgRating);

        const distribution = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
        data.reviews.forEach(review => {
          if (review && review.rating) {
            distribution[review.rating]++;
          }
        });
        setRatingDistribution(distribution);
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  return (
    <main className={josfin.className}>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-6 mt-10">Customer Reviews</h1>

        {/* Rating Statistics Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Average Rating Card */}
          <motion.div 
            className="bg-white rounded-lg p-6 shadow-md"
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
          <div className="bg-white rounded-lg p-6 shadow-md">
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

        <AddReview onSubmit={handleSubmit} formData={formData} handleChange={handleChange} />

        {/* Reviews Grid */}
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
      </div>
      <FixedWhatsappButton />
      <Footer />
    </div>
    </main>
  );
}
