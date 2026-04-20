export type Payment = {
  id: string;
  clientName: string;
  amount: number;
  method: "card" | "transfer" | "cash";
  status: "paid" | "pending" | "failed";
  paidAt: string;
};
