import { useEffect, useRef, useState } from 'react'

const CHAT = [
  { from: 'user', text: "Yaar, aaj phir bahar khana padega... ek mahine se ghar ka khana nahi mila 😮‍💨" },
  { from: 'maa',  text: "Beta! Ghar ka khana miss ho raha hai? Kaunse state se ho aap? 🥰" },
  { from: 'user', text: "Bihari hoon Maa-Ji. Dal-Chawal, Roti-Sabji... sach mein ghar jaisa. Yahan sirf Sambhar milta hai 😩" },
  { from: 'maa',  text: "Arey beta! Humare paas ek Bihari Maa hain aapke mohalle mein — jo apne ghar ke liye banati hain, ek serving aapke liye ❤️" },
  { from: 'user', text: "Seriously?! Authentic ghar ka khana?? Litti Chokha bhi milega kya? 👀" },
  { from: 'maa',  text: "Bilkul beta! Litti Chokha, Sattu Paratha, Dal Pitti... Maa ke haath ka khana, delivered right to you ✨" },
  { from: 'user', text: "Yeh toh zabardast hai bhai! Abhi sign up karna hai 🙌" },
]

export default function ComicStrip() {
  const sectionRef = useRef(null)
  const [count, setCount] = useState(0)
  const TOTAL = CHAT.length

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (!el) return
      const { top, height } = el.getBoundingClientRect()
      const scrollable = height - window.innerHeight
      if (scrollable <= 0) return
      const progress = Math.max(0, Math.min(1, -top / scrollable))
      setCount(Math.round(progress * TOTAL))
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [TOTAL])

  return (
    <section
      ref={sectionRef}
      style={{ height: `${(TOTAL + 1) * 100}vh` }}
    >
      <div
        className="sticky top-0 h-screen overflow-hidden flex flex-col relative"
        style={{ background: '#1E0D08' }}
      >
        {/* Background Ambient Orbs for Glass Effect */}
        <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[#D4820A]/20 rounded-full blur-[80px] pointer-events-none" />
        <div className="absolute bottom-[20%] right-[-10%] w-[70vw] h-[70vw] bg-[#8B1A1A]/20 rounded-full blur-[80px] pointer-events-none" />

        {/* Header */}
        <div className="text-center pt-10 pb-3 shrink-0 relative z-10">
          <span className="sec-label" style={{ color: '#D4820A' }}>The Story</span>
          <h2 className="font-playfair text-[#FDF6EC] text-2xl mt-1 leading-snug">
            Sound familiar?
          </h2>
          <p className="text-[12px] text-[#8B5E3C] mt-1">Every migrant in Bangalore has lived this moment.</p>
        </div>

        {/* Chat bubbles */}
        <div className="flex-1 overflow-hidden flex flex-col justify-end relative z-10" style={{ paddingBottom: '60px', paddingLeft: '12px', paddingRight: '12px', gap: '10px', display: 'flex', flexDirection: 'column' }}>
          {CHAT.slice(0, count).map((msg, i) => (
            <div
              key={i}
              className={`flex items-end gap-2 animate-slideUp ${msg.from === 'maa' ? 'flex-row-reverse' : ''}`}
            >
              {/* Avatar Box */}
              <div className="shrink-0 w-10 h-10 rounded-xl overflow-hidden border border-white/10 bg-[#2A1710] shadow-sm">
                <img
                  src={msg.from === 'user' ? `${import.meta.env.BASE_URL}BETA.png` : `${import.meta.env.BASE_URL}MAA.png`}
                  alt={msg.from === 'user' ? "Young migrant" : "Maa"}
                  className="w-full h-full object-cover"
                />
              </div>

              <div
                className="rounded-2xl px-3.5 py-2.5 max-w-[70%] backdrop-blur-xl shadow-[0_8px_32px_-6px_rgba(0,0,0,0.4)] border border-white/20"
                style={{
                  background: msg.from === 'user' ? 'rgba(255, 255, 255, 0.65)' : 'rgba(255, 245, 232, 0.65)',
                  borderRadius: msg.from === 'user' ? '18px 18px 18px 4px' : '18px 18px 4px 18px',
                }}
              >
                <p className="text-[9px] font-extrabold tracking-[1.5px] uppercase mb-1 drop-shadow-sm"
                  style={{ color: msg.from === 'user' ? '#8B1A1A' : '#D4820A' }}>
                  {msg.from === 'user' ? 'You' : 'Maa Se'}
                </p>
                <p className="text-[13px] leading-relaxed text-[#1A0A05]">{msg.text}</p>
              </div>
            </div>
          ))}

          {/* scroll progress dots */}
          <div className="flex justify-center gap-1.5 pt-2 pb-1">
            {CHAT.map((_, i) => (
              <div key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i < count ? '18px' : '6px',
                  height: '6px',
                  background: i < count ? '#D4820A' : 'rgba(253,246,236,0.2)',
                }}
              />
            ))}
          </div>
        </div>

        {/* subtle vignette at bottom transitioning to cream */}
        <div className="absolute bottom-0 left-0 right-0 h-64 pointer-events-none z-[1]"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #FDF6EC 100%)' }} />
      </div>
    </section>
  )
}
