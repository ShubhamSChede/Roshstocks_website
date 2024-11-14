// pages/faqs.js
'use client';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import FixedWhatsappButton from '../../../components/FixedWhatsapp';
import OrderGuide from '../../../components/Guide';
import FAQSection from '../../../components/FAQSection';

export default function FAQs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <OrderGuide />
      <FAQSection />
      <FixedWhatsappButton />
      <Footer />
    </div>
  );
}
