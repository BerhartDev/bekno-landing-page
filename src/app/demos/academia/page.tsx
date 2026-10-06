import Image from 'next/image';
import { demoImage } from '@/lib/portfolio';
import Quiz from './_components/Quiz';
import Schedule from './_components/Schedule';
import TrialButton from './_components/TrialButton';
import { brl, PLANS } from './_data';

const MODALITIES = [
  { name: 'Força', text: 'Barra, anilha e progressão de carga com técnica.', image: 'academia/forca.jpg' },
  { name: 'Boxe', text: 'Do jab ao sparring, com luvas e manoplas da casa.', image: 'academia/boxe.jpg' },
  { name: 'Funcional', text: 'Circuitos curtos e intensos para o corpo todo.', image: 'academia/funcional.jpg' },
  { name: 'LPO', text: 'Levantamento olímpico para quem quer potência.', image: 'academia/mulher.jpg' },
];

const RESULTS = [
  { value: '-8kg', label: 'média em 16 semanas no plano Forja+' },
  { value: '92%', label: 'dos alunos renovam depois do 1º trimestre' },
  { value: '35', label: 'aulas em grupo por semana' },
];

const WORDS = ['Força', 'Boxe', 'Funcional', 'LPO', 'Mobilidade', 'Sem desculpa'];

const solid = 'inline-flex h-14 items-center bg-d-accent px-8 font-display text-xl uppercase tracking-wide text-d-accent-fg transition-transform hover:-translate-y-0.5';

export default function ForjaPage() {
  return (
    <div id="topo" className="relative overflow-x-clip">
      <header className="absolute inset-x-0 top-0 z-40">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-8 px-5 md:px-10">
          <a href="#topo" className="font-display text-3xl uppercase tracking-wide">
            Forja<span className="text-d-accent">.</span>
          </a>
          <nav aria-label="Principal" className="ml-auto hidden md:block">
            <ul className="flex gap-8 text-sm font-semibold uppercase tracking-[0.15em]">
              <li><a href="#modalidades" className="hover:text-d-accent">Modalidades</a></li>
              <li><a href="#grade" className="hover:text-d-accent">Grade</a></li>
              <li><a href="#planos" className="hover:text-d-accent">Planos</a></li>
            </ul>
          </nav>
          <a href="#quiz" className="ml-auto inline-flex h-11 items-center border border-d-fg px-5 text-sm font-semibold uppercase tracking-[0.15em] transition-colors hover:bg-d-fg hover:text-d-bg md:ml-0">
            Aula grátis
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative isolate flex min-h-[100svh] items-end">
          <Image
            src={demoImage('academia/hero.jpg')}
            alt="Atleta ao lado de uma barra carregada em academia escura."
            fill
            priority
            sizes="100vw"
            className="-z-10 object-cover object-[center_30%] grayscale"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-t from-d-bg via-d-bg/50 to-d-bg/30" />
          <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-40 md:px-10 md:pb-24">
            <p className="font-semibold uppercase tracking-[0.3em] text-d-accent">Centro de treinamento · Curitiba</p>
            <h1 className="mt-4 font-display text-[clamp(4.5rem,2rem+11vw,12rem)] uppercase leading-[0.85]">
              Treine pesado.
              <br />
              <span className="text-transparent [-webkit-text-stroke:2px_rgb(var(--d-accent))]">Viva leve.</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <TrialButton className={solid}>Agendar aula experimental</TrialButton>
              <p className="max-w-xs text-d-muted">Primeira aula grátis, com avaliação física e treinador do seu lado.</p>
            </div>
          </div>
        </section>

        {/* Faixa */}
        <div className="overflow-hidden bg-d-accent py-4 text-d-accent-fg" aria-hidden="true">
          <div className="demo-marquee flex w-max gap-10 whitespace-nowrap font-display text-3xl uppercase">
            {[...WORDS, ...WORDS, ...WORDS, ...WORDS].map((word, index) => (
              <span key={index} className="flex items-center gap-10">
                {word}
                <span>✕</span>
              </span>
            ))}
          </div>
        </div>

        {/* Modalidades */}
        <section id="modalidades" className="scroll-mt-10 py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <h2 className="font-display text-6xl uppercase leading-none md:text-8xl">Modalidades</h2>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {MODALITIES.map((item, index) => (
                <li key={item.name} className="group relative aspect-[3/4] overflow-hidden">
                  <Image
                    src={demoImage(item.image)}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-d-bg via-d-bg/20 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <span className="font-display text-xl text-d-accent">0{index + 1}</span>
                    <h3 className="font-display text-5xl uppercase">{item.name}</h3>
                    <p className="mt-2 text-sm text-d-fg/80">{item.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Quiz */}
        <section id="quiz" className="scroll-mt-10 pb-20 md:pb-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <Quiz />
          </div>
        </section>

        {/* Grade */}
        <section id="grade" className="scroll-mt-10 border-t border-d-line py-20 md:py-28">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="font-display text-6xl uppercase leading-none md:text-8xl">Grade da semana</h2>
              <p className="mt-6 max-w-sm text-lg text-d-muted">
                Turmas de até 14 pessoas. Reserve a vaga pelo app até 2 horas antes.
              </p>
            </div>
            <Schedule />
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="scroll-mt-10 bg-d-surface py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <h2 className="font-display text-6xl uppercase leading-none md:text-8xl">Planos</h2>
            <ul className="mt-12 grid gap-px bg-d-line lg:grid-cols-3">
              {PLANS.map((plan) => {
                const featured = plan.id === 'forja';
                return (
                  <li key={plan.id} className={`flex flex-col p-8 md:p-10 ${featured ? 'bg-d-accent text-d-accent-fg' : 'bg-d-bg'}`}>
                    <p className="font-display text-5xl uppercase">{plan.name}</p>
                    <p className={`mt-2 ${featured ? 'opacity-75' : 'text-d-muted'}`}>{plan.tagline}</p>
                    <p className="mt-8 font-display text-6xl">
                      {brl(plan.price)}
                      <span className="text-xl">/mês</span>
                    </p>
                    <ul className="mt-8 grid gap-3">
                      {plan.features.map((feature) => (
                        <li key={feature} className="flex gap-3 font-medium">
                          <span aria-hidden="true">→</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <TrialButton
                      plan={plan.name}
                      className={`mt-10 h-14 font-display text-xl uppercase tracking-wide transition-transform hover:-translate-y-0.5 ${
                        featured ? 'bg-d-bg text-d-fg' : 'border border-d-fg'
                      }`}
                    >
                      Quero esse
                    </TrialButton>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* Resultados + CTA */}
        <section className="relative isolate overflow-hidden py-24 md:py-36">
          <Image
            src={demoImage('academia/espaco.jpg')}
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover grayscale"
          />
          <div className="absolute inset-0 -z-10 bg-d-bg/80" />
          <div className="mx-auto max-w-7xl px-5 md:px-10">
            <dl className="grid gap-10 md:grid-cols-3">
              {RESULTS.map((item) => (
                <div key={item.value}>
                  <dt className="font-display text-7xl text-d-accent md:text-8xl">{item.value}</dt>
                  <dd className="mt-2 max-w-[16rem] text-d-fg/80">{item.label}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-xs text-d-muted">Números ilustrativos de um projeto conceito.</p>
            <div className="mt-20 border-t border-d-line pt-12">
              <h2 className="font-display text-6xl uppercase leading-none md:text-9xl">Bora começar?</h2>
              <TrialButton className={`${solid} mt-10`}>Agendar aula experimental</TrialButton>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-d-line py-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 md:px-10">
          <p className="font-display text-4xl uppercase">
            Forja<span className="text-d-accent">.</span>
          </p>
          <p className="text-sm uppercase tracking-[0.15em] text-d-muted">Seg a sex 6h–22h · Sáb 8h–14h</p>
        </div>
      </footer>
    </div>
  );
}
