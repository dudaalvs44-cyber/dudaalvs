import WhatsAppIcon from "./WhatsAppIcon";

export default function Contact() {
  // Simulated WhatsApp number for the contact button
  const whatsappNumber = "5511999998888"; 
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=Olá! Gostaria de tirar dúvidas sobre o livro O Código Energético da Cura.`;

  return (
    <section
      id="contato"
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-black/60 border-t border-white/[0.03]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-gold-400/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        
        {/* Title Block */}
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-semibold">
              SUPORTE E ATENDIMENTO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white leading-tight">
            Fale Conosco
          </h2>
          
          <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed tracking-wide font-light max-w-lg mx-auto">
            Tem dúvidas sobre o livro ou deseja agendar um atendimento individual de frequência energética? Clique abaixo para iniciar uma conversa direta de acolhimento.
          </p>
        </div>

        {/* Minimal Buttons Container */}
        <div className="flex items-center justify-center pt-4 max-w-md mx-auto">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-4 px-10 py-5 rounded-xl bg-gradient-to-b from-stone-900 to-black border border-gold-400/30 text-white hover:border-gold-300/60 shadow-[0_4px_20px_rgba(0,0,0,0.6),0_0_15px_rgba(197,141,52,0.06)] hover:shadow-[0_4px_30px_rgba(0,0,0,0.8),0_0_25px_rgba(197,141,52,0.25)] hover:scale-[1.01] transition-all duration-300 cursor-pointer text-center"
            id="whatsapp-contact-button"
          >
            {/* Ambient inner glow on hover */}
            <div className="absolute inset-0 rounded-xl bg-gold-400/[0.01] group-hover:bg-gold-400/[0.04] transition-colors duration-300 pointer-events-none" />
            
            <div className="p-2 rounded-lg bg-black/40 border border-white/5 group-hover:border-gold-400/20 transition-colors">
              <WhatsAppIcon size={18} className="shrink-0 drop-shadow-[0_0_6px_rgba(37,211,102,0.3)]" />
            </div>
            
            <span className="text-gold-300 font-semibold font-mono uppercase tracking-[0.12em] group-hover:text-gold-200 transition-colors text-xs text-left">
              Atendimento Individual
            </span>
          </a>
        </div>
        
        <p className="text-[10px] font-mono text-stone-500 uppercase tracking-widest mt-8">
          Resposta média em até 30 minutos em horário comercial • Atendimento Individualizado
        </p>
      </div>
    </section>
  );
}
