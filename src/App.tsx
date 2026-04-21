/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { 
  Scale, 
  Shield, 
  Users, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Menu, 
  X,
  Award,
  BookOpen,
  Briefcase,
  CheckCircle2,
  Linkedin,
  Instagram,
  Facebook
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Types
interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const services: Service[] = [
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Assessoria completa em contratos, responsabilidade civil, obrigações e direitos reais.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    description: 'Defesa e consultoria tanto para empregados quanto para empresas em questões laborais.',
    icon: <Briefcase className="w-6 h-6" />,
  },
  {
    id: 'familia',
    title: 'Direito de Família',
    description: 'Atuação sensível em divórcios, guarda, inventários e planejamento sucessório.',
    icon: <Scale className="w-6 h-6" />,
  },
  {
    id: 'digital',
    title: 'Direito Digital',
    description: 'Consultoria especializada em LGPD, proteção de dados e crimes cibernéticos.',
    icon: <Shield className="w-6 h-6" />,
  },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre', href: '#about' },
    { name: 'Serviços', href: '#services' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-zinc-bg text-zinc-text font-sans">
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-500 border-b ${
          scrolled 
            ? 'bg-zinc-bg/95 backdrop-blur-md py-4 border-zinc-border shadow-2xl' 
            : 'bg-transparent py-8 border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center space-x-4 group cursor-pointer">
            <div className="w-10 h-10 border-2 border-gold flex items-center justify-center font-serif text-xl italic text-gold group-hover:bg-gold group-hover:text-zinc-bg transition-all duration-300">
              VA
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-[0.15em] uppercase leading-tight">Vanguarda Advocacia</span>
              <span className="text-[10px] text-zinc-muted uppercase tracking-[0.2em] font-medium">Excelência & Estratégia</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-12 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-[11px] uppercase tracking-[0.15em] font-bold text-zinc-muted hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-6 py-3 border border-gold text-gold uppercase text-[10px] tracking-widest font-bold hover:bg-gold hover:text-zinc-bg transition-all duration-300"
            >
              Agendar Consultoria
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-zinc-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute top-0 left-0 w-full h-screen bg-zinc-bg z-40 flex flex-col items-center justify-center space-y-8 p-12"
            >
              <button 
                className="absolute top-8 right-8"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="w-8 h-8 text-gold" />
              </button>
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-serif italic text-zinc-text hover:text-gold transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsMenuOpen(false)}
                className="px-10 py-4 border border-gold text-gold uppercase text-xs tracking-widest font-bold"
              >
                Agendar Consultoria
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden px-6 md:px-12">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop" 
            alt="Escritório"
            className="w-full h-full object-cover opacity-10 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-zinc-bg via-transparent to-zinc-bg"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="col-span-12 lg:col-span-8 space-y-10"
          >
            <h2 className="text-[12px] text-gold uppercase tracking-[0.4em] font-bold border-l-2 border-gold pl-8">
              Compromisso & Credibilidade
            </h2>
            <h1 className="text-6xl md:text-[5.5rem] font-serif leading-[1.05] italic">
              Soluções jurídicas<br/>estratégicas para casos<br/>
              <span className="text-gold">complexos.</span>
            </h1>
            <p className="text-zinc-muted text-lg md:text-xl leading-relaxed max-w-xl font-light">
              Com mais de 15 anos de atuação, oferecemos assessoria personalizada fundamentada na ética, rigor técnico e foco inabalável nos resultados.
            </p>
            <div className="pt-6">
              <a 
                href="#contact"
                className="inline-block px-12 py-5 border border-gold text-gold uppercase text-[11px] tracking-[0.25em] font-bold hover:bg-gold hover:text-zinc-bg transition-all duration-500"
              >
                Agendar Consultoria
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 border-y border-zinc-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-16 items-center">
            <div className="col-span-12 mb-8">
              <h2 className="text-[11px] text-zinc-dim uppercase tracking-[0.4em] font-bold mb-4">Trajetória Profissional</h2>
              <div className="w-24 h-px bg-gold/50"></div>
            </div>
            
            <div className="col-span-12 lg:col-span-5 relative group">
              <div className="border border-zinc-border p-5 bg-zinc-card relative overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop" 
                  alt="Dr. Silva"
                  className="w-full grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000 scale-105 group-hover:scale-100"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-zinc-bg border border-gold p-10 hidden md:block shadow-2xl">
                <p className="text-4xl font-serif italic text-gold mb-1">15+</p>
                <p className="text-[9px] uppercase tracking-[0.2em] text-zinc-muted leading-relaxed font-bold">Anos de Especialização Jurídica</p>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-7 space-y-10">
              <h3 className="text-4xl md:text-5xl font-serif italic leading-[1.1]">
                Ética e excelência na <br/>
                <span className="text-gold">defesa dos seus interesses.</span>
              </h3>
              <div className="grid md:grid-cols-2 gap-10 text-zinc-muted">
                <p className="leading-relaxed font-light text-lg">
                  Fundado pelo Dr. Silva, o escritório nasceu da necessidade de um atendimento mais próximo e altamente especializado. Atuamos com transparência e vigor jurídico em cada etapa.
                </p>
                <p className="leading-relaxed font-light text-zinc-dim">
                  Nossa abordagem combina o conhecimento jurídico tradicional com as ferramentas digitais mais modernas, garantindo agilidade e transparência em cada processo estratégico.
                </p>
              </div>
              <div className="pt-10 grid grid-cols-2 gap-10 border-t border-zinc-border">
                <div className="space-y-4">
                  <Award className="text-gold w-6 h-6" />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold">Referência Nacional</h4>
                  <p className="text-[11px] text-zinc-dim leading-relaxed font-light">Membro honorário com premiações em Direito Digital e Civil.</p>
                </div>
                <div className="space-y-4">
                  <BookOpen className="text-gold w-6 h-6" />
                  <h4 className="text-[10px] uppercase tracking-widest font-bold">Excelência Técnica</h4>
                  <p className="text-[11px] text-zinc-dim leading-relaxed font-light">Corpo jurídico com formação acadêmica de alto nível e especializações.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-zinc-card">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-16">
            <div className="col-span-12 lg:col-span-4 space-y-8">
              <h2 className="text-[11px] text-gold uppercase tracking-[0.4em] font-bold">Expertise</h2>
              <h3 className="text-5xl md:text-6xl font-serif italic leading-[1.1]">Áreas de <br/>Atuação</h3>
              <p className="text-zinc-muted font-light leading-relaxed text-lg pr-8">
                Oferecemos soluções jurídicas personalizadas fundamentadas no rigor técnico e foco em resultados concretos.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 divide-y divide-zinc-border border-y border-zinc-border">
              {services.map((service, index) => (
                <div key={service.id} className="py-12 flex flex-col md:flex-row md:items-center gap-8 group cursor-default">
                  <div className="text-gold font-serif italic text-3xl opacity-30 group-hover:opacity-100 transition-opacity duration-500 w-16">
                    0{index + 1}.
                  </div>
                  <div className="flex-1 space-y-4">
                    <h4 className="text-2xl font-bold tracking-tight group-hover:text-gold transition-colors">{service.title}</h4>
                    <p className="text-zinc-dim text-base leading-relaxed font-light max-w-2xl">
                      {service.description}
                    </p>
                  </div>
                  <div className="hidden md:block opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                    <ChevronRight className="text-gold w-6 h-6" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-zinc-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-12 gap-20">
            <div className="col-span-12 lg:col-span-6 space-y-16">
              <div>
                <h2 className="text-[11px] text-zinc-dim uppercase tracking-[0.4em] font-bold mb-6">Conexão</h2>
                <h3 className="text-5xl md:text-6xl font-serif italic leading-tight">Agende seu <br/><span className="text-gold">atendimento.</span></h3>
              </div>
              
              <div className="space-y-12">
                <div className="flex items-start space-x-8 group">
                  <MapPin className="text-gold w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-zinc-dim font-bold mb-3">Escritório Central</h5>
                    <p className="text-zinc-text font-light text-lg">Av. Paulista, 1000 • São Paulo, SP</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group">
                  <Phone className="text-gold w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-zinc-dim font-bold mb-3">Comunicação Direta</h5>
                    <p className="text-zinc-text font-light text-lg underline decoration-gold/20 underline-offset-[12px]">+55 (11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-start space-x-8 group">
                  <Mail className="text-gold w-6 h-6 mt-1 group-hover:scale-110 transition-transform" />
                  <div>
                    <h5 className="text-[10px] uppercase tracking-widest text-zinc-dim font-bold mb-3">Correio Digital</h5>
                    <p className="text-zinc-text font-light text-lg">contato@vanguardaadvocacia.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-12 lg:col-span-6 border border-zinc-border p-10 md:p-16 bg-zinc-card relative">
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold/5 blur-3xl rounded-full"></div>
              <form className="space-y-10 relative z-10">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-muted font-bold block">Nome Completo</label>
                  <input 
                    type="text" 
                    className="w-full bg-transparent border-b border-zinc-border/50 py-3 outline-none focus:border-gold transition-all duration-300 font-light text-zinc-text"
                    placeholder="Como devemos chamá-lo?"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-muted font-bold block">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    className="w-full bg-transparent border-b border-zinc-border/50 py-3 outline-none focus:border-gold transition-all duration-300 font-light text-zinc-text"
                    placeholder="exemplo@email.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-widest text-zinc-muted font-bold block">Mensagem</label>
                  <textarea 
                    rows={2} 
                    className="w-full bg-transparent border-b border-zinc-border/50 py-3 outline-none focus:border-gold transition-all duration-300 resize-none font-light text-zinc-text"
                    placeholder="Descreva brevemente o seu caso"
                  ></textarea>
                </div>
                <div className="pt-6">
                  <button 
                    type="submit" 
                    className="w-full border border-gold text-gold uppercase text-[11px] tracking-[0.3em] font-bold py-6 hover:bg-gold hover:text-zinc-bg transition-all duration-500 shadow-lg hover:shadow-gold/10"
                  >
                    Iniciar Consulta
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-zinc-border">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 border border-gold flex items-center justify-center font-serif text-sm italic text-gold">VA</div>
              <span className="text-sm font-bold tracking-widest uppercase">Vanguarda</span>
            </div>
            <div className="flex flex-col md:flex-row md:space-x-12 space-y-4 md:space-y-0 text-[10px] text-zinc-dim uppercase tracking-[0.2em] font-medium">
              <span>OAB/SP 123.456</span>
              <span>© 2026 Vanguarda Advocacia</span>
              <span>São Paulo • Brasil</span>
            </div>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="w-12 h-12 rounded-full border border-zinc-border flex items-center justify-center text-[11px] text-zinc-muted hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-1">IN</a>
            <a href="#" className="w-12 h-12 rounded-full border border-zinc-border flex items-center justify-center text-[11px] text-zinc-muted hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-1">IG</a>
            <a href="#" className="w-12 h-12 rounded-full border border-zinc-border flex items-center justify-center text-[11px] text-zinc-muted hover:border-gold hover:text-gold transition-all duration-300 hover:-translate-y-1">LI</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

