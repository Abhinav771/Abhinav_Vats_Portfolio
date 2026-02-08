import React, { ReactNode } from 'react';

interface SectionProps {
  id: string;
  title?: string;
  className?: string;
  children: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, className = "", children }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 max-w-6xl mx-auto scroll-mt-24 ${className}`}>
      {title && (
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-slate-100 flex items-center gap-4">
          <span className="w-12 h-1 bg-primary-500 rounded-full"></span>
          {title}
        </h2>
      )}
      {children}
    </section>
  );
};