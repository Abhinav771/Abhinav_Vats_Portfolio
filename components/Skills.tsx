import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';
import { Code, Server, Smartphone, Wrench } from 'lucide-react';

const getIcon = (category: string) => {
  switch (category) {
    case 'Languages': return <Code size={24} className="text-blue-400" />;
    case 'Backend': return <Server size={24} className="text-emerald-400" />;
    case 'Mobile': return <Smartphone size={24} className="text-purple-400" />;
    case 'Tools': return <Wrench size={24} className="text-orange-400" />;
    default: return <Code size={24} />;
  }
};

export const Skills: React.FC = () => {
  return (
    <Section id="skills" title="Technical Skills" className="bg-slate-900/50">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILLS.map((skillGroup, idx) => (
          <div 
            key={idx}
            className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-xl hover:border-primary-500/50 transition-colors duration-300"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-slate-900 rounded-lg">
                {getIcon(skillGroup.category)}
              </div>
              <h3 className="font-bold text-lg text-slate-100">{skillGroup.category}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skillGroup.items.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className="px-3 py-1 bg-slate-700/50 text-slate-300 text-sm rounded-md border border-slate-600/50"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};