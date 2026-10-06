const BARS = [38, 52, 44, 61, 57, 72, 66, 80, 74, 91, 86, 98];
const ROWS = [
  { name: 'Pix recebido · Ateliê Sol', value: '+ R$ 1.240,00', positive: true },
  { name: 'Boleto · Fornecedor Gráfica', value: '− R$ 380,50', positive: false },
  { name: 'Cartão · Assinatura Studio', value: '+ R$ 89,90', positive: true },
];

/** Mockup do painel do produto, feito em HTML/CSS (sem imagem). */
export default function Dashboard() {
  return (
    <div className="relative">
      <div className="absolute -inset-10 -z-10 rounded-full bg-[radial-gradient(closest-side,rgba(143,130,255,0.45),transparent)] blur-2xl" />
      <div className="overflow-hidden rounded-2xl border border-white/10 bg-d-surface/90 shadow-2xl shadow-black/60 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="h-3 w-3 rounded-full bg-white/15" />
          <span className="ml-3 rounded-md bg-white/5 px-3 py-1 text-[11px] text-d-muted">app.fluxo.exemplo/painel</span>
        </div>
        <div className="grid gap-4 p-4 sm:p-5">
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: 'Saldo', value: 'R$ 48,2 mil', trend: '+12%' },
              { label: 'A receber', value: 'R$ 9,8 mil', trend: '14 cobranças' },
              { label: 'A pagar', value: 'R$ 3,1 mil', trend: '5 contas' },
            ].map((card) => (
              <div key={card.label} className="rounded-xl bg-white/[0.04] p-3 ring-1 ring-white/5">
                <p className="text-[11px] text-d-muted">{card.label}</p>
                <p className="mt-1 font-display text-sm font-semibold sm:text-lg">{card.value}</p>
                <p className="mt-1 text-[10px] text-d-accent sm:text-[11px]">{card.trend}</p>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-white/[0.04] p-4 ring-1 ring-white/5">
            <div className="flex items-center justify-between">
              <p className="text-xs text-d-muted">Fluxo de caixa · 12 meses</p>
              <span className="rounded-full bg-d-accent/15 px-2 py-0.5 text-[10px] font-medium text-d-accent">
                Projeção
              </span>
            </div>
            <div className="mt-4 flex h-28 items-end gap-1.5" aria-hidden="true">
              {BARS.map((height, index) => (
                <div
                  key={index}
                  style={{ height: `${height}%` }}
                  className={`flex-1 rounded-t-md ${
                    index >= 9 ? 'bg-d-accent/35' : 'bg-gradient-to-t from-d-accent/70 to-cyan-300/80'
                  }`}
                />
              ))}
            </div>
          </div>
          <ul className="divide-y divide-white/5 rounded-xl bg-white/[0.04] ring-1 ring-white/5">
            {ROWS.map((row) => (
              <li key={row.name} className="flex items-center justify-between gap-3 px-4 py-2.5 text-[11px] sm:text-xs">
                <span className="truncate text-d-muted">{row.name}</span>
                <span className={`shrink-0 font-medium ${row.positive ? 'text-emerald-300' : 'text-rose-300'}`}>
                  {row.value}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
