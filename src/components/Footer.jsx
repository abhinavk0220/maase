export default function Footer() {
  const areas = ['Marathalli', 'Kammanahalli', 'Hoodi', 'Banaswadi', 'Kasturinagar']
  return (
    <footer className="relative bg-ink text-cream/60 text-center px-5 pt-4 pb-32 overflow-hidden">
      
      {/* Background ambient orbs */}
      <div className="absolute top-[0%] left-[-20%] w-[50vw] h-[50vw] bg-[#8B1A1A]/10 rounded-full blur-[70px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#D4820A]/10 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative z-10">
        <img src="/logo.jpeg" alt="Maa Se" className="w-28 h-auto mx-auto mb-3 object-contain opacity-90 rounded-[4px]" />
        <p className="font-playfair italic text-amber-light text-[13px] mb-4">Har Din Ghar Jaisa</p>
        <p className="text-[12px] leading-[2] mb-4">
          {areas.join(' · ')}
        </p>
        <p className="text-[12px] mb-8 font-medium">📱 Contact us on WhatsApp</p>
        <div className="border-t border-cream/10 pt-6">
          <p className="font-playfair italic text-[12px] text-cream/40">
            Maa ke haath ka khana, delivered right to you everyday.
          </p>
          <p className="text-[10px] text-cream/30 mt-3 tracking-wide">© 2025 Maa Se. Made with ❤️ in Bangalore.</p>
        </div>
      </div>
    </footer>
  )
}
