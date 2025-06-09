
const AboutSection = () => {
  return (
    <section className="py-20 bg-steel-navy">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-oswald text-3xl md:text-5xl font-bold text-white mb-8">
            About Us
          </h2>
          
          <div className="space-y-6 text-xl text-steel-light font-inter leading-relaxed">
            <p>
              IronMind was built by men who've been there.
            </p>
            <p>
              We don't offer pity. We offer precision.
            </p>
            <p className="text-steel-orange font-semibold">
              And a plan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
