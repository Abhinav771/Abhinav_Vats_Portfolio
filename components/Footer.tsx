import React from 'react';
import { RESUME_DATA } from '../constants';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">{RESUME_DATA.name}</h2>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Abhinav Vats. All rights reserved.
          </p>
        </div>

        <div className="flex gap-6">
          <a href={RESUME_DATA.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
            <Github size={24} />
          </a>
          <a href={RESUME_DATA.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors">
            <Linkedin size={24} />
          </a>
          <a href={`mailto:${RESUME_DATA.email}`} className="text-slate-400 hover:text-primary-400 transition-colors">
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};