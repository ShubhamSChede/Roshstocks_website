'use client'
import TermsAndConditions from '../../../components/TermsAndConditions';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { Josefin_Sans } from 'next/font/google';
import FixedWhatsapp from '../../../components/FixedWhatsapp';
import PageLayout from '../../../components/PageLayout';

const josfin = Josefin_Sans({
    subsets: ['latin'],
    weight: '400',
    });


const App = () => {
  return (
    
    <main className={josfin.className}>
      <PageLayout>
    <div className="min-h-screen bg-gray-100">
        <Navbar />
      <TermsAndConditions />
      <Footer />
      <FixedWhatsapp />
    </div>
    </PageLayout>
    </main>  
  );
};

export default App;
