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
    <section
      className="py-10 border-y border-[#1a1a1a]"
      style={{
        backgroundImage: `url("https://private-us-east-1.manuscdn.com/sessionFile/tznEG2HPL3RJ4g678AATFS/sandbox/QsN8Klu5DmhlE6q2LbQGXl-img-4_1771642945000_na1fn_c2VjdGlvbi1iZy10ZXh0dXJl.jpg?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvdHpuRUcySFBMM1JKNGc2NzhBQVRGUy9zYW5kYm94L1FzTjhLbHU1RG1obEU2cTJMYlFHWGwtaW1nLTRfMTc3MTY0Mjk0NTAwMF9uYTFmbl9jMlZqZEdsdmJpMWlaeTEwWlhoMGRYSmwuanBnP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=quC2BhlqJHtPpG3BgPtTZrdhW~jC6eY9CAKJUWCg6s5vdHfqhyYCO3acbsLwgxNZy7GxjJwva6ByOQ2ClgKqfDhXR803XlULK5dDWSwWroPznZYfhm9uHW4UKVmwJ9~16~s11Y1C4RnFph3YHvvGJf9669AqTtBRhDQ5zUrHf5XXlZSxjjHLo5~INrIN7mNKXhvhYuuGvWc2C7b~oqlPT5hLLXxa2m60B00hpp3W6LoMemX8IMd7kxTX8M~~R~hGW0VZkMFuw3YuBS8DqIhLp2ZOZ4YmAO5Lzb12oh3xKH5zBhYoqA9vju9LTPGjqjsei0CuGaC6~IQ7s17lmIr00g__")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="flex items-center gap-4 group"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="w-10 h-10 flex-shrink-0 border border-[#D4AF37]/40 flex items-center justify-center group-hover:border-[#D4AF37] group-hover:bg-[#D4AF37]/10 transition-all duration-300">
                  <Icon size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-white font-heading font-semibold text-sm tracking-wide">
                    {feat.title}
                  </p>
                  <p className="text-[#666] font-body text-xs mt-0.5">
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
