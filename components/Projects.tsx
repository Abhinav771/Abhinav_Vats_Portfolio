import React from 'react';
import { Section } from './Section';
import { PROJECTS } from '../constants';
import { Github, ExternalLink, Lock, Newspaper, CheckSquare } from 'lucide-react';

const getProjectIcon = (title: string) => {
  if (title.includes("Password")) return <Lock size={20} className="text-emerald-400" />;
  if (title.includes("News")) return <Newspaper size={20} className="text-blue-400" />;
  return <CheckSquare size={20} className="text-orange-400" />;
};

export const Projects: React.FC = () => {
  return (
    <Section id="projects" title="Featured Projects" className="bg-slate-900/30">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.map((project, idx) => (
          <div 
            key={idx} 
            className="group relative bg-slate-800 border border-slate-700 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-primary-500/10 transition-all duration-300 flex flex-col"
          >
            <div className="p-6 flex-1">
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 bg-slate-900 rounded-lg border border-slate-700 group-hover:border-primary-500/50 transition-colors">
                  {getProjectIcon(project.title)}
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {project.title}
              </h3>
              
              <ul className="space-y-2 mb-6">
                {project.description.slice(0, 3).map((desc, i) => (
                  <li key={i} className="text-sm text-slate-400 line-clamp-2">
                    • {desc}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-slate-900/50 border-t border-slate-700 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, tIdx) => (
                  <span 
                    key={tIdx} 
                    className="text-xs font-medium px-2 py-1 rounded bg-slate-800 text-slate-300 border border-slate-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};