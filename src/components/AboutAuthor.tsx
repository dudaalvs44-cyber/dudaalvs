import { motion } from "motion/react";
import { Sparkles, Brain, GraduationCap } from "lucide-react";

const authorImg = "https://i.postimg.cc/fRN53MX0/Whats-App-Image-2026-05-26-at-16-27-18.jpg";

export default function AboutAuthor() {
  return (
    <section
      id="a-autora"
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#030303] to-[#0c091b]"
    >
      {/* Background glow orb */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-gold-400/[0.02] blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-semibold">
              Trajetória Editorial
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-white leading-tight">
            Sobre a Autora
          </h2>
          
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed tracking-wider font-light">
            Conheça o percurso científico e o propósito integrativo da autora Viviane Marques de Miranda.
          </p>
        </div>

        {/* Editorial style Bio Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Picture and Quote */}
          <div className="lg:col-span-6 flex flex-col items-center text-center space-y-4 w-full mx-auto">
            <div className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-full aspect-[4/5] rounded-2xl overflow-hidden border border-gold-400/20 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              <img
                src={authorImg}
                alt="Viviane Marques de Miranda - Autora do livro"
                className="w-full h-full object-cover scale-[1.25] origin-center transition-transform duration-700 hover:scale-[1.30]"
                referrerPolicy="no-referrer"
                id="author-avatar-img"
              />
            </div>
            
            <div className="text-center pt-8 sm:pt-10 pb-2">
              <h3 className="font-display text-2xl text-white font-semibold tracking-wide">
                Viviane Marques de Miranda
              </h3>
            </div>
          </div>

          {/* Right Column: Bio details and credentials */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6 text-stone-300 text-sm sm:text-base leading-relaxed tracking-normal font-light text-left">
              <p className="border-l-2 border-gold-400/40 pl-4 py-1 text-white font-normal bg-gold-400/[0.01]">
                Viviane Marques de Miranda é bióloga, educadora e radiestesista, graduada em Ciências Biológicas pela PUC Minas, com especializações em Microbiologia, Saúde Pública e Administração dos Serviços de Saúde, Neurociência e PNL.
              </p>
              
              <p>
                Com mais de trinta anos de experiência na docência, dedica-se ao estudo das relações entre biologia, mente e energia.
              </p>
              
              <p>
                Neste livro, integra fundamentos científicos, neurociência e comportamento humano às práticas energéticas, apresentando uma abordagem integrativa sobre a relação entre mente, biologia e consciência no caminho do equilíbrio e da expansão.
              </p>
            </div>

            {/* Premium details highlights */}
            <div className="border-t border-white/[0.05] pt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex gap-3 items-center">
                <div className="p-2 ml-1 rounded-lg bg-gold-400/5 border border-gold-400/10 text-gold-400 shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Graduação</span>
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">PUC Minas</span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="p-2 ml-1 rounded-lg bg-gold-400/5 border border-gold-400/10 text-gold-400 shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Docência</span>
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">+30 Anos de Experiência</span>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="p-2 ml-1 rounded-lg bg-gold-400/5 border border-gold-400/10 text-gold-400 shrink-0">
                  <Brain className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-stone-500 uppercase tracking-wider block">Especialização</span>
                  <span className="text-xs sm:text-sm font-semibold text-white tracking-wide">Neurociência & PNL</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
