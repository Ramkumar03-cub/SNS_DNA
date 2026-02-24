import React, { useState, useEffect, useRef } from 'react';
import { Target, Zap, Users, BookOpen, Sparkles, Award, GraduationCap, Building, Eye } from 'lucide-react';

import { STATS } from '../constants';
import { useCountUp } from '../hooks/useCountUp';

interface StatItemProps {
    value: string;
    label: string;
    isLast: boolean;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, isLast }) => {
    const match = value.match(/^([\d,]+)(.*)$/);

    const renderValue = () => {
        if (!match) return value;
        const numericValue = parseInt(match[1].replace(/,/g, ''), 10);
        const suffix = match[2];
        const { count, elementRef } = useCountUp(numericValue);

        return (
            <span ref={elementRef}>
                {count.toLocaleString()}{suffix}
            </span>
        );
    };

    return (
        <div className={`relative flex flex-col items-center justify-center p-4 md:p-6 group ${!isLast ? 'md:border-r border-white/10' : ''}`}>
            <div className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#FFCC00] via-yellow-200 to-[#FFCC00] mb-2 transform transition-transform duration-500 group-hover:scale-110">
                {renderValue()}
            </div>
            <div className="text-xs md:text-base text-gray-400 font-semibold tracking-widest uppercase opacity-80 group-hover:opacity-100 transition-opacity">
                {label}
            </div>
            {!isLast && <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-white/10 md:hidden"></div>}
        </div>
    );
};

const BlinkingEye: React.FC = () => {
    const [isBlinking, setIsBlinking] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsBlinking(true);
            setTimeout(() => setIsBlinking(false), 150);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className={`transition-all duration-200 ${isBlinking ? 'scale-y-10 opacity-70' : 'scale-y-100 opacity-100'}`}>
            <Eye className="w-8 h-8 text-white" />
        </div>
    );
};

export const About: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="about" className="py-24 bg-gradient-to-b from-[#FFCC00] via-[#FDB931] to-[#FFCC00] relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Black Gradient Accents */}
                <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-black/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-black/80 to-transparent"></div>

                {/* Dynamic Lighting Effects */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Central Light Beam (Between Columns) */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-transparent via-white/40 to-transparent blur-md"></div>
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-full bg-white/5 blur-3xl"></div>

                    {/* Animated Light Streaks */}
                    <div className="absolute top-1/4 -left-full w-[200%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent rotate-12 animate-flow" style={{ animationDuration: '4s' }}></div>
                    <div className="absolute top-3/4 -left-full w-[200%] h-px bg-gradient-to-r from-transparent via-white/50 to-transparent -rotate-12 animate-flow" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>

                    {/* Glow Spots between cards */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/10 rounded-full blur-[80px] animate-pulse"></div>
                </div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Title */}
                {/* Section Title */}
                <div className="flex justify-center mb-8 md:mb-16 relative z-10">
                    <div className="inline-flex items-center gap-2 md:gap-3 px-5 py-2 md:px-8 md:py-3 bg-black/90 backdrop-blur-xl border border-black/10 rounded-full shadow-2xl shadow-black/20 group hover:scale-105 transition-all duration-300">
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FFCC00] animate-pulse" />
                        <span className="text-lg md:text-2xl font-black text-white uppercase tracking-widest">About Us</span>
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FFCC00] animate-pulse" />
                    </div>
                </div>

                {/* Professional Stats Section - Relocated here */}
                <div className="max-w-6xl mx-auto bg-black/90 backdrop-blur-md rounded-2xl border border-white/10 shadow-2xl mb-12 md:mb-24 overflow-hidden relative group hover:scale-[1.01] transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#FFCC00]/5 via-transparent to-[#FFCC00]/5 opacity-50"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
                        {STATS.map((stat, index) => (
                            <StatItem
                                key={index}
                                value={stat.value}
                                label={stat.label}
                                isLast={index === STATS.length - 1}
                            />
                        ))}
                    </div>
                </div>


                {/* Main Content - Story Left, Vision/Tagline/Culture Right */}
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 items-stretch transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

                    {/* Left Column - Story & Streams */}
                    <div className="space-y-6">
                        <div className="bg-black/90 backdrop-blur-xl border border-black/10 p-5 md:p-8 rounded-3xl h-full shadow-2xl hover:shadow-black/20 transition-all duration-500 group relative overflow-hidden active:scale-[0.98] md:active:scale-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3 md:gap-4">
                                <span className="w-10 h-10 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[#FFCC00] to-[#FFCC00] flex items-center justify-center">
                                    <Building className="w-5 h-5 md:w-8 md:h-8 text-white" />
                                </span>
                                Our Story
                            </h3>
                            <div className="space-y-3 md:space-y-4 text-sm md:text-xl text-gray-300 leading-relaxed mb-6 md:mb-8">
                                <p>
                                    <span className="text-white font-semibold">Sri SNS Charitable Trust</span> was established in <span className="text-[#FFCC00] font-bold">1997</span> and today proudly manages nine premier institutions in Coimbatore, Tamil Nadu, India.
                                </p>
                                <p>
                                    Our programmes span <span className="text-white font-medium">Arts & Science, Education, Management, Engineering & Technology, Pharmacy, Physiotherapy, Nursing, Allied Health Sciences,</span> and Research Centres, collectively benefiting over <span className="text-[#FFCC00] font-bold">16,000 students</span> every year.
                                </p>
                                <p>
                                    With a strong focus on <span className="text-[#FFCC00] font-bold">Design Thinking-based education</span> and innovation, our institutions operate through a distinctive five-pillar theme that fosters holistic growth, creativity, and real-world problem-solving skills.
                                </p>
                            </div>

                            {/* Streams */}
                            <div className="border-t border-white/10 pt-6">
                                <p className="text-sm text-gray-500 uppercase tracking-widest mb-4">Educational Streams</p>
                                <div className="flex flex-wrap gap-2">
                                    {['Arts & Science', 'Engineering', 'Technology', 'Management', 'Education', 'Pharmacy', 'Physiotherapy', 'Nursing', 'Health Sciences'].map((stream, i) => (
                                        <span
                                            key={i}
                                            className="px-2 py-1 md:px-3 md:py-1.5 bg-black/40 rounded-full text-xs md:text-base text-white/80 border border-[#FFCC00]/10 hover:bg-[#FFCC00] hover:text-black transition-all cursor-default font-medium"
                                        >
                                            {stream}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Vision, Tagline, Culture (all stacked) */}
                    <div className="space-y-6">
                        {/* Vision Card - Hexagonal badge style */}
                        <div className="about-vision-card relative group active:scale-[0.98] md:active:scale-100 transition-transform">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFCC00] via-white/20 to-black rounded-2xl opacity-75 group-hover:opacity-100 group-[.interaction-active]:opacity-100 blur transition-all duration-500 animate-pulse"></div>
                            <div className="relative bg-gradient-to-br from-black to-zinc-900 p-5 md:p-8 rounded-2xl border border-white/5">
                                <div className="absolute top-4 right-4 w-20 h-20 border-4 border-[#FFCC00]/30 rotate-45 rounded-xl"></div>
                                <div className="absolute top-6 right-6 w-16 h-16 border-2 border-[#FFCC00]/20 rotate-45 rounded-lg"></div>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[#FFCC00] blur-xl opacity-50"></div>
                                        <div className="relative w-16 h-16 bg-gradient-to-br from-[#FFCC00] via-[#FFCC00] to-gray-900 rounded-2xl flex items-center justify-center rotate-3 shadow-2xl">
                                            <BlinkingEye />
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[#FFCC00] text-xs font-black uppercase tracking-[0.3em]">Our Vision</span>
                                        <div className="w-12 h-1 bg-gradient-to-r from-[#FFCC00] to-transparent mt-1"></div>
                                    </div>
                                </div>
                                <p className="text-xl md:text-3xl font-black text-white leading-tight">
                                    Build an <span className="text-[#FFCC00]">Entrepreneurial Mindset</span> Through Our Design Thinking Framework
                                </p>
                            </div>
                        </div>

                        {/* Tagline Card - Neon style */}
                        <div className="about-tagline-card relative group overflow-hidden rounded-2xl border border-white/10 hover:border-[#FFCC00]/30 transition-all duration-500 active:scale-[0.98] md:active:scale-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 to-black"></div>
                            <div className="absolute inset-0">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFCC00]/50 to-transparent animate-pulse"></div>
                                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#FFCC00]/50 to-transparent animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FFCC00]/50 to-transparent animate-pulse" style={{ animationDelay: '0.25s' }}></div>
                                <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-transparent via-[#FFCC00]/50 to-transparent animate-pulse" style={{ animationDelay: '0.75s' }}></div>
                            </div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gray-900/20 rounded-full blur-3xl"></div>
                            <div className="relative p-5 md:p-8 rounded-2xl">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="w-12 h-12 bg-black border border-[#FFCC00]/30 rounded-xl flex items-center justify-center shadow-lg shadow-[#FFCC00]/10">
                                        <Zap className="w-6 h-6 text-[#FFCC00]" />
                                    </div>
                                    <div>
                                        <span className="text-[#FFCC00] text-xs font-black uppercase tracking-[0.3em]">Our Tagline</span>
                                        <div className="flex gap-1 mt-1">
                                            <div className="w-2 h-2 bg-[#FFCC00] rounded-full animate-pulse"></div>
                                            <div className="w-2 h-2 bg-[#FFCC00] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                                            <div className="w-2 h-2 bg-[#FFCC00] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-xl md:text-3xl font-black leading-tight">
                                    <span className="text-white">Redesigning</span>{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]">Common Minds</span>{' '}
                                    <span className="text-white">and Business Towards</span>{' '}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFCC00] to-[#FFCC00]">Excellence</span>
                                </p>
                            </div>
                        </div>

                        {/* Culture Card - 3D Floating spheres style */}
                        <div className="about-culture-card relative group overflow-hidden rounded-2xl border border-[#FFCC00]/20 hover:border-[#FFCC00]/50 transition-all duration-500 active:scale-[0.98] md:active:scale-100">
                            <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-900 to-black"></div>
                            <div className="absolute inset-0 opacity-30">
                                <div className="absolute top-4 left-4 w-24 h-24 bg-white/20 rounded-full blur-2xl"></div>
                                <div className="absolute bottom-4 right-4 w-32 h-32 bg-yellow-300/20 rounded-full blur-2xl"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            </div>
                            <div className="relative p-5 md:p-8">
                                <div className="text-center mb-4 md:mb-6">
                                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                                        <Users className="w-5 h-5 text-white" />
                                        <span className="text-white font-bold uppercase tracking-widest text-sm">Our Culture</span>
                                    </div>
                                </div>
                                <div className="flex justify-center items-center gap-3 md:gap-4">
                                    <div className="group/item text-center">
                                        <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#FFCC00]/30 flex items-center justify-center mb-2 group-hover/item:scale-110 group-hover:scale-110 group-[.interaction-active]:scale-110 group-hover/item:bg-[#FFCC00] group-hover:bg-[#FFCC00] group-[.interaction-active]:bg-[#FFCC00] transition-all duration-300 shadow-lg group-hover/item:border-[#FFCC00] group-hover:border-[#FFCC00]">
                                            <span className="text-base md:text-2xl font-black text-white group-hover/item:text-black group-hover:text-black">P</span>
                                        </div>
                                        <span className="text-white font-bold text-xs md:text-sm">Purpose</span>
                                    </div>
                                    <div className="text-2xl md:text-3xl text-[#FFCC00] font-bold">+</div>
                                    <div className="group/item text-center">
                                        <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#FFCC00]/30 flex items-center justify-center mb-2 group-hover/item:scale-110 group-hover:scale-110 group-[.interaction-active]:scale-110 group-hover/item:bg-[#FFCC00] group-hover:bg-[#FFCC00] group-[.interaction-active]:bg-[#FFCC00] transition-all duration-300 shadow-lg group-hover/item:border-[#FFCC00] group-hover:border-[#FFCC00]">
                                            <span className="text-base md:text-2xl font-black text-white group-hover/item:text-black group-hover:text-black">P</span>
                                        </div>
                                        <span className="text-white font-bold text-xs md:text-sm">Process</span>
                                    </div>
                                    <div className="text-2xl md:text-3xl text-[#FFCC00] font-bold">+</div>
                                    <div className="group/item text-center">
                                        <div className="w-14 h-14 md:w-24 md:h-24 rounded-full bg-black/40 backdrop-blur-sm border-2 border-[#FFCC00]/30 flex items-center justify-center mb-2 group-hover/item:scale-110 group-hover:scale-110 group-[.interaction-active]:scale-110 group-hover/item:bg-[#FFCC00] group-hover:bg-[#FFCC00] group-[.interaction-active]:bg-[#FFCC00] transition-all duration-300 shadow-lg group-hover/item:border-[#FFCC00] group-hover:border-[#FFCC00]">
                                            <span className="text-base md:text-2xl font-black text-white group-hover/item:text-black group-hover:text-black">P</span>
                                        </div>
                                        <span className="text-white font-bold text-xs md:text-sm">People</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
