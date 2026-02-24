import React, { useState, useEffect, useRef } from 'react';
import { LEADERS } from '../constants';

export const Leaders: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="leaders" className="py-20 relative bg-black overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/lawn.jpg.jpeg"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/80"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Visionary <span className="text-[#FFCC00]">Leadership</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Guided by a legacy of excellence and a vision for the future.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto px-4 md:px-0">
                    {LEADERS.map((leader, index) => (
                        <div
                            key={leader.name}
                            className="leader-card group relative rounded-2xl overflow-hidden bg-zinc-900 transition-all duration-500 hover:-translate-y-2 border border-white/10 hover:border-[#FFCC00]/50 mx-auto max-w-sm md:max-w-none w-full"
                        >
                            {/* Image Container with Overlay */}
                            <div className="aspect-[3/4] md:aspect-[4/5] overflow-hidden relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 group-[.interaction-active]:opacity-40 transition-opacity duration-300 z-10"></div>
                                <img
                                    src={leader.image}
                                    alt={leader.name}
                                    className={`w-full h-full object-cover transition-all duration-[7000ms] ease-out ${isVisible ? 'grayscale-0' : 'grayscale'}`}
                                />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 z-20 bg-gradient-to-t from-black to-transparent pt-12 md:pt-20">
                                <div className="translate-y-2 group-hover:translate-y-0 group-[.interaction-active]:translate-y-0 transition-transform duration-300">
                                    <span className="inline-block px-2 py-0.5 md:px-3 md:py-1 mb-2 text-[10px] md:text-xs font-bold tracking-wider text-black bg-[#FFCC00] rounded-full uppercase">
                                        {leader.role}
                                    </span>
                                    <h3 className="text-xl md:text-2xl font-bold text-white mb-0.5 md:mb-1">{leader.name}</h3>
                                    <p className="text-sm md:text-base text-gray-400">{leader.title}</p>
                                </div>
                            </div>

                            {/* Decorative Border */}
                            <div className="absolute inset-0 border-2 border-[#FFCC00]/0 group-hover:border-[#FFCC00] group-[.interaction-active]:border-[#FFCC00] transition-colors duration-500 rounded-2xl pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
