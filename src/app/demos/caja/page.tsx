"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Download, Trash2, TrendingUp, TrendingDown, Wallet } from "lucide-react";
import { formatColones } from "@/app/data/menu";

type Entry = {
  id: string;
  type: "venta" | "gasto";
  concept: string;
  amount: number;
  date: string; // YYYY-MM-DD
};

const STORAGE_KEY = "tkyo-caja-demo";
const today = () => new Date().toISOString().slice(0, 10);

const sample = (): Entry[] => {
  const d = today();
  return [
    { id: "s1", type: "venta", concept: "Ventas del día", amount: 85000, date: d },
    { id: "s2", type: "gasto", concept: "Compra de pollo", amount: 32000, date: d },
    { id: "s3", type: "gasto", concept: "Gas", amount: 9500, date: d },
  ];
};

export default function CajaDemoPage() {
  const [entries, setEntries] = useState<Entry[]>([]);
  const [ready, setReady] = useState(false);
  const [type, setType] = useState<Entry["type"]>("venta");
  const [concept, setConcept] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(today());
  const [month, setMonth] = useState(today().slice(0, 7));

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      setEntries(raw ? JSON.parse(raw) : sample());
    } catch {
      setEntries(sample());
    }
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch {
      /* almacenamiento no disponible: la demo sigue funcionando en memoria */
    }
  }, [entries, ready]);

  const monthEntries = useMemo(
    () => entries.filter((e) => e.date.startsWith(month)).sort((a, b) => b.date.localeCompare(a.date)),
    [entries, month],
  );
  const sales = monthEntries.filter((e) => e.type === "venta").reduce((s, e) => s + e.amount, 0);
  const expenses = monthEntries.filter((e) => e.type === "gasto").reduce((s, e) => s + e.amount, 0);
  const profit = sales - expenses;
  const margin = sales > 0 ? Math.round((profit / sales) * 100) : 0;

  const add = (ev: React.FormEvent) => {
    ev.preventDefault();
    const value = Number(amount);
    if (!concept.trim() || !Number.isFinite(value) || value <= 0) return;
    setEntries((list) => [
      { id: crypto.randomUUID(), type, concept: concept.trim(), amount: value, date },
      ...list,
    ]);
    setConcept("");
    setAmount("");
  };

  const exportCsv = () => {
    const escape = (s: string) => `"${s.replace(/"/g, '""')}"`;
    const rows = [
      "fecha,tipo,concepto,monto",
      ...monthEntries.map((e) => [e.date, e.type, escape(e.concept), e.amount].join(",")),
    ];
    const blob = new Blob([rows.join("\n")], { type: "text/csv;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `caja-${month}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen text-white font-inter">
      <header className="sticky top-0 z-20 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur px-6 py-4 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white">
          <ArrowLeft className="h-4 w-4" /> Volver a Tkyo
        </Link>
        <span className="font-mono text-xs text-[var(--accent)]">DEMO · control de caja</span>
      </header>

      <main className="mx-auto max-w-4xl px-6 py-10 space-y-8">
        <div>
          <h1 className="font-mono text-3xl font-bold">Control de ventas y gastos</h1>
          <p className="mt-2 text-gray-400 max-w-2xl">
            Registra lo que entra y lo que sale, y mira tu utilidad del mes sin hojas de cálculo.
            Tus datos se guardan solo en este navegador.
          </p>
        </div>

        <section className="grid sm:grid-cols-4 gap-4">
          <Stat icon={TrendingUp} label="Ventas" value={formatColones(sales)} />
          <Stat icon={TrendingDown} label="Gastos" value={formatColones(expenses)} />
          <Stat icon={Wallet} label="Utilidad" value={formatColones(profit)} highlight={profit < 0 ? "neg" : "pos"} />
          <div className="card p-5">
            <p className="text-xs text-gray-400">Margen</p>
            <p className="mt-1 font-mono text-2xl">{margin}%</p>
          </div>
        </section>

        <form onSubmit={add} className="card p-6 grid sm:grid-cols-[auto_1fr_150px_160px_auto] gap-3 items-end">
          <label className="text-xs text-gray-400">
            Tipo
            <select
              value={type}
              onChange={(e) => setType(e.target.value as Entry["type"])}
              className="mt-1 w-full bg-[var(--background)] border border-[var(--border)] p-3 rounded-lg text-sm text-white"
            >
              <option value="venta">Venta</option>
              <option value="gasto">Gasto</option>
            </select>
          </label>
          <label className="text-xs text-gray-400">
            Concepto
            <input
              value={concept}
              onChange={(e) => setConcept(e.target.value)}
              placeholder="Ej: compra de ingredientes"
              className="mt-1 w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--accent)] outline-none p-3 rounded-lg text-sm text-white"
            />
          </label>
          <label className="text-xs text-gray-400">
            Monto (₡)
            <input
              type="number"
              min="1"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="mt-1 w-full bg-[var(--background)] border border-[var(--border)] focus:border-[var(--accent)] outline-none p-3 rounded-lg text-sm text-white"
            />
          </label>
          <label className="text-xs text-gray-400">
            Fecha
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="mt-1 w-full bg-[var(--background)] border border-[var(--border)] p-3 rounded-lg text-sm text-white"
            />
          </label>
          <button className="bg-[var(--accent)] rounded-lg px-5 py-3 font-semibold hover:brightness-110">
            Agregar
          </button>
        </form>

        <section>
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <label className="text-sm text-gray-400 flex items-center gap-3">
              Mes
              <input
                type="month"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="bg-[var(--background)] border border-[var(--border)] p-2 rounded-lg text-white"
              />
            </label>
            <button
              onClick={exportCsv}
              disabled={monthEntries.length === 0}
              className="inline-flex items-center gap-2 text-sm border border-[var(--border)] rounded-lg px-4 py-2 hover:border-[var(--accent)] disabled:opacity-40"
            >
              <Download className="h-4 w-4" /> Exportar CSV
            </button>
          </div>

          {monthEntries.length === 0 ? (
            <p className="card p-6 text-gray-400 text-sm">No hay movimientos en este mes.</p>
          ) : (
            <ul className="space-y-2">
              {monthEntries.map((e) => (
                <li key={e.id} className="card p-4 flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold">{e.concept}</p>
                    <p className="text-xs text-gray-500">{e.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className={`font-mono ${e.type === "venta" ? "text-emerald-400" : "text-[var(--accent)]"}`}>
                      {e.type === "venta" ? "+" : "−"}
                      {formatColones(e.amount)}
                    </span>
                    <button
                      aria-label={`Eliminar ${e.concept}`}
                      onClick={() => setEntries((list) => list.filter((x) => x.id !== e.id))}
                      className="text-gray-500 hover:text-white"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        <p className="text-xs text-gray-500">
          Demo de Tkyo. La versión para clientes suma usuarios, respaldo en la nube, categorías de
          gasto, reportes mensuales y cierre de caja.
        </p>
      </main>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  highlight?: "pos" | "neg";
}) {
  return (
    <div className="card p-5">
      <p className="text-xs text-gray-400 flex items-center gap-2">
        <Icon className="h-4 w-4 text-[var(--accent)]" /> {label}
      </p>
      <p
        className={`mt-1 font-mono text-2xl ${
          highlight === "neg" ? "text-[var(--accent)]" : highlight === "pos" ? "text-emerald-400" : ""
        }`}
      >
        {value}
      </p>
    </div>
  );
}
