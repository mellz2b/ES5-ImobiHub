"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { loadProperties } from "@/lib/property-store";

function toCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function HomePage() {
  const properties = useMemo(() => loadProperties(), []);
  const [showSold, setShowSold] = useState(false);

  const catalog = showSold ? properties : properties.filter((item) => !item.sold);

  return (
    <div className="min-h-screen bg-[linear-gradient(160deg,#f7faff_0%,#eef3fb_44%,#fdfefe_100%)] px-5 py-8 text-[#091f44] md:px-10">
      <div className="mx-auto max-w-6xl">
        <header className="relative overflow-hidden rounded-3xl border border-[#c8d8ef] bg-white p-7 shadow-sm">
          <div className="pointer-events-none absolute -top-20 -right-16 h-56 w-56 rounded-full bg-[#dbe8fa] blur-2xl" />
          <div className="flex items-center gap-3">
            <Image
              src="/imobihub-logo.svg"
              alt="Logo ImobiHub"
              width={180}
              height={52}
              className="h-10 w-auto sm:h-12"
              priority
            />
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#16467e]">ImobiHub</p>
          </div>
          <h1 className="mt-2 max-w-2xl text-4xl font-semibold leading-tight">
            Catalogo de imoveis com foco em transparencia e bons negocios
          </h1>
          <p className="mt-3 max-w-2xl text-[#3a4d6e]">
            Explore oportunidades residenciais e comerciais em uma experiencia clara, moderna e confiavel.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/dashboard" className="rounded-full bg-[#0c2f5d] px-5 py-2 text-sm font-semibold text-white transition hover:bg-[#16467e]">
              Acessar dashboard
            </Link>
            <button
              type="button"
              onClick={() => setShowSold((prev) => !prev)}
              className="rounded-full border border-[#aac0df] px-5 py-2 text-sm font-semibold text-[#0c2f5d] transition hover:border-[#0c2f5d]"
            >
              {showSold ? "Ocultar vendidos" : "Mostrar vendidos"}
            </button>
          </div>
        </header>

        <section className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {catalog.map((item) => (
            <article
              key={item.id}
              className={`group overflow-hidden rounded-3xl border border-[#d3e0f2] bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${item.sold ? "opacity-70" : ""}`}
            >
              <div className="relative h-44 w-full overflow-hidden bg-[#e6eef9]">
                {item.photos[0] ? (
                  <img
                    src={item.photos[0]}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-[#536a8d]">
                    Sem foto
                  </div>
                )}
                <span className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-semibold ${item.sold ? "bg-[#e8ecf4] text-[#455b7a]" : "bg-[#deebfa] text-[#0f3f75]"}`}>
                  {item.sold ? "Vendido" : "Disponivel"}
                </span>
              </div>

              <div className="space-y-3 p-4">
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm text-[#4a6183]">{item.neighborhood}, {item.city}</p>
                </div>
                <p className="text-sm text-[#334a6b]">{item.description}</p>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="rounded-full bg-[#edf3fc] px-2 py-1">{item.area} m2</span>
                  <span className="rounded-full bg-[#edf3fc] px-2 py-1">{item.bedrooms} quartos</span>
                  <span className="rounded-full bg-[#edf3fc] px-2 py-1">{item.bathrooms} banheiros</span>
                  <span className="rounded-full bg-[#d8e8fb] px-2 py-1 text-[#0f3f75]">{item.sustainabilityTag}</span>
                </div>
                <p className="text-xl font-semibold text-[#0b2f5f]">{toCurrency(item.price)}</p>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}
