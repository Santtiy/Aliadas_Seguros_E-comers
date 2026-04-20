import Link from "next/link";
import { ShieldCheck, Stethoscope, HeartPulse, Globe2 } from "lucide-react";

import MainNavbar from "@/components/layout/main-navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const products = [
  {
    title: "Seguro de salud",
    description: "Cobertura integral con clinicas y especialistas.",
    icon: HeartPulse,
  },
  {
    title: "Accidentes personales",
    description: "Respaldo ante imprevistos con atencion inmediata.",
    icon: Stethoscope,
  },
  {
    title: "Emergencia medica",
    description: "Asistencia 24/7 y traslados coordinados.",
    icon: ShieldCheck,
  },
  {
    title: "Asistencia internacional",
    description: "Proteccion en viajes y cobertura global.",
    icon: Globe2,
  },
];

export default function SegurosPage() {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <MainNavbar />
      <main className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 xl:px-20">
        <section className="grid gap-8 py-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
              Seguros
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Cobertura confiable para cada etapa.
            </h1>
            <p className="text-base text-slate-500">
              Diseñamos soluciones de proteccion que acompañan tu vida, con asesoria
              profesional y respuesta rapida.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="bg-[#0b7e87] text-white hover:bg-[#0a6f77]">
                Ver coberturas
              </Button>
              <Button variant="outline" className="border-slate-200">
                Hablar con un asesor
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
              Aliadas Seguros
            </div>
            <div className="mt-4 grid gap-4">
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">Polizas activas</div>
                <div className="text-2xl font-semibold text-slate-900">5,400</div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4">
                <div className="text-xs text-slate-400">Siniestros atendidos</div>
                <div className="text-2xl font-semibold text-slate-900">1,250</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
                Proteccion a tu medida
              </div>
              <h2 className="text-2xl font-semibold">Seguros destacados</h2>
              <p className="text-sm text-slate-500">
                Soluciones flexibles para diferentes necesidades.
              </p>
            </div>
            <Link href="/contacto" className="text-sm font-semibold text-[#0b7e87]">
              Solicitar asesoria
            </Link>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {products.map((item) => {
              const Icon = item.icon;
              return (
                <Card
                  key={item.title}
                  className="border-slate-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <CardContent className="space-y-3 p-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b7e87]/10 text-[#0b7e87]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="text-base font-semibold text-slate-900">{item.title}</div>
                    <p className="text-sm text-slate-500">{item.description}</p>
                    <Button variant="ghost" className="px-0 text-sm text-[#0b7e87]">
                      Ver mas
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
