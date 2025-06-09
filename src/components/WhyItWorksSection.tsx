
import { useEffect, useRef, useState } from 'react';
import { Brain, Users, Shield, TrendingUp } from 'lucide-react';

const WhyItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const reasons = [
    {
      icon: Brain,
      title: "Built on the Full Psychology Arsenal",
      description: "Cognitive Behavioral Therapy • Stoic Philosophy • Masculine Psychology • Crisis Intervention • Resilience Training",
      delay: "0s"
    },
    {
      icon: Users,
      title: "Trained with Real Conversations",
      description: "1000+ hours of real men talking to therapists, coaches, and mentors. Not academic theory. Real experience.",
      delay: "0.2s"
    },
    {
      icon: Shield,
      title: "Think Therapist Meets Special Forces",
      description: "We don't coddle. We challenge. We guide. We empower. Built to make you stronger, not comfortable.",
      delay: "0.4s"
    },
    {
      icon: TrendingUp,
      title: "Constantly Evolving",
      description: "Every conversation makes it smarter. Every user makes it better. Always learning. Always improving.",
      delay: "0.6s"
    }
  ];

  return (
    <section ref={sectionRef} id="how-it-works" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`font-oswald text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Why This AI Actually Works
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className={`flex items-start space-x-6 p-8 bg-black/50 rounded-lg border border-gray-800 hover:border-red-600/50 transition-all duration-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}
              style={{animationDelay: reason.delay}}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center">
                  <reason.icon className="w-8 h-8 text-white" />
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="font-oswald text-2xl font-bold text-white mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-300 font-inter text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
          <div className="text-2xl md:text-3xl font-oswald font-bold text-red-500 mb-2">
            Built for men. Built to help.
          </div>
          <div className="text-xl text-white font-oswald">
            No fluff. Just power.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyItWorksSection;
