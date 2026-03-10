import Link from "next/link";

function Highlight({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 hover:bg-slate-900/70 transition-all duration-200 md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-black/30">
      <div className="text-lg font-semibold text-slate-50">{title}</div>
      <div className="mt-2 text-slate-300 leading-relaxed">{desc}</div>
    </div>
  );
}

function StepCard({
  n,
  title,
  desc,
}: {
  n: number;
  title: string;
  desc: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 hover:bg-slate-900/75 transition-all duration-200 md:hover:-translate-y-1 md:hover:shadow-lg md:hover:shadow-black/30">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500/20 text-teal-300 text-sm font-semibold">
          {n}
        </span>
        <span className="font-semibold text-slate-100">{title}</span>
      </div>

      <p className="mt-3 text-slate-300 leading-relaxed">{desc}</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* =========================
          FULL-WIDTH CINEMATIC HERO
         ========================= */}
      <section className="relative w-full overflow-hidden bg-neutral-950 text-white">
        {/* Video */}
        <div className="relative min-h-[60vh] sm:min-h-0 sm:aspect-[21/9]">
          <video
            src="/excercise.mp4"
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Cinematic overlays */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/75" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/45 via-transparent to-black/45" />

          {/* Vignette */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.10),rgba(0,0,0,0.70))]" />

          {/* Bottom fade into page */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-b from-transparent via-slate-950/70 to-slate-950" />
        </div>

        {/* Content overlay */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full">
            <div className="mx-auto max-w-6xl px-4 pt-24 sm:pt-0 pb-10 sm:pb-14">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/5 px-2 py-[2px] text-[10px] text-white/70 backdrop-blur sm:gap-2 sm:px-3 sm:py-1 sm:text-xs">
                  <span className="text-teal-300 font-semibold">
                    Fuerza • Rendimiento • Técnica
                  </span>
                  <span className="text-white/30">•</span>
                  <span>Buenos Aires</span>
                </div>

                <h1 className="mt-4 text-3xl sm:text-5xl font-semibold leading-tight tracking-tight">
                  Entrenamiento personal y online para resultados reales.
                </h1>

                <p className="mt-4 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed">
                  Planes personalizados para mejorar fuerza, composición corporal y
                  rendimiento. Incluye seguimiento y enfoque técnico — en gimnasio o
                  natación.
                </p>

                <div className="mt-8 flex sm:inline-flex flex-col sm:flex-row gap-3 sm:gap-4 rounded-3xl border border-white/10 bg-black/15 sm:bg-black/25 backdrop-blur px-3 py-3 sm:px-4 sm:py-4">
                  <Link
                    href="/plans"
                    className="no-underline w-full sm:w-auto inline-flex items-center justify-center rounded-2xl bg-teal-500 hover:bg-teal-400 transition-colors px-6 py-3 text-base font-medium text-white shadow-[0_12px_30px_-12px_rgba(20,184,166,0.7)]"
                  >
                    Ver planes
                  </Link>

                  <Link
                    href="/contact"
                    className="no-underline w-full sm:w-auto inline-flex items-center justify-center rounded-2xl border border-white/30 bg-white/10 hover:bg-white/15 transition-colors px-6 py-3 text-base font-medium text-white"
                  >
                    Pedir información
                  </Link>
                </div>

                <div className="mt-4 text-xs text-white/50">
                  *Sitio en construcción.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          REST OF PAGE (CONSTRAINED)
         ========================= */}
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 flex flex-col gap-16">
        {/* SERVICES */}
        <section className="grid gap-6 md:grid-cols-3">
          <Highlight
            title="Entrenamiento de fuerza"
            desc="Programación estructurada para mejorar rendimiento y composición corporal."
          />
          <Highlight
            title="Natación técnica"
            desc="Mejora de técnica, resistencia y eficiencia en el agua."
          />
          <Highlight
            title="Coaching personalizado"
            desc="Seguimiento continuo y ajustes según tu progreso."
          />
        </section>

        {/* HOW IT WORKS */}
        <section className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-semibold text-slate-50">
            ¿Cómo funciona?
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-3">
            <StepCard
              n={1}
              title="Evaluación"
              desc="Analizamos tu nivel, objetivos y disponibilidad."
            />
            <StepCard
              n={2}
              title="Plan personalizado"
              desc="Se diseña un programa adaptado a tu perfil y disciplina."
            />
            <StepCard
              n={3}
              title="Seguimiento"
              desc="Ajustes periódicos para asegurar progreso constante."
            />
          </div>
        </section>
      </div>
    </div>
  );
}