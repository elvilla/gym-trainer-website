"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [errorMsg, setErrorMsg] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      goal: String(formData.get("goal") || ""),
      message: String(formData.get("message") || ""),
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (res.ok) {
      setStatus("success");
      form.reset();
      return;
    }

    const data = await res.json().catch(() => null);
    setStatus("error");
    setErrorMsg(data?.error || "No se pudo enviar el mensaje.");
  }

  const inputClass =
    "mt-1 w-full rounded-2xl border border-white/10 bg-slate-950/50 px-3 py-2 text-slate-100 placeholder:text-slate-500 outline-none focus:ring-2 focus:ring-teal-500/30 focus:border-teal-500/30";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-white/10 bg-slate-900/40 p-7 sm:p-8 flex flex-col gap-4 max-w-xl"
    >
      <div>
        <label className="text-sm font-medium text-slate-200">Nombre</label>
        <input
          name="name"
          required
          className={inputClass}
          placeholder="Tu nombre"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-200">Email</label>
        <input
          name="email"
          type="email"
          required
          className={inputClass}
          placeholder="tu@email.com"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-200">Objetivo</label>
        <input
          name="goal"
          className={inputClass}
          placeholder="Ej: bajar grasa, ganar músculo, rendimiento..."
        />
      </div>

      <div>
        <label className="text-sm font-medium text-slate-200">Mensaje</label>
        <textarea
          name="message"
          required
          rows={5}
          className={inputClass + " resize-y"}
          placeholder="Contame tu situación, horarios, experiencia, lesiones, etc."
        />
        <p className="mt-2 text-xs text-slate-500">
          *Por ahora guarda el mensaje localmente (modo desarrollo).
        </p>
      </div>

      <button
        disabled={status === "loading"}
        className="rounded-2xl bg-teal-600 hover:bg-teal-700 transition-colors text-white px-5 py-3 text-base font-medium disabled:opacity-60"
      >
        {status === "loading" ? "Enviando..." : "Enviar"}
      </button>

      {status === "success" && (
        <p className="text-sm text-emerald-300">Listo — mensaje guardado.</p>
      )}

      {status === "error" && (
        <p className="text-sm text-red-300">{errorMsg}</p>
      )}
    </form>
  );
}