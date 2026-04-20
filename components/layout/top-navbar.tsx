import * as React from "react";

import { cn } from "@/lib/utils";

type TopNavbarProps = {
  title?: string;
  rightSlot?: React.ReactNode;
  className?: string;
};

export default function TopNavbar({ title, rightSlot, className }: TopNavbarProps) {
  return (
    <header className={cn("border-b bg-white", className)}>
      <div className="flex flex-col gap-2 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="text-sm font-semibold text-slate-900">
          {title ?? "Aliadas Admin"}
        </div>
        {rightSlot ? <div className="flex items-center gap-3">{rightSlot}</div> : null}
      </div>
    </header>
  );
}
