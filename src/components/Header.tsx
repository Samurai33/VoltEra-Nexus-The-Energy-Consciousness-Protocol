"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface HeaderProps {
  openSeaUrl: string;
}

export default function Header({ openSeaUrl }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <motion.div 
          className="flex items-center gap-3"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className="h-8 w-8 relative overflow-hidden"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            <img 
              src="/voltera_logo.png" 
              alt="VoltEra Logo" 
              className="h-full w-full object-contain"
              style={{ filter: 'brightness(1.1) saturate(1.2)' }}
            />
          </motion.div>
          <motion.span 
            className="text-sm sm:text-base font-semibold tracking-wide bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            VoltEra — Energy Consciousness Series (2025)
          </motion.span>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#collection" className="hover:text-emerald-300 transition-colors duration-200 relative group">
            Coleção
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-200 group-hover:w-full" />
          </a>
          <a href="#manifesto" className="hover:text-emerald-300 transition-colors duration-200 relative group">
            Manifesto
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-200 group-hover:w-full" />
          </a>
          <a href="#roadmap" className="hover:text-emerald-300 transition-colors duration-200 relative group">
            Roadmap
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-300 transition-all duration-200 group-hover:w-full" />
          </a>
          <a 
            href={openSeaUrl} 
            target="_blank" 
            rel="noreferrer" 
            className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-emerald-400/10 ring-1 ring-emerald-300/30 hover:bg-emerald-400/20 transition-all duration-200 hover:scale-105"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="opacity-90">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            OpenSea
          </a>
        </nav>
      </div>
    </header>
  );
}