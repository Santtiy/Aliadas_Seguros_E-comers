import * as React from "react";

import { SidebarGroup, SidebarGroupContent } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

type SidebarSectionProps = {
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function SidebarSection({ title, children, className }: SidebarSectionProps) {
  return (
    <SidebarGroup className={cn("space-y-3", className)}>
      {title ? (
        <div className="px-3 text-xs font-semibold uppercase tracking-wide text-slate-400">
          {title}
        </div>
      ) : null}
      <SidebarGroupContent>{children}</SidebarGroupContent>
    </SidebarGroup>
  );
}
