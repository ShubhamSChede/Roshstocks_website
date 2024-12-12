// 'use client';
// import dynamic from 'next/dynamic';
// import Navbar from '../../components/Navbar';
// import Link from 'next/link';
// import Footer from '../../components/Footer';
// import { useState, useEffect, useRef } from 'react';
// import FadeInOnScroll from '../../components/FadeInOnScroll';
// import FixedWhatsappButton from '../../components/FixedWhatsapp';
// import { Josefin_Sans } from 'next/font/google';
// import Timeline from '../../components/HorizontalTimeline';
// import PageLayout from '../../components/PageLayout';
// import Stats from '../../components/Stats';

// const josfin = Josefin_Sans({
//   subsets: ['latin'],
//   weight: '400',
// });

// const Slider = dynamic(() => import("react-slick").then(mod => mod.default), {
//   ssr: false,
//   loading: () => <p>Loading...</p>
// });

// const featuredCategories = [
//   {
//     name: 'Static Invites',
//     price: 3000,
//     imageUrl: '/FC1.jpg', 
//   },
//   {
//     name: 'Wedding Invites',
//     price: 5000,
//     imageUrl: '/FC2.jpg',
//   },
//   {
//     name: 'Save the Date',
//     price: 2000,
//     imageUrl: '/FC3.jpg',
//   },
//   {
//     name: 'Wardrobe Planner',
//     price: 3500,
//     imageUrl: '/FC4.jpg',
//   },
// ];

// const testimonials = [
//   { name: 'Sushant & Payal', content: 'This platform has revolutionized my shopping experience!' },
//   { name: 'Pankaj & Radhika', content: 'I found exactly what I was looking for. Highly recommended!' },
// ];

// const cards = [
//   { step: 1, color: 'bg-red-950', message: 'Contact us' },
//   { step: 2, color: 'bg-red-950', message: 'Let us know their requirement' },
//   { step: 3, color: 'bg-red-950', message: 'Share references, song, faces as required/told by you' },
//   { step: 4, color: 'bg-red-950', message: 'Confirm order and pay 50%' },
//   { step: 5, color: 'bg-red-950', message: 'Get continuously updated' },
//   { step: 6, color: 'bg-red-950', message: 'Confirm final output, pay and get original file' },
// ];

// export default function Home() {
//   const [isClient, setIsClient] = useState(false);
//   const [rotationActive, setRotationActive] = useState(true);
//   const [currentStep, setCurrentStep] = useState(null);
//   const orbitContainerRef = useRef(null);
//   const [showText, setShowText] = useState(false);

//   useEffect(() => {
//     setIsClient(true); 
//   }, []);

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     arrows: false,
//   };
//   return (
//     <main className={josfin.className}>
//     <div className="min-h-screen bg-gray-100">
//       <Navbar />
//       <PageLayout>
//       {/* Slider Section */}
//       {isClient ? (
//   <div className="w-full overflow-hidden">
//     <Slider {...sliderSettings}>
//       {[1, 2, 3].map((num) => (
//         <div key={num} className="relative w-full">
//           <img 
//             src={`/Mask group (${num}).png`} 
//             alt={`Featured Product ${num}`} 
//             className="w-full object-cover"
//             style={{
//               aspectRatio: '3 / 1', // Default for larger screens
//             }} 
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = `https://via.placeholder.com/800x400?text=Featured+Product+${num}`;
//             }}
//           />
//         </div>
//       ))}
//     </Slider>
//   </div>
// ) : (
//   <p className="text-center py-20">Loading featured products...</p>
// )}

//     {/* Featured Categories */}
// <FadeInOnScroll>
//   <section className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
//   <h2 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
//   <span className="flex-grow border-t border-gray-800"></span>
//   <span className="mx-4">Featured Categories</span>
//   <span className="flex-grow border-t border-gray-800"></span>
// </h2>

//     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//       {featuredCategories.map((category, index) => (
//         <div
//           key={index}
//           className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
//         >
//           {/* Image */}
// <div className="relative w-full max-w-md justify-center">
//   <div className="relative w-3/4 justify-center" style={{ aspectRatio: '3 / 4' }}>
//     <img
//       src={category.imageUrl}
//       alt={category.name}
//       className="w-full h-full object-fill rounded-lg justify-center"
//     />
//   </div>
// </div>

//           {/* Category Information */}
//           <div className="p-6 text-center">
//             <h3 className="text-xl sm:text-md font-semibold text-gray-900 mb-2">
//               {category.name}
//             </h3>
//             <p className="text-gray-700 font-medium">Rs. {category.price} onwards</p>
//           </div>
//         </div>
//       ))}
//     </div>
//     <div className="text-center mt-8">
//       <Link
//         href="/categories"
//         className="bg-white text-red-950 py-3 px-8 rounded-full font-bold text-lg hover:bg-indigo-100 transition duration-300"
//       >
//         Explore Categories
//       </Link>
//     </div>
//   </section>
// </FadeInOnScroll>

//   <Stats/>

//       <section className="pb-2 relative">
//         <div className="max-w-7xl mx-auto px-4  sm:px-6 lg:px-8">
//         <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
//             <span className="flex-grow border-t border-gray-800"></span>
//             <span className="mx-4">Our Order Process</span>
//             <span className="flex-grow border-t border-gray-800"></span>
//         </h2>
//         </div>
//           <div className="text-center mt-8 mb-10">
//             <Link
//               href="/faqs"
//               className="bg-white text-red-950 rounded-full font-bold text-md hover:bg-red-100 transition duration-300 m-5 underline"
//             >
//               View the complete guide to orders
//             </Link>
//           </div>
//       </section>
//      <Timeline/>
//       {/* Testimonials */}
//       <FadeInOnScroll>
//         <section className="pb-14">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <h2 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center justify-center">
//   <span className="flex-grow border-t border-gray-800"></span>
//   <span className="mx-4">What Our Users Say</span>
//   <span className="flex-grow border-t border-gray-800"></span>
// </h2>

//             <div className="grid md:grid-cols-2 gap-8">
//               {testimonials.map((testimonial, index) => (
//                 <div key={index} className="bg-white rounded-lg shadow-md p-6">
//                   <p className="font-semibold text-red-950">{testimonial.name}</p>
//                   <div className="flex items-center mb-2">
//                     {Array(5).fill().map((_, i) => (
//                       <span key={i} className="text-yellow-500 text-lg">&#9733;</span> // Filled star
//                     ))}
//                   </div>
//                   <p className="text-gray-600 mb-4">"{testimonial.content}"</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </FadeInOnScroll>

//       {/* WhatsApp Us Button */}
//      <FixedWhatsappButton/>

//       <Footer />
//       </PageLayout> 
//     </div>
//     </main>
//   )
// }


'use client';
import { Josefin_Sans } from 'next/font/google';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import HeroSlider from '../../components/HeroSlider';
import FeaturedCategories from '../../components/FeaturedCategories.js';
import OrderProcess from '../../components/OrderProcess';
import Testimonials from '../../components/Testimonials';
import Stats from '../../components/Stats';
import PageLayout from '../../components/PageLayout';
import FixedWhatsappButton from '../../components/FixedWhatsapp';
import WhyChoose from '../../components/whydigital';
import PageLoader from '../../components/PageLoader'; // Import the new loader

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <main className={josfin.className}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <PageLayout>
          <PageLoader>
            <HeroSlider />
            <FeaturedCategories />
            <Stats />
            <WhyChoose />
            <OrderProcess />
            <Testimonials />
            <FixedWhatsappButton />
          </PageLoader>
          <Footer />
        </PageLayout> 
      </div>
    </main>
  )
}