"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Github, Binary, Cpu, Network } from "lucide-react";
import { NeuralBackground } from "@/components/ui/NeuralBackground";
import { TechnicalGrid } from "@/components/ui/TechnicalGrid";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-[#020617]">
      <NeuralBackground />
      <TechnicalGrid />

      {/* Dynamic scan line effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-[100px] w-full animate-scan-slow opacity-20"
           style={{ top: '-100px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-[-5vh]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1 rounded-sm bg-blue-500/5 border border-blue-500/20 text-blue-400 font-mono text-xs uppercase tracking-widest mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Cpu size={14} className="animate-pulse" />
            <span>{portfolioData.role} {/* // System Active */}</span>
          </motion.div>

          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 tracking-tighter">
            <span className="block opacity-80 text-3xl md:text-4xl font-normal font-mono mb-2">INIT ARCHITECTURE:</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-100 via-blue-400 to-indigo-500">
              {portfolioData.name}
            </span>
          </h1>

          <p className="text-xl md:text-3xl text-slate-300 mb-6 font-display font-medium max-w-4xl mx-auto leading-tight italic">
            &quot;{portfolioData.hero.title}&quot;
          </p>

          <div className="h-[1px] w-24 bg-blue-500/30 mx-auto mb-8" />

          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-sans leading-relaxed">
            {portfolioData.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="#projects"
              className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-sm overflow-hidden transition-all hover:bg-blue-500"
            >
              <span className="relative z-10 flex items-center">
                {portfolioData.hero.cta.primary}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-white/5 text-white font-bold rounded-sm border border-white/10 hover:bg-white/10 hover:border-blue-500/50 transition-all font-mono text-sm tracking-tight"
            >
              {portfolioData.hero.cta.secondary}
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-slate-400 hover:text-blue-400 transition-colors font-mono text-sm"
            >
              <Github className="mr-2" size={18} />
              [ ACCESS_GITHUB ]
            </a>
          </div>
        </motion.div>
      </div>

      {/* Ambient data visualizers */}
      <div className="absolute bottom-10 left-10 hidden lg:flex flex-col gap-2 font-mono text-[10px] text-slate-600">
        <div className="flex items-center gap-2"><Network size={12}/> NEURAL_SYNC: OPTIMAL</div>
        <div className="flex items-center gap-2"><Binary size={12}/> DATA_FLOW: ENCRYPTED</div>
      </div>
    </section>
  );
};

export const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
      <motion.div
        className="lg:col-span-5"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-sm blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative dossier-card aspect-[4/5] flex flex-col items-center justify-center border-blue-500/20">
              <div className="w-full h-full bg-slate-950 flex flex-col items-center justify-center p-8">
                <div className="w-32 h-32 rounded-full border border-blue-500/30 p-2 mb-8 relative">
                    <div className="w-full h-full rounded-full bg-blue-500/10 flex items-center justify-center text-3xl font-display font-bold text-blue-400">
                        AN
                    </div>
                    <div className="absolute inset-0 border-2 border-transparent border-t-blue-500 rounded-full animate-spin-slow"></div>
                </div>
                <div className="text-center">
                    <h3 className="text-xl font-display font-bold text-white mb-2 uppercase tracking-widest">{portfolioData.name}</h3>
                    <p className="text-blue-400 font-mono text-xs mb-8 tracking-tight">RESEARCH_IDENTIFIER: 8842-X</p>
                    <div className="space-y-2 text-left w-full border-t border-white/5 pt-6">
                        <div className="flex justify-between text-[10px] font-mono text-slate-500">
                            <span>FOCUS:</span>
                            <span className="text-slate-300">CORTICAL_ARCH</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-500">
                            <span>LOCATION:</span>
                            <span className="text-slate-300">DISTRIBUTED</span>
                        </div>
                        <div className="flex justify-between text-[10px] font-mono text-slate-500">
                            <span>STATUS:</span>
                            <span className="text-green-500">ACTIVE_RESEARCH</span>
                        </div>
                    </div>
                </div>
              </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="lg:col-span-7"
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="font-mono text-[10px] text-blue-500/60 mb-4 uppercase tracking-[0.2em]">[ START_BIO_TRANSMISSION ]</div>
        <div className="prose prose-invert max-w-none">
          {portfolioData.about.bio.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-slate-300 text-lg leading-relaxed mb-8 font-sans last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="font-mono text-[10px] text-blue-500/60 mt-8 uppercase tracking-[0.2em]">[ END_BIO_TRANSMISSION ]</div>
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
      {portfolioData.skills.map((skillGroup, idx) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group p-8 border border-white/5 bg-slate-900/20 hover:bg-slate-900/40 hover:border-blue-500/30 transition-all relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-4 font-mono text-[10px] text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity">
            MODULE_{idx + 1}
          </div>
          <h3 className="text-lg font-display font-bold text-white mb-6 flex items-center gap-3">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1.5 bg-white/5 border border-white/5 text-slate-400 text-xs font-mono hover:text-blue-400 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};
