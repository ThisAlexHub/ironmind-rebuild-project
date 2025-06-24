import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const WhyNotTherapy = () => {
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

  const statements = [
    {
      question: t('whyNotTherapy.statements.0.question'),
      answer: t('whyNotTherapy.statements.0.answer'),
      delay: '0s',
    },
    {
      question: t('whyNotTherapy.statements.1.question'),
      answer: t('whyNotTherapy.statements.1.answer'),
      delay: '0.2s',
    },
    {
      question: t('whyNotTherapy.statements.2.question'),
      answer: t('whyNotTherapy.statements.2.answer'),
      delay: '0.4s',
    },
    {
      question: t('whyNotTherapy.statements.3.question'),
      answer: t('whyNotTherapy.statements.3.answer'),
      delay: '0.6s',
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`font-oswald text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>{t('whyNotTherapy.title')}</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {statements.map((statement, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 py-8 border-b border-gray-800 last:border-b-0 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{ animationDelay: statement.delay }}
            >
              <div className="text-right md:pr-8">
                <h3 className="font-oswald text-2xl md:text-3xl font-medium text-gray-300 italic">
                  "{statement.question}"
                </h3>
              </div>

              <div className="md:pl-8 md:border-l-2 md:border-red-600">
                <p className="font-oswald text-2xl md:text-3xl font-bold text-red-500">
                  {statement.answer}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.8s' }}>
          <p className="text-xl text-gray-400 font-inter max-w-2xl mx-auto">
            {t('whyNotTherapy.therapyAsks')} <span className="text-white font-semibold">{t('whyNotTherapy.therapyAsksQ')}</span><br />
            {t('whyNotTherapy.ironmindAsks')} <span className="text-red-500 font-semibold">{t('whyNotTherapy.ironmindAsksQ')}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNotTherapy;
