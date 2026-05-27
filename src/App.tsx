import BackgroundStars from "./components/BackgroundStars";
import Header from "./components/Header";
import Hero from "./components/Hero";
import AboutBook from "./components/AboutBook";
import WhyRead from "./components/WhyRead";
import CheckoutSection from "./components/CheckoutSection";
import AboutAuthor from "./components/AboutAuthor";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const handleScrollToId = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#000000] text-stone-200 overflow-x-hidden selection:bg-gold-500/20 selection:text-gold-200">
      {/* Cinematic Starry & Gold Particle Background canvas */}
      <BackgroundStars />

      {/* Floating Glass Head & Navigation */}
      <Header />

      {/* Master Content Compartment */}
      <main className="relative z-10 space-y-0 text-stone-200">
        
        {/* SEÇÃO 01: HERO */}
        <Hero
          onBuyClick={() => handleScrollToId("#comprar")}
        />

        {/* SEÇÃO 02: SOBRE O LIVRO */}
        <AboutBook />

        {/* SEÇÃO 03: POR QUE VOCÊ PRECISA LER ESTE LIVRO */}
        <WhyRead />

        {/* SEÇÃO EXTRA INTEGRADA: VENDA PRINCIPAL / CHECKOUT DO LIVRO */}
        <CheckoutSection />

        {/* SEÇÃO 05: SOBRE A AUTORA */}
        <AboutAuthor />

        {/* SEÇÃO 06: DEPOIMENTOS EM CARROSSEL */}
        <Testimonials />

        {/* SEÇÃO 07: CONTATO & LINKS DE BIO */}
        <Contact />
        
      </main>

      {/* SEÇÃO 08: RODAPÉ */}
      <Footer />
    </div>
  );
}
