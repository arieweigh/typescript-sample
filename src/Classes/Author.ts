import { IAuthor } from "../Interface/IAuthor";

class Author implements IAuthor {
  name: string;
  email: string;
  numOfBookPublished: number;
}

export { Author };
