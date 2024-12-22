'use client';

import { Import } from "lucide-react";
import CategorySearch from "../../../components/CatergorySearch";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";
import { Josefin_Sans } from "next/font/google";
//import PageLayout from "../../../components/PageLayout";
import { LoadingProvider } from "../../../components/PageLoader";

const josfin = Josefin_Sans({
  subsets: ['latin'],
  weight: '400',
});

export default function Categories() {
  return (
    <LoadingProvider>
    <main className={josfin.className}>
    <div className="min-h-screen bg-gray-100">
     <Navbar/>
     <CategorySearch/>
     <Footer/>
    </div>
    </main>
    </LoadingProvider>
  )
}