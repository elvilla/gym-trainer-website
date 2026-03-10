import ContactForm from "../../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16 flex flex-col gap-10">
      <div className="rounded-3xl border border-white/10 bg-slate-900/40 p-8 sm:p-10">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-50">
          Contacto
        </h1>

        <p className="mt-3 text-slate-300 max-w-2xl leading-relaxed">
          Contanos tu objetivo y tu disponibilidad. Marcelo te responde a la brevedad.
        </p>
      </div>

      <ContactForm />
    </div>
  );
}