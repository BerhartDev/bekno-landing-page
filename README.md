# BEKNO Landing Page

Site institucional da BEKNO - Soluções Digitais para o Seu Negócio. Uma landing page moderna e responsiva desenvolvida com Next.js 14, TypeScript e Tailwind CSS, com suporte completo a internacionalização (i18n).

## 🚀 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (Internacionalização)
- **React 18**
- **ESLint** (Linting)

## 🌍 Internacionalização

O site suporta múltiplos idiomas:
- **Português (pt)** - Idioma padrão
- **Inglês (en)**
- **Francês (fr)**

### URLs Disponíveis
- `/` - Redireciona para `/pt/`
- `/pt/` - Site em português
- `/en/` - Site em inglês
- `/fr/` - Site em francês

## 🛠️ Desenvolvimento Local

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Instalação e Execução

```bash
# Instalar dependências
npm install

# Modo desenvolvimento (hot reload)
npm run dev

# Build para produção
npm run build

# Servir arquivos estáticos (após build)
npm run start

# Linting
npm run lint
```

### URLs de Desenvolvimento
- **Desenvolvimento**: [http://localhost:3000](http://localhost:3000)
- **Português**: [http://localhost:3000/pt/](http://localhost:3000/pt/)
- **Inglês**: [http://localhost:3000/en/](http://localhost:3000/en/)

## Build e Deploy

Os workflows que publicavam o site no GitHub Pages foram removidos. Um push na `main` não dispara mais esse deploy. A publicação fica na Vercel.

## 📁 Estrutura do Projeto

```
bekno-landing-page/
├── src/
│   ├── app/
│   │   ├── [locale]/          # Rotas internacionalizadas
│   │   │   ├── layout.tsx     # Layout com i18n
│   │   │   └── page.tsx       # Página principal
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout raiz
│   │   ├── page.tsx           # Redirecionamento para /pt
│   │   ├── robots.ts
│   │   └── sitemap.ts
│   ├── components/
│   │   ├── layout/            # Componentes de layout
│   │   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   │   ├── Footer.tsx     # Rodapé
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── sections/          # Seções da página
│   │   │   ├── Hero.tsx       # Seção principal
│   │   │   ├── Features.tsx   # Serviços
│   │   │   ├── Method.tsx     # Como trabalhamos
│   │   │   └── Contact.tsx    # Contato
│   │   ├── ui/                # Componentes UI
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Heading.tsx
│   │   ├── ContactForm.tsx    # Formulário de contato
│   │   └── AboutIllustration.tsx
│   ├── lib/
│   │   ├── i18n/              # Configuração i18n
│   │   │   ├── routing.ts
│   │   │   └── request.ts
│   │   └── seo.ts             # Metadados, canônicas e dados estruturados
│   └── locales/               # Traduções
│       ├── pt.json            # Português
│       ├── en.json            # Inglês
│       └── fr.json            # Francês
├── next.config.js
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── README.md
```

## 🎨 Design System

### Cores da Marca
- **bekno-black**: `#000000` - Preto principal
- **bekno-white**: `#FFFFFF` - Branco
- **bekno-gray**: `#666666` - Cinza médio
- **bekno-gray-light**: `#999999` - Cinza claro
- **bekno-bg-light**: `#f5f5f5` - Fundo claro

### Tipografia
- **Fontes**: Inter, Roboto, Poppins, sans-serif
- **Tamanhos**: Responsivos (mobile-first)

## 📱 Funcionalidades

- ✅ **Design Responsivo** - Mobile-first
- ✅ **Internacionalização** - PT/EN
- ✅ **SEO Otimizado** - Meta tags dinâmicas
- ✅ **Formulário de Contato** - Integração Formspree
- ✅ **Scroll Suave** - Navegação entre seções
- ✅ **Troca de Idioma** - Botões de idioma funcionais
- ✅ **Build Estático** - Export para a Vercel

## Alterações recentes e pendências

Nada desta lista foi commitado nem publicado. O site no ar ainda é o build anterior.

### O que mudou

**Planos.** A seção saiu da home, do menu e do rodapé, nos três idiomas. O componente `Plans.tsx` e os textos de planos foram removidos. Serviços, método e contato permaneceram.

**Deploy na Vercel.** O build de produção aplicava o prefixo `/bekno-landing-page`, feito para o GitHub Pages, também na Vercel. CSS, JavaScript e imagens respondiam 404, e a home não completava o redirecionamento para `/pt/`. O prefixo agora só entra no build do GitHub Pages. Na Vercel os arquivos saem na raiz.

**Indexação.** Cada idioma ganhou título, descrição, canônica, `hreflang`, Open Graph e Twitter. O `<html lang>` segue o idioma da página. Há dados estruturados da BEKNO, dos seis serviços e, em projetos, do caminho de navegação. `robots.txt` libera a indexação. O sitemap lista `/pt/`, `/en/`, `/fr/` e as três páginas de projetos. A raiz `/` e a 404 ficam fora do índice.

**Domínio.** Canônica, sitemap, Open Graph e dados estruturados usam `https://bekno.com.br`. A home em português aponta para `https://bekno.com.br/pt/`.

**Idioma do aparelho.** Não foi implementado. A raiz continua mandando todo mundo para `/pt/`. Dá para redirecionar pelo idioma do navegador com um script na entrada. O país depende do IP e só funciona num servidor na borda, como a Vercel. País e idioma não são a mesma coisa.

### Falhas conhecidas

**A raiz quebra no GitHub Pages.** O build desse destino ainda publica os arquivos em `/bekno-landing-page/`, mas o redirecionamento da home é `url=/pt/` e o link também é `/pt/`. No endereço antigo isso cai em `https://berhartdev.github.io/pt/`, fora do site. Na Vercel e em `bekno.com.br` na raiz, `/pt/` está certo.

**O domínio novo e o prefixo antigo não combinam.** Se `bekno.com.br` for ligado ao GitHub Pages, o build continua com `/bekno-landing-page`. A canônica diz `https://bekno.com.br/pt/`, e o site publicado fica em `https://bekno.com.br/bekno-landing-page/pt/`. Na Vercel esse conflito não existe.

**As URLs públicas dependem do domínio já responder.** Imagem de compartilhamento, sitemap e canônica apontam para `bekno.com.br`. Enquanto o DNS não servir o site nesse host, o Google e as redes sociais não encontram essas URLs, mesmo que o GitHub Pages ou a Vercel estejam no ar.

**Não há favicon.** O HTML pede `/favicon.ico`, e esse arquivo não existe.

**A página de projetos é fina e está no índice.** O conteúdo é “em breve”. O sitemap a inclui com prioridade menor.

**O idioma da tag e o do `hreflang` divergem.** A tag usa `lang="pt"`. O `hreflang` usa `pt-BR`.

**Pipelines do GitHub Pages.** Os três workflows foram removidos. O endereço `berhartdev.github.io` deixa de receber build novo. A publicação antiga continua no ar até o Pages ser desligado no repositório.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
