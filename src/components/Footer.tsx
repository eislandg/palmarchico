import Link from "next/link";
import Image from "next/image";

const Instagram = ({ className }: { className?: string }) => (<svg className={className || "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>);
const Twitter = ({ className }: { className?: string }) => (<svg className={className || "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>);
const Facebook = ({ className }: { className?: string }) => (<svg className={className || "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>);
const Youtube = ({ className }: { className?: string }) => (<svg className={className || "w-5 h-5"} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>);

export default function Footer() {
  return (
    <footer className="bg-charcoal pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center mb-6 group inline-flex relative w-48 h-16">
              <Image src="/images/logo.png" alt="Promociones Palmar Chico Logo" fill className="object-contain object-left" />
            </Link>
            <p className="text-zinc-400 font-light max-w-sm mb-8 leading-relaxed">
              The premier destination for immersive nightlife, featuring world-class talent, state-of-the-art production, and unparalleled VIP experiences.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-green hover:text-white transition-all transform hover:scale-110">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-accent-red hover:text-white transition-all transform hover:scale-110">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-white transition-all transform hover:scale-110">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-red-500 hover:text-white transition-all transform hover:scale-110">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Explore</h4>
            <ul className="space-y-4">
              <li><Link href="#events" className="text-zinc-400 font-light hover:text-accent-red transition-colors">Upcoming Events</Link></li>
              <li><Link href="#vip" className="text-zinc-400 font-light hover:text-accent-red transition-colors">VIP Table Service</Link></li>
              <li><Link href="#venue" className="text-zinc-400 font-light hover:text-accent-red transition-colors">Venue & Gallery</Link></li>
              <li><Link href="#guestlist" className="text-zinc-400 font-light hover:text-accent-red transition-colors">Join Guestlist</Link></li>
              <li><Link href="#" className="text-zinc-400 font-light hover:text-accent-red transition-colors">Private Events</Link></li>
              <li><Link href="#" className="text-zinc-400 font-light hover:text-accent-red transition-colors">Photo Gallery</Link></li>
              <li><Link href="#" className="text-zinc-400 font-light hover:text-accent-red transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest mb-6 text-sm">Contact Us</h4>
            <ul className="space-y-4 text-zinc-400 font-light mb-6">
              <li>123 Nightlife Blvd</li>
              <li>Metropolis, NY 10001</li>
              <li className="pt-2"><a href="tel:5551234567" className="hover:text-white transition-colors">(555) 123-4567</a></li>
              <li><a href="mailto:info@palmarchico.com" className="hover:text-white transition-colors">info@palmarchico.com</a></li>
            </ul>
            <h4 className="text-white font-bold uppercase tracking-widest mb-4 text-sm mt-8">Hours</h4>
            <ul className="space-y-2 text-zinc-400 font-light">
              <li className="flex justify-between"><span>Friday:</span> <span>10PM - 4AM</span></li>
              <li className="flex justify-between"><span>Saturday:</span> <span>10PM - 4AM</span></li>
              <li className="flex justify-between"><span>Sunday:</span> <span>10PM - 3AM</span></li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm font-light">
            &copy; {new Date().getFullYear()} NEXUS Nightclub. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">21+ To Enter</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Dress Code</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-zinc-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
