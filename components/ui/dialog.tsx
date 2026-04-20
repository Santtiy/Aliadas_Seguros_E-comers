export function Dialog({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function DialogTrigger({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>;
}

export function DialogContent({ children }: { children: React.ReactNode }) {
  return <div className="rounded-lg border p-4">{children}</div>;
}
