import PageHeader from "@/components/layout/page-header";
import DashboardStats from "@/components/dashboard/dashboard-stats";
import RecentQuotesTable from "@/components/dashboard/recent-quotes-table";
import RenewalsAlerts from "@/components/dashboard/renewals-alerts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

export default function DashboardPage() {
  return (
    <div className="flex min-h-svh flex-col gap-6 p-6">
      <PageHeader
        title="Dashboard"
        description="Overview of key metrics."
        actionLabel="Nueva cotizacion"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="text-sm font-medium text-slate-500">
            Polizas activas
          </CardHeader>
          <CardContent className="text-2xl font-semibold">1,284</CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm font-medium text-slate-500">
            Renovaciones pendientes
          </CardHeader>
          <CardContent className="text-2xl font-semibold">46</CardContent>
        </Card>
        <Card>
          <CardHeader className="text-sm font-medium text-slate-500">
            Ingresos del mes
          </CardHeader>
          <CardContent className="text-2xl font-semibold">$285,000</CardContent>
        </Card>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <DashboardStats />
        <RenewalsAlerts />
      </div>

      <RecentQuotesTable />
    </div>
  );
}
