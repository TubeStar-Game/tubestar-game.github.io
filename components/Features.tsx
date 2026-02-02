import React from 'react';
import { LayoutDashboard, Building2, Video, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, desc, colorClass, iconColor, borderColor, delay }: { icon: any, title: string, desc: string, colorClass: string, iconColor: string, borderColor: string, delay: number }) => {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay, duration: 0.5 }}
            whileHover={{ y: -5, scale: 1.02 }}
            className={`bg-game-card p-6 rounded-2xl border ${borderColor} transition-all group relative overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10`}
        >
            <div className={`relative z-10 w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:rotate-6 ${colorClass}`}>
                <Icon className={`${iconColor} w-6 h-6`} />
            </div>
            <h3 className="relative z-10 text-xl font-bold mb-2 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-game-rose group-hover:to-game-purple transition-colors">
                {title}
            </h3>
            <p className="relative z-10 text-indigo-200/60 text-sm leading-relaxed">
                {desc}
            </p>
        </motion.div>
    );
};

const Features: React.FC = () => {
    return (
        <section id="features" className="py-24 bg-game-dark relative">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Więcej niż symulator
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-game-rose to-game-purple mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <FeatureCard 
                        icon={LayoutDashboard}
                        title="Rozbudowany Dashboard"
                        desc="Analizuj statystyki, śledź trendy i zarządzaj każdym aspektem swojego kanału z jednego miejsca. Prawdziwe dane, prawdziwe decyzje."
                        colorClass="bg-game-purple/20"
                        iconColor="text-game-purple"
                        borderColor="border-indigo-900/40 hover:border-game-purple/60"
                        delay={0.1}
                    />
                    
                    <FeatureCard 
                        icon={Building2}
                        title="System Agencji"
                        desc="Załóż własne MCN. Rekrutuj pracowników przez portal 'InkedLi', zarządzaj biurem, opłacaj czynsz i dbaj o zadowolenie zespołu."
                        colorClass="bg-game-rose/20"
                        iconColor="text-game-rose"
                        borderColor="border-indigo-900/40 hover:border-game-rose/60"
                        delay={0.2}
                    />

                    <FeatureCard 
                        icon={Video}
                        title="Produkcja Wideo"
                        desc="Twórz materiały, edytuj je i publikuj. Zadbaj o jakość nagrania, dobierz odpowiednie tagi i patrz jak licznik wyświetleń eksploduje."
                        colorClass="bg-game-darker border border-game-rose/30"
                        iconColor="text-game-rose"
                        borderColor="border-game-rose/30 hover:border-game-rose"
                        delay={0.3}
                    />

                    <FeatureCard 
                        icon={Trophy}
                        title="Osiągnięcia"
                        desc="Odblokuj unikalne trofea, od Srebrnego Przycisku aż po dominację w światowych rankingach. Zostań legendą platformy."
                        colorClass="bg-gradient-to-br from-game-purple/20 to-game-rose/20"
                        iconColor="text-white"
                        borderColor="border-indigo-900/40 hover:border-white/50"
                        delay={0.4}
                    />
                </div>
            </div>
        </section>
    );
};

export default Features;