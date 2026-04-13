'use client'
import { motion } from 'framer-motion';
import ChatCV from '@/components/ChatCV';
import Footer from '@/components/Footer';
import HorizontalSlider from '@/components/HorizontalSlider';

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.1 } }
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-[#F5F5F7] font-sans selection:bg-[#DFFF00] selection:text-black relative">
      {/* Top Navbar / Header */}
      <header className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-40 bg-gradient-to-b from-black to-transparent pointer-events-none">
        <div className="font-display text-2xl font-bold tracking-tighter pointer-events-auto">
          AK<span className="text-[#DFFF00]">.</span>
        </div>
        <nav className="font-mono text-xs tracking-widest uppercase flex gap-8 pointer-events-auto mt-2">
          <a href="#work" className="hover:text-[#00F0FF] transition-colors">Work</a>
          <a href="#pov" className="hover:text-[#00F0FF] transition-colors">Thinking</a>
          <a href="#contact" className="hover:text-[#00F0FF] transition-colors">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="pt-48 pb-24 md:pt-64 md:pb-32 px-6 md:px-12 max-w-[1600px] mx-auto flex flex-col md:flex-row gap-16 md:items-end overflow-hidden">
        <div className="flex-1 z-10 w-full min-w-0">
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-[8rem] font-display font-bold leading-none tracking-tighter mb-8 break-words"
          >
            Abdul <br /> Kaium<span className="text-[#DFFF00]">.</span>
          </motion.h1>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-display tracking-tight mb-8 leading-tight max-w-3xl"
          >
            I take responsibility. If your marketing isn't working, I want to know why, and I want to fix it.
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-sans text-[#a0a0a0] leading-relaxed max-w-xl space-y-4 text-sm md:text-lg"
          >
            <p className="font-mono text-xs md:text-sm tracking-widest uppercase text-white mb-6">Associate Project Manager · Mediusware<span className="text-[#DFFF00]">●</span></p>
            <p>Leading marketing & growth projects end-to-end.</p>
            <p className="text-[#00F0FF]">B2B Lead Gen · Performance Marketing · Content Systems.</p>
            <div className="pt-4">
               <span className="font-bold text-[#DFFF00] inline-flex items-center gap-2 border-2 border-[#DFFF00]/30 px-4 py-2 bg-[#1A1A1A] font-mono text-xs uppercase tracking-widest max-w-full">
                 🏆 Managing $5K+ monthly ad budgets & 7-member cross-functional team
               </span>
            </div>
          </motion.div>
        </div>
        
        {/* User Profile Image Component */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative w-full md:w-[400px] lg:w-[500px] aspect-[4/5] border-2 border-[#333] bg-[#0A0A0A] group shrink-0"
        >
          <img 
            src="/profile.png" 
            alt="Abdul Kaium Profile" 
            className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 mix-blend-luminosity hover:mix-blend-normal"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextElementSibling.style.display = 'flex';
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center text-[#444] font-mono text-xs tracking-widest text-center px-8" style={{display: 'none'}}>
            [PLACE 'PROFILE.PNG' IN PUBLIC FOLDER]
          </div>
        </motion.div>
      </section>

      {/* Selected Work Horizontal Scroll */}
      <motion.section 
        id="work" 
        className="border-t-2 border-[#333] py-24 md:py-32 px-6 md:px-12 bg-[#050505]"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
         <div className="max-w-[1600px] mx-auto w-full">
          <motion.div variants={childVariants} className="mb-16 border-l-4 border-[#00F0FF] pl-6">
            <span className="font-mono text-xs tracking-widest text-[#666] uppercase">Selected Work</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Greatest Hits <span className="text-[#DFFF00]">⭐</span></h2>
          </motion.div>
          
          <motion.div variants={childVariants} className="w-full">
            <HorizontalSlider 
              items={[
                 { tag: "01 // GTM EXECUTION", title: "GTM Execution & Revenue Growth", desc: "Developed and executed full go-to-market strategies defining positioning, messaging frameworks, and generating direct pipeline.", metric: "+20% Revenue Growth" },
                 { tag: "02 // GOOGLE PPC", title: "Google PPC Performance", desc: "Overseeing $5,000+ monthly ad spend on Google PPC — driving measurable ROI through precision targeting.", metric: "$5K+/mo Ad Budget" },
                 { tag: "03 // SEO & AMZ", title: "E-Commerce SEO & AMZ", desc: "Led keyword research and SEO strategy across Amazon, Shopify, and Etsy using Helium 10.", metric: "+30% Visibility" },
                 { tag: "04 // OPTIMIZATION", title: "Funnel Design Optimization", desc: "Designed acquisition funnels lowering bounce rates through data-backed improvements.", metric: "+25% Acquisition Rate" },
                 { tag: "05 // EMAIL AUTOMATION", title: "Klaviyo Email Automations", desc: "Built Klaviyo automations and segmentation flows ensuring retention.", metric: "+15% Customer Retention" },
                 { tag: "06 // STRATEGY", title: "AI-Powered Lead Generation", desc: "Led SEO audits and lead gen translating signals into decisions using SEMrush & Ahrefs.", metric: "+18% Qualified Leads" }
              ]} 
            />
          </motion.div>
        </div>
      </motion.section>

      {/* POV / Thinking */}
      <motion.section 
        id="pov" 
        className="border-t-2 border-[#333] py-24 md:py-32 px-6 md:px-12 bg-black"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.div variants={childVariants} className="mb-16 border-l-4 border-[#DFFF00] pl-6">
            <span className="font-mono text-xs tracking-widest text-[#666] uppercase">Thinking</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">Adventures in Strategy ⚔️</h2>
          </motion.div>

          <motion.div variants={childVariants} className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {[
              { tag: "AI & Marketing", title: "Why AI doesn't replace strategists — it exposes the weak ones.", desc: "AI is a mirror. It reflects your strategic clarity back at you." },
              { tag: "B2B Growth", title: "Funnels aren't broken. Your assumptions about buyers are.", desc: "Most funnels fail upstream — at the insight layer." },
              { tag: "Content Strategy", title: "Stop writing content. Start writing for decisions.", desc: "The content that converts is written for a specific moment in a buyer's decision journey." },
              { tag: "Leadership", title: "What managing a 7-person team taught me about clarity.", desc: "Clarity is the most underrated productivity tool in management." },
              { tag: "Performance Marketing", title: "Data without narrative is just noise.", desc: "The rarest skill in marketing isn't collecting data — it's turning it into a story." },
              { tag: "E-Commerce", title: "Amazon SEO is really just empathy at scale.", desc: "Empathy, not hacks. Understand what they type at 11pm." }
            ].map((pov, i) => (
              <a href="https://linkedin.com/in/akarnab" target="_blank" rel="noreferrer" key={i} className="group block border-2 border-[#333] hover:border-[#00F0FF] p-8 bg-[#0A0A0A] transition-colors duration-300">
                <span className="font-mono text-xs tracking-widest text-[#00F0FF] uppercase mb-4 block">{pov.tag}</span>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-white text-[#F5F5F7] transition-colors">{pov.title}</h3>
                <p className="text-[#a0a0a0] text-sm leading-relaxed mb-8">{pov.desc}</p>
                <div className="font-mono text-xs uppercase tracking-widest text-[#666] group-hover:text-[#00F0FF] transition-colors flex items-center gap-2">
                  Read on LinkedIn ↗
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Footer / Contact */}
      <Footer />

      <ChatCV />
    </main>
  );
}
