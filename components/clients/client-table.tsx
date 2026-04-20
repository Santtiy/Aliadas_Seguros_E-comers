import CustomTable from "@/components/common/custom-table";
import StatusBadge from "@/components/common/status-badge";
import { clients } from "@/data/clients";
import { Client } from "@/types/client";

const columns = [
  { header: "Cliente", accessor: "name" },
  { header: "Email", accessor: "email" },
  { header: "Telefono", accessor: "phone" },
  {
    header: "Segmento",
    accessor: "segment",
    cell: (row: Client) => row.segment,
  },
  {
    header: "Estado",
    accessor: "status",
    cell: (row: Client) => {
      const tone = row.status === "active" ? "success" : row.status === "pending" ? "warning" : "danger";
      const label = row.status === "active" ? "Activo" : row.status === "pending" ? "Pendiente" : "Inactivo";
      return <StatusBadge label={label} tone={tone} />;
    },
  },
  { header: "Ultimo contacto", accessor: "lastContact" },
];

export default function ClientTable() {
  return <CustomTable columns={columns} data={clients} />;
}
