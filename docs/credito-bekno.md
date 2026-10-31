# Crédito BEKNO nos sites de clientes

Uma linha discreta no rodapé do site do cliente: **"Site criado por BEKNO"**, com link para o site da BEKNO. O link leva parâmetros de rastreamento (UTM) para sabermos, no painel de visitas, de qual cliente veio cada visitante.

Endereço do link:

```
https://bekno.com.br/?utm_source=credito-rodape&utm_medium=referral&utm_campaign={slug-do-cliente}
```

`{slug-do-cliente}` é o nome do cliente em letras minúsculas, sem acento e com hífen no lugar dos espaços. Exemplo: "Padaria São João" → `padaria-sao-joao`.

## 1. HTML + CSS puro

Não depende de nada: funciona em qualquer site (WordPress, HTML simples, construtores de site). Troque `SLUG-DO-CLIENTE` pelo slug do cliente. No HTML, o `&` do endereço é escrito `&amp;`.

### Fundo claro

```html
<!-- Crédito BEKNO (fundo claro) -->
<style>
  .bekno-credit{margin:0;padding:12px 0;font:400 13px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-align:center;color:#5e5e5e}
  .bekno-credit a{color:inherit;text-decoration:none}
  .bekno-credit a:hover,.bekno-credit a:focus-visible{text-decoration:underline;text-underline-offset:3px}
  .bekno-credit strong{font-weight:700;letter-spacing:.04em;color:#0a0a0a}
</style>
<p class="bekno-credit">
  <a href="https://bekno.com.br/?utm_source=credito-rodape&amp;utm_medium=referral&amp;utm_campaign=SLUG-DO-CLIENTE" target="_blank" rel="noopener">Site criado por <strong>BEKNO</strong></a>
</p>
<!-- Fim do crédito BEKNO -->
```

### Fundo escuro

```html
<!-- Crédito BEKNO (fundo escuro) -->
<style>
  .bekno-credit--dark{margin:0;padding:12px 0;font:400 13px/1.4 system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;text-align:center;color:#a1a1a1}
  .bekno-credit--dark a{color:inherit;text-decoration:none}
  .bekno-credit--dark a:hover,.bekno-credit--dark a:focus-visible{text-decoration:underline;text-underline-offset:3px}
  .bekno-credit--dark strong{font-weight:700;letter-spacing:.04em;color:#ededed}
</style>
<p class="bekno-credit--dark">
  <a href="https://bekno.com.br/?utm_source=credito-rodape&amp;utm_medium=referral&amp;utm_campaign=SLUG-DO-CLIENTE" target="_blank" rel="noopener">Site criado por <strong>BEKNO</strong></a>
</p>
<!-- Fim do crédito BEKNO -->
```

As classes começam com `bekno-credit` para não colidir com o CSS do site do cliente. Os comentários `<!-- Crédito BEKNO -->` e `<!-- Fim do crédito BEKNO -->` marcam o trecho, para achar e remover depois.

## 2. Componente React/TSX (Next.js)

Salve como `components/BeknoCredit.tsx` no projeto do cliente. Usa só estilos inline, então funciona com ou sem Tailwind.

```tsx
import type { CSSProperties } from 'react';

type BeknoCreditProps = {
  /** Nome do cliente no link de rastreamento, ex.: "padaria-sao-joao". */
  slug: string;
  /** Cor do fundo onde o crédito fica. */
  variant?: 'light' | 'dark';
};

const COLORS = {
  light: { text: '#5e5e5e', brand: '#0a0a0a' },
  dark: { text: '#a1a1a1', brand: '#ededed' },
} as const;

/** Linha "Site criado por BEKNO" para o rodapé de sites de clientes. */
export default function BeknoCredit({ slug, variant = 'light' }: BeknoCreditProps) {
  const colors = COLORS[variant];
  const href = `https://bekno.com.br/?utm_source=credito-rodape&utm_medium=referral&utm_campaign=${encodeURIComponent(slug)}`;

  const wrapper: CSSProperties = {
    margin: 0,
    padding: '12px 0',
    font: '400 13px/1.4 system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
    textAlign: 'center',
    color: colors.text,
  };

  return (
    <p style={wrapper}>
      <a href={href} target="_blank" rel="noopener" style={{ color: 'inherit', textDecoration: 'none' }}>
        Site criado por <strong style={{ fontWeight: 700, letterSpacing: '0.04em', color: colors.brand }}>BEKNO</strong>
      </a>
    </p>
  );
}
```

Uso no rodapé:

```tsx
<BeknoCredit slug="padaria-sao-joao" variant="dark" />
```

## 3. Como inserir no rodapé

1. Veja a cor do fundo do rodapé do cliente: fundo claro usa a variação clara; fundo escuro, a escura.
2. Monte o slug do cliente (minúsculas, sem acento, hífens).
3. **Site em HTML ou construtor de sites:** cole o trecho de HTML no fim do rodapé, depois do texto de direitos autorais. No WordPress, use um bloco "HTML personalizado" no rodapé.
4. **Site em Next.js/React:** copie o componente para o projeto e coloque `<BeknoCredit slug="..." variant="..." />` no fim do componente de rodapé.
5. Troque `SLUG-DO-CLIENTE` (HTML) ou o `slug` (React) pelo slug do cliente.
6. Abra o site publicado, clique no crédito e confira se a página da BEKNO abre numa nova aba com `utm_campaign=` + o slug no endereço.

## 4. Como remover (cliente que pediu sigilo)

Alguns clientes preferem não mostrar quem fez o site. Nesse caso o crédito não entra, ou sai se já estiver lá:

- **HTML:** apague tudo entre `<!-- Crédito BEKNO` e `<!-- Fim do crédito BEKNO -->`, inclusive as duas linhas de comentário e o bloco `<style>`.
- **React:** apague a linha `<BeknoCredit ... />` e o `import` dela. Se ninguém mais usa o componente, apague o arquivo `BeknoCredit.tsx`.
- Publique de novo e confira que a linha sumiu também no celular.

Registre na ficha do cliente que ele pediu sigilo, para o crédito não voltar numa atualização futura. Esse pedido também vale para o portfólio: o projeto só aparece na BEKNO como versão de demonstração anonimizada (regra 4 do CLAUDE.md).
