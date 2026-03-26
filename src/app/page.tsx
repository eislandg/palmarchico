import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventsGrid from "@/components/EventsGrid";
import UpcomingEventsList from "@/components/UpcomingEventsList";
// import VenueOverview from "@/components/VenueOverview";
import VIPService from "@/components/VIPService";
import GuestlistForm from "@/components/GuestlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <EventsGrid />
      <UpcomingEventsList />
      {/* <VenueOverview /> */}
      {/* <VIPService /> */}
      <GuestlistForm />
      <Footer />
    </main>
  );
}
