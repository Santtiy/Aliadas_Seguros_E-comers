import * as React from "react";

import { Button } from "@/components/ui/button";

type PageHeaderProps = {
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  action?: React.ReactNode;
};

export default function PageHeader({
  title,
  description,
  actionLabel,
  onAction,
  action,
}: PageHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-slate-900">{title}</h1>
        {description ? (
          <p className="text-sm text-slate-500">{description}</p>
        ) : null}
      </div>
      <div className="flex items-center justify-start md:justify-end">
        {action ? (
          action
        ) : actionLabel ? (
          <Button onClick={onAction}>{actionLabel}</Button>
        ) : null}
      </div>
    </div>
  );
}
