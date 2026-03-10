import Link from "next/link";

function PlanCard({
  title,
  subtitle,
  bullets,
}: {
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/50 p-7 hover:bg-slate-900/70 transition-colors">
      <h2 className="text-xl font-semibold text-slate-50">
        {title}
      </h2>

      <p className="mt-2 text-slate-300 leading-relaxed">
        {subtitle}
      </p>

      <ul className="mt-4 list-disc pl-5 text-slate-300 space-y-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

export default function PlansPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 flex flex-col gap-12">
      
      {/* Header Section */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          Planes
        </h1>

        <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed">
          Elegí el plan que mejor se adapta a tu objetivo. Marcelo personaliza el
          enfoque según tu nivel, disponibilidad y preferencias.
        </p>

        <div className="mt-6">
          <Link
            href="/contact"
            className="no-underline inline-flex items-center justify-center rounded-2xl bg-teal-600 hover:bg-teal-700 transition-colors text-white px-5 py-3 text-base font-medium"
          >
            Consultar por planes
          </Link>
        </div>
      </div>

      {/* Plan Cards */}
      <div className="grid gap-6 md:grid-cols-3">
        <PlanCard
          title="Plan de entrenamiento"
          subtitle="Rutina clara y progresiva para gimnasio o casa."
          bullets={[
            "Estructura semanal según tu tiempo",
            "Progresión de cargas / volumen",
            "Notas técnicas y recomendaciones",
          ]}
        />

        <PlanCard
          title="Guía de alimentación"
          subtitle="Estrategia simple y adaptable para sostener en el tiempo."
          bullets={[
            "Objetivo: recomposición, volumen o definición",
            "Opciones flexibles y hábitos",
            "Ajustes según evolución",
          ]}
        />

        <PlanCard
          title="Coaching"
          subtitle="Acompañamiento y seguimiento para mantener consistencia."
          bullets={[
            "Revisiones periódicas",
            "Soporte y correcciones",
            "Ajustes del plan según progreso",
          ]}
        />
      </div>

      {/* Ideal For Section */}
      <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8">
        <h2 className="text-2xl font-semibold text-slate-50">
          Ideal para
        </h2>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 text-slate-300">
          {[
            "Personas que quieren volver a entrenar con estructura",
            "Objetivos de fuerza / hipertrofia / pérdida de grasa",
            "Quienes buscan hábitos sostenibles",
            "Entrenamiento en casa o gimnasio",
          ].map((t) => (
            <div
              key={t}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-4"
            >
              {t}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}