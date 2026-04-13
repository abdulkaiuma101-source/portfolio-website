'use client'
import { useForm, ValidationError } from '@formspree/react'

function BrutalForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID);
  
  if (state.succeeded) {
      return (
        <div className="p-8 border-l border-[#DFFF00] bg-[#0A0A0A] mt-8 text-[#DFFF00] font-mono text-xs tracking-widest uppercase">
          [System Notice]: Message transmitted successfully.
        </div>
      );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col md:flex-row gap-0 w-full max-w-2xl border border-[#333] focus-within:border-[#00F0FF] transition-colors bg-[#0A0A0A]">
      <input 
        id="email" 
        type="email" 
        name="email" 
        placeholder="ENTER_EMAIL_ADDR"
        required 
        className="flex-1 bg-transparent px-6 py-4 text-white focus:outline-none placeholder:text-[#444] font-mono text-sm"
      />
      <ValidationError field="email" prefix="Email" errors={state.errors} />
      <button 
        type="submit" 
        disabled={state.submitting}
        className="px-8 py-4 bg-[#1A1A1A] text-[#F5F5F7] hover:bg-[#DFFF00] hover:text-black border-t md:border-t-0 md:border-l border-[#333] transition-colors font-mono text-sm font-bold uppercase tracking-widest disabled:opacity-50"
      >
        {state.submitting ? 'PROCESSING...' : 'INITIATE CONTACT'}
      </button>
    </form>
  )
}

export default function Footer() {
  return (
    <footer className="border-t border-[#333] px-6 md:px-12 py-24 bg-black flex flex-col z-10 relative" id="contact">
      <div className="max-w-[1600px] w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
           <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Ping Me.</h2>
           <p className="text-[#a0a0a0] font-sans">Reach out for fractional GTM strategy or consulting inquiries.</p>
           <BrutalForm />
        </div>
        
        <div className="flex flex-col justify-end items-start md:items-end font-mono text-xs text-[#444] tracking-widest uppercase space-y-4">
           <a href="#" className="hover:text-[#00F0FF] transition-colors pb-1 border-b border-transparent hover:border-[#00F0FF]">LINKEDIN ↗</a>
           <a href="#" className="hover:text-[#00F0FF] transition-colors pb-1 border-b border-transparent hover:border-[#00F0FF]">TWITTER ↗</a>
           <p className="pt-8 text-[#333]">© 2026 // ABDUL KAIUM</p>
        </div>
      </div>
    </footer>
  )
}
