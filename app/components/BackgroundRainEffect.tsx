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
    duration: number;
}

const characters = [
    '{', '}', '<', '>', '/', '*', '!', '?', '#', '&',
    '[]', '()', '=>', ';;', '++', '--', '==', '!=', '&&', '||',
    'const', 'let', 'var', 'if', 'else', 'for', 'return'
];

const BackgroundRainEffect: React.FC = () => {
    const [particles, setParticles] = useState<Particle[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const interval = setInterval(() => {
            // Genera una nueva partícula cada X ms (ajustar densidad)
            if (Math.random() > 0.3) return; // Control density

            const newParticle: Particle = {
                id: Date.now() + Math.random(),
                x: Math.random() * 100, // % ancho
                y: -10, // Arriba
                char: characters[Math.floor(Math.random() * characters.length)],
                rotation: (Math.random() - 0.5) * 60,
                scale: 0.5 + Math.random() * 0.5, // Más pequeñas para fondo
                duration: 3 + Math.random() * 4, // Duración de caída
            };

            setParticles((prev) => [...prev.slice(-50), newParticle]); // Limita max partículas
        }, 100);

        return () => clearInterval(interval);
    }, []);

    // Cleanup: Remove old particles
    useEffect(() => {
        const cleanup = setInterval(() => {
            setParticles(prev => prev.filter(p => Date.now() - Math.floor(p.id) < 8000));
        }, 1000);
        return () => clearInterval(cleanup);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <AnimatePresence>
                {particles.map((particle) => (
                    <motion.span
                        key={particle.id}
                        initial={{ opacity: 0, scale: 0, left: `${particle.x}%`, top: '-5%', rotate: particle.rotation }}
                        animate={{
                            opacity: [0, 0.4, 0], // Sutil: opacity max 0.4
                            scale: particle.scale,
                            top: '110%',
                            rotate: particle.rotation + 180
                        }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: particle.duration, ease: "linear" }}
                        className="absolute text-[#391DF2] font-mono font-bold whitespace-nowrap opacity-30"
                        style={{
                            textShadow: '0 0 5px rgba(57, 29, 242, 0.3)',
                            fontSize: '1rem'
                        }}
                    >
                        {particle.char}
                    </motion.span>
                ))}
            </AnimatePresence>
        </div>
    );
};

export default BackgroundRainEffect;
