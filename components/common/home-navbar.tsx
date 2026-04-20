import Link from "next/link";
import { Search, ShoppingCart, User } from "lucide-react";

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Planes", href: "/productos" },
  { label: "Cotizaciones", href: "/cotizaciones" },
  { label: "Servicios", href: "/reportes" },
];

export default function HomeNavbar() {
  return (
    <header className="bg-[#0b7e87]">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#ff7b63] text-sm font-semibold">
            AS
          </div>
          <div className="text-sm font-semibold uppercase tracking-wide">Aliadas Seguros</div>
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wide text-white/80">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-white">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3 text-white">
          <button type="button" className="rounded-full p-2 transition hover:bg-white/10">
            <Search className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-full p-2 transition hover:bg-white/10">
            <ShoppingCart className="h-4 w-4" />
          </button>
          <button type="button" className="rounded-full p-2 transition hover:bg-white/10">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}
