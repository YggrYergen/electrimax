"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Facebook, Linkedin } from 'lucide-react';
import { LogoPlaceholder } from './ui/LogoPlaceholder';

export const Footer = () => {
    return (
        <footer id="contacto" className="bg-slate-950 border-t border-white/5 pt-20 pb-10 overflow-hidden relative">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand Col */}
                    <div className="space-y-6">
                        <LogoPlaceholder />
                        <p className="text-slate-400 font-sans leading-relaxed">
                            Líderes en ingeniería eléctrica con certificación SEC.
                            Comprometidos con la seguridad y la eficiencia energética en Chile.
                        </p>
                        <div className="flex space-x-4">
                            {[Instagram, Facebook, Linkedin].map((Icon, idx) => (
                                <a key={idx} href="#" className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent hover:glow-yellow transition-all">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-l-2 border-accent pl-4">Enlaces Rápidos</h4>
                        <ul className="space-y-4 font-sans">
                            {['Servicios', 'Certificación', 'Proyectos', 'Cotizar'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-slate-400 hover:text-accent transition-colors flex items-center group">
                                        <span className="w-0 h-px bg-accent mr-0 group-hover:w-4 group-hover:mr-2 transition-all" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-white font-bold uppercase tracking-widest mb-6 border-l-2 border-accent pl-4">Contacto</h4>
                        <ul className="space-y-6 font-sans">
                            <li className="flex items-start space-x-4">
                                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                                <span className="text-slate-400">Región Metropolitana y V Región, Chile</span>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Phone className="w-5 h-5 text-accent shrink-0" />
                                <a href="tel:+56912345678" className="text-2xl font-display font-bold text-white hover:text-accent transition-colors tracking-tight">+56 9 1234 5678</a>
                            </li>
                            <li className="flex items-center space-x-4">
                                <Mail className="w-5 h-5 text-secondary shrink-0" />
                                <a href="mailto:contacto@electrimax.cl" className="text-slate-400 hover:text-accent transition-colors">contacto@electrimax.cl</a>
                            </li>
                        </ul>
                    </div>

                    {/* Coverage Area */}
                    <div className="glass p-6 rounded-xl border-accent/20">
                        <h4 className="text-accent font-bold uppercase tracking-[0.2em] text-xs mb-4">Área de Cobertura</h4>
                        <p className="text-slate-300 text-sm font-sans mb-4">
                            Operamos con equipos móviles en toda la zona central de Chile.
                        </p>
                        <div className="flex flex-wrap gap-2">
                            {['Santiago', 'Viña del Mar', 'Valparaíso', 'Quilicura', 'Lampa'].map((city) => (
                                <span key={city} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase tracking-widest text-slate-400">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-slate-500 uppercase tracking-widest">
                    <p>© {new Date().getFullYear()} Electrimax - Todos los derechos reservados.</p>
                    <p>Desarrollado con <span className="text-accent">Ingeniería</span> de alta precisión</p>
                </div>
            </div>
        </footer>
    );
};
