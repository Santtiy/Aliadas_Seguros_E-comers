export type Renewal = {
  id: string;
  policyId: string;
  dueDate: string;
  status: "pending" | "completed";
};
