import { Check, Shield, Target, Zap } from 'lucide-react';

const features = [
    "AI-Powered Mental Training",
    "Personalized Recovery Protocol",
    "Daily Mental Exercises",
    "Physical Training System",
    "Progress Tracking",
    "24/7 Support Access"
];

const PricingSection = () => {
    return (
        <section id="pricing" className="py-24 bg-gradient-to-b from-brand-silver/20 to-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="font-oswald text-4xl md:text-5xl font-bold text-brand-charcoal mb-4">
                        JOIN THE FORGE
                    </h2>
                    <p className="text-brand-steel text-lg max-w-2xl mx-auto font-ibm">
                        Get access to all features with our straightforward pricing plan.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white border border-brand-steel/10 rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden">
                        {/* Background geometric pattern */}
                        <div className="absolute inset-0 opacity-5">
                            <div className="absolute top-0 right-0 w-64 h-64 border-2 border-brand-bronze rotate-45 transform translate-x-32 -translate-y-32"></div>
                            <div className="absolute bottom-0 left-0 w-64 h-64 border-2 border-brand-copper rotate-45 transform -translate-x-32 translate-y-32"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-8">
                                <h3 className="font-oswald text-3xl font-bold text-brand-charcoal mb-2">
                                    FOUNDER'S ACCESS
                                </h3>
                                <div className="flex items-center justify-center gap-4">
                                    <span className="text-5xl font-bold text-brand-charcoal">$4.99</span>
                                    <span className="text-brand-steel">/month</span>
                                </div>
                                <p className="text-brand-steel mt-2">
                                    <span className="line-through text-brand-steel/60">$9.99</span>{" "}
                                    <span className="text-brand-bronze font-medium">50% OFF</span>
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand-bronze/10 flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-brand-bronze" />
                                    </div>
                                    <span className="text-brand-steel font-ibm">Mental Shield</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand-copper/10 flex items-center justify-center">
                                        <Target className="w-5 h-5 text-brand-copper" />
                                    </div>
                                    <span className="text-brand-steel font-ibm">Precision Goals</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-brand-steel/10 flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-brand-steel" />
                                    </div>
                                    <span className="text-brand-steel font-ibm">Rapid Recovery</span>
                                </div>
                            </div>

                            <div className="space-y-4 mb-8">
                                {features.map((feature, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="w-5 h-5 rounded-full bg-brand-bronze/20 flex items-center justify-center flex-shrink-0">
                                            <Check className="w-3 h-3 text-brand-bronze" />
                                        </div>
                                        <span className="text-brand-steel font-ibm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <button className="iron-button w-full py-4 rounded-xl font-oswald text-lg">
                                CLAIM FOUNDER'S ACCESS
                            </button>

                            <p className="text-center text-brand-steel text-sm mt-4">
                                30-day money-back guarantee. No questions asked.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PricingSection; 