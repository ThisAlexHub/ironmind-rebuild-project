import { useState } from 'react';
import { useEmailSignup } from '@/hooks/useEmailSignup';
import { Instagram } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const EmailSignup = () => {
  const [email, setEmail] = useState('');
  const { submitEmail, isLoading } = useEmailSignup();
  const { t } = useTranslation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const success = await submitEmail(email);
      if (success) {
        setEmail('');
      }
    }
  };

  const socialLinks = [
    { icon: Instagram, url: 'https://www.instagram.com/ironmindio/', label: 'Instagram' },
  ];

  return (
    <section id="early-access" className="py-16 bg-red-600">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-white mb-4">
            {t('emailSignup.cta')}
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto mb-8">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 bg-white text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              required
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-black hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg transition-colors font-oswald text-lg disabled:opacity-50"
            >
              {isLoading ? 'Signing Up...' : '⚔️ Sign Up'}
            </button>
          </form>

          <div className="block w-full mt-24">
            <div className="flex justify-center space-x-6">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors group"
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSignup;
