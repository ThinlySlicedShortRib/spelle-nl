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
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const { locale } = use(params);

  // Handle responsive behavior
  useEffect(() => {
    setIsClient(true);
    
    let timeoutId;
    
    const handleResize = () => {
      clearTimeout(timeoutId);
      
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        
        if (width < 1280) {
          setSidebarOpen(false);
        }
      }, 100);
    };

    // Set initial state - always closed by default
    setSidebarOpen(false);

    // Add event listener for resize events only
    window.addEventListener('resize', handleResize);

    // Performance monitoring for navigation components
    if (typeof window !== 'undefined') {
      console.log('🎯 Navigation Components Loaded:', {
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent,
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        sidebarState: isSidebarOpen
      });
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [isSidebarOpen]);

  return (
    <html lang={locale}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6843587892146806"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body className={rubik.className}>
        {isClient ? (
          <>
            <TopNav isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} locale={locale} />
            <div className="flex">
              <Sidebar isSidebarOpen={isSidebarOpen} setSidebarOpen={setSidebarOpen} locale={locale} />
              <main className={`flex-grow transition-all duration-300 ease-in-out mt-16 ${
                isSidebarOpen 
                  ? 'lg:ml-[250px]' 
                  : 'lg:ml-[4rem]'
              }`}>
                {children}
              </main>
            </div>
          </>
        ) : (
          <div className="min-h-screen bg-[var(--brand-background)]">
            {children}
          </div>
        )}
      </body>
    </html>
  );
} 