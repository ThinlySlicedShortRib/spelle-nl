'use client';

import { useState, useEffect } from 'react';

export default function ProgressBar({ isVisible, onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Ensure component only renders on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isVisible && !isLoading && isMounted) {
      setIsLoading(true);
      setProgress(0);
      
      // Start immediately with some progress
      setProgress(5);
      
      // Track real loading progress
      let currentProgress = 5;
      
      // Simulate initial connection and DNS lookup
      setTimeout(() => {
        setProgress(15);
        currentProgress = 15;
      }, 100);

      // Track DOM content loaded
      const handleDOMContentLoaded = () => {
        const newProgress = Math.min(60, currentProgress + 30);
        setProgress(newProgress);
        currentProgress = newProgress;
      };

      // Track window load
      const handleLoad = () => {
        const newProgress = Math.min(90, currentProgress + 20);
        setProgress(newProgress);
        currentProgress = newProgress;
        
        // Complete after a short delay
        setTimeout(() => {
          setProgress(100);
          setTimeout(() => {
            setIsLoading(false);
            onComplete?.();
          }, 200);
        }, 300);
      };

      // Track resource loading
      const trackResources = () => {
        const resources = performance.getEntriesByType('resource');
        const loadedResources = resources.filter(r => r.loadEventEnd > 0).length;
        const totalResources = resources.length;
        
        if (totalResources > 0) {
          const resourceProgress = (loadedResources / totalResources) * 20;
          const newProgress = Math.min(80, currentProgress + resourceProgress);
          setProgress(newProgress);
          currentProgress = newProgress;
        }
      };

      // Monitor performance
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'resource') {
            trackResources();
          }
        }
      });
      
      observer.observe({ entryTypes: ['resource'] });

      // Check if DOM is already loaded
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded);
      } else {
        // If DOM is already loaded, simulate the progress
        setTimeout(() => {
          handleDOMContentLoaded();
        }, 200);
      }

      // Check if page is already loaded
      if (document.readyState === 'complete') {
        setTimeout(() => {
          handleLoad();
        }, 500);
      } else {
        window.addEventListener('load', handleLoad);
      }

      // Track initial resources
      setTimeout(trackResources, 300);

      return () => {
        observer.disconnect();
        document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
        window.removeEventListener('load', handleLoad);
      };
    }
  }, [isVisible, isLoading, onComplete, isMounted]);

  // Don't render anything until mounted on client
  if (!isMounted || !isVisible || !isLoading) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-[70] h-2 bg-gray-800">
      <div 
        className="h-full bg-gradient-to-r from-[var(--brand-active)] to-[#6B7AE8] transition-all duration-150 ease-out"
        style={{ 
          width: `${progress}%`,
        }}
      ></div>
    </div>
  );
} 