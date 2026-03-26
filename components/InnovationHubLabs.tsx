import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const InnovationHubLabs: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const ctx = gsap.context(() => {
            // Sophisticated header animation
            gsap.fromTo('.hub-header',
                { y: -120, opacity: 0, scale: 0.9 },
                {
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    duration: 1.4,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Premium content animations
            gsap.fromTo('.hub-content',
                { x: -200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            gsap.fromTo('.labs-list-container',
                { x: 200, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1.4,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: section,
                        start: 'top center',
                    }
                }
            );

            // Refined lab items animation
            gsap.fromTo('.lab-item',
                { x: 60, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.7,
                    stagger: 0.06,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.labs-list-container',
                        start: 'top 75%',
                    }
                }
            );

            // Premium frame animations
            gsap.fromTo('.lab-frame',
                { scale: 0.85, opacity: 0, y: 40 },
                {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.9,
                    stagger: 0.12,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: '.frames-section',
                        start: 'top 75%',
                    }
                }
            );

            // Elegant floating
            gsap.to('.hub-content', {
                y: '+=12',
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });

            gsap.to('.labs-list-container', {
                y: '+=12',
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 0.5
            });

        }, section);

        return () => ctx.revert();
    }, []);

    const labs = [
        { name: 'Computer Lab', icon: '💧', gradient: 'from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]', image: '/lab/lab.JPG' },
        { name: 'Innovation Lab', icon: '💡', gradient: 'from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]', image: '/lab/innovation-hub.jpg' },
        { name: 'Bio Medicine Lab', icon: '🌐', gradient: 'from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]', image: '/lab/IOT lab.jpg' },
        { name: 'Piston Factory', icon: '⚙️', gradient: 'from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]', image: '/lab/pistol lab .JPG' },
        { name: 'Robotic Lab', icon: '🤖', gradient: 'from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]', image: '/lab/robotic lab.JPG' },
        { name: 'E Vehicle Lab', icon: '⚡', gradient: 'from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]', image: '/lab/e vehicel lab.JPG' },
        { name: 'Pharmacy Lab', icon: '🚁', gradient: 'from-[#FFCC00] via-[#FFCC00] to-[#FFCC00]', image: '/lab/pharmacy_lab.JPG' },
    ];

    return (
        <section ref={sectionRef} className="bg-gradient-to-br from-[#050505] via-[#0a0a0a] to-[#000000] min-h-screen w-full relative overflow-hidden py-32">

            {/* Refined background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-[#FFCC00]/40 via-yellow-50/30 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-gradient-to-tr from-gray-900/30 via-gray-900/20 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-gray-900/20 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10 max-w-[1600px] mx-auto px-10">

                {/* Executive Header */}
                <div className="hub-header mb-24">
                    <div className="text-center">
                        <div className="inline-block relative">
                            {/* Premium glow */}
                            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFCC00] via-[#FFCC00] to-[#FFCC00] rounded-3xl blur-2xl opacity-20"></div>

                            <div className="relative">
                                <div className="bg-gradient-to-br from-gray-900 via-black to-gray-900 px-20 py-10 rounded-2xl shadow-2xl border border-[#FFCC00]/20">
                                    <div className="flex justify-center">
                                        <img src="/Innovation hub logo.png" alt="SNS Innovation Hub" className="h-32 object-contain filter drop-shadow-[0_0_15px_rgba(255,204,0,0.3)]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                {/* Premium Lab Frames Section */}
                <div className="frames-section">
                    <div className="text-center mb-16">
                        <div className="inline-block">
                            <h3 className="text-6xl font-black text-white mb-5">
                                Our Innovation Labs
                            </h3>
                            <div className="h-2 w-64 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent mx-auto rounded-full"></div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10">
                        {labs.map((lab, index) => (
                            <div
                                key={index}
                                className="lab-frame group/frame w-full md:w-[calc(50%-1.25rem)] lg:w-[calc(25%-1.875rem)]"
                            >
                                <div className="relative">
                                    <div className={`absolute -inset-2 bg-gradient-to-r ${lab.gradient} rounded-3xl blur-xl opacity-0 group-hover/frame:opacity-20 transition-opacity duration-700`}></div>

                                    <div className="relative bg-black/40 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 border border-white/10">
                                        {/* Premium Image Frame */}
                                        <div className="relative h-80 bg-gradient-to-br from-white/5 to-transparent overflow-hidden">
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {lab.image ? (
                                                    <img
                                                        src={lab.image}
                                                        alt={lab.name}
                                                        className="w-full h-full object-cover transform group-hover/frame:scale-110 transition-transform duration-700"
                                                    />
                                                ) : (
                                                    <div className="text-center transform group-hover/frame:scale-105 transition-transform duration-700">
                                                        <div className="text-8xl mb-6 filter drop-shadow-2xl">{lab.icon}</div>
                                                        <div className={`inline-block bg-gradient-to-r ${lab.gradient} px-8 py-3 rounded-full shadow-lg`}>
                                                            <p className="text-white font-bold text-sm tracking-wide">Explore Lab</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>

                                            <div className={`absolute inset-0 bg-gradient-to-br ${lab.gradient} opacity-5 group-hover/frame:opacity-10 transition-opacity duration-700`}></div>

                                            {/* Executive Corner Accents */}
                                            <div className="absolute top-5 left-5 w-20 h-20 border-t-[3px] border-l-[3px] rounded-tl-3xl opacity-20 group-hover/frame:opacity-60 transition-opacity duration-700 border-white/30"></div>
                                            <div className="absolute top-5 right-5 w-20 h-20 border-t-[3px] border-r-[3px] rounded-tr-3xl opacity-20 group-hover/frame:opacity-60 transition-opacity duration-700 border-white/30"></div>
                                            <div className="absolute bottom-5 left-5 w-20 h-20 border-b-[3px] border-l-[3px] rounded-bl-3xl opacity-20 group-hover/frame:opacity-60 transition-opacity duration-700 border-white/30"></div>
                                            <div className="absolute bottom-5 right-5 w-20 h-20 border-b-[3px] border-r-[3px] rounded-tr-3xl opacity-20 group-hover/frame:opacity-60 transition-opacity duration-700 border-white/30"></div>
                                        </div>

                                        {/* Premium Lab Name Banner */}
                                        <div className={`relative bg-gradient-to-r ${lab.gradient} p-6 overflow-hidden`}>
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                                            <p className="relative text-base font-black text-white leading-tight text-center tracking-wide">
                                                {lab.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
