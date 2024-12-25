// app/layout.js
"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LoadingProvider } from '../components/PageLoader';
import PageLoader from '../components/PageLoader';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LoadingProvider>
          <PageLoader>
            <div className="flex flex-col min-h-screen">
              {children}
            </div>
          </PageLoader>
        </LoadingProvider>
      </body>
    </html>
  );
}