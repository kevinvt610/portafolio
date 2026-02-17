'use client';

import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { useRef, useState } from 'react';
import Image from 'next/image';

const Parte3 = () => {
    // --- FRONTEND LOGIC ---
    const frontendRef = useRef<HTMLElement>(null);
    const [hasGrownFrontend, setHasGrownFrontend] = useState(false);

    const { scrollYProgress: scrollFrontend } = useScroll({
        target: frontendRef,
        offset: ["start end", "end start"]
    });

    const scaleFrontend = useTransform(scrollFrontend, [0, 0.5, 1], [0.2, 1.0, 1.0]);
    const opacityFrontend = useTransform(scrollFrontend, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useMotionValueEvent(scrollFrontend, "change", (latest) => {
        if (latest > 0.5 && !hasGrownFrontend) {
            setHasGrownFrontend(true);
        }
    });

    const frontendTechs = [
        { id: 1, name: 'React', img: '/images/React.svg.png', color: '#61DAFB' },
        { id: 2, name: 'Next.js', img: '/images/nextjs-13.svg', color: '#ffffff' },
        { id: 3, name: 'TypeScript', img: '/images/Typescript_logo_2020.svg.png', color: '#3178C6' }
    ];

    // --- BACKEND LOGIC ---
    const backendRef = useRef<HTMLElement>(null);
    const [hasGrownBackend, setHasGrownBackend] = useState(false);

    const { scrollYProgress: scrollBackend } = useScroll({
        target: backendRef,
        offset: ["start end", "end start"]
    });

    const scaleBackend = useTransform(scrollBackend, [0, 0.5, 1], [0.2, 1.0, 1.0]);
    const opacityBackend = useTransform(scrollBackend, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useMotionValueEvent(scrollBackend, "change", (latest) => {
        if (latest > 0.5 && !hasGrownBackend) {
            setHasGrownBackend(true);
        }
    });

    const backendTechs = [
        { id: 1, name: 'Python', img: '/images/Python-logo-notext.svg.png', color: '#3776AB' },
        { id: 2, name: 'Node.js', img: '/images/Node.js_logo.svg.png', color: '#339933' },
        { id: 3, name: 'Supabase', img: '/images/supabase-logo-icon.svg', color: '#3ECF8E' },
        { id: 4, name: 'n8n', img: '/images/n8n-color.png', color: '#FF6D5A' },
        { id: 5, name: 'PostgreSQL', img: '/images/postgresql_plain_wordmark_logo_icon_146390.png', color: '#336791' }
    ];

    // --- DEPLOYMENT LOGIC ---
    const deploymentRef = useRef<HTMLElement>(null);
    const [hasGrownDeployment, setHasGrownDeployment] = useState(false);

    const { scrollYProgress: scrollDeployment } = useScroll({
        target: deploymentRef,
        offset: ["start end", "end start"]
    });

    const scaleDeployment = useTransform(scrollDeployment, [0, 0.5, 1], [0.2, 1.0, 1.0]);
    const opacityDeployment = useTransform(scrollDeployment, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

    useMotionValueEvent(scrollDeployment, "change", (latest) => {
        if (latest > 0.5 && !hasGrownDeployment) {
            setHasGrownDeployment(true);
        }
    });

    const deploymentTechs = [
        { id: 1, name: 'Vercel', img: '/images/Vercel_favicon.svg', color: '#FFFFFF' },
        { id: 2, name: 'Docker', img: '/images/docker_mark-logo_brandlogos.net_yetav.png', color: '#2496ED' },
        { id: 3, name: 'Nginx', img: '/images/nginx_logo_icon_168081.png', color: '#009639' },
        { id: 4, name: 'Git', img: '/images/git logo.png', color: '#F05032' }
    ];

    return (
        <div className="relative z-30 w-full bg-black">
            {/* FRONTEND SECTION */}
            <section ref={frontendRef} className="relative z-20 w-full h-auto bg-black flex flex-col items-center justify-start pt-20 text-white overflow-hidden">
                <div className="sticky top-20 z-10 mb-40">
                    <motion.h2
                        style={{ scale: hasGrownFrontend ? 1 : scaleFrontend, opacity: opacityFrontend }}
                        className="font-champion-gothic font-black tracking-widest text-[15vw] md:text-[6vw] text-center leading-none"
                    >
                        FRONTEND
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4 pb-10 z-20 relative">
                    {frontendTechs.map((tech, i) => (
                        <motion.div
                            key={tech.id}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 50, borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', boxShadow: '0 0 0px transparent' },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    boxShadow: '0 0 0px transparent',
                                    transition: { duration: 0.5, delay: i * 0.3 }
                                },
                                hover: {
                                    scale: 1.05,
                                    borderColor: tech.color,
                                    boxShadow: `0 0 20px ${tech.color}40`,
                                    backgroundColor: tech.name === 'Next.js' ? 'rgba(255,255,255,0.05)' : `${tech.color}10`,
                                    transition: { duration: 0.2 }
                                }
                            }}
                            className="flex-shrink-0 w-[80vw] md:w-[300px] aspect-square rounded-2xl border border-transparent flex flex-col items-center justify-center gap-4 cursor-pointer backdrop-blur-sm"
                        >
                            <div className="relative w-1/2 h-1/2">
                                <Image
                                    src={tech.img}
                                    alt={tech.name}
                                    fill
                                    className={`object-contain drop-shadow-lg ${tech.name === 'Next.js' ? 'dark:invert invert' : ''}`}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    priority={i < 3}
                                />
                            </div>
                            <span className="font-arvo text-xl opacity-70 tracking-wider">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* BACKEND SECTION */}
            <section ref={backendRef} className="relative z-20 w-full h-auto bg-black flex flex-col items-center justify-start pt-10 text-white overflow-hidden">
                <div className="sticky top-20 z-10 mb-40">
                    <motion.h2
                        style={{ scale: hasGrownBackend ? 1 : scaleBackend, opacity: opacityBackend }}
                        className="font-champion-gothic font-black tracking-widest text-[15vw] md:text-[6vw] text-center leading-none"
                    >
                        BACKEND
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4 pb-20 z-20 relative">
                    {backendTechs.map((tech, i) => (
                        <motion.div
                            key={tech.id}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 50, borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', boxShadow: '0 0 0px transparent' },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    boxShadow: '0 0 0px transparent',
                                    transition: { duration: 0.5, delay: i * 0.3 }
                                },
                                hover: {
                                    scale: 1.05,
                                    borderColor: tech.color,
                                    boxShadow: `0 0 20px ${tech.color}40`,
                                    backgroundColor: `${tech.color}10`,
                                    transition: { duration: 0.2 }
                                }
                            }}
                            className="flex-shrink-0 w-[80vw] md:w-[300px] aspect-square rounded-2xl border border-transparent flex flex-col items-center justify-center gap-4 cursor-pointer backdrop-blur-sm"
                        >
                            <div className="relative w-1/2 h-1/2">
                                <Image
                                    src={tech.img}
                                    alt={tech.name}
                                    fill
                                    className="object-contain drop-shadow-lg"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <span className="font-arvo text-xl opacity-70 tracking-wider">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* DEPLOYMENT SECTION */}
            <section ref={deploymentRef} className="relative z-20 w-full h-auto bg-black flex flex-col items-center justify-start pt-10 text-white overflow-hidden">
                <div className="sticky top-20 z-10 mb-40">
                    <motion.h2
                        style={{ scale: hasGrownDeployment ? 1 : scaleDeployment, opacity: opacityDeployment }}
                        className="font-champion-gothic font-black tracking-widest text-[15vw] md:text-[6vw] text-center leading-none"
                    >
                        DESPLIEGUE
                    </motion.h2>
                </div>

                <div className="flex flex-wrap justify-center gap-8 w-full max-w-6xl px-4 pb-20 z-20 relative">
                    {deploymentTechs.map((tech, i) => (
                        <motion.div
                            key={tech.id}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true, margin: "-50px" }}
                            variants={{
                                hidden: { opacity: 0, y: 50, borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.05)', boxShadow: '0 0 0px transparent' },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    borderColor: 'rgba(255,255,255,0.1)',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    boxShadow: '0 0 0px transparent',
                                    transition: { duration: 0.5, delay: i * 0.3 }
                                },
                                hover: {
                                    scale: 1.05,
                                    borderColor: tech.color,
                                    boxShadow: `0 0 20px ${tech.color}40`,
                                    backgroundColor: `${tech.color}10`,
                                    transition: { duration: 0.2 }
                                }
                            }}
                            className="flex-shrink-0 w-[80vw] md:w-[300px] aspect-square rounded-2xl border border-transparent flex flex-col items-center justify-center gap-4 cursor-pointer backdrop-blur-sm"
                        >
                            <div className="relative w-1/2 h-1/2">
                                <Image
                                    src={tech.img}
                                    alt={tech.name}
                                    fill
                                    className="object-contain drop-shadow-lg"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <span className="font-arvo text-xl opacity-70 tracking-wider">{tech.name}</span>
                        </motion.div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Parte3;
