import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);

    return (
        <section id="about" ref={ref} className="py-24 bg-game-dark relative overflow-hidden border-t border-indigo-900/30">
             {/* Parallax Background Elements */}
            <motion.div style={{ y: y1, rotate }} className="absolute top-20 right-[10%] text-indigo-900/10 pointer-events-none z-0">
                <TrendingUp size={200} />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-20 left-[5%] text-game-rose/10 pointer-events-none z-0">
                <Zap size={150} />
            </motion.div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                            Prawdziwa <span className="text-game-rose">Symulacja</span> Życia YouTubera
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-game-purple to-game-rose mx-auto rounded-full" />
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <motion.div 
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="space-y-6 text-indigo-200/80 leading-relaxed text-lg"
                        >
                            <p>
                                <strong>TubeStar Ultimate</strong> to nie jest kolejna gra typu "clicker". To rozbudowany symulator ekonomiczny, w którym liczy się strategia i planowanie.
                            </p>
                            <p>
                                Zaczynasz z kamerką internetową w piwnicy rodziców. Twój cel? Dominacja nad algorytmem. Ale droga na szczyt wymaga poświęceń. Czy zdecydujesz się na powolny, organiczny wzrost, czy postawisz na <span className="text-game-rose font-bold">agresywny marketing</span>, by zyskać rozgłos?
                            </p>
                            <p>
                                Balansuj między tworzeniem contentu, zarządzaniem budżetem a rozwojem umiejętności. Każda decyzja przybliża Cię do bycia numerem jeden.
                            </p>
                        </motion.div>

                        <motion.div 
                             initial={{ opacity: 0, x: 50 }}
                             whileInView={{ opacity: 1, x: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: 0.4 }}
                             className="relative"
                        >
                            {/* Card visuals */}
                            <div className="bg-game-card border border-indigo-500/30 p-8 rounded-2xl shadow-xl relative overflow-hidden group hover:border-game-purple/50 transition-all hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-game-purple/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Users className="text-game-purple" />
                                    Zarządzaj Społecznością
                                </h3>
                                <p className="text-sm text-slate-400">
                                    Odpowiadaj na komentarze, moderuj czat na żywo i dbaj o relacje z widzami. Twoi fani to Twoja największa siła.
                                </p>
                            </div>
                            
                             <div className="bg-game-card border border-game-rose/30 p-8 rounded-2xl shadow-xl mt-6 relative overflow-hidden group hover:border-game-rose/50 transition-all transform md:translate-x-8 hover:-translate-y-1">
                                <div className="absolute inset-0 bg-gradient-to-br from-game-rose/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                                    <Zap className="text-game-rose" />
                                    Sława i Pieniądze
                                </h3>
                                <p className="text-sm text-slate-400">
                                    Zarabiaj na wyświetleniach, inwestuj w profesjonalny sprzęt i ulepszaj swoje studio. Pnij się w światowych rankingach popularności.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;