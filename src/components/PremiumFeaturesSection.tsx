import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, MessageCircle, Download, Target, Lock, Zap } from 'lucide-react';
import EmailCaptureModal from './EmailCaptureModal';
import { useTranslation } from 'react-i18next';

const PremiumFeaturesSection = () => {
  const { t } = useTranslation();
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
      title: t('premium.features.0.title'),
      description: t('premium.features.0.description'),
      delay: '0s',
    },
    {
      icon: MessageCircle,
      title: t('premium.features.1.title'),
      description: t('premium.features.1.description'),
      delay: '0.2s',
    },
    {
      icon: Target,
      title: t('premium.features.2.title'),
      description: t('premium.features.2.description'),
      badge: t('premium.features.2.badge'),
      delay: '0.4s',
    },
    {
      icon: Download,
      title: t('premium.features.3.title'),
      description: t('premium.features.3.description'),
      badge: t('premium.features.3.badge'),
      delay: '0.6s',
    },
    {
      icon: Zap,
      title: t('premium.features.4.title'),
      description: t('premium.features.4.description'),
      delay: '0.8s',
    },
    {
      icon: Lock,
      title: t('premium.features.5.title'),
      description: t('premium.features.5.description'),
      delay: '1s',
    },
  ];

  return (
    <>
      <section ref={sectionRef} id="features" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className={`font-oswald text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>{t('premium.title')}</h2>
            <div className={`text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-inter ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              {t('premium.subtitle1')} <span className="text-red-400 font-bold">{t('premium.subtitle2')}</span>.<br />
              {t('premium.subtitle3')}
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex items-start space-x-6 p-6 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-red-600/50 transition-all duration-300 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
                style={{ animationDelay: feature.delay }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-oswald text-xl font-bold text-white">
                      {feature.title}
                    </h3>
                    {feature.badge && (
                      <span className="bg-red-600/20 text-red-400 px-3 py-1 rounded-full text-sm font-medium">
                        {feature.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-gray-300 font-inter leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className={`text-center space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '1.2s' }}>
            <div className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
              <span className="text-white font-bold">{t('premium.whyItMattersTitle')}</span> {t('premium.whyItMattersText')}
            </div>

            <div className="pt-6">
              <button
                onClick={() => setIsModalOpen(true)}
                className="iron-button rounded-lg font-oswald text-xl px-8 py-4 mb-4"
              >
                {t('premium.ctaButton')}
              </button>
              <p className="text-gray-400 font-inter">
                {t('premium.ctaNote')}
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
