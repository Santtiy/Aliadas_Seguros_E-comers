import Link from "next/link";
import { BadgeCheck, ClipboardCheck, ShieldCheck, Timer, Users } from "lucide-react";

import ContactSection from "@/components/home/contact-section";
import HealthPlansSection from "@/components/home/health-plans-section";
import ServicesSection from "@/components/home/services-section";
import { Button } from "@/components/ui/button";

const benefits = [
  { label: "Atencion personalizada", icon: Users },
  { label: "Cobertura nacional", icon: ShieldCheck },
  { label: "Respuesta rapida", icon: Timer },
  { label: "Asesoria profesional", icon: ClipboardCheck },
];

const stats = [
  { label: "Clientes protegidos", value: "32,000+" },
  { label: "Polizas activas", value: "5,400" },
  { label: "Anios de experiencia", value: "18" },
  { label: "Renovaciones exitosas", value: "96%" },
];

export default function Page() {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
          <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
            Aliadas Seguros
          </div>
          <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
            <Link href="/" className="hover:text-slate-900">
              Inicio
            </Link>
            <Link href="/productos" className="hover:text-slate-900">
              Seguros
            </Link>
            <Link href="/productos" className="hover:text-slate-900">
              Planes de salud
            </Link>
            <Link href="/contacto" className="hover:text-slate-900">
              Contacto
            </Link>
          </nav>
          <div className="flex flex-wrap items-center gap-3">
            <Button variant="ghost" className="text-slate-600">
              Iniciar sesion
            </Button>
            <Button className="bg-[#0b7e87] text-white hover:bg-[#0a6f77]">
              Cotizar ahora
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 xl:px-20">
        <section className="grid gap-10 py-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#0b7e87]/10 px-3 py-1 text-xs font-semibold text-[#0b7e87]">
              <BadgeCheck className="h-4 w-4" />
              Proteccion confiable para tu bienestar
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Seguros de salud con atencion humana y tecnologia.
            </h1>
            <p className="text-base text-slate-500">
              Aliadas Seguros centraliza tus planes de salud, asistencia medica y
              seguimiento de polizas. Cotiza en minutos y acompana a tu familia con
              cobertura real.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Button className="bg-[#0b7e87] text-white hover:bg-[#0a6f77]">
                Cotiza tu seguro
              </Button>
              <Button variant="outline" className="border-slate-200">
                Ver planes
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#c6f1f1]" />
            <div className="absolute right-10 top-10 h-14 w-14 rounded-2xl bg-[#ffd2c9]" />
            <div className="relative rounded-[2.5rem] border border-slate-100 bg-white p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                  Panel de atencion
                </div>
                <span className="rounded-full bg-[#0b7e87] px-3 py-1 text-xs text-white">
                  Activo
                </span>
              </div>
              <div className="mt-6 grid gap-4">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs text-slate-400">Polizas en seguimiento</div>
                  <div className="text-2xl font-semibold text-slate-900">1,284</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs text-slate-400">Renovaciones proximas</div>
                  <div className="text-2xl font-semibold text-slate-900">46</div>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-xs text-slate-400">Asesores disponibles</div>
                  <div className="text-2xl font-semibold text-slate-900">28</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesSection />

        <section className="py-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.label}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b7e87]/10 text-[#0b7e87]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-sm font-semibold">{benefit.label}</div>
                </div>
              );
            })}
          </div>
        </section>

        <HealthPlansSection />

        <section className="py-12">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
              >
                <div className="text-2xl font-semibold text-slate-900">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        <ContactSection />
      </main>

      <section className="bg-[#0b7e87]">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-start gap-4 px-6 py-10 text-white md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <h3 className="text-2xl font-semibold">
              Protege tu bienestar y el de tu familia hoy mismo
            </h3>
            <p className="text-sm text-white/80">
              Recibe una propuesta personalizada en menos de 24 horas.
            </p>
          </div>
          <Button className="bg-white text-[#0b7e87] hover:bg-white/90">
            Solicitar cotizacion
          </Button>
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-6 py-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="space-y-2">
            <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
              Aliadas Seguros
            </div>
            <p className="text-sm text-slate-500">
              Soluciones de salud y proteccion respaldadas por asesoria profesional.
            </p>
          </div>
          <div className="space-y-2 text-sm text-slate-500">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Links rapidos
            </div>
            <div>Planes de salud</div>
            <div>Servicios</div>
            <div>Contacto</div>
          </div>
          <div className="space-y-2 text-sm text-slate-500">
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-900">
              Contacto
            </div>
            <div>hola@aliadas.com</div>
            <div>+52 55 1200 8890</div>
            <div>Ciudad de Mexico</div>
          </div>
        </div>
        <div className="border-t py-4 text-center text-xs text-slate-400">
          Aliadas Seguros. Todos los derechos reservados.
        </div>
      </footer>
    </div>
  );
}
