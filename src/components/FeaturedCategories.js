import { Link } from 'lucide-react';
import React, { useState } from 'react';
import HTMLFlipBook from 'react-pageflip';


const PageCover = React.forwardRef(({ children, coverImage }, ref) => {
  return (
    <div 
      className="bg-red-50 shadow-lg rounded-lg h-full relative overflow-hidden" 
      ref={ref} 
      data-density="hard"
    >
      {coverImage && (
        <img
          src={`/${coverImage}`}
          alt="Cover"
          className="w-full h-full object-fill absolute top-0 left-0"
        />
      )}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-3xl font-serif text-white z-10">{children}</h2>
      </div>
    </div>
  );
});

const Page = React.forwardRef(({ children, number, type = 'text', imageName, videoName }, ref) => {
  return (
    <div className="bg-pink-50 shadow-lg rounded-lg p-4 h-full" ref={ref}>
      {type === 'image' ? (
        <div className="h-full flex items-center justify-center">
          <img 
            src={`/${imageName}`}
            alt={`Wedding page ${number}`}
            className="max-w-full h-auto rounded-lg shadow-md"
          />
        </div>
      )       : type === 'video' ? (
        <div className="h-full flex items-center justify-center p-4">
          <div className="relative w-full h-full max-h-[450px] flex items-center justify-center">
            <video 
              className="h-full w-auto object-contain rounded-lg shadow-md"
              controls
              muted
            >
              <source src={`/${videoName}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
    ): (
        <div className="h-full flex flex-col items-center justify-center p-8">
          <p className="text-xl font-light leading-relaxed text-gray-700">
            {children}
          </p>
          {number && (
            <span className="absolute bottom-4 right-4 text-gray-400">
              {number}
            </span>
          )}
        </div>
      )}
    </div>
  );
});

const WeddingFlipbook = () => {
  return (
    <div className=" bg-gradient-to-br from-pink-100 to-pink-200 py-12">
      <div className="max-w-4xl mx-auto">
        <HTMLFlipBook
          width={400}
          height={500}
          minWidth={250}
          maxWidth={800}
          minHeight={350}
          maxHeight={1000}
          showCover={true}
          flippingTime={1000}
          className="mx-auto"
          maxShadowOpacity={0.5}
          mobileScrollSupport={true}
          
        >
          <PageCover coverImage="text.png"></PageCover>
          <Page number="1" type="image" imageName="book00.jpg" />
          <Page number="2">
            <Link
              size={32}
              className="absolute top-4 right-4 text-gray-400"
              href='./categories'

            />
          _______________________________
          "Explore a variety of invites—all in one place! 
          Your one-stop solution for every celebration."
          _______________________________
          </Page>
          <Page number="3" type="image" imageName="book02.png" />
          <Page number="4">

          _______________________________
            "Plan your wedding day effortlessly with our custom itineraries! 
            Tailor every detail to fit your perfect celebration."
            _______________________________
          </Page>
          <Page number="5" type="image" imageName="book03.png" />
          <Page number="6">
          _______________________________
            "Bring your vision to life with theme-based invites! 
            From elegant to quirky, customize every detail to match your style."
            _______________________________
          </Page>
          <Page number="7" type="image" imageName="book01.png" />
          <Page number="8">
            _______________________________
            "Embrace graceful simplicity with an elegant invite. 
            Clean, timeless designs that speak volumes without saying too much."
            _______________________________
          </Page>
          <Page number="9" type="video" videoName="pg06.mp4" />
          <Page number="10">
          _______________________________
            "Make a lasting impression with customized video invites. 
            Personalize every moment and share your story in a unique, memorable way."
            _______________________________
            </Page>
          <PageCover coverImage="text2.jpg" ></PageCover>
        </HTMLFlipBook>
      </div>
    </div>
  );
};

export default WeddingFlipbook;