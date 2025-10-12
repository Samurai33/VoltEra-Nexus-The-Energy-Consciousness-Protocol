"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, ExternalLink } from 'lucide-react';

interface NFTItem {
  id: number;
  slug: string;
  title: string;
  phase: string;
  energy: string;
  file: string;
}

interface NFTCardProps {
  item: NFTItem;
  imageBase: string;
  openSeaUrl: string;
  phaseColor: string;
  onCardClick: (item: NFTItem) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function NFTCard({ 
  item, 
  imageBase, 
  openSeaUrl, 
  phaseColor, 
  onCardClick,
  isFavorite,
  onToggleFavorite 
}: NFTCardProps) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      className="group rounded-2xl overflow-hidden bg-white/5 ring-1 ring-white/10 hover:ring-emerald-300/40 transition-all duration-300 hover:shadow-2xl hover:shadow-emerald-400/10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02, y: -2 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="relative aspect-square overflow-hidden cursor-pointer" onClick={() => onCardClick(item)}>
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-emerald-400 border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        
        {imageError ? (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center text-white/60">
              <div className="w-12 h-12 mx-auto mb-2 bg-white/10 rounded-lg flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="18" height="18" x="3" y="3" rx="2" ry="2"/>
                  <circle cx="9" cy="9" r="2"/>
                  <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                </svg>
              </div>
              <p className="text-xs">Imagem não disponível</p>
            </div>
          </div>
        ) : (
          <Image
            src={`${imageBase}/${item.file}`}
            alt={`${item.title} — VoltEra NFT #${item.id}`}
            fill
            className={`object-cover object-center group-hover:scale-105 transition-transform duration-500 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            priority={item.id <= 6} // Priority loading for first 6 items
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        )}
        
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {/* NFT Number Badge */}
        <div className="absolute left-3 top-3 text-[11px] font-medium px-2 py-1 rounded-md bg-black/70 ring-1 ring-white/20 backdrop-blur-sm">
          #{String(item.id).padStart(3, "0")}
        </div>
        
        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(item.id);
          }}
          className="absolute right-3 top-3 p-2 rounded-full bg-black/70 ring-1 ring-white/20 backdrop-blur-sm hover:bg-black/80 transition-all duration-200 hover:scale-110"
          aria-label={isFavorite ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        >
          <Heart 
            size={14} 
            className={`transition-colors duration-200 ${
              isFavorite ? 'fill-red-400 text-red-400' : 'text-white/60 hover:text-red-400'
            }`} 
          />
        </button>
      </div>
      
      <div className="p-4 flex items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold tracking-tight text-white truncate">{item.title}</h3>
          <p className="text-xs text-white/60 mt-0.5">{item.phase} • {item.energy}</p>
        </div>
        <span className={`text-[10px] uppercase tracking-wider px-2 py-1 rounded-md bg-gradient-to-r text-black font-semibold whitespace-nowrap ${phaseColor}`}>
          {item.phase}
        </span>
      </div>
      
      <div className="px-4 pb-4">
        <a
          href={openSeaUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-emerald-200 transition-colors duration-200 group/link"
          aria-label={`Ver ${item.title} na OpenSea`}
          onClick={(e) => e.stopPropagation()}
        >
          Ver na OpenSea
          <ExternalLink size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-200" />
        </a>
      </div>
    </motion.div>
  );
}