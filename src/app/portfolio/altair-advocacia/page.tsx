import Image from 'next/image';
import { demoImage } from '@/lib/portfolio';
import Areas from './_components/Areas';
import Intake from './_components/Intake';

const PARTNERS = [
  { name: 'Eduardo Altair', role: 'Sócio fundador · Empresarial e tributário', image: 'altair-advocacia/socio-1.jpg' },
  { name: 'Beatriz Lemos', role: 'Sócia · Contratos e LGPD', image: 'altair-advocacia/socio-2.jpg' },
  { name: 'Henrique Sato', role: 'Sócio · Trabalhista empresarial', image: 'altair-advocacia/socio-3.jpg' },
];

const STEPS = [
  { title: 'Triagem', text: 'Você descreve o caso pelo site e indicamos o advogado da área em até 24 horas úteis.' },
  { title: 'Reunião inicial', text: 'Conversa de até 40 minutos, presencial ou por vídeo, para entender o cenário.' },
  { title: 'Proposta', text: 'Estratégia, prazos e honorários por escrito, antes de qualquer compromisso.' },
  { title: 'Acompanhamento', text: 'Relatórios periódicos e um canal direto com quem cuida do seu caso.' },
];

const ARTICLES = [
  { date: 'Mar 2025', area: 'Tributário', title: 'O que muda para pequenas empresas com a reforma tributária' },
  { date: 'Fev 2025', area: 'Empresarial', title: 'Acordo de sócios: cinco cláusulas que evitam brigas futuras' },
  { date: 'Jan 2025', area: 'Contratos', title: 'LGPD na prática: o mínimo que o seu site precisa ter' },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.3em] text-d-accent">
      <span className="h-px w-10 bg-d-accent" aria-hidden="true" />
      {children}
    </p>
  );
}

export default function AltairPage() {
  return (
    <div id="topo">
      <header className="sticky top-0 z-40 border-b border-d-line bg-d-bg/95 backdrop-blur">
        <div className="mx-auto flex h-20 max-w-6xl items-center gap-8 px-5 md:px-8">
          <a href="#topo" className="flex items-center gap-3">
            <span className="text-2xl text-d-accent" aria-hidden="true">
              ✦
            </span>
            <span className="leading-none">
              <span className="block font-display text-2xl font-semibold tracking-[0.25em]">ALTAIR</span>
              <span className="block text-[10px] uppercase tracking-[0.45em] text-d-muted">Advocacia</span>
            </span>
          </a>
          <nav aria-label="Principal" className="ml-auto hidden lg:block">
            <ul className="flex gap-8 text-sm text-d-muted">
              <li><a href="#atuacao" className="hover:text-d-fg">Atuação</a></li>
              <li><a href="#escritorio" className="hover:text-d-fg">O escritório</a></li>
              <li><a href="#artigos" className="hover:text-d-fg">Artigos</a></li>
            </ul>
          </nav>
          <a
            href="#triagem"
            className="ml-auto inline-flex h-11 items-center border border-d-accent px-5 text-sm font-semibold text-d-accent transition-colors hover:bg-d-accent hover:text-d-accent-fg lg:ml-0"
          >
            <span className="sm:hidden">Contato</span>
            <span className="hidden sm:inline">Fale com um advogado</span>
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-[1.1fr_0.9fr] md:px-8">
            <div>
              <Eyebrow>Desde 2007 · São Paulo</Eyebrow>
              <h1 className="mt-8 font-display text-[clamp(3rem,2rem+4.4vw,5.75rem)] font-medium leading-[1]">
                Direito empresarial com <em className="text-d-accent">clareza</em> e estratégia.
              </h1>
              <p className="mt-8 max-w-lg text-lg leading-relaxed text-d-muted">
                Assessoria jurídica para empresas de médio porte e seus sócios. Menos juridiquês, mais decisões bem
                tomadas.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#triagem"
                  className="inline-flex h-14 items-center bg-d-accent px-8 font-semibold uppercase tracking-[0.15em] text-d-accent-fg transition-opacity hover:opacity-90"
                >
                  Descrever meu caso
                </a>
                <a href="#atuacao" className="inline-flex h-14 items-center px-2 font-semibold uppercase tracking-[0.15em] text-d-fg/80 hover:text-d-fg">
                  Áreas de atuação →
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -bottom-5 -right-5 left-5 top-5 border border-d-accent/60" aria-hidden="true" />
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={demoImage('altair-advocacia/hero.jpg')}
                  alt="Estante de madeira com livros jurídicos encadernados."
                  fill
                  priority
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Números */}
        <section className="border-y border-d-line">
          <dl className="mx-auto grid max-w-6xl grid-cols-2 px-5 md:grid-cols-4 md:px-8">
            {[
              ['18', 'anos de atuação'],
              ['340+', 'empresas assessoradas'],
              ['5', 'áreas especializadas'],
              ['24h', 'para o primeiro retorno'],
            ].map(([value, label], index) => (
              <div key={label} className={`py-10 ${index % 2 ? 'pl-6 md:pl-10' : ''} ${index ? 'md:border-l md:border-d-line md:pl-10' : ''}`}>
                <dt className="font-display text-5xl text-d-accent md:text-6xl">{value}</dt>
                <dd className="mt-2 text-sm uppercase tracking-[0.15em] text-d-muted">{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Atuação */}
        <section id="atuacao" className="scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Eyebrow>Áreas de atuação</Eyebrow>
            <h2 className="mb-12 mt-6 max-w-2xl font-display text-4xl font-medium leading-tight md:text-6xl">
              Um advogado especialista para cada frente do negócio.
            </h2>
            <Areas />
          </div>
        </section>

        {/* Escritório */}
        <section id="escritorio" className="scroll-mt-20 bg-d-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={demoImage('altair-advocacia/escritorio.jpg')}
                  alt="Sala de reuniões do escritório."
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <Eyebrow>O escritório</Eyebrow>
                <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-5xl">
                  Pequeno o bastante para conhecer o cliente. Técnico o bastante para grandes casos.
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-d-muted">
                  Cada cliente tem um sócio responsável e um canal direto com ele. Sem central de atendimento, sem
                  repetir a história a cada ligação.
                </p>
              </div>
            </div>

            <ul className="mt-20 grid gap-8 sm:grid-cols-3">
              {PARTNERS.map((person) => (
                <li key={person.name}>
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={demoImage(person.image)}
                      alt={`Retrato de ${person.name}.`}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                      className="object-cover grayscale-[40%]"
                    />
                  </div>
                  <p className="mt-5 font-display text-2xl">{person.name}</p>
                  <p className="mt-1 text-sm text-d-muted">{person.role}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Como funciona */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <Eyebrow>Como funciona</Eyebrow>
            <ol className="mt-12 grid gap-px bg-d-line md:grid-cols-4">
              {STEPS.map((step, index) => (
                <li key={step.title} className="bg-d-bg p-8 md:first:pl-0">
                  <span className="font-display text-5xl text-d-accent/70">{['I', 'II', 'III', 'IV'][index]}</span>
                  <h3 className="mt-6 font-display text-2xl">{step.title}</h3>
                  <p className="mt-3 leading-relaxed text-d-muted">{step.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Artigos */}
        <section id="artigos" className="scroll-mt-20 border-t border-d-line py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <Eyebrow>Artigos</Eyebrow>
                <h2 className="mt-6 font-display text-4xl font-medium md:text-5xl">Direito sem juridiquês.</h2>
              </div>
            </div>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {ARTICLES.map((article) => (
                <li key={article.title}>
                  <a href="#artigos" className="group flex h-full flex-col border border-d-line p-8 transition-colors hover:border-d-accent">
                    <p className="text-xs uppercase tracking-[0.2em] text-d-muted">
                      {article.date} · <span className="text-d-accent">{article.area}</span>
                    </p>
                    <h3 className="mt-6 flex-1 font-display text-2xl leading-snug">{article.title}</h3>
                    <span className="mt-8 text-sm font-semibold uppercase tracking-[0.15em] text-d-accent">
                      Ler artigo <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Triagem */}
        <section id="triagem" className="scroll-mt-20 bg-d-surface py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-5 md:grid-cols-[0.9fr_1.1fr] md:gap-20 md:px-8">
            <div>
              <Eyebrow>Triagem do caso</Eyebrow>
              <h2 className="mt-6 font-display text-4xl font-medium leading-tight md:text-5xl">
                Conte o essencial. A gente direciona para quem resolve.
              </h2>
              <p className="mt-6 leading-relaxed text-d-muted">
                O retorno vem do advogado da área, não de um atendente. Informações enviadas aqui são tratadas com
                sigilo profissional.
              </p>
              <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden md:block">
                <Image
                  src={demoImage('altair-advocacia/reuniao.jpg')}
                  alt="Advogada revisando um contrato com clientes."
                  fill
                  sizes="40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <Intake />
          </div>
        </section>
      </main>

      <footer className="border-t border-d-line py-12">
        <div className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-6 px-5 md:px-8">
          <div>
            <p className="font-display text-3xl font-semibold tracking-[0.25em]">ALTAIR</p>
            <p className="mt-2 text-sm text-d-muted">Av. Brigadeiro Faria Lima · São Paulo, SP</p>
          </div>
          <p className="text-xs uppercase tracking-[0.2em] text-d-muted">Advocacia empresarial · desde 2007</p>
        </div>
      </footer>
    </div>
  );
}
