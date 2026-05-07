"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Menu, X, Database } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { portfolioData } from "@/data/portfolio";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "ABOUT", href: "#about" },
    { name: "SKILLS", href: "#skills" },
    { name: "PROJECTS", href: "#projects" },
    { name: "RESEARCH", href: "#research" },
    { name: "EXPERIENCE", href: "#experience" },
    { name: "CONTACT", href: "#contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-xl font-display font-bold tracking-tighter text-white hover:text-blue-400 transition-colors">
              <Database size={20} className="text-blue-500" />
              <span>{portfolioData.name.split(' ').map(n => n[0]).join('')}.SYS</span>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-baseline space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-400 hover:text-white px-4 py-2 font-mono text-[10px] tracking-[0.2em] transition-all relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-4 right-4 h-[1px] bg-blue-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-5">
            <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={18} />
            </a>
            <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={18} />
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-300 hover:text-blue-400 px-3 py-4 text-xs font-mono tracking-widest border-b border-white/5 last:border-0"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-6 pt-6 px-3">
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Github size={20} /></a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white"><Linkedin size={20} /></a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-white/5 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="mb-10 md:mb-0">
            <div className="flex items-center gap-3 mb-4">
                <Database size={24} className="text-blue-500" />
                <h2 className="text-2xl font-display font-bold text-white tracking-tighter">{portfolioData.name}</h2>
            </div>
            <p className="text-slate-500 font-mono text-[10px] tracking-widest uppercase mb-2">{portfolioData.role}</p>
            <p className="text-slate-600 font-mono text-[9px] max-w-xs">NEUROSCIENCE_INSPIRED_INTELLIGENCE // V0.4.2_RELEASE</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12">
            <div className="flex flex-col space-y-3">
                <span className="font-mono text-[10px] text-slate-500 mb-2 uppercase tracking-widest">Connect</span>
                <a href={portfolioData.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-[10px]">GITHUB</a>
                <a href={portfolioData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-[10px]">LINKEDIN</a>
                <a href={portfolioData.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-[10px]">X_TWITTER</a>
            </div>
            <div className="flex flex-col space-y-3">
                <span className="font-mono text-[10px] text-slate-500 mb-2 uppercase tracking-widest">Navigation</span>
                <a href="#about" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-[10px]">ABOUT</a>
                <a href="#projects" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-[10px]">RESEARCH</a>
                <a href="#contact" className="text-slate-400 hover:text-blue-400 transition-colors font-mono text-[10px]">CONTACT</a>
            </div>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-600 font-mono text-[9px]">
            © {new Date().getFullYear()} {portfolioData.name}. [ MIT_LICENSE ]
          </p>
          <div className="flex gap-6 items-center">
              <div className="h-1 w-1 rounded-full bg-green-500 animate-pulse" />
              <span className="text-slate-600 font-mono text-[9px] uppercase tracking-widest">System_Status: Operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const SectionContainer = ({ children, id, className, title }: { children: React.ReactNode, id?: string, className?: string, title?: string }) => {
  return (
    <section id={id} className={`py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto ${className}`}>
      {title && (
        <div className="mb-20">
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-4"
            >
                <div className="h-[2px] w-12 bg-blue-500" />
                <span className="font-mono text-[10px] text-blue-500 uppercase tracking-[0.3em]">SEC_{id?.toUpperCase()}</span>
            </motion.div>
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl font-display font-bold text-white tracking-tighter"
            >
                {title}
            </motion.h2>
        </div>
      )}
      {children}
    </section>
  );
};

export { Navbar, Footer, SectionContainer };
