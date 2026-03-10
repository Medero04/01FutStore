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
  images: string[];
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
    price: 99.90,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/FRENTE_hith9q.jpg',
    images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/FRENTE_hith9q.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/COSTAS_vkzdpb.jpg',  // Foto costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792675/MANGA_ayqzwi.jpg',  // Manga
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792684/SIMBOLO_ttxrwt.jpg',  // Foto de simbolo
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/ETIQUETA_an9dns.jpg',  // Outro etiqueta
  ],
    badge: 'HOT',
    description: 'Camisa oficial da Seleção Brasileira para a Copa do Mundo 2026',
    sizes: SIZES,
  },
  {
    id: 'copa-argentina-2026',
    name: 'Camisa Adidas Argentina | 2026/27 Torcedor - Masculina',
    team: 'Seleção Argentina',
    category: 'copa2026',
    price: 129.90,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771649141/camisa_argentina_eciqgv.jpg',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    badge: 'HOT',
    sizes: SIZES,
  },
  {
    id: 'copa-franca-2026',
    name: 'Camisa Puma CR7 | 2026/27 Torcedor - Masculina',
    team: 'Seleção Francesa',
    category: 'copa2026',
    price: 319.90,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771649343/portugal_camisa_dtef30.jpg',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'copa-espanha-2026',
    name: 'Espanha 2026 — Titular',
    team: 'Seleção Espanhola',
    category: 'copa2026',
    price: 309.90,
    image: 'https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'copa-england-2026',
    name: 'Inglaterra 2026 — Titular',
    team: 'Seleção Inglesa',
    category: 'copa2026',
    price: 309.90,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'copa-brasil-2026-away',
    name: 'Brasil 2026 — Reserva',
    team: 'Seleção Brasileira',
    category: 'copa2026',
    price: 339.90,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },

  // ── Brasileiras ─────────────────────────────────────────────

  //corinthians
  {
    id: 'corinthians-2025/26-I',
    name: 'Camisa Nike Corinthians I - 2025/26 Torcedor - Masculina',
    team: 'Corinthians',
    category: 'brasileiras',
    price: 179.99,
    image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/FRENTE_hith9q.jpg',
    images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/FRENTE_hith9q.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/COSTAS_vkzdpb.jpg',  // Foto costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792675/MANGA_ayqzwi.jpg',  // Manga
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792684/SIMBOLO_ttxrwt.jpg',  // Foto de simbolo
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771792672/ETIQUETA_an9dns.jpg',  // Outro etiqueta
  ],
    sizes: SIZES,
  },
  {
  id: 'corinthians-2025/26-II',
  name: 'Camisa Nike Corinthians II - 2025/26 Torcedor - Masculina',
  team: 'Corinthians',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771795320/FRENTE_xhqlnh.jpg',
  images: [
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795320/FRENTE_xhqlnh.jpg',  // Foto frontal
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795320/COSTAS_htpyh2.jpg',  // Foto costas
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795320/MANGA_lqyita.jpg',  // Manga
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795320/SIMBOLO_udh1rq.jpg',  // Foto de simbolo
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795320/ETIQUETA_pbey49.jpg',  // Outro etiqueta
],
  sizes: SIZES,
},
  {
  id: 'corinthians-2025/26-III',
  name: 'Camisa Nike Corinthians III - 2025/26 Torcedor - Masculina',
  team: 'Corinthians',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771795876/FRENTE_s2dbqq.jpg',
  images: [
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795876/FRENTE_s2dbqq.jpg',  // Foto frontal
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795877/FRENTE2_kohydh.jpg',  // Foto frontal 2
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795876/COSTAS_rxjosw.jpg',  // Costas
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795876/SIMBOLO_tualwo.jpg',  // Foto de simbolo
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771795876/ETIQUETA_ehvbdc.jpg',  // Outro etiqueta
],
  sizes: SIZES,
},

//palmeiras
{
  id: 'palmeiras-2026/27-I',
  name: 'Camisa Puma Palmeiras I - 2026/27 Torcedor - Masculina',
  team: 'Palmeiras',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771796691/FRENTE_bzmkks.jpg',
  images: [
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771796691/FRENTE_bzmkks.jpg',  // Foto frontal
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771796691/FRENTE_2_m6b2fk.jpg',  // Foto frontal 2
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771796691/COSTAS_n5m1u2.jpg',  // Foto de costas
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771796733/SIMBOLO_jsqssd.jpg',  // simbolo
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771796691/PUMA_qo0rpq.jpg',  // Puma
],
  sizes: SIZES,
},
{
  id: 'palmeiras-2026/27-II',
  name: 'Camisa Puma Palmeiras II - 2026/27 Torcedor - Masculina',
  team: 'Palmeiras',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771797233/FRENTE_b9lelj.jpg',
  images: [
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771797233/FRENTE_b9lelj.jpg',  // Foto frontal
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771797234/FRENTE_2_c8zrtb.jpg',  // Foto frontal 2
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771797233/COSTAS_diozwa.jpg',  // Foto de costas
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771797234/SIMBOLO_lgous7.jpg',  // simbolo
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771797234/PUMA_q1tayl.jpg',  // Puma
],
  sizes: SIZES,
},

//santos
{
  id: 'santos-2025/26-I',
  name: 'Camisa Umbro Santos I - 2025/26 Torcedor - Masculina',
  team: 'Santos',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771798346/FRENTE_jua9vm.jpg',
  images: [
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798346/FRENTE_jua9vm.jpg',  // Foto frontal
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798346/FRENTE_2_tzpahf.jpg',  // Foto lateral
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798346/COSTAS_ukjhin.jpg',  // Foto de costas
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798347/SIMBOLO_ag7fsj.jpg',  // Detalhe
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798346/PUMA_kxw42s.jpg',  // Outro ângulo
],
  sizes: SIZES,
},
{
  id: 'santos-2025/26-II',
  name: 'Camisa Umbro Santos II - 2025/26 Torcedor - Masculina',
  team: 'Santos',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771798573/FRENTE_tji3m3.jpg',
  images: [
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798573/FRENTE_tji3m3.jpg',  // Foto frontal
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798573/FRENTE_2_c4dyph.jpg',  // Foto lateral
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798572/COSTAS_nnt9qf.jpg',  // Foto de costas
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798573/SIMBOLO_qnrbt6.jpg',  // Detalhe
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798572/ETIQUETA_vqpzvm.jpg',  // Outro ângulo
],
  sizes: SIZES,
},
{
  id: 'santos-2025/26-III',
  name: 'Camisa Umbro Santos III - 2025/26 Torcedor - Masculina',
  team: 'Santos',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771798672/FRENTE_idfqff.jpg',
  images: [
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798672/FRENTE_idfqff.jpg',  // Foto frontal
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798672/FRENTE_2_vtcepn.jpg',  // Foto lateral
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798671/COSTAS_kd3gpd.jpg',  // Foto de costas
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798672/SIMBOLO_lh8tz2.jpg',  // Detalhe
  'https://res.cloudinary.com/djow54hvj/image/upload/v1771798671/ETIQUETA_mknr0r.jpg',  // Outro ângulo
],
  sizes: SIZES,
},

// são paulo
{
  id: 'sao-paulo-2025/26-I',
  name: 'Camisa New Balance São Paulo I - 2025/26 Torcedor - Masculina',
  team: 'São Paulo',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771802058/FRENTE_luxqyi.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802058/FRENTE_luxqyi.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802058/FRENTE_2_m7usyp.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802058/COSTAS_ukgshd.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802066/SIMBOLO_jwz85t.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802065/PUMA_jnngob.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},
{
  id: 'sao-paulo-2025/26-II',
  name: 'Camisa New Balance São Paulo II - 2025/26 Torcedor - Masculina',
  team: 'São Paulo',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771802187/FRENTE_j8yjuo.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802187/FRENTE_j8yjuo.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802185/FRENTE_2_xe4tp3.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802185/COSTAS_elrntv.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802189/SIMBOLO_ysmlek.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771802188/ETIQUETA_mt4jmn.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},

// flamengo
{
  id: 'flamengo-2026/27-I',
  name: 'Camisa Adidas Flamengo I - 2026/27 Torcedor - Masculina',
  team: 'Flamengo',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771803245/FRENTE_mvtabw.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803245/FRENTE_mvtabw.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803245/FRENTE_2_l3m2j3.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803244/COSTAS_w9rjk5.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803253/SIMBOLO_ilyyj5.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803254/ETIQUETA_hltyya.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},
{
  id: 'flamengo-2025/26-training',
  name: 'Camisa Adidas Flamengo - 2026/27 Treino - Masculina',
  team: 'Flamengo',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771803400/FRENTE_sbwiqp.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803400/FRENTE_sbwiqp.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803399/FRENTE_2_zejcle.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803293/COSTAS_t9haq3.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803401/SIMBOLO_d2yrt1.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771803259/ETIQUETA_x48vj0.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},

//vasco
{
  id: 'vasco-2026/27-I',
  name: 'Camisa Nike Vasco I - 2026/27 Torcedor - Masculina',
  team: 'Vasco',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771804111/FRENTE_tsadw1.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804111/FRENTE_tsadw1.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804115/FRENTE_2_gctu3h.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804114/COSTAS_oilkvh.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804112/SIMBOLO_cyewdy.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804112/ETIQUETA_e3ficd.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},

//fluminense
{
  id: 'fluminense-2026/27-I',
  name: 'Camisa Puma Fluminense I - 2026/27 Torcedor - Masculina',
  team: 'Fluminense',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771804464/FRENTE_aov6od.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804464/FRENTE_aov6od.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804465/FRENTE_2_topacn.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804461/COSTAS_iekti5.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804462/SIMBOLO_jbhini.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804462/PUMA_ejrun5.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},
{
  id: 'fluminense-2026/27-II',
  name: 'Camisa Puma Fluminense II - 2026/27 Torcedor - Masculina',
  team: 'Fluminense',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771804476/FRENTE_kmyecw.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804476/FRENTE_kmyecw.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804475/FRENTE_2_uxhjez.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804474/COSTAS_x6ejse.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804569/SIMBOLO_enjztf.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771804571/PUMA_c12cnh.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},

//botafogo
{
  id: 'botafogo-2025/26-I',
  name: 'Camisa Reebok Botafogo I - 2025/26 Torcedor - Masculina',
  team: 'Botafogo',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771805485/FRENTE_ha8kdy.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805485/FRENTE_ha8kdy.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805461/FRENTE_2_kfort1.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805459/COSTAS_w9cyi4.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805487/SIMBOLO_nlevqc.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805460/ETIQUETA_yxuvge.jpg',
  ],
  sizes: SIZES,
},
{
  id: 'botafogo-2025/26-II',
  name: 'Camisa Reebok Botafogo II - 2025/26 Torcedor - Masculina',
  team: 'Botafogo',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771805619/FRENTE_sm2qgz.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805619/FRENTE_sm2qgz.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805616/FRENTE_2_iy4hjr.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805613/COSTAS_tci30u.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805616/COSTAS_2_sheo66.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805617/ETIQUETA_hge6od.jpg',
  ],
  sizes: SIZES,
},
{
  id: 'botafogo-2025/26-III',
  name: 'Camisa Reebok Botafogo III - 2025/26 Torcedor - Masculina',
  team: 'Botafogo',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771805699/FRENTE_q3tfzt.jpg', 
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805699/FRENTE_q3tfzt.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805701/FRENTE_2_g751ru.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805698/COSTAS_gdmgr5.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805704/SIMBOLO_aqvbgr.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771805702/ETIQUETA_m5ngbl.jpg',
  ],
  sizes: SIZES,
},

//atletico mg
{
  id: 'atletico-mg-2025/26-I',
  name: 'Camisa Nike Atlético Mineiro I - 2025/26 Torcedor - Masculina',
  team: 'Atlético Mineiro',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771806424/FRENTE_gylyqg.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806424/FRENTE_gylyqg.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806423/FRENTE_2_rdszj6.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806419/COSTAS_o6s0nx.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806420/SIMBOLO_ozwm6r.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806420/ETIQUETA_wtdlz5.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},

//cruzeiro
{
  id: 'cruzeiro-2026/27-I',
  name: 'Camisa Adidas Cruzeiro I - 2026/27 Torcedor - Masculina',
  team: 'Cruzeiro',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771806975/FRENTE_q32hht.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806975/FRENTE_q32hht.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806974/FRENTE_2_d7jytz.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806970/COSTAS_dgrsb8.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806971/SIMBOLO_w2ngrm.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771806971/ETIQUETA_wukv1d.jpg',  // Outro ângulo
  ],
  sizes: SIZES,
},

//internacional
{
  id: 'internacional-2025/26-I',
  name: 'Camisa Adidas Internacional I - 2025/26 Torcedor - Masculina',
  team: 'Internacional',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771807704/FRENTE_afpnqh.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807704/FRENTE_afpnqh.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807706/FRENTE_2_x3su69.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807703/COSTAS_i4einu.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807707/SIMBOLO_plgqsa.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807709/PUMA_vldizn.jpg',
  ],
  sizes: SIZES,
},
{
  id: 'internacional-2025/26-II',
  name: 'Camisa Adidas Internacional II - 2025/26 Torcedor - Masculina',
  team: 'Internacional',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771807732/FRENTE_vmqwsn.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807732/FRENTE_vmqwsn.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807730/FRENTE_2_dsclit.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807726/COSTAS_mqev2i.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807725/SIMBOLO_d383yg.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807728/ETIQUETA_trkbuk.jpg',
  ],
  sizes: SIZES,
},
{
  id: 'internacional-2025/26-III',
  name: 'Camisa Adidas Internacional III - 2025/26 Torcedor - Masculina',
  team: 'Internacional',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771807797/FRENTE_kqdueh.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807797/FRENTE_kqdueh.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807801/FRENTE_2_d5avh8.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807771/COSTAS_q0weh5.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807803/SIMBOLO_heqqfp.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771807804/ETIQUETA_p4megn.jpg',
  ],
  sizes: SIZES,
},

//bahia
{
  id: 'bahia-2025/26-I',
  name: 'Camisa Puma Bahia I - 2025/26 Torcedor - Masculina',
  team: 'Bahia',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771808538/FRENTE_ryttc1.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808538/FRENTE_ryttc1.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808536/FRENTE_2_drzcje.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808534/COSTAS_nkrky7.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808542/SIMBOLO_a1zbgr.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808544/PUMA_ff7xm2.jpg',
  ],
  sizes: SIZES,
},
{
  id: 'bahia-2025/26-II',
  name: 'Camisa Puma Bahia II - 2025/26 Torcedor - Masculina',
  team: 'Bahia',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771808612/FRENTE_sbdazl.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808612/FRENTE_sbdazl.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808611/FRENTE_2_hkpqq2.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808568/COSTAS_v6oztq.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808611/SIMBOLO_n4jfa1.jpg',
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771808614/ETIQUETA_och8yu.jpg',
  ],
  sizes: SIZES,
},

//ceara
{
  id: 'ceara-2025/26-I',
  name: 'Camisa Vozão Ceará I - 2025/26 Torcedor - Masculina',
  team: 'Ceará',
  category: 'brasileiras',
  price: 179.99,
  image: 'https://res.cloudinary.com/djow54hvj/image/upload/v1771809115/FRENTE_hipbkx.jpg',
  images: [
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771809115/FRENTE_hipbkx.jpg',  // Foto frontal
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771809113/FRENTE_2_xvid1g.jpg',  // Foto lateral
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771809110/COSTAS_gur6zu.jpg',  // Foto de costas
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771809108/SIMBOLO_kayvdj.jpg',  // Detalhe
    'https://res.cloudinary.com/djow54hvj/image/upload/v1771809107/ETIQUETA_vro7y1.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'barcelona-2024',
    name: 'Barcelona 24/25 — Titular',
    team: 'FC Barcelona',
    category: 'europeias',
    price: 299.90,
    image: 'https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'manchester-city-2024',
    name: 'Manchester City 24/25 — Titular',
    team: 'Manchester City FC',
    category: 'europeias',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'psg-2024',
    name: 'PSG 24/25 — Titular',
    team: 'Paris Saint-Germain',
    category: 'europeias',
    price: 289.90,
    image: 'https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'liverpool-2024',
    name: 'Liverpool 24/25 — Titular',
    team: 'Liverpool FC',
    category: 'europeias',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'juventus-2024',
    name: 'Juventus 24/25 — Titular',
    team: 'Juventus FC',
    category: 'europeias',
    price: 279.90,
    image: 'https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'chelsea-2024',
    name: 'Chelsea 24/25 — Titular',
    team: 'Chelsea FC',
    category: 'europeias',
    price: 269.90,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'inter-milan-2024',
    name: 'Inter de Milão 24/25 — Titular',
    team: 'FC Internazionale',
    category: 'europeias',
    price: 269.90,
    image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
    sizes: SIZES,
  },
  {
    id: 'flamengo-retro-1981',
    name: 'Flamengo 1981 — Retrô',
    team: 'Flamengo',
    category: 'retros',
    price: 199.90,
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=600&q=80',
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
    images: [
    'https://imgur.com/foto1.jpg',  // Foto frontal
    'https://imgur.com/foto2.jpg',  // Foto lateral
    'https://imgur.com/foto3.jpg',  // Foto de costas
    'https://imgur.com/foto4.jpg',  // Detalhe
    'https://imgur.com/foto5.jpg',  // Outro ângulo
  ],
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
