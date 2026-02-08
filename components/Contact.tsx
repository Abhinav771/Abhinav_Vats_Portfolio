import React from 'react';
import { Section } from './Section';
import { RESUME_DATA } from '../constants';
import { Mail, MapPin, Phone, Github, Linkedin } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" title="Get In Touch">
      <div className="grid md:grid-cols-2 gap-12 bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-sm">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">Let's Work Together</h3>
          <p className="text-slate-400 mb-8 leading-relaxed">
            I'm currently looking for new opportunities. Whether you have a question about my stack, 
            want to collaborate on a project, or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 text-primary-400">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Email</p>
                <a href={`mailto:${RESUME_DATA.email}`} className="hover:text-primary-400 transition-colors">{RESUME_DATA.email}</a>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 text-emerald-400">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Phone</p>
                <p>{RESUME_DATA.phone}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-slate-300">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center border border-slate-700 text-purple-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Location</p>
                <p>{RESUME_DATA.location}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a 
              href={RESUME_DATA.socials.github} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-primary-500 transition-all hover:-translate-y-1"
            >
              <Github size={20} />
            </a>
            <a 
              href={RESUME_DATA.socials.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="p-3 bg-slate-800 rounded-lg border border-slate-700 text-slate-400 hover:text-white hover:border-primary-500 transition-all hover:-translate-y-1"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>

        <div className="flex flex-col justify-center">
            <div className="bg-slate-900 p-8 rounded-xl border border-slate-800 text-center shadow-xl">
                <div className="w-16 h-16 bg-primary-500/10 text-primary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail size={32} />
                </div>
                <h4 className="text-white font-bold text-xl mb-2">Interested in my profile?</h4>
                <p className="text-slate-400 text-sm mb-8 max-w-xs mx-auto">
                    Feel free to reach out directly via email. I am available for internships and full-time positions.
                </p>
                <a 
                    href={`mailto:${RESUME_DATA.email}`}
                    className="inline-flex items-center justify-center gap-2 w-full py-4 bg-primary-600 hover:bg-primary-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40"
                >
                    Send Message
                </a>
            </div>
        </div>
      </div>
    </Section>
  );
};