import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="container mx-auto text-center z-10 max-w-4xl">
        <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-brand-purple/30 bg-brand-purple/10 backdrop-blur-md">
          <span className="text-brand-purple text-xs font-bold tracking-widest uppercase animate-pulse">
            System Online
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6 leading-tight">
          Where the AI <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
            Story Begins.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
          We are writing the prologue of the next digital evolution. Don't just read history—be part of the first chapter.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button className="group relative px-8 py-4 bg-brand-purple text-white rounded-lg font-bold overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]">
            <span className="relative z-10 flex items-center gap-2">
              Join the Narrative
              <i className="fa-solid fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-brand-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
          
          <a 
            href="#manifesto" 
            className="px-8 py-4 text-gray-300 hover:text-white font-medium transition-colors flex items-center gap-2 group"
          >
            Read the Manifesto
            <i className="fa-solid fa-chevron-right text-xs opacity-50 group-hover:translate-x-1 transition-transform"></i>
          </a>
        </div>
      </div>
      
      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-dark to-transparent z-0"></div>
    </section>
  );
};

export default Hero;