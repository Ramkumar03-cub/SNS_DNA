import React, { useState, useEffect, useCallback } from 'react';
import { COURSE_CATEGORIES } from '../constants';
import { ArrowUpRight, GraduationCap, ArrowLeft } from 'lucide-react';

export const Courses: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState(COURSE_CATEGORIES[0].id);
    const [showMobileDetails, setShowMobileDetails] = useState(false);

    // Find the currently active category data
    const activeData = COURSE_CATEGORIES.find(c => c.id === activeCategory) || COURSE_CATEGORIES[0];

    // Keyboard navigation handler
    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        const currentIndex = COURSE_CATEGORIES.findIndex(c => c.id === activeCategory);

        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % COURSE_CATEGORIES.length;
            setActiveCategory(COURSE_CATEGORIES[nextIndex].id);
        } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + COURSE_CATEGORIES.length) % COURSE_CATEGORIES.length;
            setActiveCategory(COURSE_CATEGORIES[prevIndex].id);
        }
    }, [activeCategory]);

    // Add keyboard event listener
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [handleKeyDown]);

    return (
        <section id="courses" className="py-12 md:py-24 bg-black relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                {/* Yellow Gradient Glows */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#FFCC00]/5 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#FFCC00]/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

                {/* Light White Gradient Effects */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-transparent via-white/5 to-transparent rotate-45 blur-[100px] animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[150px]"></div>

                {/* Floating Particles */}
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-[#FFCC00]/20 rounded-full animate-float"
                        style={{
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                {/* Section Header */}
                <div className={`mb-10 md:mb-20 grid-cols-1 lg:grid-cols-2 gap-8 items-end ${showMobileDetails ? 'hidden lg:grid' : 'grid'}`}>
                    <div className="bg-zinc-900/50 p-6 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/10 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#FFCC00]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="absolute -right-10 -top-10 w-40 h-40 bg-[#FFCC00]/20 rounded-full blur-[50px] group-hover:bg-[#FFCC00]/30 transition-colors duration-500"></div>

                        <div className="relative z-10">
                            <span className="text-primary font-bold tracking-wider uppercase text-xs md:text-sm mb-2 md:mb-4 block opacity-80">
                                Academic Programmes
                            </span>
                            <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-[0.9]">
                                Curated for <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">
                                    Future Leaders
                                </span>
                            </h2>
                        </div>
                    </div>

                    <div className="lg:pb-8 lg:pl-8">
                        <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                            Discover a world of opportunities with our industry-aligned curriculum, designed to foster innovation and critical thinking.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-24">

                    {/* Left Column: Sticky Navigation */}
                    <div className={`lg:w-1/3 flex-shrink-0 ${showMobileDetails ? 'hidden lg:block' : 'block'}`}>
                        <div className="lg:sticky lg:top-32">
                            <div className="flex flex-wrap lg:flex-col gap-2">
                                {COURSE_CATEGORIES.map((category) => (
                                    <button
                                        key={category.id}
                                        onClick={() => {
                                            setActiveCategory(category.id);
                                            setShowMobileDetails(true);
                                        }}
                                        className={`
                                            course-category-btn
                                            flex items-center justify-between px-4 py-3 md:px-6 md:py-5 rounded-xl md:rounded-2xl text-left whitespace-nowrap transition-all duration-500 group snap-center border
                                            ${activeCategory === category.id
                                                ? 'bg-gradient-to-r from-[#FFCC00] to-[#FDB931] text-white shadow-[0_0_30px_rgba(255,204,0,0.3)] border-[#FFCC00] scale-100 lg:scale-105 z-10 drop-shadow-md'
                                                : 'bg-zinc-900/50 text-gray-400 border-white/5 hover:border-[#FFCC00]/50 hover:text-white'}
                                        `}
                                    >
                                        <span className={`font-bold text-lg md:text-xl ${activeCategory === category.id ? 'tracking-tight' : 'tracking-normal'}`}>{category.title}</span>
                                        {activeCategory === category.id && (
                                            <ArrowUpRight className="w-5 h-5 ml-4 hidden lg:block animate-bounce-subtle" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Dynamic Content */}
                    <div className={`lg:w-2/3 min-h-[400px] md:min-h-[500px] ${!showMobileDetails ? 'hidden lg:block' : 'block'}`}>
                        <div key={activeData.id} className="animate-fade-in-up">

                            <div className="flex items-center md:items-end gap-3 md:gap-4 mb-6 md:mb-10 border-b border-white/10 pb-4 md:pb-6">
                                <button
                                    onClick={() => setShowMobileDetails(false)}
                                    className="lg:hidden p-2 -ml-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
                                >
                                    <ArrowLeft className="w-5 h-5 md:w-6 md:h-6" />
                                </button>
                                <h3 className="text-2xl md:text-4xl font-bold text-white">
                                    {activeData.title}
                                </h3>
                                <span className="text-primary font-mono text-xs md:text-sm mb-0 md:mb-1.5 opacity-80 ml-auto md:ml-0">
                                    {String(activeData.courses.length).padStart(2, '0')} Courses
                                </span>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
                                {activeData.courses.map((course, idx) => (
                                    <div
                                        key={idx}
                                        className="course-card group relative flex items-center gap-4 md:gap-5 p-4 md:p-5 rounded-xl md:rounded-2xl bg-gradient-to-br from-[#FFCC00] to-[#FDB931] border border-[#FFCC00]/50 shadow-lg hover:shadow-[#FFCC00]/20 hover:-translate-y-1 transition-all duration-300 cursor-default overflow-hidden"
                                    >
                                        {/* Hover Glow */}
                                        <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                        <div className="w-10 h-10 rounded-full bg-black/10 border border-black/10 flex items-center justify-center shrink-0 group-hover:bg-black group-hover:text-[#FFCC00] transition-all duration-300">
                                            <GraduationCap className="w-4 h-4 text-black/70 group-hover:text-[#FFCC00] transition-colors drop-shadow-sm" />
                                        </div>

                                        <span className="text-black font-bold group-hover:text-black transition-colors relative z-10 text-base md:text-xl leading-snug drop-shadow-sm">
                                            {course}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
