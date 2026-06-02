import { Heart, Sparkles, Shield, ClipboardList, Lock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="app-footer"
      className="relative py-16 px-4 md:px-8 bg-zinc-950 border-t border-gold-400/10 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] rounded-full bg-gold-400/[0.02] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center space-y-12">
        
        {/* Core inspirational quote in luxury display typography */}
        <div className="max-w-xl space-y-3">
          <div className="flex items-center justify-center gap-1.5 text-gold-400">
            <Sparkles size={14} className="animate-spin-slow" />
            <span className="text-[10px] font-mono uppercase tracking-[0.2em]">VIVIANE MIRANDA</span>
            <Sparkles size={14} className="animate-spin-slow" />
          </div>
          
          <h3 className="font-display text-lg sm:text-xl md:text-2xl text-stone-200 italic font-medium leading-relaxed tracking-wide">
            “A verdadeira cura começa quando você desperta sua consciência.”
          </h3>
        </div>

        {/* Division border line with gold center mark */}
        <div className="w-full max-w-sm flex items-center justify-between opacity-30">
          <div className="h-px bg-gradient-to-r from-transparent to-gold-400 w-[42%]" />
          <span className="text-gold-400 text-xs font-serif font-bold">Φ</span>
          <div className="h-px bg-gradient-to-l from-transparent to-gold-400 w-[42%]" />
        </div>

        {/* Footer info branding & legal alignments */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-6 pt-4 text-xs tracking-wider font-light text-stone-500">
          
          {/* Copyright description */}
          <div className="text-center md:text-left space-y-1">
            <span className="block font-mono text-[10px] text-stone-400 uppercase tracking-widest font-semibold">
              O Código Energético da Cura
            </span>
            <span className="block text-[10px] font-mono">
              © {currentYear} Viviane Marques de Miranda. Todos os direitos reservados.
            </span>
          </div>

          {/* Luxury Legal terms buttons */}
          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-[9px] uppercase text-stone-500 hover:text-stone-300">
            <a href="#termos" className="hover:text-gold-400 transition-colors flex items-center gap-1">
              <ClipboardList size={10} /> Termos de Uso
            </a>
            <a href="#privacidade" className="hover:text-gold-400 transition-colors flex items-center gap-1">
              <Lock size={10} /> Privacidade Assegurada
            </a>
            <div className="flex items-center gap-1 select-none text-gold-500/60 font-semibold">
              <Shield size={10} /> Pagamento 100% Seguro
            </div>
          </div>

        </div>

      </div>
    </footer>
  );
}
