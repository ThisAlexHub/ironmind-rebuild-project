
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import EmailCaptureModal from './EmailCaptureModal';

const HeroSection = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Welcome to the rebuild.",
        description: "Check your email for early access instructions.",
      });
      setEmail('');
    }
  };

  return (
    <>
      <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        {/* Animated overlay particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-600/30 rounded-full animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-slate-500/40 rounded-full animate-float-medium"></div>
          <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-yellow-700/20 rounded-full animate-float-fast"></div>
          <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-slate-600/30 rounded-full animate-float-slow"></div>
        </div>
        
        {/* Background geometric pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-yellow-600 rotate-45 animate-spin-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-slate-600 rotate-12 animate-pulse-slow"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-green-900 leading-tight section-fade-in">
              She left.<br/>
              <span className="text-yellow-600">Now rebuild</span><br/>
              someone stronger.
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-700 max-w-2xl mx-auto font-inter font-light section-fade-in" style={{animationDelay: '0.2s'}}>
              IronMind is your AI coach built for one mission:<br/>
              <span className="text-yellow-600 font-medium">turn pain into precision.</span>
            </p>
            
            {/* Early Access CTA */}
            <div className="pt-6 space-y-4 section-fade-in" style={{animationDelay: '0.3s'}}>
              <div className="bg-yellow-600/20 border border-yellow-600/30 rounded-lg p-6 max-w-md mx-auto backdrop-blur-sm">
                <div className="text-yellow-600 font-bold text-lg mb-2">
                  50% OFF Launch Special
                </div>
                <div className="text-green-900 font-oswald text-xl mb-2">
                  Just $4.99/month
                </div>
                <div className="text-slate-600 line-through text-sm mb-4">
                  Normally $9.99
                </div>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="iron-button rounded-lg font-oswald text-lg tracking-wide w-full"
                >
                  ⚔️ Get Early Access at 50% Off
                </button>
                <p className="text-slate-600 text-sm mt-2">
                  Be the first to use it. Limited time only.
                </p>
              </div>
            </div>
            
            <div className="pt-4 section-fade-in" style={{animationDelay: '0.4s'}}>
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 bg-white/80 border border-slate-400 rounded-lg text-green-900 placeholder-slate-600 focus:outline-none focus:border-yellow-600 transition-colors backdrop-blur-sm"
                  required
                />
                <button
                  type="submit"
                  className="bg-slate-600 hover:bg-slate-700 text-white font-bold py-4 px-6 rounded-lg transition-colors font-oswald"
                >
                  Start Free Trial
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-slate-600 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
      
      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default HeroSection;
