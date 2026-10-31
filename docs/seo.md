# SEO do site BEKNO

## Como o sitemap é gerado

O arquivo `src/app/sitemap.ts` monta o `sitemap.xml` no build (`npm run build` gera `out/sitemap.xml`).

- As páginas vêm de `routing.pathnames` em `src/lib/i18n/routing.ts`. Cada caminho entra uma vez por idioma (pt, en, es, fr).
- A URL de cada entrada sai de `pageUrl(locale, path)` em `src/lib/seo.ts`. O PT fica na raiz (`/projetos/`), e os outros idiomas usam prefixo e endereço traduzido (`/en/projects/`).
- Prioridade: home 1 em PT e 0.8 nos outros idiomas, `/orcamento` 0.7, demais páginas 0.6. Todas com `changeFrequency: 'monthly'`.
- Para tirar uma rota do sitemap, coloque o caminho interno (em PT, ex.: `'/projetos'`) na lista `EXCLUDED`.
- As páginas legais (`/politica-de-privacidade` e `/termos-de-uso`) ficam fora enquanto `SITE.legalPagesReady` for `false` em `src/lib/site.ts`.

Uma página nova entra no sitemap sozinha assim que o caminho dela é adicionado em `routing.pathnames`. O domínio vem de `NEXT_PUBLIC_SITE_URL`, com `https://bekno.com.br` como padrão.

## Como enviar o sitemap no Google Search Console

1. Acesse https://search.google.com/search-console e entre com a conta da BEKNO.
2. Adicione a propriedade `bekno.com.br`. O tipo "Domínio" cobre http, https e subdomínios. A verificação é feita com um registro TXT no DNS.
3. Depois de verificada, abra **Indexação → Sitemaps**.
4. Em "Adicionar um novo sitemap", digite `sitemap.xml` (a URL completa fica `https://bekno.com.br/sitemap.xml`) e clique em **Enviar**.
5. O status deve virar "Processado" em alguns minutos ou horas. Se der erro, confira se `https://bekno.com.br/sitemap.xml` abre no navegador.

Não precisa reenviar a cada deploy: o Google relê o sitemap periodicamente. O `robots.txt` (`src/app/robots.ts`) também aponta para ele.

## Por que /portfolio/ fica fora do Google

As páginas em `/portfolio/` são versões de demonstração de projetos de clientes reais, com nomes, marcas, imagens e textos alterados. Se fossem indexadas, poderiam aparecer na busca como se fossem negócios reais.

São duas proteções:

- `robots.txt` tem `disallow: '/portfolio/'` (`src/app/robots.ts`), então os robôs não rastreiam essas páginas.
- Cada demonstração usa `demoMetadata` (`src/components/demos/DemoShell.tsx`), que define `robots: { index: false, follow: false }` (noindex). Assim elas ficam fora do índice mesmo se alguém linkar para elas.

Essas páginas também não entram no sitemap, porque não estão em `routing.pathnames`.
