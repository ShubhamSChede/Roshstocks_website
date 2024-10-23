'use client';
import FixedWhatsappButton from '../../../components/FixedWhatsapp';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { useEffect, useState } from 'react';

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
  const [averageRating, setAverageRating] = useState(0);

  // Fetch reviews when the component mounts
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews', {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          setReviews(data.reviews);
          setAverageRating(data.averageRating);
        } else {
          console.error('Failed to fetch reviews:', response.status);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  // Handle input changes for the form
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
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
        const data = await response.json();
        setReviews([...reviews, data.review]);
        setAverageRating(data.averageRating);
        setFormData({
          name: '',
          email: '',
          phone: '',
          rating: '',
          reviewText: '',
        });
        setShowForm(false);
      } else {
        console.error('Failed to submit review:', response.status);
      }
    } catch (error) {
      console.error('Error submitting review:', error);
    }
  };

  // Function to display star ratings
  const displayStars = (rating) => {
    return '⭐'.repeat(rating);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar/>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Customer Reviews</h1>
 
      
        {/* Display average rating */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold">Average Rating: {averageRating}</h2>
          <div className="flex items-center">
            {displayStars(Math.round(averageRating))}
          </div>
        </div>

        {/* Button to toggle the review form */}
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600 transition duration-300"
        >
          {showForm ? 'Cancel' : 'Write a Review'}
        </button>

        {/* Review Form */}
        {showForm && (
          <form onSubmit={handleSubmit} className="bg-gray-100 p-6 mt-6 rounded-lg shadow-md max-w-xl mx-auto">
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="rating">
                Rating
              </label>
              <input
                type="number"
                id="rating"
                name="rating"
                value={formData.rating}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2" htmlFor="reviewText">
                Review
              </label>
              <textarea
                id="reviewText"
                name="reviewText"
                value={formData.reviewText}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition duration-300"
            >
              Submit Review
            </button>
          </form>
        )}

        {/* Display reviews */}
        <div className="mt-6">
          {reviews.length > 0 ? (
            reviews.map((review) => (
              review && review._id ? (
                <div key={review._id} className="bg-white shadow-md rounded-lg p-4 mb-4">
                  <h3 className="text-lg font-semibold">{review.name || 'Anonymous'}</h3>
                  <p className="text-gray-600">{review.email || 'No email provided'}</p>
                  <p className="text-gray-600">Phone: {review.phone || 'No phone provided'}</p>
                  <div className="flex items-center mb-2">
                    {displayStars(review.rating || 0)}
                  </div>
                  <p className="text-gray-800">{review.reviewText || 'No review text provided'}</p>
                </div>
              ) : null
            ))
          ) : (
            <p className="text-gray-600">No reviews yet.</p>
          )}
        </div>
      </div>
      <FixedWhatsappButton/>
      <Footer/>
    </div>
  );
}