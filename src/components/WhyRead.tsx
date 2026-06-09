import { motion } from "motion/react";
import { Key, Compass, Award, Brain, Sparkles, Heart, Activity, ShoppingBag } from "lucide-react";

export default function WhyRead() {
  const benefits = [
    {
      icon: Compass,
      title: "Fundamentos reais da radiestesia",
      desc: "A radiestesia não é prática recente nem crença sem fundamento. O livro apresenta sua história milenar e os princípios da física que explicam o funcionamento do pêndulo, da energia de forma e dos cristais como instrumentos de leitura bioenergética.",
    },
    {
      icon: Key,
      title: "O campo energético do seu corpo",
      desc: "Aura, chakras e corpos sutis são apresentados sob uma perspectiva bioenergética. A tabela de Hawkins oferece um mapa de níveis de consciência que organiza essa leitura e mostra como padrões emocionais e o campo energético se relacionam dentro dessa perspectiva integrativa.",
    },
    {
      icon: Activity,
      title: "Energia nos ambientes e nas relações",
      desc: "Os espaços onde vivemos e as relações que mantemos carregam campos energéticos que afetam nosso equilíbrio. O livro mostra como essa leitura e harmonização são feitas na prática, incluindo o uso de cristais e ervas no processo de reequilíbrio.",
    },
    {
      icon: Brain,
      title: "Frequências sonoras e o corpo",
      desc: "As frequências sonoras atuam diretamente sobre o organismo. O livro mostra como usá-las como ferramenta de harmonização no dia a dia.",
    },
    {
      icon: Sparkles,
      title: "Espiritualidade, consciência e materialização",
      desc: "O livro aborda espiritualidade, consciência e materialização de objetivos sem dogmas e sem contradição com o conhecimento científico. Uma leitura que amplia a percepção sem pedir que o leitor abandone o que já sabe.",
    },
    {
      icon: Heart,
      title: "Práticas para aplicar em casa",
      desc: "Cada capítulo termina com técnicas de autoavaliação e reequilíbrio que o leitor pode fazer sozinho, sem atendimento presencial. Os protocolos incluem uso de pêndulo, cristais, ervas e frequências sonoras, com orientações claras sobre cada etapa.",
    },
  ];

  return (
    <section
      id="por-que-ler"
      className="relative pt-8 pb-16 md:pt-10 md:pb-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#030303]/60 to-[#0c091b]/80"
    >
      {/* Background glow orb */}
      <div className="absolute right-0 top-1/4 w-[35vw] h-[35vw] rounded-full bg-gold-400/[0.03] blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-[35vw] h-[35vw] rounded-full bg-violet-600/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* CTA "Comprar Livro" Button with beautiful glowing highlights */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.25 }}
          className="mt-2 mb-16 md:mt-4 md:mb-24 text-center flex flex-col items-center justify-center relative"
        >
          {/* Ambient inner soft green portal glow behind call to action */}
          <div className="absolute -inset-8 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <button
            onClick={() => {
              const element = document.getElementById("comprar");
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-3 px-12 py-5 rounded-2xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:via-emerald-500 hover:to-teal-500 text-white font-semibold shadow-[0_10px_35px_rgba(16,185,129,0.35)] hover:shadow-[0_15px_50px_rgba(16,185,129,0.65)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-xs sm:text-sm font-sans uppercase tracking-[0.12em] cursor-pointer"
            id="cta-vibracional-top-buy-btn"
          >
            {/* Visual highlight aura border around the container */}
            <span className="absolute -inset-px rounded-2xl border border-emerald-400/40 opacity-30 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            
            <ShoppingBag size={16} className="text-emerald-100 group-hover:scale-110 transition-transform duration-300" />
            <span className="font-bold">Comprar Livro</span>
          </button>
        </motion.div>
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-semibold">
              O QUE MUDA DENTRO DE VOCÊ
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-white leading-tight">
            O Que Cada Capítulo Vai Despertar
          </h2>
          
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed tracking-wider font-light">
            Não se trata de uma leitura teórica e estática. Cada capítulo foi desenhado como um portal iniciático para decodificar e reconfigurar as frequências da sua mente e do seu tônus vital.
          </p>
        </div>

        {/* Bento/Grid style for glassmorphic cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between group overflow-hidden relative"
              >
                {/* Dynamic glossy light reflex inside the card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/10 transition-colors" />

                <div className="space-y-6">
                  {/* Icon wrapper */}
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gold-500/10 border border-gold-500/25 text-gold-300 group-hover:text-gold-200 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                    <div className="absolute inset-0 rounded-xl bg-gold-400/5 animate-pulse" />
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-display text-lg text-white font-medium tracking-wide group-hover:text-gold-300 transition-colors">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-stone-400 leading-relaxed font-light tracking-wide">
                      {benefit.desc}
                    </p>
                  </div>
                </div>


              </motion.div>
            );
          })}
        </div>



      </div>
    </section>
  );
}
