'use client';

import { useId, useState } from 'react';
import Image from 'next/image';
import { demoImage } from '@/lib/portfolio';
import { brl, CATEGORIES, PRODUCTS, type Category, type Product } from '../_data';
import { useCart } from './Cart';

type Filter = Category | 'tudo';
type Sort = 'destaques' | 'menor' | 'maior';

const TILES: { id: Category; label: string; image: string }[] = [
  { id: 'camisas', label: 'Camisas', image: 'mare-atelier/campanha.jpg' },
  { id: 'calcas', label: 'Calças', image: 'mare-atelier/calca-areia.jpg' },
  { id: 'acessorios', label: 'Acessórios', image: 'mare-atelier/bolsa.jpg' },
];

function ProductCard({ product }: { product: Product }) {
  const { add } = useCart();
  const [size, setSize] = useState(product.sizes.length === 1 ? product.sizes[0] : '');
  const [warn, setWarn] = useState(false);
  const group = useId();

  const onAdd = () => {
    if (!size) {
      setWarn(true);
      return;
    }
    add(product.id, size);
  };

  return (
    <li className="group flex flex-col">
      <div className="relative aspect-[3/4] overflow-hidden bg-d-surface">
        <Image
          src={demoImage(product.image)}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
        />
        {product.tag && (
          <span className="absolute left-3 top-3 bg-d-bg px-2.5 py-1 text-[10px] uppercase tracking-[0.18em]">
            {product.tag}
          </span>
        )}
      </div>
      <div className="mt-4 flex items-baseline justify-between gap-3">
        <h3 className="text-sm">{product.name}</h3>
        <p className="shrink-0 text-sm">{brl(product.price)}</p>
      </div>
      <p className="mt-1 text-xs text-d-muted">{product.color}</p>

      <fieldset className="mt-4">
        <legend className="sr-only">Tamanho de {product.name}</legend>
        <div className="flex flex-wrap gap-1.5">
          {product.sizes.map((option) => (
            <label key={option} className="cursor-pointer">
              <input
                type="radio"
                name={group}
                value={option}
                checked={size === option}
                onChange={() => {
                  setSize(option);
                  setWarn(false);
                }}
                className="peer sr-only"
              />
              <span className="grid h-10 min-w-10 place-items-center border border-d-line px-2 text-xs transition-colors hover:border-d-fg peer-checked:border-d-fg peer-checked:bg-d-fg peer-checked:text-d-bg peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-d-accent">
                {option}
              </span>
            </label>
          ))}
        </div>
      </fieldset>
      <p className="mt-2 h-4 text-xs text-d-accent" role="status">
        {warn ? 'Escolha um tamanho.' : ''}
      </p>
      <button
        type="button"
        onClick={onAdd}
        className="mt-2 h-11 border border-d-fg text-xs uppercase tracking-[0.2em] transition-colors hover:bg-d-fg hover:text-d-bg"
      >
        Adicionar à sacola
      </button>
    </li>
  );
}

export default function Shop() {
  const [filter, setFilter] = useState<Filter>('tudo');
  const [sort, setSort] = useState<Sort>('destaques');
  const sortId = useId();

  const products = PRODUCTS.filter((product) => filter === 'tudo' || product.category === filter).sort((a, b) =>
    sort === 'menor' ? a.price - b.price : sort === 'maior' ? b.price - a.price : 0,
  );

  const pick = (category: Category) => {
    setFilter(category);
    document.getElementById('vitrine')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="loja" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <ul className="grid gap-4 md:grid-cols-3">
          {TILES.map((tile) => (
            <li key={tile.id}>
              <button type="button" onClick={() => pick(tile.id)} className="group relative block aspect-[4/5] w-full overflow-hidden text-left md:aspect-[3/4]">
                <Image
                  src={demoImage(tile.image)}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/45 to-transparent" />
                <span className="absolute bottom-6 left-6 text-white">
                  <span className="block font-display text-4xl">{tile.label}</span>
                  <span className="mt-2 block text-[11px] uppercase tracking-[0.25em]">Ver peças →</span>
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div id="vitrine" className="scroll-mt-28 pt-24">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-d-line pb-6">
            <h2 className="font-display text-5xl md:text-6xl">Verão lento</h2>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em]">
              <label htmlFor={sortId} className="text-d-muted">
                Ordenar
              </label>
              <select
                id={sortId}
                value={sort}
                onChange={(event) => setSort(event.target.value as Sort)}
                className="h-10 border border-d-line bg-d-bg px-3 text-xs uppercase tracking-[0.15em]"
              >
                <option value="destaques">Destaques</option>
                <option value="menor">Menor preço</option>
                <option value="maior">Maior preço</option>
              </select>
            </div>
          </div>

          <div role="group" aria-label="Filtrar por categoria" className="mt-6 flex gap-2 overflow-x-auto pb-2">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                type="button"
                aria-pressed={filter === category.id}
                onClick={() => setFilter(category.id)}
                className={`h-10 shrink-0 rounded-full border px-4 text-xs uppercase tracking-[0.15em] transition-colors ${
                  filter === category.id ? 'border-d-fg bg-d-fg text-d-bg' : 'border-d-line hover:border-d-fg'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          <p className="mt-6 text-xs text-d-muted" aria-live="polite">
            {products.length} {products.length === 1 ? 'peça' : 'peças'}
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-12 md:gap-x-6 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
