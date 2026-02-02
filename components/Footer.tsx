import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-indigo-900/30">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-indigo-200/30 text-sm">
                &copy; {new Date().getFullYear()} Stworzone przez TosiekDevelopment, oraz Intux Media. Wszelkie prawa zastrzeżone
            </div>
            <div className="flex gap-6">
                <a 
                    href="https://youtube.com/@TubeStarGame" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-indigo-300/50 hover:text-game-rose transition-colors transform hover:scale-110"
                    aria-label="YouTube"
                >
                    <i className="fab fa-youtube text-2xl"></i>
                </a>
                <a 
                    href="https://discord.gg/TubeStar" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-indigo-300/50 hover:text-white transition-colors transform hover:scale-110"
                    aria-label="Discord"
                >
                    <i className="fab fa-discord text-2xl"></i>
                </a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;