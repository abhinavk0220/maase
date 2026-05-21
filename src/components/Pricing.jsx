const PLANS = [
  {
    type: 'Daily Trial',
    desc: 'Book 24 hrs in advance',
    price: '₹200',
    sub: 'per meal',
    featured: false,
  },
  {
    type: 'Weekly Plan',
    desc: '6 meals · Mon to Sat',
    was: '₹1,000',
    price: '₹900',
    save: 'Save ₹100',
    featured: false,
  },
  {
    type: 'Monthly Plan',
    desc: '~26 meals · full month',
    was: '₹4,000',
    price: '₹3,400',
    save: 'Best Value',
    featured: true,
  },
  {
    type: 'Hybrid Plan',
    desc: 'Flexible as per your needs',
    price: 'Custom',
    featured: false,
  },
]

export default function Pricing() {
  return (
    <section id="subscribe" className="relative px-5 py-24 overflow-hidden" style={{ background: '#FDF6EC' }}>

      {/* Background ambient orbs */}
      <div className="absolute top-[30%] left-[-20%] w-[70vw] h-[70vw] bg-[#D4820A]/10 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[80vw] h-[80vw] bg-[#8B1A1A]/8 rounded-full blur-[90px] pointer-events-none" />

      <div className="relative z-10 text-center">
        <span className="sec-label">Subscription Plans</span>
        <h2 className="sec-title mb-1">Simple, Honest Pricing</h2>
        <p className="text-center text-[12px] italic text-ink-light mb-10">
          All cuisines · same pricing · cancel anytime
        </p>
      </div>

      <div className="relative z-10 flex flex-col gap-4">
        {PLANS.map((p, i) => (
          <div
            key={i}
            className={`rounded-[20px] px-5 py-5 flex justify-between items-center transition-all duration-300 relative overflow-hidden ${
              p.featured
                ? 'bg-gradient-to-r from-[#8B1A1A] to-[#6b1414] border border-white/10 shadow-[0_12px_32px_rgba(139,26,26,0.35)] scale-[1.03] z-10'
                : 'bg-white/60 backdrop-blur-xl border border-white/80 shadow-[0_8px_24px_-10px_rgba(139,26,26,0.08),inset_0_1px_2px_rgba(255,255,255,0.9)] active:scale-[0.98]'
            }`}
          >
            {p.featured && (
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4820A]/20 rounded-full blur-2xl pointer-events-none translate-x-1/2 -translate-y-1/2" />
            )}
            <div className="relative z-10">
              <p className={`font-playfair text-[1.2rem] font-bold mb-0.5 ${p.featured ? 'text-[#FDF6EC]' : 'text-[#8B1A1A]'}`}>
                {p.type}
              </p>
              <p className={`text-[12px] font-medium ${p.featured ? 'text-[#FDF6EC]/80' : 'text-ink-light'}`}>
                {p.desc}
              </p>
            </div>
            <div className="text-right relative z-10">
              {p.was && (
                <p className={`text-[11px] line-through mb-0.5 ${p.featured ? 'text-[#FDF6EC]/50' : 'text-ink-light/70'}`}>
                  {p.was}
                </p>
              )}
              <p className={`font-playfair font-black tracking-tight ${p.featured ? 'text-[#D4820A]' : 'text-[#D4820A]'} ${p.price === 'Custom' ? 'text-[1.2rem]' : 'text-[1.6rem]'}`}>
                {p.price}
              </p>
              {p.save && (
                <span className={`inline-block text-[9px] font-extrabold px-2.5 py-0.5 rounded-full tracking-[1px] uppercase mt-1 ${p.featured ? 'bg-[#D4820A] text-[#1A0A05]' : 'bg-[#D4820A] text-white'}`}>
                  {p.save}
                </span>
              )}
              {p.sub && (
                <p className={`text-[10px] mt-0.5 ${p.featured ? 'text-[#FDF6EC]/60' : 'text-ink-light'}`}>{p.sub}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <a
        href="#"
        className="block text-center mt-8 bg-gradient-to-r from-[#D4820A] to-[#F0A830] text-[#1E0D08] rounded-full py-[16px] font-extrabold text-[15px] no-underline font-nunito tracking-wide transition-all active:scale-[0.97] shadow-[0_8px_24px_rgba(212,130,10,0.3)] relative z-10"
      >
        Start with a Trial Meal →
      </a>

      {/* Bottom transition to Promise (which is dark crimson) */}
      <div className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #8B1A1A 100%)' }} />
    </section>
  )
}
