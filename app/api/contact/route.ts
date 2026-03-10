import { NextResponse } from "next/server";
import fs from "node:fs/promises";
import path from "node:path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name || "").trim();
    const email = String(body?.email || "").trim();
    const goal = String(body?.goal || "").trim();
    const message = String(body?.message || "").trim();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Faltan campos requeridos." }, { status: 400 });
    }

    const payload = {
      ts: new Date().toISOString(),
      name,
      email,
      goal,
      message,
    };

    console.log("=== New Contact Message ===");
    console.log(payload);
    console.log("===========================");

    const dir = path.join(process.cwd(), "tmp");
    const file = path.join(dir, "messages.jsonl");

    await fs.mkdir(dir, { recursive: true });
    await fs.appendFile(file, JSON.stringify(payload) + "\n", "utf8");

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Error procesando el mensaje." }, { status: 500 });
  }
}