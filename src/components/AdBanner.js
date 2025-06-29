'use client';

import { useEffect, useRef } from 'react';

export default function AdBanner({ adSlot, adFormat = 'auto', className = '', showPlaceholder = false }) {
  const adRef = useRef(null);

  useEffect(() => {
    // Only load ads if not showing placeholder and ad element exists
    if (!showPlaceholder && adRef.current && window.adsbygoogle) {
      try {
        // Check if ads are already loaded
        if (!adRef.current.hasAttribute('data-ad-status')) {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (error) {
        console.error('AdSense error:', error);
      }
    }
  }, [showPlaceholder]);

  if (showPlaceholder) {
    return (
      <div className={`ad-container my-6 max-w-full overflow-hidden ${className}`}>
        <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg p-8 text-center text-gray-400">
          <p className="text-lg font-medium">Ad Space</p>
          <p className="text-sm">Google AdSense will be integrated here</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`ad-container my-6 max-w-full overflow-hidden ${className}`}>
      <ins 
        ref={adRef}
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6843587892146806"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
} 