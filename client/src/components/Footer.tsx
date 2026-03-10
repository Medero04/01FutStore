// ============================================================
// 01FutStore — Footer Component
// Design: Luxury Brutalism — minimal, gold accents
// ============================================================

import { MessageCircle, Instagram, Mail, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] border-t border-[#1a1a1a] pt-16 pb-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Trust Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16 pb-16 border-b border-[#111]">
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-[#111] border border-[#222] group-hover:border-[#D4AF37] transition-colors">
              <ShieldCheck className="text-[#D4AF37]" size={24} />
            </div>
            <div>
              <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider">Compra Segura</h4>
              <p className="text-[#555] text-xs font-body">Seus dados protegidos</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-[#111] border border-[#222] group-hover:border-[#D4AF37] transition-colors">
              <Truck className="text-[#D4AF37]" size={24} />
            </div>
            <div>
              <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider">Envio Rápido</h4>
              <p className="text-[#555] text-xs font-body">Para todo o Brasil</p>
            </div>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="p-3 bg-[#111] border border-[#222] group-hover:border-[#D4AF37] transition-colors">
              <RotateCcw className="text-[#D4AF37]" size={24} />
            </div>
            <div>
              <h4 className="text-white font-heading font-bold text-sm uppercase tracking-wider">Garantia Premium</h4>
              <p className="text-[#555] text-xs font-body">Qualidade assegurada</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img 
              src="https://res.cloudinary.com/djow54hvj/image/upload/v1771654165/tipo_mmgtv9.jpg" 
              alt="01FutStore Logo" 
              style={{ height: '45px', width: 'auto' }}
              className="mb-6 hover:opacity-80 transition-opacity"
            />
            <p className="text-[#666] font-body text-sm leading-relaxed mb-6">
              A 01FutStore é o destino definitivo para colecionadores e amantes do futebol que buscam mantos premium com o mais alto padrão de qualidade e fidelidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#999] hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#111] border border-[#222] flex items-center justify-center text-[#999] hover:text-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-widest uppercase mb-6 relative inline-block">
              Coleções
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D4AF37]"></span>
            </h4>
            <ul className="space-y-3">
              {['Copa do Mundo 2026', 'Times Brasileiros', 'Times Europeus', 'Camisas Retrôs'].map(item => (
                <li key={item}>
                  <button className="text-[#666] font-body text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#222] group-hover:bg-[#D4AF37] transition-colors"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-widest uppercase mb-6 relative inline-block">
              Suporte
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D4AF37]"></span>
            </h4>
            <ul className="space-y-3">
              {['Minha Conta', 'Rastrear Pedido', 'Trocas e Devoluções', 'Termos de Uso'].map(item => (
                <li key={item}>
                  <button className="text-[#666] font-body text-sm hover:text-[#D4AF37] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 bg-[#222] group-hover:bg-[#D4AF37] transition-colors"></span>
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-heading font-bold text-sm tracking-widest uppercase mb-6 relative inline-block">
              Atendimento
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-[#D4AF37]"></span>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-[#D4AF37] mt-0.5" />
                <div>
                  <p className="text-white text-xs font-heading uppercase tracking-wider mb-1">E-mail</p>
                  <a href="mailto:contato@01futstore.com" className="text-[#666] text-sm hover:text-[#D4AF37] transition-colors">
                    contato@01futstore.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle size={18} className="text-[#D4AF37] mt-0.5" />
                <div>
                  <p className="text-white text-xs font-heading uppercase tracking-wider mb-1">WhatsApp</p>
                  <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className="text-[#666] text-sm hover:text-[#D4AF37] transition-colors">
                    (11) 99999-9999
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#111] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[#444] font-body text-[10px] tracking-widest uppercase">
            © {currentYear} 01FutStore. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-6">
            <img src="https://res.cloudinary.com/djow54hvj/image/upload/v1771655000/payments_badges_gold_k4z5j8.png" alt="Pagamentos" className="h-6 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-help" title="Aceitamos Cartões, Pix e Boleto" />
          </div>
          <p className="text-[#444] font-body text-[10px] tracking-widest uppercase">
            Desenvolvido com Paixão pelo Futebol
          </p>
        </div>
      </div>
    </footer>
  );
}
