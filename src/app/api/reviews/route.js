import connectToDatabase from '../../../../utils/dbConnect';
import Review from '../../../../models/Review';

export const GET = async () => {
  await connectToDatabase();

  try {
    const reviews = await Review.find({});

    // Calculate average rating
    const totalReviews = reviews.length;
    const totalRatingStars = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = (totalReviews > 0) ? (totalRatingStars / totalReviews).toFixed(2) : 0;

    return new Response(
      JSON.stringify({ reviews, averageRating }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return new Response(
      JSON.stringify({ message: 'Error fetching reviews', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const POST = async (req) => {
  await connectToDatabase();

  try {
    const { name, email, phone, rating, reviewText } = await req.json();

    const newReview = new Review({
      name,
      email,
      phone,
      rating,
      reviewText,
    });

    await newReview.save();

    // Calculate average rating
    const reviews = await Review.find({});
    const totalReviews = reviews.length;
    const totalRatingStars = reviews.reduce((acc, review) => acc + review.rating, 0);
    const averageRating = (totalReviews > 0) ? (totalRatingStars / totalReviews).toFixed(2) : 0;

    return new Response(
      JSON.stringify({ message: 'Review created successfully!', averageRating }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating review:', error);
    return new Response(
      JSON.stringify({ message: 'Error creating review', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
