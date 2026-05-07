"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink, Mail, Send, FileText, ChevronRight, Terminal } from "lucide-react";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {portfolioData.projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: idx * 0.1 }}
          className="group dossier-card h-full flex flex-col"
        >
          <div className="flex justify-between items-start mb-6">
            <div className="flex flex-col">
              <span className="font-mono text-[10px] text-blue-500 uppercase tracking-widest mb-1">
                PROJECT_TYPE: {project.category}
              </span>
              <span className="font-mono text-[10px] text-slate-600">
                REF_ID: 00{idx + 1}-SR
              </span>
            </div>
            <div className="flex gap-3">
              <a href={project.github} className="p-2 bg-white/5 rounded-sm text-slate-400 hover:text-white hover:bg-blue-500/20 transition-all">
                <Github size={18} />
              </a>
              {project.demo && (
                <a href={project.demo} className="p-2 bg-white/5 rounded-sm text-slate-400 hover:text-white hover:bg-blue-500/20 transition-all">
                  <ExternalLink size={18} />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-display font-bold text-white mb-4 group-hover:text-blue-400 transition-colors flex items-center gap-2">
            <FileText size={20} className="text-blue-500/50" />
            {project.title}
          </h3>

          <p className="text-slate-400 mb-8 flex-1 leading-relaxed font-sans text-sm">
            {project.description}
          </p>

          <div className="border-t border-white/5 pt-6 mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((t) => (
                <span key={t} className="text-[10px] font-mono font-medium text-slate-500 bg-slate-900/50 px-2 py-1 rounded-sm border border-white/5">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex items-center justify-between">
                <span className="font-mono text-[9px] text-slate-700">STATUS: VERIFIED</span>
                <span className="flex items-center gap-1 text-blue-500 font-mono text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                    VIEW_DATA <ChevronRight size={12} />
                </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export const Research = () => {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative p-8 border-l-2 border-blue-500/30 bg-blue-500/5"
      >
        <Terminal size={24} className="text-blue-500 mb-4" />
        <p className="text-xl text-slate-300 max-w-4xl font-display leading-relaxed">
          {portfolioData.research.description}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.research.interests.map((interest, idx) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 border border-white/5 bg-slate-900/10 hover:border-blue-500/20 transition-all group"
          >
            <div className="font-mono text-[10px] text-blue-500/40 mb-4">RE_STREAM_{idx + 1}</div>
            <h3 className="text-xl font-display font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{interest.title}</h3>
            <p className="text-slate-400 leading-relaxed text-base font-sans">{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="space-y-12 relative before:absolute before:left-[18px] before:top-2 before:bottom-2 before:w-[1px] before:bg-blue-500/20">
      {portfolioData.experience.map((exp, idx) => (
        <motion.div
          key={`${exp.company}-${idx}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative pl-14"
        >
          <div className="absolute left-0 top-1 w-9 h-9 rounded-sm border border-blue-500/30 bg-slate-950 flex items-center justify-center z-10">
            <span className="font-mono text-[10px] text-blue-400">0{idx + 1}</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
            <h3 className="text-2xl font-display font-bold text-white">{exp.role}</h3>
            <span className="font-mono text-xs text-blue-500 bg-blue-500/5 px-3 py-1 rounded-sm border border-blue-500/20 tracking-tighter">
                {exp.period}
            </span>
          </div>
          <div className="flex items-center gap-2 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
              <p className="text-lg text-slate-300 font-display font-medium tracking-tight uppercase">{exp.company}</p>
          </div>
          <p className="text-slate-400 max-w-4xl leading-relaxed text-base font-sans">
            {exp.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-mono text-[10px] text-blue-500/60 mb-4 uppercase tracking-[0.2em]">[ ESTABLISH_COMMUNICATION ]</div>
        <h3 className="text-3xl font-display font-bold text-white mb-8">Ready for Collaboration</h3>
        <p className="text-slate-400 text-lg mb-10 leading-relaxed max-w-md">
          I am actively seeking research collaborations, technical discussions, and opportunities at the frontier of AI and neuroscience.
        </p>
        <div className="space-y-6">
          <a href={`mailto:${portfolioData.email}`} className="flex items-center p-6 bg-white/5 border border-white/5 rounded-sm hover:border-blue-500/40 hover:bg-blue-500/5 transition-all group">
            <div className="w-12 h-12 rounded-sm bg-blue-500/10 flex items-center justify-center mr-6 group-hover:bg-blue-500/20 transition-all">
                <Mail size={22} className="text-blue-400" />
            </div>
            <div className="flex flex-col">
                <span className="font-mono text-[10px] text-slate-500 mb-1">EMAIL_SECURE</span>
                <span className="text-slate-200 font-mono text-sm tracking-tight">{portfolioData.email}</span>
            </div>
          </a>
        </div>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-8 p-10 bg-slate-900/20 border border-white/5 rounded-sm"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="space-y-3">
            <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Identification</label>
            <input
              type="text"
              className="w-full bg-slate-950/50 border border-white/10 rounded-sm px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="NAME_OR_ORG"
            />
          </div>
          <div className="space-y-3">
            <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Return Address</label>
            <input
              type="email"
              className="w-full bg-slate-950/50 border border-white/10 rounded-sm px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="EMAIL@ENDPOINT"
            />
          </div>
        </div>
        <div className="space-y-3">
          <label className="font-mono text-[10px] text-slate-500 uppercase tracking-widest">Transmission Data</label>
          <textarea
            rows={5}
            className="w-full bg-slate-950/50 border border-white/10 rounded-sm px-4 py-4 text-white font-mono text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="Type your message here..."
          />
        </div>
        <button
          className="w-full bg-blue-600 text-white font-bold py-5 rounded-sm hover:bg-blue-500 transition-all flex items-center justify-center group font-mono text-sm tracking-widest"
        >
          SEND_PACKET
          <Send className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={16} />
        </button>
      </motion.form>
    </div>
  );
};
