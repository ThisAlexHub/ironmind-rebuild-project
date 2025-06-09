
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Features', href: '#features' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Get Early Access', href: '#early-access' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-steel-navy/90 backdrop-blur-sm border-b border-steel-gunmetal">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="font-oswald text-2xl font-bold text-white">
            Iron<span className="text-steel-orange">Mind</span>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-steel-light hover:text-steel-orange transition-colors font-inter"
              >
                {item.name}
              </a>
            ))}
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
          <nav className="md:hidden py-4 border-t border-steel-gunmetal">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block py-2 text-steel-light hover:text-steel-orange transition-colors font-inter"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
