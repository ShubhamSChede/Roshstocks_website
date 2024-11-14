import React from 'react';
import { motion } from 'framer-motion';

const OrderGuide = () => {
  const steps = [
    {
      step: 1,
      color: 'bg-red-950',
      title: 'Contact Us',
      description: `The journey begins with a simple hello! Reach out to us via phone, email, or even a direct message on social media. This is your chance to get familiar with our process, ask any initial questions, and tell us a bit about your project ideas. Whether you already have a specific vision or are looking for creative direction, we’re excited to help. So don't hesitate—let's start this creative collaboration!`
    },
    {
      step: 2,
      color: 'bg-red-950',
      title: 'Let Us Know Your Requirements',
      description: `This step is all about diving deeper into your vision. Tell us everything you can about your project requirements—every detail, no matter how small, helps us craft a final result that aligns with your dreams. Your input at this stage lets us tailor our approach to create something that feels truly personal.`
    },
    {
      step: 3,
      color: 'bg-red-950',
      title: 'Share References, Songs, Faces, and More',
      description: `Here’s where we start adding all the special touches! If you have specific images, reference photos, songs, or other elements that capture the essence of what you’re looking for, now’s the time to share them. Feel free to include anything that speaks to your personality and style.`
    },
    {
      step: 4,
      color: 'bg-red-950',
      title: 'Confirm Order and Pay 50%',
      description: `Once we have all your ideas and requirements in hand, we’ll finalize the order details, timeline, and total cost. This confirmation ensures we’re on the same page, and with a 50% deposit, we can officially kick off the project! This initial payment secures our focus and resources, allowing us to allocate the time and attention needed to bring your vision to life.`
    },
    {
      step: 5,
      color: 'bg-red-950',
      title: 'Get Continuously Updated',
      description: `Collaboration doesn’t end when the project starts; in fact, it’s just beginning! As we progress, we’ll keep you in the loop with regular updates, previews, and opportunities to review the work-in-progress. We encourage you to be open with your feedback—it’s essential for creating a final product that resonates with you.`
    },
    {
      step: 6,
      color: 'bg-red-950',
      title: 'Confirm Final Output, Pay, and Receive Your Original File',
      description: `The moment has arrived! Once we reach the final draft, you’ll have a chance to review every detail and confirm that it’s everything you envisioned. After your final confirmation and payment, we’ll send you the original, high-quality file. It’s the culmination of our work together—an exclusive creation that’s uniquely yours.`
    }
  ];

  return (
    <section className="min-h-screen flex flex-col items-center py-12 bg-white">
      <h2 className="text-4xl font-bold text-red-950 mb-12 text-center">Order Guide for Custom Invites</h2>
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 px-6 md:px-0">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`p-8 rounded-lg ${step.color} shadow-lg text-white`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="flex items-center mb-4">
              <span className="text-xl font-bold bg-gradient-to-r from-red-700 to-red-500 rounded-full h-12 w-12 flex items-center justify-center mr-4">
                {step.step}
              </span>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
            </div>
            <p className="text-gray-200 leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OrderGuide;
