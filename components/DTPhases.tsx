import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ChevronRight } from 'lucide-react';

const PhasesData = [
    {
        id: 'Empathy',
        number: '01',
        title: 'Empathy',
        subtitle: 'Understand the users and their problems deeply',
        color: 'from-[#29A9A0] to-[#29A9A0]',
        borderColor: 'border-[#29A9A0]',
        shadowColor: 'shadow-[#29A9A0]/20',
        textColor: 'text-[#29A9A0]',
        bg: 'bg-[#29A9A0]/10',
        accentColor: '#29A9A0',
        videoUrl: '/dt process phases/emapthy.MP4',
        description: 'Understand the users and their problems deeply through research and observation.',
        items: [
            'User Interviews',
            'Observation',
            'Immersion',
            'Empathy Mapping',
            'User Personas'
        ]
    },
    {
        id: 'Define',
        number: '02',
        title: 'Define',
        subtitle: 'Synthesize findings and define key challenges',
        color: 'from-[#E31E5D] to-[#E31E5D]',
        borderColor: 'border-[#E31E5D]',
        shadowColor: 'shadow-[#E31E5D]/20',
        textColor: 'text-[#E31E5D]',
        bg: 'bg-[#E31E5D]/10',
        accentColor: '#E31E5D',
        videoUrl: '/dt process phases/define.mov',
        items: [
            'Problem Statement',
            'Point of View (POV)',
            'How Might We',
            'Stakeholder Mapping',
            'Context Mapping'
        ]
    },
    {
        id: 'Ideate',
        number: '03',
        title: 'Ideate',
        subtitle: 'Generate creative ideas and innovative solutions',
        color: 'from-[#89B935] to-[#89B935]',
        borderColor: 'border-[#89B935]',
        shadowColor: 'shadow-[#89B935]/20',
        textColor: 'text-[#89B935]',
        bg: 'bg-[#89B935]/10',
        accentColor: '#89B935',
        videoUrl: '/dt process phases/ideate video.mov',
        items: [
            'Brainstorming',
            'Mind Mapping',
            'SCAMPER',
            'Worst Possible Idea',
            'Storyboarding'
        ]
    },
    {
        id: 'Prototype',
        number: '04',
        title: 'Prototype',
        subtitle: 'Build and develop working prototypes',
        color: 'from-[#F58220] to-[#F58220]',
        borderColor: 'border-[#F58220]',
        shadowColor: 'shadow-[#F58220]/20',
        textColor: 'text-[#F58220]',
        bg: 'bg-[#F58220]/10',
        accentColor: '#F58220',
        videoUrl: '/dt process phases/prototype video.MP4',
        items: [
            'Low-Fidelity Models',
            'Paper Prototyping',
            'Digital Mockups',
            'Physical Models',
            'Role Playing'
        ]
    },
    {
        id: 'Testing',
        number: '05',
        title: 'Testing',
        subtitle: 'Test, validate, and refine solutions',
        color: 'from-[#00ADEF] to-[#00ADEF]',
        borderColor: 'border-[#00ADEF]',
        shadowColor: 'shadow-[#00ADEF]/20',
        textColor: 'text-[#00ADEF]',
        bg: 'bg-[#00ADEF]/10',
        accentColor: '#00ADEF',
        videoUrl: '/dt process phases/testing video.mov',
        items: [
            'User Testing',
            'Feedback Grid',
            'Refinement',
            'Validation',
            'Iteration'
        ]
    }
];

export const DTPhases: React.FC = () => {
    const [activeId, setActiveId] = useState<string>('Empathy');
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Keyboard navigation handler
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const currentIndex = PhasesData.findIndex(p => p.id === activeId);

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % PhasesData.length;
            setActiveId(PhasesData[nextIndex].id);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + PhasesData.length) % PhasesData.length;
            setActiveId(PhasesData[prevIndex].id);
        }
    }, [activeId]);

    // Register ScrollTrigger and ScrollToPlugin
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }, []);

    // Add keyboard event listener
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;

        if (!section || !container) return;

        // GSAP ScrollTrigger has been intentionally removed.
        // The interaction is now fully manual (click to expand).

    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-[#0a0a0f] text-white overflow-hidden relative min-h-screen flex flex-col justify-center"
        >
            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <video
                    src="/dt process phase bg.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/70"></div>
                {/* Gradient overlays for depth */}
                <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-[#FFCC00]/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px]"></div>
            </div>

            <div ref={containerRef} className="container mx-auto px-4 relative z-10 transition-transform duration-300">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block relative">
                        <div className="flex items-center justify-center gap-4 mb-4">
                            <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-transparent via-[#FFCC00] to-[#FFCC00] rounded-full"></div>
                            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                                DT Process <span className="text-[#FFCC00]">Phases</span>
                            </h2>
                            <div className="h-1 w-12 md:w-20 bg-gradient-to-r from-[#FFCC00] via-[#FFCC00] to-transparent rounded-full"></div>
                        </div>
                        <p className="text-xl text-gray-400 font-medium">Five Essential Stages of Design Thinking</p>
                    </div>
                </div>

                {/* Accordion Layout */}
                <div className="flex flex-col lg:flex-row gap-2 lg:gap-4 h-[auto] lg:h-[650px] transition-all duration-500">
                    {PhasesData.map((phase) => (
                        <div
                            key={phase.id}
                            onClick={() => setActiveId(phase.id)}
                            className={`
                                relative rounded-xl lg:rounded-3xl overflow-hidden transition-all duration-700 ease-out border border-white/5 cursor-pointer
                                ${activeId === phase.id ? 'lg:flex-[20] bg-[#1a1a2e]' : 'lg:flex-[1] bg-[#12121e] hover:brightness-125'}
                                ${activeId === phase.id ? phase.shadowColor + ' shadow-xl lg:shadow-2xl cursor-default' : ''}
                                flex flex-col
                            `}
                        >
                            {/* Color Bar */}
                            <div className={`h-2 w-full bg-gradient-to-r ${phase.color}`}></div>

                            {/* Content */}
                            <div className="p-3 lg:p-6 h-full flex flex-col relative overflow-hidden">

                                {/* Background Video Faded (Instead of Image) */}
                                <div className={`absolute inset-0 opacity-10 transition-all duration-1000 ${activeId === phase.id ? 'scale-110 opacity-20' : 'scale-100'}`}>
                                    <video
                                        src={phase.videoUrl}
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                {/* Vertical Header (Desktop Inactive) */}
                                <div className={`
                                    hidden lg:flex absolute bottom-10 left-0 right-0 items-end justify-center
                                    transition-all duration-500
                                    ${activeId !== phase.id ? 'opacity-100' : 'opacity-0 translate-y-10'}
                                `}>
                                    <h3 className="text-4xl font-black text-white/50 origin-bottom center rotate-[-90deg] whitespace-nowrap mb-20 tracking-widest pointer-events-none">
                                        {phase.number} {phase.title}
                                    </h3>
                                    <div className={`absolute bottom-6 w-10 h-10 rounded-full border ${phase.borderColor} flex items-center justify-center animate-pulse pointer-events-none`}>
                                        <ChevronRight className={`w-5 h-5 ${phase.textColor}`} />
                                    </div>
                                </div>

                                {/* Active Header (Mobile & Desktop Active) */}
                                <div className={`flex items-center gap-2 lg:gap-4 mb-2 lg:mb-6 transition-all duration-500 z-10 ${activeId === phase.id ? 'opacity-100' : 'opacity-100 lg:opacity-0 lg:h-0 lg:overflow-hidden'}`}>
                                    <div className={`w-12 h-12 lg:w-20 lg:h-20 rounded-lg lg:rounded-2xl flex items-center justify-center shrink-0 bg-white/5 backdrop-blur-sm border ${phase.borderColor}`}>
                                        <span className={`text-xl lg:text-3xl font-black ${phase.textColor}`}>{phase.number}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl lg:text-4xl font-black text-white">{phase.title}</h3>
                                        <p className={`text-[8px] lg:text-sm font-bold uppercase tracking-wider ${phase.textColor}`}>Design Thinking Phase</p>
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div className={`
                                    flex-grow flex flex-col transition-all duration-700 delay-200 z-10
                                    ${activeId === phase.id ? 'opacity-100 translate-y-0' : 'opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-10 lg:absolute lg:invisible'}
                                `}>
                                    {/* Subtitle with Bullet */}
                                    <div className="flex items-start gap-2 lg:gap-3 mb-2 lg:mb-8 pl-1">
                                        <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1 lg:mt-2 rounded-full flex-shrink-0 ${phase.bg.replace('/10', '')} shadow-[0_0_8px_current]`}></div>
                                        <p className="text-xs lg:text-lg text-gray-300 italic font-medium leading-tight lg:leading-relaxed">
                                            {phase.subtitle}
                                        </p>
                                    </div>

                                    {/* Main Video Feature */}
                                    <div className="relative w-full h-24 lg:h-64 rounded-lg lg:rounded-xl overflow-hidden mb-2 lg:mb-8 border border-white/10 shadow-xl lg:shadow-2xl group/image">
                                        <video
                                            src={phase.videoUrl}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                                        <div className="absolute bottom-2 lg:bottom-4 left-2 lg:left-4">
                                            <span className={`text-[8px] lg:text-xs font-bold px-2 lg:px-3 py-0.5 lg:py-1 rounded-full bg-black/50 backdrop-blur-md border border-white/10 ${phase.textColor}`}>
                                                {phase.title} Phase
                                            </span>
                                        </div>
                                    </div>

                                    {/* List Items */}
                                    <h4 className="text-xs lg:text-white font-bold mb-1 lg:mb-4 flex items-center gap-1 lg:gap-2 text-white">
                                        <span className={`w-4 lg:w-8 h-[1px] ${phase.bg.replace('/10', '')}`}></span>
                                        Key Activities
                                    </h4>
                                    <div className="grid grid-cols-2 gap-x-2 lg:gap-x-6 gap-y-1 lg:gap-y-3 overflow-y-auto pr-1 lg:pr-2 custom-scrollbar">
                                        {phase.items.map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-1 lg:gap-3 p-0.5 lg:p-1 transition-colors group/item">
                                                <div className={`w-1 lg:w-1.5 h-1 lg:h-1.5 mt-1 lg:mt-2 rounded-full flex-shrink-0 bg-white shadow-[0_0_4px_white] lg:shadow-[0_0_8px_white] group-hover/item:scale-150 transition-transform`}></div>
                                                <span className="text-[10px] lg:text-base text-gray-300 font-medium group-hover/item:text-white leading-tight lg:leading-relaxed">{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-sm text-gray-500 uppercase tracking-widest font-bold animate-pulse">Click or Use Arrows to Explore Stages</p>
                    <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent mx-auto mt-4"></div>
                </div>

            </div>
        </section>
    );
};
