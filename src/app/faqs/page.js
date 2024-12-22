// app/faqs/page.js
"use client";
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Josefin_Sans } from 'next/font/google';
import Navbar from '../../../components/Navbar';
import { useState } from 'react';
import Footer from '../../../components/Footer';

// Dynamic imports with loading fallbacks
const OrderGuide = dynamic(() => import('../../../components/Guide'), {
  loading: () => <div className="h-[600px] bg-gray-100 animate-pulse rounded-lg mx-auto max-w-7xl" />
});

const FAQSection = dynamic(() => import('../../../components/FAQSection'), {
  loading: () => <div className="h-[400px] bg-gray-100 animate-pulse rounded-lg mx-auto max-w-3xl" />
});
const FixedWhatsappButton = dynamic(() => import('../../../components/FixedWhatsapp'));

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
  display: 'swap', // Add this for better font loading
});

export default function FAQs() {
  return (
    <main className={josfin.className}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Suspense fallback={<div className="h-[600px] bg-gray-100 animate-pulse" />}>
          <OrderGuide />
        </Suspense>
        <Suspense fallback={<div className="h-[400px] bg-gray-100 animate-pulse" />}>
          <FAQSection />
        </Suspense>
        <FixedWhatsappButton />
        <Footer />
      </div>
    </main>
  );
}