'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect, useRef } from 'react';

const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
];

export default function LanguageSwitcher({ currentLocale = 'en' }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const getLocalizedPath = (locale) => {
    const pathSegments = pathname.split('/');
    const supportedLocales = ['en', 'nl', 'de', 'fr'];
    const hasLocale = supportedLocales.includes(pathSegments[1]);
    
    if (hasLocale) {
      // Replace current locale with new locale
      pathSegments[1] = locale;
      return pathSegments.join('/');
    } else {
      // Add locale to path
      return `/${locale}${pathname}`;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
      >
        <span>{languages.find(lang => lang.code === currentLocale)?.flag}</span>
        <span className="hidden sm:inline">
          {languages.find(lang => lang.code === currentLocale)?.name}
        </span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-[var(--brand-background)] border border-gray-500 rounded-lg shadow-lg z-50">
          {languages.map((language) => {
            const localizedPath = getLocalizedPath(language.code);
            console.log(`Language ${language.code}: ${localizedPath}`);
            
            return (
              <Link
                key={language.code}
                href={localizedPath}
                onClick={() => {
                  console.log('Language link clicked:', language.code, localizedPath);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-white/10 transition-colors ${
                  currentLocale === language.code ? 'text-[var(--brand-active)] bg-white/5' : 'text-white'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span>{language.name}</span>
                {currentLocale === language.code && (
                  <svg className="w-4 h-4 ml-auto text-[var(--brand-active)]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
} 