'use client';

import { useState } from 'react'
import Navbar from '../../../components/Navbar'
import Footer from '../../../components/Footer'
import FixedWhatsappButton from '../../../components/FixedWhatsapp'

const faqs = [
  {
    question: "What is Next.js?",
    answer: "Next.js is a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications."
  },
  {
    question: "How do I get started with Tailwind CSS?",
    answer: "To get started with Tailwind CSS, you need to install it via npm, add it to your PostCSS configuration, and include it in your CSS. Then you can start using Tailwind's utility classes in your HTML."
  },
  {
    question: "What are the benefits of using Tailwind CSS?",
    answer: "Tailwind CSS provides a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override."
  },
  {
    question: "Is Tailwind CSS responsive?",
    answer: "Yes, Tailwind CSS is fully responsive. It includes a comprehensive set of responsive variants that make it easy to build responsive interfaces."
  },
  {
    question: "Can I use Tailwind with Next.js?",
    answer: "Absolutely! Tailwind CSS works great with Next.js. You can easily set it up in your Next.js project and start using Tailwind's utility classes right away."
  }
]

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200">
      <button
        className="flex justify-between items-center w-full py-5 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <svg
          className={`w-6 h-6 text-gray-500 transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQs() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-3xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Frequently Asked Questions
        </h1>
        <div className="mt-8">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
      <FixedWhatsappButton/>
      <Footer/>
    </div>
  )
}