'use client';

import { memo, useMemo } from 'react';
import Image from "next/image";
import Link from "next/link";

const GameCard = memo(function GameCard({ 
  game, 
  index, 
  isTop10 = false, 
  isFeatured = false,
  locale 
}) {
  // Memoize computed values to prevent unnecessary re-renders
  const imageHeight = useMemo(() => {
    if (isFeatured && index === 0) {
      return 'lg:max-w-full h-[150px] lg:h-[400px]';
    }
    return 'h-[150px] lg:max-w-[300px]';
  }, [isFeatured, index]);

  const cardClasses = useMemo(() => {
    if (isFeatured && index === 0) {
      return 'lg:col-span-2 lg:row-span-2';
    } else if (isTop10) {
      return '';
    }
    return '';
  }, [isFeatured, index, isTop10]);

  return (
    <div className={`cursor-pointer group w-full min-w-0 ${cardClasses}`}>
      <div className={`relative mb-3 w-full ${imageHeight}`}>
        <Image 
          src={game.image} 
          alt={game.title} 
          fill
          className="object-cover rounded-sm"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        
        {/* Ranking Number for Top 10 */}
        {isTop10 && (
          <div 
            className="absolute -top-2 -left-2 font-bold text-8xl"
            style={{
              WebkitTextStroke: '2px white',
              color: 'transparent'
            }}
          >
            {index + 1}
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#ffffff]/50 via-[#303E7B]/50 to-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm">
          <div className="absolute top-3 right-3">
            <Link href={`/${locale}/game/${game.slug}`} prefetch={false}>
              <div className="bg-[var(--brand-background)] rounded-md px-4 py-2 transition-colors flex items-center gap-2">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
                <span className="text-white font-medium text-sm">Play</span>
              </div>
            </Link>
          </div>
          
          {/* Reviews at bottom left */}
          <div className="absolute bottom-3 left-3">
            <div className="bg-black/70 backdrop-blur-sm rounded-md px-3 py-2">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-medium text-sm">{game.rating}</span>
                <span className="text-gray-300 text-xs">({game.reviews || '0'} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-white font-semibold text-lg mb-2">{game.title}</h3>
    </div>
  );
});

export default GameCard; 