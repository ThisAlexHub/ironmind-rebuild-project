import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || 'en');

  const navigation = [
    { name: t('header.features', 'Features'), href: '#features' },
    { name: t('header.pricing', 'Pricing'), href: '#early-access' },
    { name: t('header.getEarlyAccess', 'Get Early Access'), href: '#early-access' },
  ];

  const handleNavigation = (href: string) => {
    setIsMenuOpen(false);
    if (href === '#early-access') {
      // Scroll to the pricing button specifically
      const pricingBtn = document.getElementById('final-cta-pricing-btn');
      if (pricingBtn) {
        pricingBtn.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
      }
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-oswald text-2xl font-bold text-white">
            Iron<span className="text-red-500">Mind</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="text-gray-300 hover:text-red-400 transition-colors font-inter"
              >
                {item.name}
              </button>
            ))}
            <select
              value={language}
              onChange={e => {
                setLanguage(e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
              className="ml-6 px-3 py-1 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-800">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href)}
                className="block w-full text-left py-2 text-gray-300 hover:text-red-400 transition-colors font-inter"
              >
                {item.name}
              </button>
            ))}
            <select
              value={language}
              onChange={e => {
                setLanguage(e.target.value);
                i18n.changeLanguage(e.target.value);
              }}
              className="mt-4 w-full px-3 py-2 rounded bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Select language"
            >
              <option value="en">English</option>
              <option value="ru">Русский</option>
            </select>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
