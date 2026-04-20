export type Client = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "pending";
  segment: "corporate" | "family" | "individual";
  lastContact: string;
};
