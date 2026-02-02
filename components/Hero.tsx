import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Video, Play } from 'lucide-react';

const FloatingIcon = ({ delay, x, icon: Icon, color }: { delay: number; x: string; icon: any, color: string }) => (
  <motion.div
    initial={{ y: 100, opacity: 0 }}
    animate={{ 
      y: -500, 
      opacity: [0, 1, 1, 0],
      x: x
    }}
    transition={{ 
      duration: 10 + Math.random() * 5, 
      repeat: Infinity, 
      delay: delay,
      ease: "linear"
    }}
    className={`absolute bottom-0 ${color} pointer-events-none`}
  >
    <Icon size={40 + Math.random() * 40} />
  </motion.div>
);

const Hero: React.FC = () => {
  return (
    <header className="relative min-h-screen flex flex-col justify-center items-center text-center px-4 overflow-hidden bg-game-dark">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#1e1b4b_0%,#0f1021_100%)] z-0" />
      
      {/* Animated Grid */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{ 
            backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', 
            backgroundSize: '50px 50px', 
            opacity: 0.15
        }}></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden z-0">
         <FloatingIcon delay={0} x="10%" icon={Video} color="text-game-purple/20" />
         <FloatingIcon delay={2} x="80%" icon={Zap} color="text-game-rose/20" />
         <FloatingIcon delay={5} x="30%" icon={Play} color="text-game-purple/20" />
         <FloatingIcon delay={7} x="60%" icon={Video} color="text-game-rose/20" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto pt-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-4 py-1.5 rounded-full border border-game-purple/50 bg-game-purple/10 text-indigo-300 text-sm font-bold mb-8 animate-pulse shadow-[0_0_15px_rgba(79,70,229,0.3)]"
        >
          Premiera 10.02.2026
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight glow-text"
        >
          Stań się gwiazdą<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-game-rose to-game-purple">
            i zostań zapamiętanym
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl text-indigo-200/70 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          TubeStar to nowoczesny i zaawansowany symulator Tubera w którym poczujesz, że to nie jest takie proste.
        </motion.p>

        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
            <a 
                href="https://gamejolt.com/games/tubestargame/1047038" 
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-game-rose to-game-purple text-white hover:brightness-110 px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-transform hover:scale-105 shadow-[0_0_30px_rgba(244,63,94,0.4)]"
            >
                <Zap className="fill-current" />
                Pobierz na GameJolt
            </a>
            <a 
                href="https://www.youtube.com/watch?v=1eIIYXuO-q4" 
                className="w-full sm:w-auto border border-indigo-500/50 hover:bg-indigo-500/10 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors shadow-[0_0_20px_rgba(79,70,229,0.1)]"
            >
                Zobacz Gameplay
            </a>
        </motion.div>
      </div>

      {/* Decorative Blur Blobs */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-game-purple rounded-full mix-blend-multiply filter blur-[150px] opacity-30 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-game-rose rounded-full mix-blend-multiply filter blur-[150px] opacity-30 animate-blob animation-delay-2000"></div>
    </header>
  );
};

export default Hero;