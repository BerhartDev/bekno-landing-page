# CLAUDE.md — Site BEKNO

## Mapa do repositório
- Stack: Next.js 14 (App Router) com output: 'export' (site estático), TypeScript, Tailwind CSS 3, next-intl 4, @vercel/analytics e @vercel/speed-insights.
- Hospedagem: Vercel (vercel.json com redirecionamentos); alternativa GitHub Pages via basePath em next.config.js. Links para /portfolio/* e assets usam NEXT_PUBLIC_BASE_PATH.
- Comandos: npm run dev · npm run build (gera out/) · npm run lint · npm run check:i18n. Não há testes automatizados.
- Rotas: PT na raiz em src/app/(pt)/ (page.tsx, projetos/, orcamento/). Outros idiomas em src/app/[locale]/page.tsx e src/app/[locale]/[slug]/page.tsx (mapa PAGES). Endereços traduzidos em routing.pathnames (src/lib/i18n/routing.ts).
- Portfólio: src/app/portfolio/<slug>/ com layout próprio src/components/demos/DemoShell.tsx (sem identidade BEKNO, sem NextIntlClientProvider, lang pt-BR). Dados em src/lib/portfolio.ts.
- Views: src/views/HomeView.tsx, ProjectsView.tsx, QuoteView.tsx.
- Seções da home: src/components/sections/ (Hero, Services, Portfolio, ChecklistSection, Method, SiteTypes, FinalCta).
- Layout: src/components/layout/LocaleShell.tsx (documento, Header, Footer, Analytics, SpeedInsights), Header.tsx, Footer.tsx, LanguageSwitcher.tsx, ThemeToggle.tsx.
- UI: src/components/ui/Section.tsx (seção com id, título e intro), Button.tsx, Container.tsx. Classes cta, link, field, field-label e tokens bg, surface, fg, muted, faint, line em src/app/globals.css e tailwind.config.js. Visual: tipografia mono para rótulos, bordas border-line, grades com gap-px bg-line, temas claro e escuro.
- Traduções: src/locales/pt.json, en.json, es.json, fr.json (mesmas chaves nos 4).
- Formulário: src/components/QuoteForm.tsx (WhatsApp wa.me e e-mail via Web3Forms, chave NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY) e src/lib/contact.ts (tipos, validação, limite de envios em localStorage).
- SEO: src/lib/seo.ts (buildPageMetadata, pageCopy, JSON-LD), src/components/seo/JsonLd.tsx, src/app/sitemap.ts, src/app/robots.ts.
- Dados da empresa: src/lib/site.ts (criado no próximo passo). Telefone, WhatsApp, e-mail, CNPJ, preços e prazos vêm SÓ de lá.

## Regras
1. Público leigo. Todo texto visível ao visitante é simples e focado no benefício. Proibido no site: LCP, Core Web Vitals, SEO, responsivo, SSL, backup, UI/UX, CMS, conversão, GEO, WAF, tráfego, funil, CTR, ROI.
2. Glossário obrigatório (esquerda → direita):
   - Responsivo → Funciona bem no celular
   - SEO → Aparecer no Google
   - Performance / LCP / Core Web Vitals → Site rápido, abre em X segundos
   - SSL / HTTPS → Cadeado de site seguro
   - Backup → Cópia de segurança
   - Hospedagem em nuvem → Seu site no ar, sem você se preocupar com servidor
   - Conversão → Visitante que vira cliente / pedido de orçamento
   - UI/UX → Site fácil de usar
   - CMS / painel → Você mesmo atualiza textos e fotos
   - GEO → Ser recomendado por inteligências artificiais como o ChatGPT
3. Nunca inventar dados (CNPJ, preços, prazos, números de clientes, notas de velocidade, depoimentos). Dado ausente = campo vazio ('' ou 0) em src/lib/site.ts, e o elemento que depende dele não é renderizado. Nada de placeholder visível em produção.
4. Privacidade: os projetos do portfólio são de clientes reais, mostrados em versões de demonstração com nomes, marcas, imagens e textos alterados. Nunca expor nomes reais de clientes. Nunca usar as palavras "fictício", "conceito" ou equivalentes para o portfólio.
5. Consistência visual: reutilizar Section, ChecklistSection, classes cta/link/field e os tokens de cor. Procurar componente parecido em src/components/ antes de criar outro.
6. Quatro idiomas sempre: todo texto novo entra em pt.json, en.json, es.json e fr.json com as mesmas chaves. PT é a referência; EN/ES/FR são traduções fiéis, também em linguagem leiga. Rodar npm run check:i18n.
7. Página nova: (a) caminho em routing.pathnames com endereço por idioma; (b) view em src/views/<Nome>View.tsx com setRequestLocale; (c) src/app/(pt)/<caminho>/page.tsx com generateMetadata → buildPageMetadata; (d) registrar no mapa PAGES de src/app/[locale]/[slug]/page.tsx; (e) título/descrição em pageCopy e JSON-LD em src/lib/seo.ts; (f) sitemap (automático depois do Prompt 03); (g) se fizer sentido, redirecionamentos em vercel.json.
8. Contato e dados da empresa vêm só de src/lib/site.ts. Nenhum telefone/e-mail fixo em componentes ou traduções.
9. Cookies: o site não grava cookies (Vercel Analytics e Speed Insights não usam). Se algum dia entrar Google Analytics, Meta Pixel ou Tag Manager, criar antes um banner de consentimento.
10. Ao terminar qualquer tarefa: npm run check:i18n, npm run lint, npm run build, e conferir em 375px e desktop, tema claro e escuro.
