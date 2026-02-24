import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowLeft } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const DTFramework: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [activePillar, setActivePillar] = useState<number>(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
    const [showMobileDetails, setShowMobileDetails] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;

        if (isAutoPlaying) {
            interval = setInterval(() => {
                setActivePillar((prev) => (prev + 1) % 4);
            }, 5000);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isAutoPlaying]);

    const handlePillarClick = (id: number) => {
        setActivePillar(id);
        setShowMobileDetails(true);
        // Pause auto-play for 10 seconds after a manual click, then resume
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 10000);
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Initial arrival
            gsap.fromTo('.dashboard-container',
                { scale: 0.9, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'expo.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Animate pillar buttons on entry
            gsap.fromTo('.pillar-btn',
                { y: 30, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.1,
                    ease: 'back.out(1.7)',
                    delay: 0.4,
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

        }, section);

        return () => ctx.revert();
    }, []);

    // Animate content change
    useEffect(() => {
        gsap.fromTo('.pillar-content-item',
            { x: 20, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.05,
                ease: 'power2.out',
                overwrite: 'auto'
            }
        );
    }, [activePillar]);

    const institutionalCourses = [
        'Design Thinking Course',
        'Life Skill Courses',
        'Communicative English',
        'Professional Comm.',
        'Personality Development',
        'Foreign Languages',
        'Global Business Ethics & Law',
        'Verbal/Quants/Apti/Reasoning',
        'Essence of Global Culture'
    ];

    const programCourses = [
        'Emerging MOOC Courses',
        '2 Coding Languages',
        '2 Dept. Specific Tools',
        'Basic S & H Courses',
        'Program Specific Engg. / Arts / Science / Core/ Elective Courses',
        '7 Innovation Technologies'
    ];

    const careerCourses = [
        'Mini Projects',
        'Internships',
        'Industrial Training',
        'Industrial Projects',
        'Student Exchange Prog.',
        'Capstone Projects',
        '4 Career Tracks'
    ];

    const nonAcademicCourses = [
        'Weekend Online Practice',
        'Extra-Curricular Activities'
    ];

    const innovationTech = [
        'Robotics & Automation',
        'AR / VR / MetaVerse Gaming & Digital Twins',
        'Data Science / AI / ML',
        'Internet of Things',
        'Communication & Growth Tech',
        'Additive Manufacturing (3D Printing)',
        'Low Code Development'
    ];

    const careerTracks = [
        {
            title: 'Track 1: Domain Specific Jobs',
            items: ['Mock Interviews', 'Personal Psychology', 'Job Search', 'Resume Building, Interview Process & On-boarding', 'Advanced VQAR'],
            color: '#000000'
        },
        {
            title: 'Track 2: Govt./Bank/RRB Jobs',
            items: ['Personal Psychology', 'General Knowledge', 'Resume Building', 'Interview Process', 'Advanced VQAR (Govt., Bank and UPSC)'],
            color: '#000000'
        },
        {
            title: 'Track 3: Entrepreneurship',
            items: ['Business Model Canvas', 'B.Plan, Pitching & Negotiation', 'Finance & Economics', 'IPR Drafting'],
            color: '#000000'
        },
        {
            title: 'Track 4: Higher Education',
            items: ['Advanced Verbal Reasoning (TOEFL/IELTS)', 'Advanced QAR (GRE, GMAT and GATE)'],
            color: '#000000'
        }
    ];

    const dailyActivities = [
        'Coding Language',
        'Subject & Domain Specific Questions',
        'Verbal, Quantitative, Aptitude & Reasoning (VQAR)',
        'Innovation Technologies/Tools',
        'Daily Yoga & Meditation',
        'Daily Readings',
        'Clubs / Sports',
        'Hackathon, Contests'
    ];

    const dashboardPillars = [
        {
            id: 0,
            title: 'Foundational DT Academics',
            items: [...institutionalCourses, ...programCourses],
            color: '#29A9A0',
            icon: '🎓'
        },
        {
            id: 1,
            title: 'Innovation Tech Spectrum',
            items: innovationTech,
            color: '#89B935',
            icon: '⚡'
        },
        {
            id: 2,
            title: 'Wellness & Daily Practice',
            items: [...nonAcademicCourses, ...dailyActivities],
            color: '#E31E5D',
            icon: '🧘'
        },
        {
            id: 3,
            title: 'Strategic Career Paths',
            items: [...careerCourses, ...careerTracks.map(t => t.title)],
            color: '#F58220',
            icon: '🚀'
        }
    ];

    return (
        <section ref={sectionRef} className="bg-[#FFCC00] min-h-screen w-full relative overflow-hidden py-16 flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]"></div>
                {/* Tech grid overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                    backgroundImage: 'radial-gradient(#000000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}></div>
            </div>

            <div className="relative z-10 w-full max-w-[1600px] mx-auto px-8">
                {/* Dashboard Header */}
                <div className="text-center mb-12">
                    <h1 className="text-6xl font-black text-black uppercase tracking-tighter mb-2">
                        DT <span className="text-black/40">Framework</span>
                    </h1>
                    <p className="text-black font-black text-xl uppercase tracking-widest opacity-60">Unique at SNS • One Integrated DNA</p>
                </div>

                {/* Main Dashboard Interaction */}
                <div className="dashboard-container grid grid-cols-12 gap-8 items-stretch min-h-[700px]">
                    {/* Navigation Rail */}
                    <div className={`col-span-12 lg:col-span-3 flex flex-col gap-4 ${showMobileDetails ? 'hidden lg:flex' : 'flex'}`}>
                        {dashboardPillars.map((pillar) => (
                            <button
                                key={pillar.id}
                                onClick={() => handlePillarClick(pillar.id)}
                                className={`pillar-btn group relative p-6 rounded-3xl text-left transition-all duration-500 overflow-hidden ${activePillar === pillar.id
                                    ? 'bg-black shadow-[0_20px_40px_rgba(0,0,0,0.5)] scale-105 border-2 border-white/20'
                                    : 'bg-black/80 hover:bg-black backdrop-blur-md border border-white/5'
                                    }`}
                            >
                                {activePillar === pillar.id && (
                                    <div
                                        className="absolute left-0 top-0 bottom-0 w-2"
                                        style={{ backgroundColor: pillar.color }}
                                    ></div>
                                )}
                                <div className="flex items-center gap-4">
                                    <span className="text-3xl">{pillar.icon}</span>
                                    <div>
                                        <h3 className={`font-black text-lg transition-colors ${activePillar === pillar.id ? 'text-white' : 'text-white/60'
                                            }`}>
                                            {pillar.title.split(' ')[0]}
                                        </h3>
                                        <p className={`text-xs font-bold uppercase tracking-widest opacity-60 transition-colors ${activePillar === pillar.id ? 'text-white/80' : 'text-white/40'
                                            }`}>
                                            {pillar.title.split(' ').slice(1).join(' ')}
                                        </p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Content Display Frame */}
                    <div className={`col-span-12 lg:col-span-9 relative ${!showMobileDetails ? 'hidden lg:block' : 'block'}`}>
                        <div className="h-full bg-[#0a0a0f] rounded-[40px] border-2 border-white/5 p-6 lg:p-12 overflow-hidden relative shadow-[0_40px_80px_rgba(0,0,0,0.4)]">
                            {/* Decorative Background for Frame */}
                            <div
                                className="absolute top-0 right-0 w-96 h-96 blur-[120px] opacity-20 rounded-full transition-all duration-1000"
                                style={{ backgroundColor: dashboardPillars[activePillar].color }}
                            ></div>

                            <div className="relative z-10 h-full flex flex-col">
                                <div className="flex items-start lg:items-end justify-between mb-8 border-b border-white/10 pb-6">
                                    <div className="flex items-start gap-2 lg:gap-4">
                                        <button
                                            onClick={() => setShowMobileDetails(false)}
                                            className="lg:hidden p-2 -ml-2 mt-1 rounded-xl text-white/60 hover:text-white hover:bg-white/10 transition-colors"
                                        >
                                            <ArrowLeft className="w-6 h-6" />
                                        </button>
                                        <div>
                                            <span className="text-xs lg:text-sm font-black uppercase tracking-[0.2em] lg:tracking-[0.3em] opacity-60 mb-2 block" style={{ color: dashboardPillars[activePillar].color }}>
                                                Section Content
                                            </span>
                                            <h2 className="text-3xl lg:text-5xl font-black text-white uppercase italic leading-none">
                                                {dashboardPillars[activePillar].title}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="text-6xl lg:text-8xl font-black opacity-10 select-none transform translate-y-4 lg:translate-y-8" style={{ color: dashboardPillars[activePillar].color }}>
                                        0{activePillar + 1}
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 flex-1 overflow-y-auto pr-4 custom-scrollbar">
                                    {dashboardPillars[activePillar].items.map((item, idx) => (
                                        <div
                                            key={idx}
                                            className="pillar-content-item flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all cursor-pointer group"
                                        >
                                            <div
                                                className="w-2 h-2 rounded-full transform scale-0 group-hover:scale-100 transition-transform duration-300"
                                                style={{ backgroundColor: dashboardPillars[activePillar].color }}
                                            ></div>
                                            <span className="text-white/90 font-bold text-lg leading-tight uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                                                {item}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Simplified Bottom Banner */}
                <div className="mt-8 lg:mt-16 text-center">
                    <div className="inline-flex flex-col lg:flex-row items-center gap-2 lg:gap-8 bg-black/10 backdrop-blur-xl px-6 py-4 lg:px-12 lg:py-6 rounded-3xl lg:rounded-full border border-black/10 shadow-2xl">
                        <h2 className="text-2xl lg:text-4xl font-black text-black italic" style={{ fontFamily: 'Arial, sans-serif' }}>
                            Building An
                        </h2>
                        <h2 className="text-3xl lg:text-5xl font-black text-white uppercase tracking-tighter text-center">
                            Entrepreneurial Culture
                        </h2>
                    </div>
                </div>
            </div>

            <style>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: rgba(255, 255, 255, 0.2);
                    border-radius: 10px;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                    background: rgba(255, 255, 255, 0.4);
                }
            `}</style>
        </section>
    );
};
