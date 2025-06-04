
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const HeroSection = () => {
  const [email, setEmail] = useState('');
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
    <section className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background geometric pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-red-600 rotate-45"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-gray-600 rotate-12"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="font-oswald text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight section-fade-in">
            She left.<br/>
            <span className="text-red-500">Now rebuild</span><br/>
            someone stronger.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-inter font-light section-fade-in" style={{animationDelay: '0.2s'}}>
            IronMind is your AI coach built for one mission:<br/>
            <span className="text-red-400 font-medium">turn pain into precision.</span>
          </p>
          
          <div className="pt-8 section-fade-in" style={{animationDelay: '0.4s'}}>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
                required
              />
              <button
                type="submit"
                className="iron-button rounded-lg font-oswald text-lg tracking-wide"
              >
                ⚔️ Start Free Trial
              </button>
            </form>
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
  );
};

export default HeroSection;
