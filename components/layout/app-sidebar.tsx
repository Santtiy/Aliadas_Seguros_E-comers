"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  ClipboardList,
  LayoutDashboard,
  RefreshCw,
  Settings,
  ShieldCheck,
  ShoppingBag,
  Users,
  Wallet,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type NavItem = {
  title: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const navItems: NavItem[] = [
  { title: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { title: "Cotizaciones", href: "/cotizaciones", icon: ClipboardList },
  { title: "Clientes", href: "/clientes", icon: Users },
  { title: "Polizas", href: "/polizas", icon: ShieldCheck },
  { title: "Pagos", href: "/pagos", icon: Wallet },
  { title: "Renovaciones", href: "/renovaciones", icon: RefreshCw },
  { title: "Productos", href: "/productos", icon: ShoppingBag },
  { title: "Reportes", href: "/reportes", icon: BarChart3 },
  { title: "Configuracion", href: "/configuracion", icon: Settings },
];

function isActivePath(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar className="border-r bg-white">
      <SidebarHeader className="border-b px-4 py-5">
        <div className="space-y-1">
          <div className="text-base font-semibold tracking-tight text-slate-900">
            Aliadas Admin
          </div>
          <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Panel administrativo
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2 py-4">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
                const active = isActivePath(pathname, item.href);
                const Icon = item.icon;

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition",
                          "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                          active && "bg-slate-900 text-white hover:bg-slate-900"
                        )}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-xs font-semibold text-white">
            AP
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-semibold text-slate-900">
              Admin Principal
            </div>
            <div className="truncate text-xs text-slate-500">admin@aliadas.com</div>
          </div>
        </div>
        <button
          type="button"
          className="mt-4 flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900"
        >
          <LogOut className="h-4 w-4" />
          Cerrar sesion
        </button>
      </SidebarFooter>
    </Sidebar>
  );
}
