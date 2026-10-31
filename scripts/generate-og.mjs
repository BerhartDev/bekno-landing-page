// Generates the share images (Open Graph) in public/og/: default.png plus one per main page and language.
// Style: a capture of the BEKNO site itself (header, page title, project cards) in a white window with a
// soft shadow, without text laid over it. Satori turns the text into vector paths with the site's own
// fonts, so the result is the same on any machine (including the Vercel build). Sharp renders the PNG.
import { mkdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'og');
const WIDTH = 1200;
const HEIGHT = 630;
// Light theme tokens from src/app/globals.css.
const COLORS = { page: '#ffffff', bg: '#fafafa', fg: '#0a0a0a', muted: '#5e5e5e', line: '#d9d9d9' };
const LOCALES = ['pt', 'en', 'es', 'fr'];
// Same slugs, covers and site types as src/lib/portfolio.ts.
const PROJECTS = [
  { slug: 'fornalha', cover: 'fornalha/hero.webp', siteType: 'institutional' },
  { slug: 'mare-atelier', cover: 'mare-atelier/hero.webp', siteType: 'store' },
  { slug: 'alvea', cover: 'alvea/sorriso.webp', siteType: 'institutional' },
];
const COVER_HEIGHT = 250;

// Page key (used by buildPageMetadata in src/lib/seo.ts) -> label and title from the translations.
const PAGES = {
  home: (m) => ({ label: m.hero.kicker, title: m.hero.headline }),
  projetos: (m) => ({ label: m.projects.title, title: m.projects.subtitle }),
  orcamento: (m) => ({ label: m.navigation.quote, title: m.quote.title }),
  sobre: (m) => ({ label: m.navigation.about, title: m.footer.tagline }),
  design: (m) => ({ label: m.navigation.design, title: m.footer.tagline }),
  marketing: (m) => ({ label: m.navigation.marketing, title: m.footer.tagline }),
};

const font = (pkg, file) => readFile(join(root, 'node_modules', '@fontsource', pkg, 'files', file));
const fonts = [
  { name: 'Schibsted Grotesk', weight: 700, style: 'normal', data: await font('schibsted-grotesk', 'schibsted-grotesk-latin-700-normal.woff') },
  { name: 'Schibsted Grotesk', weight: 400, style: 'normal', data: await font('schibsted-grotesk', 'schibsted-grotesk-latin-400-normal.woff') },
  { name: 'IBM Plex Mono', weight: 400, style: 'normal', data: await font('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff') },
];

// Satori takes JPEG/PNG data URIs; the covers are WebP, so they are converted in memory.
const covers = await Promise.all(
  PROJECTS.map(async ({ cover }) => {
    const jpeg = await sharp(join(root, 'public', 'portfolio', cover))
      .resize(720, COVER_HEIGHT * 2, { fit: 'cover' })
      .jpeg({ quality: 82 })
      .toBuffer();
    return `data:image/jpeg;base64,${jpeg.toString('base64')}`;
  }),
);

const h = (type, style, children) => ({ type, props: { style: { display: 'flex', ...style }, children } });
const mono = (text, style = {}) => h('div', { fontFamily: 'IBM Plex Mono', fontSize: 15, letterSpacing: 0.6, ...style }, text);

// The fonts' latin subset has no "→", so the CTA arrow is drawn as SVG.
const arrow = {
  type: 'svg',
  props: {
    width: 14,
    height: 14,
    viewBox: '0 0 14 14',
    fill: 'none',
    stroke: COLORS.fg,
    strokeWidth: 1.4,
    children: [{ type: 'path', props: { d: 'M1 7h11M8 3l4 4-4 4' } }],
  },
};

function header(m) {
  const nav = [m.navigation.services, m.navigation.method, m.navigation.projects];
  return h(
    'div',
    { alignItems: 'center', justifyContent: 'space-between', height: 64, padding: '0 36px', borderBottom: `1px solid ${COLORS.line}` },
    [
      h('div', { alignItems: 'center', gap: 28 }, [
        mono('BEKNO', { fontSize: 17, color: COLORS.fg }),
        ...nav.map((item) => mono(item, { color: COLORS.muted })),
      ]),
      h('div', { alignItems: 'center', gap: 12 }, [
        mono(`${m.locale.toUpperCase()} ↓`, { border: `1px solid ${COLORS.line}`, padding: '8px 12px', color: COLORS.fg }),
        h('div', { alignItems: 'center', gap: 10, border: `1px solid ${COLORS.fg}`, padding: '8px 14px' }, [
          mono(m.navigation.cta.toUpperCase(), { color: COLORS.fg }),
          arrow,
        ]),
      ]),
    ],
  );
}

function projectCard(m, project, cover) {
  const niche = m.projects.items[project.slug].niche;
  const siteType = m.projects.siteTypes[project.siteType];
  return h('div', { flexDirection: 'column', flex: 1, backgroundColor: COLORS.bg }, [
    { type: 'img', props: { src: cover, height: COVER_HEIGHT, style: { width: '100%', height: COVER_HEIGHT, objectFit: 'cover' } } },
    h('div', { flexDirection: 'column', gap: 6, padding: '12px 14px', borderTop: `1px solid ${COLORS.line}` }, [
      mono(`${siteType} · ${niche}`.toUpperCase(), { fontSize: 12, color: COLORS.muted }),
      mono(m.projects.badge.toUpperCase(), { fontSize: 12, color: COLORS.fg }),
    ]),
  ]);
}

function card(m, { label, title }) {
  const window = h(
    'div',
    {
      flexDirection: 'column',
      width: WIDTH - 64,
      height: HEIGHT,
      backgroundColor: COLORS.bg,
      border: `1px solid ${COLORS.line}`,
      borderRadius: '6px 6px 0 0',
      boxShadow: '0 12px 32px rgba(10, 10, 10, 0.12), 0 2px 6px rgba(10, 10, 10, 0.06)',
      overflow: 'hidden',
      color: COLORS.fg,
      fontFamily: 'Schibsted Grotesk',
    },
    [
      header(m),
      h('div', { flexDirection: 'column', padding: '30px 36px 0', gap: 14 }, [
        mono(label, { color: COLORS.muted }),
        h('div', { fontSize: 46, fontWeight: 700, lineHeight: 1.05, letterSpacing: -1.5, maxWidth: 900 }, title),
      ]),
      h(
        'div',
        { gap: 1, margin: '28px 36px 0', backgroundColor: COLORS.line, border: `1px solid ${COLORS.line}` },
        PROJECTS.map((project, index) => projectCard(m, project, covers[index])),
      ),
    ],
  );

  return h(
    'div',
    { width: WIDTH, height: HEIGHT, backgroundColor: COLORS.page, alignItems: 'flex-start', justifyContent: 'center', paddingTop: 16 },
    [window],
  );
}

async function render(node, file) {
  const svg = await satori(node, { width: WIDTH, height: HEIGHT, fonts });
  const target = join(outDir, file);
  await mkdir(dirname(target), { recursive: true });
  await sharp(Buffer.from(svg)).png({ compressionLevel: 9, palette: true, quality: 90, dither: 0.6 }).toFile(target);
  console.log(`og/${file}`);
}

const messages = Object.fromEntries(
  await Promise.all(
    LOCALES.map(async (locale) => {
      const json = JSON.parse(await readFile(join(root, 'src', 'locales', `${locale}.json`), 'utf8'));
      return [locale, { ...json, locale }];
    }),
  ),
);

await render(card(messages.pt, { label: 'BEKNO', title: messages.pt.footer.tagline }), 'default.png');

for (const locale of LOCALES) {
  for (const [page, copy] of Object.entries(PAGES)) {
    await render(card(messages[locale], copy(messages[locale])), `${locale}/${page}.png`);
  }
}
