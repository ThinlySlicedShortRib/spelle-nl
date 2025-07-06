'use client';

import { useEffect, useRef } from 'react';

const AD_SIZES = {
  vertical: { width: 300, height: 600, className: 'w-full max-w-[300px] h-[600px]' }, // Large Skyscraper
  horizontal: { width: 728, height: 90, className: 'w-full max-w-[728px] h-[90px]' }, // Leaderboard
  dynamic: { width: 336, height: 280, className: 'w-full max-w-[336px] h-[280px]' }, // Large Rectangle
  mediumRectangle: { width: 300, height: 250, className: 'w-full max-w-[300px] h-[250px]' }, // Medium Rectangle
  wideSkyscraper: { width: 160, height: 600, className: 'w-full max-w-[160px] h-[600px]' }, // Wide Skyscraper
  largeLeaderboard: { width: 970, height: 90, className: 'w-full max-w-[970px] h-[90px]' }, // Large Leaderboard
  mobileBanner: { width: 320, height: 100, className: 'w-full max-w-[320px] h-[100px]' }, // Large Mobile Banner
  square: { width: 250, height: 250, className: 'w-full max-w-[250px] h-[250px]' }, // Square
  smallSquare: { width: 200, height: 200, className: 'w-full max-w-[200px] h-[200px]' }, // Small Square
  banner: { width: 468, height: 60, className: 'w-full max-w-[468px] h-[60px]' }, // Banner
};

export default function AdBanner({ adSlot, adFormat = 'auto', className = '', showPlaceholder = false, variant = 'dynamic' }) {
  const adRef = useRef(null);
  const size = AD_SIZES[variant] || AD_SIZES.dynamic;

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
      <div className={`ad-container my-6 overflow-hidden flex items-center justify-center ${size.className} ${className}`}>
        <div className="bg-gray-800 border-2 border-dashed border-gray-600 rounded-lg flex flex-col items-center justify-center w-full h-full text-center text-gray-400">
          <p className="text-lg font-medium">Ad Space ({variant})</p>
          <p className="text-sm">{size.width}x{size.height} px</p>
          <p className="text-xs">Google AdSense will be integrated here</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`ad-container my-6 overflow-hidden flex items-center justify-center ${size.className} ${className}`}>
      <ins 
        ref={adRef}
        className="adsbygoogle w-full h-full"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-6843587892146806"
        data-ad-slot={adSlot}
        data-ad-format={adFormat}
        data-full-width-responsive="true"
      />
    </div>
  );
} 