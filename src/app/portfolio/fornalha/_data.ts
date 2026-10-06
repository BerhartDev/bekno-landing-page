export type Category = 'brasa' | 'horta' | 'bar' | 'doces';

export type Dish = {
  id: string;
  category: Category;
  name: string;
  description: string;
  price: number;
  image: string;
  tag?: string;
};

export const CATEGORIES: { id: Category; label: string }[] = [
  { id: 'brasa', label: 'Na brasa' },
  { id: 'horta', label: 'Da horta' },
  { id: 'bar', label: 'Bar' },
  { id: 'doces', label: 'Sobremesas' },
];

export const DISHES: Dish[] = [
  {
    id: 'picanha',
    category: 'brasa',
    name: 'Picanha na lenha',
    description: 'Maturada 21 dias, sal grosso e chimichurri da casa. Serve duas pessoas.',
    price: 168,
    image: 'fornalha/picanha.jpg',
    tag: 'Mais pedido',
  },
  {
    id: 'costela',
    category: 'brasa',
    name: 'Costela 12 horas',
    description: 'Fogo baixo durante a noite, desfiando no garfo. Farofa de manteiga de garrafa.',
    price: 124,
    image: 'fornalha/costela.jpg',
  },
  {
    id: 'ancho',
    category: 'brasa',
    name: 'Ancho com legumes tostados',
    description: 'Corte alto, selado na grelha de ferro, com abóbora e cebola na brasa.',
    price: 139,
    image: 'fornalha/ancho.jpg',
  },
  {
    id: 'polvo',
    category: 'brasa',
    name: 'Polvo e peixe do dia',
    description: 'Polvo tostado, peixe inteiro na grelha, batatas ao murro e salada verde.',
    price: 152,
    image: 'fornalha/polvo.jpg',
    tag: 'Para dividir',
  },
  {
    id: 'legumes',
    category: 'horta',
    name: 'Horta na brasa',
    description: 'Legumes da estação defumados, coalhada de ervas e azeite de alho negro.',
    price: 64,
    image: 'fornalha/legumes.jpg',
    tag: 'Vegetariano',
  },
  {
    id: 'negroni',
    category: 'bar',
    name: 'Negroni defumado',
    description: 'Gin, vermute e bitter, servido sob fumaça de lenha de laranjeira.',
    price: 42,
    image: 'fornalha/negroni.jpg',
  },
  {
    id: 'oldfashioned',
    category: 'bar',
    name: 'Old fashioned de rapadura',
    description: 'Bourbon, xarope de rapadura e bitter aromático.',
    price: 44,
    image: 'fornalha/oldfashioned.jpg',
  },
  {
    id: 'vinho',
    category: 'bar',
    name: 'Taça de tinto da casa',
    description: 'Seleção do sommelier, pensada para acompanhar as carnes.',
    price: 38,
    image: 'fornalha/vinho.jpg',
  },
  {
    id: 'petitgateau',
    category: 'doces',
    name: 'Brasa de chocolate',
    description: 'Bolo de chocolate 70% quente, sorvete de creme e flor de sal.',
    price: 36,
    image: 'fornalha/petitgateau.jpg',
  },
  {
    id: 'torta',
    category: 'doces',
    name: 'Torta de cacau e café',
    description: 'Massa amanteigada, ganache de café coado e cacau em pó.',
    price: 32,
    image: 'fornalha/torta.jpg',
  },
];

export const HOURS = [
  { days: 'Terça a quinta', time: '19h às 23h30' },
  { days: 'Sexta e sábado', time: '12h às 16h · 19h à 0h30' },
  { days: 'Domingo', time: '12h às 17h' },
];

export const brl = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
