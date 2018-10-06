import { Category } from "../Common/Constants";

interface IBooks {
  id: number;
  title: string;
  author: string;
  publisher: string;
  category: Category;
  available: boolean;
}

export { IBooks };
