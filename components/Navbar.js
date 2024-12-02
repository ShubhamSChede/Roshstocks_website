"use client";

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-red-950 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="text-white font-bold text-xl">Roshstocks</Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                <Link href="/" className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium ">Home</Link>
                <Link href="/faqs" className="text-white  hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium">Process</Link>
                <Link href="/categories" className="text-white  hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium">Gallery</Link>
                <Link href="/about" className="text-white  hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium ">About me</Link>
                <Link href="/reviews" className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium">Reviews</Link>
                <Link href="/tnc" className="text-white hover:text-red-300 px-3 py-2 rounded-md text-sm font-medium">T&C</Link>             
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-red-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
     
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 flex-row items-center sm:px-3">
            <Link href="/" className="text-white hover:bg-amber-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center">Home</Link>
            <Link href="/faqs" className="text-white hover:bg-amber-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center">Process</Link>
            <Link href="/categories" className="text-white hover:bg-amber-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center">Gallery</Link>
            <Link href="/about" className="text-white hover:bg-amber-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center">About me</Link>
            <Link href="/reviews" className="text-white hover:bg-amber-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center">Reviews</Link>
            <Link href="/tnc" className="text-white hover:bg-amber-950 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-center">T&C</Link>
          </div>
        </div>
      )}
    </nav>
  )
}
