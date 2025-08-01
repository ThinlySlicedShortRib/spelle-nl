'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { useTranslations } from '@/utils/translations';
import LanguageSwitcher from './LanguageSwitcher';
import ProgressBar from './ProgressBar';
import Image from 'next/image';

export default function TopNav({ isSidebarOpen, setSidebarOpen, locale = 'en' }) {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const { t } = useTranslations(locale);
  const router = useRouter();
  const pathname = usePathname();

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const handleSearchFocus = () => {
    setIsSearchFocused(true);
  };

  const handleSearchBlur = () => {
    // Don't close when clicking on search results
    // Only close when clicking outside the search area
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const closeSearch = () => {
    setIsSearchFocused(false);
    setSearchQuery('');
  };

  // Navigation loading state
  useEffect(() => {
    const handleStart = () => {
      setIsNavigating(true);
      console.log('🚀 Navigation started');
    };

    const handleComplete = () => {
      setIsNavigating(false);
      console.log('✅ Navigation completed');
    };

    // Simulate navigation loading when pathname changes
    const currentPath = pathname;
    
    // Set a timeout to simulate navigation completion
    const timeoutId = setTimeout(() => {
      handleComplete();
    }, 500); // Show progress bar for 500ms

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]);

  // Start navigation when pathname changes
  useEffect(() => {
    if (pathname) {
      // Start navigation immediately
      setIsNavigating(true);
      console.log('🚀 Navigation started to:', pathname);
      
      // Don't auto-complete - let the ProgressBar handle completion
      // The ProgressBar will call onComplete when it's done
    }
  }, [pathname]);

  // Performance monitoring
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Monitor navigation performance
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'navigation') {
            console.log('🚀 Navigation Performance:', {
              type: entry.type,
              duration: entry.duration + 'ms',
              domContentLoaded: (entry.domContentLoadedEventEnd - entry.domContentLoadedEventStart) + 'ms',
              loadComplete: (entry.loadEventEnd - entry.loadEventStart) + 'ms',
              firstPaint: entry.firstPaint ? entry.firstPaint + 'ms' : 'N/A',
              firstContentfulPaint: entry.firstContentfulPaint ? entry.firstContentfulPaint + 'ms' : 'N/A'
            });
          }
        }
      });
      
      observer.observe({ entryTypes: ['navigation'] });
      
      // Also log initial page load performance
      const navigationStart = performance.getEntriesByType('navigation')[0];
      if (navigationStart) {
        console.log('📊 Initial Page Load Performance:', {
          totalTime: navigationStart.loadEventEnd - navigationStart.fetchStart + 'ms',
          domContentLoaded: navigationStart.domContentLoadedEventEnd - navigationStart.domContentLoadedEventStart + 'ms',
          loadComplete: navigationStart.loadEventEnd - navigationStart.loadEventStart + 'ms'
        });
      }
      
      return () => observer.disconnect();
    }
  }, []);

  const handleProgressComplete = () => {
    setIsNavigating(false);
    console.log('✅ Real progress completed');
  };

  return (
    <>
      {/* Real Progress Bar */}
      <ProgressBar 
        isVisible={isNavigating} 
        onComplete={handleProgressComplete}
      />
      
      <nav className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 ease-in-out ${isSearchFocused ? 'h-screen bg-[#0a0e1a]/95 backdrop-blur-sm' : 'h-16 bg-gradient-to-r from-[#4457AD] to-[#25204E]'} shadow-lg`}>
        <div className={`flex items-center justify-between h-16 px-3 ${isSearchFocused ? 'border-b border-gray-500' : ''}`}>
          <div className="flex items-center space-x-4">
            {!isSearchFocused && (
              <button 
                onClick={toggleSidebar} 
                className="cursor-pointer border-none bg-transparent p-2 hover:bg-white/10 rounded-lg transition-colors w-10 h-10 flex-shrink-0"
              >
                <Image 
                  src="/dock_to_right.svg" 
                  alt="Toggle Sidebar" 
                  width={24} 
                  height={24} 
                  unoptimized
                />
              </button>
            )}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <Image 
                  src="/logo-cropped.png" 
                  alt="Spelle.nl Logo" 
                  width={32} 
                  height={32}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className={`text-white text-md lg:text-xl font-regular ${isSearchFocused ? 'lg:block hidden' : 'block'}`}>Spelle.nl</p>
            </div>
          </div>
          
          {/* Simple Search Input */}
          <div className="flex items-center justify-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder={t('nav.search', 'Search games...')}
                value={searchQuery}
                onChange={handleSearchChange}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
                className="w-full px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-white/40 transition-all duration-300"
              />
              <svg
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 text-[var(--brand-background)] bg-white/50 backdrop-blur-sm p-2 rounded-md transition-colors cursor-pointer"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            {isSearchFocused && (
              <button
                onClick={closeSearch}
                className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-lg"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            )}
            
            <LanguageSwitcher currentLocale={locale} />
          </div>
        </div>

        {/* Expanded Search Content */}
        {isSearchFocused && (
          <div className="flex-1 p-6">
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <h2 className="text-white text-2xl font-bold mb-4">{t('nav.searchTitle', 'Search Games')}</h2>
                <p className="text-gray-400">{t('nav.searchSubtitle', 'Find your next favorite game')}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {searchQuery ? (
                  <>
                    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 cursor-pointer transition-colors">
                      <h3 className="text-white font-semibold mb-2">Sample Game 1</h3>
                      <p className="text-gray-400 text-sm">Action • Adventure</p>
                      <p className="text-gray-500 text-xs mt-2">A thrilling adventure game with stunning graphics</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 cursor-pointer transition-colors">
                      <h3 className="text-white font-semibold mb-2">Sample Game 2</h3>
                      <p className="text-gray-400 text-sm">Puzzle • Strategy</p>
                      <p className="text-gray-500 text-xs mt-2">Challenge your mind with strategic puzzles</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 cursor-pointer transition-colors">
                      <h3 className="text-white font-semibold mb-2">Sample Game 3</h3>
                      <p className="text-gray-400 text-sm">Racing • Sports</p>
                      <p className="text-gray-500 text-xs mt-2">High-speed racing action</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 cursor-pointer transition-colors">
                      <h3 className="text-white font-semibold mb-2">Sample Game 4</h3>
                      <p className="text-gray-400 text-sm">RPG • Fantasy</p>
                      <p className="text-gray-500 text-xs mt-2">Epic fantasy role-playing adventure</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 cursor-pointer transition-colors">
                      <h3 className="text-white font-semibold mb-2">Sample Game 5</h3>
                      <p className="text-gray-400 text-sm">Simulation • Life</p>
                      <p className="text-gray-500 text-xs mt-2">Build and manage your virtual world</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 hover:bg-white/10 cursor-pointer transition-colors">
                      <h3 className="text-white font-semibold mb-2">Sample Game 6</h3>
                      <p className="text-gray-400 text-sm">Horror • Survival</p>
                      <p className="text-gray-500 text-xs mt-2">Survive in a terrifying environment</p>
                    </div>
                  </>
                ) : (
                  <div className="col-span-full text-center py-12">
                    <p className="text-gray-400 text-lg">{t('nav.searchPrompt', 'Start typing to search for games...')}</p>
                    <p className="text-gray-500 text-sm mt-2">{t('nav.searchHint', 'Search by title, genre, or description')}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  );
} 