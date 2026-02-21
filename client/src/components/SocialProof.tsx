// ============================================================
// 01FutStore — SocialProof Component
// Design: Luxury Brutalism — testimonials, star ratings
// ============================================================

import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Carlos M.',
    city: 'São Paulo, SP',
    text: 'Camisa do Flamengo chegou perfeita, qualidade incrível. Recomendo demais!',
    rating: 5,
    avatar: 'C',
  },
  {
    name: 'Ana P.',
    city: 'Rio de Janeiro, RJ',
    text: 'Comprei a camisa do Brasil 2026 e ficou melhor do que esperava. Atendimento top pelo WhatsApp.',
    rating: 5,
    avatar: 'A',
  },
  {
    name: 'Rafael S.',
    city: 'Belo Horizonte, MG',
    text: 'Camisas retrôs são um espetáculo. Já é minha terceira compra aqui. Loja premium de verdade.',
    rating: 5,
    avatar: 'R',
  },
];

export default function SocialProof() {
  return (
    <section className="py-16 bg-[#050505]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-3">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#D4AF37]" />
            <span className="text-[#D4AF37] text-xs font-heading tracking-[0.3em] uppercase">
              Avaliações
            </span>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#D4AF37]" />
          </div>
          <h2
            className="text-white text-4xl lg:text-5xl font-display"
            style={{ fontFamily: "'Bebas Neue', sans-serif", letterSpacing: '0.05em' }}
          >
            O que dizem nossos clientes
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="bg-[#111] border border-[#1a1a1a] p-6 hover:border-[#D4AF37]/40 transition-all duration-300"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-[#D4AF37] fill-[#D4AF37]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-[#aaa] font-body text-sm leading-relaxed mb-5 italic">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] font-heading font-bold text-sm">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-white font-heading font-semibold text-sm">{t.name}</p>
                  <p className="text-[#555] font-body text-xs">{t.city}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rating summary */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6 py-8 border-t border-[#1a1a1a]">
          <div className="text-center">
            <div
              className="text-[#D4AF37] text-6xl font-display"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              5.0
            </div>
            <div className="flex gap-1 justify-center mt-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-[#D4AF37] fill-[#D4AF37]" />
              ))}
            </div>
            <p className="text-[#555] font-body text-xs mt-1">Avaliação média</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-[#1a1a1a]" />
          <div className="text-center">
            <div
              className="text-[#D4AF37] text-6xl font-display"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              500+
            </div>
            <p className="text-[#555] font-body text-xs mt-1">Clientes satisfeitos</p>
          </div>
          <div className="hidden sm:block w-px h-16 bg-[#1a1a1a]" />
          <div className="text-center">
            <div
              className="text-[#D4AF37] text-6xl font-display"
              style={{ fontFamily: "'Bebas Neue', sans-serif" }}
            >
              100%
            </div>
            <p className="text-[#555] font-body text-xs mt-1">Qualidade garantida</p>
          </div>
        </div>
      </div>
    </section>
  );
}
