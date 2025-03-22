# BEKNO Landing Page

Este é o site institucional da BEKNO, desenvolvido com Next.js 14, TypeScript e Tailwind CSS.

## Tecnologias Utilizadas

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- GitHub Actions (CI/CD)

## Configuração do GitHub Pages

Para configurar o deploy automático no GitHub Pages:

1. No repositório do GitHub, vá para Settings > Pages
2. Em "Source", selecione "GitHub Actions"
3. Certifique-se de que o repositório tem as permissões necessárias:
   - Vá para Settings > Actions > General
   - Em "Workflow permissions", selecione "Read and write permissions"

## Desenvolvimento Local

Para rodar o projeto localmente:

```bash
# Instalar dependências
npm install

# Rodar o servidor de desenvolvimento
npm run dev
```

O site estará disponível em [http://localhost:3000](http://localhost:3000)

## Build e Deploy

O site é automaticamente construído e deployado para o GitHub Pages quando:

- Uma push é feita para a branch `main`
- Uma workflow é manualmente disparada

Para fazer o deploy manualmente:

1. Vá para a aba "Actions" no GitHub
2. Selecione o workflow "Deploy to GitHub Pages"
3. Clique em "Run workflow"

## Estrutura do Projeto

```
bekno-landing-page/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── public/
│   └── about-illustration.svg
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── ScrollButton.tsx
├── next.config.js
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── tsconfig.json
```

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
