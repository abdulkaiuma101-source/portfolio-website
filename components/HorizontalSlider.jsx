'use client'
import { useRef } from 'react';
import { motion } from 'framer-motion';

export default function HorizontalSlider({ items }) {
  const constraintsRef = useRef(null);

  return (
    <div className="relative overflow-hidden w-full cursor-grab active:cursor-grabbing" ref={constraintsRef}>
      <motion.div 
        drag="x"
        dragConstraints={constraintsRef}
        dragElastic={0.2}
        className="flex gap-6 pb-8 pt-4 w-max"
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
            className="w-[85vw] md:w-[400px] flex-shrink-0 bg-[#0A0A0A] border-2 border-[#333] hover:border-[#DFFF00] p-8 flex flex-col justify-between transition-colors duration-300 group/card"
          >
             <div className="flex justify-between items-start mb-12">
               <span className="font-mono text-xs tracking-widest text-[#444] group-hover/card:text-[#00F0FF] transition-colors">{item.tag || `0${i+1}`}</span>
             </div>
             <div>
               <h3 className="text-3xl font-bold font-display mb-4 leading-tight">{item.title}</h3>
               <p className="text-[#a0a0a0] font-sans leading-relaxed text-sm">{item.desc}</p>
             </div>
             {item.metric && (
               <div className="mt-8">
                 <span className="inline-block mt-4 px-4 py-2 border border-[#DFFF00]/40 bg-[#DFFF00]/10 text-[#DFFF00] font-mono text-xs font-bold tracking-widest">
                   {item.metric}
                 </span>
               </div>
             )}
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
