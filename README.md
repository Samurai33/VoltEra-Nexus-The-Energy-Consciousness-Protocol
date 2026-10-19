<div align="center">

<img src="public/voltera_logo.png" alt="VoltEra Nexus" width="130">

# VoltEra Nexus

### The Energy Consciousness Protocol

An interactive digital-art gallery about clean energy, networks and digital sovereignty:
13 original artworks told in three phases — Light, Network and Subnet.

[![Website](https://img.shields.io/badge/n3xus.dev-0B1220?style=for-the-badge&logo=googlechrome&logoColor=14B8A6)](https://n3xus.dev)
[![Whitepaper](https://img.shields.io/badge/whitepaper-read-8B5CF6?style=for-the-badge&logo=readthedocs&logoColor=white)](docs/WHITEPAPER.md)
[![License](https://img.shields.io/badge/License-MIT-F59E0B?style=for-the-badge)](LICENSE)

[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=flat-square&logo=nextdotjs&logoColor=white)](package.json)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](package.json)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](tsconfig.json)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](tailwind.config.js)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-0055FF?style=flat-square&logo=framer&logoColor=white)](package.json)
[![Security](https://img.shields.io/badge/security-policy-111827?style=flat-square)](SECURITY.md)

</div>

---

## Table of Contents

- [Overview](#overview)
- [Experience](#experience)
- [Architecture](#architecture)
- [Quickstart](#quickstart)
- [Repository structure](#repository-structure)
- [Scope](#scope)
- [Current status](#current-status)

---

## Overview

**VoltEra Nexus** is a creative-technology experiment: a responsive gallery and storytelling site built around
13 energy-themed artworks. The narrative moves from generation (*Light*) to distribution (*Network*) to
autonomous edge nodes (*Subnet*), the same arc as the [VoltEra](https://github.com/Samurai33/voltera) product
concept.

It is built for:

- showing a product narrative through art instead of slides;
- experimenting with motion, filtering and favorites in a small Next.js codebase;
- anyone curious about where energy, networks and digital art meet.

---

## Experience

| Feature | Details |
|---|---|
| **Gallery** | 13 original artworks in [`public/nft_art`](public/nft_art) |
| **Three phases** | Light, Network and Subnet, each with its own story |
| **Search & filters** | Find by name or filter by phase |
| **Favorites** | Saved in the browser (`localStorage`), no account needed |
| **Artwork modal** | Animated detail view with external marketplace links |
| **Responsive dark UI** | Built for phone and desktop |

---

## Architecture

```mermaid
flowchart LR
  ART["public/nft_art<br/>13 artworks"] --> PAGE["app/page.tsx<br/>collection · phases"]
  PAGE --> F["Filters<br/>search · phase"]
  PAGE --> C["NFTCard grid"]
  C --> M["NFTModal<br/>Framer Motion"]
  C <--> FAV["useFavorites<br/>localStorage"]
```

---

## Quickstart

```bash
git clone https://github.com/Samurai33/VoltEra-Nexus-The-Energy-Consciousness-Protocol.git
cd VoltEra-Nexus-The-Energy-Consciousness-Protocol
npm install
npm run dev
```

Checks:

```bash
npm run type-check
npm run build
```

---

## Repository structure

| Path | What it is |
|---|---|
| `src/app/` | Next.js App Router layout, page and global styles |
| `src/components/` | Header, Filters, NFTCard, NFTModal |
| `src/hooks/useFavorites.ts` | Favorites persisted in the browser |
| `public/nft_art/` | The 13 artworks |
| `docs/WHITEPAPER.md` | The original narrative whitepaper (Portuguese) |

---

## Scope

This is an art and interface project. Mentions of decentralized energy, Web3 or environmental impact are part
of the story. They are not deployed infrastructure, investment products or verified environmental outcomes.

Related work: [VoltEra](https://github.com/Samurai33/voltera) (product dossier) ·
[GreenPulse](https://github.com/Samurai33/GreenPulse) (operational dashboard).

---

## Current status

| | |
|---|---|
| **Stage** | Complete gallery, runs locally |
| **Data** | Static collection, no backend |
| **Not included** | Wallet connection, minting, analytics |

---

<div align="center">

**Need something built, secured or kept online?** → [contato@n3xus.dev](mailto:contato@n3xus.dev) · [n3xus.dev](https://n3xus.dev)

MIT © Thiago "Samurai" Rangel · [N3XUS](https://n3xus.dev)

</div>
