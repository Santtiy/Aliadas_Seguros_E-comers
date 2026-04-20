import Link from "next/link";
import { Globe2, HeartPulse, PhoneCall, ShieldCheck, Stethoscope } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const services = [
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
    icon: PhoneCall,
  },
  {
    title: "Asistencia internacional",
    description: "Proteccion en viajes y cobertura global.",
    icon: Globe2,
  },
];

export default function ServicesSection() {
  return (
    <section className="py-12">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
            Seguros
          </div>
          <h2 className="text-2xl font-semibold text-slate-900">
            Seguros para cada necesidad
          </h2>
          <p className="text-sm text-slate-500">
            Proteccion flexible para cada etapa de vida.
          </p>
        </div>
        <Link href="/productos" className="text-sm font-semibold text-[#0b7e87]">
          Ver todos
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card
              key={service.title}
              className="border-slate-200 bg-white transition hover:-translate-y-1 hover:border-[#0b7e87]/40 hover:shadow-lg"
            >
              <CardContent className="space-y-3 p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0b7e87]/10 text-[#0b7e87]">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="text-base font-semibold text-slate-900">{service.title}</div>
                <p className="text-sm text-slate-500">{service.description}</p>
                <Button variant="ghost" className="px-0 text-sm text-[#0b7e87]">
                  Ver mas
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
