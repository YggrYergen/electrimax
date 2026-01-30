"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';

const projects = [
    {
        title: 'Montaje Tablero Industrial',
        location: 'Quilicura',
        image: 'https://images.unsplash.com/photo-1590486803833-ffc6f88d2dfd?q=80&w=800&auto=format&fit=crop',
        category: 'Industrial'
    },
    {
        title: 'Instalación Solar Residencial',
        location: 'Las Condes',
        image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?q=80&w=800&auto=format&fit=crop',
        category: 'Energía'
    },
    {
        title: 'Automatización Bodegas',
        location: 'Pudahuel',
        image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop',
        category: 'Automatización'
    },
    {
        title: 'Electrificación Edificio',
        location: 'Viña del Mar',
        image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?q=80&w=800&auto=format&fit=crop',
        category: 'Construcción'
    }
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    return (
        <div className="flex-shrink-0 w-[300px] md:w-[450px] relative group overflow-hidden rounded-xl border border-white/5">
            <div className="aspect-[4/5] md:aspect-video relative overflow-hidden">
                {/* Placeholder for project image with overlay */}
                <div
                    className="absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${project.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
            </div>

            <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                <span className="text-secondary text-[10px] uppercase font-bold tracking-[0.3em] mb-2">{project.category}</span>
                <h4 className="text-2xl font-bold text-white mb-1 uppercase tracking-tight">{project.title}</h4>
                <p className="text-slate-400 text-sm font-sans flex items-center">
                    <span className="w-4 h-px bg-accent mr-3" />
                    {project.location}
                </p>
            </div>

            {/* Industrial Accent */}
            <div className="absolute top-0 right-0 w-12 h-12 bg-accent/10 backdrop-blur-md border-b border-l border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            </div>
        </div>
    );
};

export const Projects = () => {
    return (
        <SectionWrapper id="proyectos" className="bg-slate-950 overflow-visible">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                <div>
                    <h2 className="text-accent text-sm font-bold tracking-[0.4em] mb-4">Portafolio</h2>
                    <h3 className="text-4xl md:text-5xl font-bold text-white uppercase">Proyectos Destacados</h3>
                </div>
                <p className="text-slate-400 max-w-sm font-sans md:text-right">
                    Casos de éxito que demuestran nuestra capacidad técnica y compromiso con la excelencia.
                </p>
            </div>

            <div className="relative -mx-6 lg:-mx-12 px-6 lg:px-12 overflow-x-auto scrollbar-hide snap-x snap-mandatory flex gap-6 pb-12 cursor-grab active:cursor-grabbing">
                {projects.map((project, idx) => (
                    <div key={idx} className="snap-center">
                        <ProjectCard project={project} />
                    </div>
                ))}
            </div>

            {/* Visual Navigation Hint */}
            <div className="flex justify-center md:justify-start gap-4 mt-4">
                <div className="h-0.5 w-12 bg-accent" />
                <div className="h-0.5 w-12 bg-slate-800" />
                <div className="h-0.5 w-12 bg-slate-800" />
            </div>
        </SectionWrapper>
    );
};
