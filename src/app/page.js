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
import WhyChoose from '../../components/Whydigital';
//import PageLoader from '../../components/PageLoader'; // Import the new loader
import LoveInPixels from '../../components/LoveInPixels';
import { LoadingProvider } from '../../components/PageLoader';

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Home() {
  return (
    <LoadingProvider>
    <main className={josfin.className}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
            <HeroSlider />
            <LoveInPixels />
            <FeaturedCategories />
            <Stats />
            <WhyChoose />
            <OrderProcess />
            <Testimonials />
            <FixedWhatsappButton />
          <Footer />
      </div>
    </main>
    </LoadingProvider>
  )
}