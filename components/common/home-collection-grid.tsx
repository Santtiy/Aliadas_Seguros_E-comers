import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Plan Familiar",
    price: "$18,500",
    badge: "20%",
  },
  {
    name: "Plan Individual",
    price: "$9,800",
    badge: "15%",
  },
  {
    name: "Plan Corporativo",
    price: "$54,000",
    badge: "Nuevo",
  },
  {
    name: "Plan Senior",
    price: "$24,400",
    badge: "8%",
  },
];

export default function HomeCollectionGrid() {
  return (
    <section className="bg-[#0ea5a4]">
      <div className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between text-white">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wide text-white/70">
              Destacados
            </div>
            <h2 className="text-xl font-semibold">Planes prioritarios</h2>
          </div>
          <div className="text-xs text-white/70">Actualizado hoy</div>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {plans.map((plan) => (
            <Card key={plan.name} className="border-0 bg-white/95">
              <CardContent className="space-y-3 p-4">
                <div className="flex items-center justify-between text-xs font-semibold text-[#0b7e87]">
                  <span>{plan.name}</span>
                  <span className="rounded-full bg-[#ffd2c9] px-2 py-0.5 text-[#ff6a4f]">
                    {plan.badge}
                  </span>
                </div>
                <div className="rounded-2xl bg-[#f4f8f8] p-6 text-center text-sm text-slate-500">
                  Vista previa
                </div>
                <div className="text-sm text-slate-500">Costo estimado</div>
                <div className="text-lg font-semibold text-slate-900">{plan.price}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
