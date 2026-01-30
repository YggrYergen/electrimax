"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';
import { Button } from './ui/Button';

export const Hero = () => {
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as any },
        },
    };

    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-950">
            {/* Background Effects */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-slate-950" />
                <div className="absolute inset-0 electric-grid opacity-20" />

                {/* Animated Orbs */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[120px]"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        opacity: [0.05, 0.15, 0.05],
                    }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px]"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="max-w-4xl">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="space-y-8"
                    >
                        <motion.div variants={itemVariants} className="flex items-center space-x-2 text-accent bg-accent/10 w-fit px-4 py-1.5 rounded-full border border-accent/20">
                            <Zap className="w-4 h-4 fill-accent" />
                            <span className="text-xs font-bold uppercase tracking-widest">Instalador Autorizado SEC</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Ingeniería <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary">
                                Eléctrica Certificada
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed font-sans"
                        >
                            Soluciones integrales para proyectos industriales, comerciales y domiciliarios.
                            Garantizamos seguridad, normativa y eficiencia energética en cada conexión.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <Button size="lg" glow className="w-full sm:w-auto min-w-[200px]">
                                Cotizar Proyecto
                                <ChevronRight className="w-5 h-5 ml-2" />
                            </Button>
                            <Button variant="outline" size="lg" glow className="w-full sm:w-auto min-w-[200px]">
                                Nuestros Servicios
                            </Button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
            >
                <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-4">Descubrir</span>
                <div className="w-px h-12 bg-gradient-to-b from-accent to-transparent" />
            </motion.div>
        </section>
    );
};
