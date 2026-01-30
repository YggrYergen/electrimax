import React from 'react';
import { cn } from '@/lib/utils';

interface SectionWrapperProps {
    children: React.ReactNode;
    id?: string;
    className?: string;
    containerClassName?: string;
}

export const SectionWrapper = ({
    children,
    id,
    className,
    containerClassName,
}: SectionWrapperProps) => {
    return (
        <section
            id={id}
            className={cn('relative py-20 lg:py-32 overflow-hidden', className)}
        >
            <div className={cn('container mx-auto px-6 lg:px-12 relative z-10', containerClassName)}>
                {children}
            </div>
        </section>
    );
};
