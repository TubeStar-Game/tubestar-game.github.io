import React from 'react';
import { motion } from 'framer-motion';

const Screenshot = ({ src, title, color, delay }: { src: string, title: string, color: string, delay: number }) => (
    <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.5 }}
        className="group relative overflow-hidden rounded-xl border border-indigo-900/50 bg-game-card cursor-pointer shadow-lg hover:shadow-game-purple/20"
    >
        <div className="absolute inset-0 bg-indigo-900/20 animate-pulse z-0" />
        <img 
            src={src} 
            alt={title} 
            className="w-full relative z-10 transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" 
            loading="lazy"
        />
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-game-darker via-game-darker/90 to-transparent p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300 z-20">
            <p className={`font-bold ${color} text-lg drop-shadow-md`}>{title}</p>
        </div>
    </motion.div>
);

const Gallery: React.FC = () => {
  return (
    <section id="screens" className="py-24 bg-game-darker relative border-t border-indigo-900/30">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
                <h2 className="text-3xl font-bold text-white">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-game-rose to-game-purple">Rzut okiem</span> na grę
                </h2>
                <div className="hidden md:flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-game-rose animate-pulse"></span>
                    <span className="w-3 h-3 rounded-full bg-game-purple"></span>
                    <span className="w-3 h-3 rounded-full bg-white/20"></span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <Screenshot 
                    src="https://i.imgur.com/D1J1yX2.png" 
                    title="Główne Centrum Dowodzenia" 
                    color="text-white"
                    delay={0.1}
                />
                <Screenshot 
                    src="https://i.imgur.com/lKHc80Q.png" 
                    title="TubeStar Studio" 
                    color="text-game-rose"
                    delay={0.2}
                />
                <Screenshot 
                    src="https://i.imgur.com/Eok7fu2.png" 
                    title="Portal InkedLi - Zarządzanie Kadrą" 
                    color="text-game-purple"
                    delay={0.3}
                />
                <Screenshot 
                    src="https://i.imgur.com/8mD36Sb.png" 
                    title="System Osiągnięć" 
                    color="text-indigo-300"
                    delay={0.4}
                />
            </div>
            
            <p className="text-center text-indigo-300/40 mt-12 text-sm italic">
                *Screeny przedstawiają wersję deweloperską. Finalny produkt może się różnić.
            </p>
        </div>
    </section>
  );
};

export default Gallery;