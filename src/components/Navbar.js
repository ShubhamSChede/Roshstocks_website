"use client";

import Link from 'next/link';
import { useState, useCallback, memo, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { useLoading } from './PageLoader';

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/faqs", label: "Process" },
  { href: "/categories", label: "Gallery" },
  { href: "/about", label: "About me" },
  { href: "/reviews", label: "Reviews" },
  { href: "/tnc", label: "T&C" }
];

const NavLink = memo(({ href, label, className, isActive, isMobile, onClick }) => {
  const { startLoading, stopLoading } = useLoading();

  const handleClick = () => {
    if (isMobile && onClick) onClick(); // Close mobile menu when link is clicked
    startLoading();
    setTimeout(stopLoading, 1000);
  };

  return (
    <Link 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {label}
    </Link>
  );
});

NavLink.displayName = 'NavLink';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const getLinkClass = useCallback((href) => {
    const baseClass = "text-black hover:text-red-950 px-3 py-2 rounded-md text-md font-bold transition-all duration-200";
    if (!mounted) return baseClass;
    return pathname === href
      ? `${baseClass} text-white md:bg-rose-900 md:hover:bg-rose-500`
      : baseClass;
  }, [pathname, mounted]);

  const mobileMenuClass = useCallback((href) => {
    const baseClass = "block w-full text-center py-3 text-gray-800 font-semibold hover:bg-rose-100 transition-all duration-200";
    return pathname === href
      ? `${baseClass} bg-rose-900 text-white`
      : baseClass;
  }, [pathname]);

  return (
    <nav className="bg-gradient-to-r from-[#C8A2C8] to-[#FFB6C1] opacity-85 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link 
                href="/" 
                prefetch={true} 
                className={`text-white font-bold text-xl ${pathname === '/' && mounted ? 'text-red-950' : ''}`}
              >
                Roshstocks
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-4">
                {navLinks.map(({ href, label }) => (
                  <NavLink
                    key={href}
                    href={href}
                    label={label}
                    isActive={mounted && pathname === href}
                    className={getLinkClass(href)}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <button
            onClick={toggleMenu}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-rose-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rose-500"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? 'Close main menu' : 'Open main menu'}
            </span>
            {!isMenuOpen ? (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu, animates in/out */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navLinks.map(({ href, label }) => (
            <NavLink
              key={`mobile-${href}`}
              href={href}
              label={label}
              isActive={mounted && pathname === href}
              isMobile={true}
              onClick={closeMenu}
              className={mobileMenuClass(href)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default memo(Navbar);