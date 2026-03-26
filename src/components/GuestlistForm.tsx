import { Mail, User, Phone } from 'lucide-react';

export default function GuestlistForm() {
  return (
    <section id="guestlist" className="py-24 bg-charcoal/30 px-6 md:px-12 border-t border-b border-white/5">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto bg-charcoal rounded-3xl overflow-hidden shadow-2xl border border-white/5 flex flex-col md:flex-row">

          <div className="md:w-5/12 bg-gradient-to-br from-accent-green/20 to-black p-10 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/images/hero_club.png')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
            <div className="relative z-10 w-full h-full text-center flex flex-col items-center justify-center">
              <h3 className="text-3xl font-bold uppercase tracking-tight mb-4">Regístrate en la <span className="text-white">lista de eventos</span></h3>
              <p className="text-zinc-300 font-light mb-8">Recibe acceso prioritario a boletos, anuncios exclusivos de eventos y beneficios.</p>
              <div className="w-16 h-1 bg-white rounded-full"></div>
            </div>
          </div>

          <div className="md:w-7/12 p-10 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">Nombre</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-zinc-500" />
                    </div>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all" placeholder="John" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">Apellido</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-zinc-500" />
                    </div>
                    <input type="text" className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all" placeholder="Doe" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">Correo Electrónico</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input type="email" className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all" placeholder="[EMAIL_ADDRESS]" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-400 mb-2 uppercase tracking-wide">Número de Teléfono</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <Phone className="h-5 w-5 text-zinc-500" />
                  </div>
                  <input type="tel" className="w-full bg-black/50 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-zinc-600 focus:outline-none focus:border-accent-green focus:ring-1 focus:ring-accent-green transition-all" placeholder="(555) 123-4567" />
                </div>
              </div>

              <button type="button" className="w-full bg-white text-black font-bold uppercase tracking-wide py-4 rounded-xl hover:bg-zinc-200 transition-colors mt-4">
                Registrarse
              </button>

              <div className="relative flex items-center py-2">
                <div className="flex-grow border-t border-white/10"></div>
                <span className="flex-shrink-0 mx-4 text-zinc-500 text-sm">OR</span>
                <div className="flex-grow border-t border-white/10"></div>
              </div>

              <button type="button" className="w-full bg-transparent border border-white/20 text-white font-bold uppercase tracking-wide py-4 rounded-xl hover:bg-white/5 transition-colors flex items-center justify-center gap-3">
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Registrarse con Google
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
