"use client";

import React, { useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Heart, Copy, Check } from 'lucide-react';

interface NFTItem {
  id: number;
  slug: string;
  title: string;
  phase: string;
  energy: string;
  file: string;
}

interface NFTModalProps {
  item: NFTItem | null;
  imageBase: string;
  openSeaUrl: string;
  phaseColor: string;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
}

export default function NFTModal({
  item,
  imageBase,
  openSeaUrl,
  phaseColor,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite
}: NFTModalProps) {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  const copyToClipboard = async () => {
    if (item) {
      try {
        await navigator.clipboard.writeText(`${window.location.origin}#nft-${item.id}`);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
      <div 
        className="absolute inset-0" 
        onClick={onClose}
        aria-label="Fechar modal"
      />
      
          <motion.div 
            className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900/95 backdrop-blur-sm rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/50 hover:bg-black/70 transition-all duration-200 hover:scale-110"
          aria-label="Fechar modal"
        >
          <X size={20} className="text-white" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="flex-1 relative min-h-[300px] lg:min-h-[500px]">
            <Image
              src={`${imageBase}/${item.file}`}
              alt={`${item.title} — VoltEra NFT #${item.id}`}
              fill
              className="object-cover object-center"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            
            {/* NFT Number Badge */}
            <div className="absolute left-6 top-6 text-sm font-medium px-3 py-2 rounded-lg bg-black/70 ring-1 ring-white/20 backdrop-blur-sm">
              #{String(item.id).padStart(3, "0")}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between min-h-[300px]">
            <div>
              {/* Header */}
              <div className="mb-6">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white">{item.title}</h2>
                  <span className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-lg bg-gradient-to-r text-black font-semibold whitespace-nowrap ${phaseColor}`}>
                    {item.phase}
                  </span>
                </div>
                
                <div className="flex items-center gap-4 text-sm text-white/70">
                  <span>Fase: {item.phase}</span>
                  <span>•</span>
                  <span>Energia: {item.energy}</span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Sobre esta peça</h3>
                <p className="text-white/80 leading-relaxed">
                  Este NFT representa um fragmento único da narrativa energética VoltEra. 
                  Como parte da fase <strong>{item.phase}</strong>, ele incorpora a essência da energia <strong>{item.energy}</strong>, 
                  contribuindo para a construção do ecossistema descentralizado de consciência energética.
                </p>
              </div>

              {/* Properties */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Propriedades</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-white/60 uppercase tracking-wider">Fase</div>
                    <div className="text-white font-semibold">{item.phase}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-white/60 uppercase tracking-wider">Energia</div>
                    <div className="text-white font-semibold">{item.energy}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-white/60 uppercase tracking-wider">ID</div>
                    <div className="text-white font-semibold">#{item.id}</div>
                  </div>
                  <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-xs text-white/60 uppercase tracking-wider">Raridade</div>
                    <div className="text-emerald-400 font-semibold">Fundador</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <div className="flex gap-3">
                <button
                  onClick={() => onToggleFavorite(item.id)}
                  className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl transition-all duration-200 hover:scale-105 ${
                    isFavorite 
                      ? 'bg-red-500/20 ring-1 ring-red-400/40 text-red-400' 
                      : 'bg-white/5 ring-1 ring-white/20 text-white hover:bg-white/10'
                  }`}
                >
                  <Heart 
                    size={18} 
                    className={isFavorite ? 'fill-current' : ''} 
                  />
                  {isFavorite ? 'Favorito' : 'Favoritar'}
                </button>
                
                <button
                  onClick={copyToClipboard}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 ring-1 ring-white/20 text-white hover:bg-white/10 transition-all duration-200 hover:scale-105"
                >
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                  {copied ? 'Copiado!' : 'Compartilhar'}
                </button>
              </div>
              
              <a
                href={openSeaUrl}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-400 to-cyan-400 text-black font-semibold rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105"
              >
                <ExternalLink size={18} />
                Ver na OpenSea
              </a>
            </div>
            </div>
          </div>
        </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}