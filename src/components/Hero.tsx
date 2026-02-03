"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';
import { Button } from './ui/Button';
import Image from 'next/image';

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

            <div className="container mx-auto px-6 lg:px-12 relative z-10 w-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center"
                >
                    {/* Left Column: Content */}
                    <div className="space-y-8 max-w-2xl">
                        <motion.div variants={itemVariants} className="flex items-center space-x-2 text-accent bg-accent/10 w-fit px-4 py-1.5 rounded-full border border-accent/20">
                            <Zap className="w-4 h-4 fill-accent" />
                            <span className="text-xs font-bold uppercase tracking-widest">Instalador Autorizado SEC</span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Ingeniería <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-secondary">
                                Eléctrica Certificada
                            </span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg md:text-xl text-slate-400 leading-relaxed font-sans"
                        >
                            Soluciones integrales para proyectos industriales, comerciales y domiciliarios.
                            Garantizamos seguridad, normativa y eficiencia energética en cada conexión.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
                            <a href="https://wa.me/56952296601?text=Hola!%20Vi%20su%20web%20y%20me%20gustar%C3%ADa%20cotizar%20un%20proyecto.">
                                <Button size="lg" glow className="w-full sm:w-auto min-w-[200px]">
                                    Cotizar Proyecto
                                    <ChevronRight className="w-5 h-5 ml-2" />
                                </Button>
                            </a>
                            <a href="#servicios">
                                <Button variant="outline" size="lg" glow className="w-full sm:w-auto min-w-[200px]">
                                    Nuestros Servicios
                                </Button>
                            </a>
                        </motion.div>
                    </div>

                    {/* Right Column / Mobile Row: Logos */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-row items-center justify-center lg:justify-end gap-3 md:gap-6 lg:gap-10 w-full"
                    >
                        {/* Logo Card 1: Electrimax */}
                        <div className="group relative glass p-1.5 md:p-3 rounded-[2.5rem] border border-white/10 bg-white/20 flex items-center justify-center aspect-square flex-1 max-w-[150px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] transition-all duration-500 hover:border-accent/40 hover:glow-yellow lg:-translate-y-8">
                            <Image
                                src="/images/logo-electrimax.svg"
                                alt="Electrimax"
                                width={280}
                                height={280}
                                className="object-contain filter drop-shadow-[0_0_15px_rgba(234,179,8,0.3)] w-full h-full p-1 transition-transform duration-500 group-hover:scale-105"
                            />
                        </div>

                        {/* Logo Card 2: SEC */}
                        <div className="group relative p-1.5 md:p-3 rounded-[2.5rem] border border-white/40 bg-white/80 backdrop-blur-xl flex items-center justify-center aspect-square flex-1 max-w-[150px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] transition-all duration-500 hover:border-secondary/60 hover:glow-cyan lg:translate-y-8">
                            <Image
                                src="/images/logo-sec-hero.png"
                                alt="SEC"
                                width={280}
                                height={280}
                                className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110 scale-[1.6]"
                            />
                        </div>
                    </motion.div>
                </motion.div>
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
