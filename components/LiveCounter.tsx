import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const LiveCounter: React.FC = () => {
    const [subs, setSubs] = useState(2137);

    // Simulate live sub count growth
    useEffect(() => {
        const interval = setInterval(() => {
            const change = Math.floor(Math.random() * 5) - 1; // Mostly goes up, sometimes drops slightly
            setSubs(prev => prev + (change > 0 ? change * 3 : change));
        }, 800);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="bg-game-darker py-12 border-y border-indigo-900/30">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
                <div className="text-right hidden md:block">
                    <span className="text-indigo-300/50 text-sm uppercase tracking-widest font-bold">Live Status</span>
                    <div className="flex items-center gap-2 justify-end">
                        <span className="w-2 h-2 bg-game-rose rounded-full animate-pulse"></span>
                        <span className="text-game-rose font-bold glow-text">NAGRYWANIE</span>
                    </div>
                </div>

                <motion.div 
                    className="gradient-border bg-game-dark p-8 shadow-2xl min-w-[320px] text-center relative"
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-game-purple/5 to-transparent rounded-xl pointer-events-none" />
                    
                    <h3 className="text-game-purple text-xs font-black uppercase tracking-[0.3em] mb-4">Subscribers</h3>
                    <div className="text-5xl md:text-6xl font-mono font-black text-white tabular-nums tracking-tighter drop-shadow-2xl">
                        {subs.toLocaleString()}
                    </div>
                    <div className="text-game-rose text-sm font-bold mt-3 flex items-center justify-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        +24% w tym miesiącu
                    </div>
                </motion.div>

                <div className="text-left hidden md:block">
                    <span className="text-indigo-300/50 text-sm uppercase tracking-widest font-bold">Cel</span>
                    <div className="text-white font-bold text-lg">Przycisk Diamentowy</div>
                </div>
            </div>
        </section>
    );
};

export default LiveCounter;