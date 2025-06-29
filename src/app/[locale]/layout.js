'use client';

import { useState, useEffect } from 'react';
import { use } from 'react';
import { Rubik } from 'next/font/google';
import Script from 'next/script';
import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import "../globals.css";

const rubik = Rubik({ 
  subsets: ['latin'],
});

export default function LocaleLayout({ children, params }) {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const { locale } = use(params);

  // Handle responsive behavior
  useEffect(() => {
    let timeoutId;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        
        if (width < 1280) {
          setSidebarOpen(false);
        } else if (width >= 1280) {
          setSidebarOpen(true);
        }
      }, 100);
    };

    // Set initial state based on screen size (only once)
    const width = window.innerWidth;
    if (width < 1280) {
      setSidebarOpen(false);
    } else if (width >= 1280) {
      setSidebarOpen(true);
    }

    // Add event listener for resize events only
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <html lang={locale}>
      <head>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6843587892146806"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={rubik.className}>
        <TopNav isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} locale={locale} />
        <div className="flex">
          <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} locale={locale} />
          <main className={`flex-grow p-4 transition-all duration-300 ease-in-out mt-16 ${
            isSidebarOpen 
              ? 'lg:ml-[250px]' 
              : 'lg:ml-[6rem]'
          }`}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
} 