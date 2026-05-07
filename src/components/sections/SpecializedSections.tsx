"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { Github, ExternalLink, Mail, Send } from "lucide-react";

export const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.projects.map((project, idx) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="group relative flex flex-col h-full bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 transition-all"
        >
          <div className="p-8 flex-1 flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                {project.category}
              </span>
              <div className="flex gap-4">
                <a href={project.github} className="text-gray-400 hover:text-white transition-colors">
                  <Github size={20} />
                </a>
                {project.demo && (
                  <a href={project.demo} className="text-gray-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                  </a>
                )}
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 flex-1 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((t) => (
                <span key={t} className="text-xs font-medium text-gray-500 bg-white/5 px-2 py-1 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </motion.div>
      ))}
    </div>
  );
};

export const Research = () => {
  return (
    <div className="space-y-12">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-xl text-gray-400 max-w-3xl"
      >
        {portfolioData.research.description}
      </motion.p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {portfolioData.research.interests.map((interest, idx) => (
          <motion.div
            key={interest.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10"
          >
            <h3 className="text-2xl font-bold text-white mb-4">{interest.title}</h3>
            <p className="text-gray-400 leading-relaxed text-lg">{interest.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export const Experience = () => {
  return (
    <div className="relative border-l border-white/10 ml-4 md:ml-0 space-y-12 pb-8">
      {portfolioData.experience.map((exp, idx) => (
        <motion.div
          key={`${exp.company}-${idx}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="relative pl-8"
        >
          <div className="absolute left-[-5px] top-2 w-[9px] h-[9px] rounded-full bg-blue-500 ring-4 ring-black" />
          <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <span className="text-blue-400 font-medium">{exp.period}</span>
          </div>
          <p className="text-xl text-gray-300 font-medium mb-3">{exp.company}</p>
          <p className="text-gray-400 max-w-3xl leading-relaxed">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
};

export const Contact = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          I'm always interested in discussing new research opportunities, collaborations, or technical challenges.
          Feel free to reach out through the form or via my social profiles.
        </p>
        <div className="space-y-4">
          <a href={`mailto:${portfolioData.email}`} className="flex items-center text-gray-300 hover:text-white transition-colors group">
            <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mr-4 group-hover:bg-blue-500/20 transition-all">
                <Mail size={20} />
            </div>
            {portfolioData.email}
          </a>
        </div>
      </motion.div>
      <motion.form
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Name</label>
            <input
              type="text"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="Your Name"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-400">Email</label>
            <input
              type="email"
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors"
              placeholder="your@email.com"
            />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-400">Message</label>
          <textarea
            rows={5}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none"
            placeholder="Tell me about your project or inquiry..."
          />
        </div>
        <button
          className="w-full bg-white text-black font-bold py-4 rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center group"
        >
          Send Message
          <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
        </button>
      </motion.form>
    </div>
  );
};
