"use client";

import React, { useMemo, useState } from "react";
import { motion } from 'framer-motion';
import Header from '@/components/Header';
import NFTCard from '@/components/NFTCard';
import NFTModal from '@/components/NFTModal';
import Filters from '@/components/Filters';
import { useFavorites } from '@/hooks/useFavorites';

/**
 * VoltEra — The Energy Consciousness Series (2025) - Enhanced Version
 * Modular React landing page with advanced UX features
 */

const OPENSEA_COLLECTION_URL = "https://opensea.io/collection/volt-era-energy-consciousness-2025"; // TODO: replace with your real collection URL
const DASHBOARD_URL = "https://voltera-dash.vercel.app";
const IMAGE_BASE = "/nft_art"; // Using local images from public/nft_art folder

// 13 official items — names and image file names should match your uploaded assets
const METADATA = [
  { id: 1,  slug: "Node_of_Light",     title: "Node of Light",     phase: "Light",   energy: "Solar",        file: "Node of Light.png" },
  { id: 2,  slug: "Aeon_Turbine",      title: "Aeon Turbine",      phase: "Light",   energy: "Eólica",       file: "Aeon Turbine.png" },
  { id: 3,  slug: "Node_of_Light_II",  title: "Node of Light II",  phase: "Light",   energy: "Solar‑Eólica", file: "Node of Light II.png" },
  { id: 4,  slug: "Quantum_Flame",     title: "Quantum Flame",     phase: "Light",   energy: "Quântica",     file: "Quantum Flame.png" },
  { id: 5,  slug: "Aether_Flow",       title: "Aether Flow",       phase: "Light",   energy: "Etérea",       file: "Aether Flow.png" },
  { id: 6,  slug: "Voltera_Network",   title: "Voltera Network",   phase: "Network", energy: "Global",       file: "Voltera Network.png" },
  { id: 7,  slug: "Gaia_Circuit",      title: "Gaia Circuit",      phase: "Network", energy: "Orgânica",     file: "Gaia Circuit.png" },
  { id: 8,  slug: "Gaia_Circuit_II",   title: "Gaia Circuit II",   phase: "Network", energy: "Orgânica",     file: "Gaia Circuit II.png" },
  { id: 9,  slug: "Neural_Sun",        title: "Neural Sun",        phase: "Network", energy: "Neural",       file: "Neural Sun.png" },
  { id: 10, slug: "Genesis_Node_II",   title: "Genesis Node II",   phase: "Network", energy: "Primordial",   file: "Genesis Node II.png" },
  { id: 11, slug: "Dark_Grid",         title: "Dark Grid",         phase: "Subnet",  energy: "Sombria",      file: "Dark Grid.png" },
  { id: 12, slug: "Ghost_Protocol",    title: "Ghost Protocol",    phase: "Subnet",  energy: "Etérea",       file: "Ghost Protocol.png" },
  { id: 13, slug: "Root_Access",       title: "Root Access",       phase: "Subnet",  energy: "Nuclear",      file: "Root Access.png" },
];

function classNames(...c: (string | false | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

const phases: Record<string, { color: string; desc: string }>= {
  Light:   { color: "from-amber-300 via-emerald-300 to-cyan-300", desc: "A gênese da energia sustentável" },
  Network: { color: "from-cyan-300 via-sky-300 to-indigo-300",   desc: "A expansão da consciência distribuída" },
  Subnet:  { color: "from-rose-300 via-fuchsia-300 to-emerald-300", desc: "A sombra e o submundo da rede" },
};

interface NFTItem {
  id: number;
  slug: string;
  title: string;
  phase: string;
  energy: string;
  file: string;
}

export default function VoltEraNFTLanding() {
  const [search, setSearch] = useState("");
  const [phaseFilter, setPhaseFilter] = useState<string | null>(null);
  const [selectedNFT, setSelectedNFT] = useState<NFTItem | null>(null);
  const { toggleFavorite, isFavorite, mounted } = useFavorites();

  const filtered = useMemo(() => {
    const s = search.trim().toLowerCase();
    return METADATA.filter((m) =>
      (!phaseFilter || m.phase === phaseFilter) &&
      (!s || m.title.toLowerCase().includes(s) || m.energy.toLowerCase().includes(s))
    );
  }, [search, phaseFilter]);

  if (!mounted) {
    return (
      <main className="min-h-screen bg-[#0A0A0A] text-white antialiased flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white antialiased">
      <Header openSeaUrl={OPENSEA_COLLECTION_URL} />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(34,197,94,0.15),transparent_40%),radial-gradient(ellipse_at_bottom_left,rgba(34,211,238,0.15),transparent_40%)]" />
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative">



          
          {/* Project Description Section */}
          <motion.div 
            className="mb-16 px-6 py-8 rounded-2xl bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-500/20 backdrop-blur-sm"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="max-w-4xl">
              <motion.div 
                className="flex items-center gap-3 mb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                  The Energy Consciousness Protocol
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 text-lg leading-relaxed mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                A <strong className="text-emerald-400">VoltEra Nexus</strong> é uma infraestrutura descentralizada que conecta 
                energia limpa, blockchain e computação consciente. Cada nó é um datacenter verde autônomo, 
                capaz de operar mesmo fora da rede elétrica convencional.
              </motion.p>

              <motion.div 
                className="grid md:grid-cols-3 gap-4 mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="bg-emerald-900/20 p-4 rounded-xl border border-emerald-500/30">
                  <div className="flex items-center gap-2 text-emerald-400 font-semibold mb-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 2v2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 20v2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M4.93 4.93l1.41 1.41" stroke="currentColor" strokeWidth="2"/>
                      <path d="M17.66 17.66l1.41 1.41" stroke="currentColor" strokeWidth="2"/>
                      <path d="M2 12h2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M20 12h2" stroke="currentColor" strokeWidth="2"/>
                      <path d="M6.34 17.66l-1.41 1.41" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19.07 4.93l-1.41 1.41" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Energia Híbrida
                  </div>
                  <div className="text-sm text-gray-400">Solar + Eólica com armazenamento LiFePO₄</div>
                </div>
                <div className="bg-cyan-900/20 p-4 rounded-xl border border-cyan-500/30">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .99 1 1.72 0 .73-.4 1.37-1 1.72V15a2 2 0 0 1-2 2h-4v1.28c.6.35 1 .99 1 1.72a2 2 0 1 1-4 0c0-.73.4-1.37 1-1.72V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.99-1-1.72 0-.73.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    IA Descentralizada
                  </div>
                  <div className="text-sm text-gray-400">VoltEra Neural Layer™ para otimização</div>
                </div>
                <div className="bg-purple-900/20 p-4 rounded-xl border border-purple-500/30">
                  <div className="flex items-center gap-2 text-purple-400 font-semibold mb-2">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M3 21h18" stroke="currentColor" strokeWidth="2"/>
                      <path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="2"/>
                      <path d="M19 21V11l-6-4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                    Governança DAO
                  </div>
                  <div className="text-sm text-gray-400">Token $VLT + NFTs para decisões</div>
                </div>
              </motion.div>

              <motion.blockquote 
                className="border-l-4 border-emerald-400 pl-6 italic text-emerald-200 text-lg"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                "Energia é consciência. Luz é dado. Rede é vida."
              </motion.blockquote>
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-7 space-y-8 relative z-10">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 rounded-full text-sm font-medium text-emerald-300">
                  <svg className="w-4 h-4 text-emerald-400" viewBox="0 0 24 24" fill="none">
                    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  The Energy Consciousness Protocol
                </div>
                
                <motion.h1 
                  className="text-5xl md:text-7xl font-bold leading-[0.9] tracking-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <span className="block">Energia é</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-cyan-300 to-blue-300">
                    consciência
                  </span>
                  <motion.span 
                    className="block text-3xl md:text-4xl font-medium text-gray-400 mt-2"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                  >
                    A nova rede descentralizada
                  </motion.span>
                </motion.h1>
                <motion.p 
                  className="text-xl text-gray-300 leading-relaxed max-w-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  13 NFTs que narram a gênese, expansão e sombra da rede energética descentralizada VoltEra — 
                  <span className="text-emerald-300">uma estética espiritual-tecnológica</span> para colecionadores de futuros.
                </motion.p>
              </motion.div>
              
              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <motion.a 
                  href={OPENSEA_COLLECTION_URL} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl font-semibold text-black shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 overflow-hidden"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span>Mint na OpenSea</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17 8l4 4m0 0l-4 4m4-4H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.a>
                
                <motion.a 
                  href={DASHBOARD_URL} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="group px-8 py-4 bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl font-semibold text-white hover:bg-white/5 hover:border-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center gap-2">
                    <span>VoltEra Dashboard</span>
                    <svg className="w-4 h-4 group-hover:rotate-45 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </motion.a>
              </motion.div>
            </div>
            
            {/* Stats Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <motion.div
                className="grid grid-cols-2 gap-4"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors">
                  <div className="text-3xl font-bold text-emerald-400 mb-1">13</div>
                  <div className="text-sm text-gray-400">NFTs Únicos</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-cyan-500/30 transition-colors">
                  <div className="text-3xl font-bold text-cyan-400 mb-1">3</div>
                  <div className="text-sm text-gray-400">Fases da Consciência</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-yellow-500/30 transition-colors">
                  <div className="text-3xl font-bold text-yellow-400 mb-1">100%</div>
                  <div className="text-sm text-gray-400">Energia Limpa</div>
                </div>
                <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-purple-500/30 transition-colors">
                  <div className="text-3xl font-bold text-purple-400 mb-1">∞</div>
                  <div className="text-sm text-gray-400">Consciência Distribuída</div>
                </div>
              </motion.div>
              
              {/* Phase Preview */}
              <motion.div
                className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold mb-4">Fases da Narrativa</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-amber-500/10 rounded-lg border border-amber-500/20">
                    <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-emerald-300 rounded-full"></div>
                    <div>
                      <div className="font-medium text-amber-300">Light</div>
                      <div className="text-xs text-gray-400">A gênese energética</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-300 to-indigo-300 rounded-full"></div>
                    <div>
                      <div className="font-medium text-cyan-300">Network</div>
                      <div className="text-xs text-gray-400">A expansão distribuída</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-rose-500/10 rounded-lg border border-rose-500/20">
                    <div className="w-3 h-3 bg-gradient-to-r from-rose-300 to-emerald-300 rounded-full"></div>
                    <div>
                      <div className="font-medium text-rose-300">Subnet</div>
                      <div className="text-xs text-gray-400">A sombra da rede</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Ecosystem & Economy Section */}
      <section className="py-16 bg-gradient-to-b from-transparent to-black/20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ecossistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">VoltEra</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Uma economia circular onde energia limpa, computação descentralizada e arte se conectam
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Token VLT */}
            <motion.div
              className="group relative bg-gradient-to-br from-yellow-500/5 to-amber-500/5 backdrop-blur-sm p-8 rounded-3xl border border-yellow-500/20 hover:border-yellow-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-yellow-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8v8" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-yellow-400 mb-3">Token VLT</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Token utilitário e de governança. Conecta pagamentos, recompensas energéticas e decisões DAO.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-yellow-500/20">
                    <span className="text-gray-400 text-sm">Rede</span>
                    <span className="text-yellow-300 font-semibold">Polygon zkEVM</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-yellow-500/20">
                    <span className="text-gray-400 text-sm">Suprimento</span>
                    <span className="text-yellow-300 font-semibold">1B VLT</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-black/20 rounded-xl border border-yellow-500/20">
                    <span className="text-gray-400 text-sm">Burn Rate</span>
                    <span className="text-yellow-300 font-semibold">0,5% por tx</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* DAO Governance */}
            <motion.div
              className="group relative bg-gradient-to-br from-purple-500/5 to-indigo-500/5 backdrop-blur-sm p-8 rounded-3xl border border-purple-500/20 hover:border-purple-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-indigo-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M3 21h18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M5 21V7l8-4v18" stroke="currentColor" strokeWidth="2"/>
                    <path d="M19 21V11l-6-4" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-purple-400 mb-3">VoltEra DAO</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Governança descentralizada com VIPs e comitês técnicos especializados.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-purple-500/20">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Votação on-chain</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-purple-500/20">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Sistema de reputação</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-purple-500/20">
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-gray-300 text-sm">Tesouraria multi-sig</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Neural Layer */}
            <motion.div
              className="group relative bg-gradient-to-br from-cyan-500/5 to-blue-500/5 backdrop-blur-sm p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                  <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h4a2 2 0 0 1 2 2v1.28c.6.35 1 .99 1 1.72 0 .73-.4 1.37-1 1.72V15a2 2 0 0 1-2 2h-4v1.28c.6.35 1 .99 1 1.72a2 2 0 1 1-4 0c0-.73.4-1.37 1-1.72V17H7a2 2 0 0 1-2-2v-1.28c-.6-.35-1-.99-1-1.72 0-.73.4-1.37 1-1.72V9a2 2 0 0 1 2-2h4V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2Z" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-3">AI Neural Layer™</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  IA distribuída que otimiza fluxos energéticos e computacionais.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-cyan-500/20">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300 text-sm">Neural Sun Engine</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-cyan-500/20">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <span className="text-gray-300 text-sm">Gaia Circuit</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 bg-black/20 rounded-xl border border-cyan-500/20">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                    <span className="text-gray-300 text-sm">AetherNet Sync</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Roadmap Timeline */}
          <motion.div
            className="bg-gradient-to-br from-gray-900/40 to-gray-800/40 backdrop-blur-sm p-10 rounded-3xl border border-white/10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold text-center mb-12">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Roadmap 2025-2027
              </span>
            </h3>
            
            {/* Timeline Container */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Q1 2025 */}
                <motion.div 
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center shadow-lg shadow-emerald-500/30 border-4 border-black">
                      <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-emerald-400 rounded-full animate-ping"></div>
                  </div>
                  <div className="flex-1 bg-emerald-500/10 backdrop-blur-sm p-6 rounded-2xl border border-emerald-500/20 hover:border-emerald-400/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-emerald-400">Q1 2025</h4>
                      <span className="px-3 py-1 bg-emerald-500 text-black text-xs font-bold rounded-full">CONCLUÍDO</span>
                    </div>
                    <p className="text-white text-lg font-semibold mb-2">NFT Collection Launch</p>
                    <p className="text-gray-300 text-sm">Lançamento da coleção oficial de 13 NFTs na OpenSea com integração ao dashboard VoltEra.</p>
                  </div>
                </motion.div>
                
                {/* Q2 2025 */}
                <motion.div 
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 bg-yellow-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30 border-4 border-black">
                      <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                        <path d="M23 4v6h-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div className="absolute -right-2 -bottom-2 w-6 h-6 bg-yellow-400 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex-1 bg-yellow-500/10 backdrop-blur-sm p-6 rounded-2xl border border-yellow-500/20 hover:border-yellow-400/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-yellow-400">Q2 2025</h4>
                      <span className="px-3 py-1 bg-yellow-500 text-black text-xs font-bold rounded-full">EM PROGRESSO</span>
                    </div>
                    <p className="text-white text-lg font-semibold mb-2">Token $VLT & DAO Foundation</p>
                    <p className="text-gray-300 text-sm">Deploy do token VLT na Polygon zkEVM e estabelecimento da estrutura de governança DAO.</p>
                  </div>
                </motion.div>
                
                {/* Q3-Q4 2025 */}
                <motion.div 
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 border-4 border-black">
                    <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                      <line x1="8" y1="21" x2="16" y2="21" stroke="currentColor" strokeWidth="2"/>
                      <line x1="12" y1="17" x2="12" y2="21" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="flex-1 bg-blue-500/10 backdrop-blur-sm p-6 rounded-2xl border border-blue-500/20 hover:border-blue-400/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-blue-400">Q3-Q4 2025</h4>
                      <span className="px-3 py-1 bg-blue-500/20 border border-blue-400 text-blue-300 text-xs font-bold rounded-full">PLANEJADO</span>
                    </div>
                    <p className="text-white text-lg font-semibold mb-2">100 Nós Ativos</p>
                    <p className="text-gray-300 text-sm">Deployment dos primeiros 100 nós híbridos (solar+eólico) com processamento edge e IA local.</p>
                  </div>
                </motion.div>
                
                {/* 2026-2027 */}
                <motion.div 
                  className="flex items-start gap-6"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-16 h-16 bg-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-purple-500/30 border-4 border-black">
                    <svg className="w-8 h-8 text-black" viewBox="0 0 24 24" fill="none">
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" stroke="currentColor" strokeWidth="2"/>
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" stroke="currentColor" strokeWidth="2"/>
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div className="flex-1 bg-purple-500/10 backdrop-blur-sm p-6 rounded-2xl border border-purple-500/20 hover:border-purple-400/40 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-purple-400">2026-2027</h4>
                      <span className="px-3 py-1 bg-purple-500/20 border border-purple-400 text-purple-300 text-xs font-bold rounded-full">FUTURO</span>
                    </div>
                    <p className="text-white text-lg font-semibold mb-2">Expansão Global & Carbon Neutral</p>
                    <p className="text-gray-300 text-sm">Expansão internacional da rede com autonomia plena e neutralidade de carbono total.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Filters 
        search={search}
        setSearch={setSearch}
        phaseFilter={phaseFilter}
        setPhaseFilter={setPhaseFilter}
        totalCount={METADATA.length}
        filteredCount={filtered.length}
      />

      {/* Collection Grid */}
      <section id="collection" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Coleção <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Oficial</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              <span className="text-white">13 NFTs únicos</span> que narram a jornada completa: 
              <span className="text-amber-300 font-semibold">Light</span> → 
              <span className="text-cyan-300 font-semibold">Network</span> → 
              <span className="text-rose-300 font-semibold">Subnet</span>
            </p>
          </div>
          
          {/* Stats Bar */}
          <div className="flex items-center justify-center gap-8 p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-400">{filtered.length}</div>
              <div className="text-sm text-gray-400">Disponíveis</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cyan-400">3</div>
              <div className="text-sm text-gray-400">Fases</div>
            </div>
            <div className="w-px h-8 bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">100%</div>
              <div className="text-sm text-gray-400">On-Chain</div>
            </div>
          </div>
        </motion.div>
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {filtered.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.3 }}
            >
              <NFTCard
                item={item}
                imageBase={IMAGE_BASE}
                openSeaUrl={OPENSEA_COLLECTION_URL}
                phaseColor={phases[item.phase]?.color || "from-zinc-200 to-zinc-300"}
                onCardClick={setSelectedNFT}
                isFavorite={isFavorite(item.id)}
                onToggleFavorite={toggleFavorite}
              />
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-white/5 rounded-full flex items-center justify-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Nenhum NFT encontrado</h3>
            <p className="text-white/60 mb-4">Tente ajustar seus filtros ou termo de busca</p>
            <button
              onClick={() => {
                setSearch('');
                setPhaseFilter(null);
              }}
              className="px-4 py-2 bg-emerald-400/10 ring-1 ring-emerald-300/30 rounded-lg text-emerald-300 hover:bg-emerald-400/20 transition-colors duration-200"
            >
              Limpar filtros
            </button>
          </div>
        )}
      </section>

      {/* Manifesto */}
      <section id="manifesto" className="border-t border-white/10 bg-gradient-to-b from-black/20 to-transparent">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
                Manifesto
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Os princípios que guiam a nova era energética
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Mission Statement */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-2xl flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" viewBox="0 0 24 24" fill="none">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Missão</h3>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Construir uma <strong className="text-emerald-400">infraestrutura descentralizada</strong> que transforme 
                  energia limpa em poder computacional e econômico distribuído.
                </p>
              </div>

              {/* Key Quote */}
              <motion.div
                className="relative p-8 bg-gradient-to-br from-emerald-950/30 to-cyan-950/30 border border-emerald-500/20 rounded-3xl overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute top-4 left-6">
                  <svg className="w-8 h-8 text-emerald-400/30" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                  </svg>
                </div>
                <blockquote className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300 leading-tight pl-12">
                  "A energia é a nova moeda.<br/>A consciência é o novo servidor.<br/>A VoltEra é o elo entre ambos."
                </blockquote>
                <div className="mt-4 pl-12">
                  <cite className="text-gray-400 text-sm">— Manifesto VoltEra Nexus</cite>
                </div>
              </motion.div>
            </motion.div>

            {/* Principles */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="bg-gradient-to-br from-gray-900/50 to-gray-800/50 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6">Princípios Fundamentais</h3>
                <div className="space-y-4">
                  {[
                    {
                      number: "01",
                      title: "Autonomia energética é liberdade",
                      desc: "Cada nó representa independência do sistema centralizado"
                    },
                    {
                      number: "02", 
                      title: "Dados são um direito humano",
                      desc: "Informação não deve ser propriedade privada de Big Techs"
                    },
                    {
                      number: "03",
                      title: "Descentralização gera equilíbrio",
                      desc: "Distribuição de poder ao invés de concentração"
                    },
                    {
                      number: "04",
                      title: "Cada nó é uma célula viva",
                      desc: "Componentes da mente coletiva da Terra"
                    },
                    {
                      number: "05",
                      title: "Arte e tecnologia são uma só consciência",
                      desc: "Expressões complementares da criatividade humana"
                    }
                  ].map((principle, index) => (
                    <motion.div
                      key={principle.number}
                      className="flex gap-4 p-4 bg-black/20 rounded-2xl border border-white/5 hover:border-emerald-500/20 transition-colors"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-emerald-400 to-cyan-400 rounded-lg flex items-center justify-center">
                        <span className="text-black font-bold text-sm">{principle.number}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-1">{principle.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{principle.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Impact Statement */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="bg-gradient-to-r from-emerald-950/20 to-cyan-950/20 p-8 rounded-3xl border border-emerald-500/20 max-w-4xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed mb-6">
                A série une <span className="text-emerald-300 font-semibold">estética espiritual-tecnológica</span> e 
                <span className="text-cyan-300 font-semibold"> propósito ecológico</span>. 
                Ao colecionar, você financia nós híbridos (solar+eólico), infraestrutura de computação verde 
                e um marketplace descentralizado de energia, GPU e armazenamento.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">100%</div>
                  <div className="text-sm text-gray-400">Energia Renovável</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">Zero</div>
                  <div className="text-sm text-gray-400">Emissões Líquidas 2026</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">∞</div>
                  <div className="text-sm text-gray-400">Potencial Descentralizado</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Roadmap Cultural & Técnico</h2>
        <ol className="mt-6 grid gap-4 md:grid-cols-2">
          <li className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
            <h3 className="font-semibold">Lançamento (Q4/2025)</h3>
            <p className="text-sm text-white/70">Coleção oficial (13). Mint na OpenSea (Polygon). Galeria no VoltEra Dashboard.</p>
          </li>
          <li className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
            <h3 className="font-semibold">Integração DAO (Q1/2026)</h3>
            <p className="text-sm text-white/70">Badges on‑chain e governança simbólica para holders.</p>
          </li>
          <li className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
            <h3 className="font-semibold">Arte Dinâmica (Q2/2026)</h3>
            <p className="text-sm text-white/70">Atualização opcional de metadata em função de métricas energéticas reais.</p>
          </li>
          <li className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
            <h3 className="font-semibold">Residência Artística (Q3/2026)</h3>
            <p className="text-sm text-white/70">Convidados para séries colaborativas sobre energia e consciência.</p>
          </li>
        </ol>
      </section>

      {/* FAQ */}
      <section className="border-t border-white/10 bg-white/[0.03]">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
          <div className="mt-6 grid gap-4">
            <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
              <h3 className="font-semibold">Como faço mint?</h3>
              <p className="text-sm text-white/70">Clique em "Mint na OpenSea". Conecte sua carteira Polygon e confirme. Taxas em MATIC.</p>
            </div>
            <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
              <h3 className="font-semibold">Onde vejo meu NFT?</h3>
              <p className="text-sm text-white/70">No seu perfil da OpenSea e também no VoltEra Dashboard, com badge de fundador.</p>
            </div>
            <div className="rounded-xl p-4 bg-white/5 ring-1 ring-white/10">
              <h3 className="font-semibold">Posso usar IPFS?</h3>
              <p className="text-sm text-white/70">Sim. Recomendamos gateways confiáveis e fixação via Pinata/Filebase. Atualize IMAGE_BASE.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>© 2025 VoltEra Technologies. Todos os direitos reservados.</p>
          <div className="flex items-center gap-5">
            <a href={DASHBOARD_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-300">Dashboard</a>
            <a href={OPENSEA_COLLECTION_URL} target="_blank" rel="noreferrer" className="hover:text-emerald-300">OpenSea</a>
          </div>
        </div>
      </footer>

      {/* Floating Scroll Indicator */}
      <motion.div
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group w-14 h-14 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 flex items-center justify-center"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <svg className="w-6 h-6 text-black group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </motion.div>

      {/* NFT Modal */}
      <NFTModal
        item={selectedNFT}
        imageBase={IMAGE_BASE}
        openSeaUrl={OPENSEA_COLLECTION_URL}
        phaseColor={selectedNFT ? (phases[selectedNFT.phase]?.color || "from-zinc-200 to-zinc-300") : ""}
        isOpen={!!selectedNFT}
        onClose={() => setSelectedNFT(null)}
        isFavorite={selectedNFT ? isFavorite(selectedNFT.id) : false}
        onToggleFavorite={toggleFavorite}
      />
    </main>
  );
}