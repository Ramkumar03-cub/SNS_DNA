import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ProminentRecruiters: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo('.recruiters-header',
                { x: 100, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Recruiters logos animation
            gsap.fromTo('.recruiter-logo',
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: '.recruiters-grid',
                        start: 'top 80%',
                    }
                }
            );

        }, section);

        return () => ctx.revert();
    }, []);

    const recruiterLogos = [
        '/our prominent recuiters/1.jpg',
        '/our prominent recuiters/2.jpg',
        '/our prominent recuiters/3.jpg',
        '/our prominent recuiters/4.jpg',
        '/our prominent recuiters/5.jpg',
        '/our prominent recuiters/6.jpg',
        '/our prominent recuiters/7.jpg',
        '/our prominent recuiters/8.jpg',
        '/our prominent recuiters/9.jpg',
        '/our prominent recuiters/10.jpg',
        '/our prominent recuiters/11.jpg',
        '/our prominent recuiters/12.jpg',
        '/our prominent recuiters/13.jpg',
        '/our prominent recuiters/14.jpg',
        '/our prominent recuiters/15.jpg',
        '/our prominent recuiters/16.jpg',
        '/our prominent recuiters/17.jpg',
        '/our prominent recuiters/18.jpg',
        '/our prominent recuiters/19.jpg',
        '/our prominent recuiters/20.jpg',
        '/our prominent recuiters/21.jpg',
        '/our prominent recuiters/22.jpg',
        '/our prominent recuiters/23.jpg',
        '/our prominent recuiters/24.jpg',
        '/our prominent recuiters/25.jpg',
        '/our prominent recuiters/26.jpg',
        '/our prominent recuiters/27.jpg',
        '/our prominent recuiters/28.jpg'
    ];

    return (
        <section ref={sectionRef} className="bg-white min-h-screen w-full relative overflow-hidden py-16">

            <div className="relative z-10 max-w-[1600px] mx-auto px-8">

                {/* Top section with SNS logo and header */}
                <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-12">

                    {/* SNS Logo */}
                    <div className="flex items-center gap-4">
                        <img src="/SNS-DT Logo.png" alt="SNS Institutions" className="h-16 md:h-20 object-contain" />
                    </div>

                    {/* Header */}
                    <div className="recruiters-header">
                        <div className="bg-[#FFCC00] px-16 py-6">
                            <h1 className="text-4xl md:text-5xl font-black text-black uppercase tracking-tight">
                                Our Prominent Recruiters
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Recruiters Grid Container */}
                <div className="bg-white border-4 border-black rounded-lg p-8 shadow-xl">

                    {/* Recruiters Grid */}
                    <div className="recruiters-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {recruiterLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="recruiter-logo group cursor-pointer"
                            >
                                <div className="bg-white border-2 border-gray-200 hover:border-[#FFCC00] rounded-lg p-4 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                                    <img
                                        src={logo}
                                        alt={`Recruiter ${index + 1}`}
                                        className="w-full h-full object-contain group-hover:scale-105 transition-transform"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Bottom text */}
                    <div className="mt-8 text-right">
                        <p className="text-2xl font-black text-black italic">& many more...</p>
                    </div>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-8 h-4 bg-black rounded-full"></div>
            </div>
        </section>
    );
};
