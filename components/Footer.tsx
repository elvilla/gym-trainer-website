export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-950">
      
      {/* Soft gradient separator instead of hard border */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="mx-auto max-w-6xl px-4 py-12 text-sm flex flex-col gap-6">
        
        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-slate-400">
          <div className="text-slate-300">
            © {new Date().getFullYear()} Marcelo Sportclub
          </div>
          <div>Buenos Aires, Argentina</div>
        </div>

        {/* Social row */}
        <div className="flex gap-6 text-slate-400">
          <span className="hover:text-white transition-colors cursor-pointer">
            Instagram
          </span>
          <span className="hover:text-white transition-colors cursor-pointer">
            WhatsApp
          </span>
        </div>

      </div>
    </footer>
  );
}