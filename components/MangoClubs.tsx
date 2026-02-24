import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const MangoClubs: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo('.mango-header',
                { y: -80, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.2,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Club items animation
            gsap.fromTo('.club-item',
                { x: -60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.clubs-list',
                        start: 'top 75%',
                    }
                }
            );

        }, section);

        return () => ctx.revert();
    }, []);

    const clubs = [
        { number: 1, name: 'Microsoft', logo: '/industry patners/microsoft.png' },
        { number: 2, name: 'Meta', logo: '/industry patners/meta.png' },
        { number: 3, name: 'Apple', logo: '/industry patners/apple.webp' },
        { number: 4, name: 'Amazon', logo: '/industry patners/amazon.png' },
        { number: 5, name: 'Adobe', logo: '/industry patners/adobe.png' },
        { number: 6, name: 'Nvidia', logo: '/industry patners/nvidia.png' },
        { number: 7, name: 'Netflix', logo: '/industry patners/netflix.png' },
        { number: 8, name: 'Google', logo: '/industry patners/google.png' },
        { number: 9, name: 'Oracle', logo: '/industry patners/oracle.png' },
        { number: 10, name: 'Deloitte', logo: '/industry patners/deloitte.png' },
        { number: 11, name: 'KPMG', logo: '/industry patners/kpmg.png' },
        { number: 12, name: 'PwC', logo: '/industry patners/pwc.png' },
        { number: 13, name: 'EY', logo: '/industry patners/ernst&young.png' },
        { number: 14, name: 'BCG', logo: '/industry patners/bcg.webp' },
        { number: 15, name: 'Bain & Company', logo: '/industry patners/brain&company.png' },
        { number: 16, name: 'McKinsey', logo: '/industry patners/McKinsey_&_Company-Logo.wine.png' }
    ];

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-[#FFCC00] via-[#FFD700] to-[#FFA500] min-h-screen w-full relative overflow-hidden py-20">

            <div className="relative z-10 max-w-[1600px] mx-auto px-8">

                {/* Main Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-6xl font-black text-black uppercase tracking-tight drop-shadow-sm">
                        16 Industry Clubs & 20+ Skilling Clubs
                    </h2>
                </div>

                {/* Header Section */}
                <div className="mango-header mb-16 flex flex-col lg:flex-row items-center justify-between gap-8 bg-white p-8 rounded-3xl shadow-xl border-4 border-black">
                    {/* Left: SNS Mango BiG7 Image */}
                    <div className="flex-1 w-full max-w-xl">
                        <img
                            src="/sns-mango-big7.png"
                            alt="SNS MANGO BiG7 CLUBS"
                            className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>

                    {/* Right: Notable Clubs Image */}
                    <div className="flex-1 w-full max-w-xl">
                        <img
                            src="/notable-clubs.png"
                            alt="Notable Clubs of SNS"
                            className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-500"
                        />
                    </div>
                </div>



                {/* Bottom Decorative Bar */}
                <div className="mt-12 h-4 bg-gradient-to-r from-[#FFCC00] via-black to-[#FFCC00] rounded-full"></div>
            </div>
        </section>
    );
};
