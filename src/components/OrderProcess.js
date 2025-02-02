import Link from 'next/link';
import Timeline from './HorizontalTimeline';
  import AnimatedGuideButton from './AnimatedGuideButton';

const OrderProcess = () => {
  return (
    <section className="pb-2 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
          <span className="flex-grow border-t border-gray-800  mt-10"></span>
          <span className="mx-4 mt-10">Our Order Process</span>
          <span className="flex-grow border-t border-gray-800  mt-10"></span>
        </h2>
      </div>
      <div className="text-center mt-8 mb-10">
      <AnimatedGuideButton href="/faqs" />
      </div>
      <Timeline />
    </section>
  );
};

export default OrderProcess;