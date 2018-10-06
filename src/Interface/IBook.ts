import { Category } from "../Common/Constants";
import { IDamageLogger } from "./IDamageLogger";

interface IBook {
  id: number;
  title: string;
  author: string;
  publisher: string;
  category: Category;
  available: boolean;
  pages?: number;
  markDemaged?: IDamageLogger;
}

export { IBook };
