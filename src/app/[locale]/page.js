'use client';

import Image from "next/image";
import Link from "next/link";
import { use } from 'react';
import { useTranslations } from '@/utils/translations';
import AdBanner from '@/components/AdBanner';
import GameCard from '@/components/GameCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Mock featured games data
const featuredGames = [
  {
    id: 1,
    title: "Adventure Quest",
    slug: "adventure-quest",
    image: "/img-placeholder.svg",
    rating: 4.8,
    genre: "Adventure"
  },
  {
    id: 2,
    title: "Puzzle Master",
    slug: "puzzle-master",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "Puzzle"
  },
  {
    id: 3,
    title: "Racing Legends",
    slug: "racing-legends",
    image: "/img-placeholder.svg",
    rating: 4.9,
    genre: "Racing"
  },
  {
    id: 4,
    title: "Strategy Empire",
    slug: "strategy-empire",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "Strategy"
  },
  {
    id: 5,
    title: "Space Explorer",
    slug: "space-explorer",
    image: "/img-placeholder.svg",
    rating: 4.5,
    genre: "Sci-Fi"
  },
  {
    id: 6,
    title: "Medieval Kingdom",
    slug: "medieval-kingdom",
    image: "/img-placeholder.svg",
    rating: 4.4,
    genre: "Fantasy"
  },
  {
    id: 7,
    title: "Cyberpunk 2077",
    slug: "cyberpunk-2077",
    image: "/img-placeholder.svg",
    rating: 4.3,
    genre: "RPG"
  },
  {
    id: 8,
    title: "Sports Champion",
    slug: "sports-champion",
    image: "/img-placeholder.svg",
    rating: 4.2,
    genre: "Sports"
  },
  {
    id: 9,
    title: "Horror Night",
    slug: "horror-night",
    image: "/img-placeholder.svg",
    rating: 4.1,
    genre: "Horror"
  },
  {
    id: 10,
    title: "Music Maker",
    slug: "music-maker",
    image: "/img-placeholder.svg",
    rating: 4.0,
    genre: "Music"
  },
  {
    id: 11,
    title: "Cooking Master",
    slug: "cooking-master",
    image: "/img-placeholder.svg",
    rating: 3.9,
    genre: "Simulation"
  },
  {
    id: 12,
    title: "Art Studio",
    slug: "art-studio",
    image: "/img-placeholder.svg",
    rating: 3.8,
    genre: "Creative"
  },
  {
    id: 13,
    title: "Fitness Trainer",
    slug: "fitness-trainer",
    image: "/img-placeholder.svg",
    rating: 3.7,
    genre: "Fitness"
  }
];

// Mock top 10 games data
const top10Games = [
  {
    id: 101,
    title: "The Legend of Zelda",
    slug: "legend-of-zelda",
    image: "/img-placeholder.svg",
    rating: 5.0,
    genre: "Adventure"
  },
  {
    id: 102,
    title: "Super Mario Bros",
    slug: "super-mario-bros",
    image: "/img-placeholder.svg",
    rating: 4.9,
    genre: "Platformer"
  },
  {
    id: 103,
    title: "Tetris",
    slug: "tetris",
    image: "/img-placeholder.svg",
    rating: 4.9,
    genre: "Puzzle"
  },
  {
    id: 104,
    title: "Pac-Man",
    slug: "pac-man",
    image: "/img-placeholder.svg",
    rating: 4.8,
    genre: "Arcade"
  },
  {
    id: 105,
    title: "Donkey Kong",
    slug: "donkey-kong",
    image: "/img-placeholder.svg",
    rating: 4.8,
    genre: "Platformer"
  },
  {
    id: 106,
    title: "Space Invaders",
    slug: "space-invaders",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "Shooter"
  },
  {
    id: 107,
    title: "Pong",
    slug: "pong",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "Sports"
  },
  {
    id: 108,
    title: "Asteroids",
    slug: "asteroids",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "Shooter"
  },
  {
    id: 109,
    title: "Breakout",
    slug: "breakout",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "Arcade"
  },
  {
    id: 110,
    title: "Centipede",
    slug: "centipede",
    image: "/img-placeholder.svg",
    rating: 4.5,
    genre: "Shooter"
  }
];

export default function Home({ params }) {
  const { locale } = use(params);
  const { t } = useTranslations(locale);

  return (
    <div className="relative -mx-4 -mt-4">
      {/* Hero Background */}
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/hero-bg.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Hero Content */}
      <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-2 z-10 p-10">
        <div>
          <h1 className="text-2xl">{t('home.title', 'Welcome to Spelle.nl')}</h1>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-4">
          <div className="bg-[#29285C] rounded-lg p-4 transition-colors flex flex-row items-center gap-4">
            <Image src="/007-game-controller.svg" alt="Home" width={36} height={36} />
            <p className="text-secondary text-md">{t('home.gamesCount', '3000+ games')}</p>
          </div>
          <div className="bg-[#1E1D4B] rounded-lg p-4 transition-colors flex flex-row items-center gap-4">
            <Image src="/008-free.svg" alt="Home" width={36} height={36} />
            <p className="text-secondary text-md">{t('home.allFree', 'All for free')}</p>
          </div>
          <div className="bg-[#44437C] rounded-lg p-4 transition-colors flex flex-row items-center gap-4">
            <Image src="/009-fast-time.svg" alt="Home" width={36} height={36} />
            <p className="text-secondary text-md">{t('home.noInstallation', 'No installation')}</p>
          </div>
          <div className="bg-[#282848] rounded-lg p-4 transition-colors flex flex-row items-center gap-4">
            <Image src="/010-friendship.svg" alt="Home" width={36} height={36} />
            <p className="text-secondary text-md">{t('home.playWithFriends', 'Play with friends')}</p>
          </div>
        </div>
      </div>

      {/* Featured Games Section */}
      <div className="relative z-10 px-10 pb-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{t('home.featuredGames', 'Featured Games')}</h2>
          <p className="text-gray-400">{t('home.featuredGamesSubtitle', 'Discover the most popular games')}</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredGames.map((game, index) => (
            <GameCard 
              key={game.id}
              game={game}
              index={index}
              isFeatured={true}
              locale={locale}
            />
          ))}
        </div>
      </div>
      <AdBanner showPlaceholder={true} className="text-center" />
      {/* Top 10 Games Section */}
      <div className="relative z-10 px-10 pb-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-2">{t('home.top10Games', 'Top 10 Games of All Time')}</h2>
          <p className="text-gray-400">{t('home.top10GamesSubtitle', 'The most legendary games ever created')}</p>
        </div>
        
        <div className="relative overflow-hidden w-full">
          <Carousel
            opts={{
              align: "start",
              loop: true,
              slidesToScroll: 1,
            }}
            className="max-w-[calc(100vw-5rem)]"
          >
            <CarouselContent className="">
              {top10Games.map((game, index) => (
                <CarouselItem key={game.id} className="pt-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <GameCard 
                    game={game}
                    index={index}
                    isTop10={true}
                    locale={locale}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-700 border-[var(--brand-background)] text-white left-4 h-12 w-12 hover:bg-gray-600 hover:scale-110 transition-all duration-200">
              <Image src="/arrow-forward.svg" alt="Previous" width={20} height={20} className="rotate-180" unoptimized />
            </CarouselPrevious>
            <CarouselNext className="bg-gray-700 border-[var(--brand-background)] text-white right-4 h-12 w-12 hover:bg-gray-600 hover:scale-110 transition-all duration-200">
              <Image src="/arrow-forward.svg" alt="Next" width={20} height={20} unoptimized />
            </CarouselNext>
          </Carousel>
        </div>
      </div>
      <AdBanner showPlaceholder={true} className="text-center" />
      
    </div>
  );
} 