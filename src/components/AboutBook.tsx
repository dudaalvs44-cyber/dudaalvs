import { motion } from "motion/react";
import { Atom, Compass, Lightbulb, Compass as Consciencia, Sparkles, Orbit } from "lucide-react";

export default function AboutBook() {
  const pillars = [
    {
      icon: Atom,
      title: "Física Quântica",
      desc: "Deixamos de lado os dogmas mecânicos para abraçar o fato comprovado: o observador altera a realidade. Compreenda o campo unificado de possibilidades que molda sua saúde física e emocional.",
    },
    {
      icon: Compass,
      title: "Radiestesia Vibracional",
      desc: "Aprenda a decifrar as energias sutis de ambientes e de pessoas. A radiestesia atua como um tradutor biológico para medir frequências ocultas e reestabelecer o equilíbrio perfeito.",
    },
    {
      icon: Lightbulb,
      title: "O Poder da Mente",
      desc: "Mente e cérebro correlacionados numa sinfonia eletromagnética. Descubra como programar suas ondas cerebrais para gerar cura celular autodirigida e regenerar canais de força obstruídos.",
    },
    {
      icon: Orbit,
      title: "Conexão e Expansão",
      desc: "Uma expansão pragmática que conecta a sabedoria transcendental do espírito com a exatidão biológica moderna, unificando seus chakras e corpos energéticos sutis.",
    },
  ];

  return (
    <section
      id="o-livro"
      className="relative pt-16 pb-8 md:pt-24 md:pb-10 px-4 md:px-8 overflow-hidden bg-black/30"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-semibold">
              O PROPÓSITO SUPREMO
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-white leading-tight">
            A Fusão Inevitável de Duas Grandes Eras
          </h2>
          
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed tracking-wider font-light">
            Entender como curar a sua vida não é um ato de misticismo abstrato, mas de domínio da sua natureza bioenergética. O livro desvenda cientificamente como alinhar a biologia profunda à vibração cósmica.
          </p>
        </div>

        {/* Detailed text & beautiful visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center mb-16 md:mb-20">
          
          {/* Poetic & Deep Scientific Narrative */}
          <div className="space-y-6 text-stone-300 text-sm sm:text-base leading-relaxed tracking-wide font-light">
            <h3 className="font-display text-xl md:text-2xl text-gold-300 font-medium">
              Por que a medicina e a física modernas estão convergindo neste código?
            </h3>
            
            <p>
              Ao longo de anos de pesquisas e de atendimentos, a autora decodificou um padrão unificado no qual as emoções humanas atuam com assinaturas de Hertz mensuráveis. Sentimentos estagnados de angústia ou de escassez operam em baixas frequências que corroem o tecido da matéria biológica.
            </p>
            
            <p className="border-l-2 border-gold-400/30 pl-4 py-2 italic text-stone-400 bg-white/[0.01]">
              "Quando você altera o spin dos seus átomos pelo poder da intenção e do alinhamento radiestésico, a biologia obedece. A cura não é algo que você compra, é um estado que você sintoniza."
            </p>
            
            <p>
              Em <strong className="text-white font-normal">O Código Energético da Cura</strong>, você aprenderá técnicas de autoavaliação vibracional, a utilizar instrumentos clássicos da radiestesia e a formatar meditações coerentes capazes de reorganizar a entropia do seu próprio corpo orgânico.
            </p>
          </div>

          {/* Interactive Aura Box / visual layout */}
          <div className="relative p-8 rounded-3xl border border-gold-400/10 bg-gradient-to-tr from-gold-400/[0.02] via-[#0b0818]/60 to-[#120a2e]/40 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl" />
            
            <span className="font-mono text-[9px] tracking-widest text-gold-400/60 uppercase block mb-2">CAMPOS UNIFICADOS</span>
            <h4 className="font-display text-lg text-white font-medium mb-4">Os Graus Espirituais da Cura</h4>
            
            <div className="space-y-6">
              {[
                { lvl: "Frequência Mental", freq: "80Hz - 250Hz", text: "Coerência dos pensamentos e cancelamento de crenças cristalizadas." },
                { lvl: "Frequência Cardíaca", freq: "350Hz - 500Hz", text: "O dínamo magnético do peito. Expansão do sentimento e gratidão ativa." },
                { lvl: "Frequência Consciencial", freq: "500Hz - 700Hz+", text: "Espírito e matéria fundidos na radiestesia quântica. Paz duradoura." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start pb-4 border-b border-white/[0.04] last:border-0 last:pb-0">
                  <div className="font-mono text-xs text-gold-400 bg-gold-400/10 h-7 w-7 rounded-lg flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-white">{item.lvl}</span>
                      <span className="font-mono text-[10px] text-gold-400 bg-gold-400/5 px-2 py-0.5 rounded border border-gold-400/10">{item.freq}</span>
                    </div>
                    <p className="text-xs text-stone-400 font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid with elegant minimal gold ornaments */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="p-6 rounded-2xl bg-black/40 border border-white/[0.05] hover:border-gold-500/20 hover:bg-[#07060a] transition-all duration-300 flex flex-col items-start gap-4 cursor-pointer group"
              >
                <div className="p-3 rounded-xl bg-gold-400/[0.04] border border-gold-400/20 text-gold-300 group-hover:text-gold-200 group-hover:bg-gold-400/[0.08] transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base text-stone-200 font-medium group-hover:text-gold-300 transition-colors">
                  {pillar.title}
                </h4>
                <p className="text-xs text-stone-400 leading-relaxed font-light">
                  {pillar.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
