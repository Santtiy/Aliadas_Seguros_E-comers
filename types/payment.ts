export type Payment = {
  id: string;
  clientName: string;
  amount: number;
  status: "paid" | "pending" | "failed";
};
