'use client';

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import AdBanner from '@/components/AdBanner';
import GameCard from '@/components/GameCard';
import CategoryTag from '@/components/CategoryTag';
import CategoryCard from '@/components/CategoryCard';

// Mock data
const game = {
  title: "Racing Limits",
  rating: 4.5,
  slug: "racing-limits",
  description: "Experience the thrill of street racing with realistic physics and stunning graphics. Dodge traffic, upgrade your car, and become the ultimate racer!",
  categories: [
    { name: "Action", slug: "action", count: 200 },
    { name: "Racing", slug: "racing", count: 90 },
    { name: "Simulation", slug: "simulation", count: 60 },
    { name: "Multiplayer", slug: "multiplayer", count: 100 },
  ],
  preview: "/img-placeholder.svg",
  iframeSrc: "https://example.com/game-iframe",
};

const relatedCategories = [
  { name: "Sports", slug: "sports", title: "Sports", icon: "/sports.svg", gameCount: 150, count: 150 },
  { name: "Adventure", slug: "adventure", title: "Adventure", icon: "/006-compass.svg", gameCount: 120, count: 120 },
  { name: "Strategy", slug: "strategy", title: "Strategy", icon: "/strategy.svg", gameCount: 80, count: 80 },
];

const relatedGames = Array(8).fill(null).map((_, i) => ({
  title: `Related Game ${i + 1}`,
  image: "/img-placeholder.svg",
  slug: `related-game-${i + 1}`,
  rating: 4.2,
  reviews: 150,
}));

const mainCategories = [
  { name: "Action", slug: "action", title: "Action", icon: "/005-boxing-gloves.svg", gameCount: 200 },
  { name: "Racing", slug: "racing", title: "Racing", icon: "/racing-car.svg", gameCount: 90 },
  { name: "Puzzle", slug: "puzzle", title: "Puzzle", icon: "/puzzle.svg", gameCount: 75 },
  { name: "Sports", slug: "sports", title: "Sports", icon: "/sports.svg", gameCount: 150 },
  { name: "Adventure", slug: "adventure", title: "Adventure", icon: "/006-compass.svg", gameCount: 120 },
  { name: "Strategy", slug: "strategy", title: "Strategy", icon: "/strategy.svg", gameCount: 80 },
  { name: "Simulation", slug: "simulation", title: "Simulation", icon: "/007-game-controller.svg", gameCount: 60 },
  { name: "Multiplayer", slug: "multiplayer", title: "Multiplayer", icon: "/010-friendship.svg", gameCount: 100 },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} className={`w-5 h-5 ${i <= Math.round(rating) ? "text-yellow-400" : "text-gray-500"}`} fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
      ))}
      <span className="ml-2 text-yellow-300 font-semibold">{rating.toFixed(1)}</span>
    </div>
  );
}

export default function GameDetailPage({ params }) {
  // Loader state for demo
  const [loading, setLoading] = useState(true);

  // Remove the useEffect that auto-hides the loader
  // Loader will only hide when user clicks 'Play Now'

  const { locale } = params;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[var(--brand-background)] via-[#121252] to-[var(--brand-background)] py-20 px-6 lg:px-10 text-white">
      {/* Title, Rating, Breadcrumbs */}
      <div className="w-full mx-auto">
        <div className="mb-6">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
            <h1 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent">{game.title}</h1>
            <StarRating rating={game.rating} />
          </div>
          <nav className="text-sm text-blue-300 mt-2">
            <Link href={`/${locale}`}>Home</Link> / <Link href={`/${locale}/categories/action`}>Action</Link> / <span className="text-white">{game.title}</span>
          </nav>
        </div>

        {/* Main Game Area */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mb-6">
          {/* Game + Loader */}
          <div className="rounded-lg min-h-[600px] items-center justify-center">
            <div className="flex relative w-full min-h-[600px]">
              <iframe
                src={game.iframeSrc}
                title={game.title}
                className="w-full h-[600px] md:h-[400px] rounded-lg"
                style={{ display: loading ? "none" : "block" }}
                allowFullScreen
              />
              {loading && (
                <div className="absolute inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-10">
                  <Image src={game.preview} alt={game.title} width={200} height={120} className="rounded-lg mb-4" />
                  <h2 className="text-xl font-bold text-white mb-2">{game.title}</h2>
                  <button className="bg-[var(--brand-active)] text-white px-6 py-2 rounded-lg font-semibold text-lg shadow-lg hover:bg-blue-600 transition" onClick={() => setLoading(false)}>
                    Play Now
                  </button>
                </div>
              )}
            </div>
            <div className="mt-10">
              <h2 className="text-2xl font-normal text-white mb-2">Rate the game</h2>
              <StarRating rating={0} />
            </div>
          </div>

          {/* Vertical Ad */}
          <div className="hidden lg:block">
            <AdBanner showPlaceholder={true} variant="vertical" />
          </div>
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mb-6">
          {/* Rate the game */}
          <div className="flex flex-col gap-4 mx-auto lg: mx-0">

            <div className="hidden md:block">
              <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
            </div>
            {/* Mobile-specific ad */}
            <div className="block md:hidden mt-4">
              <AdBanner showPlaceholder={true} variant="mobileBanner" />
            </div>
          </div>

                    {/* Related Categories */}
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl font-normal text-white mb-2">Related Categories</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {relatedCategories.map((cat, i) => (
                <CategoryTag key={i} category={cat} />
              ))}
            </div>
          </div>
        </div>

        {/* Description & Categories + Vertical Ad */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 mb-6">
          {/* Description */}
          <div className="bg-[#181828] rounded-lg p-10 flex flex-col gap-4">
            <h2 className="text-2xl font-normal text-white mb-2">Description</h2>
            <p className="text-gray-300 mb-2">{game.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {game.categories.map((cat, i) => (
                <CategoryTag key={i} category={cat} />
              ))}
            </div>
          </div>
          {/* Vertical Ad */}
          <div className="">
            <AdBanner showPlaceholder={true} variant="vertical" />
          </div>
        </div>
        <div className="hidden lg:block">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>

        {/* SEO Content Section */}
        <div className="mb-8">
          <div className="bg-[#181828] rounded-lg p-10">
            <h2 className="text-2xl font-normal text-white mb-4">About {game.title}</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand-active)] mb-3">Game Overview</h3>
                <p className="text-gray-300 mb-4">
                  {game.title} is an exciting {game.categories.map(cat => cat.name.toLowerCase()).join(', ')} game that offers
                  an immersive gaming experience. With stunning graphics and engaging gameplay, this game provides
                  hours of entertainment for players of all skill levels.
                </p>
                <p className="text-gray-300 mb-4">
                  Whether you're a casual gamer looking for quick fun or a dedicated player seeking a challenge,
                  {game.title} delivers an exceptional gaming experience that will keep you coming back for more.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[var(--brand-active)] mb-3">Key Features</h3>
                <ul className="text-gray-300 space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--brand-active)] rounded-full"></span>
                    High-quality graphics and smooth gameplay
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--brand-active)] rounded-full"></span>
                    Multiple difficulty levels for all players
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--brand-active)] rounded-full"></span>
                    Regular updates and new content
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--brand-active)] rounded-full"></span>
                    Cross-platform compatibility
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[var(--brand-active)] rounded-full"></span>
                    Free to play with no hidden costs
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-700">
              <h3 className="text-lg font-semibold text-[var(--brand-active)] mb-3">SEO Keywords</h3>
              <div className="flex flex-wrap gap-2">
                {game.categories.map((cat, i) => (
                  <span key={i} className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">
                    {cat.name.toLowerCase()} games
                  </span>
                ))}
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">free online games</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">browser games</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">no download games</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">instant play</span>
                <span className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm">mobile friendly</span>
              </div>
            </div>
          </div>
        </div>

        {/* More Games */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">More Games</h2>
          <p className="text-gray-400 mb-4">Discover similar games you might enjoy</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedGames.map((g, i) => (
              <GameCard key={i} game={g} index={i} locale={locale} />
            ))}
          </div>
        </div>
        {/* Ad after More Games */}
        <div className="mb-8">
          <div className="hidden md:block">
            <AdBanner showPlaceholder={true} variant="largeLeaderboard" className="mx-auto" />
          </div>
          <div className="block md:hidden">
            <AdBanner showPlaceholder={true} variant="mobileBanner" className="mx-auto" />
          </div>
        </div>
        {/* More Categories */}
        <div className="mb-8">
          <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">More Categories</h2>
          <p className="text-gray-400 mb-4">Explore different game genres</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {mainCategories.map((cat, i) => (
              <CategoryCard key={i} category={cat} />
            ))}
          </div>
        </div>
        {/* Final ad for better content flow */}
        <div className="mb-8">
          <div className="hidden md:block">
            <AdBanner showPlaceholder={true} variant="largeLeaderboard" className="mx-auto" />
          </div>
          <div className="block md:hidden">
            <AdBanner showPlaceholder={true} variant="mobileBanner" className="mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
} 