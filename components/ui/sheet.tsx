export function Sheet({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function SheetContent({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border p-4">{children}</div>;
}
