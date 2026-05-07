"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
import { ArrowRight, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/10 text-blue-400 text-sm font-medium mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {portfolioData.role}
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">{portfolioData.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-medium max-w-3xl mx-auto leading-relaxed">
            {portfolioData.hero.title}
          </p>
          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            {portfolioData.hero.description}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-all flex items-center group"
            >
              {portfolioData.hero.cta.primary}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <a
              href="#contact"
              className="px-8 py-3 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all"
            >
              {portfolioData.hero.cta.secondary}
            </a>
            <a
              href={portfolioData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-white/5 text-white font-semibold rounded-full border border-white/10 hover:bg-white/10 transition-all flex items-center"
            >
              <Github className="mr-2" size={18} />
              {portfolioData.hero.cta.github}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-white/50 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
            {/* Placeholder for Profile Image */}
            <div className="text-gray-500 text-center p-8">
                <div className="w-24 h-24 rounded-full bg-white/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-3xl">AN</span>
                </div>
                <p>Profile Image Placeholder</p>
                <p className="text-xs mt-2 italic">(Replace with your photo in public/profile.jpg)</p>
            </div>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="prose prose-invert max-w-none">
          {portfolioData.about.bio.split('\n\n').map((paragraph, index) => (
            <p key={index} className="text-gray-300 text-lg leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export const Skills = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {portfolioData.skills.map((skillGroup, idx) => (
        <motion.div
          key={skillGroup.category}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-white/20 transition-all group"
        >
          <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
            {skillGroup.category}
          </h3>
          <div className="flex flex-wrap gap-2">
            {skillGroup.items.map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-gray-400 text-sm hover:text-white hover:bg-white/10 transition-all"
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
