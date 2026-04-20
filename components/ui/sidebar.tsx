"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type SidebarContextValue = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  toggle: () => void;
};

const SidebarContext = React.createContext<SidebarContextValue | null>(null);

function useSidebarContext() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within SidebarProvider");
  }
  return context;
}

type SidebarProviderProps = {
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
};

function SidebarProvider({ children, defaultOpen = true, className }: SidebarProviderProps) {
  const [open, setOpen] = React.useState(defaultOpen);
  const toggle = React.useCallback(() => setOpen((prev) => !prev), []);

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggle }}>
      <div className={cn("flex min-h-svh w-full", className)}>{children}</div>
    </SidebarContext.Provider>
  );
}

const Sidebar = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => {
    const { open } = useSidebarContext();

    return (
      <aside
        ref={ref}
        data-state={open ? "open" : "collapsed"}
        className={cn(
          "flex h-svh w-72 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground",
          className
        )}
        {...props}
      />
    );
  }
);
Sidebar.displayName = "Sidebar";

const SidebarInset = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  ({ className, ...props }, ref) => (
    <main
      ref={ref}
      className={cn("flex min-h-svh flex-1 flex-col bg-background", className)}
      {...props}
    />
  )
);
SidebarInset.displayName = "SidebarInset";

const SidebarHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("shrink-0", className)} {...props} />
  )
);
SidebarHeader.displayName = "SidebarHeader";

const SidebarContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex-1 overflow-auto", className)} {...props} />
  )
);
SidebarContent.displayName = "SidebarContent";

const SidebarFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("shrink-0", className)} {...props} />
  )
);
SidebarFooter.displayName = "SidebarFooter";

const SidebarGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("px-2", className)} {...props} />
  )
);
SidebarGroup.displayName = "SidebarGroup";

const SidebarGroupContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-1", className)} {...props} />
));
SidebarGroupContent.displayName = "SidebarGroupContent";

const SidebarMenu = React.forwardRef<HTMLUListElement, React.HTMLAttributes<HTMLUListElement>>(
  ({ className, ...props }, ref) => (
    <ul ref={ref} className={cn("space-y-1", className)} {...props} />
  )
);
SidebarMenu.displayName = "SidebarMenu";

const SidebarMenuItem = React.forwardRef<HTMLLIElement, React.HTMLAttributes<HTMLLIElement>>(
  ({ className, ...props }, ref) => (
    <li ref={ref} className={cn("list-none", className)} {...props} />
  )
);
SidebarMenuItem.displayName = "SidebarMenuItem";

type SidebarMenuButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
};

const SidebarMenuButton = React.forwardRef<HTMLButtonElement, SidebarMenuButtonProps>(
  ({ asChild, className, children, ...props }, ref) => {
    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>;
      return React.cloneElement(child, {
        className: cn(
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          child.props.className,
          className
        ),
      });
    }

    return (
      <button
        ref={ref}
        className={cn(
          "w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);
SidebarMenuButton.displayName = "SidebarMenuButton";

export {
  SidebarProvider,
  Sidebar,
  SidebarInset,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
};
