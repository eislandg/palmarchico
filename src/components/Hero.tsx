import Link from 'next/link';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero_event_live.jpg"
          alt="Nexus Nightclub Interior"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-background z-10" />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 max-w-5xl mx-auto mt-20">
        <div className="px-4 py-1 border border-accent-green/50 bg-accent-green/10 rounded-full mb-6 backdrop-blur-sm">
          <p className="text-accent-green text-xs md:text-sm font-bold tracking-widest uppercase">Los Mejores Eventos de Música Regional Mexicana</p>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tighter mb-6 uppercase text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60">
          Promociones <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-accent-red">Palmar Chico</span>
        </h1>
        
        <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mb-10 leading-relaxed font-light">
          Vive noches inolvidables con música regional mexicana en vivo, pistas de baile llenas de energía y presentaciones especiales. Compra tus boletos y acompáñanos en el próximo gran evento.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Link href="#events" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-zinc-200 transition-colors text-center w-full sm:w-auto">
            View This Weekend
          </Link>
          <Link href="#vip" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white/10 transition-colors text-center backdrop-blur-sm w-full sm:w-auto">
            Reserve VIP Table
          </Link>
        </div>
      </div>

      {/* Scroll indicator overlay */}
      <div className="hidden md:flex flex-col items-center absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce gap-2">
        <div className="w-[30px] h-[50px] border-2 border-white/30 rounded-full flex justify-center p-2">
          <div className="w-[4px] h-[8px] bg-white rounded-full opacity-60"></div>
        </div>
        <span className="text-[10px] tracking-[0.3em] font-bold text-white/60">SCROLL</span>
      </div>
    </section>
  );
}
