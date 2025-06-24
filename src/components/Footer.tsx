import { Github, Shield, Target, Twitter, Youtube, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-brand-charcoal text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-oswald text-2xl font-bold mb-4">IRONMIND</h3>
            <p className="text-brand-silver font-ibm mb-6 max-w-md">
              {t('footer.tagline')}
            </p>
            {/* Social links removed as requested */}
          </div>

          <div>
            <h4 className="font-oswald text-lg font-bold mb-4">{t('footer.company')}</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('what-is-ironmind');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-brand-silver hover:text-brand-bronze transition-colors"
                >
                  {t('footer.about')}
                </button>
              </li>
              <li>
                <a href="https://www.instagram.com/ironmindio/" target="_blank" rel="noopener noreferrer" className="text-brand-silver hover:text-brand-bronze transition-colors font-ibm">
                  {t('footer.blog')}
                </a>
              </li>
              <li>
                <button
                  onClick={() => {
                    const element = document.getElementById('early-access');
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-brand-silver hover:text-brand-bronze transition-colors"
                >
                  {t('footer.contact')}
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-steel/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-brand-silver text-sm font-ibm">
              © 2025 IronMind. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-brand-silver hover:text-brand-bronze transition-colors text-sm font-ibm">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-brand-silver hover:text-brand-bronze transition-colors text-sm font-ibm">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
