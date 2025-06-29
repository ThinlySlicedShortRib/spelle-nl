import enTranslations from '../translations/en.json';
import nlTranslations from '../translations/nl.json';
import deTranslations from '../translations/de.json';
import frTranslations from '../translations/fr.json';

const translations = {
  en: enTranslations,
  nl: nlTranslations,
  de: deTranslations,
  fr: frTranslations,
  // Add more languages as needed
  // Fallback to English for now
};

export function getTranslations(locale) {
  return translations[locale] || translations.en;
}

export function t(locale, key, fallback = '') {
  const translation = getTranslations(locale);
  
  // Support nested keys like 'nav.home'
  const keys = key.split('.');
  let value = translation;
  
  for (const k of keys) {
    value = value?.[k];
    if (value === undefined) break;
  }
  
  return value || fallback;
}

// Helper function for use in components
export function useTranslations(locale) {
  return {
    t: (key, fallback = '') => t(locale, key, fallback),
    locale,
  };
} 