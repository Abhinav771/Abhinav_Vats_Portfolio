import React from 'react';
import { Section } from './Section';
import { EXPERIENCES } from '../constants';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <Section id="experience" title="Work Experience">
      <div className="space-y-8">
        {EXPERIENCES.map((exp, idx) => (
          <div key={idx} className="relative pl-8 md:pl-0">
            {/* Timeline line for desktop */}
            <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700 -translate-x-1/2"></div>
            
            <div className={`md:flex items-start justify-between gap-12 ${idx % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-slate-950 translate-y-1.5 md:-translate-x-1/2"></div>

              <div className="md:w-5/12 mb-2 md:mb-0">
                <div className={`flex items-center gap-2 text-primary-400 font-mono text-sm mb-1 ${idx % 2 === 0 ? 'md:justify-start' : 'md:justify-end'}`}>
                  <Calendar size={14} />
                  {exp.duration}
                </div>
              </div>

              <div className="md:w-5/12 bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-xl">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-slate-400">
                      <Briefcase size={14} />
                      <span>{exp.company}</span>
                      <span className="w-1 h-1 bg-slate-500 rounded-full"></span>
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300 text-sm">
                      <span className="mt-1.5 w-1.5 h-1.5 bg-primary-500 rounded-full shrink-0"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};