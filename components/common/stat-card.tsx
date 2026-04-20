import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type StatCardProps = {
  label: string;
  value: string | number;
  helperText?: string;
  icon?: React.ReactNode;
  className?: string;
};

export default function StatCard({
  label,
  value,
  helperText,
  icon,
  className,
}: StatCardProps) {
  return (
    <Card className={cn("border-slate-200", className)}>
      <CardContent className="flex items-start justify-between gap-4 p-4">
        <div className="space-y-1">
          <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {label}
          </div>
          <div className="text-2xl font-semibold text-slate-900">{value}</div>
          {helperText ? (
            <div className="text-xs text-slate-500">{helperText}</div>
          ) : null}
        </div>
        {icon ? (
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-600">
            {icon}
          </div>
        ) : null}
      </CardContent>
    </Card>
  );
}
