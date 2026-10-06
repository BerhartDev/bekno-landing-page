import Image from 'next/image';
import { demoImage } from '@/lib/portfolio';
import Booking from './_components/Booking';

const TREATMENTS = [
  { title: 'Clareamento', text: 'Dentes até oito tons mais claros, com moldeira personalizada e acompanhamento.', mark: '✦' },
  { title: 'Lentes de contato dental', text: 'Lâminas finas de porcelana que corrigem cor, forma e pequenos espaços.', mark: '◐' },
  { title: 'Alinhadores invisíveis', text: 'Ortodontia sem bráquetes, com planejamento digital do sorriso final.', mark: '◠' },
  { title: 'Implantes', text: 'Reposição do dente com cirurgia guiada e prótese feita sob medida.', mark: '▲' },
  { title: 'Harmonização orofacial', text: 'Procedimentos suaves para equilibrar lábios, queixo e sorriso.', mark: '❋' },
  { title: 'Limpeza e check-up', text: 'Profilaxia, raio-x digital e plano de cuidado para a família inteira.', mark: '◎' },
];

const TEAM = [
  { name: 'Dr. Rafael Moura', role: 'Implantes e reabilitação', image: 'clinica/equipe-1.jpg' },
  { name: 'Dra. Helena Prado', role: 'Estética e lentes de porcelana', image: 'clinica/equipe-2.jpg' },
];

const REVIEWS = [
  { quote: 'Morria de medo de dentista. Saí da primeira consulta sem sentir nada e com um plano claro.', name: 'Camila R.' },
  { quote: 'O clareamento ficou natural, ninguém percebe que fiz, só que estou sorrindo mais.', name: 'Bruno L.' },
  { quote: 'Explicaram cada etapa das lentes com simulação no computador. Zero surpresa no resultado.', name: 'Marina S.' },
];

const HOURS = [
  { days: 'Segunda a sexta', time: '8h às 20h' },
  { days: 'Sábado', time: '8h às 13h' },
];

function Eyebrow({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full bg-d-accent/10 px-4 py-1.5 text-xs font-semibold text-d-accent">
      {children}
    </p>
  );
}

export default function AlveaPage() {
  return (
    <div id="topo">
      <header className="sticky top-0 z-40 bg-d-bg/85 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-6xl items-center gap-8 px-5 md:px-8">
          <a href="#topo" className="font-display text-3xl italic tracking-tight text-d-accent">
            alvéa
          </a>
          <nav aria-label="Principal" className="ml-auto hidden md:block">
            <ul className="flex gap-8 text-sm font-medium text-d-muted">
              <li><a href="#tratamentos" className="hover:text-d-fg">Tratamentos</a></li>
              <li><a href="#clinica" className="hover:text-d-fg">A clínica</a></li>
              <li><a href="#equipe" className="hover:text-d-fg">Equipe</a></li>
              <li><a href="#contato" className="hover:text-d-fg">Contato</a></li>
            </ul>
          </nav>
          <a
            href="#agendar"
            className="ml-auto inline-flex h-11 items-center rounded-full bg-d-accent px-5 text-sm font-semibold text-d-accent-fg md:ml-0"
          >
            Agendar
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div
            className="absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-d-accent/10 blur-3xl"
            aria-hidden="true"
          />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-10 md:grid-cols-2 md:px-8 md:pb-28 md:pt-16">
            <div>
              <Eyebrow>Odontologia & estética · Moema, SP</Eyebrow>
              <h1 className="mt-6 font-display text-[clamp(3rem,2rem+4.5vw,5.5rem)] font-light leading-[1] tracking-tight">
                Sorrir sem <em className="font-normal text-d-accent">medo</em> de dentista.
              </h1>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-d-muted">
                Uma clínica pensada para quem adia a consulta. Atendimento sem pressa, anestesia sem dor e um plano
                explicado antes de qualquer procedimento.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#agendar"
                  className="inline-flex h-14 items-center rounded-full bg-d-accent px-7 font-semibold text-d-accent-fg transition-transform hover:-translate-y-0.5"
                >
                  Agendar avaliação
                </a>
                <a href="#tratamentos" className="inline-flex h-14 items-center px-2 font-semibold underline-offset-4 hover:underline">
                  Ver tratamentos
                </a>
              </div>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3" aria-hidden="true">
                  {['C', 'B', 'M', 'J'].map((letter, index) => (
                    <span
                      key={letter}
                      className="grid h-10 w-10 place-items-center rounded-full border-2 border-d-bg text-sm font-bold text-d-accent-fg"
                      style={{ backgroundColor: ['#3f6b55', '#7a9b84', '#b8a07e', '#56705f'][index] }}
                    >
                      {letter}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-d-muted">
                  <strong className="text-d-fg">4,9 ★</strong> em mais de 600 avaliações
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden rounded-t-full rounded-b-[2.5rem]">
                <Image
                  src={demoImage('clinica/sorriso.jpg')}
                  alt="Paciente sorrindo."
                  fill
                  priority
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -left-4 bottom-10 max-w-[15rem] rounded-3xl bg-d-bg p-5 shadow-xl shadow-d-fg/10 md:-left-10">
                <p className="font-display text-xl">Primeira consulta</p>
                <p className="mt-1 text-sm text-d-muted">Avaliação completa com raio-x digital e plano por escrito.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Tratamentos */}
        <section id="tratamentos" className="scroll-mt-20 bg-d-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="max-w-2xl">
              <Eyebrow>Tratamentos</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
                Do check-up ao sorriso novo, no mesmo lugar.
              </h2>
            </div>
            <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {TREATMENTS.map((item) => (
                <li key={item.title} className="rounded-[1.75rem] bg-d-bg p-7 transition-transform hover:-translate-y-1">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-full bg-d-accent/10 text-lg text-d-accent"
                    aria-hidden="true"
                  >
                    {item.mark}
                  </span>
                  <h3 className="mt-6 font-display text-2xl">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-d-muted">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* A clínica */}
        <section id="clinica" className="scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2 md:gap-20 md:px-8">
            <div className="grid grid-cols-5 gap-4">
              <div className="relative col-span-3 aspect-[3/4] overflow-hidden rounded-[2rem]">
                <Image
                  src={demoImage('clinica/hero.jpg')}
                  alt="Consultório claro com cadeira odontológica."
                  fill
                  sizes="(min-width: 768px) 30vw, 60vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 grid gap-4">
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src={demoImage('clinica/recepcao.jpg')}
                    alt="Recepção com sofá e planta."
                    fill
                    sizes="(min-width: 768px) 20vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="relative overflow-hidden rounded-[2rem]">
                  <Image
                    src={demoImage('clinica/atendimento.jpg')}
                    alt="Dentista atendendo um paciente."
                    fill
                    sizes="(min-width: 768px) 20vw, 40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div>
              <Eyebrow>A clínica</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
                Luz natural, silêncio e tempo para conversar.
              </h2>
              <ul className="mt-8 grid gap-5">
                {[
                  ['Anestesia computadorizada', 'A dose entra devagar e sem a picada que todo mundo teme.'],
                  ['Planejamento digital', 'Você vê a simulação do resultado antes de começar.'],
                  ['Valores combinados', 'Orçamento por escrito, com parcelamento no cartão ou Pix.'],
                ].map(([title, text]) => (
                  <li key={title} className="flex gap-4">
                    <span className="mt-1 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-d-accent text-xs text-d-accent-fg" aria-hidden="true">
                      ✓
                    </span>
                    <div>
                      <p className="font-semibold">{title}</p>
                      <p className="mt-1 text-d-muted">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Equipe + depoimentos */}
        <section id="equipe" className="scroll-mt-20 bg-d-surface py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="grid gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
              <div>
                <Eyebrow>Equipe</Eyebrow>
                <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
                  Quem cuida do seu sorriso.
                </h2>
                <p className="mt-5 max-w-sm leading-relaxed text-d-muted">
                  Especialistas que atendem do começo ao fim do tratamento. Você não é passado de mão em mão.
                </p>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {TEAM.map((person) => (
                  <li key={person.name} className="overflow-hidden rounded-[2rem] bg-d-bg">
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={demoImage(person.image)}
                        alt={`Retrato de ${person.name}.`}
                        fill
                        sizes="(min-width: 768px) 25vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <p className="font-display text-xl">{person.name}</p>
                      <p className="mt-1 text-sm text-d-muted">{person.role}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <ul className="mt-16 grid gap-4 md:grid-cols-3">
              {REVIEWS.map((review) => (
                <li key={review.name} className="rounded-[1.75rem] bg-d-bg p-7">
                  <p className="text-d-accent" aria-label="5 de 5 estrelas">
                    ★★★★★
                  </p>
                  <blockquote className="mt-4 font-display text-xl font-light leading-snug">“{review.quote}”</blockquote>
                  <p className="mt-5 text-sm font-semibold">{review.name}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Agendamento */}
        <section id="agendar" className="scroll-mt-20 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:px-8">
            <div>
              <Eyebrow>Agendamento on-line</Eyebrow>
              <h2 className="mt-5 font-display text-4xl font-light leading-tight md:text-5xl">
                Escolha o horário em três toques.
              </h2>
              <p className="mt-5 max-w-sm leading-relaxed text-d-muted">
                A confirmação chega por WhatsApp. Se precisar remarcar, é só responder a mensagem.
              </p>
            </div>
            <Booking />
          </div>
        </section>

        {/* Contato */}
        <section id="contato" className="scroll-mt-20 pb-20 md:pb-28">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 md:px-8">
            <div
              className="relative min-h-72 overflow-hidden rounded-[2rem] bg-d-surface"
              aria-label="Mapa ilustrativo da localização"
              role="img"
            >
              <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgb(var(--d-line))_2px,transparent_2px),linear-gradient(90deg,rgb(var(--d-line))_2px,transparent_2px)] [background-size:56px_56px]" />
              <div className="absolute left-0 right-0 top-1/2 h-6 -rotate-6 bg-d-bg/80" />
              <div className="absolute bottom-0 left-1/3 top-0 w-5 rotate-12 bg-d-bg/80" />
              <span className="absolute left-1/2 top-1/2 grid h-14 w-14 place-items-center rounded-full rounded-br-none bg-d-accent text-d-accent-fg shadow-lg [transform:translate(-50%,-100%)_rotate(45deg)]">
                <span className="-rotate-45 font-display text-lg italic">a</span>
              </span>
            </div>
            <div className="rounded-[2rem] bg-d-accent p-8 text-d-accent-fg md:p-10">
              <h2 className="font-display text-4xl font-light">Visite a Alvéa</h2>
              <address className="mt-5 not-italic leading-relaxed opacity-90">
                Alameda dos Jasmins, 480 · Moema
                <br />
                São Paulo, SP
              </address>
              <dl className="mt-8 grid gap-3 border-t border-d-accent-fg/20 pt-6">
                {HOURS.map((row) => (
                  <div key={row.days} className="flex justify-between gap-4">
                    <dt>{row.days}</dt>
                    <dd className="opacity-80">{row.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-d-line py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-d-muted md:px-8">
          <p className="font-display text-2xl italic text-d-accent">alvéa</p>
          <p>Odontologia & estética · Responsável técnico fictício</p>
        </div>
      </footer>
    </div>
  );
}
