import { useState, useEffect, FormEvent } from "react";
import { Check, ClipboardCheck, CreditCard, ShieldCheck, ShoppingBag, Truck, Zap, Sparkles, Loader2, MapPin } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function CheckoutSection() {
  const [paymentMethod, setPaymentMethod] = useState<string>("pix");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isPaid, setIsPaid] = useState(false);

  const [timeLeft, setTimeLeft] = useState({ days: 30, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const startDate = new Date(2026, 5, 25, 0, 0, 0); // 2026-06-25 00:00:00
      const endDate = new Date(startDate.getTime() + 30 * 24 * 60 * 60 * 1000); // 30 days later: 2026-07-25 00:00:00

      if (now < startDate) {
        setTimeLeft({ days: 30, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const difference = endDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const activeTier = {
    id: "combo",
    title: "Edição de Lançamento",
    subtitle: "Livro Físico Premium",
    price: "55,00",
    desc: "Uma experiência exclusiva para quem deseja ir mais fundo nos ensinamentos de O Código Energético da Cura.",
    features: [
      "Edição física especial de lançamento",
      "Bônus exclusivo após compra",
      "Envio seguro com código de rastreamento"
    ],
    badge: "Mais Procurado • Lançamento",
    icon: Sparkles
  };

  const handleCheckout = (e: FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      setIsProcessing(false);
      setIsPaid(true);
    }, 2500);
  };

  return (
    <section
      id="comprar"
      className="relative py-16 md:py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#030303] to-[#0c091b]"
    >
      {/* Glow shapes */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[70vw] h-[70vw] rounded-full bg-gold-400/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
            <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-gold-400 uppercase font-semibold">
              ADQUIRA COM SEGURANÇA
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          </div>
          
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold tracking-wide text-white leading-tight">
            Adquira o Livro Oficial
          </h2>
          
          <p className="font-sans text-stone-400 text-sm sm:text-base leading-relaxed tracking-wider font-light text-center max-w-3xl mx-auto">
            Seu pedido é realizado com total segurança. Em poucos dias, o livro chega até você junto com o bônus exclusivo.
          </p>
        </div>

        {/* Sales Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Product Details card and features */}
          <div className="lg:col-span-7 space-y-8 animate-blurIn">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] font-mono tracking-widest text-gold-400 uppercase font-semibold">
                PREPARAÇÃO DO PEDIDO
              </span>
              
              {/* Single beautifully styled premium product card (not selectable button) */}
              <div 
                className="w-full p-4 sm:p-6 md:p-8 rounded-3xl border border-gold-400/40 bg-gradient-to-br from-gold-500/[0.08] via-black/[0.6] to-transparent text-left flex flex-col md:flex-row md:items-center justify-between gap-5 md:gap-8 relative shadow-[0_16px_50px_rgba(212,167,78,0.1)]"
              >
                {activeTier.badge && (
                  <div className="absolute top-0 -translate-y-1/2 right-4 sm:right-8 bg-gradient-to-r from-gold-400 to-gold-500 text-zinc-950 font-mono text-[8px] sm:text-[9px] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full font-bold shadow-[0_0_15px_rgba(212,167,78,0.35)] border-none z-20">
                    {activeTier.badge}
                  </div>
                )}

                <div className="flex gap-4 sm:gap-5 items-start md:max-w-[55%] pt-3 sm:pt-4 md:pt-0">
                  <div className="p-3 sm:p-4 rounded-2xl bg-gold-400/10 text-gold-400 border border-gold-400/20 shrink-0 mt-1 shadow-[0_0_15px_rgba(212,167,78,0.15)]">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 animate-pulse" />
                  </div>
                  <div className="space-y-1.5 md:space-y-2">
                    <h4 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      {activeTier.title}
                    </h4>
                    <span className="text-[10px] sm:text-xs font-mono text-gold-400/95 tracking-[0.15em] uppercase block font-semibold">
                      {activeTier.subtitle}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-300 font-light leading-normal sm:leading-relaxed pt-0.5 text-left tracking-normal">
                      {activeTier.desc}
                    </p>
                  </div>
                </div>

                <div className="text-left md:text-right shrink-0 bg-gradient-to-b from-stone-900/90 to-black/90 p-4 sm:p-6 rounded-2xl border border-gold-400/25 space-y-3.5 md:space-y-4 md:min-w-[240px] md:self-stretch flex flex-col justify-center relative shadow-[0_8px_32px_rgba(0,0,0,0.8)] font-sans">
                  {/* Subtle decorative glow */}
                  <div className="absolute inset-0 bg-gold-400/[0.02] rounded-2xl pointer-events-none" />
                  
                  <div className="relative">
                    <span className="text-[9px] sm:text-[10px] text-stone-400/70 font-mono block uppercase tracking-wider">
                      Preço Oficial Pós-Lançamento
                    </span>
                    <span className="font-mono text-stone-400 line-through text-xs sm:text-base font-semibold mt-1 block">
                      R$ 62,00
                    </span>
                  </div>

                  <div className="pt-3.5 border-t border-white/[0.08] relative">
                    <span className="text-[9px] sm:text-[10px] text-gold-300 font-mono block uppercase tracking-widest font-bold leading-relaxed mb-0.5">
                      Valor de lançamento
                    </span>
                    <div className="flex flex-row md:justify-end items-baseline mt-1">
                      <span className="font-sans text-2xl sm:text-4xl md:text-4xl font-bold text-gold-400 tracking-tight leading-none select-all">
                        R$55,00
                      </span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/[0.05] mt-2 space-y-1.5 text-left md:text-right">
                    <span className="text-[9px] text-stone-400 font-mono block uppercase tracking-wider">
                      Oferta de Lançamento encerra em:
                    </span>
                    <div className="flex items-center gap-1 font-mono text-stone-200 md:justify-end">
                      <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.05] rounded px-1.5 py-0.5 min-w-[26px]">
                        <span className="text-xs font-bold text-gold-400">{String(timeLeft.days).padStart(2, '0')}</span>
                        <span className="text-[7px] text-stone-500 uppercase tracking-widest leading-none mt-0.5">d</span>
                      </div>
                      <span className="text-stone-600 animate-pulse text-[10px]">:</span>
                      <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.05] rounded px-1.5 py-0.5 min-w-[26px]">
                        <span className="text-xs font-bold text-gold-400">{String(timeLeft.hours).padStart(2, '0')}</span>
                        <span className="text-[7px] text-stone-500 uppercase tracking-widest leading-none mt-0.5">h</span>
                      </div>
                      <span className="text-stone-600 animate-pulse text-[10px]">:</span>
                      <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.05] rounded px-1.5 py-0.5 min-w-[26px]">
                        <span className="text-xs font-bold text-gold-400">{String(timeLeft.minutes).padStart(2, '0')}</span>
                        <span className="text-[7px] text-stone-500 uppercase tracking-widest leading-none mt-0.5">m</span>
                      </div>
                      <span className="text-stone-600 animate-pulse text-[10px]">:</span>
                      <div className="flex flex-col items-center bg-white/[0.03] border border-white/[0.05] rounded px-1.5 py-0.5 min-w-[26px]">
                        <span className="text-xs font-bold text-gold-400">{String(timeLeft.seconds).padStart(2, '0')}</span>
                        <span className="text-[7px] text-stone-500 uppercase tracking-widest leading-none mt-0.5">s</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* List of features for the product */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-zinc-950/60 border border-white/[0.04]">
              <h3 className="text-sm font-mono tracking-widest font-bold text-gold-400 uppercase mb-5">
                Benefícios Da Edição De Lançamento
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {activeTier.features.map((feature, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <div className="h-5 w-5 rounded-full bg-gold-400/10 flex items-center justify-center border border-gold-400/20 text-gold-300 shrink-0 mt-0.5">
                       <Check size={11} />
                    </div>
                    <span className="text-xs sm:text-sm text-stone-300 font-light leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Highlight Banner about the exclusive Video Bonus */}
              <div className="mt-8 p-3.5 sm:p-5 rounded-xl border border-gold-500/10 bg-black/30 flex items-start gap-2.5 sm:gap-4 text-left">
                <div className="text-gold-400 p-2 bg-gold-400/5 rounded-lg border border-gold-400/10 shrink-0">
                  <svg className="w-4 h-4 text-gold-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="space-y-2.5 flex-1 min-w-0">
                  <div className="border-b border-white/[0.04] pb-2 text-left">
                    <span className="block text-[10.5px] font-mono tracking-[0.18em] text-[#f59e0b] font-bold uppercase mb-1">
                      BÔNUS EXCLUSIVO
                    </span>
                    <h4 className="text-[10px] min-[360px]:text-[11px] sm:text-xs md:text-sm font-semibold text-white tracking-tight whitespace-nowrap">
                      Meditação de Reconfiguração Noturna
                    </h4>
                  </div>
                  <p className="text-[11px] text-stone-300 font-light leading-relaxed card-text-clean">
                    Libere o que o dia acumulou no seu campo energético e entre em sono regenerador.
                  </p>
                  <p className="text-[10px] text-stone-500 font-mono tracking-wide">
                    📬 Liberação automática por e-mail após a confirmação da compra
                  </p>
                </div>
              </div>

              {/* BH Pickup Promo Info - Elegant and Compact replacement of the shipping calculator */}
              <div className="mt-8 pt-6 border-t border-white/[0.04]">
                <div className="p-4 sm:p-5 rounded-xl border border-gold-400/20 bg-gold-400/[0.02] text-left space-y-3">
                  <h5 className="text-xs sm:text-sm font-semibold text-gold-400 font-sans flex items-center gap-2">
                    <MapPin size={14} className="text-gold-400" /> Mora em Belo Horizonte?
                  </h5>
                  <p className="text-[11.5px] sm:text-xs text-stone-300 font-light leading-normal sm:leading-relaxed card-text-clean">
                    Ao adquirir seu exemplar no valor especial de pré-lançamento, você pode optar por retirá-lo no evento oficial de lançamento, recebendo seu livro autografado e sem custo de frete.
                  </p>
                  <p className="text-[11.5px] sm:text-xs text-stone-300 font-light leading-normal sm:leading-relaxed card-text-clean">
                    Após a compra, você receberá pelo WhatsApp todas as informações sobre a data, o horário e o local do lançamento.
                  </p>
                  <p className="text-[11.5px] sm:text-xs text-gold-400/90 font-medium leading-normal sm:leading-relaxed italic card-text-clean">
                    Além de economizar no frete, será uma alegria compartilhar esse momento especial com você!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Instant Checkout Payment form / receipt success */}
          <div className="lg:col-span-5 bg-[#07060a]/90 rounded-3xl border border-gold-500/20 p-6 sm:p-8 backdrop-blur-xl relative">
            <AnimatePresence mode="wait">
              {!isPaid ? (
                <motion.div
                  key="checkout-gate"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6"
                >
                  <div className="border-b border-white/[0.05] pb-4 space-y-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#a8a29e] uppercase block">Resumo do Pedido</span>
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="font-sans text-sm text-stone-200 font-semibold">{activeTier.title}</h3>
                      <div className="text-right shrink-0">
                        <span className="font-sans text-xs text-stone-300 block whitespace-nowrap">R${activeTier.price}</span>
                        <span className="text-[9px] text-emerald-400 font-sans block mt-0.5 whitespace-nowrap">Economia de R$7,00</span>
                      </div>
                    </div>
                    


                    <div className="flex justify-between items-center mt-3 pt-3 border-t border-white/[0.03] gap-4">
                      <span className="text-xs text-stone-300 font-medium whitespace-nowrap">Total a pagar:</span>
                      <span className="font-sans text-lg text-gold-400 font-bold whitespace-nowrap">
                        R$55,00
                      </span>
                    </div>
                  </div>

                  {/* Elegant Payment Mini Cards */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl border border-white/[0.04] bg-stone-900/60 text-left space-y-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gold-400/[0.01] pointer-events-none" />
                      <div className="flex items-center gap-1.5 text-gold-400">
                        <CreditCard size={11} />
                        <span className="text-[8.5px] font-mono tracking-wider font-bold uppercase">Cartão</span>
                      </div>
                      <p className="text-[9.5px] sm:text-[10.5px] text-stone-300 leading-tight font-light whitespace-nowrap">
                        Até 2x sem juros
                      </p>
                    </div>
                    <div className="p-3 rounded-xl border border-white/[0.04] bg-stone-900/60 text-left space-y-1 relative overflow-hidden">
                      <div className="absolute inset-0 bg-emerald-400/[0.01] pointer-events-none" />
                      <div className="flex items-center gap-1.5 text-emerald-400">
                        <Zap size={11} />
                        <span className="text-[8.5px] font-mono tracking-wider font-bold uppercase">PIX</span>
                      </div>
                      <p className="text-[9.5px] sm:text-[10.5px] text-stone-300 leading-tight font-light whitespace-nowrap">
                        3% de desconto no Pix
                      </p>
                    </div>
                  </div>

                  {/* Payment form */}
                  <form onSubmit={handleCheckout} className="space-y-5" id="checkout-gateway-form">
                    <div className="flex border border-white/10 rounded-xl overflow-hidden bg-black/40">
                      {[
                        { id: "pix", name: "PIX" },
                        { id: "cc", name: "Cartão (Crédito)" }
                      ].map((m) => (
                        <button
                          type="button"
                          key={m.id}
                          onClick={() => setPaymentMethod(m.id)}
                          className={`w-full py-3 text-[10px] font-mono uppercase tracking-wider text-center transition-colors ${
                            paymentMethod === m.id
                              ? "bg-gold-400 text-black font-semibold"
                              : "text-stone-400 hover:text-white"
                          }`}
                        >
                          {m.id === "cc" && <CreditCard size={10} className="inline mr-1" />}
                          {m.name}
                        </button>
                      ))}
                    </div>

                    <div className="space-y-4">
                      {paymentMethod === "pix" && (
                        <div className="p-4 rounded-xl border border-white/[0.04] bg-white/[0.01] space-y-2 text-center">
                          <p className="text-xs text-stone-400 leading-relaxed font-light text-center">
                            Pague via PIX e libere seu pedido de imediato. A compensação leva no máximo 15 segundos.
                          </p>
                        </div>
                      )}

                      {paymentMethod === "cc" && (
                        <div className="space-y-3">
                          <input
                            type="text"
                            required
                            placeholder="Número do Cartão"
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs text-stone-300 focus:outline-none focus:border-gold-400"
                          />
                          <div className="grid grid-cols-2 gap-3">
                            <input
                              type="text"
                              required
                              placeholder="Validade (MM/AA)"
                              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs text-stone-300 focus:outline-none focus:border-gold-400"
                            />
                            <input
                              type="password"
                              required
                              placeholder="CVC"
                              maxLength={4}
                              className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs text-stone-300 focus:outline-none focus:border-gold-400"
                            />
                          </div>
                          <input
                            type="text"
                            required
                            placeholder="Nome Completo do Titular"
                            className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-xs text-stone-300 focus:outline-none focus:border-gold-400"
                          />
                        </div>
                      )}
                    </div>

                    <div className="py-2.5 px-3.5 rounded-xl border border-amber-500/15 bg-amber-500/[0.02] flex items-center gap-2.5 text-left text-stone-350">
                      <span className="h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0" />
                      <p className="text-[11px] leading-normal font-light text-stone-300">
                        Após o lançamento oficial, o valor retorna para <span className="font-semibold text-gold-400">R$ 62,00</span>.
                      </p>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-600 hover:from-emerald-600 hover:via-emerald-500 hover:to-teal-500 hover:shadow-[0_0_24px_rgba(16,185,129,0.35)] font-semibold text-xs font-mono uppercase tracking-[0.15em] text-white transition-all cursor-pointer disabled:opacity-50"
                      id="submit-checkout-btn"
                    >
                      {isProcessing ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Processando Pagamento...
                        </>
                      ) : (
                        "Confirmar Compra Segura"
                      )}
                    </button>
                  </form>

                  <div className="flex justify-center items-center gap-6 text-[10px] text-stone-500 font-mono">
                    <span className="flex items-center gap-1">🔒 SSL Criptografado</span>
                    <span className="flex items-center gap-1">🛡️ Compra Garantida</span>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="checkout-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-6 text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-gold-400/10 border border-gold-400/30 text-gold-400 flex items-center justify-center mx-auto animate-pulse">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-display text-2xl text-white font-medium">Transação Concluída!</h3>
                    <p className="text-xs text-gold-300 font-mono uppercase tracking-widest">
                      Seu pedido de frequência foi assegurado.
                    </p>
                    <p className="text-xs text-stone-400 max-w-xs mx-auto leading-relaxed text-center">
                      Sua compra do pacote <strong className="text-white font-normal">{activeTier.title}</strong> foi confirmada. O link para acessar o áudio da Meditação Bônus e os detalhes de postagem do seu livro físico foram enviados para o seu e-mail de registro.
                    </p>
                  </div>

                  {paymentMethod === "pix" && (
                    <div className="p-4 rounded-2xl bg-black/80 border border-white/[0.04] space-y-3 max-w-sm mx-auto">
                      <p className="text-[10px] font-mono text-stone-400 uppercase tracking-widest">Simulação de QR Code PIX</p>
                      
                      {/* Standard canvas simulating QR code beautifully in SVG */}
                      <div className="w-28 h-28 my-auto bg-stone-100 rounded-lg mx-auto flex items-center justify-center border border-white/5 relative overflow-hidden group p-2 select-none">
                        <svg className="w-24 h-24" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M2 2h6v6H2V2Zm14 0h6v6h-6V2ZM2 16h6v6H2v-6Zm14 0h6v6h-6v-6ZM5 5h2v2H5V5Zm14 0h2v2h-2V5ZM5 19h2v2H5v-2Zm14 0h2v2h-2v-2ZM10 4h4v2h-4V4Zm0 14h4v2h-4v-2ZM4 10h2v4H4v-4Zm14 0h2v4h-2v-4ZM10 10h4v4h-4v-4Z" />
                        </svg>
                      </div>
                      
                      <button
                        onClick={() => alert("Chave PIX copiada para a área de transferência com sucesso!")}
                        className="text-xs font-mono text-gold-400 underline hover:text-gold-300 block mx-auto py-1"
                      >
                        Copiar Chave Copia e Cola
                      </button>
                    </div>
                  )}

                  <div className="space-y-3 max-w-xs mx-auto pt-4">
                    <button
                      onClick={() => setIsPaid(false)}
                      className="w-full py-3.5 rounded-full border border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-black hover:shadow-lg transition-all text-xs font-mono uppercase tracking-wider"
                    >
                      Realizar Outro Pedido
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
