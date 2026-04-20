type ConfirmDeleteDialogProps = {
  title?: string;
  description?: string;
};

export default function ConfirmDeleteDialog({
  title = "Delete item",
  description = "This action cannot be undone.",
}: ConfirmDeleteDialogProps) {
  return (
    <div className="rounded-lg border p-4 text-sm">
      <div className="font-medium">{title}</div>
      <div className="mt-1 text-muted-foreground">{description}</div>
    </div>
  );
}
