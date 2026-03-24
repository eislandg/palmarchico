import { Check } from 'lucide-react';

const tiers = [
  {
    name: 'Mezzanine Level',
    price: '$1,500 Min',
    features: ['Up to 8 Guests', 'Standard Bottle Selection', 'Dedicated Server', 'Expedited Entry'],
    recommended: false,
    color: 'border-white/10'
  },
  {
    name: 'Dancefloor VIP',
    price: '$3,000 Min',
    features: ['Up to 12 Guests', 'Premium Bottle Selection', 'Dedicated Server & Security', 'Immediate VIP Entry', 'Prime Stage View'],
    recommended: true,
    color: 'border-accent-red shadow-[0_0_30px_rgba(255,51,102,0.15)]'
  },
  {
    name: "Owner's Box",
    price: '$5,000 Min',
    features: ['Up to 20 Guests', 'Ultra-Premium Selection', 'Personal Host & Security', 'Private Backstage Access', 'Best View in Venue'],
    recommended: false,
    color: 'border-accent-green/50'
  }
];

export default function VIPService() {
  return (
    <section id="vip" className="py-24 bg-background px-6 md:px-12 relative z-10">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6 tracking-tight">
            VIP <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-accent-red">Table Service</span>
          </h2>
          <p className="text-lg text-zinc-400 font-light">
            Elevate your evening with our exclusive table service. Enjoy dedicated hospitality, prime views, and an unforgettable nightclub experience.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-start">
          {tiers.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative bg-charcoal rounded-2xl p-8 border ${tier.color} flex flex-col h-full transform transition-transform hover:-translate-y-2`}
            >
              {tier.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-accent-green to-accent-red text-white px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-full shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">{tier.name}</h3>
                <div className="text-3xl font-black text-white">{tier.price}</div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-accent-red shrink-0 mt-0.5" />
                    <span className="text-zinc-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-wide transition-all ${
                tier.recommended 
                  ? 'bg-accent-red text-white hover:bg-accent-red/90 shadow-lg shadow-accent-red/20' 
                  : 'bg-white/5 text-white hover:bg-white/10'
              }`}>
                Book Table
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
