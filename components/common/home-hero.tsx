import { Button } from "@/components/ui/button";

export default function HomeHero() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-5">
          <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
            Panel administrativo
          </div>
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
            Gestion de seguros
            <span className="block text-slate-900">con orden y visibilidad.</span>
          </h1>
          <p className="text-sm leading-relaxed text-slate-500">
            Supervisa cotizaciones, polizas y pagos con un flujo ordenado. Unifica la
            operacion comercial y el seguimiento de renovaciones en un solo panel.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <Button className="bg-[#ff7b63] text-white hover:bg-[#ff6a4f]">
              Ver dashboard
            </Button>
            <Button variant="outline" className="border-slate-200">
              Explorar planes
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-6 -top-8 h-32 w-32 rounded-full bg-[#ffd2c9]" />
          <div className="absolute right-12 top-6 h-16 w-16 rounded-2xl bg-[#7cd4d6]" />
          <div className="absolute right-2 top-32 h-24 w-32 rounded-[2rem] bg-[#f6e5d5]" />
          <div className="relative rounded-[2.5rem] border border-slate-100 bg-slate-50 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Aliadas Seguros
              </div>
              <div className="rounded-full bg-[#0b7e87] px-3 py-1 text-xs text-white">
                Activo
              </div>
            </div>
            <div className="mt-6 grid gap-4">
              <div className="rounded-2xl bg-white p-4">
                <div className="text-xs text-slate-400">Polizas activas</div>
                <div className="text-2xl font-semibold text-slate-900">1,284</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-xs text-slate-400">Renovaciones proximas</div>
                <div className="text-2xl font-semibold text-slate-900">46</div>
              </div>
              <div className="rounded-2xl bg-white p-4">
                <div className="text-xs text-slate-400">Ventas del mes</div>
                <div className="text-2xl font-semibold text-slate-900">$285,000</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
