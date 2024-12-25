'use client';
import { useEffect, useState } from 'react';
import { Josefin_Sans } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import FixedWhatsappButton from '../../components/FixedWhatsapp';
//import PageLayout from '../../../components/PageLayout';
import AddReview from '../../components/addreview';
import { RatingStatistics } from '../../components/RatingStatistics';
import { ReviewGrid } from '../../components/ReviewGrid';
import { LoadingProvider } from '../../components/PageLoader';

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
    <LoadingProvider>
    <main className={josfin.className}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold mb-6 mt-10">Customer Reviews</h1>

            <RatingStatistics 
              averageRating={averageRating} 
              ratingDistribution={ratingDistribution} 
              reviews={reviews}
              displayStars={displayStars}
            />

            <AddReview 
              onSubmit={handleSubmit} 
              formData={formData} 
              handleChange={handleChange} 
            />

            <ReviewGrid 
              reviews={reviews} 
              displayStars={displayStars} 
              formatDate={formatDate}
            />
          </div>
          <FixedWhatsappButton />
          <Footer />
      </div>
    </main>
    </LoadingProvider>
  );
}