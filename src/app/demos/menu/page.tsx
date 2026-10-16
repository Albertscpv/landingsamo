"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Minus, Plus, MessageCircle, MapPin, Phone } from "lucide-react";
import { businessInfo, formatColones, menu } from "@/app/data/menu";

export default function MenuDemoPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");

  const items = useMemo(() => menu.flatMap((c) => c.items), []);
  const lines = items.filter((i) => cart[i.id]);
  const total = lines.reduce((sum, i) => sum + i.price * cart[i.id], 0);
  const count = lines.reduce((sum, i) => sum + cart[i.id], 0);

  const change = (id: string, delta: number) =>
    setCart((c) => {
      const next = Math.max(0, (c[id] ?? 0) + delta);
      const { [id]: _removed, ...rest } = c;
      return next === 0 ? rest : { ...rest, [id]: next };
    });

  const message = [
    `Hola ${businessInfo.name}, quiero hacer un pedido:`,
    ...lines.map((i) => `- ${cart[i.id]} x ${i.name} (${formatColones(i.price * cart[i.id])})`),
    `Total: ${formatColones(total)}`,
    name ? `A nombre de: ${name}` : "",
    notes ? `Notas: ${notes}` : "",
  ]
    .filter(Boolean)
    .join("\n");

  // Sin número: WhatsApp deja elegir el contacto. En producción se fija al número del negocio.
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen text-white font-inter">
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Volver a Tkyo
        </Link>
        <span className="font-mono text-xs text-[var(--accent)]">DEMO · menú digital</span>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-10 grid lg:grid-cols-[1fr_340px] gap-10">
        <div>
          <h1 className="font-mono text-4xl font-bold">{businessInfo.name}</h1>
          <p className="mt-3 flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-400">
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-[var(--accent)]" /> {businessInfo.place}
            </span>
            <span className="inline-flex items-center gap-2">
              <Phone className="h-4 w-4 text-[var(--accent)]" /> {businessInfo.phone}
            </span>
            <span>{businessInfo.note}</span>
          </p>

          <div className="mt-10 space-y-10">
            {menu.map((cat) => (
              <section key={cat.title}>
                <h2 className="section-title text-xl">{cat.title}</h2>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.id} className="card p-4 flex items-center justify-between gap-4">
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        {item.description && (
                          <p className="text-sm text-gray-400">{item.description}</p>
                        )}
                        <p className="mt-1 font-mono text-[var(--accent)]">
                          {formatColones(item.price)}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        {cart[item.id] ? (
                          <>
                            <button
                              aria-label={`Quitar ${item.name}`}
                              onClick={() => change(item.id, -1)}
                              className="h-9 w-9 grid place-items-center rounded-full border border-[var(--border)] hover:border-[var(--accent)]"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="w-5 text-center font-mono">{cart[item.id]}</span>
                          </>
                        ) : null}
                        <button
                          aria-label={`Agregar ${item.name}`}
                          onClick={() => change(item.id, 1)}
                          className="h-9 w-9 grid place-items-center rounded-full bg-[var(--accent)] hover:brightness-110"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>

        <aside className="lg:sticky lg:top-24 h-fit card p-6 space-y-4">
          <h2 className="font-mono font-bold text-lg">Tu pedido</h2>
          {lines.length === 0 ? (
            <p className="text-sm text-gray-400">Agrega productos para armar tu pedido.</p>
          ) : (
            <ul className="space-y-2 text-sm">
              {lines.map((i) => (
                <li key={i.id} className="flex justify-between gap-4">
                  <span>
                    {cart[i.id]} × {i.name}
                  </span>
                  <span className="font-mono">{formatColones(i.price * cart[i.id])}</span>
                </li>
              ))}
            </ul>
          )}
          <div className="flex justify-between border-t border-[var(--border)] pt-4 font-bold">
            <span>Total</span>
            <span className="font-mono text-[var(--accent)]">{formatColones(total)}</span>
          </div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Tu nombre"
            className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--accent)] outline-none p-3 rounded-lg text-sm"
          />
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            rows={2}
            placeholder="Notas (salsa, sin ensalada, etc.)"
            className="w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--accent)] outline-none p-3 rounded-lg text-sm"
          />
          <a
            href={count ? whatsappUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-disabled={!count}
            className={`inline-flex w-full items-center justify-center gap-2 rounded-lg p-3 font-semibold ${
              count ? "bg-[#25d366] text-black hover:brightness-110" : "bg-[var(--border)] text-gray-500 pointer-events-none"
            }`}
          >
            <MessageCircle className="h-5 w-5" /> Enviar pedido por WhatsApp
          </a>
          <p className="text-xs text-gray-500">
            Demo de Tkyo con el menú real de Soda 506. En producción, el botón envía el pedido
            directo al WhatsApp del negocio y el dueño actualiza precios desde un panel.
          </p>
        </aside>
      </main>
    </div>
  );
}
