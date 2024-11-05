import React, { useState } from 'react';

const AddReview = ({ onSubmit, formData, handleChange }) => {
  const [showForm, setShowForm] = useState(false);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    onSubmit(e);
    setShowForm(false);
  };

  return (
    <div>
      <button
        onClick={() => setShowForm(!showForm)}
        className="flex items-center space-x-2 px-4 py-2 border-2 border-red-900 rounded-full bg-white hover:bg-gray-100 text-red-900 font-semibold cursor-pointer outline-none transition duration-300 mt-4"
      >
        <span>{showForm ? 'Cancel' : 'ADD REVIEW'}</span>
        <span className="group hover:rotate-90 duration-300" title="Add New">
          <svg
            className="stroke-red-900 fill-none group-hover:fill-gray-300 group-active:stroke-red-200 group-active:fill-red-950 group-active:duration-0 duration-300"
            viewBox="0 0 24 24"
            height="24px"
            width="24px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeWidth="1.5" d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" />
            <path strokeWidth="1.5" d="M8 12H16" />
            <path strokeWidth="1.5" d="M12 16V8" />
          </svg>
        </span>
      </button>

      {showForm && (
  <form onSubmit={handleSubmitForm} className="bg-white p-8 mt-8  rounded-xl shadow-lg max-w-xl mx-auto border border-red-200 mx">
    <div className="flex justify-between items-center mb-6">
      <label className="text-gray-700 font-medium">Rating</label>
      <div className="flex space-x-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className={`w-10 h-10 rounded-full flex items-center justify-center ${
              formData.rating >= star ? 'bg-red-900 text-white' : 'bg-gray-200 text-gray-900'
            } transition duration-300`}
            onClick={() => handleChange({ target: { name: 'rating', value: star } })}
          >
            {star}★
          </button>
        ))}
      </div>
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor="name">
        Name
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-300"
        required
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor="email">
        Email
      </label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-300"
        required
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor="phone">
        Phone
      </label>
      <input
        type="tel"
        id="phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-300"
        required
      />
    </div>

    <div className="mb-6">
      <label className="block text-gray-700 font-semibold mb-2" htmlFor="reviewText">
        Review
      </label>
      <textarea
        id="reviewText"
        name="reviewText"
        value={formData.reviewText}
        onChange={handleChange}
        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-300"
        rows="4"
        required
      ></textarea>
    </div>

    <div className="flex items-center mb-6">
      <input
        type="checkbox"
        id="terms"
        className="text-red-900 border-red-900 focus:ring-red-900 rounded"
        required
      />
      <label htmlFor="terms" className="ml-2 text-gray-950">
        I accept the <span className="text-p-900 font-medium cursor-pointer">terms and conditions</span> of submitting the review
      </label>
    </div>

    <div className="flex justify-between items-center">
      <button
        type="submit"
        className="flex items-center bg-red-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-950 transition duration-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
          <path d="M5 13l4 4L19 7" />
        </svg>
        Rate Product
      </button>
    </div>
  </form>
)}


    </div>
  );
};

export default AddReview;
