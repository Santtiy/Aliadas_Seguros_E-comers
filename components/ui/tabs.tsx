import * as React from "react";

import { cn } from "@/lib/utils";

type TabsProps = React.HTMLAttributes<HTMLDivElement>;

function Tabs({ className, ...props }: TabsProps) {
  return <div className={cn("space-y-2", className)} {...props} />;
}

export { Tabs };
