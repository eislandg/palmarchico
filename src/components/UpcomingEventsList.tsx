"use client";

import { useEffect, useMemo, useState } from "react";
import { Search, ChevronDown, Calendar, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Artist = {
  name: string;
};

type VenueInfo = {
  city?: string;
  state?: string;
  name?: string;
};

type EventItem = {
  uuid: string;
  slug: string;
  hash: string;
  title: string;
  poster_url?: string;
  banner_url?: string;
  start_date: string;
  artists?: Artist[];
  venue_info?: VenueInfo;
  venueInfo?: VenueInfo;
};

export default function UpcomingEventsList() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/events?user_id=${process.env.NEXT_PUBLIC_PALMAR_CHICO_USER_ID}&filter[publish_status]=published&include=venueInfo,artists&sort=start_date`,
          { cache: "no-store" }
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch events: ${response.status}`);
        }

        const data = await response.json();
        const fetchedEvents = Array.isArray(data?.data) ? data.data : [];

        console.log("Fetched Events:", fetchedEvents);
        setEvents(fetchedEvents);
      } catch (err) {
        console.error(err);
        setError("Unable to load upcoming events right now.");
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const filteredEvents = useMemo(() => {
    const term = searchTerm.toLowerCase().trim();

    if (!term) return events;

    return events.filter((event) => {
      const venue = event.venue_info || event.venueInfo || {};
      const artistNames = event.artists?.map((artist) => artist.name).join(" ") || "";

      return (
        event.title?.toLowerCase().includes(term) ||
        venue.name?.toLowerCase().includes(term) ||
        venue.city?.toLowerCase().includes(term) ||
        venue.state?.toLowerCase().includes(term) ||
        artistNames.toLowerCase().includes(term)
      );
    });
  }, [events, searchTerm]);

  const formatDate = (dateString: string) => {
    const date = new Date(`${dateString}T00:00:00`);

    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section className="py-24 bg-charcoal px-6 md:px-12 border-t border-white/5">
      <div className="container mx-auto">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-grow">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
            <input
              type="text"
              placeholder="Search for events, artists..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-background border border-white/10 rounded-full py-4 pl-12 pr-6 text-white placeholder:text-zinc-500 focus:outline-none focus:border-accent-green transition-colors"
            />
          </div>

          <div className="flex gap-4 overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
            <button className="flex items-center gap-2 whitespace-nowrap bg-background border border-white/10 rounded-full px-6 py-4 text-zinc-300 hover:border-accent-red transition-colors">
              All Types <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 whitespace-nowrap bg-background border border-white/10 rounded-full px-6 py-4 text-zinc-300 hover:border-accent-red transition-colors">
              All Series <ChevronDown className="w-4 h-4" />
            </button>
            <button className="flex items-center gap-2 whitespace-nowrap bg-background border border-white/10 rounded-full px-6 py-4 text-zinc-300 hover:border-accent-red transition-colors">
              All Venues <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* States */}
        {loading && (
          <div className="text-zinc-400 text-lg">Loading upcoming events...</div>
        )}

        {error && !loading && (
          <div className="text-red-400 text-lg">{error}</div>
        )}

        {!loading && !error && filteredEvents.length === 0 && (
          <div className="text-zinc-400 text-lg">No upcoming events found.</div>
        )}

        {/* Event List */}
        {!loading && !error && filteredEvents.length > 0 && (
          <div className="flex flex-col">
            {filteredEvents.map((event) => {
              const venue = event.venue_info || event.venueInfo || {};
              const eventUrl = `https://palmarchico.eventmania.com/events/${event.slug}/${event.hash}`;
              const tags =
                event.artists?.length
                  ? event.artists.slice(0, 2).map((artist) => artist.name.toUpperCase())
                  : ["LIVE EVENT"];

              return (
                <Link
                  key={event.uuid}
                  href={eventUrl}
                  target="_blank"
                  className="group flex flex-col md:flex-row justify-between items-start md:items-center py-6 md:py-8 border-b border-white/10 hover:bg-white/5 transition-colors px-4 -mx-4 rounded-xl"
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8 mb-4 md:mb-0">
                    <div className="relative w-16 h-16 md:w-24 md:h-24 rounded-lg overflow-hidden shrink-0 hidden sm:block bg-white/5">
                      <Image
                        src={event.poster_url || "/images/hero_club.png"}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        unoptimized
                      />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 text-accent-green font-mono text-sm tracking-widest mb-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(event.start_date)}
                      </div>

                      <h3 className="text-xl md:text-2xl font-bold uppercase tracking-tight group-hover:text-accent-red transition-colors">
                        {event.title}
                      </h3>

                      <div className="flex items-center gap-4 mt-2 flex-wrap">
                        <div className="flex items-center gap-1 text-zinc-400 text-sm">
                          <MapPin className="w-4 h-4" />
                          {venue.name || [venue.city, venue.state].filter(Boolean).join(", ") || "Venue TBA"}
                        </div>

                        <div className="flex gap-2 flex-wrap">
                          {tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] uppercase font-bold tracking-wider px-2 py-1 bg-white/10 text-zinc-300 rounded-sm"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border border-white/20 text-white px-6 py-3 rounded-full font-bold uppercase tracking-wide group-hover:bg-accent-green group-hover:border-accent-green group-hover:text-white transition-all w-full md:w-auto text-sm text-center">
                    Get Tickets
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}