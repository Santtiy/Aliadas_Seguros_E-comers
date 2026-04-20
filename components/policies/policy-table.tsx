import CustomTable from "@/components/common/custom-table";
import StatusBadge from "@/components/common/status-badge";
import { formatCurrency } from "@/lib/formatters";
import { policies } from "@/data/policies";
import { Policy } from "@/types/policy";

const columns = [
  { header: "Poliza", accessor: "id" },
  { header: "Titular", accessor: "holder" },
  { header: "Producto", accessor: "product" },
  {
    header: "Prima",
    accessor: "premium",
    cell: (row: Policy) => formatCurrency(row.premium),
  },
  {
    header: "Estado",
    accessor: "status",
    cell: (row: Policy) => {
      const tone = row.status === "active" ? "success" : row.status === "pending" ? "warning" : "danger";
      const label =
        row.status === "active" ? "Activa" : row.status === "pending" ? "Pendiente" : "Vencida";
      return <StatusBadge label={label} tone={tone} />;
    },
  },
  { header: "Renovacion", accessor: "renewalDate" },
];

export default function PolicyTable() {
  return <CustomTable columns={columns} data={policies} />;
}
