import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import en from './locales/en.json'
import ru from './locales/ru.json'
import es from './locales/es.json'
import de from './locales/de.json'
import it from './locales/it.json'
import fr from './locales/fr.json'

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            ru: { translation: ru },
        },
        fallbackLng: 'en',
        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lng',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            caches: ['localStorage', 'cookie'],
        },
        supportedLngs: ['en', 'ru'],
        lng: getInitialLanguage(),
        interpolation: { escapeValue: false },
    })

function getInitialLanguage() {
    const navLang = navigator.language || navigator.languages[0] || '';
    if (navLang.startsWith('ru')) return 'ru';
    const exSovietCountries = [
        'RU', 'BY', 'UA', 'KZ', 'KG', 'UZ', 'TJ', 'TM', 'AZ', 'AM', 'GE', 'MD', 'LV', 'LT', 'EE'
    ];
    const region = navLang.split('-')[1];
    if (region && exSovietCountries.includes(region.toUpperCase())) return 'ru';
    return 'en';
}

createRoot(document.getElementById("root")!).render(<App />);
