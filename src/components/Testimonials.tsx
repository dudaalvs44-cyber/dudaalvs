import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      author: "G.R.",
      role: "Belo Horizonte, Atendimento Individual de Alinhamento e Divórcio Energético",
      text: "Você veio, fez sua leitura e me deu uma chave para que eu colocasse cada coisa no seu lugar. Foi como trazer o meu eu de volta.",
      rating: 5,
      avatar: "",
    },
    {
      id: "2",
      author: "V.Q.",
      role: "Belo Horizonte, Atendimento Individual de Alinhamento e Divórcio Energético",
      text: "Trabalho incrível com resultados surpreendentes. Mas uma dica: só procure o trabalho dela se estiver disposto a ter sua vida transformada.",
      rating: 5,
      avatar: "",
    },
    {
      id: "5",
      author: "R.V.",
      role: "Belo Horizonte, Atendimento Individual de Alinhamento e Divórcio Energético",
      text: "Consegui me desvencilhar de pessoas que me causavam problemas. Destravar meus ganhos financeiros. Meu relacionamento melhorou muito. No campo mental, consigo fazer planos com mais clareza e sentir minha energia se renovando a cada dia.",
      rating: 5,
      avatar: "",
    },
    {
      id: "6",
      author: "L. G.",
      role: "Leitora do Livro",
      text: "Oi, Vivi! Amei te conhecer! O seu livro foi um chamado para te conhecer e sentir sua energia!",
      rating: 5,
      avatar: "",
    },
    {
      id: "7",
      author: "Luciana",
      role: "Leitora do Livro",
      text: "Amando seu livro! A sua linguagem simples está me encantando. Sinto que estamos conversando tomando um café.",
      rating: 5,
      avatar: "",
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);

  const handlePrev = () => {
    setActiveIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[activeIdx];

  return (
    <section
      id="depoimentos"
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#0c091b]/80 to-[#030303]"
    >
      {/* Aurora glow orb */}
      <div className="absolute right-[10%] bottom-[10%] w-[35vw] h-[35vw] rounded-full bg-violet-600/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Title Block */}
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2 md:gap-2.5 whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400 shrink-0" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-[0.2em] text-gold-400 uppercase font-semibold">
              resultados reais VIDAS QUE MUDARAM
            </span>
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white leading-tight max-w-3xl mx-auto">
            Histórias de Transformações, Equilíbrio e Despertar da Consciência
          </h2>
          
          <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed tracking-wider font-light max-w-lg mx-auto">
            Relatos de quem vivenciou os atendimentos e a leitura do livro.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative" id="testimonials-carrousel">
          
          {/* Quote icon background ornament */}
          <Quote className="absolute -left-4 -top-12 w-28 h-28 text-gold-400/[0.03] rotate-180 pointer-events-none select-none" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-gold-400/15 relative bg-zinc-950/40 backdrop-blur-xl"
            >
              <div className="flex flex-col items-center text-center space-y-6">
                
                {/* Gold Stars */}
                <div className="flex items-center justify-center gap-1.5 text-gold-400">
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" className="stroke-gold-400" />
                  ))}
                </div>

                {/* Emotional Text */}
                <p className="font-sans text-stone-200 text-sm sm:text-base md:text-lg leading-relaxed font-light tracking-wide italic max-w-2xl mx-auto whitespace-pre-line">
                  “{activeTestimonial.text}”
                </p>

                {/* Author Info */}
                {(activeTestimonial.author || activeTestimonial.role) && (
                  <div className="pt-2 text-center">
                    {activeTestimonial.author && (
                      <h4 className="font-display text-sm sm:text-base font-semibold tracking-wide text-white">
                        {activeTestimonial.author}
                      </h4>
                    )}
                    {activeTestimonial.role && (
                      <p className="font-sans text-[11px] sm:text-xs text-gold-400 mt-1 max-w-lg mx-auto opacity-90 font-light leading-relaxed">
                        {activeTestimonial.role}
                      </p>
                    )}
                  </div>
                )}

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-gold-400/20 bg-black/40 text-gold-400 hover:text-white hover:border-gold-400/60 transition-all active:scale-95 cursor-pointer"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    activeIdx === i ? "w-6 bg-gold-400" : "w-1.5 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Depoimento ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-gold-400/20 bg-black/40 text-gold-400 hover:text-white hover:border-gold-400/60 transition-all active:scale-95 cursor-pointer"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
