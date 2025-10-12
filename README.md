# BEKNO Landing Page

Site institucional da BEKNO - Soluções Digitais para o Seu Negócio. Uma landing page moderna e responsiva desenvolvida com Next.js 14, TypeScript e Tailwind CSS, com suporte completo a internacionalização (i18n).

## 🚀 Tecnologias Utilizadas

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **next-intl** (Internacionalização)
- **React 18**
- **ESLint** (Linting)
- **GitHub Actions** (CI/CD)

## 🌍 Internacionalização

O site suporta múltiplos idiomas:
- **Português (pt)** - Idioma padrão
- **Inglês (en)**

### URLs Disponíveis
- `/` - Redireciona para `/pt/`
- `/pt/` - Site em português
- `/en/` - Site em inglês

## Configuração do GitHub Pages

Para configurar o deploy automático no GitHub Pages:

1. No repositório do GitHub, vá para Settings > Pages
2. Em "Source", selecione "GitHub Actions"
3. Certifique-se de que o repositório tem as permissões necessárias:
   - Vá para Settings > Actions > General
   - Em "Workflow permissions", selecione "Read and write permissions"

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

O site é automaticamente construído e deployado para o GitHub Pages quando:

- Uma push é feita para a branch `main`
- Uma workflow é manualmente disparada

Para fazer o deploy manualmente:

1. Vá para a aba "Actions" no GitHub
2. Selecione o workflow "Deploy to GitHub Pages"
3. Clique em "Run workflow"

## 📁 Estrutura do Projeto

```
bekno-landing-page/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── src/
│   ├── app/
│   │   ├── [locale]/          # Rotas internacionalizadas
│   │   │   ├── layout.tsx     # Layout com i18n
│   │   │   └── page.tsx       # Página principal
│   │   ├── globals.css        # Estilos globais
│   │   ├── layout.tsx         # Layout raiz
│   │   └── page.tsx           # Redirecionamento para /pt
│   ├── components/
│   │   ├── layout/            # Componentes de layout
│   │   │   ├── Header.tsx     # Cabeçalho com navegação
│   │   │   ├── Footer.tsx     # Rodapé
│   │   │   └── LanguageSwitcher.tsx
│   │   ├── sections/          # Seções da página
│   │   │   ├── Hero.tsx       # Seção principal
│   │   │   ├── About.tsx      # Sobre a empresa
│   │   │   ├── Features.tsx   # Serviços
│   │   │   ├── Plans.tsx      # Planos
│   │   │   ├── Testimonials.tsx
│   │   │   └── Contact.tsx    # Contato
│   │   ├── ui/                # Componentes UI
│   │   │   ├── Button.tsx
│   │   │   ├── Container.tsx
│   │   │   └── Heading.tsx
│   │   ├── ContactForm.tsx    # Formulário de contato
│   │   └── AboutIllustration.tsx
│   ├── lib/
│   │   └── i18n/              # Configuração i18n
│   │       ├── routing.ts
│   │       └── request.ts
│   └── locales/               # Traduções
│       ├── pt.json            # Português
│       └── en.json            # Inglês
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
- ✅ **Build Estático** - Export para GitHub Pages

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
