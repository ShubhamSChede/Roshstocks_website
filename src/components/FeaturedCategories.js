import Link from 'next/link';
import FadeInOnScroll from './FadeInOnScroll';
import Image from 'next/image';

const featuredCategories = [
  {
    name: 'Static Invites',
    price: 3000,
    imageUrl: '/FC1.jpg', 
  },
  {
    name: 'Wedding Invites',
    price: 5000,
    imageUrl: '/FC2.jpg',
  },
  {
    name: 'Save the Date',
    price: 2000,
    imageUrl: '/FC3.jpg',
  },
  {
    name: 'Wardrobe Planner',
    price: 3500,
    imageUrl: '/FC4.jpg',
  },
];

const FeaturedCategories = () => {
  return (
    <FadeInOnScroll>
      <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
          <span className="flex-grow border-t border-gray-800"></span>
          <span className="mx-4">Featured Categories</span>
          <span className="flex-grow border-t border-gray-800"></span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {featuredCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              <div className="relative w-full max-w-md justify-center">
                <div className="relative w-3/4 justify-center" style={{ aspectRatio: '3 / 4' }}>
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={400}
                    height={400}
                    className="w-full h-full object-fill rounded-lg justify-center"
                  />
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl sm:text-md font-semibold text-gray-900 mb-2">
                  {category.name}
                </h3>
                <p className="text-gray-700 font-medium">Rs. {category.price} onwards</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/categories"
            className="bg-white text-red-950 py-3 px-8 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300"
          >
            Explore Categories
          </Link>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default FeaturedCategories;