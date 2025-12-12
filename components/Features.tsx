import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  desc: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <div className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-all duration-300 group border border-white/5 hover:border-brand-purple/30">
    <div className="w-12 h-12 rounded-lg bg-brand-purple/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
      <i className={`fa-solid ${icon} text-xl text-brand-purple`}></i>
    </div>
    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-brand-purple transition-colors">
      {title}
    </h3>
    <p className="text-gray-400 leading-relaxed text-sm">
      {desc}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section id="vision" className="py-24 px-6 relative">
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Prologue</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-brand-purple to-brand-blue mx-auto rounded-full mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Every great revolution has a beginning. PartOne.ai is not just a tool; it is the foundation. 
            We are curating the essential building blocks for the AI-driven future.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard 
            icon="fa-microchip" 
            title="Foundation Model" 
            desc="Core intelligence designed for stability. Built on robust architectural principles that ensure longevity and adaptability." 
          />
          <FeatureCard 
            icon="fa-scroll" 
            title="The Script" 
            desc="Defining the rules of engagement for autonomous agents. A protocol for safe, ethical, and efficient machine interaction." 
          />
          <FeatureCard 
            icon="fa-rocket" 
            title="Launchpad" 
            desc="Accelerating ideas from concept to reality. The infrastructure needed to deploy next-gen AI applications instantly." 
          />
        </div>
      </div>
    </section>
  );
};

export default Features;