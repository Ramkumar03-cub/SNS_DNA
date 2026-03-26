import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DTEnabledFacilities: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Header animation
            gsap.fromTo('.facilities-header',
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

            // Facility cards animation
            gsap.fromTo('.facility-card',
                { scale: 0.8, opacity: 0, y: 60 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: 'back.out(1.3)',
                    scrollTrigger: {
                        trigger: '.facilities-grid',
                        start: 'top 80%',
                    }
                }
            );

        }, section);

        return () => ctx.revert();
    }, []);

    const facilities = [
        { name: 'Smart Classrooms', icon: '🏫', image: '/dt enabled facitlites/smart classrooms.jpg' },
        { name: 'Cohort Space', icon: '', image: '/dt enabled facitlites/cohort space.jpg' },
        { name: 'Collaboration Zone', icon: '🤝', image: '/dt enabled facitlites/collabration zone.JPG' },
        { name: 'Digital Library', icon: '📚', image: '/dt enabled facitlites/digital lib.JPG' },
        { name: 'Maker Space', icon: '🛠️', image: '/dt enabled facitlites/maker_space.jpg' },
        { name: 'Music Studio', icon: '', image: '/dt enabled facitlites/music_studio.jpg' },
        { name: 'Dance Studio', icon: '', image: '/dt enabled facitlites/dance_studio.jpg' },
        { name: 'Digital Theatre', icon: '🎭', image: '/dt enabled facitlites/digital_theatre.jpg' },
    ];

    return (
        <section ref={sectionRef} className="bg-black min-h-screen w-full relative overflow-hidden py-24">

            {/* Background Video */}
            <div className="absolute inset-0 w-full h-full">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="/spine.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability and theme consistency */}
                <div className="absolute inset-0 bg-black mix-blend-multiply opacity-50"></div>
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Background pattern */}
            <div className="absolute inset-0 opacity-20 pointer-events-none" style={{
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-10">

                {/* Header */}
                <div className="facilities-header text-center mb-20">
                    <div className="inline-block relative">
                        <div className="bg-black px-16 py-10 rounded-2xl shadow-2xl">
                            <h1 className="text-6xl md:text-7xl font-black uppercase tracking-tight text-white mb-4">
                                DT Enabled <span className="text-[#FFCC00]">Facilities</span>
                            </h1>
                            <div className="flex items-center justify-center gap-3">
                                <div className="h-1 w-24 bg-gradient-to-r from-transparent to-[#FFCC00]"></div>
                                <div className="w-3 h-3 rounded-full bg-[#FFCC00]"></div>
                                <div className="h-1 w-24 bg-gradient-to-l from-transparent to-[#FFCC00]"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Facilities Grid */}
                <div className="facilities-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {facilities.map((facility, index) => (
                        <div
                            key={index}
                            className="facility-card group h-full"
                        >
                            <div className="relative h-full">
                                {/* Card glow on hover */}
                                <div className="absolute -inset-2 bg-black/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border-4 border-black h-full flex flex-col">
                                    {/* Image frame */}
                                    <div className="relative h-56 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden flex-shrink-0">
                                        {/* Placeholder */}
                                        <div className="absolute inset-0">
                                            {facility.image ? (
                                                <img
                                                    src={facility.image}
                                                    alt={facility.name}
                                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                                />
                                            ) : (
                                                <div className="absolute inset-0 flex items-center justify-center">
                                                    <div className="text-center transform group-hover:scale-110 transition-transform duration-500">
                                                        <div className="text-6xl mb-3">{facility.icon}</div>
                                                        <div className="inline-block bg-[#FFCC00] px-4 py-2 rounded-full border-2 border-black">
                                                            <p className="text-black font-bold text-xs">Image Coming Soon</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Corner accents */}
                                        <div className="absolute top-3 left-3 w-10 h-10 border-t-4 border-l-4 border-black rounded-tl-xl opacity-30 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute top-3 right-3 w-10 h-10 border-t-4 border-r-4 border-black rounded-tr-xl opacity-30 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute bottom-3 left-3 w-10 h-10 border-b-4 border-l-4 border-black rounded-bl-xl opacity-30 group-hover:opacity-100 transition-opacity"></div>
                                        <div className="absolute bottom-3 right-3 w-10 h-10 border-b-4 border-r-4 border-black rounded-br-xl opacity-30 group-hover:opacity-100 transition-opacity"></div>
                                    </div>

                                    {/* Facility name */}
                                    <div className="bg-black p-5 text-center flex-grow flex items-center justify-center">
                                        <p className="text-lg font-black text-white uppercase tracking-wide">{facility.name}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-16 h-4 bg-black rounded-full"></div>
            </div>
        </section>
    );
};
