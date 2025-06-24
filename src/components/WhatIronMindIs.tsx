import { useEffect, useRef, useState } from 'react';
import { Brain, Target, Shield, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const WhatIronMindIs = () => {
  const { t } = useTranslation();
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

  const pillars = [
    {
      icon: Brain,
      title: t('whatIronMindIs.pillars.0.title'),
      description: t('whatIronMindIs.pillars.0.description'),
      delay: '0s',
    },
    {
      icon: Target,
      title: t('whatIronMindIs.pillars.1.title'),
      description: t('whatIronMindIs.pillars.1.description'),
      delay: '0.2s',
    },
    {
      icon: Shield,
      title: t('whatIronMindIs.pillars.2.title'),
      description: t('whatIronMindIs.pillars.2.description'),
      delay: '0.4s',
    },
    {
      icon: Zap,
      title: t('whatIronMindIs.pillars.3.title'),
      description: t('whatIronMindIs.pillars.3.description'),
      delay: '0.6s',
    },
  ];

  return (
    <section ref={sectionRef} id="what-is-ironmind" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`font-oswald text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>{t('whatIronMindIs.title')}</h2>
          <p className={`text-xl text-gray-300 max-w-3xl mx-auto font-inter ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>{t('whatIronMindIs.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`text-center group ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: pillar.delay }}
            >
              <div className="relative mb-6">
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-red-600 to-red-800 rounded-lg flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <pillar.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 w-20 h-20 mx-auto bg-red-600 rounded-lg opacity-30 blur-xl group-hover:opacity-50 transition-opacity duration-300"></div>
              </div>

              <h3 className="font-oswald text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors">
                {pillar.title}
              </h3>

              <p className="text-gray-400 font-inter leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIronMindIs;
