import { CheckCircle2 } from "lucide-react";

import MainNavbar from "@/components/layout/main-navbar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const plans = [
  {
    name: "Plan basico",
    price: "$7,900",
    description: "Cobertura esencial con atencion preventiva.",
    perks: ["Consultas generales", "Urgencias", "Red nacional"],
  },
  {
    name: "Plan familiar",
    price: "$18,500",
    description: "Proteccion completa para tu familia.",
    perks: ["Especialistas", "Telemedicina", "Atencion 24/7"],
    featured: true,
  },
  {
    name: "Plan premium",
    price: "$28,900",
    description: "Cobertura avanzada y beneficios exclusivos.",
    perks: ["Hospitalizacion", "Cobertura internacional", "Asesoria dedicada"],
  },
];

export default function PlanesSaludPage() {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <MainNavbar />
      <main className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 xl:px-20">
        <section className="py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
                Planes de salud
              </div>
              <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                Elige un plan con beneficios reales.
              </h1>
              <p className="text-base text-slate-500">
                Planes flexibles, cobertura nacional y atencion humana para tu familia.
              </p>
            </div>
            <div className="rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Comparativo rapido
                </div>
                <Badge className="bg-[#0b7e87] text-white">Nuevo</Badge>
              </div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0b7e87]" />
                  Telemedicina incluida
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0b7e87]" />
                  Acceso a especialistas
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#0b7e87]" />
                  Atencion 24/7
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mb-6">
            <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
              Planes disponibles
            </div>
            <h2 className="text-2xl font-semibold">Planes de salud pensados para ti</h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={
                  plan.featured
                    ? "border-[#0b7e87]/40 bg-[#0b7e87]/5 shadow-lg"
                    : "border-slate-200 bg-white"
                }
              >
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm font-semibold text-slate-900">{plan.name}</div>
                      <div className="text-2xl font-semibold text-[#0b7e87]">
                        {plan.price}
                      </div>
                      <div className="text-sm text-slate-500">{plan.description}</div>
                    </div>
                    {plan.featured ? (
                      <Badge className="bg-[#0b7e87] text-white">Mas elegido</Badge>
                    ) : null}
                  </div>
                  <Separator />
                  <ul className="space-y-2 text-sm text-slate-600">
                    {plan.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-[#0b7e87]" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#0b7e87] text-white hover:bg-[#0a6f77]">
                    Cotizar
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
