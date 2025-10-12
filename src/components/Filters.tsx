"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';

interface FiltersProps {
  search: string;
  setSearch: (value: string) => void;
  phaseFilter: string | null;
  setPhaseFilter: (value: string | null) => void;
  totalCount: number;
  filteredCount: number;
}

function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export default function Filters({ 
  search, 
  setSearch, 
  phaseFilter, 
  setPhaseFilter, 
  totalCount, 
  filteredCount 
}: FiltersProps) {
  const phases = ["Light", "Network", "Subnet"];

  return (
    <section aria-label="Controles" className="border-t border-white/10 bg-black/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col gap-4">
          {/* Stats and Phase Filters */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-3">
              <Filter size={16} className="text-white/60" />
              <span className="text-sm text-white/60">
                {filteredCount} de {totalCount} NFTs
                {phaseFilter && ` • Fase: ${phaseFilter}`}
              </span>
            </div>
            
            <div className="flex items-center gap-2 overflow-auto">
              {phases.map((phase, index) => (
                <motion.button
                  key={phase}
                  onClick={() => setPhaseFilter(phase === phaseFilter ? null : phase)}
                  className={classNames(
                    "px-3 py-1.5 rounded-lg text-sm transition-all duration-200 whitespace-nowrap",
                    phaseFilter === phase 
                      ? "bg-emerald-400/20 ring-1 ring-emerald-300/40 text-emerald-300" 
                      : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white"
                  )}
                  aria-pressed={phaseFilter === phase}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {phase}
                </motion.button>
              ))}
              {phaseFilter && (
                <button
                  onClick={() => setPhaseFilter(null)}
                  className="px-2 py-1.5 text-xs text-white/60 hover:text-white transition-colors duration-200"
                  aria-label="Limpar filtros"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
          
          {/* Search */}
          <div className="relative">
            <label className="relative inline-flex items-center w-full sm:w-80">
              <input
                className="w-full rounded-xl bg-black/40 ring-1 ring-white/15 px-4 py-2.5 pr-10 placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-300/50 transition-all duration-200"
                placeholder="Buscar por nome ou energia..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Buscar NFTs"
              />
              <Search className="absolute right-3 h-4 w-4 text-white/50" />
            </label>
            
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-10 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-sm transition-colors duration-200"
                aria-label="Limpar busca"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}