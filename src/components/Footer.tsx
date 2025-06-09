
import { Youtube, X } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: X, url: 'https://twitter.com/ironmind', label: 'X (Twitter)' },
    { icon: Youtube, url: 'https://youtube.com/@ironmind', label: 'YouTube' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="font-oswald text-2xl font-bold text-white mb-4">
              Iron<span className="text-red-500">Mind</span>
            </div>
            <p className="text-gray-400 font-inter">
              Mental survival kit for men rebuilding after divorce.
            </p>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-4">About</h4>
            <ul className="space-y-2 text-gray-400 font-inter">
              <li>
                <button 
                  onClick={() => scrollToSection('how-it-works')} 
                  className="hover:text-red-400 transition-colors text-left"
                >
                  How It Works
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="hover:text-red-400 transition-colors text-left"
                >
                  Our Story
                </button>
              </li>
              <li>
                <a href="mailto:contact@ironmind.com" className="hover:text-red-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400 font-inter">
              <li>
                <a 
                  href="/terms" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-red-400 transition-colors"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a 
                  href="/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-red-400 transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-oswald text-lg font-bold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 font-inter">
          <p>&copy; 2024 IronMind. All rights reserved.</p>
          <p className="text-sm mt-4 md:mt-0">
            <span className="text-red-400 font-bold">Disclaimer:</span> Not medical advice. For emotional support only.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
