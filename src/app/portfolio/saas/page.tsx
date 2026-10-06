import Calculator from './_components/Calculator';
import Dashboard from './_components/Dashboard';
import Pricing from './_components/Pricing';
import SignupButton from './_components/SignupButton';

const LOGOS = ['Ateliê Sol', 'Grão Café', 'Norte Pet', 'Lume Estúdio', 'Casa Raiz', 'Vértice Obras'];

const BENEFITS = [
  {
    title: 'Conciliação sozinha',
    text: 'O Fluxo lê o extrato do banco e casa cada entrada e saída com a conta certa. Sem digitar.',
    icon: '⇄',
  },
  {
    title: 'Cobrança que lembra',
    text: 'Pix e boleto com lembrete automático por WhatsApp e e-mail antes e depois do vencimento.',
    icon: '◎',
  },
  {
    title: 'Caixa do mês que vem',
    text: 'Projeção de 90 dias com o que entra e o que sai, para decidir antes do aperto.',
    icon: '↗',
  },
];

const FEATURES = [
  {
    eyebrow: 'Conciliação bancária',
    title: 'Abra o painel e o extrato já está conferido.',
    text: 'Conexão com os principais bancos por Open Finance. Regras aprendem com as suas escolhas e classificam os lançamentos repetidos.',
    points: ['Open Finance com 20+ bancos', 'Regras automáticas', 'Anexo de nota e comprovante'],
    mock: 'reconcile',
  },
  {
    eyebrow: 'Cobranças',
    title: 'Menos tempo cobrando, mais dinheiro no caixa.',
    text: 'Emita Pix e boleto em lote, acompanhe quem pagou e deixe o lembrete trabalhar por você.',
    points: ['Pix com QR Code e copia e cola', 'Régua de cobrança', 'Baixa automática'],
    mock: 'billing',
  },
] as const;

const TESTIMONIALS = [
  {
    quote: 'Fechava o mês em três dias. Agora é uma tarde, e eu confio no número.',
    name: 'Renata A.',
    role: 'Sócia de um estúdio de design',
  },
  {
    quote: 'A régua de cobrança reduziu nossa inadimplência pela metade no primeiro trimestre.',
    name: 'Diego M.',
    role: 'Gestor de uma rede de pet shops',
  },
  {
    quote: 'A projeção de caixa me avisou de um aperto com seis semanas de antecedência.',
    name: 'Paula T.',
    role: 'Dona de uma cafeteria',
  },
];

const FAQ = [
  {
    q: 'Preciso de cartão de crédito para testar?',
    a: 'Não. O teste de 14 dias libera todos os recursos do plano Negócio, sem cartão. No fim você escolhe se quer continuar.',
  },
  {
    q: 'O Fluxo substitui o meu contador?',
    a: 'Não, ele facilita o trabalho dele. O contador recebe acesso próprio, com relatórios e comprovantes já organizados.',
  },
  {
    q: 'Meus dados bancários ficam seguros?',
    a: 'A conexão usa Open Finance, regulado pelo Banco Central. O Fluxo só lê o extrato e não movimenta dinheiro.',
  },
  {
    q: 'Consigo importar o que está nas minhas planilhas?',
    a: 'Sim. Há um importador para planilhas e para os principais sistemas, e o time de implantação ajuda na primeira carga.',
  },
];

function ReconcileMock() {
  return (
    <div className="grid gap-3 rounded-2xl border border-white/10 bg-d-surface p-5">
      {[
        { bank: 'Extrato · 12/03', item: 'PIX ATELIE SOL', match: 'Venda #1042', ok: true },
        { bank: 'Extrato · 12/03', item: 'BOLETO GRAFICA', match: 'Fornecedores', ok: true },
        { bank: 'Extrato · 13/03', item: 'TED 4471', match: 'Escolher conta', ok: false },
      ].map((row) => (
        <div key={row.item} className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 text-xs">
          <div className="rounded-lg bg-white/[0.04] p-3 ring-1 ring-white/5">
            <p className="text-d-muted">{row.bank}</p>
            <p className="mt-1 font-medium">{row.item}</p>
          </div>
          <span className={row.ok ? 'text-emerald-300' : 'text-d-muted'} aria-hidden="true">
            {row.ok ? '✓' : '…'}
          </span>
          <div
            className={`rounded-lg p-3 ring-1 ${
              row.ok ? 'bg-emerald-400/10 ring-emerald-300/30' : 'border border-dashed border-white/25 ring-transparent'
            }`}
          >
            <p className="text-d-muted">Lançamento</p>
            <p className="mt-1 font-medium">{row.match}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function BillingMock() {
  return (
    <div className="rounded-2xl border border-white/10 bg-d-surface p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Cobranças de março</p>
        <p className="text-xs text-d-muted">32 enviadas</p>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-d-accent to-cyan-300" />
      </div>
      <p className="mt-2 text-xs text-d-muted">78% recebido · R$ 24.380</p>
      <ul className="mt-5 grid gap-2 text-xs">
        {[
          { who: 'Grão Café', status: 'Pago via Pix', tone: 'text-emerald-300' },
          { who: 'Norte Pet', status: 'Lembrete enviado hoje', tone: 'text-amber-200' },
          { who: 'Casa Raiz', status: 'Vence em 3 dias', tone: 'text-d-muted' },
        ].map((row) => (
          <li key={row.who} className="flex justify-between rounded-lg bg-white/[0.04] px-3 py-2.5 ring-1 ring-white/5">
            <span>{row.who}</span>
            <span className={row.tone}>{row.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

const primary =
  'inline-flex h-12 items-center rounded-full bg-d-accent px-6 text-sm font-semibold text-d-accent-fg shadow-lg shadow-d-accent/30 transition-transform hover:-translate-y-0.5';

export default function FluxoPage() {
  return (
    <div className="overflow-x-clip">
      <header className="sticky top-0 z-40 border-b border-white/5 bg-d-bg/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-8 px-5 md:px-8">
          <a href="#topo" className="flex items-center gap-2 font-display text-xl font-bold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-d-accent to-cyan-300 text-sm text-d-accent-fg">
              f
            </span>
            Fluxo
          </a>
          <nav aria-label="Principal" className="hidden md:block">
            <ul className="flex gap-7 text-sm text-d-muted">
              <li>
                <a href="#recursos" className="hover:text-d-fg">
                  Recursos
                </a>
              </li>
              <li>
                <a href="#economia" className="hover:text-d-fg">
                  Economia
                </a>
              </li>
              <li>
                <a href="#planos" className="hover:text-d-fg">
                  Planos
                </a>
              </li>
              <li>
                <a href="#duvidas" className="hover:text-d-fg">
                  Dúvidas
                </a>
              </li>
            </ul>
          </nav>
          <SignupButton className="ml-auto inline-flex h-10 items-center rounded-full bg-d-fg px-5 text-sm font-semibold text-d-bg transition-opacity hover:opacity-90">
            Testar grátis
          </SignupButton>
        </div>
      </header>

      <main id="topo">
        {/* Hero */}
        <section className="relative isolate pb-20 pt-16 md:pb-28 md:pt-24">
          <div className="absolute inset-x-0 top-0 -z-10 h-[38rem] bg-[radial-gradient(ellipse_at_top,rgba(143,130,255,0.28),transparent_65%)]" />
          <div
            className="absolute inset-0 -z-10 opacity-[0.15] [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]"
            aria-hidden="true"
          />
          <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 md:px-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-d-muted ring-1 ring-white/10">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Novo: conciliação por Open Finance
              </p>
              <h1 className="mt-6 font-display text-[clamp(2.5rem,1.6rem+3.2vw,4rem)] font-bold leading-[1.02] tracking-[-0.03em]">
                O financeiro da sua empresa no{' '}
                <span className="bg-gradient-to-r from-d-accent to-cyan-300 bg-clip-text text-transparent">
                  piloto automático.
                </span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-d-muted">
                Conciliação, cobranças e projeção de caixa num só lugar. Feito para pequenas empresas que querem parar
                de viver de planilha.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <SignupButton className={primary}>Testar 14 dias grátis</SignupButton>
                <a href="#recursos" className="text-sm font-semibold text-d-fg/90 hover:text-d-fg">
                  Ver como funciona →
                </a>
              </div>
              <p className="mt-5 text-xs text-d-muted">Sem cartão de crédito · Cancele quando quiser</p>
            </div>
            <Dashboard />
          </div>
        </section>

        {/* Logos */}
        <section aria-label="Empresas que usam o Fluxo" className="border-y border-white/5 py-10">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <p className="text-center text-xs uppercase tracking-[0.2em] text-d-muted">
              Mais de 3.000 pequenas empresas organizam o caixa com o Fluxo
            </p>
            <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {LOGOS.map((logo, index) => (
                <li
                  key={logo}
                  className={`font-display text-lg text-d-fg/45 ${index % 2 ? 'font-light italic' : 'font-bold tracking-tight'}`}
                >
                  {logo}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Benefícios */}
        <section id="recursos" className="scroll-mt-16 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-semibold text-d-accent">Por que o Fluxo</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Três rotinas a menos na sua semana.
              </h2>
            </div>
            <ul className="mt-14 grid gap-6 md:grid-cols-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit.title} className="rounded-3xl bg-d-surface p-7 ring-1 ring-white/10">
                  <span
                    className="grid h-12 w-12 place-items-center rounded-2xl bg-d-accent/15 text-xl text-d-accent"
                    aria-hidden="true"
                  >
                    {benefit.icon}
                  </span>
                  <h3 className="mt-6 font-display text-xl font-semibold">{benefit.title}</h3>
                  <p className="mt-3 leading-relaxed text-d-muted">{benefit.text}</p>
                </li>
              ))}
            </ul>

            <div className="mt-24 grid gap-24">
              {FEATURES.map((feature, index) => (
                <article key={feature.eyebrow} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
                  <div className={index % 2 ? 'md:order-2' : undefined}>
                    <p className="text-sm font-semibold text-d-accent">{feature.eyebrow}</p>
                    <h3 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl">{feature.title}</h3>
                    <p className="mt-5 text-lg leading-relaxed text-d-muted">{feature.text}</p>
                    <ul className="mt-6 grid gap-2">
                      {feature.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="text-d-accent" aria-hidden="true">
                            ✓
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {feature.mock === 'reconcile' ? <ReconcileMock /> : <BillingMock />}
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Calculadora */}
        <section id="economia" className="scroll-mt-16 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mb-12 max-w-2xl">
              <p className="text-sm font-semibold text-d-accent">Calculadora</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Quanto a planilha custa para você?
              </h2>
            </div>
            <Calculator />
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="scroll-mt-16 py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <div className="mx-auto mb-10 max-w-2xl text-center">
              <p className="text-sm font-semibold text-d-accent">Planos</p>
              <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-5xl">
                Preço justo, do MEI à empresa com equipe.
              </h2>
            </div>
            <Pricing />
          </div>
        </section>

        {/* Depoimentos */}
        <section className="py-20 md:py-28">
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <h2 className="max-w-xl font-display text-4xl font-bold tracking-tight md:text-5xl">
              Quem trocou a planilha não volta.
            </h2>
            <ul className="mt-12 grid gap-6 md:grid-cols-3">
              {TESTIMONIALS.map((item) => (
                <li key={item.name} className="flex flex-col rounded-3xl bg-d-surface p-7 ring-1 ring-white/10">
                  <blockquote className="flex-1 text-lg leading-relaxed">“{item.quote}”</blockquote>
                  <div className="mt-8 flex items-center gap-3">
                    <span
                      className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-d-accent to-cyan-300 text-sm font-bold text-d-accent-fg"
                      aria-hidden="true"
                    >
                      {item.name[0]}
                    </span>
                    <div>
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm text-d-muted">{item.role}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section id="duvidas" className="scroll-mt-16 py-20 md:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 md:grid-cols-[0.8fr_1.2fr] md:px-8">
            <h2 className="font-display text-4xl font-bold tracking-tight md:text-5xl">Perguntas frequentes</h2>
            <div className="divide-y divide-white/10 border-y border-white/10">
              {FAQ.map((item) => (
                <details key={item.q} className="group py-2">
                  <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-6 py-3 text-lg font-medium [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <span
                      className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white/5 text-d-accent transition-transform group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <p className="pb-5 pr-12 leading-relaxed text-d-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section className="px-5 pb-20 md:px-8 md:pb-28">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-d-accent via-indigo-400 to-cyan-300 px-8 py-16 text-center text-d-accent-fg md:py-24">
            <h2 className="mx-auto max-w-2xl font-display text-4xl font-bold tracking-tight md:text-6xl">
              Feche o mês em uma tarde.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-lg opacity-80">
              14 dias grátis, sem cartão. A implantação leva menos de uma hora.
            </p>
            <SignupButton className="mt-9 inline-flex h-12 items-center rounded-full bg-d-bg px-7 text-sm font-semibold text-d-fg transition-transform hover:-translate-y-0.5">
              Começar agora
            </SignupButton>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 py-10">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-d-muted md:px-8">
          <p className="font-display font-bold text-d-fg">Fluxo</p>
          <p>Gestão financeira para pequenas empresas</p>
        </div>
      </footer>
    </div>
  );
}
