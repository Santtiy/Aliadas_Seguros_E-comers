import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusBadgeProps = {
  label: string;
  tone?: "neutral" | "success" | "warning" | "danger";
};

const toneClasses: Record<NonNullable<StatusBadgeProps["tone"]>, string> = {
  neutral: "border-slate-200 text-slate-600",
  success: "border-emerald-200 text-emerald-700",
  warning: "border-amber-200 text-amber-700",
  danger: "border-rose-200 text-rose-700",
};

export default function StatusBadge({ label, tone = "neutral" }: StatusBadgeProps) {
  return <Badge className={cn("bg-white", toneClasses[tone])}>{label}</Badge>;
}
