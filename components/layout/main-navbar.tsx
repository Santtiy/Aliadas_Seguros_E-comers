"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Seguros", href: "/seguros" },
  { label: "Planes de salud", href: "/planes-salud" },
  { label: "Contacto", href: "/contacto" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function MainNavbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between md:px-10 lg:px-16 xl:px-20">
        <div className="text-sm font-semibold uppercase tracking-wide text-slate-900">
          Aliadas Seguros
        </div>
        <nav className="flex flex-wrap items-center gap-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
          {navItems.map((item) => {
            const active = isActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition hover:text-slate-900",
                  active && "text-slate-900"
                )}
              >
                {item.label}
              </Link>
            );
          })}
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
  );
}
