// ============================================================
// 01FutStore — Home Page (Layout Organizado)
// Design: Luxury Brutalism — with Carousels and Tabs
// ============================================================

import { useState, useMemo } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductGrid from '@/components/ProductGrid';
import ProductCarousel from '@/components/ProductCarousel';
import Footer from '@/components/Footer';
import FeaturesBanner from '@/components/FeaturesBanner';
import SocialProof from '@/components/SocialProof';
import ProductDetail from '@/components/ProductDetail';
import { type Category, type Product } from '@/lib/products';
import { useProdutos } from '@/hooks/useProdutos';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category | 'all'>('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const { products: PRODUCTS } = useProdutos();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTeam, setSelectedTeam] = useState<string | null>(null);

  // Produtos em Destaque (ex: Copa 2026) para o Carrossel
  const trendingProducts = useMemo(() => 
    PRODUCTS.filter(p => p.category === 'copa2026').slice(0, 8), 
  [PRODUCTS]);

  const handleCategoryChange = (cat: Category | 'all') => {
    setActiveCategory(cat);
    setSelectedTeam(null);
  };

  const handleTeamSelect = (team: string) => {
    setSelectedTeam(team);
    setTimeout(() => {
      document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query.toLowerCase());
    setSelectedTeam(null);
  };

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;
    if (selectedTeam) {
      result = result.filter(p =>
        p.team.toLowerCase().includes(selectedTeam.toLowerCase()) ||
        p.name.toLowerCase().includes(selectedTeam.toLowerCase())
      );
    } else if (activeCategory !== 'all') {
      result = result.filter(p => p.category === activeCategory);
    }
    if (searchQuery) {
      result = result.filter(p =>
        p.name.toLowerCase().includes(searchQuery) ||
        p.team.toLowerCase().includes(searchQuery) ||
        p.category.toLowerCase().includes(searchQuery)
      );
    }
    return result;
  }, [activeCategory, searchQuery, selectedTeam]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar
        activeCategory={activeCategory}
        onCategoryChange={handleCategoryChange}
        onSearch={handleSearch}
        onTeamSelect={handleTeamSelect}
      />

      <main>
        <Hero onShopNow={handleCategoryChange} />
        
        <FeaturesBanner />

        {/* SEÇÃO 1: Carrossel de Destaques */}
        <ProductCarousel 
          title="Lançamentos Copa 2026" 
          subtitle="Coleção Exclusiva"
          products={trendingProducts}
          onProductClick={setSelectedProduct}
        />

        {/* SEÇÃO 2: Grade de Produtos com Abas e Carregar Mais */}
        <ProductGrid
          activeCategory={activeCategory}
          onCategoryChange={handleCategoryChange}
          filteredProducts={filteredProducts}
          onProductClick={setSelectedProduct}
        />

        <SocialProof />
        <Footer />
      </main>

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
