// ============================================================
// 01FutStore — Footer Component
// Design: Luxury Brutalism — minimal, gold accents
// ============================================================

import { MessageCircle, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] py-12">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
              <img 
                src="https://res.cloudinary.com/djow54hvj/image/upload/v1771654165/tipo_mmgtv9.jpg" 
                alt="01FutStore Logo" 
                style={{ height: '50px', width: 'auto' }}
                className="group-hover:opacity-80 transition-opacity"
              />
            <p className="text-[#555] font-body text-sm leading-relaxed max-w-xs">
              A loja premium de camisas de futebol. Qualidade, exclusividade e paixão pelo esporte em cada peça.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Categorias
            </h4>
            <ul className="space-y-2">
              {['Copa do Mundo 2026', 'Times Brasileiros', 'Times Europeus', 'Camisas Retrôs'].map(item => (
                <li key={item}>
                  <span className="text-[#555] font-body text-sm hover:text-[#D4AF37] transition-colors cursor-pointer">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-semibold text-sm tracking-widest uppercase mb-4">
              Contato
            </h4>
            <div className="space-y-3">
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#555] hover:text-[#25D366] transition-colors group"
              >
                <MessageCircle size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm">WhatsApp</span>
              </a>
              <a
                href="#"
                className="flex items-center gap-3 text-[#555] hover:text-[#D4AF37] transition-colors group"
              >
                <Instagram size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm">@01futstore</span>
              </a>
              <a
                href="mailto:contato@01futstore.com"
                className="flex items-center gap-3 text-[#555] hover:text-[#D4AF37] transition-colors group"
              >
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <span className="font-body text-sm">contato@01futstore.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Gold divider */}
        <div className="gold-line mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#333] font-body text-xs tracking-wide">
            © 2026 01FutStore. Todos os direitos reservados.
          </p>
          <p className="text-[#333] font-body text-xs tracking-wide">
            Camisas Premium · Entrega Rápida · Qualidade Garantida
          </p>
        </div>
      </div>
    </footer>
  );
}
