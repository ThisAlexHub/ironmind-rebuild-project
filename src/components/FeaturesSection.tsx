import { Brain, Dumbbell, Heart, Shield, Target, Zap } from 'lucide-react';

const features = [
    {
        icon: Brain,
        title: "Mental Forge",
        description: "Transform your mindset through AI-powered cognitive training and mental exercises."
    },
    {
        icon: Heart,
        title: "Emotional Steel",
        description: "Build unshakeable emotional resilience through proven psychological techniques."
    },
    {
        icon: Target,
        title: "Precision Goals",
        description: "Set and achieve clear objectives with our advanced goal-tracking system."
    },
    {
        icon: Shield,
        title: "Mental Armor",
        description: "Develop impenetrable mental fortitude through daily challenges and exercises."
    },
    {
        icon: Dumbbell,
        title: "Physical Forge",
        description: "Transform your body while building discipline and self-mastery."
    },
    {
        icon: Zap,
        title: "Rapid Recovery",
        description: "Accelerate your healing process with science-backed recovery protocols."
    }
];

const FeaturesSection = () => {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-brand-silver/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
                        FORGE YOUR PATH
                    </h2>
                    <p className="text-brand-steel text-lg max-w-2xl mx-auto font-ibm">
                        IronMind combines cutting-edge AI with proven psychological principles to help you forge a stronger version of yourself.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative bg-white border border-brand-steel/10 rounded-xl p-8 hover:shadow-xl transition-all duration-300 hover:border-brand-bronze/30 overflow-hidden"
                        >
                            {/* Background geometric pattern */}
                            <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                                <div className="absolute top-0 right-0 w-32 h-32 border-2 border-brand-bronze rotate-45 transform translate-x-16 -translate-y-16"></div>
                                <div className="absolute bottom-0 left-0 w-32 h-32 border-2 border-brand-copper rotate-45 transform -translate-x-16 translate-y-16"></div>
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-brand-charcoal/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-brand-bronze/10 transition-colors">
                                    <feature.icon className="w-6 h-6 text-brand-bronze group-hover:text-brand-copper" />
                                </div>
                                <h3 className="font-oswald text-xl font-bold text-brand-charcoal mb-3">
                                    {feature.title}
                                </h3>
                                <p className="text-brand-steel font-ibm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection; 