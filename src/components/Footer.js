import Link from 'next/link';
import FooterButtons from './FooterButtons';


export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Roshstocks</h3>
            <p className="mb-4">Making the world a better place through constructing elegant hierarchies.</p>
            <p>&copy; {new Date().getFullYear()} Roshstocks. All rights reserved.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors duration-300">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors duration-300">About me</Link></li>
              <li><Link href="/faqs" className="hover:text-white transition-colors duration-300">Process</Link></li>
              <li><Link href="/categories" className="hover:text-white transition-colors duration-300">Categories</Link></li>
              <li><Link href="/reviews" className="hover:text-white transition-colors duration-300">Reviews</Link></li>
              <li><Link href="/tnc" className="hover:text-white transition-colors duration-300">TnC</Link></li>
    
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>Email: roshstocks@gmail.com</li>
              <li>Phone: (71) 123456-7890</li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
       <FooterButtons />
<div className="mt-8 pt-8 border-t border-gray-700">
<div className="text-center mt-6">
  <a href="https://www.linkedin.com/in/shubham-chede-2957bb278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app " className="text-gray-400 hover:text-white" target="_blank" rel="noopener noreferrer">
    Developed and built by Shubham Chede
  </a>
</div>
        </div>
    </div>
    </footer>
  );
}