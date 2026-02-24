import React, { useState, useEffect, useCallback } from 'react';
import { Trophy, Award, BookOpen, Rocket, Globe, Users, TrendingUp, Cpu, Medal, GraduationCap, Building, Briefcase, Star, Zap, Target, Heart, Leaf, ChevronLeft, ChevronRight, Circle } from 'lucide-react';

// Scrolling Marquee Component
const Marquee: React.FC<{ children: React.ReactNode; direction?: 'left' | 'right'; speed?: number }> = ({
    children,
    direction = 'left',
    speed = 30
}) => (
    <div className="overflow-hidden whitespace-nowrap">
        <div
            className={`inline-flex gap-8 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'}`}
            style={{ animationDuration: `${speed}s` }}
        >
            {children}
            {children}
        </div>
    </div>
);

// Counting Number Component
const CountUp: React.FC<{ end: number; duration?: number; suffix?: string; prefix?: string; decimals?: number }> = ({
    end,
    duration = 2,
    suffix = '',
    prefix = '',
    decimals = 0
}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / (duration * 1000), 1);

            // Easing function (easeOutExpo)
            const ease = percentage === 1 ? 1 : 1 - Math.pow(2, -10 * percentage);

            setCount(end * ease);

            if (percentage < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [end, duration]);

    return (
        <span>
            {prefix}
            {count.toFixed(decimals)}
            {suffix}
        </span>
    );
};

const Card: React.FC<{ children: React.ReactNode; className?: string; title?: string; icon?: React.ReactNode; unstyledOnMobile?: boolean }> = ({ children, className = '', title, icon, unstyledOnMobile }) => (
    <div className={`differentiator-card bg-gradient-to-br from-[#1a1a2e] to-[#16162a] border border-white/10 rounded-2xl p-6 hover:border-[#FFCC00]/50 [&.interaction-active]:border-[#FFCC00]/50 transition-all duration-500 hover:-translate-y-2 [&.interaction-active]:-translate-y-2 hover:shadow-2xl hover:shadow-[#FFCC00]/10 [&.interaction-active]:shadow-2xl [&.interaction-active]:shadow-[#FFCC00]/10 ${className}`}>
        {title && (
            <h3 className={`font-bold text-white mb-4 flex items-center gap-3 ${unstyledOnMobile ? 'text-2xl justify-center mb-6' : 'text-xl'}`}>
                {icon && <span className="text-[#FFCC00]">{icon}</span>}
                {title}
            </h3>
        )}
        {children}
    </div>
);

// Data
const INTERNATIONAL_UNIVERSITIES = [
    'University of Illinois Urbana-Champaign, USA',
    'Politecnico Di Milano, Europe',
    'Metropolitan University London, USA',
    'Auburn University, Alabama, USA',
    'University of Esslingen, Germany',
    'Heriot-Watt University, UAE',
    'University of Duisburg-Essen, Germany',
    'Riga Technical University, Latvia, Spain',
    'Poli Tecnica Di Milano, Milan, Italy',
    'Hochschule Coburg, Germany',
    'TU Dresden, Germany',
    'Navitas Professional, Sydney, Australia',
    'Freiburg University, Germany',
    'Edinburgh Napier University, Scotland',
    'Hertfordshire University, London',
    'University of Rome, Tor Vergata, Italy',
    'Queens University, Belfast, Ireland',
    'University of LEEDS, London',
    'Indiana University, Bloomington, USA',
    'University of South Florida, USA',
];

const FACULTY_AWARDS = [
    'Distinguished HOD Award',
    'Best Principal Award',
    'Best Director Award',
    'Best Social Scientist Award',
    'Educational Excellence Award',
    'Best Women Faculty Award',
    'Outstanding Engineers Award',
    'Distinguished Researcher Award',
    'Best Senior Faculty Award',
    'Best Young Faculty Award',
    'Best Faculty Award',
    'Tamil Sudar Award',
    'Best Reviewer Award',
    'Best Citizens of India',
    'Award of Excellence in Teaching',
    'Excellent Women Professional Award',
    'Best Young Researcher Award',
    'Best Assistant Professor',
];

const STUDENT_AWARDS = [
    'Book of World Records',
    'Idea Stash Queens 2024 Award',
    'TrendSetter 2024',
    'Best Digital Marketer Award',
    'Best NSS Volunteer Award',
    'Kalam Book of Records Award',
    'Paper Glitz and Fotographz Trophy',
    'Guinness Book of Records',
    'State United Pharma Trophy',
    'GJW Global World Record',
    'Noble World Record',
    'Achievement Iconic Award',
    'Young Achiever Award',
    'Fashion Show Award',
    'Kart Design Challenge Award',
    'Kavimamani Award',
    'Oviya Sigaram Award',
    'Best Folk Artist Award',
];



export const Differentiators: React.FC = () => {
    const slides = [
        // Slide 1: Rankings & Recognition
        {
            id: 'rankings',
            content: (
                <Card className="h-auto md:h-full flex flex-col justify-center" icon={<Medal className="w-8 h-8" />} title="Rankings & Recognition" unstyledOnMobile={true}>
                    <div className="space-y-4 md:space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                                <div className="text-xs md:text-sm text-white uppercase mb-1 md:mb-2">Dr. SNSRCAS</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">1-100</div>
                                <div className="text-xs md:text-sm text-white/80">Band NIRF Ranking 2024</div>
                            </div>
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                                <div className="text-xs md:text-sm text-white uppercase mb-1 md:mb-2">NIRF Innovation</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">11-50</div>
                                <div className="text-xs md:text-sm text-white/80">Band</div>
                            </div>
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                                <div className="text-xs md:text-sm text-white uppercase mb-1 md:mb-2">SNSCT</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">201-300</div>
                                <div className="text-xs md:text-sm text-white/80">NIRF Engineering 2024</div>
                            </div>
                            <div className="bg-gradient-to-br from-[#FFCC00]/20 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#FFCC00]/20">
                                <div className="text-xs md:text-sm text-[#FFCC00] uppercase mb-1 md:mb-2">SNSCE</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">101-150</div>
                                <div className="text-xs md:text-sm text-white/80">NIRF Innovation 2024</div>
                            </div>
                        </div>
                        <div className="bg-white/5 p-4 md:p-6 rounded-2xl">
                            <div className="flex justify-between items-center px-10">
                                <div>
                                    <div className="text-xs md:text-sm text-white/80 uppercase mb-1">CAREERS 360</div>
                                    <div className="text-xl md:text-3xl font-bold">AAAA Grade</div>
                                </div>
                                <div className="h-8 md:h-12 w-px bg-white/10"></div>
                                <div className="text-right">
                                    <div className="text-xs md:text-sm text-white/80 uppercase mb-1">India's Best</div>
                                    <div className="text-xl md:text-3xl font-bold text-[#FFCC00]">AAA+ Grade</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Card>
            )
        },
        // Slide 2: GDTA & NAAC
        {
            id: 'accreditations',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto md:h-full">
                    <Card className="bg-gradient-to-br from-white/10 to-transparent border-white/20 flex flex-col justify-center h-auto md:h-full">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div>
                                <div className="text-xs md:text-sm uppercase tracking-widest text-white mb-2 font-bold">First Application from India</div>
                                <h3 className="text-3xl md:text-5xl font-black text-white mb-2 leading-tight">
                                    Member of <span className="text-white">GDTA</span>
                                </h3>
                                <p className="text-white/70 text-sm md:text-lg">Global Design Thinking Alliance</p>
                            </div>
                            <div className="bg-white p-4 md:p-6 rounded-xl md:rounded-2xl shadow-xl rotate-0 transform hover:rotate-0 transition-all duration-500">
                                <div className="w-20 h-20 md:w-32 md:h-32 flex items-center justify-center bg-white rounded-xl p-2">
                                    <img src="/gdta.png" alt="GDTA Logo" className="w-full h-full object-contain" />
                                </div>
                            </div>
                        </div>
                    </Card>
                    <Card className="bg-gradient-to-br from-[#FFCC00]/20 via-[#FFCC00]/5 to-transparent border-[#FFCC00]/30 flex flex-col justify-center h-auto md:h-full">
                        <div className="flex flex-col items-center text-center gap-6">
                            <div>
                                <div className="text-xs md:text-sm uppercase tracking-widest text-[#FFCC00] mb-2">Arts & Science and Technical Institutions</div>
                                <h3 className="text-3xl md:text-5xl font-black text-white mb-2">NAAC Accredited</h3>
                                <p className="text-white/80 text-sm md:text-lg">Recognized for excellence in education</p>
                            </div>
                            <div className="relative">
                                <div className="absolute inset-0 bg-[#FFCC00] blur-3xl opacity-50"></div>
                                <div className="relative bg-gradient-to-br from-[#FFCC00] to-[#FFCC00] text-black font-black text-6xl md:text-8xl rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-2xl">
                                    A++
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            )
        },
        // Slide 3: Startup Ecosystem
        {
            id: 'startups',
            content: (
                <Card className="h-auto md:h-full flex flex-col justify-center bg-gradient-to-br from-gray-900/10 to-transparent border-white/10" unstyledOnMobile={true}>
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 md:mb-8 flex items-center justify-center gap-4">
                        <Rocket className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        Startup Ecosystem
                    </h3>
                    <div className="grid grid-cols-2 gap-4 md:gap-8 mb-4 md:mb-8">
                        <div className="bg-white/5 p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/10 text-center">
                            <div className="text-3xl md:text-6xl font-black text-white mb-2">
                                <CountUp end={74} suffix="+" />
                            </div>
                            <div className="text-xs md:text-sm text-white uppercase tracking-wider">Startups Launched</div>
                            <div className="text-[10px] md:text-xs text-white/60 mt-2">Till 2024-25</div>
                        </div>
                        <div className="bg-white/5 p-4 md:p-8 rounded-xl md:rounded-2xl border border-white/10 text-center">
                            <div className="text-3xl md:text-6xl font-black text-white mb-2">
                                <CountUp end={100} suffix="+" />
                            </div>
                            <div className="text-xs md:text-sm text-white uppercase tracking-wider">Entrepreneurs Produced</div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
                        <div className="flex flex-col items-center p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5">
                            <div className="text-xl md:text-3xl font-bold text-[#FFCC00] mb-2">₹7.6 Crores</div>
                            <div className="text-xs md:text-sm text-white/80 text-center">R&D Fund Sanctioned</div>
                        </div>
                        <div className="flex flex-col items-center p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5">
                            <div className="text-xl md:text-3xl font-bold text-white mb-2">₹5 Crores</div>
                            <div className="text-xs md:text-sm text-white/80 text-center">"Chips to Startup" Program Funding</div>
                        </div>
                        <div className="flex flex-col items-center p-4 md:p-6 bg-white/5 rounded-xl md:rounded-2xl border border-white/5">
                            <div className="text-xl md:text-3xl font-bold text-white mb-2">₹50 Lakhs</div>
                            <div className="text-xs md:text-sm text-white/80 text-center">SEED Fund for Faculty & Students</div>
                        </div>
                    </div>
                </Card>
            )
        },
        // Slide 4: Innovation & Research
        {
            id: 'innovation',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto md:h-full">
                    <Card className="flex flex-col justify-center h-auto md:h-full" title="Research Grants & Funding Agencies">
                        <div className="space-y-6">
                            <div className="flex flex-col gap-3">
                                <span className="text-xs md:text-sm text-white uppercase font-bold">Research funds from</span>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {['DST', 'AICTE', 'UGC', 'MSME', 'TNSCST'].map((agency) => (
                                        <span key={agency} className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900/20 rounded-lg text-xs md:text-sm border border-white/20 font-semibold">{agency}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <span className="text-xs md:text-sm text-white uppercase font-bold">Conference funds from</span>
                                <div className="flex flex-wrap gap-2 md:gap-3">
                                    {['DRDO', 'CSIR', 'AICTE', 'ISRO', 'UGC'].map((agency) => (
                                        <span key={agency} className="px-3 py-1.5 md:px-4 md:py-2 bg-gray-900/20 rounded-lg text-xs md:text-sm border border-white/20 font-semibold">{agency}</span>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-white/5 p-3 md:p-4 rounded-xl flex items-center justify-between">
                                <div>
                                    <div className="text-[10px] md:text-xs text-white/80 uppercase">Lab Development</div>
                                    <div className="text-base md:text-xl font-bold text-white">MODROBS Fund</div>
                                </div>
                                <div className="text-[10px] md:text-xs text-white/60 bg-white/10 px-2 md:px-3 py-1 rounded-full">from AICTE</div>
                            </div>
                        </div>
                    </Card>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <Card className="flex-1 flex flex-col justify-center bg-gradient-to-br from-white/10 to-transparent border-white/20 h-auto md:h-full">
                            <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-4">
                                <Cpu className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                <span className="text-xs md:text-sm font-bold text-white uppercase tracking-widest">Capstone Project</span>
                            </div>
                            <h3 className="text-xl md:text-3xl font-bold text-white mb-2">GenAI Powered</h3>
                            <p className="text-xs md:text-sm text-white/80">Enabling Design Thinking in Final Year Projects for real-world solutions.</p>
                        </Card>
                        <Card className="flex-1 flex flex-col justify-center bg-gradient-to-br from-[#FFCC00]/20 to-transparent border-[#FFCC00]/30 h-auto md:h-full">
                            <div className="flex justify-between items-start gap-2">
                                <div>
                                    <h3 className="text-xl md:text-3xl font-black text-white mb-1">FUTURA</h3>
                                    <p className="text-[10px] md:text-sm text-[#FFCC00] uppercase tracking-wider mb-2 md:mb-4">Student Start-Up Accelerator</p>
                                </div>
                                <div className="bg-[#FFCC00]/10 p-2 md:p-4 rounded-xl border border-[#FFCC00]/20 text-center">
                                    <div className="text-base md:text-2xl font-bold text-white mb-1">SPINE Z</div>
                                    <div className="text-[10px] md:text-xs text-white/70">Life-skills for final year champs</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            )
        },
        // Slide 5: Global Relations & Campus
        {
            id: 'global',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-full">
                    <Card className="md:col-span-2 flex flex-col justify-center bg-gradient-to-br from-gray-900/10 to-transparent border-white/10 h-auto md:h-full">
                        <h3 className="text-xl md:text-3xl font-bold text-white mb-6 md:mb-8 flex items-center gap-2 md:gap-3">
                            <Globe className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            Global Relations
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                            <div>
                                <div className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2">
                                    <CountUp end={188} suffix="+" />
                                </div>
                                <div className="text-xs md:text-sm text-white/80 uppercase font-bold">Students International<br />Academic Visits</div>
                                <div className="text-[10px] md:text-xs text-white/60 mt-1 md:mt-2">(Singapore, South Korea, Malaysia)</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2">
                                    <CountUp end={40} suffix="+" />
                                </div>
                                <div className="text-xs md:text-sm text-white/80 uppercase font-bold">Faculty International<br />Academic Visits</div>
                                <div className="text-[10px] md:text-xs text-white/60 mt-1 md:mt-2">(USA, UK, Singapore, Dubai, etc.)</div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 bg-white/5 p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                            <div className="text-xs md:text-sm text-white uppercase mb-2 md:mb-3 font-bold">Languages Training</div>
                            <div className="flex flex-wrap gap-2 md:gap-4">
                                <span className="px-2 py-1 md:px-4 md:py-2 bg-black/30 rounded-md md:rounded-lg text-[10px] md:text-sm font-medium">German</span>
                                <span className="px-2 py-1 md:px-4 md:py-2 bg-black/30 rounded-md md:rounded-lg text-[10px] md:text-sm font-medium">French</span>
                                <span className="px-2 py-1 md:px-4 md:py-2 bg-black/30 rounded-md md:rounded-lg text-[10px] md:text-sm font-medium">Japanese</span>
                            </div>
                        </div>
                    </Card>
                    <div className="flex flex-col gap-4 md:gap-6">
                        <Card className="flex-1 h-auto md:h-full" icon={<Leaf className="w-5 h-5 md:w-6 md:h-6" />} title="Green Campus">
                            <div className="space-y-4 mt-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs md:text-base text-white/70">Solar Powered</span>
                                    <span className="font-bold text-[#FFCC00] text-sm md:text-xl">0.5 MW</span>
                                </div>
                                <div className="h-px bg-white/10"></div>
                                <div>
                                    <div className="text-xs md:text-base text-white/70">Organic & Nakshatra Garden</div>
                                    <div className="text-[10px] md:text-xs text-white mt-1">with special medicinal plants</div>
                                </div>
                            </div>
                        </Card>
                        <Card className="flex-1 h-auto md:h-full" title="Summer Fellowships">
                            <div className="flex flex-wrap gap-2">
                                {['IAS', 'ISRO', 'IISC', 'IIT-M', 'IIT-B', 'IIT-P', 'IIT-H', 'IIT-KGP'].map((inst) => (
                                    <span key={inst} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs hover:bg-white/10 transition-colors">{inst}</span>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            )
        },
        // Slide 6: Social & Industry
        {
            id: 'social-industry',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 h-auto md:h-full">
                    <Card className="bg-gradient-to-br from-gray-900/10 to-transparent border-white/10 flex flex-col justify-center h-auto md:h-full">
                        <h3 className="text-2xl font-black text-white mb-6 flex items-center gap-3">
                            <Heart className="w-6 h-6 md:w-8 md:h-8 text-white" />
                            Social Responsibility
                        </h3>
                        <div className="grid grid-cols-2 gap-3 md:gap-6">
                            <div className="bg-white/5 p-3 md:p-4 rounded-xl text-center">
                                <div className="text-xl md:text-3xl font-bold text-white">
                                    <CountUp end={5.7} suffix=" Cr" decimals={1} />
                                </div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase mt-1">Scholarships</div>
                            </div>
                            <div className="bg-white/5 p-3 md:p-4 rounded-xl text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    <CountUp end={500} suffix="+" />
                                </div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase mt-1">COVID-19 Aid</div>
                            </div>
                            <div className="bg-white/5 p-3 md:p-4 rounded-xl text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    <CountUp end={257} suffix="+" />
                                </div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase mt-1">Founder's Scholarship</div>
                            </div>
                            <div className="bg-white/5 p-3 md:p-4 rounded-xl text-center">
                                <div className="text-2xl md:text-3xl font-bold text-white">
                                    <CountUp end={600} suffix="+" />
                                </div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase mt-1">Families Helped</div>
                            </div>
                        </div>
                    </Card>
                    <Card icon={<Building className="w-6 h-6 md:w-8 md:h-8" />} title="Industry & Innovation" className="flex flex-col justify-center h-auto md:h-full">
                        <div className="grid grid-cols-2 gap-3 md:gap-6 mb-4 md:mb-6">
                            <div className="bg-white/5 rounded-xl p-4 md:p-6 text-center">
                                <div className="text-3xl md:text-5xl font-black text-[#FFCC00] mb-1 md:mb-2">
                                    <CountUp end={713} />
                                </div>
                                <div className="text-[10px] md:text-sm text-white/80 uppercase">Industry MoU's</div>
                            </div>
                            <div className="bg-white/5 rounded-xl p-4 md:p-6 text-center">
                                <div className="text-3xl md:text-5xl font-black text-white mb-1 md:mb-2">
                                    <CountUp end={350} suffix="+" />
                                </div>
                                <div className="text-[10px] md:text-sm text-white/80 uppercase">Course Facilitators</div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {['TI-Innovation', 'e-Yantra IIT', 'BoT Lab (USA)', 'AR/VR Lab', 'IoT Lab (Taiwan)', 'Product Design Studio'].map((lab, i) => (
                                <span key={i} className="px-2 py-1 md:px-3 md:py-1.5 bg-white/5 border border-white/10 rounded-full text-[10px] md:text-xs text-white/70">
                                    {lab}
                                </span>
                            ))}
                        </div>
                    </Card>
                </div>
            )
        },
        // Slide 7: Placements & PM
        {
            id: 'placements',
            content: (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 h-auto md:h-full">
                    <Card className="md:col-span-1 bg-gradient-to-br from-white/10 to-transparent border-white/20 flex flex-col justify-center h-auto md:h-full" icon={<TrendingUp className="w-6 h-6 md:w-8 md:h-8" />} title="Placements">
                        <div className="flex flex-col gap-6 md:gap-8 text-center">
                            <div>
                                <div className="text-4xl md:text-6xl font-black text-white">
                                    <CountUp end={45} />
                                </div>
                                <div className="text-xl md:text-2xl font-bold text-white">LPA</div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase mt-1 md:mt-2">Maximum Salary</div>
                            </div>
                            <div>
                                <div className="text-3xl md:text-5xl font-black text-[#FFCC00]">
                                    <CountUp end={3339} suffix="+" />
                                </div>
                                <div className="text-[10px] md:text-xs text-white/80 uppercase mt-1 md:mt-2">Placement Offers</div>
                            </div>
                        </div>
                        <div className="mt-6 md:mt-8 text-center">
                            <div className="inline-block bg-white/10 rounded-full px-3 py-1.5 md:px-4 md:py-2 text-[10px] md:text-sm">
                                <span className="text-white font-bold">20</span> Students <span className="text-[#FFCC00] font-bold">GUINNESS</span> Records
                            </div>
                        </div>
                    </Card>
                    <Card className="md:col-span-2 bg-gradient-to-br from-white/10 to-transparent border-white/20 flex flex-col justify-center h-auto md:h-full">
                        <div className="bg-[#FFCC00]/20 border border-[#FFCC00]/30 rounded-lg p-2 mb-4 md:mb-6 text-center w-fit mx-auto">
                            <h3 className="text-xs md:text-sm font-black text-[#FFCC00] uppercase tracking-widest">Supporting PM Initiatives</h3>
                        </div>
                        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 place-items-center">
                            {[
                                { name: 'Swayam', src: '/support pm/swayam.png' },
                                { name: 'N.S.D.C', src: '/support pm/nsdc.png' },
                                { name: 'Skill India', src: '/support pm/skill india.png' },
                                { name: 'Startup India', src: '/support pm/startupindia.png' },
                                { name: 'Digital India', src: '/support pm/digital india.png' },
                                { name: 'Swachh Bharat', src: '/support pm/swatch bharat.png' },
                                { name: 'Fit India', src: '/support pm/fit india.png' },
                                { name: 'Smart India', src: '/support pm/smart india hackathon.png' }
                            ].map((logo) => (
                                <div key={logo.name} className="flex flex-col items-center gap-1 md:gap-2 group w-full">
                                    <div className="bg-white p-1 md:p-2 rounded-md md:rounded-lg h-10 w-10 md:h-16 md:w-full flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                        <img src={logo.src} alt={logo.name} className="max-w-full max-h-full object-contain" />
                                    </div>
                                    <span className="text-[8px] md:text-[10px] text-white/80 text-center uppercase tracking-tight">{logo.name}</span>
                                </div>
                            ))}
                        </div>
                    </Card>
                </div>
            )
        },

    ];

    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const nextSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
            setIsTransitioning(false);
        }, 800); // Wait for sink animation to finish
    };

    const prevSlide = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setTimeout(() => {
            setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
            setIsTransitioning(false);
        }, 800);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 6000); // 6s interval: 1.2s popup + 4s stay + 0.8s sink
        return () => clearInterval(interval);
    }, [isTransitioning]);

    // Keyboard navigation handler
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            prevSlide();
        }
    }, [isTransitioning]);

    // Add keyboard event listener
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    const slideContent = slides[currentSlide].content;

    // Create a specific set of slides for mobile to handle the split Rankings card
    const mobileSlides = [
        // Split Rankings Card 1: NIRF Rankings
        {
            id: 'rankings-1',
            content: (
                <Card className="h-auto flex flex-col justify-center" icon={<Medal className="w-6 h-6 md:w-8 md:h-8" />} title="Rankings" unstyledOnMobile={false}>
                    <div className="space-y-3 md:space-y-4">
                        <div className="grid grid-cols-1 gap-3 md:gap-4">
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                                <div className="text-[10px] md:text-sm text-white uppercase mb-1 md:mb-2">Dr. SNSRCAS</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">1-100</div>
                                <div className="text-[10px] md:text-sm text-white/80">Band NIRF Ranking 2024</div>
                            </div>
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                                <div className="text-[10px] md:text-sm text-white uppercase mb-1 md:mb-2">NIRF Innovation</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">11-50</div>
                                <div className="text-[10px] md:text-sm text-white/80">Band</div>
                            </div>
                            <div className="bg-gradient-to-br from-white/10 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-white/10">
                                <div className="text-[10px] md:text-sm text-white uppercase mb-1 md:mb-2">SNSCT</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">201-300</div>
                                <div className="text-[10px] md:text-sm text-white/80">NIRF Engineering 2024</div>
                            </div>
                            <div className="bg-gradient-to-br from-[#FFCC00]/20 to-transparent p-4 md:p-6 rounded-xl md:rounded-2xl border border-[#FFCC00]/20">
                                <div className="text-[10px] md:text-sm text-[#FFCC00] uppercase mb-1 md:mb-2">SNSCE</div>
                                <div className="text-2xl md:text-4xl font-black mb-1">101-150</div>
                                <div className="text-[10px] md:text-sm text-white/80">NIRF Innovation 2024</div>
                            </div>
                        </div>
                    </div>
                </Card>
            )
        },
        // Split Rankings Card 2: Grades
        {
            id: 'rankings-2',
            content: (
                <Card className="h-auto flex flex-col justify-center" icon={<Award className="w-6 h-6 md:w-8 md:h-8" />} title="Accreditations" unstyledOnMobile={false}>
                    <div className="bg-white/5 p-3 md:p-4 rounded-xl md:rounded-2xl">
                        <div className="flex flex-col gap-4 md:gap-6 px-2 md:px-4">
                            <div className="text-center">
                                <div className="text-[10px] md:text-sm text-white/80 uppercase mb-1">CAREERS 360</div>
                                <div className="text-2xl md:text-4xl font-bold">AAAA Grade</div>
                            </div>
                            <div className="h-px w-full bg-white/10"></div>
                            <div className="text-center">
                                <div className="text-[10px] md:text-sm text-white/80 uppercase mb-1">India's Best</div>
                                <div className="text-2xl md:text-4xl font-bold text-[#FFCC00]">AAA+ Grade</div>
                            </div>
                        </div>
                    </div>
                </Card>
            )
        },
        // Include the rest of the slides (excluding the original combined 'rankings' slide)
        ...slides.slice(1)
    ];

    return (
        <section className="relative py-24 text-white overflow-hidden min-h-screen flex flex-col">
            {/* Video Background */}
            <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover brightness-10"
                >
                    <source src="/diff bg.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability if video is too bright */}
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <style>{`
        @keyframes marquee-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee-left {
            animation: marquee-left linear infinite;
        }
        .animate-marquee-right {
            animation: marquee-right linear infinite;
        }
        .animate-marquee-left:hover, .animate-marquee-right:hover {
            animation-play-state: paused;
        }
        @keyframes cloud-pulse {
            0%, 100% { transform: scale(1) translate(0, 0); opacity: 0.2; }
            33% { transform: scale(1.2) translate(30px, -20px); opacity: 0.4; }
            66% { transform: scale(0.9) translate(-20px, 40px); opacity: 0.3; }
        }

        .cloud-orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px);
            animation: cloud-pulse 15s infinite ease-in-out;
            pointer-events: none;
        }

        /* Popup & Sink Animations */
        @keyframes slide-popup {
            0% { transform: scale(0.6) translateY(200px); opacity: 0; filter: blur(20px); }
            100% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
        }

        @keyframes slide-sink {
            0% { transform: scale(1) translateY(0); opacity: 1; filter: blur(0); }
            100% { transform: scale(0.6) translateY(200px); opacity: 0; filter: blur(20px); }
        }

        .animate-popup {
            animation: slide-popup 1.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .animate-sink {
            animation: slide-sink 0.8s cubic-bezier(0.36, 0, 0.66, -0.56) forwards;
        }

        .oval-frame {
            border-radius: 24px;
            overflow: hidden;
        }
        @media (min-width: 768px) {
            .oval-frame {
                border-radius: 40px;
            }
        }

        .glow-effect {
            animation: glow-pulse 3s infinite ease-in-out;
        }

        @keyframes glow-pulse {
            0%, 100% { opacity: 0.4; transform: scale(0.98); }
            50% { opacity: 0.7; transform: scale(1.02); }
        }
      `}</style>

            <div className="container mx-auto px-4 flex-1 flex flex-col relative z-20">
                <div className="text-center mb-12">
                    <div className="inline-block relative">
                        <h2 className="relative text-4xl md:text-7xl font-black text-white mb-2 uppercase tracking-tighter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
                            Differentiators
                        </h2>
                        <div className="relative text-2xl md:text-4xl font-bold text-white/90 uppercase tracking-widest drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">of SNS</div>
                    </div>
                </div>

                {/* Mobile View: Neat Legible Slideshow (Responsive, Auto-Fit) */}
                <div className="flex md:hidden relative w-full mb-16 px-4 py-8 items-center justify-center">
                    <div className="relative w-full max-w-[400px]">
                        {/* Slide Content Container */}
                        <div className="relative w-full z-20">
                            <div key={currentSlide} className={`relative w-full p-2 ${isTransitioning ? 'animate-sink' : 'animate-popup'}`}>
                                {/* Animated Glow Background */}
                                <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC00]/30 via-white/10 to-[#FFCC00]/30 blur-[40px] glow-effect rounded-full -z-10"></div>

                                {/* Shaped Container */}
                                <div className="w-full bg-[#16161a] border-4 border-[#1f1f25] relative z-10 shadow-2xl rounded-[32px] overflow-hidden">
                                    {/* Inner Padding container */}
                                    <div className="w-full p-4">
                                        {/* The actual slide content container */}
                                        <div className="w-full bg-[#111115] relative rounded-[20px] border border-white/5 p-4 flex flex-col justify-center overflow-auto no-scrollbar">
                                            {mobileSlides[currentSlide]?.content || slideContent}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Slide Indicators for Mobile */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-30">
                            {mobileSlides.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`transition-all duration-300 ${currentSlide === index
                                        ? 'text-[#FFCC00] scale-125'
                                        : 'text-gray-600 hover:text-gray-400'
                                        }`}
                                >
                                    <Circle className={`w-3 h-3 ${currentSlide === index ? 'fill-current' : ''}`} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Desktop View: Slideshow Container */}
                <div className="relative flex-1 min-h-[700px] mb-16 hidden md:flex items-center justify-center">

                    {/* Cloud Effect Layers */}
                    <div className="absolute inset-0 pointer-events-none opacity-40">
                        <div className="cloud-orb w-[600px] h-[600px] bg-white/10 top-1/4 left-1/4" style={{ animationDelay: '0s' }}></div>
                        <div className="cloud-orb w-[500px] h-[500px] bg-[#FFCC00]/10 top-1/2 right-1/4" style={{ animationDelay: '-5s' }}></div>
                        <div className="cloud-orb w-[700px] h-[700px] bg-white/5 bottom-1/4 left-1/2" style={{ animationDelay: '-10s' }}></div>
                    </div>

                    {/* The Portal (Center Stage) */}
                    <div className="relative w-full h-full max-w-6xl mx-auto z-20">
                        <div key={currentSlide} className={`relative w-full h-full p-4 ${isTransitioning ? 'animate-sink' : 'animate-popup'}`}>

                            {/* Animated Glow Background */}
                            <div className="absolute -inset-8 bg-gradient-to-r from-[#FFCC00]/40 via-white/20 to-[#FFCC00]/40 blur-[100px] glow-effect rounded-full -z-10"></div>

                            {/* Shaped Container */}
                            <div className="oval-frame h-full w-full bg-black/80 backdrop-blur-xl border border-white/20 relative z-10 shadow-2xl">
                                <div className="h-full w-full bg-gradient-to-br from-white/5 to-transparent p-4 md:p-12">
                                    <div className="h-full w-full bg-[#0a0a0f]/90 relative rounded-[20px] md:rounded-[40px] flex items-center justify-center p-4 md:p-0">
                                        {slideContent}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Slide Indicators */}
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`transition-all duration-300 ${currentSlide === index
                                    ? 'text-[#FFCC00] scale-125'
                                    : 'text-gray-600 hover:text-gray-400'
                                    }`}
                            >
                                <Circle className={`w-3 h-3 ${currentSlide === index ? 'fill-current' : ''}`} />
                            </button>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-8 border-t border-black/5">
                    <h3 className="text-2xl font-black text-center mb-6 flex items-center justify-center gap-3">
                        <Globe className="w-6 h-6 text-white" />
                        <span className="text-white uppercase tracking-tight">Alumni @ International Universities</span>
                    </h3>
                    <div className="bg-gradient-to-r from-black/5 via-transparent to-black/5 py-4">
                        <Marquee speed={45}>
                            {INTERNATIONAL_UNIVERSITIES.map((uni, i) => (
                                <span key={i} className="inline-flex items-center gap-2 bg-black/10 px-6 py-3 rounded-xl text-sm font-bold border border-black/10 text-white">
                                    <GraduationCap className="w-4 h-4" />
                                    {uni}
                                </span>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* Scrolling Faculty Awards */}
                <div className="my-12">
                    <h3 className="text-2xl font-black text-center mb-6 flex items-center justify-center gap-3">
                        <Award className="w-6 h-6 text-white" />
                        <span className="text-white uppercase tracking-tight">Awards Received by Faculty Members</span>
                    </h3>
                    <div className="bg-gradient-to-r from-black/5 via-transparent to-black/5 py-4">
                        <Marquee speed={35}>
                            {FACULTY_AWARDS.map((award, i) => (
                                <span key={i} className="inline-flex items-center gap-2 bg-black/10 px-6 py-3 rounded-xl text-sm font-bold border border-black/10 text-white">
                                    <Trophy className="w-4 h-4" />
                                    {award}
                                </span>
                            ))}
                        </Marquee>
                    </div>
                </div>

                {/* Scrolling Student Awards */}
                <div className="mb-12">
                    <h3 className="text-2xl font-black text-center mb-6 flex items-center justify-center gap-3">
                        <Star className="w-6 h-6 text-white" />
                        <span className="text-white uppercase tracking-tight">Awards Received by Students</span>
                    </h3>
                    <div className="bg-gradient-to-r from-black/5 via-transparent to-black/5 py-4">
                        <Marquee speed={35}>
                            {STUDENT_AWARDS.map((award, i) => (
                                <span key={i} className="inline-flex items-center gap-2 bg-black/10 px-6 py-3 rounded-xl text-sm font-bold border border-black/10 text-white">
                                    <Medal className="w-4 h-4" />
                                    {award}
                                </span>
                            ))}
                        </Marquee>
                    </div>
                </div>

            </div>
        </section >
    );
};
