import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import TextParticleEffect from './TextParticleEffect';

const Parte1_destok = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#030226] text-white selection:bg-[#AA77F2] selection:text-white flex flex-col justify-between">
            <Navbar />

            {/* Text Container - Stacked Top */}
            <div className="w-full pt-32 md:pt-40 px-4 z-0 flex flex-col items-center justify-start relative"> {/* Increased pt to clear navbar on mobile */}
                <TextParticleEffect>
                    <h1 className="font-champion-gothic font-black leading-none text-center w-full flex flex-col gap-2 md:gap-4 relative cursor-default">
                        <span className="block text-[15vw] md:text-[18vw] tracking-tighter">
                            Desarrollador
                        </span>
                        <span className="block text-[12vw] md:text-[15vw] tracking-tighter text-[#AA77F2]">
                            Full Stack    Junior
                        </span>
                    </h1>
                </TextParticleEffect>
            </div>

            {/* Image Container - Bottom Aligned */}
            <div className="absolute inset-0 flex items-end justify-center pointer-events-none z-10">
                <div className="relative w-full h-[70vh] md:h-[80vh] max-w-[90vw] md:max-w-7xl">
                    <Image
                        src="/images/Kevin_Tovar.png"
                        alt="Kevin Tovar"
                        fill
                        className="object-contain object-bottom drop-shadow-2xl grayscale"
                        priority
                    />


                </div>
            </div>

            {/* Global Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#2703A6] to-transparent z-20 pointer-events-none"></div>
            {/* Overlay Text - Signature Style */}
            <div className="absolute bottom-[5%] w-full flex flex-col items-center justify-center z-30 text-white pb-4">
                <h2 className="font-champion-gothic font-bold text-4xl md:text-6xl tracking-wide uppercase leading-none text-center">
                    Kevin Tovar
                </h2>
                <p className="font-champion-gothic text-lg md:text-2xl tracking-widest text-center uppercase opacity-90">
                    Full Stack Junior
                </p>
            </div>
        </section>
    );
};

export default Parte1_destok;
