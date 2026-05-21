import { useState } from 'react'

const FAQS = [
  { q: 'How is this different from a tiffin service?', a: 'Unlike commercial tiffin services, your food is cooked by a real neighbourhood family — the same way they cook for themselves. No bulk cooking, no preservatives, no compromise on taste.' },
  { q: 'Which areas do you deliver to?', a: 'We currently deliver to Marathalli, Kammanahalli, Hoodi, Banaswadi, and Kasturinagar. Expanding soon — stay tuned!' },
  { q: 'What cuisines are available?', a: 'We offer authentic Bihari, Odia, and South Indian cuisine — all cooked by families who actually belong to those regions. More cuisines coming soon.' },
  { q: 'How do I know what is being cooked today?', a: 'Each cuisine follows a standard weekly menu with regional specials on certain days. For daily trials, book at least 24 hours in advance. Subscribers get daily updates.' },
  { q: 'Is the food hygienic and safe?', a: 'All kitchen associates go through a hygiene verification. Food is prepared in home kitchens — the same standards any loving family would apply for themselves.' },
  { q: 'Can I pause or cancel my subscription?', a: 'Yes, absolutely. No-stress subscriptions — reach out to us and we will sort it. No hidden charges.' },
]

export default function FAQ() {
  const [open, setOpen] = useState(null)

  return (
    <section className="relative px-5 py-24 overflow-hidden" style={{ background: '#F5E8D0' }}>

      {/* ambient orbs */}
      <div className="absolute top-[10%] left-[-20%] w-[60vw] h-[60vw] bg-[#8B1A1A]/5 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-[50%] right-[-30%] w-[70vw] h-[70vw] bg-[#D4820A]/10 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <span className="sec-label">Got Questions?</span>
        <h2 className="sec-title mb-8">We've Got Answers</h2>
      </div>

      <div className="relative z-10 flex flex-col gap-3">
        {FAQS.map((f, i) => (
          <div key={i} className="bg-white/60 backdrop-blur-xl border border-white shadow-[0_4px_16px_-8px_rgba(139,26,26,0.1),inset_0_1px_2px_rgba(255,255,255,0.9)] rounded-[20px] overflow-hidden transition-all duration-300">
            <button
              className="w-full px-5 py-[16px] flex justify-between items-center gap-3 text-left font-nunito transition-colors active:bg-black/5"
              onClick={() => setOpen(open === i ? null : i)}
            >
              <span className="text-[14px] font-bold text-ink">{f.q}</span>
              <span
                className="shrink-0 w-[22px] h-[22px] rounded-full bg-cream-d flex items-center justify-center text-crimson font-light text-base transition-transform duration-300 ease-in-out"
                style={{ transform: open === i ? 'rotate(135deg)' : 'none' }}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
            >
              <div className="overflow-hidden">
                <p className="px-4 pb-4 text-[13px] text-ink-light leading-relaxed">{f.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Transition to Footer */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #1A0A05 100%)' }} />
    </section>
  )
}
