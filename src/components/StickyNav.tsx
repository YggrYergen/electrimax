"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';
import { LogoPlaceholder } from './ui/LogoPlaceholder';
import { Button } from './ui/Button';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: 'Servicios', href: '#servicios' },
    { name: 'Certificación', href: '#certificacion' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
];

export const StickyNav = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 lg:px-12 py-4',
                isScrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent'
            )}
        >
            <div className="container mx-auto flex items-center justify-between">
                <LogoPlaceholder />

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-display uppercase tracking-widest text-slate-300 hover:text-accent transition-colors relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                    <Button variant="primary" size="sm" glow className="ml-4">
                        <Phone className="w-4 h-4 mr-2" />
                        Llamar Ahora
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <div className="flex md:hidden items-center space-x-4">
                    <Button variant="primary" size="sm" className="px-3">
                        <Phone className="w-4 h-4" />
                    </Button>
                    <button
                        onClick={() => setIsMobileMenuOpen(true)}
                        className="text-white p-2"
                    >
                        <Menu className="w-8 h-8" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 z-[60] bg-slate-950 flex flex-col p-8"
                    >
                        <div className="flex justify-between items-center mb-12">
                            <LogoPlaceholder />
                            <button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-white p-2"
                            >
                                <X className="w-8 h-8" />
                            </button>
                        </div>

                        <nav className="flex flex-col space-y-8">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-3xl font-display uppercase tracking-widest text-white hover:text-accent transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </nav>

                        <div className="mt-auto">
                            <Button variant="primary" size="lg" glow className="w-full">
                                <Phone className="w-6 h-6 mr-3" />
                                Llamar Ahora
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
};
