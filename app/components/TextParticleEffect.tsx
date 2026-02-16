'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Particle {
    id: number;
    x: number;
    y: number;
    char: string;
    rotation: number;
    scale: number;
    velocity: { x: number; y: number };
}

interface TextParticleEffectProps {
    children: React.ReactNode;
}

const characters = [
    '{', '}', '<', '>', '/', '*', '!', '?', '#', '&',
    '[]', '()', '=>', ';;', '++', '--', '==', '!=', '&&', '||',
    'const', 'let', 'var', 'if', 'else', 'for', 'return'
];

const TextParticleEffect: React.FC<TextParticleEffectProps> = ({ children }) => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Limita la creación de partículas para evitar saturación
        if (Math.random() > 0.4) return;

        const newParticle: Particle = {
            id: Date.now() + Math.random(),
            x,
            y,
            char: characters[Math.floor(Math.random() * characters.length)],
            rotation: (Math.random() - 0.5) * 60, // Menos rotación para texto
            scale: 0.8 + Math.random() * 0.5,
            velocity: {
                x: (Math.random() - 0.5) * 3,
                y: -Math.random() * 3 - 1,
            },
        };

        setParticles((prev) => [...prev.slice(-30), newParticle]);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setParticles((prev) =>
                prev.map((p) => ({
                    ...p,
                    x: p.x + p.velocity.x,
                    y: p.y + p.velocity.y,
                    rotation: p.rotation + (Math.random() - 0.5) * 2,
                })).filter((p) => p.y > -50 && p.x > -50 && p.x < (containerRef.current?.offsetWidth || 1000) + 50)
            );
        }, 16);

        return () => clearInterval(interval);
    }, []);

    // Cleanup
    useEffect(() => {
        const cleanup = setInterval(() => {
            setParticles(prev => prev.filter(p => Date.now() - Math.floor(p.id) < 2000));
        }, 500);
        return () => clearInterval(cleanup);
    }, []);


    return (
        <div
            ref={containerRef}
            className="relative inline-block"
            onMouseMove={handleMouseMove}
        >
            {children}
            <AnimatePresence>
                {particles.map((particle) => {
                    return (
                        <motion.span
                            key={particle.id}
                            initial={{ opacity: 0, scale: 0, x: particle.x, y: particle.y, rotate: particle.rotation }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: particle.scale,
                                x: particle.x + particle.velocity.x * 20,
                                y: particle.y + particle.velocity.y * 20,
                                rotate: particle.rotation
                            }}
                            exit={{ opacity: 0, scale: 0 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="absolute pointer-events-none text-[#391DF2] font-mono font-bold whitespace-nowrap"
                            style={{
                                left: 0,
                                top: 0,
                                zIndex: 50,
                                textShadow: '0 0 5px rgba(57, 29, 242, 0.5)', // #391DF2 opacity 0.5
                                fontSize: '1.2rem'
                            }}
                        >
                            {particle.char}
                        </motion.span>
                    );
                })}
            </AnimatePresence>
        </div>
    );
};

export default TextParticleEffect;
