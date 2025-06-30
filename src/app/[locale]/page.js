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

// Mock most popular this week games data
const mostPopularThisWeek = [
  {
    id: 201,
    title: "Fortnite Battle Royale",
    slug: "fortnite-battle-royale",
    image: "/img-placeholder.svg",
    rating: 4.8,
    genre: "Battle Royale"
  },
  {
    id: 202,
    title: "Minecraft Survival",
    slug: "minecraft-survival",
    image: "/img-placeholder.svg",
    rating: 4.9,
    genre: "Sandbox"
  },
  {
    id: 203,
    title: "Among Us",
    slug: "among-us",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "Social Deduction"
  },
  {
    id: 204,
    title: "Fall Guys",
    slug: "fall-guys",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "Party"
  },
  {
    id: 205,
    title: "Valorant",
    slug: "valorant",
    image: "/img-placeholder.svg",
    rating: 4.5,
    genre: "FPS"
  },
  {
    id: 206,
    title: "Genshin Impact",
    slug: "genshin-impact",
    image: "/img-placeholder.svg",
    rating: 4.4,
    genre: "RPG"
  },
  {
    id: 207,
    title: "Rocket League",
    slug: "rocket-league",
    image: "/img-placeholder.svg",
    rating: 4.3,
    genre: "Sports"
  },
  {
    id: 208,
    title: "Apex Legends",
    slug: "apex-legends",
    image: "/img-placeholder.svg",
    rating: 4.2,
    genre: "Battle Royale"
  },
  {
    id: 209,
    title: "League of Legends",
    slug: "league-of-legends",
    image: "/img-placeholder.svg",
    rating: 4.1,
    genre: "MOBA"
  },
  {
    id: 210,
    title: "Call of Duty Warzone",
    slug: "call-of-duty-warzone",
    image: "/img-placeholder.svg",
    rating: 4.0,
    genre: "Battle Royale"
  }
];

// Mock latest games data
const latestGames = [
  {
    id: 301,
    title: "Cyberpunk 2077: Phantom Liberty",
    slug: "cyberpunk-2077-phantom-liberty",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "RPG"
  },
  {
    id: 302,
    title: "Baldur's Gate 3",
    slug: "baldurs-gate-3",
    image: "/img-placeholder.svg",
    rating: 4.9,
    genre: "RPG"
  },
  {
    id: 303,
    title: "Starfield",
    slug: "starfield",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "Sci-Fi"
  },
  {
    id: 304,
    title: "Mortal Kombat 1",
    slug: "mortal-kombat-1",
    image: "/img-placeholder.svg",
    rating: 4.5,
    genre: "Fighting"
  },
  {
    id: 305,
    title: "Spider-Man 2",
    slug: "spider-man-2",
    image: "/img-placeholder.svg",
    rating: 4.8,
    genre: "Action"
  },
  {
    id: 306,
    title: "Alan Wake 2",
    slug: "alan-wake-2",
    image: "/img-placeholder.svg",
    rating: 4.4,
    genre: "Horror"
  },
  {
    id: 307,
    title: "Super Mario Bros Wonder",
    slug: "super-mario-bros-wonder",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "Platformer"
  },
  {
    id: 308,
    title: "Assassin's Creed Mirage",
    slug: "assassins-creed-mirage",
    image: "/img-placeholder.svg",
    rating: 4.3,
    genre: "Action"
  },
  {
    id: 309,
    title: "Final Fantasy XVI",
    slug: "final-fantasy-xvi",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "RPG"
  },
  {
    id: 310,
    title: "Street Fighter 6",
    slug: "street-fighter-6",
    image: "/img-placeholder.svg",
    rating: 4.5,
    genre: "Fighting"
  }
];

// Mock action games data
const actionGames = [
  {
    id: 401,
    title: "Grand Theft Auto V",
    slug: "grand-theft-auto-v",
    image: "/img-placeholder.svg",
    rating: 4.8,
    genre: "Action"
  },
  {
    id: 402,
    title: "Red Dead Redemption 2",
    slug: "red-dead-redemption-2",
    image: "/img-placeholder.svg",
    rating: 4.9,
    genre: "Action"
  },
  {
    id: 403,
    title: "God of War Ragnarök",
    slug: "god-of-war-ragnarok",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "Action"
  },
  {
    id: 404,
    title: "Devil May Cry 5",
    slug: "devil-may-cry-5",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "Action"
  },
  {
    id: 405,
    title: "Bayonetta 3",
    slug: "bayonetta-3",
    image: "/img-placeholder.svg",
    rating: 4.5,
    genre: "Action"
  },
  {
    id: 406,
    title: "Metal Gear Solid V",
    slug: "metal-gear-solid-v",
    image: "/img-placeholder.svg",
    rating: 4.4,
    genre: "Action"
  },
  {
    id: 407,
    title: "Uncharted 4",
    slug: "uncharted-4",
    image: "/img-placeholder.svg",
    rating: 4.3,
    genre: "Action"
  },
  {
    id: 408,
    title: "Tomb Raider",
    slug: "tomb-raider",
    image: "/img-placeholder.svg",
    rating: 4.2,
    genre: "Action"
  },
  {
    id: 409,
    title: "Hitman 3",
    slug: "hitman-3",
    image: "/img-placeholder.svg",
    rating: 4.1,
    genre: "Action"
  },
  {
    id: 410,
    title: "Just Cause 4",
    slug: "just-cause-4",
    image: "/img-placeholder.svg",
    rating: 4.0,
    genre: "Action"
  }
];

// Mock strategy games data
const strategyGames = [
  {
    id: 501,
    title: "Civilization VI",
    slug: "civilization-vi",
    image: "/img-placeholder.svg",
    rating: 4.8,
    genre: "Strategy"
  },
  {
    id: 502,
    title: "Total War: Warhammer III",
    slug: "total-war-warhammer-iii",
    image: "/img-placeholder.svg",
    rating: 4.7,
    genre: "Strategy"
  },
  {
    id: 503,
    title: "Europa Universalis IV",
    slug: "europa-universalis-iv",
    image: "/img-placeholder.svg",
    rating: 4.6,
    genre: "Strategy"
  },
  {
    id: 504,
    title: "Crusader Kings III",
    slug: "crusader-kings-iii",
    image: "/img-placeholder.svg",
    rating: 4.5,
    genre: "Strategy"
  },
  {
    id: 505,
    title: "Age of Empires IV",
    slug: "age-of-empires-iv",
    image: "/img-placeholder.svg",
    rating: 4.4,
    genre: "Strategy"
  },
  {
    id: 506,
    title: "XCOM 2",
    slug: "xcom-2",
    image: "/img-placeholder.svg",
    rating: 4.3,
    genre: "Strategy"
  },
  {
    id: 507,
    title: "Stellaris",
    slug: "stellaris",
    image: "/img-placeholder.svg",
    rating: 4.2,
    genre: "Strategy"
  },
  {
    id: 508,
    title: "Hearts of Iron IV",
    slug: "hearts-of-iron-iv",
    image: "/img-placeholder.svg",
    rating: 4.1,
    genre: "Strategy"
  },
  {
    id: 509,
    title: "Company of Heroes 3",
    slug: "company-of-heroes-3",
    image: "/img-placeholder.svg",
    rating: 4.0,
    genre: "Strategy"
  },
  {
    id: 510,
    title: "Warcraft III",
    slug: "warcraft-iii",
    image: "/img-placeholder.svg",
    rating: 3.9,
    genre: "Strategy"
  }
];

// Mock categories data
const categories = [
  {
    id: 1,
    title: "Action",
    slug: "action",
    icon: "/005-boxing-gloves.svg",
    gameCount: 1250
  },
  {
    id: 2,
    title: "Adventure",
    slug: "adventure",
    icon: "/006-compass.svg",
    gameCount: 890
  },
  {
    id: 3,
    title: "Strategy",
    slug: "strategy",
    icon: "/strategy.svg",
    gameCount: 650
  },
  {
    id: 4,
    title: "RPG",
    slug: "rpg",
    icon: "/role-model.svg",
    gameCount: 720
  },
  {
    id: 5,
    title: "Sports",
    slug: "sports",
    icon: "/sports.svg",
    gameCount: 450
  },
  {
    id: 6,
    title: "Puzzle",
    slug: "puzzle",
    icon: "/puzzle.svg",
    gameCount: 380
  },
  {
    id: 7,
    title: "Racing",
    slug: "racing",
    icon: "/racing-car.svg",
    gameCount: 320
  },
  {
    id: 8,
    title: "Horror",
    slug: "horror",
    icon: "/horror.svg",
    gameCount: 280
  }
];

// Mock blogs data
const blogs = [
  {
    id: 601,
    title: "Top 10 Must-Play Games of 2024",
    slug: "top-10-must-play-games-2024",
    image: "/img-placeholder.svg",
    excerpt: "Discover the most exciting games that are taking the gaming world by storm this year.",
    author: "Gaming Expert",
    date: "2024-01-15",
    readTime: "5 min read"
  },
  {
    id: 602,
    title: "The Evolution of Mobile Gaming",
    slug: "evolution-of-mobile-gaming",
    image: "/img-placeholder.svg",
    excerpt: "How mobile games have transformed from simple puzzles to complex multiplayer experiences.",
    author: "Tech Writer",
    date: "2024-01-12",
    readTime: "8 min read"
  },
  {
    id: 603,
    title: "Best Strategy Games for Beginners",
    slug: "best-strategy-games-beginners",
    image: "/img-placeholder.svg",
    excerpt: "Perfect entry points for newcomers to the strategy genre.",
    author: "Strategy Guru",
    date: "2024-01-10",
    readTime: "6 min read"
  },
  {
    id: 604,
    title: "Gaming Trends to Watch in 2024",
    slug: "gaming-trends-2024",
    image: "/img-placeholder.svg",
    excerpt: "From AI integration to cloud gaming, here's what's shaping the future of gaming.",
    author: "Industry Analyst",
    date: "2024-01-08",
    readTime: "7 min read"
  },
  {
    id: 605,
    title: "How to Build the Perfect Gaming Setup",
    slug: "perfect-gaming-setup",
    image: "/img-placeholder.svg",
    excerpt: "Essential tips and recommendations for creating an optimal gaming environment.",
    author: "Setup Specialist",
    date: "2024-01-05",
    readTime: "10 min read"
  },
  {
    id: 606,
    title: "The Psychology Behind Addictive Games",
    slug: "psychology-addictive-games",
    image: "/img-placeholder.svg",
    excerpt: "Understanding what makes certain games so compelling and engaging.",
    author: "Psychologist",
    date: "2024-01-03",
    readTime: "9 min read"
  },
  {
    id: 607,
    title: "Indie Games That Deserve Your Attention",
    slug: "indie-games-attention",
    image: "/img-placeholder.svg",
    excerpt: "Hidden gems from independent developers that are worth playing.",
    author: "Indie Enthusiast",
    date: "2024-01-01",
    readTime: "6 min read"
  },
  {
    id: 608,
    title: "Gaming and Mental Health: A Positive Connection",
    slug: "gaming-mental-health",
    image: "/img-placeholder.svg",
    excerpt: "How video games can actually benefit your mental well-being when played mindfully.",
    author: "Health Expert",
    date: "2023-12-28",
    readTime: "8 min read"
  }
];

export default function Home({ params }) {
  const { locale } = use(params);
  const { t } = useTranslations(locale);

  return (
    <div>
      {/* Hero and Featured Games Section with Background */}
      <div className="relative">
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
            <div className="flex flex-col items-center lg:items-start mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg">
                <Image 
                  src="/logo.png" 
                  alt="Spelle.nl Logo" 
                  width={128} 
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-bold text-center lg:text-left">{t('home.title', 'Welcome to Spelle.nl')}</h1>
            </div>
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
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">{t('home.featuredGames', 'Featured Games')}</h2>
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
      </div>

      <AdBanner showPlaceholder={true} className="text-center" />
      
      {/* Remaining sections with continuous gradient background */}
      <div className="bg-gradient-to-br from-[var(--brand-background)] via-[#121252] to-[[var(--brand-background)]">
        {/* Top 10 Games Section */}
        <div className="px-10 pt-10 pb-10">
          <div className="mb-8">
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">{t('home.top10Games', 'Top 10 Games of All Time')}</h2>
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
        
        {/* Most Popular This Week Section */}
        <div className="px-10 pb-10">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">{t('home.mostPopularThisWeek', 'Most Popular This Week')}</h2>
                <p className="text-gray-400">{t('home.mostPopularThisWeekSubtitle', 'Trending games this week')}</p>
              </div>
              <Link 
                href={`/${locale}/categories/most-popular-this-week`}
                className="border border-[var(--brand-active)] text-[var(--brand-active)] hover:bg-[var(--brand-active)] hover:text-white px-4 py-2 rounded-full transition-colors duration-200 text-md font-medium self-start sm:self-auto"
              >
                {t('home.seeAll', 'See All')}
              </Link>
            </div>
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
                {mostPopularThisWeek.map((game, index) => (
                  <CarouselItem key={game.id} className="pt-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <GameCard 
                      game={game}
                      index={index}
                      isPopular={true}
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
        
        {/* Latest Games Section */}
        <div className="px-10 pb-10">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">{t('home.latestGames', 'Latest Games')}</h2>
                <p className="text-gray-400">{t('home.latestGamesSubtitle', 'New games released recently')}</p>
              </div>
              <Link 
                href={`/${locale}/categories/latest-games`}
                className="border border-[var(--brand-active)] text-[var(--brand-active)] hover:bg-[var(--brand-active)] hover:text-white px-4 py-2 rounded-full transition-colors duration-200 text-md font-medium self-start sm:self-auto"
              >
                {t('home.seeAll', 'See All')}
              </Link>
            </div>
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
                {latestGames.map((game, index) => (
                  <CarouselItem key={game.id} className="pt-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <GameCard 
                      game={game}
                      index={index}
                      isLatest={true}
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
        
        {/* Action Games Section */}
        <div className="px-10 pb-10">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">{t('home.actionGames', 'Action Games')}</h2>
                <p className="text-gray-400">{t('home.actionGamesSubtitle', 'High-octane action and adventure')}</p>
              </div>
              <Link 
                href={`/${locale}/categories/action`}
                className="border border-[var(--brand-active)] text-[var(--brand-active)] hover:bg-[var(--brand-active)] hover:text-white px-4 py-2 rounded-full transition-colors duration-200 text-md font-medium self-start sm:self-auto"
              >
                {t('home.seeAll', 'See All')}
              </Link>
            </div>
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
                {actionGames.map((game, index) => (
                  <CarouselItem key={game.id} className="pt-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <GameCard 
                      game={game}
                      index={index}
                      isAction={true}
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
        
        {/* Strategy Games Section */}
        <div className="px-10 pb-10">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">{t('home.strategyGames', 'Strategy Games')}</h2>
                <p className="text-gray-400">{t('home.strategyGamesSubtitle', 'Think, plan, and conquer')}</p>
              </div>
              <Link 
                href={`/${locale}/categories/strategy`}
                className="border border-[var(--brand-active)] text-[var(--brand-active)] hover:bg-[var(--brand-active)] hover:text-white px-4 py-2 rounded-full transition-colors duration-200 text-md font-medium self-start sm:self-auto"
              >
                {t('home.seeAll', 'See All')}
              </Link>
            </div>
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
                {strategyGames.map((game, index) => (
                  <CarouselItem key={game.id} className="pt-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <GameCard 
                      game={game}
                      index={index}
                      isStrategy={true}
                      locale={locale}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="bg-gray-700 border-[var(--brand-background)] text-white left-4 h-12 w-12 hover:bg-gray-600 hover:scale-110 transition-all duration-200">
                <Image src="/arrow-forward.svg" alt="Previous" width={20} height={20} className="rotate-180" unoptimized />
              </CarouselPrevious>
              <CarouselNext className="bg-gray-700 border-[#3B3859] text-white right-4 h-12 w-12 hover:bg-gray-600 hover:scale-110 transition-all duration-200">
                <Image src="/arrow-forward.svg" alt="Next" width={20} height={20} unoptimized />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
        <AdBanner showPlaceholder={true} className="text-center" />
        
        {/* Categories Section */}
        <div className="px-10 pb-10">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Image 
                    src="/003-application.svg" 
                    alt="Categories" 
                    width={48} 
                    height={48}
                  />
                  <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent">{t('home.categories', 'Game Categories')}</h2>
                </div>
                <p className="text-gray-400">{t('home.categoriesSubtitle', 'Explore games by category')}</p>
              </div>
              <Link 
                href={`/${locale}/categories`}
                className="border border-[var(--brand-active)] text-[var(--brand-active)] hover:bg-[var(--brand-active)] hover:text-white px-4 py-2 rounded-full transition-colors duration-200 text-md font-medium self-start sm:self-auto"
              >
                {t('home.seeAll', 'See All')}
              </Link>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((category) => (
              <Link
                key={category.id}
                href={`/${locale}/categories/${category.slug}`}
                className="bg-gray-700 hover:bg-[#29285C] rounded-lg p-6 transition-all duration-200 group"
              >
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-12 h-12 flex items-center justify-center">
                    <Image 
                      src={category.icon} 
                      alt={category.title} 
                      width={48} 
                      height={48}
                      className="group-hover:scale-110 transition-transform duration-200"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg">{category.title}</h3>
                    <p className="text-gray-400 text-sm">{category.gameCount} games</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <AdBanner showPlaceholder={true} className="text-center" />
        
        {/* Blogs Section */}
        <div className="px-10 pb-10">
          <div className="mb-8">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <Image 
                    src="/004-blogging.svg" 
                    alt="Blogs" 
                    width={48} 
                    height={48}
                  />
                  <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent">{t('home.blogs', 'Gaming Blog')}</h2>
                </div>
                <p className="text-gray-400">{t('home.blogsSubtitle', 'Latest insights and gaming news')}</p>
              </div>
              <Link 
                href={`/${locale}/blogs`}
                className="border border-[var(--brand-active)] text-[var(--brand-active)] hover:bg-[var(--brand-active)] hover:text-white px-4 py-2 rounded-full transition-colors duration-200 text-md font-medium self-start sm:self-auto"
              >
                {t('home.seeAll', 'See All')}
              </Link>
            </div>
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
                {blogs.map((blog, index) => (
                  <CarouselItem key={blog.id} className="pt-2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                    <Link
                      href={`/${locale}/blogs/${blog.slug}`}
                      className="block bg-gray-700 hover:bg-[#29285C] rounded-lg overflow-hidden transition-all duration-200 group"
                    >
                      <div className="aspect-video relative overflow-hidden">
                        <Image 
                          src={blog.image} 
                          alt={blog.title} 
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-200"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-[var(--brand-active)] transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                          {blog.excerpt}
                        </p>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{blog.author}</span>
                          <span>{blog.readTime}</span>
                        </div>
                      </div>
                    </Link>
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
      
    </div>
  );
} 