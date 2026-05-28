import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ShoppingBag, ArrowDownCircle } from "lucide-react";

type HeroProps = {
  onBuyClick: () => void;
};

export default function Hero({ onBuyClick }: HeroProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [playbackActive, setPlaybackActive] = useState(false);

  // Sparkly ambient gold stars to float in empty spaces / borders around the video
  const [goldParticles] = useState(() => {
    return Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 80 + 10}%`,
      left: `${Math.random() * 90 + 5}%`,
      size: Math.random() * 3 + 1,
      delay: `${Math.random() * 5}s`,
      duration: `${Math.random() * 10 + 6}s`,
      opacity: Math.random() * 0.6 + 0.2,
    }));
  });

  // Ensure video autoplays and loops seamlessly under any browser speed constraints
  useEffect(() => {
    let playAttempt: any;
    
    const triggerPlayback = () => {
      if (videoRef.current) {
        videoRef.current.play()
          .then(() => {
            setPlaybackActive(true);
          })
          .catch((err) => {
            console.log("Cinematic background player autostart verification:", err);
            // Retry on touch/scrolling failsafe
            const forcePlayOnScroll = () => {
              if (videoRef.current) {
                videoRef.current.play().then(() => {
                  setPlaybackActive(true);
                  window.removeEventListener("click", forcePlayOnScroll);
                  window.removeEventListener("touchstart", forcePlayOnScroll);
                }).catch(() => {});
              }
            };
            window.addEventListener("click", forcePlayOnScroll);
            window.addEventListener("touchstart", forcePlayOnScroll);
          });
      }
    };

    // Delay playback slightly to give thread priority to core page assets loading
    playAttempt = setTimeout(triggerPlayback, 100);

    return () => {
      clearTimeout(playAttempt);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[68vh] sm:h-[72vh] md:h-[75vh] min-h-[400px] max-h-[560px] sm:max-h-[640px] lg:max-h-[700px] bg-[#000000] overflow-hidden flex flex-col items-center justify-center select-none pt-[20px] sm:pt-[28px]"
    >
      {/* 1. CINEMATIC AMBIENT HALO BACKDROP (Ambient Ambilight edge-glow) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        {/* Soft golden aura radiating behind the video containment area */}
        <div className="absolute inset-x-0 w-[80vw] h-[80vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(212,167,78,0.12)_0%,rgba(0,0,0,0)_70%)] blur-[100px] z-0" />
        
        {/* Starry universe system floating around empty areas */}
        <div className="absolute inset-0 z-0">
          {goldParticles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full bg-gradient-to-b from-gold-100 to-gold-400 floating-particle"
              style={{
                top: p.top,
                left: p.left,
                width: `${p.size}px`,
                height: `${p.size}px`,
                animationDelay: p.delay,
                animationDuration: p.duration,
                boxShadow: `0 0 10px rgba(212, 167, 78, ${p.opacity})`,
              }}
            />
          ))}
        </div>
      </div>

      {/* 2. ULTIMATE ASPECT-RATIO PRESERVING CONTAINER (100% visible, no offsets, no cropping) */}
      <div className="relative w-full h-full flex items-center justify-center z-10 p-0 m-0">
        
        {/* Video Player block */}
        <div className="relative w-full h-full flex items-center justify-center">
          
          {/* Transparent click protector / anti-accidental-pauses layer */}
          <div className="absolute inset-0 z-20 pointer-events-auto bg-transparent select-none cursor-default" />

          {/* Smooth Fade Transition Overlay */}
          <AnimatePresence>
            {!videoLoaded && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-black z-30 flex flex-col items-center justify-center gap-3"
              >
                <div className="relative w-12 h-12 flex items-center justify-center rounded-full border border-gold-400 bg-black/50">
                  <div className="w-8 h-8 rounded-full border-2 border-t-gold-400 border-r-transparent border-b-transparent border-l-transparent animate-spin" />
                </div>
                <span className="text-[10px] font-mono tracking-widest text-gold-300 uppercase">
                  Sintonizando Energia...
                </span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Core Cinematic Video Node */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            onClick={(e) => e.preventDefault()}
            onLoadedData={() => setVideoLoaded(true)}
            onPlay={() => setPlaybackActive(true)}
            className="w-full h-full object-contain object-center pointer-events-none select-none z-10 transition-transform duration-1000 scale-[1.08] sm:scale-[1.12] lg:scale-[1.15] -translate-y-8 sm:-translate-y-12 lg:-translate-y-15 filter brightness-105 contrast-[1.03]"
            style={{
              opacity: videoLoaded ? 1 : 0,
            }}
          >
            <source
              src="https://res.cloudinary.com/dvhswjuep/video/upload/q_auto/f_auto/v1779404650/f3d959c2-bc55-47d0-add6-e85f6e3b7d1c_ev7mbu.mp4"
              type="video/mp4"
            />
          </video>

          {/* Shadows system to blend the movie seamlessly and cover elements */}
          {/* Subtle horizontal gradient soft-fade overlays to gently blend top and bottom with browser bar margins */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-[#000000] via-[#000000]/30 to-transparent z-15 pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] via-[#000000]/55 to-transparent z-15 pointer-events-none" />

          {/* 3. Watermark Cover Shield (VEO): High fidelity black-matching gradient vignette on the right/bottom-right lateral of the video */}
          {/* This applies a highly directional deep black gradient at the right bounds and bottom-right corner where 'VEO' is displayed */}
          <div className="absolute inset-y-0 right-0 w-[16%] max-w-[220px] bg-gradient-to-l from-[#000000] via-[#000000]/95 via-[#000000]/70 to-transparent z-20 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-[260px] h-[80px] bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,0,0,1)_35%,rgba(0,0,0,0.85)_70%,rgba(0,0,0,0)_100%)] z-22 pointer-events-none" />
        </div>
      </div>

      {/* 3. PREMIUM CINEMATIC GLASS DOCK (Hovering Overlay at the bottom margin) */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: videoLoaded ? 1 : 0, y: videoLoaded ? 0 : 30 }}
        transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 sm:bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-5xl z-30 pointer-events-auto"
      >
        <div className="relative overflow-hidden rounded-xl md:rounded-2xl border border-white/[0.08] bg-[#050505]/75 backdrop-blur-xl py-3 px-4 md:py-3.5 md:px-6 shadow-[0_24px_50px_rgba(0,0,0,0.9)] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-5">
          
          {/* Glossy Reflection Highlight */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/[0.01] via-white/[0.04] to-transparent pointer-events-none" />
          {/* Fine golden ambient side flare */}
          <div className="absolute top-0 left-10 w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-400/30 to-transparent pointer-events-none" />
          
          {/* Left Block: Media Indicator and Title */}
          <div className="flex items-center gap-4 w-full md:w-auto justify-center md:justify-start">
 
            {/* Title / Description */}
            <div className="text-center md:text-left w-full md:w-auto space-y-0.5">
              <h1 className="font-display text-sm sm:text-base md:text-md lg:text-lg font-bold tracking-wider uppercase bg-gradient-to-r from-white via-white to-gold-400 bg-clip-text text-transparent whitespace-nowrap">
                O Código Energético da Cura
              </h1>
            </div>
          </div>
 
          {/* Right Block: Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 justify-center md:justify-end">
            <button
              onClick={onBuyClick}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 md:py-2.5 rounded-lg bg-gradient-to-r from-emerald-700 via-emerald-600 to-teal-700 hover:from-emerald-600 hover:via-emerald-500 hover:to-teal-600 text-white font-semibold shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:shadow-[0_4px_30px_rgba(16,185,129,0.45)] active:scale-[0.98] transition-all duration-300 text-[10px] sm:text-xs font-mono uppercase tracking-widest cursor-pointer"
              id="hero-buy-btn-cinematic"
            >
              <ShoppingBag size={13} />
              comprar livro
            </button>
          </div>

        </div>

        {/* Swipe Down Hint Below the Dock */}
        <div className="mt-2 sm:mt-3 text-center flex items-center justify-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity duration-300">
          <ArrowDownCircle className="w-3.5 h-3.5 text-gold-400 animate-bounce" />
          <span className="text-[8px] font-mono uppercase tracking-[0.3em] text-stone-400">
            Role para baixo para explorar o livro
          </span>
        </div>
      </motion.div>
    </section>
  );
}
