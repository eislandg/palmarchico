import Image from 'next/image';
import Link from 'next/link';

type Artist = { name: string; };
type VenueInfo = { city?: string; state?: string; name?: string; };
type EventItem = {
  uuid: string;
  slug: string;
  hash: string;
  title: string;
  poster_url?: string;
  start_date: string;
  artists?: Artist[];
  venue_info?: VenueInfo;
  venueInfo?: VenueInfo;
};

export default async function EventsGrid() {
  let events: EventItem[] = [];

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/events?user_id=${process.env.NEXT_PUBLIC_PALMAR_CHICO_USER_ID}&filter[publish_status]=published&include=venueInfo,artists&sort=start_date`,
      { cache: "no-store" }
    );
    if (response.ok) {
      const data = await response.json();
      events = Array.isArray(data?.data) ? data.data : [];
    }
  } catch (err) {
    console.error("Failed to fetch upcoming weekend events:", err);
  }

  // Filter for upcoming weekend events (Friday, Saturday, Sunday)
  const weekendEvents = events.filter(event => {
    if (!event.start_date) return false;
    const date = new Date(`${event.start_date}T12:00:00Z`);
    const day = date.getUTCDay();
    return day === 5 || day === 6 || day === 0; // 5=Fri, 6=Sat, 0=Sun
  }).slice(0, 3);

  const formatDate = (dateString: string) => {
    const date = new Date(`${dateString}T12:00:00Z`);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }).toUpperCase();
  };

  const getTagFromDay = (dateString: string) => {
    const date = new Date(`${dateString}T12:00:00Z`);
    const day = date.getUTCDay();
    if (day === 5) return { label: "Friday", color: "bg-accent-green text-white" };
    if (day === 6) return { label: "Saturday", color: "bg-accent-red text-white" };
    return { label: "Sunday", color: "bg-white text-black" };
  };

  return (
    <section id="events" className="py-24 bg-background px-6 md:px-12 relative z-10">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-12 sm:mb-16 gap-6 sm:gap-0">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-center sm:text-left">
            Este Fin de <span className="text-accent-red">Semana</span>
          </h2>
          <div className="relative w-40 h-14 md:w-48 md:h-16 shrink-0">
            <Image src="/images/logo.png" alt="Promociones Palmar Chico Logo" fill className="object-contain object-center sm:object-right" />
          </div>
        </div>

        {weekendEvents.length === 0 ? (
          <div className="text-zinc-400 text-lg text-center py-12">No upcoming weekend events found.</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {weekendEvents.map((event) => {
              const tagData = getTagFromDay(event.start_date);
              const eventUrl = `https://palmarchico.eventmania.com/events/${event.slug}/${event.hash}`;

              return (
                <div key={event.uuid} className="group relative bg-charcoal rounded-2xl overflow-hidden border border-white/5 hover:border-accent-green/30 transition-all duration-500">
                  <Link href={eventUrl} target="_blank" className="relative aspect-square w-full overflow-hidden flex items-center justify-center block">
                    <Image
                      src={event.poster_url || "/images/hero_club.png"}
                      alt={event.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      unoptimized
                    />
                  </Link>

                  <div className="absolute top-4 right-4 z-20">
                    <span className={`${tagData.color} px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full shadow-lg`}>
                      {tagData.label}
                    </span>
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="text-accent-green font-mono text-sm tracking-widest mb-2">
                      {formatDate(event.start_date)}
                    </div>
                    <Link href={eventUrl} target="_blank" className="hover:text-accent-red transition-colors block">
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-6 line-clamp-2" title={event.title}>
                        {event.title}
                      </h3>
                    </Link>

                    <div className="flex justify-between items-center border-t border-white/10 pt-4 mt-auto">
                      <span className="text-zinc-400 font-medium text-sm">Tickets Available</span>
                      <Link href={eventUrl} target="_blank" className="text-accent-red font-bold uppercase tracking-wide hover:text-white transition-colors text-sm group/btn flex items-center gap-2">
                        Buy Tickets
                        <span className="transform group-hover/btn:translate-x-1 transition-transform">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-16 text-center">
          <Link href="#events-list" className="border border-white/20 text-white px-8 py-4 rounded-full font-bold uppercase tracking-wide hover:bg-white/10 transition-colors inline-block w-full sm:w-auto">
            Ver Calendario Completo
          </Link>
        </div>
      </div>
    </section>
  );
}
