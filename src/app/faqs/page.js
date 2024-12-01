// pages/faqs.js
'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FixedWhatsappButton from '../../../components/FixedWhatsapp';
import OrderGuide from '../../../components/Guide';
import FAQSection from '../../../components/FAQSection';
import { Josefin_Sans } from 'next/font/google';

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function FAQs() {
  return (
   <main className={josfin.className}>
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <OrderGuide />
      <FAQSection />
      <FixedWhatsappButton />
      <Footer />
    </div>
        
   </main>
  );
}
