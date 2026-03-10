// ============================================================
// 01FutStore — SocialProof Component
// Design: Luxury Brutalism — testimonials, star ratings
// ============================================================

import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos M.',
    city: 'São Paulo, SP',
    text: 'Camisa do Flamengo chegou perfeita, qualidade incrível. O tecido é muito confortável e os detalhes são idênticos aos originais. Recomendo demais!',
    rating: 5,
    avatar: 'C',
  },
  {
    name: 'Ana P.',
    city: 'Rio de Janeiro, RJ',
    text: 'Comprei a camisa do Brasil 2026 e ficou melhor do que esperava. Atendimento top pelo WhatsApp, tiraram todas as minhas dúvidas sobre o tamanho.',
    rating: 5,
    avatar: 'A',
  },
  {
    name: 'Rafael S.',
    city: 'Belo Horizonte, MG',
    text: 'As camisas retrôs são um espetáculo à parte. Já é minha terceira compra aqui e a qualidade se mantém impecável. Loja premium de verdade.',
    rating: 5,
    avatar: 'R',
  },
];

export default function SocialProof() {
  return (
    <section className="py-24 bg-black overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-heading tracking-[0.3em] uppercase">
              Depoimentos
            </span>
            <div className="h-px w-12 bg-[#D4AF37]" />
          </div>
          <h2
            className="text-white text-4xl lg:text-6xl font-display"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
          >
            A Voz dos Nossos Clientes
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="relative bg-[#080808] border border-[#111] p-8 group hover:border-[#D4AF37]/30 transition-all duration-500"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Quote Icon Decoration */}
              <Quote className="absolute top-6 right-8 text-[#D4AF37]/5 group-hover:text-[#D4AF37]/10 transition-colors" size={48} />
              
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#888] font-body text-sm leading-relaxed mb-8 relative z-10">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 border-t border-[#111] pt-6">
                <div className="w-11 h-11 bg-[#111] border border-[#222] group-hover:border-[#D4AF37]/50 flex items-center justify-center text-[#D4AF37] font-heading font-bold text-lg transition-colors">
                  {t.avatar}
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wide">{t.name}</h4>
                  <p className="text-[#444] font-body text-[10px] uppercase tracking-widest">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 py-12 border-y border-[#111]">
          <div className="text-center group">
            <div className="text-[#D4AF37] text-6xl font-display mb-2 group-hover:scale-110 transition-transform duration-500" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              5.0
            </div>
            <div className="flex gap-1 justify-center mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <p className="text-[#444] font-heading text-[10px] uppercase tracking-[0.2em]">Avaliação Média</p>
          </div>
          
          <div className="text-center group">
            <div className="text-[#D4AF37] text-6xl font-display mb-2 group-hover:scale-110 transition-transform duration-500" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              500+
            </div>
            <div className="h-px w-8 bg-[#222] mx-auto mb-4 group-hover:w-12 transition-all duration-500" />
            <p className="text-[#444] font-heading text-[10px] uppercase tracking-[0.2em]">Clientes Satisfeitos</p>
          </div>
          
          <div className="text-center group">
            <div className="text-[#D4AF37] text-6xl font-display mb-2 group-hover:scale-110 transition-transform duration-500" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
              100%
            </div>
            <div className="h-px w-8 bg-[#222] mx-auto mb-4 group-hover:w-12 transition-all duration-500" />
            <p className="text-[#444] font-heading text-[10px] uppercase tracking-[0.2em]">Qualidade Garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
}
