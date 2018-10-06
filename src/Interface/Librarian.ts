import { IPerson } from "./IPerson";

export interface ILibrarian extends IPerson {
  department: string;
  assistCustomer: (custName: string) => void;
}
