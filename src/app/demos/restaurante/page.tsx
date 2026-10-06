import Image from 'next/image';
import { demoImage } from '@/lib/portfolio';
import Header from './_components/Header';
import Menu from './_components/Menu';
import Reservation from './_components/Reservation';
import { HOURS } from './_data';

const PILLARS = [
  { value: '12h', label: 'de fogo baixo na costela, do fim da tarde ao almoço seguinte' },
  { value: '100%', label: 'lenha de reflorestamento, sem gás e sem carvão industrial' },
  { value: '6', label: 'pequenos produtores fornecem carnes, legumes e queijos' },
];

export default function FornalhaPage() {
  return (
    <div id="topo">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[calc(100svh-6rem)] items-end overflow-hidden">
          <Image
            src={demoImage('restaurante/hero.jpg')}
            alt="Carne sendo virada na grelha sobre a brasa."
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-[center_40%]"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-d-bg via-d-bg/60 to-d-bg/10" />
          <div className="mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-d-accent">
              Cozinha de brasa · Vila Madalena, SP
            </p>
            <h1 className="mt-5 max-w-[12ch] font-display text-[clamp(3.5rem,2rem+7vw,8rem)] leading-[0.92]">
              Tudo passa <em className="text-d-accent">pelo fogo.</em>
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-d-fg/85">
              Carnes de pequenos produtores, legumes da estação e um forno a lenha que não apaga desde 2019.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#cardapio"
                className="inline-flex h-14 items-center rounded-full bg-d-accent px-7 font-semibold text-d-accent-fg transition-transform hover:-translate-y-0.5"
              >
                Pedir agora
              </a>
              <a
                href="#reservas"
                className="inline-flex h-14 items-center rounded-full border border-d-fg/40 px-7 font-semibold transition-colors hover:border-d-fg hover:bg-d-fg hover:text-d-bg"
              >
                Reservar mesa
              </a>
            </div>
          </div>
        </section>

        {/* A casa */}
        <section id="casa" className="scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-[1fr_1.1fr] md:gap-20 md:px-8">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
              <Image
                src={demoImage('restaurante/chef.jpg')}
                alt="Cozinheiro diante das chamas na cozinha."
                fill
                sizes="(min-width: 768px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-d-accent">A casa</p>
              <h2 className="mt-3 font-display text-5xl leading-[1.02] md:text-6xl">
                Uma cozinha sem fogão. Só lenha, brasa e paciência.
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-d-muted">
                A Fornalha nasceu de um quintal com churrasqueira e virou um salão de 60 lugares em volta de uma
                parrilla aberta. O cardápio muda com o que chega dos produtores toda terça.
              </p>
              <dl className="mt-10 grid gap-6 border-t border-d-line pt-8 sm:grid-cols-3">
                {PILLARS.map((pillar) => (
                  <div key={pillar.value}>
                    <dt className="font-display text-4xl text-d-accent">{pillar.value}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-d-muted">{pillar.label}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        <Menu />

        {/* Ambiente */}
        <section id="ambiente" className="scroll-mt-20 border-t border-d-line py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-d-accent">Ambiente</p>
            <h2 className="mt-3 max-w-xl font-display text-5xl leading-none md:text-6xl">
              Luz baixa, mesa longa, conversa sem pressa.
            </h2>
            <div className="mt-12 grid gap-4 md:grid-cols-3 md:grid-rows-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl md:col-span-2 md:row-span-2 md:aspect-auto">
                <Image
                  src={demoImage('restaurante/salao.jpg')}
                  alt="Salão do restaurante com luminárias âmbar."
                  fill
                  sizes="(min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={demoImage('restaurante/balcao.jpg')}
                  alt="Mesas do salão em penumbra."
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                <Image
                  src={demoImage('restaurante/bar.jpg')}
                  alt="Balcão do bar com banquetas."
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reservas */}
        <section id="reservas" className="scroll-mt-20 border-t border-d-line py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-d-accent">Reservas</p>
              <h2 className="mt-3 font-display text-5xl leading-none md:text-6xl">Guardamos a sua mesa.</h2>
              <p className="mt-6 text-lg leading-relaxed text-d-muted">
                Reservas até as 21h30. Depois disso, a casa recebe por ordem de chegada no balcão.
              </p>
              <dl className="mt-10 divide-y divide-d-line border-y border-d-line">
                {HOURS.map((row) => (
                  <div key={row.days} className="flex flex-wrap justify-between gap-2 py-4">
                    <dt>{row.days}</dt>
                    <dd className="text-d-muted">{row.time}</dd>
                  </div>
                ))}
              </dl>
              <address className="mt-8 not-italic leading-relaxed text-d-muted">
                Rua das Brasas, 214 · Vila Madalena
                <br />
                São Paulo, SP
              </address>
            </div>
            <Reservation />
          </div>
        </section>
      </main>

      <footer className="border-t border-d-line pb-28 pt-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-5 md:px-8">
          <p className="font-display text-6xl leading-none md:text-8xl">
            Fornalha<span className="text-d-accent">.</span>
          </p>
          <p className="text-sm text-d-muted">Cozinha de brasa desde 2019</p>
        </div>
      </footer>
    </div>
  );
}
