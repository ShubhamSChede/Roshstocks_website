'use client';
import dynamic from 'next/dynamic';

const Slider = dynamic(() => import("react-slick").then(mod => mod.default), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const HeroSlider = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="w-full overflow-hidden">
      <Slider {...sliderSettings}>
        {[1, 2, 3].map((num) => (
          <div key={num} className="relative w-full">
            <img 
              src={`/Mask group (${num}).png`} 
              alt={`Featured Product ${num}`} 
              className="w-full object-cover"
              style={{
                aspectRatio: '3 / 1', // Default for larger screens
              }} 
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = `https://via.placeholder.com/800x400?text=Featured+Product+${num}`;
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;