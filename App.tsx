import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar.tsx';
import Hero from './components/Hero.tsx';
import Features from './components/Features.tsx';
import Gallery from './components/Gallery.tsx';
import LiveCounter from './components/LiveCounter.tsx';
import About from './components/About.tsx';
import Footer from './components/Footer.tsx';

export default function App() {
  return (
    <div className="min-h-screen bg-game-dark text-slate-200 overflow-x-hidden selection:bg-game-rose selection:text-white">
      <Navbar />
      <Hero />
      <LiveCounter />
      <Features />
      <Gallery />
      <About />
      <section className="py-24 bg-gradient-to-b from-game-dark to-black border-t border-indigo-900/30 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl bg-game-purple/5 blur-3xl rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
            <div className="flex flex-col items-center justify-center mb-12">
                <div className="mb-6 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
                    <img 
                        src="https://i.imgur.com/egL2gcH.png" 
                        alt="PEGI 7 Rating" 
                        className="w-24 h-auto shadow-[0_0_35px_rgba(163,230,53,0.4)] rounded-lg bg-black"
                    />
                </div>
                <div className="flex gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest">
                    <span className="text-game-rose">Lęk</span>
                    <span className="text-slate-700">|</span>
                    <span className="text-game-rose">Dyskryminacja</span>
                </div>
            </div>

            <h2 className="text-5xl font-bold mb-8 text-white">
                Gotowy na <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-rose to-game-purple">sławę?</span>
            </h2>
            
            <motion.a 
                href="https://gamejolt.com/games/tubestargame/1047038" 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-4 bg-transparent px-12 py-6 rounded-xl font-bold text-2xl"
            >
                <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-game-rose to-game-purple rounded-xl opacity-100 shadow-[0_0_40px_rgba(79,70,229,0.4)]"
                    animate={{ 
                        boxShadow: [
                            "0 0 40px rgba(79,70,229,0.4)",
                            "0 0 60px rgba(244,63,94,0.6)",
                            "0 0 40px rgba(79,70,229,0.4)"
                        ]
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="relative z-10 flex items-center gap-3 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><path d="M12 12v9"/><path d="m8 17 4 4 4-4"/></svg>
                    Pobierz Grę Teraz
                </div>
            </motion.a>
            <p className="mt-6 text-indigo-200/50 text-sm">Dostępne na Windows</p>
        </div>
    </section>
      <Footer />
    </div>
  );
}
