'use client';

import CategorySearch from "../../../components/CatergorySearch";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/Navbar";

export default function Categories() {
  return (
    <div className="min-h-screen bg-gray-100">
     <Navbar/>
     <CategorySearch/>
     <Footer/>
    </div>
  )
}