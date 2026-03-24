import Image from 'next/image';

export default function VenueOverview() {
  return (
    <section id="venue" className="py-24 bg-charcoal/50 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Overview */}
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 tracking-tight">
              The <span className="text-white">Venue</span>
            </h2>
            <p className="text-lg text-zinc-300 mb-10 leading-relaxed font-light">
              NEXUS spans an unprecedented layout designed for audio-visual perfection. With multiple rooms catering to different sounds and atmospheres, the club provides an immersive escapade from reality.
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-8 mb-10">
              <div className="border-l-2 border-accent-green pl-4">
                <div className="text-3xl font-black text-white mb-1">15K</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">SQ FT Space</div>
              </div>
              <div className="border-l-2 border-accent-red pl-4">
                <div className="text-3xl font-black text-white mb-1">3</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">Unique Rooms</div>
              </div>
              <div className="border-l-2 border-white pl-4">
                <div className="text-3xl font-black text-white mb-1">F1</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">Sound System</div>
              </div>
              <div className="border-l-2 border-white pl-4">
                <div className="text-3xl font-black text-white mb-1">45</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest">VIP Tables</div>
              </div>
            </div>
            
            <button className="text-white border-b-2 border-accent-green pb-1 font-bold uppercase tracking-widest hover:text-accent-green transition-colors flex items-center gap-2">
              View Venue Gallery <span className="text-accent-red">→</span>
            </button>
          </div>

          {/* Right Image Gallery */}
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4 h-[500px]">
            <div className="relative rounded-2xl overflow-hidden h-full">
              <Image 
                src="/images/hero_club.png" 
                alt="Main Room"
                 fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
              <div className="relative rounded-2xl overflow-hidden h-full">
                <Image 
                  src="/images/vip_lounge.png" 
                  alt="VIP Area"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden h-full">
                <Image 
                  src="/images/dj_event.png" 
                  alt="DJ Booth"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
