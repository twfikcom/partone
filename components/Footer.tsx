import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-16 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        
        {/* Brand Info */}
        <div className="space-y-6">
          <a href="#" className="text-2xl font-bold tracking-tighter text-white">
            PartOne<span className="text-brand-purple">.ai</span>
          </a>
          <p className="text-gray-400 max-w-sm">
            We are building the interface for the next generation of intelligence. Join us before the story unfolds.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-white/5 p-8 rounded-2xl border border-white/10">
          <h4 className="text-white font-bold mb-2">Get early access to Part One.</h4>
          <p className="text-gray-400 text-sm mb-4">No spam. Only critical updates.</p>
          <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-purple transition-colors"
            />
            <button 
              type="submit" 
              className="bg-white text-black font-bold px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors whitespace-nowrap"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto max-w-6xl mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
        <p>&copy; 2025 PartOne.ai. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;