import { useState } from 'react';
import { useEmailSignup } from '@/hooks/useEmailSignup';
import EmailCaptureModal from './EmailCaptureModal';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { submitEmail, isLoading } = useEmailSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      const success = await submitEmail(email);
      if (success) {
        setEmail('');
      }
    }
  };

  return (
    <>
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-24">
        {/* Background geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-red-600 rotate-45"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gray-600 rotate-12"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight section-fade-in">
              She left.<br />
              <span className="text-red-500">Now rebuild</span><br />
              someone stronger.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-inter font-light section-fade-in" style={{ animationDelay: '0.2s' }}>
              IronMind is your AI coach built for one mission:<br />
              <span className="text-red-400 font-medium">turn pain into precision.</span>
            </p>

            {/* Early Access CTA */}
            <div className="pt-6 space-y-4 section-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-red-600/20 border border-red-600/30 rounded-lg p-6 max-w-md mx-auto">
                <div className="text-red-400 font-bold text-lg mb-2">
                  50% OFF Launch Special
                </div>
                <div className="text-white font-oswald text-xl mb-2">
                  Just $4.99/month
                </div>
                <div className="text-gray-400 line-through text-sm mb-4">
                  Normally $9.99
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="iron-button rounded-lg font-oswald text-lg tracking-wide w-full"
                >
                  ⚔️ Get Early Access at 50% Off
                </button>
                <p className="text-gray-400 text-sm mt-2">
                  Be the first to use it. Limited time only.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
