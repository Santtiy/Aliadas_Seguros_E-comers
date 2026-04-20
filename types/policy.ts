export type Policy = {
  id: string;
  holder: string;
  product: string;
  premium: number;
  status: "active" | "expired" | "cancelled" | "pending";
  renewalDate: string;
};
