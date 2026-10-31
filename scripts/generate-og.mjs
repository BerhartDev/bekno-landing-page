// Generates the share images (Open Graph) in public/og/: default.png plus one per main page and language.
// Satori turns the text into vector paths with the site's own fonts, so the result is the same on any
// machine (including the Vercel build, which may not have fonts installed). Sharp renders the PNG.
import { mkdir, readFile } from 'node:fs/promises';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import satori from 'satori';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'public', 'og');
const WIDTH = 1200;
const HEIGHT = 630;
const COLORS = { bg: '#0b0b0b', surface: '#161616', fg: '#ededed', muted: '#a1a1a1', line: '#2b2b2b' };
const LOCALES = ['pt', 'en', 'es', 'fr'];
const COVERS = ['fornalha/hero.webp', 'mare-atelier/hero.webp', 'alvea/sorriso.webp'];

// Page key (used by buildPageMetadata in src/lib/seo.ts) -> title from the translations.
const PAGES = {
  home: (m) => m.hero.kicker,
  projetos: (m) => m.projects.title,
  orcamento: (m) => m.navigation.quote,
  sobre: (m) => m.navigation.about,
  design: (m) => m.navigation.design,
  marketing: (m) => m.navigation.marketing,
};

const font = (pkg, file) => readFile(join(root, 'node_modules', '@fontsource', pkg, 'files', file));
const fonts = [
  { name: 'Schibsted Grotesk', weight: 700, style: 'normal', data: await font('schibsted-grotesk', 'schibsted-grotesk-latin-700-normal.woff') },
  { name: 'Schibsted Grotesk', weight: 400, style: 'normal', data: await font('schibsted-grotesk', 'schibsted-grotesk-latin-400-normal.woff') },
  { name: 'IBM Plex Mono', weight: 400, style: 'normal', data: await font('ibm-plex-mono', 'ibm-plex-mono-latin-400-normal.woff') },
];

// The covers are composited with sharp at exact positions (right side of the card), each with a 1px border.
const COVER = { width: 320, height: 240 };
const MONTAGE = { left: WIDTH - 72 - 440, top: (HEIGHT - 420) / 2 };
const SLOTS = [
  { left: 120, top: 0 },
  { left: 0, top: 90 },
  { left: 110, top: 180 },
];
const covers = await Promise.all(
  [COVERS[2], COVERS[1], COVERS[0]].map((cover) =>
    sharp(join(root, 'public', 'portfolio', cover))
      .resize(COVER.width - 2, COVER.height - 2, { fit: 'cover' })
      .extend({ top: 1, bottom: 1, left: 1, right: 1, background: COLORS.line })
      .toBuffer(),
  ),
);
const montage = covers.map((input, index) => ({
  input,
  left: MONTAGE.left + SLOTS[index].left,
  top: MONTAGE.top + SLOTS[index].top,
}));

const h = (type, style, children) => ({ type, props: { style, children } });

function card({ label, title, titleSize, tagline }) {
  return h(
    'div',
    {
      display: 'flex',
      width: WIDTH,
      height: HEIGHT,
      padding: 72,
      backgroundColor: COLORS.bg,
      color: COLORS.fg,
      fontFamily: 'Schibsted Grotesk',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
    },
    [
      h('div', { display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28, width: 560, flexShrink: 0 }, [
        label ? h('div', { fontFamily: 'IBM Plex Mono', fontSize: 26, color: COLORS.muted, letterSpacing: 1 }, label) : null,
        h('div', { fontSize: titleSize, fontWeight: 700, lineHeight: 1.04, letterSpacing: -2 }, title),
        h('div', { fontSize: 30, lineHeight: 1.35, color: COLORS.muted }, tagline),
      ].filter(Boolean)),
      // Placeholder for the covers composited by sharp.
      h('div', { width: 440, height: 420, flexShrink: 0 }),
    ],
  );
}

async function render(node, file) {
  const svg = await satori(node, { width: WIDTH, height: HEIGHT, fonts });
  const target = join(outDir, file);
  await mkdir(dirname(target), { recursive: true });
  await sharp(Buffer.from(svg)).composite(montage).png({ compressionLevel: 9, palette: true, quality: 90, dither: 0.6 }).toFile(target);
  console.log(`og/${file}`);
}

const messages = Object.fromEntries(
  await Promise.all(
    LOCALES.map(async (locale) => [locale, JSON.parse(await readFile(join(root, 'src', 'locales', `${locale}.json`), 'utf8'))]),
  ),
);

await render(card({ title: 'BEKNO', titleSize: 132, tagline: messages.pt.footer.tagline }), 'default.png');

for (const locale of LOCALES) {
  for (const [page, title] of Object.entries(PAGES)) {
    const text = title(messages[locale]);
    await render(
      card({ label: 'BEKNO', title: text, titleSize: text.length > 30 ? 60 : 96, tagline: messages[locale].footer.tagline }),
      `${locale}/${page}.png`,
    );
  }
}
