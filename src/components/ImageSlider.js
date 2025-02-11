import React, { useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import Image from 'next/image';

const ImageSlider = ({ media }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === media.length - 1 ? 0 : prevIndex + 1
    );
  }, [media.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? media.length - 1 : prevIndex - 1
    );
  }, [media.length]);

  // Auto-play functionality
  React.useEffect(() => {
    let intervalId;
    if (isPlaying) {
      intervalId = setInterval(goToNext, 3000); // Change slide every 3 seconds
    }
    return () => clearInterval(intervalId);
  }, [isPlaying, goToNext]);

  if (!media?.length) return null;

  const currentItem = media[currentIndex];

  return (
    <div className="relative w-full aspect-[4/5] md:aspect-[9/16] overflow-hidden">
      {/* Current Media Item */}
      <div className="absolute inset-0">
        {currentItem.type === 'photo' ? (
          <div className="relative w-full h-full">
            <Image
              src={currentItem.url}
              alt={`Slide ${currentIndex + 1}`}
              fill
              className="object-cover"
              priority={currentIndex === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        ) : currentItem.isYoutubeVideo ? (
          <div className="relative w-full h-full">
            <iframe
              src={currentItem.url}
              title={`Slide ${currentIndex + 1}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative w-full h-full">
            <video
              src={currentItem.url}
              controls
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        )}
      </div>

      {/* Navigation Controls - Only show if there's more than one item */}
      {media.length > 1 && (
        <>
          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? (
              <Pause className="w-4 h-4" />
            ) : (
              <Play className="w-4 h-4" />
            )}
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/30 rounded-full">
            {media.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-white/50 hover:bg-white/75'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ImageSlider;