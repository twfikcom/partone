import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
          PartOne<span className="text-brand-purple">.ai</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#manifesto" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Manifesto
          </a>
          <a href="#vision" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            The Vision
          </a>
          <a href="#join" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Join
          </a>
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all backdrop-blur-sm">
            Start Chapter 1
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className={`fa-solid ${isMobileMenuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-brand-dark/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col space-y-4 shadow-2xl">
          <a href="#manifesto" className="text-gray-300 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Manifesto
          </a>
          <a href="#vision" className="text-gray-300 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            The Vision
          </a>
          <a href="#join" className="text-gray-300 hover:text-white font-medium" onClick={() => setIsMobileMenuOpen(false)}>
            Join
          </a>
          <button className="bg-brand-purple text-white px-5 py-3 rounded-lg font-semibold w-full">
            Start Chapter 1
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;