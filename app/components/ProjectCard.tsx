'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';

interface ProjectCardProps {
    title: string;
    category: string;
    image: string;
    techs: string[];
    type?: 'laptop' | 'mobile'; // New prop to determine aspect ratio
}

const ProjectCard = ({ title, category, image, techs, type = 'laptop' }: ProjectCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Dynamic classes based on type
    const aspectRatioClass = type === 'mobile' ? 'aspect-[9/16] w-[280px]' : 'aspect-video w-[90%] md:w-[500px]';
    const rotationAnimation = type === 'mobile'
        ? { rotate: [0, 2, -2, 0] } // Subtle rotation for mobile
        : { rotateX: [0, 2, -2, 0] }; // Subtle tilt for laptop

    return (
        <motion.div
            className={`relative ${aspectRatioClass} rounded-2xl cursor-pointer group perspective-1000`}
            animate={{
                y: [0, -10, 0],
                ...rotationAnimation
            }}
            transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05, rotate: 0, rotateX: 0 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Glassmorphism Container */}
            <div className="absolute inset-0 rounded-2xl border border-white/20 bg-gradient-to-br from-white/10 to-transparent backdrop-blur-sm shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] overflow-hidden z-10 transition-all duration-500 group-hover:border-[#AA77F2]/50">

                {/* Image Background */}
                <div className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-40' : 'opacity-90'}`}>
                    {image ? (
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover"
                        />
                    ) : (
                        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                            <span className="font-arvo text-gray-700 text-sm">Project Preview</span>
                        </div>
                    )}
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center transform transition-all duration-500">

                    {/* Default State: Title only (or minimal info) */}
                    <div className={`transition-all duration-500 ${isHovered ? 'opacity-0 translate-y-[-20px]' : 'opacity-100'}`}>
                        {/* Only show title if no image, or make it subtle over image */}
                        {!image && <h3 className="font-anton text-3xl md:text-4xl tracking-tight text-white/50 drop-shadow-lg">{title}</h3>}
                    </div>

                    {/* Hover State: Details */}
                    <div className={`absolute inset-0 flex flex-col items-center justify-center bg-black/80 p-6 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[20px]'}`}>
                        <span className="font-arvo text-[#AA77F2] text-xs tracking-widest mb-2 uppercase">{category}</span>
                        <h3 className="font-anton text-2xl md:text-3xl text-white mb-4">{title}</h3>
                        <div className="flex flex-wrap gap-2 justify-center">
                            {techs.slice(0, 4).map((tech, i) => (
                                <span key={i} className="px-3 py-1 text-[10px] md:text-xs border border-white/30 rounded-full text-gray-200">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Shine Effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-30 pointer-events-none"></div>
            </div>

        </motion.div>
    );
};

export default ProjectCard;
