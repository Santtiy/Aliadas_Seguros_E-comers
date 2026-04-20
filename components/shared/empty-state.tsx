type EmptyStateProps = {
  title: string;
  description?: string;
};

export default function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-lg border p-6 text-center">
      <div className="text-sm font-medium">{title}</div>
      {description ? (
        <div className="mt-1 text-xs text-muted-foreground">{description}</div>
      ) : null}
    </div>
  );
}
