import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Roshstocks</h3>
            <p className="mb-4">Making the world a better place through constructing elegant hierarchies.</p>
            <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors duration-300">About</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors duration-300">Services</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors duration-300">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Business Street</li>
              <li>City, State 12345</li>
              <li>Email: info@company.com</li>
              <li>Phone: (123) 456-7890</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
       
        <div className="flex justify-center space-x-6">
  <a href="https://www.instagram.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
    <span className="sr-only">Facebook</span>
    <img src="./instagramicon.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
  </a>

  <a href="https://www.youtube.com" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
    <span className="sr-only">Instagram</span>
    <img src="./youtubeicon.png" alt="WhatsApp" className="w-5 h-5 mr-2" />
  </a>
</div>
<div className="mt-8 pt-8 border-t border-gray-700">
<div className="text-center mt-6">
  <a href="https://www.linkedin.com/in/shubham-chede" className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
    Developed and built by Shubham Chede
  </a>
</div>
        </div>
    </div>
    </footer>
  );
}