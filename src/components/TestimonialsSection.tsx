
import { useEffect, useRef, useState } from 'react';

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      quote: "IronMind didn't fix me. It made me dangerous again.",
      author: "Michael R.",
      delay: "0s"
    },
    {
      quote: "My ex saw the new me. She didn't recognize him. Good.",
      author: "David K.",
      delay: "0.2s"
    },
    {
      quote: "Three months later, I'm not the man she left. I'm the man she couldn't handle.",
      author: "James T.",
      delay: "0.4s"
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 relative">
      {/* Background silhouette */}
      <div className="absolute right-0 top-0 w-1/2 h-full opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className={`font-oswald text-4xl md:text-6xl font-bold text-white mb-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Future State
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-card ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{animationDelay: testimonial.delay}}
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              
              <blockquote className="text-xl font-inter text-gray-200 mb-6 leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <cite className="text-red-400 font-oswald font-medium">
                — {testimonial.author}
              </cite>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
