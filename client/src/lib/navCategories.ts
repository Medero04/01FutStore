// ============================================================
// 01FutStore — Navigation Categories Structure
// Estrutura de categorias, subcategorias e times para navbar
// Caminho: client/src/lib/navCategories.ts
// ============================================================

import FeaturesBanner from "@/components/FeaturesBanner";
import ProductCard from "@/components/ProductCard";
import ProductDetail from "@/components/ProductDetail";
import SocialProof from "@/components/SocialProof";
import { features } from "process";

export interface NavSubcategory {
  id: string;
  label: string;
  items: string[];
}

export interface NavCategory {
  id: string;
  label: string;
  subcategories: NavSubcategory[];
}

export const NAV_CATEGORIES: NavCategory[] = [
  // ── Copa 2026: Continentes ──────────────────────────────────
  {
    id: 'copa2026',
    label: 'Copa 2026',
    subcategories: [
      {
        id: 'america',
        label: 'América',
        items: [
          'Argentina',
          'Brasil',
          'Canadá',
          'Curaçao',
          'Equador',
          'EUA',
          'Haiti',
          'México',
          'Panamá',
          'Paraguai',
          'Uruguai',
        ],
      },
      {
        id: 'europa',
        label: 'Europa',
        items: [
          'Alemanha',
          'Áustria',
          'Bélgica',
          'Croácia',
          'Escócia',
          'Espanha',
          'França',
          'Holanda',
          'Inglaterra',
          'Noruega',
          'Portugal',
          'Suíça',
        ],
      },
      {
        id: 'asia',
        label: 'Ásia',
        items: [
          'Arábia Saudita',
          'Catar',
          'China',
          'Coreia do Sul',
          'Irã',
          'Japão',
          'Jordânia',
          'Uzbequistão',
        ],
      },
      {
        id: 'africa',
        label: 'África',
        items: [
          'África do Sul',
          'Argélia',
          'Cabo Verde',
          'Costa do Marfim',
          'Egito',
          'Gana',
          'Marrocos',
          'Senegal',
          'Tunísia',
        ],
      },
      {
        id: 'oceania',
        label: 'Oceania',
        items: [
          'Austrália',
          'Nova Zelândia',
        ],
      },
    ],
  },

  // ── Brasileiras: Campeonatos ────────────────────────────────
  {
    id: 'brasileiras',
    label: 'Brasileiras',
    subcategories: [
      {
        id: 'paulista',
        label: 'Paulistão',
        items: [
          'Corinthians',
          'Palmeiras',
          'Santos',
          'São Paulo',
        ],
      },
      {
        id: 'carioca',
        label: 'Carioca',
        items: [
          'Botafogo',
          'Flamengo',
          'Fluminense',
          'Vasco',
        ],
      },
      {
        id: 'mineiro',
        label: 'Campeonato Mineiro',
        items: [
          'Atlético MG',
          'Cruzeiro',
        ],
      },
      {
        id: 'nordeste',
        label: 'Campeonato Nordeste',
        items: [
          'Bahia',
          'Ceará',
        ],
      },
      {
        id: 'sul',
        label: 'Campeonato Sul',
        items: [
          'Grêmio',
          'Internacional',
        ],
      },
    ],
  },

  // ── Europeias: Ligas ────────────────────────────────────────
  {
    id: 'europeias',
    label: 'Europeias',
    subcategories: [
      {
        id: 'laliga',
        label: 'La Liga',
        items: [
          'Atlético de Madrid',
          'Barcelona',
          'Real Madrid',
        ],
      },
      {
        id: 'ligue1',
        label: 'Ligue 1',
        items: [
          'PSG',
        ],
      },
      {
        id: 'premier',
        label: 'Premier League',
        items: [
          'Arsenal',
          'Chelsea',
          'Liverpool',
          'Man City',
          'Man United',
          'Newcastle',
          'Tottenham',
        ],
      },
      {
        id: 'bundesliga',
        label: 'Bundesliga',
        items: [
          'Bayern',
          'Borussia',
        ],
      },
      {
        id: 'serieA',
        label: 'Série A',
        items: [
          'Benfica',
          'Inter de Milão',
          'Juventus',
          'Milan',
          'Porto',
          'Sporting',
        ],
      },
    ],
  },

  // ── Retrôs: Temas ──────────────────────────────────────────
  {
    id: 'retros',
    label: 'Retrôs',
    subcategories: [
      {
        id: 'gigantes-europa',
        label: 'Gigantes da Europa',
        items: [
          'Barcelona',
          'Bayern',
          'Inter de Milão',
          'Liverpool',
          'Manchester United',
          'Milan',
          'Real Madrid',
        ],
      },
      {
        id: 'guerreiros-asia',
        label: 'Guerreiros da Ásia',
        items: [
          'Arábia Saudita',
          'China',
          'Coreia do Sul',
          'Irã',
          'Japão',
          'Tailândia',
          'Vietnã',
        ],
      },
      {
        id: 'lendas-america',
        label: 'Lendas da América',
        items: [
          'Argentina',
          'Brasil',
          'Chile',
          'Colômbia',
          'Paraguai',
          'Peru',
          'Uruguai',
        ],
      },
      {
        id: 'reis-africa',
        label: 'Reis da África',
        items: [
          'Camarões',
          'Costa do Marfim',
          'Egito',
          'Gana',
          'Marrocos',
          'Nigéria',
          'Senegal',
        ],
      },
    ],
  },
];
