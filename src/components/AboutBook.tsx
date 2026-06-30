import { motion } from "motion/react";
import { Atom, Compass, Lightbulb, Compass as Consciencia, Sparkles, Orbit } from "lucide-react";

export default function AboutBook() {
  const pillars = [
    {
      icon: Atom,
      title: "Neurociência e Percepção",
      desc: "A neurociência já demonstrou que a forma como percebemos e interpretamos a realidade influencia diretamente nossas respostas biológicas. Emoções, intenções e crenças deixam marcas mensuráveis no organismo, e o livro mostra como trabalhar com isso conscientemente.",
    },
    {
      icon: Compass,
      title: "Radiestesia Vibracional",
      desc: "A radiestesia terapêutica propõe a leitura do campo energético de ambientes e pessoas, identificando padrões de desequilíbrio percebidos no campo, muitas vezes antes de se tornarem conscientes.",
    },
    {
      icon: Lightbulb,
      title: "O Poder da Mente",
      desc: "Mente e cérebro trabalham em uma sinfonia eletromagnética. Descubra como alinhar suas ondas cerebrais para despertar o equilíbrio que já existe dentro de você.",
    },
    {
      icon: Orbit,
      title: "Consciência e Expansão",
      desc: "Uma ponte entre a sabedoria espiritual e o conhecimento biológico moderno, para que você vivencie a expansão sem precisar abandonar o que já sabe.",
    },
  ];

  return (
    <section
      id="o-livro"
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-black/30"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Introduction */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-semibold">
              O QUE VOCÊ VAI DESCOBRIR
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-white leading-tight">
            O Que a Sua Biologia Já Sabe E a Sua Mente Ainda Não Ouviu
          </h2>
          
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed tracking-wider font-light text-center max-w-3xl mx-auto">
            Entender como reorganizar sua energia não é um ato de misticismo abstrato, mas de domínio da sua natureza bioenergética. O livro mostra como a biologia e a neurociência explicam, em sua linguagem, o que práticas energéticas milenares já vivenciam há séculos. Uma leitura que amplia sem fragmentar.
          </p>
        </div>

        {/* Detailed text & beautiful visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center mb-16 md:mb-20">
          
          {/* Poetic & Deep Scientific Narrative */}
          <div className="space-y-6 text-stone-300 text-sm sm:text-base leading-relaxed tracking-wide font-light">
            <h3 className="font-display text-[16px] xs:text-lg sm:text-xl md:text-2xl text-gold-300 font-medium leading-snug text-balance">
              O que acontece quando a ciência e a<br className="hidden sm:inline" />{" "}
              consciência descrevem o mesmo fenômeno?
            </h3>
            
            <p className="text-justified-clean leading-normal sm:leading-relaxed">
              A ciência já demonstrou que as emoções humanas se expressam em sinais fisiológicos mensuráveis: variações de ritmo cardíaco, tensão muscular e padrões de respiração. Estados de angústia e de escassez deixam marcas no corpo antes mesmo que a mente os reconheça.
            </p>
            
            <p className="text-justified-clean leading-normal sm:leading-relaxed">
              Quando você reconfigura a forma como percebe e sente sua própria vida, algo no organismo começa a responder. A cura não é algo que você compra. É um estado que você aprende a sintonizar. A radiestesia terapêutica é o instrumento que torna essa sintonização possível.
              <span className="block text-xs text-gold-400/80 mt-2 font-medium">Viviane Miranda</span>
            </p>
            
            <p className="text-justified-clean leading-normal sm:leading-relaxed">
              Em <strong className="text-white font-normal">O Código Energético da Cura</strong>, você aprenderá técnicas de autoavaliação vibracional, a utilizar instrumentos clássicos da radiestesia e a formatar meditações coerentes capazes de aumentar a ordem biológica do seu próprio organismo, o que a física chama de negentropia: o princípio vital que toda célula saudável expressa.
            </p>
          </div>

          {/* Interactive Aura Box / visual layout */}
          <div className="relative py-10 px-7 sm:p-8 rounded-3xl border border-gold-400/10 bg-gradient-to-tr from-gold-400/[0.02] via-[#0b0818]/60 to-[#120a2e]/40 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-violet-600/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gold-400/5 rounded-full blur-3xl" />
            
            {/* Desktop Header */}
            <div className="hidden sm:block">
              <span className="font-mono text-[9px] tracking-widest text-gold-400/60 uppercase block mb-3.5 text-center">CAMPOS UNIFICADOS</span>
              <h4 className="font-sans text-lg text-white font-semibold mb-6 text-center uppercase tracking-wide">As Três Dimensões da Cura</h4>
            </div>

            {/* Mobile Header */}
            <div className="block sm:hidden text-center -mt-2 mb-7">
              <span className="font-mono text-[10px] tracking-widest text-gold-400/50 uppercase block mb-1">
                Campos Unificados
              </span>
              <h4 className="font-sans text-base text-white font-semibold leading-relaxed tracking-wide uppercase">
                As Três Dimensões da Cura
              </h4>
            </div>
            
            <div className="space-y-6">
              {[
                { 
                  lvl: "Frequência Mental", 
                  freq: "Coerência dos Pensamentos", 
                  text: (
                    <>Quando padrões de crença limitantes finalmente se dissolvem,<br className="hidden sm:inline" /> o cérebro migra de ritmos acelerados para ondas de profunda calma,<br className="hidden sm:inline" /> despertando o território fértil da intuição e do equilíbrio.</>
                  )
                },
                { 
                  lvl: "Frequência Cardíaca", 
                  freq: "O Campo Magnético do Coração", 
                  text: (
                    <>Quando os sentimentos mais puros de gratidão e amor se expandem,<br className="hidden sm:inline" /> o coração atua como o maior gerador de energia do corpo humano,<br className="hidden sm:inline" /> elevando o campo vibracional e a coerência de todo o organismo.</>
                  )
                },
                { 
                  lvl: "Frequência Consciencial", 
                  freq: "Espírito e Matéria em Diálogo", 
                  text: (
                    <>Quando a mente se aquieta e todo o seu campo sutil se alinha,<br className="hidden sm:inline" /> o espírito e a matéria entram em um diálogo harmonioso e contínuo,<br className="hidden sm:inline" /> permitindo que a radiestesia reconecte você com a cura integrativa.</>
                  )
                }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-3 sm:gap-4 items-start pb-5 sm:pb-4 border-b border-white/[0.04] last:border-0 last:pb-0">
                  <div className="font-mono text-xs text-gold-400 bg-gold-400/10 h-7 w-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2 mb-1.5">
                      <span className="text-sm font-medium text-white">{item.lvl}</span>
                      <span className="font-mono text-[9px] sm:text-[10px] text-gold-400 bg-gold-400/5 px-2 py-0.5 rounded border border-gold-400/10 self-start sm:self-auto">{item.freq}</span>
                    </div>
                    <p className="text-xs text-stone-400/90 font-light leading-relaxed text-left tracking-normal">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Pillars Grid with elegant minimal gold ornaments */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-12 md:mt-16 items-stretch max-w-5xl mx-auto w-full">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.25 }}
                className="glass-panel p-5 sm:p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center group overflow-hidden relative h-full min-h-[280px] sm:min-h-[300px] md:min-h-[320px] lg:min-h-[340px] transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Dynamic glossy light reflex inside the card */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <div className="absolute top-0 right-0 w-16 h-16 bg-gold-400/5 rounded-full blur-2xl group-hover:bg-gold-400/10 transition-colors" />

                <div className="space-y-6 flex flex-col items-center text-center h-full w-full">
                   {/* Icon wrapper */}
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center bg-gold-400/10 border border-gold-400/20 text-gold-300 group-hover:text-gold-200 group-hover:scale-110 transition-all duration-300 shrink-0 mx-auto">
                    <Icon className="w-5 h-5" />
                    <div className="absolute inset-0 rounded-xl bg-gold-400/5 animate-pulse" />
                  </div>

                  <div className="space-y-3 flex-1 flex flex-col justify-start items-center text-center w-full">
                    <h4 className="font-sans text-base text-stone-200 font-semibold group-hover:text-gold-300 transition-colors text-center w-full uppercase tracking-wide whitespace-pre-line">
                      {pillar.title}
                    </h4>
                    <p className="text-[13px] sm:text-sm text-stone-400/90 leading-relaxed font-light text-center flex-1">
                      {pillar.desc}
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
