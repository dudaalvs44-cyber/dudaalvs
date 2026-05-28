import { useState, useEffect } from "react";
import { BookOpen, Sparkles, User, MessageSquare, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import WhatsAppIcon from "./WhatsAppIcon";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "O Livro", href: "#o-livro", icon: BookOpen },
    { label: "Por que ler", href: "#por-que-ler", icon: Sparkles },
    { label: "A Autora", href: "#a-autora", icon: User },
    { label: "Depoimentos", href: "#depoimentos", icon: MessageSquare },
  ];

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-3 md:px-8 bg-black/90 backdrop-blur-md border-b-[2px] border-gold-500/30 shadow-lg`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Scientific-Spiritual Logo branding */}
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="relative w-8 h-8 flex items-center justify-center rounded-full border border-gold-400 bg-black/50 overflow-hidden">
              <span className="text-gold-400 text-xs font-serif font-bold">Φ</span>
              <div className="absolute inset-0 bg-gradient-to-tr from-gold-500/10 to-transparent animate-pulse" />
            </div>
            <div>
              <span className="block font-display text-sm md:text-base tracking-[0.2em] text-white font-medium uppercase">
                O Código Energético
              </span>
              <span className="block text-[8px] tracking-[0.35em] text-gold-400 font-mono uppercase">
                Ciência • Cura • Consciência
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className="text-gray-300 hover:text-gold-300 text-xs tracking-widest uppercase transition-colors duration-300 font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Core Instant Action & Links */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => {
                const element = document.querySelector("#comprar");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="relative px-5 py-2.5 rounded-full overflow-hidden border border-emerald-500 bg-emerald-500/5 hover:bg-emerald-500 hover:text-white hover:shadow-[0_0_20px_rgba(16,185,129,0.3)] transition-all duration-500 group"
            >
              <span className="relative z-10 text-[10px] md:text-xs font-mono uppercase tracking-[0.15em] font-medium transition-colors duration-500">
                comprar livro
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-700 to-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </button>
            <a
              href="https://api.whatsapp.com/send?phone=5531999732836&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20livro%20O%20C%C3%B3digo%20Energ%C3%A9tico%20da%20Cura."
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gold-300 p-2 transition-colors duration-300"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={18} />
            </a>
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gold-400 p-2 hover:text-white transition-colors duration-300"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu / Bio Links index */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-x-0 top-[60px] z-40 lg:hidden p-4 bg-[#030303]/95 border-b border-gold-500/20 backdrop-blur-xl shadow-2xl"
          >
            <div className="flex flex-col gap-3 py-4">
              <span className="text-[10px] tracking-[0.2em] text-gold-500 font-mono uppercase font-semibold pb-2 border-b border-white/[0.05]">
                Visão Geral
              </span>
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.href)}
                    className="flex items-center gap-4 py-3 px-4 rounded-xl text-left text-gray-300 hover:text-white hover:bg-gold-400/5 active:bg-gold-400/10 transition-all duration-300 border border-transparent hover:border-gold-500/10"
                  >
                    <Icon size={16} className="text-gold-400" />
                    <span className="text-xs uppercase tracking-widest font-medium">
                      {item.label}
                    </span>
                  </button>
                );
              })}

              <div className="grid grid-cols-2 gap-3 mt-4 pt-4 border-t border-white/[0.05]">
                <button
                  onClick={() => scrollToSection("#comprar")}
                  className="flex items-center justify-center py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-600 hover:from-emerald-600 hover:to-teal-500 text-white text-xs font-mono uppercase tracking-widest font-semibold hover:shadow-lg transition-all"
                >
                  comprar livro
                </button>
                <a
                  href="https://api.whatsapp.com/send?phone=5531999732836&text=Ol%C3%A1!%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20o%20livro%20O%20C%C3%B3digo%20Energ%C3%A9tico%20da%20Cura."
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 hover:border-gold-500/20 text-gray-300 text-xs font-mono uppercase tracking-widest"
                >
                  <WhatsAppIcon size={14} /> WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
