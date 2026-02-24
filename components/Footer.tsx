import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';

// Custom X (Twitter) Logo Component
const XIcon = ({ className = "" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className={className}
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.005 4.15H5.059z" />
    </svg>
);

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary pt-10 lg:pt-20 pb-6 lg:pb-10 border-t border-white/10 text-muted">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-10 lg:mb-16 text-sm lg:text-base">

                    {/* Brand */}
                    <div className="col-span-2 lg:col-span-1">
                        <div className="flex items-center gap-2 mb-4 lg:mb-6 text-white">
                            <img
                                src="/sns logo.PNG"
                                alt="SNS Logo"
                                className="h-12 lg:h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="mb-4 lg:mb-6 leading-relaxed">
                            Pioneering Design Thinking in education to create the leaders of tomorrow. Excellence is not just a goal, it's our DNA.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Facebook, href: "https://www.facebook.com/snsinstitutions/" },
                                { Icon: XIcon, href: "https://x.com/snsinstitutions" },
                                { Icon: Instagram, href: "https://www.instagram.com/snsinstitutions/?hl=en" },
                                { Icon: Linkedin, href: "https://in.linkedin.com/company/sns-institutions" },
                                { Icon: Youtube, href: "https://www.youtube.com/snsinstitutions" }
                            ].map(({ Icon, href }, i) => (
                                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-primary hover:text-secondary transition-all duration-300">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold text-base lg:text-lg mb-4 lg:mb-6">Quick Links</h4>
                        <ul className="space-y-3 lg:space-y-4">
                            {['Home', 'About Us', 'Courses', 'Our Infrastructure'].map((item) => {
                                const href = item === 'About Us' ? '#about' : `#${item.toLowerCase().replace(/ /g, '-')}`;
                                return (
                                    <li key={item}>
                                        <a href={href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></span>
                                            {item}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>

                    {/* Our Institutions */}
                    <div>
                        <h4 className="text-white font-bold text-base lg:text-lg mb-4 lg:mb-6">Our Institutions</h4>
                        <p className="mb-4 text-sm lg:text-base leading-relaxed">
                            Discover our diverse ecosystem of 9 premier institutions fostering excellence across various disciplines.
                        </p>
                        <a href="#institutions" className="inline-flex items-center gap-2 text-[#FFCC00] hover:text-white font-bold transition-colors group">
                            View All Institutions
                            <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </div>

                    {/* Contact */}
                    <div className="col-span-2 lg:col-span-1 mt-4 lg:mt-0">
                        <h4 className="text-white font-bold text-base lg:text-lg mb-4 lg:mb-6">Contact Us</h4>
                        <ul className="space-y-4 lg:space-y-6">
                            <li className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 lg:w-6 lg:h-6 text-primary flex-shrink-0 mt-0.5 lg:mt-1" />
                                <span>SNS Kalvi Nagar, Sathy Main Road NH-209 , Vazhiyampalayam, Saravanampatti,Coimbatore, Tamil Nadu 641035.</span>
                            </li>
                            <li className="flex items-start gap-4">
                                <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-1" />
                                <div className="flex flex-col gap-1">
                                    <span>95664 23456</span>
                                    <span><span className="text-gray-400">Admissions:</span> 90036 55855</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-primary flex-shrink-0 mt-1" />
                                <div className="flex flex-col gap-1 break-all">
                                    <span>director.iipc.sns@gmail.com</span>
                                    <span><span className="text-gray-400">Careers:</span> job@snsgroups.com</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 lg:pt-8 mt-6 lg:mt-8 text-center text-xs lg:text-sm text-gray-400">
                    <p>
                        Copyrighted &copy; 2026 Design and upload by <br className="hidden md:block" />
                        <span className="font-bold text-white mt-1 block md:inline md:mt-0">SNSGROUPS</span>
                    </p>
                </div>
            </div>
        </footer>
    );
};
