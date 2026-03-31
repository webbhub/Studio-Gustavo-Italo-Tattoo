import React from 'react';
import Section from './ui/Section';
import Portfolio from './Portfolio';

const Artists: React.FC = () => {
  return (
    <Section id="portfolio" className="bg-zinc-900 border-y border-zinc-800">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
        <div>
           <h3 className="text-brand-gold font-bold tracking-widest uppercase mb-2">Trabalhos</h3>
           <h2 className="font-display text-4xl md:text-5xl font-bold uppercase text-white">Meu Portfólio</h2>
        </div>
        <p className="max-w-md text-zinc-400 text-right md:text-right text-sm">
          Uma seleção dos meus melhores trabalhos em realismo e fine line. Cada traço é pensado para ser único.
        </p>
      </div>

      <Portfolio />
    </Section>
  );
};

export default Artists;