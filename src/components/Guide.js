'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { memo } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Memoize the step component
const Step = memo(({ number, title, description, image, isReversed, extra }) => { // Changed children to extra
  const containerClass = `flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-pink-50 p-6 rounded-xl shadow-lg`;

  return (
    <motion.div 
      className={containerClass}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className={`bg-red-950 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 shadow-lg animate-float ${isReversed ? 'ml-6' : ''}`}>
        {number}
      </div>
      <div className={`flex-1 text-center ${isReversed ? 'md:text-right' : 'md:text-left'}`}>
        <h2 className="font-bold text-2xl mb-4">{title}</h2>
        <p className="text-gray-700 text-lg">
          {description}
        </p>
        {extra} 
      </div>
      <motion.img
        src={image}
        alt={title}
        className="w-64 h-auto object-contain rounded-lg shadow-md"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </motion.div>
  );
});

Step.displayName = 'Step';


const OrderGuide =  memo(() => {

  const steps = [
    {
      number: '01',
      title: 'Design Selection',
      description: 'Browse and choose templates from Instagram Gallery or any other references.',
      image: '/step1.jpg'
    },
    {
      number: '02',
      title: 'Consultation & Estimate',
      description: 'Once the template is selected and requirements are shared, a quotation of the invite is shared via email, Instagram, or WhatsApp.',
      image: '/step1.jpg'
    },
    {
      number: '03',
      title: 'Placing Order',
      description: 'Order is confirmed by a 50% advance payment. Invite content will be shared by the client in a content form provided by the Roshtocks team.',
      image: '/step1.jpg'
    },
    {
      number: '04',
      title: 'Approval',
      description: 'A watermark draft will be shared with the client for proofreading and approval. Two rounds of revisions are offered.',
      image: '/step1.jpg'
    },
    {
      number: '05',
      title: 'Payoff and Delivery',
      description: 'The balance amount is to be paid before delivery. The final invitation will be watermark-free and ready for use.',
      image: '/step1.jpg'
    },
    {
      number: '06',
      title: 'Disclaimer',
      description: 'Any changes requested after final delivery will be chargeable, subject to the change request.',
      image: '/step1.jpg'
    }
  ];

  return (
    <div className="bg-white p-6 md:p-10 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-16 text-gray-800">
        Order Process
      </h1>
      <div className="relative space-y-20">
        {steps.map((step, index) => (
          <Step
            key={step.number}
            {...step}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
});

OrderGuide.displayName = 'OrderGuide';

export default memo(OrderGuide);