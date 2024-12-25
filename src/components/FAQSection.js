import { useState, memo } from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';


const faqs = [
  {
    question: "What are digital wedding invites?",
    answer: "Digital wedding invites are beautifully designed online invitations delivered electronically. They combine stunning visuals with interactive features like RSVP forms, event details, and reminders, offering a modern alternative to traditional paper invites."
  },
  {
    question: "Why should I choose your digital invites?",
    answer: "Our digital invites are eco-friendly, cost-effective, and fully customizable to match your wedding theme. We offer unique designs, quick delivery, and features like RSVP tracking, personalized links, and multimedia options such as music and animations."
  },
  {
    question: "Can you create custom designs for my invites?",
    answer: "Absolutely! We specialize in creating bespoke digital wedding invites tailored to your vision. Share your ideas, themes, or inspirations, and we’ll craft a one-of-a-kind invitation that reflects your style and story."
  },
  {
    question: "How does the process work?",
    answer: "It’s simple! Choose a design from our collection or request a custom design. Once finalized, we’ll send you the digital invite in your preferred format. You can then share it with your guests via email, messaging apps, or social media."
  },
  {
    question: "What makes your digital invites secure?",
    answer: "We prioritize your privacy. Our invites can be shared via password-protected links or private invitations, ensuring your event details remain secure and accessible only to your intended guests."
  },
  {
    question: "Do you offer support for RSVP tracking?",
    answer: "Yes, all our invites come with RSVP tracking features. We can integrate RSVP forms directly into your invite, helping you manage your guest list seamlessly."
  },
  {
    question: "What formats do you provide for the invites?",
    answer: "We provide flexible formats, including downloadable PDF and image files, as well as interactive links to web-based invites. This ensures compatibility across email, messaging apps, and social media platforms."
  }
];


const FAQItem = memo(({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

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

      {/* Use Framer Motion for the animated answer */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="pb-5"
        >
          <p className="text-gray-500">{answer}</p>
        </motion.div>
      )}
    </div>
  );
});

FAQItem.displayName = 'FAQItem';

// Memoize the entire FAQSection
const FAQSection = memo(() => {
  return (
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
  );
});

FAQSection.displayName = 'FAQSection';

export default FAQSection;