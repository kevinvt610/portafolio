'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ProjectCard from './ProjectCard';

const projects = [
    {
        id: 1,
        title: "PROXIMA CENTAURY",
        category: "AI AGENT MANAGEMENT",
        description: "Plataforma de gestión de agentes de IA para Vivar AI. Integra asistentes en WhatsApp y cuenta con un motor de agentes en desarrollo utilizando LangChain, React y WebSockets.",
        techs: ["React", "Supabase", "LangChain", "WebSockets"],
        type: "laptop",
        image: "/images/proxima_centaury_1.png"
    },
    {
        id: 2,
        title: "E-commerce Experience",
        category: "Mobile Web App",
        description: "Experiencia de compra móvil fluida con animaciones gestuales y pagos integrados en tiempo real.",
        techs: ["React Native", "Firebase", "Stripe"],
        image: "", // Placeholder
        type: "mobile" // 9:16
    },
    {
        id: 3,
        title: "Analytics Dashboard",
        category: "SaaS Product",
        description: "Panel de control administrativo con visualización de datos complejos y gestión de usuarios en tiempo real.",
        techs: ["React", "TailwindCSS", "Recharts"],
        image: "", // Placeholder
        type: "laptop" // 16:9
    }
];

const Parte4 = () => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const yTitle = useTransform(scrollYProgress, [0, 1], [50, -50]);

    return (
        <section ref={containerRef} className="relative z-30 w-full min-h-screen bg-black text-white py-20 overflow-hidden">

            {/* Section Title */}
            <div className="flex justify-center mb-20">
                <motion.h2
                    style={{ y: yTitle }}
                    className="font-anton text-[12vw] md:text-[8vw] tracking-tighter leading-none text-center opacity-90"
                >
                    PORTAFOLIO
                </motion.h2>
            </div>

            {/* Projects List */}
            <div className="flex flex-col gap-32 px-4 md:px-20 max-w-7xl mx-auto">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-10%" }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 md:gap-20`}
                    >
                        {/* Text Content */}
                        <div className="flex-1 flex flex-col gap-6 text-center md:text-left z-10">
                            <div className="flex flex-col">
                                <span className="font-arvo text-[#AA77F2] tracking-widest text-sm mb-2">{project.category}</span>
                                <h3 className="font-anton text-5xl md:text-6xl uppercase tracking-tight">{project.title}</h3>
                            </div>

                            <p className="font-arvo text-gray-400 text-lg leading-relaxed max-w-md mx-auto md:mx-0">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                                {project.techs.map(tech => (
                                    <span key={tech} className="px-4 py-1 rounded-full border border-gray-700 bg-gray-900/50 text-gray-300 text-sm">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Card Showcase */}
                        <div className="flex-1 w-full flex justify-center items-center">
                            <ProjectCard
                                title={project.title}
                                category={project.category}
                                image={project.image}
                                techs={project.techs}
                                type={project.type as 'laptop' | 'mobile'}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="h-40"></div> {/* Spacer */}
        </section>
    );
};

export default Parte4;
