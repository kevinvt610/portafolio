'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Parte2 = () => {
    // Skills Logic
    const skillsRef = useRef<HTMLElement>(null);
    const { scrollYProgress: scrollSkills } = useScroll({
        target: skillsRef,
        offset: ["start end", "end start"]
    });

    // Parallax for Skills title
    const ySkills = useTransform(scrollSkills, [0, 1], [100, -100]);

    return (
        <>
            <section className="relative z-10 w-full min-h-screen bg-[#F5F5F0] dark:bg-black flex flex-col items-center justify-center px-4 py-20 text-black dark:text-white overflow-hidden transition-colors duration-500">

                {/* Minimalist Header */}
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="font-arvo text-sm md:text-base tracking-[0.2em] mb-12 text-gray-500 dark:text-gray-400 uppercase"
                >
                    ¿Quién Soy?
                </motion.span>

                {/* Main Headline */}
                <div className="max-w-6xl w-full flex flex-col items-center text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-anton text-[8vw] md:text-[5vw] leading-[1.0] tracking-tighter uppercase"
                    >
                        DESARROLLADOR <span className="inline-block relative">
                            FULL STACK
                            <motion.svg
                                initial={{ pathLength: 0 }}
                                whileInView={{ pathLength: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="absolute -bottom-2 md:-bottom-4 left-0 w-full h-3 md:h-6 text-orange-500 -z-10"
                                viewBox="0 0 200 9"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M2.00025 7.00001C30.5003 3.00001 100.001 0.500008 198.001 3.50001" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                            </motion.svg>
                        </span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-anton text-[8vw] md:text-[5vw] leading-[1.0] tracking-tighter uppercase mt-2 md:mt-4"
                    >
                        CON MENTALIDAD DE <br className="hidden md:block" />
                        <span className="font-caveat text-orange-500 dark:text-orange-400 capitalize tracking-normal mx-2 md:mx-4 transform -rotate-2 inline-block">Producto</span>
                    </motion.h2>

                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="font-anton text-[8vw] md:text-[5vw] leading-[1.0] tracking-tighter uppercase mt-2 md:mt-4"
                    >
                        Y CO-FUNDADOR DE <span className="font-caveat text-indigo-500 dark:text-indigo-400 capitalize tracking-normal transform rotate-2 inline-block">Vivar AI</span>.
                    </motion.h2>
                </div>

                {/* Subtext Paragraph */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="font-arvo text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl text-center mt-12 leading-relaxed px-4"
                >
                    Empecé a programar a los 13 años. Hoy, creo plataformas web rápidas y seguras con <span className="text-black dark:text-white font-bold">Next.js + Supabase</span> y automatizo flujos de trabajo con <span className="text-black dark:text-white font-bold">n8n + IA</span>.
                </motion.p>

                {/* Arrow / Hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="absolute bottom-10 right-10 hidden md:block"
                >
                    <span className="font-caveat text-xl text-gray-500 rotate-[-10deg] block mb-2">My Skills &rarr;</span>
                </motion.div>

            </section>

            {/* SKILLS SECTION (Previously Parte3) */}
            <section ref={skillsRef} className="relative z-10 w-full min-h-[25vh] md:min-h-[50vh] py-10 bg-[#000000] flex items-center justify-center overflow-hidden">
                <motion.h2
                    style={{ y: ySkills }}
                    initial={{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)', opacity: 0 }}
                    whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', opacity: 1 }}
                    viewport={{ once: true, margin: "-10%" }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }} // Smooth ease-out
                    className="font-anton font-black text-[15vw] sm:text-[12vw] text-white tracking-tighter leading-none select-none z-20"
                >
                    SKILLS
                </motion.h2>
            </section>
        </>
    );
};

export default Parte2;
