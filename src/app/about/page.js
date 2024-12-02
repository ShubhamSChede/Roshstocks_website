'use client';
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import FixedWhatsappButton from '../../../components/FixedWhatsapp'
import AboutSection from '../../../components/AboutSection'
import JourneySection from '../../../components/JourneySection'
import { Josefin_Sans } from 'next/font/google';
import PageLayout from '../../../components/PageLayout';


const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function About() {
  return (
    <PageLayout>
    <main className={josfin.className}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <AboutSection />
        <JourneySection />
        <FixedWhatsappButton />
        <Footer />
      </div>
    </main>
    </PageLayout>
  );
}
