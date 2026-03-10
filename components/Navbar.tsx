import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/70 backdrop-blur shadow-sm shadow-black/20">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="no-underline font-semibold tracking-tight text-lg text-slate-100 hover:text-white transition-colors"
        >
          <span className="text-teal-300">Marcelo</span>{" "}
          <span className="text-slate-400">Personal Trainer</span>
        </Link>

        <nav className="flex items-center gap-2">
          {/* Desktop links */}
          <div className="hidden sm:flex items-center gap-1 sm:gap-4">
            <Link
              href="/plans"
              className="no-underline px-2 py-1 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              Planes
            </Link>

            <Link
              href="/about"
              className="no-underline px-2 py-1 rounded-lg text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              Acerca de mí
            </Link>
          </div>

          {/* CTA always visible */}
          <Link
            href="/contact"
            className="no-underline rounded-xl bg-teal-600 hover:bg-teal-700 transition-colors text-white px-4 py-2 text-base"
          >
            Contacto
          </Link>
        </nav>
      </div>

      {/* Soft gradient separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
}