import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const InnovationAreas: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Mobile constraints - simplified to avoid lag
            mm.add("(max-width: 1023px)", () => {
                gsap.set('.innovation-title, .innovation-hub, .tech-box, .industry-box', {
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    rotation: 0
                });
            });

            // Desktop full animations
            mm.add("(min-width: 1024px)", () => {
                // Animate title
                gsap.fromTo('.innovation-title',
                    { scale: 0, rotation: -180, opacity: 0 },
                    {
                        scale: 1,
                        rotation: 0,
                        opacity: 1,
                        duration: 1.2,
                        ease: 'back.out(1.5)',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top center',
                        }
                    }
                );

                // Animate central hub
                gsap.fromTo('.innovation-hub',
                    { scale: 0, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 1,
                        ease: 'elastic.out(1, 0.5)',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top center',
                        }
                    }
                );

                // Animate tech boxes (left side) - revealing slowly from center
                gsap.fromTo('.tech-box',
                    { x: 300, scale: 0, opacity: 0, rotation: -20 },
                    {
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 1.5,
                        stagger: 0.15,
                        ease: 'expo.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top center',
                        }
                    }
                );

                // Animate industry boxes (right side) - revealing slowly from center
                gsap.fromTo('.industry-box',
                    { x: -300, scale: 0, opacity: 0, rotation: 20 },
                    {
                        x: 0,
                        scale: 1,
                        opacity: 1,
                        rotation: 0,
                        duration: 1.5,
                        stagger: 0.15,
                        ease: 'expo.out',
                        scrollTrigger: {
                            trigger: section,
                            start: 'top center',
                        }
                    }
                );

                // Continuous pulse for hub
                gsap.to('.innovation-hub', {
                    scale: 1.05,
                    duration: 2,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });

                // Floating animation for boxes is only applied on desktop to avoid weird layout jumps on mobile
                gsap.to('.tech-box, .industry-box', {
                    y: '+=8',
                    duration: 2.5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                    stagger: {
                        each: 0.2,
                        repeat: -1
                    }
                });
            });

        }, section);

        return () => ctx.revert();
    }, []);

    const innovationTechnologies = [
        { name: 'Robotics & Automation', color: '#FDB813' }, // Yellow
        { name: 'AR / VR / MetaVerse Gaming & Digital Twins', color: '#E41E26' }, // Red
        { name: 'Data Science / AI / ML', color: '#89C440' }, // Green
        { name: 'Internet of Things', color: '#D81A5B' }, // Magenta
        { name: 'Communication and Growth Tech', color: '#F37021' }, // Orange
        { name: 'Additive Manufacturing (3D Printing)', color: '#8E8FBD' }, // Lavender
        { name: 'Low Code Development', color: '#00ADEF' }  // Sky Blue
    ];

    const innovationIndustries = [
        { name: 'Smart City / Manufacturing', color: '#FDB813' },
        { name: 'Health Care', color: '#E41E26' },
        { name: 'Agriculture & Food Technology', color: '#89C440' },
        { name: 'Automobile', color: '#D81A5B' },
        { name: 'Aerospace & Defence', color: '#F37021' },
        { name: 'Retail (FMCG), Real-Estate, Entertainment & Finance (BFSI)', color: '#8E8FBD' },
        { name: 'Power / Energy', color: '#00ADEF' }
    ];

    return (
        <section ref={sectionRef} className="h-screen w-full relative overflow-hidden flex items-center justify-center px-8" style={{
            background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0d0d0d 50%, #141414 75%, #0a0a0a 100%)'
        }}>

            {/* Animated diagonal stripes background */}
            <div className="hidden lg:block absolute inset-0 opacity-10" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, #FFCC00 0px, #FFCC00 2px, transparent 2px, transparent 40px)',
                backgroundSize: '100% 100%',
                animation: 'moveStripes 20s linear infinite'
            }}></div>

            {/* Secondary diagonal stripes (opposite direction) */}
            <div className="hidden lg:block absolute inset-0 opacity-5" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, #FFCC00 0px, #FFCC00 1px, transparent 1px, transparent 60px)',
                backgroundSize: '100% 100%'
            }}></div>

            {/* Glowing corner accents */}
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#FFCC00] rounded-full filter blur-[150px] opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#FFCC00] rounded-full filter blur-[150px] opacity-15"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFCC00] rounded-full filter blur-[200px] opacity-5"></div>

            {/* Floating particles */}
            <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#FFCC00] rounded-full opacity-30"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 2}s`
                        }}
                    ></div>
                ))}
            </div>

            {/* Hexagon grid pattern overlay */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23FFCC00' fill-opacity='1'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>

            {/* Top and bottom gradient borders */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent"></div>

            {/* CSS Keyframes */}
            <style>{`
                @keyframes moveStripes {
                    0% { background-position: 0 0; }
                    100% { background-position: 100px 100px; }
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
                    50% { transform: translateY(-20px) scale(1.2); opacity: 0.6; }
                }
            `}</style>

            <div className="relative z-10 w-full max-w-[1800px] mx-auto">

                {/* Main Content - Title and Diagram */}
                <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">

                    {/* Modern Title Area */}
                    <div className="innovation-title z-10 mb-8 lg:mb-0 relative w-full lg:w-[350px] flex-shrink-0">
                        <div className="absolute -left-10 lg:-left-20 top-0 w-32 h-32 lg:w-64 lg:h-64 bg-[#FFCC00] rounded-full mix-blend-overlay filter blur-3xl opacity-20 animate-pulse"></div>
                        <div className="text-center lg:text-left">
                            <img src="/sns logo.PNG" alt="SNS Institutions" className="h-6 lg:h-12 mb-4 lg:mb-8 ml-2 filter drop-shadow-md inline-block" />
                            <h1 className="text-5xl lg:text-7xl font-black text-white mb-2 lg:mb-4 leading-none">7+7</h1>
                            <div className="bg-[#FFCC00] px-4 py-2 lg:px-6 lg:py-3 inline-block mb-2 lg:mb-4">
                                <h2 className="text-2xl lg:text-4xl font-black text-black uppercase leading-none">Innovation</h2>
                            </div>
                            <h3 className="text-3xl lg:text-5xl font-black text-[#FFCC00] uppercase leading-none">Areas</h3>
                        </div>
                    </div>

                    {/* Center - Innovation Hub Diagram */}
                    <div className="flex-1 relative w-full scale-100 origin-center">
                        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-[20px] lg:rounded-[32px] p-2 lg:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.5)] relative overflow-hidden border-2 border-white/5 mx-[-1rem] lg:mx-0">

                            {/* Decorative corner accents */}
                            <div className="absolute top-0 left-0 w-10 h-10 lg:w-20 lg:h-20 border-t-2 lg:border-t-4 border-l-2 lg:border-l-4 border-[#FFCC00]"></div>
                            <div className="absolute top-0 right-0 w-10 h-10 lg:w-20 lg:h-20 border-t-2 lg:border-t-4 border-r-2 lg:border-r-4 border-[#FFCC00]"></div>
                            <div className="absolute bottom-0 left-0 w-10 h-10 lg:w-20 lg:h-20 border-b-2 lg:border-b-4 border-l-2 lg:border-l-4 border-[#FFCC00]"></div>
                            <div className="absolute bottom-0 right-0 w-10 h-10 lg:w-20 lg:h-20 border-b-2 lg:border-b-4 border-r-2 lg:border-r-4 border-[#FFCC00]"></div>

                            <div className="relative grid grid-cols-[1fr_50px_1fr] md:grid-cols-3 gap-1 lg:gap-12 items-center px-1 lg:px-0">

                                {/* Left Column - Innovation Technologies */}
                                <div className="space-y-1 lg:space-y-3">
                                    <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2 mb-2 lg:mb-6 text-center lg:text-left">
                                        <div className="w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-[#FFCC00] flex items-center justify-center text-black font-black text-[10px] lg:text-xl shadow-[0_0_15px_rgba(255,204,0,0.3)] shrink-0">7</div>
                                        <h4 className="text-white font-black text-[6px] lg:text-xs uppercase tracking-wider leading-tight">Innovation Tech<br className="hidden lg:block" /><span className="lg:hidden"> </span>(RADICAL)</h4>
                                    </div>
                                    {innovationTechnologies.map((tech, index) => {
                                        const lightColors = ['#FDB813', '#89C440', '#F37021'];
                                        const isLight = lightColors.includes(tech.color);
                                        return (
                                            <div
                                                key={index}
                                                className="tech-box px-1 py-1 lg:px-4 lg:py-3 rounded lg:rounded-lg font-black text-[6px] md:text-[8px] lg:text-xs text-center shadow-lg hover:scale-105 transition-all cursor-pointer border-t border-white/10"
                                                style={{
                                                    backgroundColor: tech.color,
                                                    color: isLight ? '#000' : '#fff'
                                                }}
                                            >
                                                {tech.name}
                                            </div>
                                        );
                                    })}
                                </div>

                                {/* Center - Innovation Hub Space */}
                                <div className={`flex items-center justify-center`}>
                                    <div className="innovation-hub relative">
                                        <div className="w-12 h-12 lg:w-64 lg:h-64 rounded-full flex items-center justify-center relative">
                                            {/* Space reserved for insertion of original logo */}
                                            <img
                                                src="/Innovation hub logo.png"
                                                alt="SNS Innovation Logo"
                                                className="w-full h-full object-contain p-0 lg:p-4 filter drop-shadow-[0_0_15px_rgba(255,204,0,0.2)]"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column - Innovation Industries */}
                                <div className="space-y-1 lg:space-y-3">
                                    <div className="flex flex-col lg:flex-row items-center gap-1 lg:gap-2 mb-2 lg:mb-6 text-center lg:text-left">
                                        <div className="w-5 h-5 lg:w-10 lg:h-10 rounded-full bg-[#FFCC00] flex items-center justify-center text-black font-black text-[10px] lg:text-xl shadow-[0_0_15px_rgba(255,204,0,0.3)] shrink-0">7</div>
                                        <h4 className="text-white font-black text-[6px] lg:text-xs uppercase tracking-wider leading-tight">Innovation Ind.<br className="hidden lg:block" /><span className="lg:hidden"> </span>(SHAAARP)</h4>
                                    </div>
                                    {innovationIndustries.map((industry, index) => {
                                        const lightColors = ['#FDB813', '#89C440', '#F37021'];
                                        const isLight = lightColors.includes(industry.color);
                                        return (
                                            <div
                                                key={index}
                                                className="industry-box px-1 py-1 lg:px-4 lg:py-3 rounded lg:rounded-lg font-black text-[6px] md:text-[8px] lg:text-xs text-center shadow-lg hover:scale-105 transition-all cursor-pointer border-t border-white/10"
                                                style={{
                                                    backgroundColor: industry.color,
                                                    color: isLight ? '#000' : '#fff'
                                                }}
                                            >
                                                {industry.name}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Bottom text */}
                            <div className="mt-4 lg:mt-8 text-center">
                                <div className="inline-block bg-[#FFCC00] px-3 py-1 lg:px-8 lg:py-3 rounded-full">
                                    <p className="text-sm lg:text-2xl font-black text-black italic" style={{ fontFamily: 'Brush Script MT, cursive' }}>Solving</p>
                                </div>
                                <p className="text-white font-black text-[8px] lg:text-lg mt-1 lg:mt-2 uppercase tracking-wide">Industrial Problems Using Innovation Tech</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 h-2 bg-gradient-to-r from-black via-[#FFCC00] to-black rounded-full"></div>
            </div>
        </section>
    );
};
