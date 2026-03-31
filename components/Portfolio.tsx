import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';

const portfolioItems = [
  { src: "https://i.postimg.cc/ZqPW13xh/cruz-com-rosa.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/sfWXMqLr/tattoo-anjo.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/15ZzwMx3/tattoo-mascara.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/Yqkph9gL/tattoo-costas.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/wMkYhXJR/real-flor-ombro.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/PJTBrCcT/pantera.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/nVGyS1jr/corintuians.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/28HPr8xh/tattoo-zeus.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/RZyyJs8p/tattoo-santa.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/fLhPB3Mj/leao-cavaleiro.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/wvcGP6v6/cruz-e-escrita.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/QxnnvYXT/rosa-fine.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/g2Ct2wL9/anime.jpg", category: "Anime" },
  { src: "https://i.postimg.cc/cHZDfVmq/fine-ombro.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/DfxCbpbT/letra-canela.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/X7hQsZ8N/fine-sol-costas.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/cCxbGVgF/letra-pescoco.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/Gpnz1Z6Y/chora-agr.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/LXHTJjHQ/fine-ante.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/Y9bxYj0Y/fine-mao.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/KjWrpVnb/fine-coracao.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/L8LBvx5x/fine-costas.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/YSxNBj16/fine-coxa.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/wvTXqH2s/letra-e-anjo.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/j2BP4fbd/fechamento.jpg", category: "Fechamento" },
  { src: "https://i.postimg.cc/tRc3jKVv/tribal.jpg", category: "Tribal" },
  { src: "https://i.postimg.cc/JhRJxm9q/fine-cavalo.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/k44SrsMq/jesus.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/Sj0YMp69/tigre.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/7PjKVGXX/letra-canela-2.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/dQZBLQvv/letra-antebraco.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/QxpJJ6HS/fine-costas-mina.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/Vkg93d9W/jesus-e-coracao.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/d0S2Vpxm/gueixa-costas.jpg", category: "Oriental" },
  { src: "https://i.postimg.cc/8kvRTyBM/olho-e-anjo.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/jSxPQRVd/polvo.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/CKt8gDR4/leao.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/brPsyRpV/letra-peito.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/bNzs4LmM/anjo-ante.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/xTtcQH7m/leao-ante.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/Gmt9mtwg/letra-mao.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/QtQdyW1X/coracao-mao.jpg", category: "Fine Line" },
  { src: "https://i.postimg.cc/C5wxTLsC/japa.jpg", category: "Oriental" },
  { src: "https://i.postimg.cc/cCT4syDr/letra-cara.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/hPyP6nzs/oriental.jpg", category: "Oriental" },
  { src: "https://i.postimg.cc/0NmkzJtS/hamster.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/6qHwkV3T/mascara-f1.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/NGbg2t4s/leao-cruz.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/653BdPj3/3-anjos.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/dVZvfycz/letra-anjo.jpg", category: "Lettering" },
  { src: "https://i.postimg.cc/SK0qbxyx/beija-flor.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/9fG2mHMg/leao-ombro.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/RFdzt1wY/jesus-cruz.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/Wz4cwDnj/relogio-e-pe.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/tCwGF4nF/raposa.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/1XFfPYks/atlas.jpg", category: "Realismo" },
  { src: "https://i.postimg.cc/PqkGFV4S/19f31bfc-09c5-4af3-bbb9-d6bfc8945844.jpg", category: "Realismo" },
];

const Portfolio: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full pt-12 pb-8 border-t border-zinc-800 mt-12 bg-zinc-950/50">
      <div className="flex justify-between items-end mb-8 px-4">
        <div>
           <h3 className="text-brand-gold font-bold tracking-widest uppercase text-xs mb-2">Trabalhos Recentes</h3>
           <p className="text-zinc-500 text-sm">Uma seleção dos nossos melhores projetos.</p>
        </div>
      </div>

      {/* Grid Layout */}
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 px-4">
        {portfolioItems.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-sm border border-zinc-800"
            onClick={() => setSelectedImage(item.src)}
          >
            <img 
              src={item.src} 
              alt={item.category} 
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
            />
            
            {/* Overlay Hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4">
               <Maximize2 className="text-brand-gold mb-2" size={24} />
               <span className="text-white font-display uppercase tracking-widest text-sm font-bold border-b-2 border-brand-gold pb-1">
                 {item.category}
               </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal for Fullscreen Image */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button 
            className="absolute top-6 right-6 text-zinc-400 hover:text-brand-gold transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X size={32} />
          </button>
          <img 
            src={selectedImage} 
            alt="Fullscreen Tattoo" 
            className="max-h-[90vh] max-w-full rounded-sm shadow-2xl border border-zinc-800"
          />
        </div>
      )}
    </div>
  );
};

export default Portfolio;