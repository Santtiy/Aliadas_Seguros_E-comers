import * as React from "react";

import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select
      ref={ref}
      className={cn(
        "h-9 w-full rounded-md border bg-background px-3 text-sm",
        className
      )}
      {...props}
    />
  )
);
Select.displayName = "Select";

export { Select };
