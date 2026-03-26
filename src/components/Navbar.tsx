"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-black/90 backdrop-blur-md py-4 border-b border-charcoal" : "bg-transparent py-6"
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
        <Link href="/" className="flex items-center group relative w-32 h-12">
          <Image src="/images/logo.png" alt="Promociones Palmar Chico" fill className="object-contain" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#events-list" className="text-sm font-semibold tracking-wide hover:text-accent-red transition-colors">Eventos</Link>
          {/* <Link href="#venue" className="text-sm font-semibold tracking-wide hover:text-accent-red transition-colors">Venue</Link> */}
          <Link href="#events" className="text-sm font-semibold tracking-wide hover:text-accent-red transition-colors">Este Fin de Semana
          </Link>
          <Link href="#guestlist" className="text-sm font-semibold tracking-wide hover:text-accent-red transition-colors">Lista de Invitados
          </Link>
        </div>

        <div className="hidden md:block">
          <Link href="#events" className="bg-gradient-to-r from-accent-green to-accent-red text-white px-6 py-3 rounded-full font-bold text-sm tracking-wide hover:shadow-[0_0_20px_rgba(255,51,102,0.4)] transition-all duration-300 transform hover:-translate-y-1 inline-block">
            Buy Tickets
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-charcoal border-b border-white/10 p-6 flex flex-col gap-4 shadow-xl">
          <Link href="#events-list" className="text-lg font-semibold hover:text-accent-red" onClick={() => setMobileMenuOpen(false)}>Events</Link>
          {/* <Link href="#venue" className="text-lg font-semibold hover:text-accent-red" onClick={() => setMobileMenuOpen(false)}>Venue</Link> */}
          <Link href="#events" className="text-lg font-semibold hover:text-accent-red" onClick={() => setMobileMenuOpen(false)}>This Weekend</Link>
          <Link href="#guestlist" className="text-lg font-semibold hover:text-accent-red" onClick={() => setMobileMenuOpen(false)}>Guestlist</Link>
          <Link href="#events" className="bg-gradient-to-r from-accent-green to-accent-red text-center text-white px-6 py-3 rounded-full font-bold mt-4" onClick={() => setMobileMenuOpen(false)}>
            Buy Tickets
          </Link>
        </div>
      )}
    </nav>
  );
}
