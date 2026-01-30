"use client";

import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

// Filter out motion props from standard html button props to avoid conflicts
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    glow?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', glow = false, ...props }, ref) => {
        const variants = {
            primary: 'bg-accent text-slate-950 hover:bg-yellow-400 font-bold',
            secondary: 'bg-primary text-white hover:bg-blue-700',
            outline: 'bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-slate-950',
            ghost: 'bg-transparent text-white hover:bg-white/10',
        };

        const sizes = {
            sm: 'px-4 py-2 text-sm',
            md: 'px-6 py-3 text-base',
            lg: 'px-8 py-4 text-lg',
        };

        // Cast the motion component to any if types are still fighting, or use HTMLMotionProps correctly
        // Next 16 + React 19 + Framer Motion sometimes have these conflicts during the transition
        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(
                    'relative inline-flex items-center justify-center font-display uppercase tracking-widest transition-all duration-300 rounded-sm disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer',
                    variants[variant],
                    sizes[size],
                    glow && variant === 'primary' && 'glow-yellow',
                    glow && variant === 'outline' && 'glow-cyan',
                    className
                )}
                {...(props as any)}
            />
        );
    }
);

Button.displayName = 'Button';
