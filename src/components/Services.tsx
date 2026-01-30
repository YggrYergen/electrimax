"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    Zap,
    Factory,
    ShieldCheck,
    Sun,
    Cpu,
    Wrench,
    Activity,
    Server
} from 'lucide-react';
import { SectionWrapper } from './ui/SectionWrapper';
import { cn } from '@/lib/utils';

const services = [
    {
        title: 'Electricidad General',
        description: 'Montaje de tableros eléctricos, empalmes y certificación TE1 para asegurar el cumplimiento normativo en su propiedad.',
        icon: Zap,
        category: 'Infraestructura',
        size: 'large',
        color: 'bg-primary/20 text-accent border-accent/20'
    },
    {
        title: 'Soluciones Industriales',
        description: 'Mantenimiento de motores, bombas y sistemas de automatización industrial para procesos críticos.',
        icon: Factory,
        category: 'Industrial',
        size: 'small',
        color: 'bg-blue-900/40 text-blue-400 border-blue-500/20'
    },
    {
        title: 'Seguridad Electrónica',
        description: 'Instalación de cámaras CCTV, citofonía inteligente y cercos eléctricos de alta seguridad.',
        icon: ShieldCheck,
        category: 'Protección',
        size: 'small',
        color: 'bg-slate-800/60 text-slate-300 border-slate-500/20'
    },
    {
        title: 'Eficiencia Energética',
        description: 'Sistemas de paneles solares fotovoltaicos y auditorías para reducir el consumo y costo energético.',
        icon: Sun,
        category: 'Energía',
        size: 'medium',
        color: 'bg-secondary/10 text-secondary border-secondary/20'
    },
];

const ServiceCard = ({ service, index }: { service: typeof services[0], index: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -10 }}
        className={cn(
            "group relative glass rounded-xl overflow-hidden p-8 flex flex-col justify-between transition-all duration-300",
            service.size === 'large' ? 'md:col-span-2 md:row-span-2' : service.size === 'medium' ? 'md:col-span-2' : '',
            "hover:border-secondary hover:glow-cyan"
        )}
    >
        <div className="relative z-10">
            <div className={cn("w-14 h-14 rounded-lg flex items-center justify-center mb-6 border transition-all duration-300 group-hover:scale-110", service.color)}>
                <service.icon className="w-8 h-8" />
            </div>

            <span className="text-[10px] uppercase tracking-[0.3em] text-slate-500 mb-2 block">{service.category}</span>
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-secondary transition-colors">
                {service.title}
            </h3>
            <p className="text-slate-400 leading-relaxed font-sans group-hover:text-slate-300 transition-colors">
                {service.description}
            </p>
        </div>

        {/* Industrial Accents */}
        <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none group-hover:opacity-20 transition-opacity">
            <service.icon className="w-24 h-24" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-transparent group-hover:bg-gradient-to-r from-transparent via-secondary to-transparent" />
    </motion.div>
);

export const Services = () => {
    return (
        <SectionWrapper id="servicios" className="bg-slate-950">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr">
                <div className="md:col-span-1 flex flex-col justify-center">
                    <h2 className="text-accent text-sm font-bold tracking-[0.4em] mb-4">Especialistas</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Servicios de <br />Alta Potencia</h3>
                    <p className="text-slate-400 mb-8 font-sans max-w-sm">
                        Diseñamos e implementamos ingeniería de primer nivel bajo estrictos estándares de seguridad nacional.
                    </p>
                </div>

                {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>
        </SectionWrapper>
    );
};
