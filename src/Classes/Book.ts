import { Category } from "../Common/Constants";
import { IBook } from "../Interface/IBook";

class Book implements IBook {
  id: number;
  title: string;
  author: string;
  publisher: string;
  category: Category;
  available: boolean;
  markDemaged?: (reason: string) => void;
}

export { Book };
