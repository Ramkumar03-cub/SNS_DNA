import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const DTEngineDiagram: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Advanced reveal animation
            gsap.fromTo(videoRef.current,
                {
                    clipPath: 'inset(100% 0% 0% 0%)',
                    scale: 1.1,
                    opacity: 0,
                    filter: 'brightness(0) blur(10px)'
                },
                {
                    clipPath: 'inset(0% 0% 0% 0%)',
                    scale: 1,
                    opacity: 1,
                    filter: 'brightness(1) blur(0px)',
                    duration: 3, // Slow, high-quality reveal
                    ease: 'power4.inOut',
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: 'top 60%',
                        toggleActions: 'play none none reverse'
                    }
                }
            );

            // Subtle glow animation
            gsap.to('.diagram-glow', {
                opacity: 0.6,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="py-24 bg-[#0a0a0a] relative overflow-hidden flex flex-col items-center">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_center,_rgba(255,204,0,0.1)_0%,_transparent_70%)]"></div>

                {/* Dynamic Particles for atmosphere */}
                {[...Array(30)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-[#FFCC00]/20 rounded-full"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `pulse ${2 + Math.random() * 3}s infinite ease-in-out`
                        }}
                    ></div>
                ))}
            </div>

            <div className="relative z-10 w-full px-4 md:px-8 flex flex-col items-center">
                {/* Section Title */}
                <div className="mb-20 text-center">
                    <div className="inline-block relative">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4 px-12 relative z-10">
                            The <span className="text-[#FFCC00]">SNS Engine</span> (DT)
                        </h2>
                        {/* Decorative background glow for title */}
                        <div className="absolute inset-0 bg-[#FFCC00]/10 blur-3xl rounded-full"></div>
                    </div>
                </div>

                {/* Highly Scaled Diagram Container */}
                <div className="relative w-full max-w-[1700px] lg:w-[94vw] group">
                    {/* Cinematic Glow behind image */}
                    <div className="diagram-glow absolute -inset-10 bg-[#FFCC00]/15 blur-[100px] rounded-[60px] opacity-40 -z-10 transition-opacity duration-1000 group-hover:opacity-60"></div>

                    {/* Main Image Frame - Full Width Focus */}
                    <div className="relative rounded-[40px] overflow-hidden border-[6px] border-white/5 shadow-[0_0_100px_rgba(0,0,0,0.8)] transition-all duration-1000 hover:border-[#FFCC00]/40">
                        <video
                            ref={videoRef}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="w-full h-auto object-contain opacity-0 scale-105"
                        >
                            <source src="/snse.mp4" type="video/mp4" />
                        </video>

                        {/* Interactive scan light overlay */}
                        <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#FFCC00]/10 to-transparent h-1/4 w-full animate-scan opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    </div>

                    {/* Corner Tech Accents */}
                    <div className="absolute -top-4 -left-4 w-20 h-20 border-t-4 border-l-4 border-[#FFCC00]/40 rounded-tl-3xl group-hover:border-[#FFCC00] transition-colors duration-500"></div>
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 border-b-4 border-r-4 border-[#FFCC00]/40 rounded-br-3xl group-hover:border-[#FFCC00] transition-colors duration-500"></div>
                </div>

                {/* Bottom caption */}
                <div className="mt-16 text-center max-w-4xl relative">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FFCC00] to-transparent"></div>
                    <p className="pt-8 text-[#FFCC00] text-xl md:text-2xl font-black leading-relaxed italic uppercase tracking-wider">
                        "Empowering the Future Through Design Thinking Excellence"
                    </p>
                    <p className="mt-2 text-gray-500 text-sm font-bold uppercase tracking-[0.4em]">Integrated Architecture Framework</p>
                </div>
            </div>

            <style>{`
                @keyframes scan {
                    from { transform: translateY(-100%); }
                    to { transform: translateY(400%); }
                }
                @keyframes pulse {
                    0%, 100% { opacity: 0.1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(1.5); }
                }
                .animate-scan {
                    animation: scan 6s linear infinite;
                }
            `}</style>
        </section>
    );
};
