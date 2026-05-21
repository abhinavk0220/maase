export default function Promise() {
  return (
    <section
      className="relative px-8 py-20 text-center overflow-hidden"
      style={{ background: '#8B1A1A' }}
    >
      {/* Background glowing effects for Promise section */}
      <div className="absolute top-[20%] left-[-10%] w-[60vw] h-[60vw] bg-[#D4820A]/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute top-[60%] right-[-10%] w-[50vw] h-[50vw] bg-[#FDF6EC]/10 rounded-full blur-[60px] pointer-events-none" />

      {/* decorative circles */}
      <div className="absolute -top-14 -right-14 w-48 h-48 rounded-full opacity-[0.04]"
        style={{ background: '#FDF6EC' }} />
      <div className="absolute -bottom-10 -left-10 w-36 h-36 rounded-full opacity-[0.07]"
        style={{ background: '#D4820A' }} />

      <div className="relative z-10">
        <p className="text-cream/30 text-lg tracking-[10px] mb-5">✦ ✦ ✦</p>

        <p
          className="font-playfair italic text-cream leading-[1.65] max-w-[310px] mx-auto mb-3"
          style={{ fontSize: 'clamp(1.15rem,5vw,1.6rem)' }}
        >
          "Maa ke haath ka khana, delivered right to you — every single day."
        </p>

        <p className="text-[13px] text-cream/60 mb-7">
          Real families. Real recipes. Real love.
        </p>

        <a
          href="#subscribe"
          className="inline-block bg-[#FDF6EC]/10 backdrop-blur-md border border-[#FDF6EC]/30 text-white rounded-full px-8 py-[15px] font-bold text-[15px] no-underline font-nunito shadow-[0_8px_32px_rgba(0,0,0,0.2)] transition-transform active:scale-95"
        >
          Choose Your Plan
        </a>

        <p className="text-cream/30 text-lg tracking-[10px] mt-9">✦ ✦ ✦</p>
      </div>

      {/* Transition into FAQ (which is parch) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent 0%, #F5E8D0 100%)' }} />
    </section>
  )
}
