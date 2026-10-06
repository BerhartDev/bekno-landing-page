import Image from 'next/image';
import { demoImage } from '@/lib/portfolio';
import { CartProvider } from './_components/Cart';
import CartDrawer from './_components/CartDrawer';
import Header from './_components/Header';
import Newsletter from './_components/Newsletter';
import Shop from './_components/Shop';

const PROMISES = [
  { title: 'Linho certificado', text: 'Fibra europeia com selo de origem, lavada para ficar macia desde o primeiro uso.' },
  { title: 'Feito em São Paulo', text: 'Cortado e costurado em ateliês parceiros do Bom Retiro, em pequenas tiragens.' },
  { title: 'Troca sem custo', text: 'A primeira troca é por nossa conta, em até 30 dias depois da entrega.' },
  { title: '6x sem juros', text: 'Parcele no cartão ou ganhe 5% de desconto no Pix.' },
];

export default function MarePage() {
  return (
    <CartProvider>
      <div id="topo">
        <Header />

        <main>
          {/* Hero */}
          <section className="mx-auto grid max-w-7xl gap-10 px-5 pt-10 md:grid-cols-[0.9fr_1.1fr] md:items-end md:gap-16 md:px-10 md:pt-16">
            <div className="order-2 pb-4 md:order-1 md:pb-20">
              <p className="text-[11px] uppercase tracking-[0.3em] text-d-muted">Coleção 01 · Verão lento</p>
              <h1 className="mt-6 font-display text-[clamp(3.5rem,2rem+6vw,7.5rem)] leading-[0.9]">
                Roupas que respiram com você.
              </h1>
              <p className="mt-8 max-w-sm leading-relaxed text-d-muted">
                Linho lavado, cortes amplos e tons de areia. Peças feitas em pequenas tiragens para durar mais de um
                verão.
              </p>
              <a
                href="#vitrine"
                className="mt-10 inline-flex h-14 items-center bg-d-fg px-8 text-xs uppercase tracking-[0.25em] text-d-bg transition-opacity hover:opacity-90"
              >
                Comprar a coleção
              </a>
            </div>
            <div className="relative order-1 aspect-[4/5] overflow-hidden md:order-2">
              <Image
                src={demoImage('moda/hero.jpg')}
                alt="Modelo usando camisa branca de linho."
                fill
                priority
                sizes="(min-width: 768px) 55vw, 100vw"
                className="object-cover object-top"
              />
            </div>
          </section>

          <Shop />

          {/* Lookbook */}
          <section id="lookbook" className="scroll-mt-24 bg-d-surface py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-10">
              <div className="grid gap-6 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-5 md:pt-24">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-d-muted">Lookbook</p>
                  <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-7xl">
                    O vento faz metade do trabalho.
                  </h2>
                  <p className="mt-6 max-w-sm leading-relaxed text-d-muted">
                    Fotografado no litoral norte, num fim de tarde de março. Tecidos que se mexem, sem pressa de chegar.
                  </p>
                  <div className="relative mt-12 aspect-[4/5] overflow-hidden">
                    <Image
                      src={demoImage('moda/look-drapeado.jpg')}
                      alt="Modelo com camisa branca e saia marrom entre tecidos."
                      fill
                      sizes="(min-width: 768px) 40vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:col-span-7 md:gap-8">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={demoImage('moda/look-giro.jpg')}
                      alt="Modelo girando com vestido longo bege."
                      fill
                      sizes="(min-width: 768px) 55vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="font-display text-3xl italic leading-snug md:ml-24 md:text-4xl">
                    “Vestir linho é aceitar o amassado como parte da roupa.”
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Atelier */}
          <section id="atelier" className="scroll-mt-24 py-20 md:py-28">
            <div className="mx-auto max-w-7xl px-5 md:px-10">
              <ul className="grid gap-10 border-y border-d-line py-12 sm:grid-cols-2 lg:grid-cols-4">
                {PROMISES.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-display text-2xl">{item.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-d-muted">{item.text}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-20 grid items-center gap-12 md:grid-cols-2 md:gap-20">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={demoImage('moda/arara.jpg')}
                    alt="Arara com peças em tons neutros."
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.3em] text-d-muted">Lista da Maré</p>
                  <h2 className="mt-5 font-display text-5xl leading-[0.95] md:text-6xl">10% na primeira compra.</h2>
                  <p className="mt-6 max-w-sm leading-relaxed text-d-muted">
                    Receba os lançamentos antes de todo mundo. Uma carta por mês, sem spam.
                  </p>
                  <Newsletter />
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="border-t border-d-line py-12">
          <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-between gap-6 px-5 md:px-10">
            <p className="font-display text-6xl tracking-[0.12em] md:text-8xl">MARÉ</p>
            <p className="text-xs uppercase tracking-[0.2em] text-d-muted">Moda em linho · São Paulo</p>
          </div>
        </footer>

        <CartDrawer />
      </div>
    </CartProvider>
  );
}
