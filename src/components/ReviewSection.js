'use client';
import { useState, useEffect } from 'react';
import { Trash2, Star } from 'lucide-react';

const ReviewsSection = ({ onSuccess, onError }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews');
      if (!response.ok) throw new Error('Failed to fetch reviews');
      const data = await response.json();
      setReviews(data.reviews);
    } catch (err) {
      onError('Failed to fetch reviews');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteReview = async (reviewId) => {
    if (!window.confirm('Are you sure you want to delete this review?')) return;

    try {
      const response = await fetch(`/api/reviews?id=${reviewId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete review');

      setReviews(reviews.filter(review => review._id !== reviewId));
      onSuccess('Review deleted successfully');
    } catch (err) {
      onError('Failed to delete review');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  if (loading) {
    return <div className="text-center py-4">Loading reviews...</div>;
  }

  return (
    <div className="space-y-4">
      {reviews.map(review => (
        <div key={review._id} className="border rounded-lg p-4 bg-white shadow-sm">
          <div className="flex justify-between items-start">
            <div className="flex-grow">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-lg">{review.name}</h3>
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      className={index < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                    />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm mt-1">{review.email}</p>
              <p className="text-gray-600 text-sm">{review.phone}</p>
              <p className="text-gray-700 mt-2">{review.reviewText}</p>
              <p className="text-gray-500 text-sm mt-2">
                Posted on {formatDate(review.createdAt)}
              </p>
            </div>
            <button
              onClick={() => handleDeleteReview(review._id)}
              className="flex items-center gap-2 px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              <Trash2 size={16} />
              Delete
            </button>
          </div>
        </div>
      ))}
      {reviews.length === 0 && (
        <div className="text-center py-4 text-gray-500">
          No reviews found.
        </div>
      )}
    </div>
  );
};

export default ReviewsSection;