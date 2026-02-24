import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DTProcess: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Animate central logo
            gsap.fromTo('.dt-process-logo',
                { scale: 0, rotation: -180, opacity: 0 },
                {
                    scale: 1,
                    rotation: 0,
                    opacity: 1,
                    duration: 1.5,
                    ease: 'back.out(1.7)',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Animate process circles - they appear in sequence
            gsap.fromTo('.process-circle',
                { scale: 0, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Animate connecting lines
            gsap.fromTo('.connect-line',
                { strokeDashoffset: 1000, opacity: 0 },
                {
                    strokeDashoffset: 0,
                    opacity: 1,
                    duration: 1.5,
                    stagger: 0.15,
                    ease: 'power2.inOut',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Animate info boxes
            gsap.fromTo('.info-box',
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Animate right content
            gsap.fromTo('.right-content',
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Continuous rotation of arrows around central logo
            gsap.to('.arrow-circle', {
                rotation: 360,
                duration: 20,
                repeat: -1,
                ease: 'none',
                transformOrigin: 'center center'
            });

            // Subtle floating animation for process circles
            gsap.to('.process-circle', {
                y: '+=15',
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    each: 0.3,
                    repeat: -1
                }
            });

            // Pulse animation for central logo
            gsap.to('.central-pulse', {
                scale: 1.05,
                opacity: 0.8,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

        }, section);

        return () => ctx.revert();
    }, []);

    // Calculate positions for circles around center (shifted left)
    const radius = 320; // Distance from center
    const centerX = 520; // Moved left
    const centerY = 500;

    const stages = [
        {
            name: 'Empathize',
            angle: -90,
            color: '#29A9A0', // Teal/Cyan
            imageUrl: '/dt process phase/emphay phase.jpg.jpeg',
            number: 1,
            items: ['Understand the Challenge', 'Observe & Engage', 'Map Insights']
        },
        {
            name: 'Define',
            angle: -18,
            color: '#E31E5D', // Pink/Magenta
            imageUrl: '/dt process phase/define phase.jpg.jpeg',
            number: 2,
            items: ['Tell Stories', 'Synthesize Meanings', 'Frame Opportunities']
        },
        {
            name: 'Ideate',
            angle: 54,
            color: '#89B935', // Green
            imageUrl: '/dt process phase/ideate phase.jpg.jpeg',
            number: 3,
            items: ['Brainstorm Ideas', 'Select & Refine', 'Develop Concepts']
        },
        {
            name: 'Prototype',
            angle: 126,
            color: '#F58220', // Orange
            imageUrl: '/dt process phase/prototype.jpg',
            number: 4,
            items: ['Rapid Prototyping', 'Iterative Building', 'Low-Fidelity Models']
        },
        {
            name: 'Test',
            angle: 198,
            color: '#00ADEF', // Sky Blue
            imageUrl: '/dt process phase/testing phase .jpg',
            number: 5,
            items: ['User Testing', 'Gather Feedback', 'Refine Implementation']
        }
    ];

    return (
        <section ref={sectionRef} className="bg-[#FFCC00] bg-[radial-gradient(circle_at_center,_#FFE162_0%,_#FFCC00_40%,_black_100%)] min-h-screen w-full relative overflow-hidden flex items-center justify-center py-20">
            <style>{`
                @keyframes data-flow {
                    from { stroke-dashoffset: 100; }
                    to { stroke-dashoffset: 0; }
                }
                .connect-line {
                    animation: data-flow 4s linear infinite;
                }
            `}</style>
            <div className="relative w-full max-w-[1800px] h-[1000px] mx-auto flex items-center">

                {/* LEFT SIDE - Circular Diagram */}
                <div className="relative w-[55%] h-full">
                    {/* SVG Layer for connections */}
                    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1100 1000" preserveAspectRatio="xMidYMid meet">
                        {/* Connecting lines from center to each circle */}
                        {stages.map((stage, index) => {
                            const angleRad = (stage.angle * Math.PI) / 180;
                            const x = centerX + radius * Math.cos(angleRad);
                            const y = centerY + radius * Math.sin(angleRad);

                            return (
                                <g key={index}>
                                    {/* Main connecting line - Using stage color for better grouping */}
                                    <path
                                        className="connect-line"
                                        d={`M ${centerX} ${centerY} L ${x} ${y}`}
                                        stroke={stage.color}
                                        strokeWidth="4"
                                        fill="none"
                                        strokeDasharray="10 10"
                                        opacity="0.9"
                                    />
                                    {/* Decorative outer glow */}
                                    <path
                                        className="connect-line"
                                        d={`M ${centerX} ${centerY} L ${x} ${y}`}
                                        stroke={stage.color}
                                        strokeWidth="8"
                                        fill="none"
                                        strokeDasharray="10 10"
                                        opacity="0.2"
                                        filter="blur(4px)"
                                    />
                                </g>
                            );
                        })}

                        {/* Circular orbit path */}
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={radius}
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                            strokeDasharray="10 10"
                            opacity="0.3"
                        />
                        <circle
                            cx={centerX}
                            cy={centerY}
                            r={radius - 10}
                            fill="none"
                            stroke="white"
                            strokeWidth="1"
                            strokeDasharray="5 5"
                            opacity="0.2"
                        />
                    </svg>

                    {/* Central SNS Design Thinker Logo */}
                    <div className="dt-process-logo absolute top-1/2 left-[47%] -translate-x-1/2 -translate-y-1/2 w-72 h-72 z-30">
                        <div className="relative w-full h-full">
                            {/* Rotating arrows circle */}
                            <div className="arrow-circle absolute inset-0">
                                <svg viewBox="0 0 200 200" className="w-full h-full">
                                    {/* Cardinal arrows */}
                                    <path d="M 100 10 L 112 28 L 88 28 Z" fill="black" opacity="0.7" />
                                    <path d="M 190 100 L 172 112 L 172 88 Z" fill="black" opacity="0.7" />
                                    <path d="M 100 190 L 112 172 L 88 172 Z" fill="black" opacity="0.7" />
                                    <path d="M 10 100 L 28 112 L 28 88 Z" fill="black" opacity="0.7" />

                                    {/* Diagonal arrows */}
                                    <path d="M 150 50 L 160 60 L 150 70 L 140 60 Z" fill="black" opacity="0.5" />
                                    <path d="M 150 150 L 160 140 L 150 130 L 140 140 Z" fill="black" opacity="0.5" />
                                    <path d="M 50 150 L 60 160 L 70 150 L 60 140 Z" fill="black" opacity="0.5" />
                                    <path d="M 50 50 L 60 40 L 70 50 L 60 60 Z" fill="black" opacity="0.5" />
                                </svg>
                            </div>

                            {/* Pulse rings */}
                            <div className="central-pulse absolute inset-0 flex items-center justify-center">
                                <div className="w-64 h-64 rounded-full border-4 border-white opacity-30"></div>
                            </div>

                            {/* Central circle */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-[#E31E24] via-[#E31E24] to-[#C41E24] border-[12px] border-[#FFCC00] shadow-[0_0_80px_rgba(227,30,36,0.6)] flex items-center justify-center relative overflow-hidden group">
                                    {/* Shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>

                                    <div className="text-center text-white z-10">
                                        <div className="text-6xl font-black leading-none mb-3" style={{ fontFamily: 'Arial, sans-serif' }}>
                                            <span className="text-white">s</span>
                                            <span className="text-green-600">n</span>
                                            <span className="text-white">s</span>
                                        </div>
                                        <div className="text-2xl font-black uppercase tracking-tight leading-tight">
                                            <div>Design</div>
                                            <div>Thinker</div>
                                        </div>
                                        <div className="text-xs mt-1 opacity-80">™</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Process Circles revolving around center */}
                    {stages.map((stage, index) => {
                        const angleRad = (stage.angle * Math.PI) / 180;
                        const x = centerX + radius * Math.cos(angleRad);
                        const y = centerY + radius * Math.sin(angleRad);

                        return (
                            <div
                                key={index}
                                className="absolute"
                                style={{
                                    left: `${x}px`,
                                    top: `${y}px`,
                                    transform: 'translate(-50%, -50%)'
                                }}
                            >
                                {/* Process Circle */}
                                <div className="process-circle relative">
                                    <div
                                        className="w-44 h-44 rounded-full border-[10px] border-white shadow-[0_10px_40px_rgba(0,0,0,0.3)] flex items-center justify-center relative group cursor-pointer transition-transform hover:scale-110 overflow-hidden"
                                        style={{ backgroundColor: stage.color }}
                                    >
                                        {/* Phase Image */}
                                        <div className="absolute inset-0 z-0">
                                            <img
                                                src={stage.imageUrl}
                                                alt={stage.name}
                                                className="w-full h-full object-cover opacity-90 group-hover:scale-110 transition-transform duration-700"
                                            />
                                            {/* Colored overlay for brand consistency */}
                                            <div
                                                className="absolute inset-0 opacity-40 mix-blend-multiply"
                                                style={{ backgroundColor: stage.color }}
                                            ></div>
                                            {/* Gradient for text legibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                                        </div>

                                        {/* Animated ring */}
                                        <div
                                            className="absolute -inset-3 rounded-full border-[5px] opacity-40 animate-pulse z-10"
                                            style={{ borderColor: stage.color }}
                                        ></div>

                                        {/* Outer glow ring */}
                                        <div
                                            className="absolute -inset-5 rounded-full border-[5px] opacity-20 z-10"
                                            style={{ borderColor: stage.color }}
                                        ></div>

                                        {/* Content */}
                                        <div className="text-center text-white z-20 px-2">
                                            <div className="text-2xl font-black uppercase tracking-tighter" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
                                                {stage.name}
                                            </div>
                                        </div>

                                        {/* Hover glow effect */}
                                        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"></div>
                                    </div>

                                    {/* Number badge */}
                                    <div
                                        className="absolute -top-3 -right-3 w-14 h-14 rounded-full bg-white border-[5px] flex items-center justify-center text-2xl font-black shadow-xl z-20"
                                        style={{ borderColor: stage.color, color: stage.color }}
                                    >
                                        {stage.number}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* RIGHT SIDE - Content */}
                <div className="right-content w-[45%] h-full flex items-center justify-center px-12">
                    <div className="max-w-2xl">
                        {/* Decorative top element */}
                        <div className="flex items-center gap-4 mb-8">
                            <div className="h-1 w-20 bg-white rounded-full"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                        </div>

                        {/* Main content card */}
                        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.3)] p-10 border-4 border-white relative overflow-hidden">
                            {/* Decorative corner accent */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FFCC00]/20 to-transparent rounded-bl-full"></div>
                            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#000000]/10 to-transparent rounded-tr-full"></div>

                            <div className="relative z-10">
                                {/* Title */}
                                <h2 className="text-4xl font-black text-[#000000] mb-6 leading-tight">
                                    Design Thinking in Education
                                </h2>

                                {/* First paragraph */}
                                <p className="text-gray-800 text-lg leading-relaxed mb-6 font-medium">
                                    Education is an urgent need of change towards focusing on <span className="text-[#000000] font-bold">human beings and their potential and talents</span>, and here we adopt a framework structured based on <span className="text-[#FFCC00] font-bold">design thinking strategy</span> that supports building character, skills, and curiosity to learn more.
                                </p>

                                {/* Divider */}
                                <div className="flex items-center gap-3 my-6">
                                    <div className="h-1 flex-1 bg-gradient-to-r from-[#000000] via-[#FFCC00] to-[#FFCC00] rounded-full"></div>
                                </div>

                                {/* Second paragraph */}
                                <p className="text-gray-800 text-lg leading-relaxed font-medium">
                                    Through Design Thinking, we focus on delivering <span className="text-[#4A9B8E] font-bold">quality education</span> by providing an effective learning environment, and <span className="text-[#D91E5B] font-bold">true innovators</span> who fix the real social needs and issues.
                                </p>

                                {/* Bottom accent */}
                                <div className="mt-8 flex items-center gap-2">
                                    <div className="w-3 h-3 rounded-full bg-[#000000]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFCC00]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FFCC00]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#4A9B8E]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#D91E5B]"></div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative bottom element */}
                        <div className="flex items-center gap-4 mt-8 justify-end">
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-2 w-2 rounded-full bg-white"></div>
                            <div className="h-1 w-20 bg-white rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Decorative corner accents */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-10 left-10 w-20 h-20 border-t-4 border-l-4 border-white/30 rounded-tl-3xl"></div>
                    <div className="absolute top-10 right-10 w-20 h-20 border-t-4 border-r-4 border-white/30 rounded-tr-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-20 h-20 border-b-4 border-l-4 border-white/30 rounded-bl-3xl"></div>
                    <div className="absolute bottom-10 right-10 w-20 h-20 border-b-4 border-r-4 border-white/30 rounded-br-3xl"></div>
                </div>

            </div>
        </section>
    );
};
