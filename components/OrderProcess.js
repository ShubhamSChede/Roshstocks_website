import Link from 'next/link';
import Timeline from './HorizontalTimeline';

const OrderProcess = () => {
  return (
    <section className="pb-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
          <span className="flex-grow border-t border-gray-800"></span>
          <span className="mx-4">Our Order Process</span>
          <span className="flex-grow border-t border-gray-800"></span>
        </h2>
      </div>
      <div className="text-center mt-8 mb-10">
        <Link
          href="/faqs"
          className="bg-white text-red-950 rounded-full font-bold text-md hover:bg-red-100 transition duration-300 m-5 underline"
        >
          View the complete guide to orders
        </Link>
      </div>
      <Timeline />
    </section>
  );
};

export default OrderProcess;