import { useEffect, useRef, useState } from 'react';

const WhyNotTherapy = () => {
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
      question: "Feeling sorry for yourself?",
      answer: "Feel nothing. Build everything.",
      delay: "0s"
    },
    {
      question: "Looking for someone to talk to?",
      answer: "Talk to IronMind. Then get to work.",
      delay: "0.2s"
    },
    {
      question: "Want her back?",
      answer: "Be better. So she wouldn't even deserve you.",
      delay: "0.4s"
    },
    {
      question: "Need emotional support?",
      answer: "Need results. Emotions follow actions.",
      delay: "0.6s"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`font-oswald text-4xl md:text-6xl font-bold text-steel-navy mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Why It's Not Therapy
          </h2>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-8">
          {statements.map((statement, index) => (
            <div
              key={index}
              className={`grid md:grid-cols-2 gap-8 py-8 border-b border-steel-gunmetal/20 last:border-b-0 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}
              style={{animationDelay: statement.delay}}
            >
              <div className="text-right md:pr-8">
                <h3 className="font-oswald text-2xl md:text-3xl font-medium text-steel-gunmetal italic">
                  "{statement.question}"
                </h3>
              </div>
              
              <div className="md:pl-8 md:border-l-2 md:border-steel-orange">
                <p className="font-oswald text-2xl md:text-3xl font-bold text-steel-orange">
                  {statement.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.8s'}}>
          <p className="text-xl text-steel-gunmetal font-inter max-w-2xl mx-auto">
            Therapy asks <span className="text-steel-navy font-semibold">"How do you feel?"</span><br/>
            IronMind asks <span className="text-steel-orange font-semibold">"What are you going to do about it?"</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyNotTherapy;
