import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="absolute top-0 left-0 w-full px-6 py-3 md:py-6 md:px-12 flex justify-between items-center z-50 font-arvo">
            {/* Logo */}
            <div className="relative w-24 h-12 md:w-32 md:h-16">
                <Image
                    src="/logo_kevin_tovar.svg"
                    alt="Logo Kevin Tovar"
                    fill
                    className="object-contain brightness-0 invert" // Make logo white
                />
            </div>

            {/* Navigation Links - Hidden on Mobile, Visible on Desktop */}
            <div className="hidden md:flex items-center justify-center">
                <div className="flex gap-8 items-center text-sm md:text-base font-normal tracking-wide bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full px-8 py-3 shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] hover:bg-white/10 transition-all duration-300">
                    <Link href="#" className="hover:text-[#AA77F2] transition-colors">
                        PORTFOLIO
                    </Link>
                    <Link href="#" className="hover:text-[#AA77F2] transition-colors">
                        MY PROCESS
                    </Link>
                    <Link href="#" className="hover:text-[#AA77F2] transition-colors">
                        ABOUT
                    </Link>
                </div>
            </div>

            {/* CTA Button */}
            <div>
                <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium text-sm md:text-base hover:bg-[#AA77F2] hover:text-white transition-colors">
                    {/* Basic User Icon Placeholder since we might not have the avatar image yet */}
                    <div className="w-6 h-6 bg-black rounded-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-gray-400 animate-pulse"></div>
                    </div>
                    LET'S TALK
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
