import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const CourseFacilitators: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Animate title
            gsap.fromTo('.cf-title',
                { x: -100, opacity: 0 },
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

            // Animate logo cards
            gsap.fromTo('.logo-card',
                { scale: 0, opacity: 0, rotation: 10 },
                {
                    scale: 1,
                    opacity: 1,
                    rotation: 0,
                    duration: 0.6,
                    stagger: 0.05,
                    ease: 'back.out(1.5)',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Floating animation for logo cards
            gsap.to('.logo-card', {
                y: '+=10',
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                stagger: {
                    each: 0.1,
                    repeat: -1
                }
            });

            // Animate section divider
            gsap.fromTo('.section-divider',
                { scaleX: 0, opacity: 0 },
                {
                    scaleX: 1,
                    opacity: 1,
                    duration: 1,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: '.section-divider',
                        start: 'top 90%',
                    }
                }
            );

        }, section);

        return () => ctx.revert();
    }, []);

    const [activeCategory, setActiveCategory] = React.useState<'industry' | 'university'>('industry');
    const [isAutoPlaying, setIsAutoPlaying] = React.useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                setActiveCategory(prev => prev === 'industry' ? 'university' : 'industry');
            }, 10000);
        }
        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    // Animate content change
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo('.partners-content',
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' }
            );
            gsap.fromTo('.logo-card',
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 0.5, stagger: 0.05, ease: 'back.out(1.5)', delay: 0.2 }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, [activeCategory]);

    const handleCategoryClick = (cat: 'industry' | 'university') => {
        setActiveCategory(cat);
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 15000);
    };

    const industryPartners = [
        { name: 'Microsoft', image: '/industry patners/microsoft.png' },
        { name: 'Meta', image: '/industry patners/meta.png' },
        { name: 'Apple', image: '/industry patners/apple.webp' },
        { name: 'Amazon', image: '/industry patners/amazon.png' },
        { name: 'Adobe', image: '/industry patners/adobe.png' },
        { name: 'Netflix', image: '/industry patners/netflix.png' },
        { name: 'Google', image: '/industry patners/google.png' },
        { name: 'Oracle', image: '/industry patners/oracle.png' },
        { name: 'Deloitte', image: '/industry patners/deloitte.png' },
        { name: 'KPMG', image: '/industry patners/kpmg.png' },
        { name: 'PwC', image: '/industry patners/pwc.png' },
        { name: 'Ernst & Young', image: '/industry patners/ernst&young.png' },
        { name: 'BCG', image: '/industry patners/bcg.webp' },
        { name: 'Bain & Company', image: '/industry patners/brain&company.png' },
        { name: 'McKinsey & Company', image: '/industry patners/mckinsey.png' },
    ];

    const universityPartners = [
        { name: 'Northumbria University', image: '/university partners/1.png' },
        { name: 'University of Dallas', image: '/university partners/UD_2023_Wordmark.png' },
        { name: 'QUT', image: '/university partners/QUT-Local-400x250-1.png' },
        { name: 'Harvard University', image: '/university partners/harvard-university.png' },
        { name: 'IIT Kharagpur', image: '/university partners/IIT_Kharagpur_Logo.svg.png' },
        { name: 'Yeungnam University', image: '/university partners/Yeungnam_University_Emblem.svg.png' },
        { name: 'Symbiosis', image: '/university partners/images.png' },
        // { name: 'University of Sunderland', image: '/university partners/University-of-Sunderland-Logo.png' },
        { name: 'University of Kearney', image: '/university partners/unk-00013a.png' },
        // { name: 'Uniwersytet Warszawski', image: '/university partners/UW-logo.gif' },
        { name: 'University of Manchester', image: '/university partners/images (1).png' },
        { name: 'Universitat Politècnica de València', image: '/university partners/Crest_fullcolour.jpg' },
        { name: 'IIT Kanpur', image: '/university partners/IIT_Kanpur_Logo.svg.png' },
        { name: 'NIT Trichy', image: '/university partners/NITT_logo.png' },
        { name: 'IIT Madras', image: '/university partners/IIT_Madras_Logo.svg.png' },
        { name: 'IIIT Bangalore', image: '/university partners/IIITB_logo_with_Institute_Name_png.png' },
    ];

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-[#FFCC00] via-[#FFCC00] to-[#FFCC00] min-h-screen w-full relative overflow-hidden py-10 lg:py-20">

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            {/* Decorative elements */}
            <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 max-w-[1800px] mx-auto px-8">

                {/* Left side - Title Section */}
                <div className="flex flex-col md:flex-row gap-12 items-start">

                    {/* Title Card */}
                    <div className="cf-title w-full lg:w-[400px] flex-shrink-0">
                        <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-6 lg:p-10 border-4 lg:border-8 border-black relative overflow-hidden">
                            {/* SNS Logo placeholder */}
                            <div className="mb-4 lg:mb-6 inline-block">
                                <img src="/sns logo.PNG" alt="SNS Institutions" className="w-32 lg:w-48 object-contain" />
                            </div>

                            {/* Main Title */}
                            <h1 className="text-4xl lg:text-6xl font-black text-black mb-2 lg:mb-4 leading-none">
                                Course
                            </h1>
                            <h2 className="text-4xl lg:text-6xl font-black text-black mb-4 lg:mb-6 leading-none">
                                Facilitators <span className="text-2xl lg:text-4xl">(CF)</span>
                            </h2>

                            {/* Subtitle */}
                            <div className="bg-[#FFCC00] px-4 lg:px-6 py-2 lg:py-3 -mx-6 lg:-mx-10 mb-4 lg:mb-6">
                                <p className="text-lg lg:text-2xl font-black text-black">
                                    Learn from the Experts
                                </p>
                            </div>

                            {/* Decorative corner */}
                            <div className="absolute top-0 right-0 w-12 h-12 lg:w-20 lg:h-20 bg-[#FFCC00] transform rotate-45 translate-x-6 -translate-y-6 lg:translate-x-10 lg:-translate-y-10"></div>
                        </div>
                    </div>

                    {/* Right side - Dynamic Logo Grid */}
                    <div className="flex-1 partners-content">

                        {/* Dynamic Header */}
                        <div className="mb-6 lg:mb-12">
                            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-2 lg:gap-6 mb-2 lg:mb-4">
                                <button
                                    onClick={() => handleCategoryClick('industry')}
                                    className={`text-xl lg:text-4xl font-black uppercase tracking-tight transition-all duration-500 text-left ${activeCategory === 'industry' ? 'text-black scale-100 origin-left' : 'text-black/40 scale-95 origin-left hover:text-black/60'
                                        }`}
                                >
                                    Industry Partners
                                </button>
                                <div className="h-0.5 lg:h-10 w-full lg:w-2 bg-black rounded-full opacity-20 hidden lg:block"></div>
                                <button
                                    onClick={() => handleCategoryClick('university')}
                                    className={`text-xl lg:text-4xl font-black uppercase tracking-tight transition-all duration-500 text-left ${activeCategory === 'university' ? 'text-black scale-100 origin-left' : 'text-black/40 scale-95 origin-left hover:text-black/60'
                                        }`}
                                >
                                    University Partners
                                </button>
                            </div>

                            {/* Auto-play progress bar */}
                            <div className="h-2 w-full bg-black/10 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-black transition-all duration-[10000ms] ease-linear"
                                    style={{
                                        width: isAutoPlaying ? '100%' : '0%',
                                        opacity: isAutoPlaying ? 1 : 0
                                    }}
                                    key={activeCategory}
                                ></div>
                            </div>
                        </div>

                        {/* Logo Grid Frame */}
                        <div className="bg-white/40 backdrop-blur-md rounded-2xl lg:rounded-[40px] p-4 lg:p-12 border-2 lg:border-4 border-white shadow-2xl relative overflow-hidden mt-4 lg:mt-0">
                            <div className="grid grid-cols-3 md:grid-cols-4 gap-2 lg:gap-4">
                                {(activeCategory === 'industry' ? industryPartners : universityPartners).map((partner: any, index) => (
                                    <div
                                        key={`${activeCategory}-${index}`}
                                        className="logo-card bg-white rounded-xl lg:rounded-2xl p-2 lg:p-6 shadow-md lg:shadow-lg hover:shadow-2xl transition-all cursor-pointer border-2 lg:border-4 border-transparent hover:border-black group h-full"
                                    >
                                        <div className="flex items-center justify-center h-8 lg:h-20 w-full">
                                            <img
                                                src={partner.image}
                                                alt={partner.name}
                                                className="w-full h-full object-contain p-1 lg:p-2 group-hover:scale-110 transition-transform"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Bottom text */}
                        <div className="text-right mt-4 lg:mt-8">
                            <p className="text-base lg:text-2xl font-black text-black italic">& many more...</p>
                        </div>
                    </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-12 h-8 bg-black rounded-full"></div>
            </div>
        </section>
    );
};
