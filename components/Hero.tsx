import React from 'react';
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { RESUME_DATA } from '../constants';

export const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden scroll-mt-16">
      {/* Background decoration */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-0 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-primary-400 text-sm font-medium mb-2">
            Available for Internships
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-emerald-400">
              {RESUME_DATA.name}
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-lg leading-relaxed">
            {RESUME_DATA.summary}
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg font-medium transition-all shadow-lg shadow-primary-500/20 cursor-pointer"
            >
              Contact Me
            </a>
            <a 
              href={RESUME_DATA.socials.github}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 rounded-lg font-medium transition-all flex items-center gap-2"
            >
              <Github size={18} />
              GitHub
            </a>
          </div>

          <div className="flex items-center gap-6 pt-8 text-slate-500 text-sm">
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {RESUME_DATA.location}
            </div>
            <div className="flex items-center gap-2">
              <Mail size={16} />
              {RESUME_DATA.email}
            </div>
          </div>
        </div>

        <div className="relative flex justify-center items-center">
          {/* Glow effects for the avatar */}
          <div className="absolute w-64 h-64 bg-primary-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl -translate-y-10 translate-x-10"></div>
          
          {/* 3D Avatar Image */}
          <div className="relative z-10 bg-slate-800/50 rounded-2xl border border-slate-700/50 p-6 shadow-2xl backdrop-blur-sm group">
             {/* Gradient Background inside the frame */}
             <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 to-slate-900/40 rounded-2xl -z-10"></div>
             
             <img 
              src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Technologist.png"
              alt="3D Tech Avatar"
              className="w-64 md:w-80 h-auto object-contain transform group-hover:scale-105 transition-transform duration-500 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};