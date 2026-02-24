import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const OurPartners: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo('.partners-header',
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

            // Partner logos animation
            gsap.fromTo('.partner-logo',
                { scale: 0.8, opacity: 0 },
                {
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.05,
                    ease: 'back.out(1.2)',
                    scrollTrigger: {
                        trigger: '.partners-grid',
                        start: 'top 80%',
                    }
                }
            );

        }, section);

        return () => ctx.revert();
    }, []);

    const partnerLogos = [
        '/our partners/Screenshot 2026-02-05 at 1.38.11 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.38.26 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.38.35 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.38.44 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.38.59 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.39.07 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.39.14 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.39.31 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.39.37 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.39.46 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.39.56 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.40.13 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.40.23 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.40.34 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.40.48 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.40.56 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.41.04 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.41.11 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.41.18 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.42.54 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.43.07 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.43.15 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.43.24 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.43.36 PM.jpg',
        '/our partners/Screenshot 2026-02-05 at 1.43.44 PM.jpg',
        '/our partners/images.jpg',
        '/our partners/unnamed.jpg'
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
                    <div className="partners-header">
                        <div className="bg-[#FFCC00] px-16 py-6">
                            <h1 className="text-5xl md:text-6xl font-black text-black uppercase tracking-tight">
                                Our Partners
                            </h1>
                        </div>
                    </div>
                </div>

                {/* Partners Grid Container */}
                <div className="bg-white border-4 border-black rounded-lg p-8 shadow-xl">

                    {/* Partners Grid */}
                    <div className="partners-grid grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {partnerLogos.map((logo, index) => (
                            <div
                                key={index}
                                className="partner-logo group cursor-pointer"
                            >
                                <div className="bg-white border-2 border-gray-200 hover:border-[#FFCC00] rounded-lg p-4 h-24 flex items-center justify-center transition-all duration-300 hover:shadow-lg overflow-hidden">
                                    <img
                                        src={logo}
                                        alt={`Partner ${index + 1}`}
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
