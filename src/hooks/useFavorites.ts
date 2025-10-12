"use client";

import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'voltera-nft-favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Load favorites from localStorage
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      if (saved) {
        const favoriteIds = JSON.parse(saved);
        setFavorites(new Set(favoriteIds));
      }
    } catch (error) {
      console.error('Error loading favorites:', error);
    }
    setMounted(true);
  }, []);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      
      // Save to localStorage
      try {
        localStorage.setItem(FAVORITES_KEY, JSON.stringify([...newFavorites]));
      } catch (error) {
        console.error('Error saving favorites:', error);
      }
      
      return newFavorites;
    });
  };

  const isFavorite = (id: number) => favorites.has(id);

  return {
    favorites: Array.from(favorites),
    toggleFavorite,
    isFavorite,
    mounted
  };
}