import React from 'react';
import { Section } from './Section';
import { ACHIEVEMENTS } from '../constants';
import { Trophy, Award } from 'lucide-react';

export const Achievements: React.FC = () => {
  return (
    <Section id="achievements" title="Achievements">
      <div className="grid md:grid-cols-2 gap-6">
        {ACHIEVEMENTS.map((achievement, idx) => (
          <div 
            key={idx}
            className="flex items-start gap-4 p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl border border-slate-700 hover:border-primary-500/50 transition-colors"
          >
            <div className="p-3 bg-amber-500/10 text-amber-500 rounded-lg shrink-0">
              {idx === 0 ? <Trophy size={24} /> : <Award size={24} />}
            </div>
            <div>
              <h3 className="font-bold text-lg text-white mb-1">{achievement.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{achievement.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};