export type Quote = {
  id: string;
  clientName: string;
  status: "draft" | "sent" | "approved" | "rejected";
  total: number;
};
