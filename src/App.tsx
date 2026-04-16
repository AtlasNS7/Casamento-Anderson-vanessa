import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Heart, 
  MapPin, 
  Calendar, 
  Music, 
  Mic2, 
  Gift, 
  Camera, 
  ChevronRight, 
  ChevronLeft,
  X,
  Instagram,
  ChevronDown
} from "lucide-react";

const IMAGES = [
  "https://picsum.photos/seed/wedding1/800/1000",
  "https://picsum.photos/seed/wedding2/800/1000",
  "https://picsum.photos/seed/wedding3/800/600",
  "https://picsum.photos/seed/wedding4/800/1200",
  "https://picsum.photos/seed/wedding5/800/1000",
  "https://picsum.photos/seed/wedding6/800/1000",
];

const GIFTS = [
  { id: 1, name: "Jogo de Jantar de Luxo", price: "R$ 450,00", category: "Cozinha", image: "https://picsum.photos/seed/dinner/400/400" },
  { id: 2, name: "Cafeteira Nespresso", price: "R$ 600,00", category: "Eletro", image: "https://picsum.photos/seed/coffee/400/400" },
  { id: 3, name: "Smart TV 55\"", price: "R$ 2.800,00", category: "Eletrônicos", image: "https://picsum.photos/seed/tv/400/400" },
  { id: 4, name: "Aspirador Robô", price: "R$ 1.200,00", category: "Casa", image: "https://picsum.photos/seed/vacuum/400/400" },
  { id: 5, name: "Conjunto de Toalhas", price: "R$ 200,00", category: "Banho", image: "https://picsum.photos/seed/towel/400/400" },
  { id: 6, name: "Cota para Lua de Mel", price: "Qualquer valor", category: "Viagem", image: "https://picsum.photos/seed/travel/400/400" },
];

export default function App() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-wedding-cream font-sans text-wedding-dark selection:bg-wedding-gold selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/80 backdrop-blur-md py-4 shadow-sm" : "bg-transparent py-8"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="font-serif text-2xl tracking-tighter">A & V</div>
          <div className="hidden md:flex gap-8 text-xs font-semibold uppercase tracking-widest">
            <a href="#inicio" className="hover:text-wedding-gold transition-colors">Início</a>
            <a href="#galeria" className="hover:text-wedding-gold transition-colors">Galeria</a>
            <a href="#karaoke" className="hover:text-wedding-gold transition-colors">Karaokê</a>
            <a href="#presentes" className="hover:text-wedding-gold transition-colors">Presentes</a>
          </div>
          <button className="bg-wedding-dark text-white text-[10px] sm:text-xs uppercase tracking-widest px-6 py-2 rounded-full hover:bg-wedding-gold transition-all duration-300">
            Confirmar Presença
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="inicio" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/couple-romantic/1920/1080?blur=2" 
            className="w-full h-full object-cover opacity-40 scale-105"
            alt="Hero Background"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-wedding-cream/80" />
        </div>

        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="inline-block mb-6 px-4 py-1 border border-wedding-gold rounded-full text-[10px] uppercase tracking-[0.3em] text-wedding-gold font-bold">
              Celebramos o Amor
            </div>
            <h1 className="font-serif text-7xl md:text-9xl mb-8 tracking-tighter">
              Anderson <span className="text-wedding-gold">&</span> Vanessa
            </h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-wedding-gold" />
                <span className="font-serif italic text-xl md:text-2xl">07 de Maio, 2026</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-wedding-gold" />
                <span className="font-serif italic text-xl md:text-2xl">Residência dos Monteiro</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2"
          >
            <ChevronDown className="w-6 h-6 animate-bounce text-wedding-gold" />
          </motion.div>
        </div>
      </section>

      {/* Story/Intro */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <Heart className="w-8 h-8 text-wedding-gold mx-auto mb-8 fill-wedding-gold opacity-30" />
              <h2 className="font-serif text-4xl md:text-5xl mb-8 leading-tight">Nossa história recomeça a cada olhar...</h2>
              <p className="text-muted text-lg leading-relaxed font-inter font-light italic">
                "Não existem palavras suficientes para descrever o que sentimos um pelo outro. 
                Queremos apenas celebrar esse momento mágico com as pessoas que mais amamos no mundo."
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galeria" className="py-24 bg-wedding-cream">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <div className="flex items-center gap-3 text-wedding-gold mb-4">
                <Camera className="w-5 h-5" />
                <span className="uppercase text-[10px] tracking-widest font-bold">Nosso Álbum</span>
              </div>
              <h2 className="font-serif text-5xl md:text-6xl tracking-tight">Eternizando <br/><span className="italic text-wedding-gold">Momentos</span></h2>
            </div>
            <p className="max-w-md text-sm text-gray-500 font-inter leading-loose">
              Alguns registros da nossa jornada até aqui. Cada foto carrega um pouco da nossa alegria e do carinho que temos um pelo outro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {IMAGES.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative aspect-[4/5] overflow-hidden cursor-pointer rounded-2xl bg-gray-200"
                onClick={() => setSelectedImg(src)}
              >
                <img 
                  src={src} 
                  alt={`Wedding moment ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-wedding-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="bg-white/90 backdrop-blur p-4 rounded-full">
                    <Heart className="w-6 h-6 text-wedding-gold" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Karaoke Invitation Section */}
      <section id="karaoke" className="py-24 bg-wedding-dark text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <div className="grid grid-cols-2 gap-4 -rotate-12 translate-x-20">
            {Array.from({ length: 12 }).map((_, i) => (
              <Music key={i} className="w-24 h-24" />
            ))}
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 text-wedding-gold mb-6">
                <Mic2 className="w-6 h-6" />
                <span className="uppercase text-xs tracking-widest font-bold">The After Party</span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-none">Vem pro <br/><span className="text-wedding-gold italic">KARAOKÊ!</span></h2>
              <p className="text-gray-400 text-lg mb-12 font-inter max-w-lg leading-relaxed">
                Porque um casamento sem bagunça não é casamento! Preparamos um espaço exclusivo com palco, 
                luzes e o melhor sistema de som para você soltar a voz (ou pelo menos tentar). 
                Prepare seu repertório!
              </p>
              
              <div className="space-y-6">
                {[
                  { icon: Music, title: "Repertório Livre", desc: "Do sertanejo ao rock, você escolhe." },
                  { icon: Heart, title: "Dueto com os Noivos", desc: "Eles prometem não errar a letra." },
                  { icon: ChevronRight, title: "Prêmio 'Melhor Do Pior'", desc: "Para quem tiver mais coragem." },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-4 h-4 text-wedding-gold" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm tracking-wide">{item.title}</h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square md:aspect-video rounded-3xl overflow-hidden shadow-2xl shadow-wedding-gold/20"
            >
              <img 
                src="https://picsum.photos/seed/karaoke-party/1200/800"
                alt="Karaoke stage"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wedding-dark via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-10 left-10">
                <p className="font-serif italic text-3xl">"Solta o som, DJ!"</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gift Registry Section */}
      <section id="presentes" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 text-wedding-gold mb-4">
              <Gift className="w-5 h-5" />
              <span className="uppercase text-[10px] tracking-widest font-bold">Lista de Presentes</span>
            </div>
            <h2 className="font-serif text-5xl md:text-6xl mb-6">Sugestões para os <span className="italic">Noivos</span></h2>
            <p className="max-w-2xl mx-auto text-gray-500 text-sm leading-loose">
              Sua presença é o maior presente, mas se desejar nos presentear de forma especial, 
              selecionamos algumas sugestões para o nosso novo lar.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {GIFTS.map((gift, i) => (
              <motion.div
                key={gift.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group bg-wedding-cream rounded-[2.5rem] p-4 transition-all duration-300 hover:shadow-xl hover:shadow-wedding-gold/5"
              >
                <div className="aspect-square rounded-[2rem] overflow-hidden mb-6 bg-white relative">
                  <img 
                    src={gift.image} 
                    alt={gift.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-wedding-gold shadow-sm">
                    {gift.category}
                  </div>
                </div>
                <div className="px-4 pb-4">
                  <h3 className="font-serif text-xl mb-2 text-wedding-dark">{gift.name}</h3>
                  <div className="flex justify-between items-center">
                    <span className="text-wedding-gold font-bold text-lg">{gift.price}</span>
                    <button className="text-[10px] uppercase tracking-tighter font-bold flex items-center gap-2 hover:text-wedding-gold transition-colors">
                      Presentear <ChevronRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 p-12 bg-wedding-cream rounded-[3rem] text-center border border-wedding-gold/10">
            <h3 className="font-serif text-3xl mb-4 italic">Contribuição Via PIX</h3>
            <p className="text-gray-500 text-sm mb-8 max-w-lg mx-auto leading-relaxed">
              Prefere presentear com qualquer valor? Sinta-se à vontade para contribuir 
              com nossa lua de mel via PIX.
            </p>
            <div className="inline-flex items-center gap-4 bg-white px-8 py-4 rounded-2xl border border-wedding-gold/20">
              <span className="font-mono font-bold text-wedding-gold tracking-wider">casamentoav2026@pix.com.br</span>
              <button className="text-[10px] uppercase font-bold text-wedding-dark hover:text-wedding-gold">Copiar</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-wedding-cream border-t border-wedding-gold/10">
        <div className="container mx-auto px-6 text-center">
          <div className="font-serif text-4xl mb-12">A <span className="text-wedding-gold">&</span> V</div>
          
          <div className="flex flex-col md:flex-row justify-center gap-12 md:gap-24 mb-16">
            <div>
              <h5 className="uppercase text-[10px] font-bold tracking-widest text-wedding-gold mb-4">Local da Cerimônia</h5>
              <p className="text-sm text-gray-600 font-inter">Residência dos Monteiro<br/>07 de Maio, 16:00h</p>
            </div>
            <div>
              <h5 className="uppercase text-[10px] font-bold tracking-widest text-wedding-gold mb-4">Recepção & Karaokê</h5>
              <p className="text-sm text-gray-600 font-inter">Residência dos Monteiro<br/>Logo após a cerimônia, 19:00h</p>
            </div>
            <div>
              <h5 className="uppercase text-[10px] font-bold tracking-widest text-wedding-gold mb-4">Contato</h5>
              <p className="text-sm text-gray-600 font-inter">suporte@casamentoav.com.br<br/>(11) 99999-9999</p>
            </div>
          </div>

          <div className="flex justify-center gap-6 mb-12">
            <a href="#" className="w-10 h-10 rounded-full border border-wedding-gold/20 flex items-center justify-center hover:bg-wedding-gold/10 transition-colors">
              <Instagram className="w-5 h-5 text-wedding-gold" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-wedding-gold/20 flex items-center justify-center hover:bg-wedding-gold/10 transition-colors">
              <Heart className="w-5 h-5 text-wedding-gold" />
            </a>
          </div>

          <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400">
            Desenvolvido com amor para Anderson & Vanessa
          </p>
        </div>
      </footer>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-wedding-dark/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-12 cursor-pointer"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors">
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImg}
              className="max-w-full max-h-full object-contain rounded-lg p-4 shadow-2xl"
              alt="Full size preview"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
