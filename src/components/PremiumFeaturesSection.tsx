import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, MessageCircle, Download, Target, Lock, Zap } from 'lucide-react';
import EmailCaptureModal from './EmailCaptureModal';

const PremiumFeaturesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: Clock,
      title: "24/7 AI Support — No Filters",
      description: "Available when you need it most. 3 AM breakdown? We're here.",
      delay: "0s"
    },
    {
      icon: MessageCircle,
      title: "Real Talk, Real Topics",
      description: "Anger • Guilt • Missing your kids • Financial stress • Dating again • Self-worth",
      delay: "0.2s"
    },
    {
      icon: Target,
      title: "Track Your Mental State",
      description: "Monitor progress. See patterns. Build momentum.",
      badge: "Coming Soon",
      delay: "0.4s"
    },
    {
      icon: Download,
      title: "Export Your Conversations",
      description: "Own your data. Review your growth.",
      badge: "Coming Soon",
      delay: "0.6s"
    },
    {
      icon: Zap,
      title: "Daily Gut Checks",
      description: "Quick check-ins to keep you accountable and moving forward.",
      delay: "0.8s"
    },
    {
      icon: Lock,
      title: "100% Private. Always.",
      description: "No therapist notes. No insurance records. Just you and the rebuild.",
      delay: "1s"
    }
  ];

  return (
    <>
      <section ref={sectionRef} id="features" className="py-20 bg-gradient-to-b from-steel-navy to-steel-gunmetal">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`font-oswald text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              What You Get When You Go Premium
            </h2>
            <div className={`text-xl md:text-2xl text-steel-light max-w-3xl mx-auto font-inter ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{animationDelay: '0.2s'}}>
              This isn't therapy. It's a <span className="text-steel-orange font-bold">mental survival kit</span>.<br/>
              Built for men. Built for now.
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 p-6 bg-steel-navy/30 rounded-lg border border-steel-gunmetal/50 hover:border-steel-orange/50 transition-all duration-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{animationDelay: feature.delay}}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-steel-orange rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-oswald text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    {feature.badge && (
                      <span className="bg-steel-orange/20 text-steel-orange px-3 py-1 rounded-full text-sm font-medium">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-steel-light font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className={`text-center space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '1.2s'}}>
            <div className="text-xl text-steel-light font-inter max-w-2xl mx-auto">
              <span className="text-white font-bold">Why It Matters:</span> You're not broken. You're rebuilding. 
              This gives you the tools to face the storm and come out stronger on the other side.
            </div>
            
            <div className="pt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="iron-button rounded-lg font-oswald text-xl px-8 py-4 mb-4"
              >
                Get it now for $4.99. Cancel anytime.
              </button>
              <p className="text-steel-light/70 font-inter">
                50% off launch pricing. Limited time.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <EmailCaptureModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default PremiumFeaturesSection;
