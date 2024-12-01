import React from "react";
import { motion } from "framer-motion";

const OrderGuide = () => {
  return (
    <div className="bg-white p-6 md:p-10 max-w-7xl mx-auto">
      <h1 className="text-center text-4xl md:text-5xl font-bold mb-16 text-gray-800">Order Process</h1>
      <div className="relative space-y-20">
        {/* Step 1 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0">
            01
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Design Selection</h2>
            <p className="text-gray-700 text-lg">
              Browse and choose templates from Instagram Gallery or any other references.
            </p>
          </div>
          <motion.img
            src="/step1.jpg"
            alt="Design Selection"
            className="w-64 h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Step 2 */}
        <motion.div 
          className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0">
            02
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="font-bold text-2xl mb-4">Consultation & Estimate</h2>
            <p className="text-gray-700 text-lg">
              Once the template is selected and requirements are shared, a quotation of the invite is shared via email, Instagram, or WhatsApp.
            </p>
          </div>
          <motion.img
            src="/step1.jpg"
            alt="Consultation & Estimate"
            className="w-64 h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Step 3 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0">
            03
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Placing Order</h2>
            <p className="text-gray-700 text-lg">
              Order is confirmed by a 50% advance payment. Invite content will be shared by the client in a content form provided by the Roshtocks team. <br /> 
              <span className="text-sm text-gray-600">Note: A small part of our branding will remain on the final product. Payment modes include GPA, Net Banking, Credit Card, or Debit Card.</span>
            </p>
          </div>
          <motion.img
            src="/step1.jpg"
            alt="Placing Order"
            className="w-64 h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Step 4 */}
        <motion.div 
          className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0">
            04
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="font-bold text-2xl mb-4">Approval</h2>
            <p className="text-gray-700 text-lg">
              A watermark draft will be shared with the client for proofreading and approval. Two rounds of revisions are offered.
            </p>
          </div>
          <motion.img
            src="/step1.jpg"
            alt="Approval"
            className="w-64 h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Step 5 */}
        <motion.div 
          className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0">
            05
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="font-bold text-2xl mb-4">Payoff and Delivery</h2>
            <p className="text-gray-700 text-lg">
              The balance amount is to be paid before delivery. The final invitation will be watermark-free and ready for use.<br />
              <span className="text-sm text-gray-600">Note: A small part of our branding will remain on the final product. Payment modes include GPA, Net Banking, Credit Card, or Debit Card.</span>
            </p>
          </div>
          <motion.img
            src="/step1.jpg"
            alt="Payoff and Delivery"
            className="w-64 h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>

        {/* Step 6 */}
        <motion.div 
          className="flex flex-col md:flex-row-reverse items-center md:items-start space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-red-900 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mb-4 md:mb-0">
            06
          </div>
          <div className="flex-1 text-center md:text-right">
            <h2 className="font-bold text-2xl mb-4">Disclaimer</h2>
            <p className="text-gray-700 text-lg">
              Any changes requested after final delivery will be chargeable, subject to the change request.
            </p>
          </div>
          <motion.img
            src="/step1.jpg"
            alt="Disclaimer"
            className="w-64 h-auto object-contain rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OrderGuide;