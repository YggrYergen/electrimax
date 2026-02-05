"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { SectionWrapper } from './ui/SectionWrapper';

const projects = [
    {
        title: 'Empalme aéreo media tensión',
        location: 'Sector Rural, V Región',
        image: '/images/1.jpeg',
        category: 'Distribución'
    },
    {
        title: 'Reparación de líneas aéreas',
        location: 'Olmué',
        image: '/images/2.jpeg',
        category: 'Mantenimiento'
    },
    {
        title: 'Montaje de tablero de distribución',
        location: 'Instalación de protecciones, Santiago',
        image: '/images/3.jpeg',
        category: 'Industrial'
    },
    {
        title: 'Motorización de portón batiente',
        location: 'Condominio, Las Condes',
        image: '/images/4.jpeg',
        category: 'Automatización'
    },
    {
        title: 'Canalización embutida en tabiquería',
        location: 'Obra habitacional, Viña del Mar',
        image: '/images/5.jpeg',
        category: 'Construcción'
    },
    {
        title: 'Mantenimiento preventivo fotovoltaico',
        location: 'Limpieza y ajuste de paneles, Colina',
        image: '/images/6.jpeg',
        category: 'Energía'
    },
    {
        title: 'Instalación solar residencial',
        location: 'Sistema On-Grid, Casablanca',
        image: '/images/7.jpeg',
        category: 'Energía'
    },
    {
        title: 'Planta fotovoltaica domiciliaria',
        location: 'Generación limpia, Quilpué',
        image: '/images/8.jpeg',
        category: 'Energía'
    },
    {
        title: 'Instalación de poste de empalme',
        location: 'Faena industrial, Pudahuel',
        image: '/images/9.jpeg',
        category: 'Industrial'
    },
    {
        title: 'Montaje de medidores certificados',
        location: 'Normalización eléctrica SEC, Quilicura',
        image: '/images/10.jpeg',
        category: 'Certificación'
    },
    {
        title: 'Conexión de bomba de pozo',
        location: 'Sistema de riego, Curacaví',
        image: '/images/11.jpeg',
        category: 'Automatización'
    },
    {
        title: 'Canalización en estructura metálica',
        location: 'Instalación Galpón, Lampa',
        image: '/images/12.jpeg',
        category: 'Construcción'
    },
    {
        title: 'Tendido de cableado de potencia',
        location: 'Postación particular, V Región',
        image: '/images/13.jpeg',
        category: 'Distribución'
    },
    {
        title: 'Iluminación LED decorativa en mobiliario',
        location: 'Local comercial, Providencia',
        image: '/images/14.jpeg',
        category: 'Comercial'
    },
    {
        title: 'Instalación de puesta a tierra',
        location: 'Hincado de barra Cooperwell, San Bernardo',
        image: '/images/15.jpeg',
        category: 'Mantenimiento'
    },
    {
        title: 'Instalación eléctrica en sector cocina',
        location: 'Local de comida rápida, Santiago',
        image: '/images/16.jpeg',
        category: 'Comercial'
    },
    {
        title: 'Supervisión de proyecto fotovoltaico',
        location: 'Instalación terminada, Quinta Región',
        image: '/images/17.jpeg',
        category: 'Energía'
    },
    {
        title: 'Matriz de paneles solares sobre cubierta',
        location: 'Alta eficiencia energética, Melipilla',
        image: '/images/18.jpeg',
        category: 'Energía'
    },
    {
        title: 'Conexión aérea en acometida',
        location: 'Poste de madera, Sector Rural',
        image: '/images/19.jpeg',
        category: 'Distribución'
    },
    {
        title: 'Modernización de tablero general',
        location: 'Cambio de componentes y rotulado, Quilicura',
        image: '/images/20.jpeg',
        category: 'Industrial'
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
