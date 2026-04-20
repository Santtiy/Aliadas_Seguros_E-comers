import CustomTable from "@/components/common/custom-table";
import StatusBadge from "@/components/common/status-badge";
import { formatCurrency } from "@/lib/formatters";
import { payments } from "@/data/payments";
import { Payment } from "@/types/payment";

const columns = [
  { header: "Pago", accessor: "id" },
  { header: "Cliente", accessor: "clientName" },
  {
    header: "Monto",
    accessor: "amount",
    cell: (row: Payment) => formatCurrency(row.amount),
  },
  {
    header: "Metodo",
    accessor: "method",
    cell: (row: Payment) =>
      row.method === "card" ? "Tarjeta" : row.method === "transfer" ? "Transferencia" : "Efectivo",
  },
  {
    header: "Estado",
    accessor: "status",
    cell: (row: Payment) => {
      const tone = row.status === "paid" ? "success" : row.status === "pending" ? "warning" : "danger";
      const label = row.status === "paid" ? "Pagado" : row.status === "pending" ? "Pendiente" : "Fallido";
      return <StatusBadge label={label} tone={tone} />;
    },
  },
  { header: "Fecha", accessor: "paidAt" },
];

export default function PaymentTable() {
  return <CustomTable columns={columns} data={payments} />;
}
