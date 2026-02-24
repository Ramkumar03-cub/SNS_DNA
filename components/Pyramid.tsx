import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PYRAMID_DATA = [
    {
        id: 'core-value',
        label: 'Core Value',
        description: 'Sincerity. Nobility. Service',
        color: '#4ADE80',
        heightPercent: 6,
    },
    {
        id: 'vision',
        label: 'Vision',
        description: 'Build an Entrepreneurial Mindset Through Our Design Thinking FrameWork',
        color: '#EF4444',
        heightPercent: 6,
    },
    {
        id: '5-pillars',
        label: '5 Pillars Mission',
        description: 'Center for Learning & Teaching, Skill & Career Development, Centre for Creativity, Industry Institute Partnership Cell, Social Responsibility Initiatives',
        color: '#FACC15',
        heightPercent: 42,
    },
    {
        id: '3p-culture',
        label: '3P Culture',
        description: 'Purpose. Process. People',
        color: '#3B82F6',
        heightPercent: 10,
    },
    {
        id: '3c-competency',
        label: '3C Competency Circle',
        description: 'Attitude (Curiosity, Accountability), Logical and Business Skill, Technical Skill',
        color: '#F97316',
        heightPercent: 14,
    },
    {
        id: 'tagline',
        label: 'Tagline',
        description: 'Redesigning Common Minds & Business Towards Excellence',
        color: '#A78BFA',
        heightPercent: 10,
    },
    {
        id: 'spine',
        label: 'SPINE',
        description: 'Founders Millionaire Club',
        color: '#EC4899',
        heightPercent: 12,
    }
];

export const Pyramid: React.FC = () => {
    const [hoveredSlice, setHoveredSlice] = useState<string | null>(null);
    const sectionRef = useRef<HTMLElement>(null);
    const pyramidRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: section,
                    start: 'top 60%', // Start animation when section is in view
                    end: 'bottom bottom',
                    toggleActions: 'play none none reverse'
                }
            });

            // 1. Title Reveal
            tl.fromTo('.pyramid-title',
                { y: -50, opacity: 0, rotationX: 45 },
                { y: 0, opacity: 1, rotationX: 0, duration: 0.8, ease: 'back.out(1.7)' } // Faster title
            );

            // 2. Sequential Reveal: Slice -> Label + Desc (One by One)
            // We iterate through data to animate each set of elements sequentially
            PYRAMID_DATA.forEach((_, i) => {
                const sliceSelector = `.pyramid-slice-${i}`;
                const labelSelector = `.pyramid-label-${i}`;
                const descSelector = `.pyramid-desc-${i}`;

                // Animate Slice
                tl.fromTo(sliceSelector,
                    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
                    {
                        scaleY: 1,
                        opacity: 1,
                        duration: 0.5, // Faster duration
                        ease: 'power3.out'
                    },
                    `+=${i === 0 ? 0 : 0.08}` // Much smaller buffer between steps
                );

                // Animate Label & Description together (synced with this slice)
                tl.fromTo([labelSelector, descSelector],
                    { x: (index, target) => target.classList.contains('pyramid-label') ? 50 : -50, opacity: 0 },
                    {
                        x: 0,
                        opacity: 1,
                        duration: 0.4, // Faster text reveal
                        ease: 'power2.out'
                    },
                    "<0.1" // Start almost immediately with the slice
                );
            });

        }, section);

        return () => ctx.revert();
    }, []);

    let cumulativeHeight = 0;
    const slicesWithPosition = PYRAMID_DATA.map((slice, index) => {
        const startHeight = cumulativeHeight;
        cumulativeHeight += slice.heightPercent;
        return { ...slice, startHeight, endHeight: cumulativeHeight, index };
    });

    const pyramidHeight = 480;
    const pyramidWidth = 500;

    return (
        <section ref={sectionRef} className="py-24 bg-black relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Yellow Gradient Glows */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFCC00]/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FFCC00]/25 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Additional Gradient Effects */}
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFCC00]/20 to-transparent"></div>
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFCC00]/20 to-transparent"></div>
            </div>

            <div className="container mx-auto px-4">
                {/* Title */}
                <div className="text-center mb-16 perspective-1000">
                    <div className="pyramid-title inline-block px-8 py-4 bg-[#FFCC00] text-black font-black text-2xl md:text-4xl uppercase tracking-wider transform -skew-x-6 border-4 border-white shadow-2xl opacity-0">
                        DIFFERENTIATORS
                    </div>
                </div>

                {/* Main Layout - Labels | Pyramid | Descriptions */}
                <div className="max-w-7xl mx-auto hidden md:flex items-start justify-center gap-4">

                    {/* Left Labels Column */}
                    <div className="flex flex-col justify-start relative" style={{ height: `${pyramidHeight}px`, minWidth: '200px' }}>
                        {slicesWithPosition.map((slice) => {
                            const topPos = (slice.startHeight / 100) * pyramidHeight + (slice.heightPercent / 100 / 2) * pyramidHeight;
                            const isActive = hoveredSlice === slice.id;
                            return (
                                <div
                                    key={`label-${slice.id}`}
                                    onMouseEnter={() => setHoveredSlice(slice.id)}
                                    onMouseLeave={() => setHoveredSlice(null)}
                                    // ADDED: pyramid-label-${slice.index} for sequential animation targeting
                                    className={`pyramid-label pyramid-label-${slice.index} absolute right-0 flex items-center justify-end cursor-pointer opacity-0`}
                                    style={{
                                        top: `${topPos}px`,
                                        transform: `translateY(-50%) ${isActive ? 'scale(1.1)' : 'scale(1)'}`,
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    <span className={`uppercase tracking-wide whitespace-nowrap transition-all duration-300 ${isActive ? 'text-white font-black text-lg' : 'text-white font-bold text-sm'}`}>
                                        {slice.label}
                                    </span>
                                    <div className={`h-px ml-3 transition-all duration-300 ${isActive ? 'bg-white w-14' : 'bg-white/50 w-10'}`}></div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Center Pyramid with curved right edge */}
                    <div
                        ref={pyramidRef}
                        className="relative flex-shrink-0"
                        style={{
                            width: `${pyramidWidth}px`,
                            height: `${pyramidHeight}px`,
                        }}
                    >
                        {/* SVG Mask for curved edge */}
                        <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                            <defs>
                                <clipPath id="curvedPyramid" clipPathUnits="objectBoundingBox">
                                    <path d="M 0,0 L 0,1 L 0.75,1 C 0.5,0.9 0.25,0.6 0,0 Z" />
                                </clipPath>
                            </defs>
                        </svg>

                        <div
                            className="absolute inset-0"
                            style={{ clipPath: 'url(#curvedPyramid)' }}
                        >
                            {slicesWithPosition.map((slice) => {
                                const isActive = hoveredSlice === slice.id;
                                return (
                                    <div
                                        key={slice.id}
                                        onMouseEnter={() => setHoveredSlice(slice.id)}
                                        onMouseLeave={() => setHoveredSlice(null)}
                                        // ADDED: pyramid-slice-${slice.index} for sequential animation targeting
                                        className={`pyramid-slice pyramid-slice-${slice.index} absolute left-0 right-0 cursor-pointer opacity-0`}
                                        style={{
                                            top: `${slice.startHeight}%`,
                                            height: `calc(${slice.heightPercent}% - 3px)`,
                                            backgroundColor: slice.color,
                                            transform: isActive ? 'scale(1.03)' : 'scale(1)',
                                            filter: isActive ? 'brightness(1.3)' : 'brightness(1)',
                                            boxShadow: isActive ? `0 0 40px ${slice.color}` : 'none',
                                            zIndex: isActive ? 20 : 1,
                                            transition: 'transform 0.3s ease, filter 0.3s ease, box-shadow 0.3s ease'
                                        }}
                                    />
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Descriptions Column */}
                    <div className="flex flex-col justify-start relative" style={{ height: `${pyramidHeight}px`, minWidth: '320px' }}>
                        {slicesWithPosition.map((slice) => {
                            const topPos = (slice.startHeight / 100) * pyramidHeight + (slice.heightPercent / 100 / 2) * pyramidHeight;
                            const isActive = hoveredSlice === slice.id;
                            return (
                                <div
                                    key={`desc-${slice.id}`}
                                    onMouseEnter={() => setHoveredSlice(slice.id)}
                                    onMouseLeave={() => setHoveredSlice(null)}
                                    // ADDED: pyramid-desc-${slice.index} for sequential animation targeting
                                    className={`pyramid-desc pyramid-desc-${slice.index} absolute left-0 flex items-center cursor-pointer opacity-0`}
                                    style={{
                                        top: `${topPos}px`,
                                        transform: `translateY(-50%) ${isActive ? 'scale(1.05)' : 'scale(1)'}`,
                                        transition: 'transform 0.3s ease'
                                    }}
                                >
                                    <div className={`h-px mr-3 transition-all duration-300 ${isActive ? 'bg-white w-10' : 'bg-white/50 w-5'}`}></div>
                                    <p className={`leading-tight max-w-[300px] transition-all duration-300 ${isActive ? 'text-white font-bold text-base' : 'text-gray-300 font-semibold text-sm'}`}>
                                        {slice.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Mobile Fallback */}
                <div className="md:hidden mt-8 space-y-4 px-4">
                    {PYRAMID_DATA.map((slice) => {
                        const isActive = hoveredSlice === slice.id;
                        return (
                            <div
                                key={`mobile-${slice.id}`}
                                onTouchStart={() => setHoveredSlice(slice.id)}
                                onTouchEnd={() => setHoveredSlice(null)}
                                className={`flex items-start gap-3 p-3 rounded-lg cursor-pointer transition-all duration-300 ${isActive ? 'bg-white/15 scale-105' : 'bg-white/5'}`}
                            >
                                <div className="w-4 h-4 rounded-sm flex-shrink-0 mt-1" style={{ backgroundColor: slice.color }}></div>
                                <div>
                                    <p className={`transition-all duration-300 ${isActive ? 'text-white font-black text-base' : 'text-white font-bold text-sm'}`}>{slice.label}</p>
                                    <p className={`mt-1 transition-all duration-300 ${isActive ? 'text-white font-semibold text-sm' : 'text-gray-400 font-medium text-xs'}`}>{slice.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
