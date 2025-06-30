'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations } from '@/utils/translations';
import Image from 'next/image';

const mockCategories = [
  { name: 'Action', slug: 'action' },
  { name: 'Adventure', slug: 'adventure' },
  { name: 'Puzzle', slug: 'puzzle' },
  { name: 'Strategy', slug: 'strategy' },
  { name: 'Racing', slug: 'racing' },
  { name: 'RPG', slug: 'rpg' },
  { name: 'Simulation', slug: 'simulation' },
  { name: 'Sports', slug: 'sports' },
  { name: 'Fighting', slug: 'fighting' },
  { name: 'Shooter', slug: 'shooter' },
  { name: 'Platformer', slug: 'platformer' },
  { name: 'Stealth', slug: 'stealth' },
  { name: 'Horror', slug: 'horror' },
  { name: 'Comedy', slug: 'comedy' },
  { name: 'Educational', slug: 'educational' },
  { name: 'Music', slug: 'music' },
  { name: 'Dance', slug: 'dance' },
  { name: 'Fitness', slug: 'fitness' },
  { name: 'Cooking', slug: 'cooking' },
  { name: 'Art', slug: 'art' },
  { name: 'Photography', slug: 'photography' },
  { name: 'Travel', slug: 'travel' },
  { name: 'Nature', slug: 'nature' },
  { name: 'Space', slug: 'space' },
  { name: 'Fantasy', slug: 'fantasy' },
  { name: 'Sci-Fi', slug: 'sci-fi' },
  { name: 'Historical', slug: 'historical' },
  { name: 'Medieval', slug: 'medieval' },
  { name: 'Modern', slug: 'modern' },
  { name: 'Futuristic', slug: 'futuristic' },
];

export default function Sidebar({ isSidebarOpen, setSidebarOpen, locale = 'en' }) {
  const [isCategoryOpen, setCategoryOpen] = useState(true);
  const pathname = usePathname();
  const { t } = useTranslations(locale);

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
  const toggleCategory = () => setCategoryOpen(!isCategoryOpen);

  const isActive = (path) => pathname === path;

  return (
    <>
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
      
      <aside className={`fixed top-16 left-0 flex h-screen flex-col border-r border-gray-800 bg-[var(--brand-background)] transition-all duration-300 ease-in-out z-50 ${
        isSidebarOpen 
          ? 'w-[250px]' 
          : 'w-0 lg:w-[4rem]'
      } ${
        isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } overflow-hidden`}>
        <div className={`h-[calc(100vh-4rem-12rem)] p-3 pb-32 overflow-auto ${isSidebarOpen ? 'block' : 'hidden lg:block'}`}>
          <nav>
            <div className="flex flex-col gap-y-4">
              <div>
                <Link href={`/${locale}`} className={`flex items-center text-lg transition-all duration-300 ease-in-out hover:text-[var(--brand-active)] justify-start p-2 hover:bg-white/10 rounded-lg ${isSidebarOpen ? 'w-full' : 'w-10'} ${isActive(`/${locale}`) ? 'text-[var(--brand-active)]' : 'text-gray-200'}`}>
                  <Image src="/001-home.svg" alt="Home" width={24} height={24} unoptimized />
                  {isSidebarOpen && <span className="ml-4 relative transition-opacity duration-300 delay-500 w-32">{t('nav.home', 'Home')}</span>}
                </Link>
              </div>
              <div>
                <Link href={`/${locale}/games/latest`} className={`flex items-center text-lg transition-all duration-300 ease-in-out hover:text-[var(--brand-active)] justify-start p-2 hover:bg-white/10 rounded-lg ${isSidebarOpen ? 'w-full' : 'w-10'} ${isActive(`/${locale}/games/latest`) ? 'text-[var(--brand-active)]' : 'text-gray-200'}`}>
                  <Image src="/002-shuttle.svg" alt="Latest Games" width={24} height={24} unoptimized />
                  {isSidebarOpen && <span className="ml-4 relative transition-opacity duration-300 delay-500 w-32">{t('nav.latestGames', 'Latest Games')}</span>}
                </Link>
              </div>
              <div className={`${isActive(`/${locale}/categories`) ? 'text-[var(--brand-active)]' : 'text-gray-200'}`}>
                <div className="flex items-center justify-between">
                  <Link href={`/${locale}/categories`} className={`flex items-center text-lg transition-all duration-300 ease-in-out hover:text-[var(--brand-active)] p-2 hover:bg-white/10 rounded-lg ${isSidebarOpen ? 'w-full' : 'w-10'} ${isActive(`/${locale}/categories`) ? 'text-[var(--brand-active)]' : 'text-gray-200'}`}>
                    <Image src="/003-application.svg" alt="Categories" width={24} height={24} unoptimized />
                    {isSidebarOpen && <span className="ml-4 relative transition-opacity duration-300 delay-500 w-32">{t('nav.categories', 'Categories')}</span>}
                  </Link>
                  {isSidebarOpen && (
                    <button 
                      onClick={toggleCategory} 
                      className="cursor-pointer border-none bg-transparent p-2 text-lg transition-colors hover:text-[var(--brand-active)] hover:bg-white/10 rounded-lg"
                    >
                      <span>{isCategoryOpen ? '▾' : '▸'}</span>
                    </button>
                  )}
                </div>
                {isSidebarOpen && isCategoryOpen && (
                  <div className="flex flex-col gap-y-4 pl-10 mt-4 ml-4 border-l border-gray-500 mb-10">
                    {mockCategories.map((category) => (
                      <div key={category.slug}>
                        <Link href={`/${locale}/categories/${category.slug}`} className={`text-md transition-colors hover:text-[var(--brand-active)] p-2 hover:bg-white/10 rounded-lg ${isActive(`/${locale}/categories/${category.slug}`) ? 'text-[var(--brand-active)]' : 'text-gray-400'}`}>
                          {t(`categories.${category.slug}`, category.name)}
                        </Link>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
        </div>
        
        {/* Footer Links */}
        {isSidebarOpen && (
          <div className={`h-80 p-3 border-t border-gray-800 bg-[var(--brand-background)]`}>
            <div className="flex flex-col">
              <Link href={`/${locale}/blogs`} className={`text-md transition-colors hover:text-[var(--brand-active)] p-2 hover:bg-white/10 rounded-lg ${isActive(`/${locale}/blogs`) ? 'text-[var(--brand-active)]' : 'text-gray-500'}`}>
                {t('sidebar.footer.blogs', 'Blogs')}
              </Link>
              <Link href={`/${locale}/faq`} className={`text-md transition-colors hover:text-[var(--brand-active)] p-2 hover:bg-white/10 rounded-lg ${isActive(`/${locale}/faq`) ? 'text-[var(--brand-active)]' : 'text-gray-500'}`}>
                {t('sidebar.footer.faq', 'FAQ')}
              </Link>
              <Link href={`/${locale}/contact`} className={`text-md transition-colors hover:text-[var(--brand-active)] p-2 hover:bg-white/10 rounded-lg ${isActive(`/${locale}/contact`) ? 'text-[var(--brand-active)]' : 'text-gray-500'}`}>
                {t('sidebar.footer.contact', 'Contact')}
              </Link>
              <Link href={`/${locale}/privacy-policy`} className={`text-md transition-colors hover:text-[var(--brand-active)] p-2 hover:bg-white/10 rounded-lg ${isActive(`/${locale}/privacy-policy`) ? 'text-[var(--brand-active)]' : 'text-gray-500'}`}>
                {t('sidebar.footer.privacyPolicy', 'Privacy Policy')}
              </Link>
              <Link href={`/${locale}/disclaimer`} className={`text-md transition-colors hover:text-[var(--brand-active)] p-2 hover:bg-white/10 rounded-lg ${isActive(`/${locale}/disclaimer`) ? 'text-[var(--brand-active)]' : 'text-gray-500'}`}>
                {t('sidebar.footer.disclaimer', 'Disclaimer')}
              </Link>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}