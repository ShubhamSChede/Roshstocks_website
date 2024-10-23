import React from 'react';

const FixedWhatsappButton = () => {
  return (
    <a
      href="https://wa.me/yourphonenumber"
      className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300 flex items-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src="/whatsappicon.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
      WhatsApp Us
    </a>
  );
};

export default FixedWhatsappButton;