import React from 'react';
import Section from './ui/Section';
import { ShieldCheck, UserCheck, Award, TrendingUp, ArrowRight, Instagram } from 'lucide-react';

const About: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Section id="about" className="bg-brand-dark">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Side */}
        <div className="relative group">
           {/* Subtle glow effect behind the image */}
           <div className="absolute -inset-1 bg-gradient-to-tr from-brand-gold/20 to-zinc-800/20 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition duration-700"></div>
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://i.postimg.cc/Qxhpt4wr/GUSTAVO-TATUANDO.jpg"
                alt="Gustavo Italo Tatuando"
                className="w-full h-[400px] lg:h-[500px] object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-700 ease-in-out"
              />
              {/* Instagram Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/40">
                <a 
                  href="https://www.instagram.com/gustavoitalo.tattoo/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-4 bg-brand-gold text-black rounded-full transform scale-75 group-hover:scale-100 transition-transform duration-500 hover:bg-white"
                >
                  <Instagram size={32} />
                </a>
              </div>
            </div>
        </div>

        {/* Content Side */}
        <div>
          <div className="mb-8">
            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-2 block">
              Um dos melhores de Hortolândia
            </span>
            <div className="relative inline-block mb-8">
              <h2 className="font-display text-5xl lg:text-7xl font-bold text-white uppercase tracking-tight">
                Gustavo Italo
              </h2>
              <div className="absolute -bottom-2 left-0 w-24 h-1 bg-white"></div>
            </div>
            <h3 className="text-white font-bold uppercase text-lg md:text-xl tracking-wide mt-6 mb-6">
              Realismo e Fine Line com precisão e alto padrão
            </h3>
          </div>

          <div className="space-y-4 text-zinc-400 text-base md:text-lg leading-relaxed mb-10 font-light">
            <p>
              Estúdio próprio, ambiente planejado para garantir conforto, segurança e exclusividade em cada atendimento.
            </p>
            <p>
              Cada projeto é desenvolvido de forma personalizada, respeitando a ideia do cliente e elevando o resultado ao mais alto nível.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="flex gap-4 group/item">
              <ShieldCheck className="text-brand-gold w-6 h-6 shrink-0 group-hover/item:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Excelência em biossegurança</h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Alvará e normas rigorosas</p>
              </div>
            </div>
            <div className="flex gap-4 group/item">
              <UserCheck className="text-brand-gold w-6 h-6 shrink-0 group-hover/item:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Atendimento profissional</h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Exclusividade e conforto</p>
              </div>
            </div>
            <div className="flex gap-4 group/item">
              <Award className="text-brand-gold w-6 h-6 shrink-0 group-hover/item:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Especialização técnica</h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Domínio em realismo e traços</p>
              </div>
            </div>
            <div className="flex gap-4 group/item">
              <TrendingUp className="text-brand-gold w-6 h-6 shrink-0 group-hover/item:scale-110 transition-transform" />
              <div>
                <h4 className="text-white font-bold uppercase text-xs tracking-widest mb-1">Referência em crescimento</h4>
                <p className="text-zinc-500 text-[10px] uppercase tracking-wider">Evolução e alto padrão</p>
              </div>
            </div>
          </div>

          <a
            href="#services"
            onClick={(e) => handleScroll(e, 'services')}
            className="inline-flex items-center gap-3 px-8 py-3 border border-zinc-700 text-white font-display font-bold uppercase tracking-widest text-xs md:text-sm hover:border-brand-gold hover:text-brand-gold transition-all duration-300 group rounded-sm"
          >
            Nossos Serviços
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </Section>
  );
};

export default About;