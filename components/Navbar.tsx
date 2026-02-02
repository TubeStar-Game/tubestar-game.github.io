import React, { useState, useEffect } from 'react';
import { Video, Download, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-game-dark/95 backdrop-blur-md border-b border-indigo-900/30 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3 group cursor-pointer select-none">
          <div className="w-11 h-11 bg-gradient-to-br from-game-rose to-game-purple rounded-xl flex items-center justify-center shadow-lg shadow-game-rose/20 group-hover:shadow-game-rose/40 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Video className="text-white w-6 h-6 stroke-[2.5]" />
          </div>
          <span className="text-2xl font-black tracking-tighter bg-gradient-to-r from-game-rose to-game-purple bg-clip-text text-transparent">
            TubeStar
          </span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <a href="#features" className="hover:text-game-rose transition-colors hover:scale-105 transform">Funkcje</a>
          <a href="#screens" className="hover:text-game-rose transition-colors hover:scale-105 transform">Galeria</a>
          <a href="#about" className="hover:text-game-rose transition-colors hover:scale-105 transform">O Grze</a>
        </div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a 
            href="https://gamejolt.com/games/tubestargame/1047038" 
            target="_blank" 
            rel="noreferrer"
            className="bg-gradient-to-r from-game-rose to-game-purple text-white px-6 py-2.5 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 shadow-[0_0_20px_rgba(244,63,94,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
          >
            <Download size={18} />
            GameJolt
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-game-dark border-b border-indigo-900/30 p-4 flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200 shadow-2xl">
            <a href="#features" className="text-slate-300 hover:text-game-rose py-2" onClick={() => setMobileMenuOpen(false)}>Funkcje</a>
            <a href="#screens" className="text-slate-300 hover:text-game-rose py-2" onClick={() => setMobileMenuOpen(false)}>Galeria</a>
            <a href="https://gamejolt.com/games/tubestargame/1047038" target="_blank" rel="noreferrer" className="bg-gradient-to-r from-game-rose to-game-purple text-center py-3 rounded-lg font-bold text-white shadow-lg">
                Pobierz na GameJolt
            </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;