// ============================================================
// 01FutStore — FeaturesBanner Component
// Design: Luxury Brutalism — gold icons, dark background
// ============================================================

import { Truck, Shield, RefreshCw, Star } from 'lucide-react';

const features = [
  {
    icon: Truck,
    title: 'Entrega Rápida',
    desc: 'Envio para todo o Brasil',
  },
  {
    icon: Shield,
    title: 'Qualidade Premium',
    desc: 'Produtos originais garantidos',
  },
  {
    icon: RefreshCw,
    title: 'Troca Fácil',
    desc: 'Política de troca simplificada',
  },
  
  {
    icon: Star,
    title: 'Atendimento VIP',
    desc: 'Suporte via WhatsApp 24h',
  },
];

export default function FeaturesBanner() {
  return (
    <section className="py-12 bg-black border-y border-[#111]">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 group transition-transform duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-12 h-12 flex-shrink-0 border border-[#D4AF37]/20 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/5 transition-all duration-500">
                  <Icon size={20} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider mb-1 group-hover:text-[#D4AF37] transition-colors">
                    {feat.title}
                  </h4>
                  <p className="text-[#555] font-body text-xs leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
