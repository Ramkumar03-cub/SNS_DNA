import React from 'react';
import { Building2, ArrowUpRight, Lightbulb, Brain, Puzzle, Rocket, Target, Share2, PenTool, Zap } from 'lucide-react';
import { INSTITUTIONS, STATS } from '../constants';
import { useCountUp } from '../hooks/useCountUp';




export const Institutions: React.FC = () => {
    return (
        <section id="institutions" className="py-24 bg-gradient-to-b from-[#FFCC00] via-[#FDB931] to-[#FFCC00] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>

                {/* Animated Grid Pattern */}
                <div className="absolute inset-0 opacity-[0.03]">
                    <svg className="w-full h-full" width="100%" height="100%">
                        <defs>
                            <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="black" strokeWidth="1" />
                            </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#smallGrid)" />
                    </svg>
                </div>

                {/* Black Gradient Accents */}
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Design Thinking Floating Icons - Vibrant & Visible */}
                <div className="absolute top-20 left-10 animate-float" style={{ animationDuration: '8s' }}>
                    <Brain className="w-20 h-20 text-black/10 drop-shadow-xl rotate-12" />
                </div>
                <div className="absolute top-40 right-20 animate-float" style={{ animationDuration: '10s', animationDelay: '1s' }}>
                    <Lightbulb className="w-24 h-24 text-black/10 drop-shadow-xl -rotate-12" />
                </div>
                <div className="absolute bottom-40 left-1/3 animate-float" style={{ animationDuration: '12s', animationDelay: '2s' }}>
                    <Puzzle className="w-20 h-20 text-black/10 drop-shadow-xl rotate-45" />
                </div>
                <div className="absolute top-1/3 right-1/4 animate-float" style={{ animationDuration: '9s', animationDelay: '1.5s' }}>
                    <Rocket className="w-16 h-16 text-black/10 drop-shadow-xl -rotate-45" />
                </div>
                <div className="absolute bottom-20 right-10 animate-float" style={{ animationDuration: '11s', animationDelay: '0.5s' }}>
                    <Target className="w-20 h-20 text-black/10 drop-shadow-xl" />
                </div>
                <div className="absolute top-1/2 left-10 animate-float" style={{ animationDuration: '13s', animationDelay: '3s' }}>
                    <PenTool className="w-16 h-16 text-black/10 drop-shadow-xl rotate-90" />
                </div>

                {/* Connecting "Process" Flow Line */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" viewBox="0 0 1200 800" preserveAspectRatio="none">
                    <path
                        d="M0,400 C300,300 300,500 600,400 S900,300 1200,400"
                        fill="none"
                        stroke="url(#gradient-line)"
                        strokeWidth="2"
                        className="animate-pulse"
                    />
                    <defs>
                        <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="transparent" />
                            <stop offset="50%" stopColor="black" />
                            <stop offset="100%" stopColor="transparent" />
                        </linearGradient>
                    </defs>
                </svg>

                {/* Moving Particles */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-black/20 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                            opacity: Math.random() * 0.5,
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="inline-block px-3 py-1 rounded-full bg-black/10 border border-black/20 text-black text-sm font-bold mb-4 backdrop-blur-sm">
                            Excellence in Education
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold text-black mb-6 leading-tight">
                            Our <span className="text-white drop-shadow-md">Institutions</span>
                        </h2>
                        <p className="text-black/80 text-lg md:text-xl leading-relaxed max-w-xl font-medium">
                            A diverse ecosystem of institutions fostering excellence across various disciplines, shaping the future of education.
                        </p>
                    </div>
                </div>



                <div className="flex overflow-x-auto pb-8 gap-6 snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:pb-0 scrollbar-hide">
                    {INSTITUTIONS.map((inst, index) => (
                        <div
                            key={inst.name}
                            className="institution-card group bg-black/90 rounded-2xl overflow-hidden border border-white/5 hover:border-[#FFCC00]/50 transition-all duration-500 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] hover:-translate-y-2 min-w-[85vw] sm:min-w-[350px] md:min-w-0 snap-center"
                        >
                            <div className="h-56 overflow-hidden relative">
                                <img
                                    src={inst.image}
                                    alt={inst.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-[.interaction-active]:scale-110 opacity-90 group-hover:opacity-100 group-[.interaction-active]:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-transparent to-transparent opacity-80"></div>
                                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 group-[.interaction-active]:opacity-100 transition-opacity duration-300 mix-blend-overlay"></div>
                            </div>

                            <div className="p-8 relative">
                                <div className="absolute -top-20 right-6 w-24 h-24 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 group-[.interaction-active]:translate-y-0 group-hover:rotate-6 group-[.interaction-active]:rotate-6 transition-all duration-500 z-10">
                                    {inst.logo ? (
                                        <img src={inst.logo} alt={`${inst.name} logo`} className="w-full h-full object-contain filter drop-shadow-xl" />
                                    ) : (
                                        <Building2 className="w-8 h-8 text-secondary" />
                                    )}
                                </div>

                                <h3 className="text-2xl font-bold text-white mb-3 pr-8 group-hover:text-primary group-[.interaction-active]:text-primary transition-colors">
                                    {inst.name}
                                </h3>
                                <p className="text-muted text-base mb-6 line-clamp-2">
                                    {inst.description}
                                </p>

                                <a href={inst.link || "#"} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-bold text-primary hover:text-white transition-colors gap-2 group/link uppercase tracking-wide">
                                    Visit Website
                                    <span className="bg-white/10 p-1 rounded-full group-hover/link:bg-primary group-hover/link:text-secondary transition-all">
                                        <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                    </span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section >
    );
};
