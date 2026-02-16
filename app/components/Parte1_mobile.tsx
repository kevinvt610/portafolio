import React from 'react';
import Image from 'next/image';
import Navbar from './Navbar';
import TextParticleEffect from './TextParticleEffect';

import BackgroundRainEffect from './BackgroundRainEffect';

const Parte1_mobile = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-[#030226] text-white selection:bg-[#AA77F2] selection:text-white flex flex-col justify-between">
            <BackgroundRainEffect />
            <Navbar />

            <div className="absolute bottom-[10%] w-full flex flex-col items-end justify-center z-30 text-white pb-4 pr-22">
                <h2 className="font-champion-gothic font-bold text-3xl md:text-5xl tracking-wide uppercase leading-none text-right">
                    <span className="block">Kevin Tovar</span>
                </h2>
            </div>


            {/* Image Container - Bottom Aligned */}
            <div className="absolute inset-0 flex items-end pb-10 md:pb-32 justify-center pointer-events-none z-10">
                <div className="relative w-full h-[70vh] md:h-[80vh] max-w-[90vw] md:max-w-7xl translate-x-12">
                    <Image
                        src="/images/Kevin_Tovar.png"
                        alt="Kevin Tovar"
                        fill
                        className="object-contain object-bottom scale-105  drop-shadow-2xl grayscale"
                        priority
                    />
                </div>
            </div>

            {/* Text Container - Stacked Top */}
            <div className="w-full pt-24 md:pt-32 px-4 z-0 flex flex-col items-start justify-start relative"> {/* Increased pt to clear navbar on mobile */}
                <TextParticleEffect>
                    <h1 className="font-champion-gothic font-black leading-none w-full flex flex-col gap-4 md:gap-6 relative cursor-default">
                        <span className="block text-[19vw] md:text-[22vw] tracking-tighter leading-none text-center">
                            Desarrollador
                        </span>
                        <span className="block text-[21vw] md:text-[24vw] tracking-tighter text-[#AA77F2] text-left">
                            Full
                        </span>
                        <span className="block text-[21vw] md:text-[24vw] tracking-tighter text-[#AA77F2] text-left">
                            Stack
                        </span>
                        <span className="block text-[21vw] md:text-[24vw] tracking-tighter text-[#AA77F2] text-left">
                            Junior
                        </span>
                    </h1>
                </TextParticleEffect>
            </div>

            {/* Global Bottom Gradient */}
            <div className="absolute bottom-0 left-0 w-full h-[50vh] bg-gradient-to-t from-[#2703A6] to-transparent z-20 pointer-events-none"></div>
            {/* Overlay Text - Signature Style */}

            <div className="absolute bottom-20 left-4 z-40">
                <p className="font-champion-gothic text-[10px] sm:text-xs text-white/50 tracking-widest uppercase">
                    (DESPLÁZA PARA SABER MAS)
                </p>
            </div>
        </section>
    );
};

export default Parte1_mobile;
