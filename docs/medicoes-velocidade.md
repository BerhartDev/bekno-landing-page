# Medições de velocidade

O selo "Este site abre em {s} segundos no celular" (`method.speedBadge`, em `src/components/sections/Method.tsx`) só aparece quando `SITE.loadTimeSeconds` em `src/lib/site.ts` é maior que 0. Esse número precisa vir de uma medição real do site publicado. Não preencha com estimativa nem com medição local.

## Como medir

1. **PageSpeed Insights (celular).** Abra https://pagespeed.web.dev, cole `https://bekno.com.br/` e clique em **Analisar**. Use a aba **Celular**. Anote:
   - a data;
   - a nota de desempenho (0 a 100);
   - o tempo de "Largest Contentful Paint" (LCP): é o momento em que o maior elemento da tela aparece, e é o melhor retrato de "quando o site abriu".
   Faça 3 medições e fique com a mais lenta.
2. **Vercel Speed Insights.** No painel da Vercel, abra o projeto → **Speed Insights** → filtro **Mobile**. Ali estão os tempos de visitantes reais (precisa de alguns dias de tráfego). Anote o LCP do percentil 75 (P75).
3. **Registre** a medição na tabela abaixo.
4. **Preencha** `SITE.loadTimeSeconds` com o maior dos dois tempos (PageSpeed e Vercel), arredondado **para cima** com uma casa decimal. Exemplo: 2,31 s → `2.4`. Use ponto no código; o site mostra vírgula em PT/ES/FR e ponto em EN.
5. Repita depois de mudanças grandes (novas seções, imagens, scripts) e atualize o valor se piorar.

## Registro

| Data | Fonte | Endereço | Nota | LCP (celular) | Observação |
|------|-------|----------|------|---------------|------------|
| 2026-10-31 | Lighthouse 12.8.2 local (celular simulado) | `http://localhost:4173/` | 92 | 3,3 s | **Medição local, não usar no site.ts.** Build com `VERCEL=1`, `out/` servido com `npx serve`, Chromium do Playwright headless. FCP 1,4 s · Speed Index 1,4 s · TBT 60 ms · CLS 0 · TTI 3,5 s. Já com as imagens em WebP. |

## Como repetir a medição local

Serve para comparar antes e depois de uma mudança. Não substitui a medição do site publicado.

```bash
VERCEL=1 npm run build          # build sem o prefixo do GitHub Pages
npx serve out -p 4173           # em outro terminal
CHROME_PATH=<caminho do Chrome> npx lighthouse http://localhost:4173/ \
  --form-factor=mobile --only-categories=performance \
  --chrome-flags="--headless=new"
```
