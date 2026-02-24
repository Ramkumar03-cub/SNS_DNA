import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ChevronRight } from 'lucide-react';

const PillarsData = [
    {
        id: 'CLT',
        title: 'Center for Learning and Teaching',
        subtitle: 'Design Thinking Based Academic Learning',
        color: 'from-[#89C440] to-[#89C440]',
        borderColor: 'border-[#89C440]',
        shadowColor: 'shadow-[#89C440]/20',
        textColor: 'text-[#89C440]',
        bg: 'bg-[#89C440]/65',
        icon: <img src="/5 Pillars Logo/CLT.png" alt="CLT Logo" className="w-full h-full object-contain" />,
        items: [
            'NPTEL/MOOC Courses',
            'Mentor System',
            "Bloom's Taxonomy",
            'Choice Based Credit System',
            'Design Thinking Curriculum',
            'Online Learning Platform',
            'International Expert Series',
            'Student Centered Learning',
            'Updated Syllabus',
            'Experiential Learning'
        ]
    },
    {
        id: 'SCD',
        title: 'Skill and Career Development',
        subtitle: 'Building lifestyle Through Various Clubs',
        color: 'from-[#D81A5B] to-[#D81A5B]',
        borderColor: 'border-[#D81A5B]',
        shadowColor: 'shadow-[#D81A5B]/20',
        textColor: 'text-[#D81A5B]',
        bg: 'bg-[#D81A5B]/65',
        icon: <img src="/5 Pillars Logo/SCD.png" alt="SCD Logo" className="w-full h-full object-contain" />,
        items: [
            '4 Career Tracks & Lifeskills',
            'Club Activities & ARP Award',
            'Contests / Competitions',
            'Ideathon / Hackathon',
            'Sports / Yoga / Fitness',
            'Business Skill Development / Coding Training',
            'Student Exchange Program & VQAR Training',
            'Latest Tools & Technologies',
            'SNS Mango Big7 16 Companies',
            'SNS Notable Clubs 20 +'

        ]
    },
    {
        id: 'CFC',
        title: 'Center for Creativity',
        subtitle: 'Hands-on Experience to Solve Key Industrial Problems',
        color: 'from-[#F37021] to-[#F37021]',
        borderColor: 'border-[#F37021]',
        shadowColor: 'shadow-[#F37021]/20',
        textColor: 'text-[#F37021]',
        bg: 'bg-[#F37021]/65',
        icon: <img src="/5 Pillars Logo/CFC.png" alt="CFC Logo" className="w-full h-full object-contain" />,
        items: [
            'DT Bootcamp',
            '7+7 Innovation Areas',
            'Open Innovation Challenge',
            'Patents / Journals',
            'Start-up Creators',
            'Innovation Capacity Building',
            'Industry Enabled Labs',
            'Consultancy with Industries',
            'Incubators & Accelerators',
            'Angel Investors'
        ]
    },
    {
        id: 'IIPC',
        title: 'Industry Institute Partnership Cell',
        subtitle: 'Connecting and Learning Business Sense',
        color: 'from-[#FFCC00] to-[#FFCC00]',
        borderColor: 'border-[#FFCC00]',
        shadowColor: 'shadow-[#FFCC00]/20',
        textColor: 'text-[#FFCC00]',
        bg: 'bg-[#FFCC00]/65',
        icon: <img src="/5 Pillars Logo/IIPC.png" alt="IIPC Logo" className="w-full h-full object-contain" />,
        items: [
            'Weekly CEO talks',
            'Industrial Projects',
            'MoUs & Partnership',
            'Industrial Visit / Field Trip',
            'Internship / In-Plant Training',
            'Industry Focussed Case Study',
            'Mentoring With Industry Experts'
        ]
    },
    {
        id: 'SRI',
        title: 'Social Responsibility Initiatives',
        subtitle: 'Giving back to the Society through Social Service',
        color: 'from-[#00ADEF] to-[#00ADEF]',
        borderColor: 'border-[#00ADEF]',
        shadowColor: 'shadow-[#00ADEF]/20',
        textColor: 'text-[#00ADEF]',
        bg: 'bg-[#00ADEF]/65',
        icon: <img src="/5 Pillars Logo/SRI.png" alt="SRI Logo" className="w-full h-full object-contain" />,
        items: [
            'Outreach Activities',
            'Extensional Activities',
            'Santa 365',
            'Kavalan SOS',
            'Alumni Interaction',
            'RRC / YRC / NSS',
            'Swachh Bharat Scheme',
            'UBA Scheme'
        ]
    }
];

export const DTFivePillars: React.FC = () => {
    const [activeId, setActiveId] = useState<string>('CFC');
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Register ScrollTrigger and ScrollToPlugin
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    }, []);

    useLayoutEffect(() => {
        const section = sectionRef.current;
        const container = containerRef.current;

        if (!section || !container) return;

        // GSAP ScrollTrigger has been intentionally removed based on user request.
        // The Five Pillars interaction is now fully manual (click to expand).

    }, []);

    return (
        <section
            ref={sectionRef}
            className="py-24 bg-[#0a0a0f] text-white overflow-hidden relative min-h-screen flex flex-col justify-center"
        >
            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover brightness-10"
                >
                    <source src="/five pillar bg.mov" type="video/mp4" />
                </video>
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div ref={containerRef} className="container mx-auto px-4 relative z-10 transition-transform duration-300">

                {/* Header */}
                <div className="text-center mb-16">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-4">
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
                            <span className="text-[#FFCC00]">SNS</span> Engine (DT)
                        </h2>
                        <span className="hidden md:block text-4xl text-gray-600 font-light">&</span>
                        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                            Five Pillars
                        </h2>
                    </div>
                </div>

                {/* Unique Accordion Layout */}
                <div className="flex flex-row overflow-x-auto snap-x snap-mandatory gap-4 h-[auto] min-h-[500px] lg:h-[600px] lg:overflow-visible transition-all duration-500 pb-8 lg:pb-0 scrollbar-hide">
                    {PillarsData.map((pillar) => (
                        <div
                            key={pillar.id}
                            onClick={() => setActiveId(pillar.id)}
                            className={`
                                pillar-card-${pillar.id}
                                relative rounded-3xl overflow-hidden transition-all duration-700 ease-out border ${pillar.borderColor}
                                ${activeId === pillar.id ? 'lg:flex-[20] ' + pillar.bg : 'lg:flex-[1] ' + pillar.bg}
                                ${activeId === pillar.id ? pillar.shadowColor + ' shadow-2xl cursor-default' : 'cursor-pointer hover:brightness-110'}
                                flex flex-col
                                min-w-[85vw] sm:min-w-[400px] lg:min-w-0 snap-center h-full min-h-[500px] lg:h-auto
                            `}
                        >
                            {/* Color Bar */}
                            <div className={`h-2 w-full bg-gradient-to-r ${pillar.color}`}></div>

                            {/* Content */}
                            <div className="p-6 h-full flex flex-col relative overflow-hidden">

                                {/* Background Icon Faded */}
                                <div className={`absolute -right-10 -bottom-10 opacity-5 transform rotate-[-15deg] transition-all duration-500 ${activeId === pillar.id ? 'scale-150' : 'scale-100'}`}>
                                    {React.cloneElement(pillar.icon as React.ReactElement, { className: `w-60 h-60 object-contain ${pillar.textColor}` })}
                                </div>

                                {/* Icon & Title Header - Hidden on desktop when inactive to save space */}
                                <div className={`flex items-center gap-2 lg:gap-4 mb-2 lg:mb-6 transition-all duration-500 ${activeId === pillar.id ? 'opacity-100' : 'lg:opacity-0 lg:h-0 lg:overflow-hidden opacity-100'}`}>
                                    <div className={`w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-center shrink-0`}>
                                        {pillar.icon}
                                    </div>
                                    <div className={`${activeId !== pillar.id ? 'lg:opacity-0 lg:h-0 lg:overflow-hidden' : 'opacity-100'} transition-all duration-500 delay-100`}>
                                        <h3 className="text-xl lg:text-3xl font-black text-white">{pillar.id}</h3>
                                        <p className={`text-[8px] lg:text-[10px] font-bold uppercase tracking-wider ${pillar.textColor}`}>{pillar.title}</p>
                                    </div>
                                </div>

                                {/* Collapsed Vertical Text (Desktop Only) */}
                                <div className={`
                                    hidden lg:flex absolute bottom-10 left-6 right-6 items-end justify-between
                                    transition-all duration-500
                                    ${activeId !== pillar.id ? 'opacity-100' : 'opacity-0 translate-y-10'}
                                `}>
                                    <h3 className="text-4xl font-black text-white/20 origin-bottom-left rotate-[-90deg] translate-x-4 absolute bottom-20 left-0 whitespace-nowrap">
                                        {pillar.id}
                                    </h3>
                                    <div className={`w-10 h-10 rounded-full border ${pillar.borderColor} flex items-center justify-center animate-pulse`}>
                                        <ChevronRight className={`w-5 h-5 ${pillar.textColor}`} />
                                    </div>
                                </div>

                                {/* Expanded Content */}
                                <div className={`
                                    flex-grow flex flex-col transition-all duration-700 delay-200
                                    ${activeId === pillar.id ? 'opacity-100 translate-y-0' : 'opacity-100 lg:opacity-0 translate-y-0 lg:translate-y-10 lg:absolute lg:invisible'}
                                `}>
                                    {/* Subtitle with Bullet */}
                                    <div className="flex items-start gap-2 lg:gap-3 mb-2 lg:mb-6 pl-1 group/subtitle">
                                        <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1 lg:mt-2 rounded-full flex-shrink-0 ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_current] opacity-80`}></div>
                                        <p className="text-xs lg:text-sm text-gray-400 italic font-medium leading-tight lg:leading-relaxed">
                                            {pillar.subtitle}
                                        </p>
                                    </div>

                                    {pillar.id === 'IIPC' ? (
                                        <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 h-full pb-4 lg:pb-0 overflow-y-auto">
                                            {/* Left Content */}
                                            <div className="flex-1 grid grid-cols-1 gap-y-1 lg:gap-y-4 overflow-y-visible lg:overflow-y-auto pr-1 lg:pr-2 custom-scrollbar min-h-0">
                                                {pillar.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 lg:gap-3 p-1 transition-colors group/item shrink-0">
                                                        <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1.5 lg:mt-2 rounded-full flex-shrink-0 ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_current] group-hover/item:scale-125 transition-transform`}></div>
                                                        <span className="text-[10px] lg:text-lg text-white font-bold group-hover/item:text-white leading-tight lg:leading-relaxed">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            {/* Right Image */}
                                            <div className="flex-1 flex flex-col items-center justify-center p-2 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl border border-white/10 shrink-0">
                                                <div className="text-center text-[10px] lg:text-sm font-bold text-[#FFCC00] uppercase mb-2 lg:mb-4">Industry Ready Certificates</div>
                                                <img src="/Certifcation.png" alt="IIPC Certification" className="w-[60%] lg:w-full max-w-[150px] lg:max-w-full max-h-[100px] lg:max-h-[300px] object-contain rounded-md lg:rounded-lg shadow-xl lg:shadow-2xl" />
                                            </div>
                                        </div>
                                    ) : pillar.id === 'SRI' ? (
                                        <div className="relative h-full flex flex-col lg:block overflow-auto lg:overflow-hidden pb-4 lg:pb-0">
                                            {/* Mobile Order: Image container first or second, stacked. Using flex-col handles this native. */}
                                            <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-0 h-auto lg:h-full flex flex-col gap-2 lg:gap-4 p-2 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden justify-start mb-2 lg:mb-0 shrink-0 relative lg:static z-10">
                                                <div className="text-center text-[10px] lg:text-sm font-bold text-[#FFCC00] uppercase shrink-0">Design Thinking & Agentic AI Boot Camp for School Kids</div>
                                                <div className="flex flex-row lg:flex-col gap-2 w-full justify-start flex-1 overflow-visible lg:overflow-hidden">
                                                    <img src="/sri 1.jpg.jpeg" alt="SRI Image 1" className="w-1/2 lg:w-full h-16 lg:h-auto lg:max-h-[45%] object-cover rounded-md lg:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                                    <img src="/sri 2.jpg.jpeg" alt="SRI Image 2" className="w-1/2 lg:w-full h-16 lg:h-auto lg:max-h-[45%] object-cover rounded-md lg:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                                </div>
                                            </div>
                                            {/* Left Content */}
                                            <div className="w-full lg:w-[50%] h-auto lg:h-full overflow-y-visible lg:overflow-y-auto pr-1 lg:pr-2 custom-scrollbar content-start">
                                                {pillar.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 lg:gap-3 p-1 transition-colors group/item shrink-0">
                                                        <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1.5 lg:mt-2 rounded-full flex-shrink-0 ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_current] group-hover/item:scale-125 transition-transform`}></div>
                                                        <span className="text-[10px] lg:text-lg text-white font-bold group-hover/item:text-white leading-tight lg:leading-relaxed">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : pillar.id === 'CFC' ? (
                                        <div className="relative h-full flex flex-col lg:block overflow-auto lg:overflow-hidden pb-4 lg:pb-0">
                                            {/* Right Image - Rendered before list on mobile so it doesn't get pushed bottom out of view */}
                                            <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-0 h-auto lg:h-full flex flex-col items-center justify-center p-2 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl border border-white/10 mb-2 lg:mb-0 shrink-0 relative lg:static z-10">
                                                <div className="text-center text-[10px] lg:text-sm font-bold text-[#FFCC00] uppercase mb-2 lg:mb-4">Hackathons & Competitions</div>
                                                <img src="/cfc-prize-dist.jpg" alt="CFC Prize Distribution" className="w-[80%] lg:w-full max-w-[200px] lg:max-w-full h-20 lg:h-auto lg:max-h-[100%] object-contain rounded-md lg:rounded-lg shadow-xl lg:shadow-2xl" />
                                            </div>
                                            {/* Left Content */}
                                            <div className="w-full lg:w-[50%] h-auto lg:h-full overflow-y-visible lg:overflow-y-auto pr-1 lg:pr-2 custom-scrollbar content-start">
                                                {pillar.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 lg:gap-3 p-1 transition-colors group/item shrink-0">
                                                        <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1.5 lg:mt-2 rounded-full flex-shrink-0 ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_current] group-hover/item:scale-125 transition-transform`}></div>
                                                        <span className="text-[10px] lg:text-lg text-white font-bold group-hover/item:text-white leading-tight lg:leading-relaxed">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : pillar.id === 'CLT' ? (
                                        <div className="relative h-full flex flex-col lg:block overflow-auto lg:overflow-hidden pb-4 lg:pb-0">
                                            {/* Right Image */}
                                            <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-0 h-auto lg:h-full flex flex-col items-center justify-center p-2 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl border border-white/10 mb-2 lg:mb-0 shrink-0 relative lg:static z-10">
                                                <div className="text-center text-[10px] lg:text-sm font-bold text-[#FFCC00] uppercase mb-2 lg:mb-4">Smart Classrooms</div>
                                                <img src="/smart-classrooms.jpg" alt="Smart Classrooms" className="w-[80%] lg:w-full max-w-[200px] lg:max-w-full h-20 lg:h-auto lg:max-h-[100%] object-contain rounded-md lg:rounded-lg shadow-xl lg:shadow-2xl" />
                                            </div>
                                            {/* Left Content */}
                                            <div className="w-full lg:w-[50%] h-auto lg:h-full overflow-y-visible lg:overflow-y-auto pr-1 lg:pr-2 custom-scrollbar content-start">
                                                {pillar.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 lg:gap-3 p-1 transition-colors group/item shrink-0">
                                                        <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1.5 lg:mt-2 rounded-full flex-shrink-0 ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_current] group-hover/item:scale-125 transition-transform`}></div>
                                                        <span className="text-[10px] lg:text-lg text-white font-bold group-hover/item:text-white leading-tight lg:leading-relaxed">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : pillar.id === 'SCD' ? (
                                        <div className="relative h-full flex flex-col lg:block overflow-auto lg:overflow-hidden pb-4 lg:pb-0">
                                            {/* Right Image */}
                                            <div className="w-full lg:w-[45%] lg:absolute lg:right-0 lg:top-0 h-auto lg:h-full flex flex-col gap-2 lg:gap-4 p-2 lg:p-4 bg-white/5 rounded-xl lg:rounded-2xl border border-white/10 overflow-hidden justify-start mb-2 lg:mb-0 shrink-0 relative lg:static z-10">
                                                <div className="text-center text-[10px] lg:text-sm font-bold text-[#FFCC00] uppercase shrink-0">Explore Beyond The Classroom</div>
                                                <div className="flex flex-row lg:flex-col gap-2 w-full justify-start flex-1 overflow-visible lg:overflow-hidden">
                                                    <img src="/scd-sports.jpg" alt="Sports" className="w-1/2 lg:w-full h-16 lg:h-auto lg:max-h-[45%] object-cover rounded-md lg:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                                    <img src="/scd-cultural.jpg" alt="Cultural Activities" className="w-1/2 lg:w-full h-16 lg:h-auto lg:max-h-[45%] object-cover rounded-md lg:rounded-lg shadow-lg hover:scale-105 transition-transform duration-300" />
                                                </div>
                                            </div>
                                            {/* Left Content */}
                                            <div className="w-full lg:w-[50%] h-auto lg:h-full overflow-y-visible lg:overflow-y-auto pr-1 lg:pr-2 custom-scrollbar content-start">
                                                {pillar.items.map((item, idx) => (
                                                    <div key={idx} className="flex items-start gap-2 lg:gap-3 p-1 transition-colors group/item shrink-0">
                                                        <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 mt-1.5 lg:mt-2 rounded-full flex-shrink-0 ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_current] group-hover/item:scale-125 transition-transform`}></div>
                                                        <span className="text-[10px] lg:text-lg text-white font-bold group-hover/item:text-white leading-tight lg:leading-relaxed">{item}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 overflow-y-auto pr-2 custom-scrollbar">
                                            {pillar.items.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-3 p-1 transition-colors group/item">
                                                    {/* Consistent Bullet Point */}
                                                    <div className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${pillar.bg.replace('/10', '')} shadow-[0_0_8px_current] group-hover/item:scale-125 transition-transform`}></div>
                                                    <span className="text-lg text-white font-bold group-hover/item:text-white leading-relaxed">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Section */}
                <div className="mt-20 text-center max-w-4xl mx-auto">
                    <div className="bg-[#FFCC00] text-black px-8 py-4 transform -skew-x-12 inline-block mb-8 shadow-2xl shadow-[#FFCC00]/20">
                        <h3 className="text-2xl md:text-3xl font-black uppercase transform skew-x-12">
                            Educational Space That Provides a <span className="font-serif italic lowercase text-4xl block md:inline md:ml-2">unique life style</span>
                        </h3>
                    </div>
                </div>

            </div>
        </section>
    );
};
