import React from 'react';
// import { usePresentation } from '../context/PresentationContext';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

export const Hero: React.FC = () => {
    // usePresentation hook removed

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-secondary">
            {/* Background Elements */}
            {/* Background Video */}
            <div className="absolute inset-0 overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                >
                    <source src="/dnabg.mp4" type="video/mp4" />
                </video>
                {/* Overlay to ensure text readability */}
                <div className="absolute inset-0 bg-[#0a0a0f]/80"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface border border-white/10 mb-8 animate-fade-in-up">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-primary">Reimagining Education</span>
                    </div>

                    <div className="flex justify-center mb-6">
                        <img
                            src="/dna.png"
                            alt="Design Thinking DNA"
                            className="h-24 md:h-40 w-auto object-contain animate-fade-in-up"
                        />
                    </div>

                    <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 text-white leading-tight">
                        Design Thinking Based <br />
                        <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-yellow-200">
                            Educational Excellence
                        </span>
                    </h1>

                    <p className="text-base md:text-xl lg:text-2xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
                        Empowering the next generation of leaders through innovation, creativity, and a holistic approach to learning.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                        {/* Watch Video button removed */}
                        <a
                            href="#courses"
                            className="px-6 py-3 md:px-8 md:py-4 bg-primary text-secondary font-bold rounded-lg hover:scale-105 hover:bg-yellow-300 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(250,204,21,0.3)] text-sm md:text-base"
                        >
                            Explore Courses
                            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                        </a>
                        <a
                            href="#about"
                            className="px-6 py-3 md:px-8 md:py-4 bg-surface text-white font-semibold rounded-lg hover:bg-surface/80 border border-white/10 hover:border-primary/50 transition-all duration-300 text-sm md:text-base"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};
