// route.js
import connectToDatabase from '../../../../utils/dbConnect';
import Review from '../../../../models/Review';

export const GET = async () => {
  await connectToDatabase();

  try {
    const reviews = await Review.find({})
      .select('name email phone rating reviewText createdAt updatedAt')
      .sort({ createdAt: -1 });

    console.log('Sample review with timestamps:', JSON.stringify(reviews[0], null, 2));

    return new Response(
      JSON.stringify({ success: true, reviews }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error fetching reviews:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Error fetching reviews', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

export const POST = async (req) => {
  await connectToDatabase();

  try {
    const body = await req.json();
    const review = new Review(body);
    await review.save();

    const savedReview = await Review.findById(review._id)
      .select('name email phone rating reviewText createdAt updatedAt');

    return new Response(
      JSON.stringify({ success: true, review: savedReview }),
      { status: 201, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error creating review:', error);
    return new Response(
      JSON.stringify({ success: false, message: 'Error creating review', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

