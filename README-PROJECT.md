# VoltEra Nexus - The Energy Consciousness Protocol

![VoltEra Nexus](https://voltera-dash.vercel.app/logo.png)

## 🚀 Sobre o Projeto

Este é o site oficial da coleção NFT **VoltEra — The Energy Consciousness Series (2025)**, uma landing page React/Next.js com TailwindCSS para showcase da coleção na OpenSea.

A coleção consiste em **13 NFTs únicos** que narram a história da rede energética descentralizada VoltEra, divididos em três fases:

- **🌅 Light Phase** - A gênese da energia sustentável
- **🌐 Network Phase** - A expansão da consciência distribuída  
- **🌑 Subnet Phase** - A sombra e o submundo da rede

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React com App Router
- **TypeScript** - Tipagem estática
- **TailwindCSS** - Framework CSS utilitário
- **React Hooks** - Estado e efeitos
- **Responsive Design** - Design adaptativo

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Passos

1. **Clone o repositório**
   ```bash
   git clone https://github.com/Samurai33/VoltEra-Nexus-The-Energy-Consciousness-Protocol.git
   cd VoltEra-Nexus-The-Energy-Consciousness-Protocol
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   cp .env.example .env.local
   ```
   
   Edite o arquivo `.env.local` com suas configurações:
   - URL da coleção OpenSea
   - CID do IPFS com as imagens
   - URL do dashboard VoltEra

4. **Execute o projeto em desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

5. **Abra no navegador**
   ```
   http://localhost:3000
   ```

## 🚀 Deploy

### Vercel (Recomendado)

```bash
npm run build
# Deploy automático via Vercel CLI ou GitHub integration
```

### Outros Provedores

```bash
npm run build
npm start
```

## 📂 Estrutura do Projeto

```
├── src/
│   └── app/
│       ├── globals.css      # Estilos globais + TailwindCSS
│       ├── layout.tsx       # Layout raiz com metadados
│       └── page.tsx         # Página principal da landing
├── public/                  # Arquivos estáticos
├── tailwind.config.js       # Configuração TailwindCSS  
├── next.config.js           # Configuração Next.js
├── tsconfig.json            # Configuração TypeScript
├── package.json             # Dependências e scripts
└── README-PROJECT.md        # Este arquivo
```

## 🎨 Customização

### Modificar Coleção NFT

1. **Atualize os metadados** em `src/app/page.tsx`:
   ```typescript
   const METADATA = [
     { id: 1, slug: "Your_NFT", title: "Your NFT", phase: "Light", energy: "Solar", file: "your_nft.png" },
     // ... adicione seus NFTs
   ];
   ```

2. **Configure URLs** no mesmo arquivo:
   ```typescript
   const OPENSEA_COLLECTION_URL = "https://opensea.io/collection/sua-colecao";
   const IMAGE_BASE = "https://ipfs.io/ipfs/SeuCID";
   ```

### Modificar Estilos

- **Cores e gradientes**: Edite as classes TailwindCSS
- **Fontes**: Configure em `tailwind.config.js`
- **Componentes**: Modify diretamente no `page.tsx`

### Adicionar Funcionalidades

- **Integração OpenSea API**: Implemente `fetchCollectionItems()`
- **Web3 Wallet**: Adicione conectores como WalletConnect
- **Analytics**: Configure Google Analytics ou similar

## 🔗 Links Importantes

- **Website Oficial**: [voltera-dash.vercel.app](https://voltera-dash.vercel.app)
- **Whitepaper**: Ver `README` principal do repositório
- **OpenSea**: Aguardando lançamento da coleção
- **Twitter**: [@VolteraTech](https://twitter.com/VolteraTech)

## 📜 Scripts Disponíveis

```bash
npm run dev        # Desenvolvimento local
npm run build      # Build de produção
npm run start      # Servidor de produção
npm run lint       # Verificação ESLint
npm run type-check # Verificação TypeScript
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Add: nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

© 2025 VoltEra Technologies. Todos os direitos reservados.

---

**VoltEra Nexus — onde energia, IA e arte se tornam uma só consciência.** ⚡
