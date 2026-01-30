"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { FileCheck, ShieldCheck, Award } from 'lucide-react';
import { SectionWrapper } from './ui/SectionWrapper';

export const TrustSection = () => {
    return (
        <SectionWrapper className="bg-slate-900 border-y border-white/5 py-12 lg:py-16">
            {/* Circuit Pattern Background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
                <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <pattern id="circuit" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 0 10 L 10 10 L 10 0" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
                        <circle cx="10" cy="10" r="1" fill="currentColor" className="text-secondary" />
                        <path d="M 10 10 L 10 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-secondary" />
                    </pattern>
                    <rect width="100" height="100" fill="url(#circuit)" />
                </svg>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        className="w-24 h-24 md:w-32 md:h-32 rounded-full glass border-2 border-accent/30 flex items-center justify-center p-4 relative group"
                    >
                        <div className="absolute inset-0 rounded-full bg-accent/10 blur-xl group-hover:bg-accent/20 transition-all" />
                        <Award className="w-12 h-12 md:w-16 md:h-16 text-accent" />
                    </motion.div>

                    <div className="space-y-2">
                        <motion.h3
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tighter"
                        >
                            Certificación <span className="text-accent">SEC</span>
                        </motion.h3>
                        <motion.p
                            initial={{ x: -20, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-slate-400 font-sans tracking-wide"
                        >
                            Instalador Autorizado por la Superintendencia de Electricidad y Combustibles.
                        </motion.p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
                    {[
                        { icon: FileCheck, text: "Cumplimiento Normativo" },
                        { icon: ShieldCheck, text: "Seguridad Garantizada" }
                    ].map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ y: 20, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + idx * 0.1 }}
                            className="flex items-center space-x-4 bg-slate-950/50 p-6 rounded-lg border border-white/5 backdrop-blur-sm"
                        >
                            <item.icon className="w-6 h-6 text-secondary" />
                            <span className="text-sm font-bold uppercase tracking-widest text-slate-200">{item.text}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </SectionWrapper>
    );
};
