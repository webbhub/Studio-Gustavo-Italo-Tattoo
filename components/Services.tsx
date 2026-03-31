import React from 'react';
import Section from './ui/Section';

const services = [
  {
    title: 'Realismo',
    description: 'Reprodução fiel de fotografias com técnicas avançadas de sombra e luz, criando obras que parecem ganhar vida.',
    image: 'https://i.postimg.cc/28HPr8xh/tattoo-zeus.jpg'
  },
  {
    title: 'Fine Line',
    description: 'Traços finos, precisos e delicados para tatuagens minimalistas, elegantes e com acabamento impecável.',
    image: 'https://i.postimg.cc/QxpJJ6HS/fine%20costas%20mina.jpg'
  },
  {
    title: 'Lettering',
    description: 'Caligrafia artística personalizada, transformando palavras e frases em designs únicos com fluidez e estilo.',
    image: 'https://i.postimg.cc/DfxCbpbT/letra-canela.jpg'
  },
  {
    title: 'Tribal',
    description: 'Padrões geométricos e formas sólidas inspiradas em culturas ancestrais, com forte impacto visual e significado.',
    image: 'https://i.postimg.cc/tRc3jKVv/tribal.jpg'
  },
  {
    title: 'Colorida',
    description: 'Tatuagens vibrantes com pigmentação intensa, explorando contrastes e degradês para um visual impactante.',
    image: 'https://i.postimg.cc/SK0qbxyx/beija-flor.jpg'
  },
  {
    title: 'Retrato',
    description: 'Eternize pessoas e momentos especiais com retratos realistas focados na captura da essência e emoção.',
    image: 'https://i.postimg.cc/0NmkzJtS/hamster.jpg'
  }
];

const Services: React.FC = () => {
  return (
    <Section id="services">
      <div className="text-center mb-16">
        <h2 className="font-display text-4xl font-bold uppercase mb-4">Especialidades</h2>
        <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {services.map((service, idx) => (
          <div key={idx} className="group relative h-96 overflow-hidden border border-zinc-800 bg-zinc-900">
            {/* Background Image */}
            <img 
              src={service.image} 
              alt={service.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
            />
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-300"></div>
            
            {/* Content */}
            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="font-display text-2xl font-bold uppercase text-white mb-2 border-l-4 border-brand-gold pl-3">
                {service.title}
              </h3>
              <p className="text-zinc-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Services;