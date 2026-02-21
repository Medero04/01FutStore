// ============================================================
// 01FutStore — Product Data
// Categories: copa2026, brasileiras, europeias, retros
// ============================================================

export type Category = 'copa2026' | 'brasileiras' | 'europeias' | 'retros';

export interface Product {
  id: string;
  name: string;
  team: string;
  category: Category;
  price: number;
  image: string;
  badge?: string;
  description?: string;
  sizes: string[];
}

export const CATEGORIES: { id: Category; label: string; emoji: string }[] = [
  { id: 'copa2026', label: 'Copa do Mundo 2026', emoji: '🏆' },
  { id: 'brasileiras', label: 'Brasileiras', emoji: '🇧🇷' },
  { id: 'europeias', label: 'Europeias', emoji: '⭐' },
  { id: 'retros', label: 'Retrôs', emoji: '🕹️' },
];

const SIZES = ['P', 'M', 'G', 'GG'];

export const PRODUCTS: Product[] = [
  // ── Copa do Mundo 2026 ──────────────────────────────────────
    {
    id: 'copa-brasil-2026',
    name: 'Camisa Nike Brasil | 2026/27 Torcedor - Masculina',
    team: 'Seleção Brasileira',
    category: 'copa2026',
    price: 89.90,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771649133/camisa_brasil_xjcvsi.jpg',
    badge: 'HOT',
    description: 'Camisa oficial da Seleção Brasileira para a Copa do Mundo 2026',
    sizes: SIZES,
  },
  {
    id: 'copa-argentina-2026',
    name: 'Camisa Adidas Argentina | 2026/27 Torcedor - Masculina',
    team: 'Seleção Argentina',
    category: 'copa2026',
    price: 329.90,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771649141/camisa_argentina_eciqgv.jpg',
    badge: 'HOT',
    sizes: SIZES,
  },
  {
    id: 'copa-franca-2026',
    name: 'Camisa Puma Portugal | 2026/27 Torcedor - Masculina',
    team: 'Seleção Francesa',
    category: 'copa2026',
    price: 319.90,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771649343/portugal_camisa_dtef30.jpg',
    badge: 'HOT',
    sizes: SIZES,
  },
  {
    id: 'copa-portugal-2026',
    name: 'Portugal 2026 — Titular',
    team: 'Seleção Portuguesa',
    category: 'copa2026',
    price: 319.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'HOT',
    sizes: SIZES,
  },
  {
    id: 'copa-alemanha-2026',
    name: 'Alemanha 2026 — Titular',
    team: 'Seleção Alemã',
    category: 'copa2026',
    price: 309.90,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'copa-espanha-2026',
    name: 'Espanha 2026 — Titular',
    team: 'Seleção Espanhola',
    category: 'copa2026',
    price: 309.90,
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'copa-england-2026',
    name: 'Inglaterra 2026 — Titular',
    team: 'Seleção Inglesa',
    category: 'copa2026',
    price: 309.90,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'copa-brasil-2026-away',
    name: 'Brasil 2026 — Reserva',
    team: 'Seleção Brasileira',
    category: 'copa2026',
    price: 339.90,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80',
    sizes: SIZES,
  },

  // ── Brasileiras ─────────────────────────────────────────────
  {
    id: 'corinthians-2024',
    name: 'Camisa Nike Brasil | 2026/27 Torcedor - Masculina',
    team: 'Corinthians',
    category: 'brasileiras',
    price: 259.90,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771653252/cor_pkxqlu.webp',
    sizes: SIZES,
  },
  {
    id: 'flamengo-2024',
    name: 'Flamengo 2024 — Titular',
    team: 'Flamengo',
    category: 'brasileiras',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'palmeiras-2024',
    name: 'Palmeiras 2024 — Titular',
    team: 'Palmeiras',
    category: 'brasileiras',
    price: 269.90,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'sao-paulo-2024',
    name: 'São Paulo 2024 — Titular',
    team: 'São Paulo FC',
    category: 'brasileiras',
    price: 259.90,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'atletico-mg-2024',
    name: 'Atlético-MG 2024 — Titular',
    team: 'Atlético Mineiro',
    category: 'brasileiras',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'gremio-2024',
    name: 'Grêmio 2024 — Titular',
    team: 'Grêmio',
    category: 'brasileiras',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'internacional-2024',
    name: 'Internacional 2024 — Titular',
    team: 'Sport Club Internacional',
    category: 'brasileiras',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'cruzeiro-2024',
    name: 'Cruzeiro 2024 — Titular',
    team: 'Cruzeiro EC',
    category: 'brasileiras',
    price: 249.90,
    image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80',
    sizes: SIZES,
  },

  // ── Europeias ───────────────────────────────────────────────
  {
    id: 'real-madrid-2024',
    name: 'Real Madrid 24/25 — Titular',
    team: 'Real Madrid CF',
    category: 'europeias',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'barcelona-2024',
    name: 'Barcelona 24/25 — Titular',
    team: 'FC Barcelona',
    category: 'europeias',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'manchester-city-2024',
    name: 'Manchester City 24/25 — Titular',
    team: 'Manchester City FC',
    category: 'europeias',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'psg-2024',
    name: 'PSG 24/25 — Titular',
    team: 'Paris Saint-Germain',
    category: 'europeias',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'liverpool-2024',
    name: 'Liverpool 24/25 — Titular',
    team: 'Liverpool FC',
    category: 'europeias',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'juventus-2024',
    name: 'Juventus 24/25 — Titular',
    team: 'Juventus FC',
    category: 'europeias',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'chelsea-2024',
    name: 'Chelsea 24/25 — Titular',
    team: 'Chelsea FC',
    category: 'europeias',
    price: 269.90,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'inter-milan-2024',
    name: 'Inter de Milão 24/25 — Titular',
    team: 'FC Internazionale',
    category: 'europeias',
    price: 269.90,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
    sizes: SIZES,
  },

  // ── Retrôs ──────────────────────────────────────────────────
  {
    id: 'brasil-retro-1970',
    name: 'Brasil 1970 — Retrô',
    team: 'Seleção Brasileira',
    category: 'retros',
    price: 219.90,
    image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&q=80',
    badge: 'CLÁSSICO',
    sizes: SIZES,
  },
  {
    id: 'brasil-retro-1994',
    name: 'Brasil 1994 — Retrô',
    team: 'Seleção Brasileira',
    category: 'retros',
    price: 209.90,
    image: 'https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80',
    badge: 'CLÁSSICO',
    sizes: SIZES,
  },
  {
    id: 'milan-retro-1994',
    name: 'AC Milan 1994 — Retrô',
    team: 'AC Milan',
    category: 'retros',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&q=80',
    badge: 'RARO',
    sizes: SIZES,
  },
  {
    id: 'ajax-retro-1995',
    name: 'Ajax 1995 — Retrô',
    team: 'AFC Ajax',
    category: 'retros',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&q=80',
    badge: 'RARO',
    sizes: SIZES,
  },
  {
    id: 'argentina-retro-1986',
    name: 'Argentina 1986 — Retrô',
    team: 'Seleção Argentina',
    category: 'retros',
    price: 219.90,
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&q=80',
    badge: 'LENDA',
    sizes: SIZES,
  },
  {
    id: 'italia-retro-1982',
    name: 'Itália 1982 — Retrô',
    team: 'Seleção Italiana',
    category: 'retros',
    price: 209.90,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80',
    sizes: SIZES,
  },
  {
    id: 'flamengo-retro-1981',
    name: 'Flamengo 1981 — Retrô',
    team: 'Flamengo',
    category: 'retros',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80',
    badge: 'LENDA',
    sizes: SIZES,
  },
  {
    id: 'barcelona-retro-1992',
    name: 'Barcelona 1992 — Retrô',
    team: 'FC Barcelona',
    category: 'retros',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80',
    sizes: SIZES,
  },
];

export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });
};

export const getCategoryLabel = (category: Category): string => {
  return CATEGORIES.find(c => c.id === category)?.label ?? category;
};
