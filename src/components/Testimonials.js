import FadeInOnScroll from './FadeInOnScroll';

const testimonials = [
  { name: 'Sushant & Payal', content: 'This platform has revolutionized my shopping experience!' },
  { name: 'Pankaj & Radhika', content: 'I found exactly what I was looking for. Highly recommended!' },
];

const Testimonials = () => {
  return (
    <FadeInOnScroll>
      <section className="pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
            <span className="flex-grow border-t border-gray-800"></span>
            <span className="mx-4">What Our Users Say</span>
            <span className="flex-grow border-t border-gray-800"></span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <p className="font-semibold text-red-950">{testimonial.name}</p>
                <div className="flex items-center mb-2">
                  {Array(5).fill().map((_, i) => (
                    <span key={i} className="text-yellow-500 text-lg">&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </FadeInOnScroll>
  );
};

export default Testimonials;