import MainNavbar from "@/components/layout/main-navbar";
import ContactSection from "@/components/home/contact-section";

export default function ContactoPage() {
  return (
    <div className="min-h-svh bg-slate-50 text-slate-900">
      <MainNavbar />
      <main className="mx-auto w-full max-w-[1400px] px-6 md:px-10 lg:px-16 xl:px-20">
        <section className="py-12">
          <div className="space-y-4">
            <div className="text-xs font-semibold uppercase tracking-wide text-[#0b7e87]">
              Contacto
            </div>
            <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
              Hablemos de tu seguro ideal.
            </h1>
            <p className="text-base text-slate-500">
              Nuestro equipo responde en menos de 24 horas para ofrecerte una propuesta
              personalizada.
            </p>
          </div>
        </section>
        <ContactSection />
      </main>
    </div>
  );
}
