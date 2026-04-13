'use client'
import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageSquare, X, ArrowRight } from 'lucide-react'

const SUGGESTIONS = [
  "What is your GTM experience?",
  "Tell me about a successful case study.",
  "What are your core services?"
]

export default function ChatCV() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const messagesEndRef = useRef(null)

  const hasStarted = messages.length > 0;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, loading])

  const sendMessage = async (text) => {
    if (!text.trim()) return
    const userMessage = { role: 'user', content: text }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, userMessage] })
      })
      const data = await res.json()
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.reply }])
      } else {
        setMessages(prev => [...prev, { role: 'assistant', content: "SYSTEM ERROR." }])
      }
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "CONNECTION REFUSED." }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <button 
        onClick={() => setOpen(true)}
        className="fixed bottom-8 right-8 px-6 py-4 border border-[#333] bg-[#0A0A0A] hover:bg-black hover:border-[#DFFF00] hover:text-[#DFFF00] text-[#a0a0a0] rounded-full shadow-2xl transition-all z-50 flex items-center justify-center font-mono text-sm tracking-widest gap-3 group"
      >
        <span>CHAT WITH MY CV</span>
        <MessageSquare size={16} className="group-hover:text-[#00F0FF] transition-colors" />
      </button>

      <AnimatePresence>
        {open && (
         <>
           <motion.div
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 bg-black/50 backdrop-blur-[20px] z-[100]"
             onClick={() => setOpen(false)}
           />

           <motion.div
             initial={{ x: '100%' }}
             animate={{ x: 0 }}
             exit={{ x: '100%' }}
             transition={{ duration: 0.6, ease: [0.77, 0, 0.175, 1] }}
             className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-black/70 backdrop-blur-[40px] border-l-2 border-[#333] shadow-2xl z-[101] flex flex-col"
           >
             <div className="flex items-center justify-between px-8 py-6 border-b border-[#333]">
               <div className="flex flex-col">
                 <span className="font-mono text-xs tracking-widest text-[#DFFF00] mb-1">AI AGENT ONLINE</span>
                 <span className="font-display text-xl font-bold text-white">
                   Abdul's Resume
                 </span>
               </div>
               <button
                 onClick={() => setOpen(false)}
                 className="p-2 border border-[#333] hover:border-[#F5F5F7] text-gray-400 hover:text-white transition-colors"
               >
                 <X size={20} />
               </button>
             </div>

             <div className="flex-1 overflow-y-auto p-8 space-y-6">
               {!hasStarted && (
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="mt-8"
                 >
                   <p className="text-[#a0a0a0] font-mono text-xs uppercase tracking-widest mb-6 border-b border-[#333] pb-2">
                     Choose a question to learn more
                   </p>
                   <div className="flex flex-col gap-3">
                     {SUGGESTIONS.map(s => (
                       <button
                         key={s}
                         onClick={() => sendMessage(s)}
                         className="px-5 py-4 text-left text-sm font-sans bg-[#0A0A0A] border border-[#333] hover:border-[#00F0FF] text-white transition-colors flex justify-between items-center group"
                       >
                         <span>{s}</span>
                         <ArrowRight size={14} className="text-[#666] group-hover:text-[#00F0FF]" />
                       </button>
                     ))}
                   </div>
                 </motion.div>
               )}

               {messages.map((m, i) => (
                 <motion.div
                   key={i}
                   initial={{ opacity: 0, y: 10 }}
                   animate={{ opacity: 1, y: 0 }}
                   className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                 >
                   <div
                     className={`max-w-[85%] px-5 py-4 text-sm font-sans leading-relaxed ${
                       m.role === 'user'
                         ? 'bg-[#1A1A1A] border-l-2 border-[#00F0FF] text-white'
                         : 'bg-transparent border-l-2 border-[#DFFF00] text-[#E0E0E0]'
                     }`}
                   >
                     {m.content}
                   </div>
                 </motion.div>
               ))}

               {loading && (
                 <motion.div
                   initial={{ opacity: 0 }}
                   animate={{ opacity: 1 }}
                   className="flex justify-start"
                 >
                   <div className="px-5 py-4 border-l-2 border-[#DFFF00]">
                     <div className="flex gap-1.5 items-center h-4">
                       <span className="w-1.5 h-1.5 bg-[#DFFF00] animate-pulse" />
                       <span className="w-1.5 h-1.5 bg-[#DFFF00] animate-pulse" style={{animationDelay: "0.15s"}} /> 
                       <span className="w-1.5 h-1.5 bg-[#DFFF00] animate-pulse" style={{animationDelay: "0.3s"}} />
                     </div>
                   </div>
                 </motion.div>
               )}

               <div ref={messagesEndRef} />
             </div>
 
             <div className="p-6 border-t border-[#333] bg-[#0A0A0A]">
               <div className="flex items-center gap-4 bg-[#000000] border border-[#333] focus-within:border-[#DFFF00] transition-colors p-2">
                 <input
                   type="text"
                   value={input}
                   onChange={(e) => setInput(e.target.value)}
                   onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                   placeholder="Type a message..."
                   className="flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-[#666] focus:outline-none font-mono"
                 />
                 <button
                   onClick={() => sendMessage(input)}
                   disabled={!input.trim() || loading}
                   className="p-2 border border-[#333] hover:border-[#DFFF00] text-gray-400 hover:text-[#DFFF00] disabled:opacity-30 disabled:hover:border-[#333] disabled:hover:text-gray-400 transition-colors"
                 >
                   <ArrowRight size={18} />
                 </button>
               </div>
             </div>
           </motion.div>
         </>
        )}
      </AnimatePresence>
    </>
  )
}
