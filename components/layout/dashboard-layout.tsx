"use client";

import * as React from "react";

import AppSidebar from "@/components/layout/app-sidebar";
import TopNavbar from "@/components/layout/top-navbar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type DashboardLayoutProps = {
  children: React.ReactNode;
  className?: string;
};

export default function DashboardLayout({ children, className }: DashboardLayoutProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <TopNavbar />
        <div className={cn("flex-1 p-6", className)}>{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
