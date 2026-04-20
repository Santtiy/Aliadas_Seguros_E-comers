import * as React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

type Column<T> = {
  header: string;
  accessor: keyof T;
  cell?: (row: T) => React.ReactNode;
  className?: string;
};

type CustomTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  className?: string;
};

export default function CustomTable<T extends Record<string, unknown>>({
  columns,
  data,
  className,
}: CustomTableProps<T>) {
  return (
    <div className={cn("overflow-hidden rounded-lg border", className)}>
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50">
            {columns.map((column) => (
              <TableHead key={String(column.accessor)} className={column.className}>
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={String(column.accessor)} className={column.className}>
                  {column.cell ? column.cell(row) : String(row[column.accessor] ?? "")}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
