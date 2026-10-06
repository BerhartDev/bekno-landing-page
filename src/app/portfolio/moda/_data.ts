export type Category = 'camisas' | 'calcas' | 'vestidos' | 'acessorios';

export type Product = {
  id: string;
  name: string;
  category: Category;
  price: number;
  image: string;
  color: string;
  sizes: string[];
  tag?: string;
};

export const CATEGORIES: { id: Category | 'tudo'; label: string }[] = [
  { id: 'tudo', label: 'Tudo' },
  { id: 'camisas', label: 'Camisas' },
  { id: 'calcas', label: 'Calças' },
  { id: 'vestidos', label: 'Vestidos e conjuntos' },
  { id: 'acessorios', label: 'Acessórios' },
];

const CLOTHES = ['PP', 'P', 'M', 'G', 'GG'];

export const PRODUCTS: Product[] = [
  { id: 'camisa-linho', name: 'Camisa Brisa de linho', category: 'camisas', price: 389, image: 'moda/camisa.jpg', color: 'Off-white', sizes: CLOTHES, tag: 'Mais vendida' },
  { id: 'camisa-oversized', name: 'Camisa Maré oversized', category: 'camisas', price: 429, image: 'moda/look-mar.jpg', color: 'Branco', sizes: CLOTHES },
  { id: 'calca-areia', name: 'Pantalona Duna', category: 'calcas', price: 459, image: 'moda/calca-areia.jpg', color: 'Areia', sizes: CLOTHES, tag: 'Nova' },
  { id: 'calca-terra', name: 'Calça Cais de linho', category: 'calcas', price: 419, image: 'moda/calca-terra.jpg', color: 'Terra', sizes: CLOTHES },
  { id: 'vestido-cetim', name: 'Vestido Aurora em cetim', category: 'vestidos', price: 689, image: 'moda/vestido.jpg', color: 'Pérola', sizes: CLOTHES },
  { id: 'conjunto', name: 'Conjunto Alfaiataria Tâmara', category: 'vestidos', price: 949, image: 'moda/casaco.jpg', color: 'Caramelo', sizes: CLOTHES, tag: 'Edição limitada' },
  { id: 'bolsa-mostarda', name: 'Bolsa Pôr do Sol', category: 'acessorios', price: 589, image: 'moda/bolsa.jpg', color: 'Mostarda', sizes: ['Único'] },
  { id: 'bolsa-cinza', name: 'Bolsa Carteiro Névoa', category: 'acessorios', price: 529, image: 'moda/bolsa-cinza.jpg', color: 'Cinza', sizes: ['Único'] },
];

export const FREE_SHIPPING = 600;

export const brl = (value: number) =>
  value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', maximumFractionDigits: 0 });
