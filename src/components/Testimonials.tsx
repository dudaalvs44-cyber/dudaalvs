import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Star, Quote } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Testimonial } from "../types";

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      author: "",
      role: "",
      text: "Queria agradecer do fundo do meu coração por esse período que me ajudou com o tratamento energético.\nParece que eu estava em uma poeira de coisas que me cobriam e você veio, fez sua leitura e me deu uma chave pra que eu colocasse cada coisa no seu lugar. Acho que é muito difícil explicar isso pra quem não fez, pra quem não conhece. Mas, juntar a terapia com a sua leitura foi uma das coisas mais potentes que já vivenciei. Foi como trazer o meu eu de volta, como se o que tivesse perdido fosse encontrado.\nNunca vou saber descrever como foi viver essa experiência. Muito obrigada!\nIsso foi fundamental pra que eu conseguisse entrar em uma nova fase da minha vida.",
      rating: 5,
      avatar: "",
    },
    {
      id: "2",
      author: "",
      role: "",
      text: "Trabalho incrível com resultados surpreendentes. Mas uma dica: só procure o trabalho dela se estiver disposto(a) a ter sua vida transformada.",
      rating: 5,
      avatar: "",
    },
    {
      id: "5",
      author: "",
      role: "",
      text: "Passando para te fazer um resumo das minhas mudanças após toda sua ajuda, orientação e carinho.\nNo âmbito pessoal, consegui me desvencilhar de pessoas que estavam me causando problemas, atrasos e pesos emocionais.\nNo âmbito financeiro, comecei a destravar meus ganhos e passei a enxergar minha empresa de forma mais próspera, com resultados reais.\nMeu relacionamento, que andava muito complexo, com brigas, entraves e desencontros, melhorou muito. Hoje, nosso dia a dia está mais leve, feliz, e estamos mais próximos e unidos.\nNo campo mental, consigo fazer planos com mais clareza, dormir melhor e sentir minha energia se renovando a cada dia.",
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
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-semibold">
              VIDAS REGENERADAS
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide text-white leading-tight max-w-3xl mx-auto">
            Histórias de Transformações, Equilíbrio e Despertar da Consciência
          </h2>
          
          <p className="font-sans text-stone-400 text-xs sm:text-sm leading-relaxed tracking-wider font-light max-w-lg mx-auto">
            Depoimentos reais de pessoas que vivenciaram a harmonia e a prática dos atendimentos.
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
