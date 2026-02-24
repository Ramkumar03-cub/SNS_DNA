import React, { useState, useEffect, useCallback } from 'react';

interface InfrastructureImage {
    id: string;
    title: string;
    description: string;
    imageUrl: string;
}

const INFRASTRUCTURE_IMAGES: InfrastructureImage[] = [
    {
        id: 'main-campus',
        title: 'Main Campus',
        description: 'State-of-the-art main campus building with modern facilities',
        imageUrl: '/Infrastructures/main campus.png',
    },
    {
        id: 'ihub',
        title: 'Innovation Hub',
        description: 'Dedicated center for research, development, and entrepreneurial growth',
        imageUrl: '/lab/innovation-hub.jpg',
    },
    {
        id: 'ai-campus',
        title: 'AI Smart Campus',
        description: 'Intelligent campus environment integrated with advanced AI technologies',
        imageUrl: '/Infrastructures/ai campus.jpg',
    },
    {
        id: 'administrative',
        title: 'Administrative Office',
        description: 'Executive administrative block managing campus operations',
        imageUrl: '/Infrastructures/administrative office.jpg',
    },
    {
        id: 'dt-playhouse',
        title: 'DT Playhouse',
        description: 'Creative space for design thinking activities and collaborative innovation',
        imageUrl: '/Infrastructures/dt playhouse.jpg',
    },
    {
        id: 'library',
        title: 'Central Library',
        description: 'Extensive digital and physical library resources for academic excellence',
        imageUrl: '/Infrastructures/library.jpg',
    },
    {
        id: 'research-lab',
        title: 'Research Labs',
        description: 'Advanced research and innovation laboratories',
        imageUrl: '/Infrastructures/research lab.jpg',
    },
    {
        id: 'sports-complex',
        title: 'Sports Complex',
        description: 'World-class sports facilities and international standard grounds',
        imageUrl: '/Infrastructures/sport complex.jpg',
    },
    {
        id: 'auditorium',
        title: 'Main Auditorium',
        description: 'Modern auditorium for major events and academic conferences',
        imageUrl: '/Infrastructures/auditorium.jpg',
    },
    {
        id: 'seminar-hall',
        title: 'Seminar Halls',
        description: 'Well-equipped seminar and interactive conference rooms',
        imageUrl: '/Infrastructures/seminar hall.jpg',
    },
    {
        id: 'playground',
        title: 'Grounds',
        description: 'Expansive outdoor sports and recreational areas',
        imageUrl: '/Infrastructures/playground.jpg',
    },
    {
        id: 'workshop',
        title: 'Workshop',
        description: 'Hands-on practical training and engineering workshops',
        imageUrl: '/Infrastructures/workshop.jpg',
    },
    {
        id: 'green-campus',
        title: 'Green Campus',
        description: 'Eco-friendly sustainable campus with lush green landscapes',
        imageUrl: '/Infrastructures/green campus.jpg',
    },
];

export const Infrastructure: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);
    const [hoveredThumbnail, setHoveredThumbnail] = useState<string | null>(null);

    const activeItem = INFRASTRUCTURE_IMAGES[activeIndex];

    const goToNext = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % INFRASTRUCTURE_IMAGES.length);
    }, []);

    const goToPrev = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + INFRASTRUCTURE_IMAGES.length) % INFRASTRUCTURE_IMAGES.length);
    }, []);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlay) return;

        const interval = setInterval(() => {
            goToNext();
        }, 4000); // Change image every 4 seconds

        return () => clearInterval(interval);
    }, [isAutoPlay, goToNext]);

    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                {/* Brighter Yellow Glows */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#FFCC00]/30 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-[#FFCC00]/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#FFCC00]/20 rounded-full blur-[100px]"></div>

                {/* Bolder Geometric Shapes */}
                <div className="absolute top-20 left-10 w-24 h-24 border-4 border-[#FFCC00]/40 rounded-full animate-float shadow-[0_0_20px_#FFCC00/30]"></div>
                <div className="absolute top-40 right-20 w-40 h-40 border-4 border-[#FFCC00]/40 rotate-45 animate-float shadow-[0_0_20px_#FFCC00/30]" style={{ animationDelay: '2s' }}></div>
                <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-[#FFCC00]/30 rounded-lg animate-float shadow-[0_0_20px_#FFCC00/30]" style={{ animationDelay: '1.5s' }}></div>
            </div>
            <div className="container mx-auto px-4">
                {/* Section Title */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
                        Our <span className="text-primary">Infrastructure</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        World-class facilities designed to foster learning, innovation, and excellence
                    </p>
                </div>

                {/* Main Gallery */}
                <div className="max-w-6xl mx-auto">
                    {/* Large Featured Image */}
                    <div className="relative mb-6 group">
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl border border-white/10 aspect-video">
                            <img
                                src={activeItem.imageUrl}
                                alt={activeItem.title}
                                className="w-full h-full object-cover transition-all duration-700"
                                key={activeItem.id}
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Navigation Arrows */}
                            <button
                                onClick={goToPrev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-primary/80 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                                </svg>
                            </button>
                            <button
                                onClick={goToNext}
                                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-primary/80 rounded-full flex items-center justify-center text-white transition-all duration-300 opacity-0 group-hover:opacity-100 hover:scale-110"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </button>

                            {/* Title & Description */}
                            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                                    {activeItem.title}
                                </h3>
                                <p className="text-gray-300 text-base md:text-lg max-w-xl">
                                    {activeItem.description}
                                </p>
                            </div>



                            {/* Progress Bar */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
                                <div
                                    className="h-full bg-primary transition-all duration-300"
                                    style={{ width: `${((activeIndex + 1) / INFRASTRUCTURE_IMAGES.length) * 100}%` }}
                                ></div>
                            </div>

                            {/* Decorative Frame Corners */}
                            <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary opacity-70"></div>
                            <div className="absolute bottom-16 left-4 w-12 h-12 border-l-2 border-b-2 border-primary opacity-70"></div>
                            <div className="absolute bottom-16 right-4 w-12 h-12 border-r-2 border-b-2 border-primary opacity-70"></div>
                        </div>


                    </div>

                    {/* Thumbnail Slider */}
                    <div className="relative">
                        <div className="overflow-x-auto pb-4 scrollbar-hide">
                            <div className="flex gap-3 md:gap-4" style={{ width: 'max-content' }}>
                                {INFRASTRUCTURE_IMAGES.map((image, index) => {
                                    const isActive = index === activeIndex;
                                    const isHovered = image.id === hoveredThumbnail;
                                    return (
                                        <button
                                            key={image.id}
                                            onClick={() => setActiveIndex(index)}
                                            onMouseEnter={() => setHoveredThumbnail(image.id)}
                                            onMouseLeave={() => setHoveredThumbnail(null)}
                                            className={`
                                                infrastructure-thumbnail
                                                relative overflow-hidden rounded-xl flex-shrink-0 transition-all duration-300 ${isActive
                                                    ? 'border-4 border-[#FFCC00] shadow-[0_0_15px_#FFCC00] scale-105'
                                                    : 'border-2 border-[#FFCC00]/50 hover:border-[#FFCC00] hover:shadow-[0_0_10px_#FFCC00]'
                                                }`}
                                            style={{ width: '120px', height: '80px' }}
                                        >
                                            <img
                                                src={image.imageUrl}
                                                alt={image.title}
                                                className={`w-full h-full object-cover transition-all duration-300 ${isActive || isHovered ? 'scale-110' : 'scale-100'
                                                    }`}
                                            />
                                            {/* Active/Hover Overlay */}
                                            <div className={`absolute inset-0 transition-all duration-300 ${isActive
                                                ? 'bg-primary/20'
                                                : isHovered
                                                    ? 'bg-white/10'
                                                    : 'bg-black/30'
                                                }`}></div>

                                            {/* Title on hover */}
                                            <div className={`absolute bottom-0 left-0 right-0 p-1 bg-gradient-to-t from-black/90 to-transparent transition-all duration-300 ${isHovered || isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
                                                }`}>
                                                <p className="text-white text-xs font-semibold truncate">{image.title}</p>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Dot Indicators */}
                    <div className="flex justify-center gap-2 mt-6">
                        {INFRASTRUCTURE_IMAGES.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveIndex(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeIndex
                                    ? 'bg-primary w-6'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
