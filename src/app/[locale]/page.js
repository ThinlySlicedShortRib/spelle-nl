import Image from "next/image";
import Link from "next/link";
import { t } from '@/utils/translations';
import AdBanner from '@/components/AdBanner';
import GameCard from '@/components/GameCard';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  featuredGames,
  top10Games,
  mostPopularThisWeek,
  latestGames,
  actionGames,
  strategyGames,
  categories,
  blogs
} from '@/data/mockData';



// Metadata for SEO
export async function generateMetadata({ params }) {
  const { locale } = await params;
  
  return {
    title: t(locale, 'home.title', 'Welcome to Spelle.nl') + ' - Free Online Games',
    description: t(locale, 'home.description', 'Play thousands of free online games at Spelle.nl. No downloads required. Action, strategy, puzzle, and more games available.'),
    keywords: 'free online games, browser games, action games, strategy games, puzzle games, no download games',
    openGraph: {
      title: t(locale, 'home.title', 'Welcome to Spelle.nl') + ' - Free Online Games',
      description: t(locale, 'home.description', 'Play thousands of free online games at Spelle.nl. No downloads required.'),
      type: 'website',
      locale: locale,
    },
  };
}

export default async function Home({ params }) {
  const { locale } = await params;

  return (
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* Featured Games Section */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 px-10 pb-10">
          <div className="mb-8">
            <h2 className="text-4xl font-semibold bg-gradient-to-r from-white to-[var(--brand-active)] bg-clip-text text-transparent mb-2">{t('home.featuredGames', 'Featured Games')}</h2>
            <p className="text-gray-400">{t('home.featuredGamesSubtitle', 'Discover the most popular games')}</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
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

      <div className="flex justify-center">
        <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
      </div>
      
      {/* Remaining sections with continuous gradient background */}
      <div className="bg-gradient-to-br from-[var(--brand-background)] via-[#121252] to-[[var(--brand-background)]">
        {/* Top 10 Games Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
        <div className="flex justify-center">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>
        
        {/* Most Popular This Week Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
        <div className="flex justify-center">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>
        
        {/* Latest Games Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
        <div className="flex justify-center">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>
        
        {/* Action Games Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
        <div className="flex justify-center">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>
        
        {/* Strategy Games Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <CarouselNext className="bg-gray-700 border-[var(--brand-background)] text-white right-4 h-12 w-12 hover:bg-gray-600 hover:scale-110 transition-all duration-200">
                <Image src="/arrow-forward.svg" alt="Next" width={20} height={20} unoptimized />
              </CarouselNext>
            </Carousel>
          </div>
          </div>
        </div>
        <div className="flex justify-center">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>
        
        {/* Categories Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
        <div className="flex justify-center">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>
        
        {/* Blogs Section */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
        </div>
        <div className="flex justify-center">
          <AdBanner showPlaceholder={true} variant="largeLeaderboard" />
        </div>
      </div>
    </div>
  );
}