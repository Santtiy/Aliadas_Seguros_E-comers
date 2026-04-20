export type Policy = {
  id: string;
  holder: string;
  status: "active" | "expired" | "cancelled";
  renewalDate: string;
};
