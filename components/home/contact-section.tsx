import { Mail, MapPin, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactItems = [
  { label: "Telefono", value: "+52 55 1200 8890", icon: Phone },
  { label: "Correo", value: "hola@aliadas.com", icon: Mail },
  { label: "Direccion", value: "Ciudad de Mexico", icon: MapPin },
  { label: "Horario", value: "Lun - Vie, 8:00 a 18:00", icon: Clock },
];

export default function ContactSection() {
  return (
    <section className="py-12">
      <div className="mb-6">
        <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
          Contacto
        </div>
        <h2 className="text-2xl font-semibold text-slate-900">Hablemos de tu seguro</h2>
        <p className="text-sm text-slate-500">
          Recibe asesoria personalizada y una propuesta a tu medida.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-slate-200 bg-white">
          <CardContent className="space-y-4 p-6">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b7e87]/10 text-[#0b7e87]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">
                      {item.label}
                    </div>
                    <div className="text-sm text-slate-500">{item.value}</div>
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
        <Card className="border-slate-200 bg-white">
          <CardContent className="space-y-4 p-6">
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Nombre" />
              <Input placeholder="Correo" />
            </div>
            <div className="grid gap-3 md:grid-cols-2">
              <Input placeholder="Telefono" />
              <Input placeholder="Ciudad" />
            </div>
            <Textarea placeholder="Cuentanos sobre tu necesidad" className="min-h-28" />
            <Button className="w-full bg-[#0b7e87] text-white hover:bg-[#0a6f77]">
              Enviar solicitud
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
