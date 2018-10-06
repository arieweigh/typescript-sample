import { Book } from "./Classes/Book";
import { Category } from "./Common/Constants";
import { Person } from "./Classes/Person";
import { Librarian } from "./Classes/Librarian";
import { Author } from "./Classes/Author";
import { ReferenceItem, Encyclopedia, Journal } from "./Classes/ReferenceItem";
export { ReferenceItem, Encyclopedia, Journal } from './Classes/ReferenceItem'

class Startup {
  public static main(): number {   
      let lib: Librarian = new Librarian();
      lib.assistCustomer("Sample Test");
    return 0;
  }

  PrintBook(book: Book): void {
    console.log(book.title + " by " + book.author);
  }

  GetAllBooks(): Book[] {
    let books = [
      {
        id: 1,
        title: "Fundamentals of Wavelets",
        author: "Goswami, Jaideva",
        publisher: "Wiley",
        category: Category.Biography,
        available: true
      },
      {
        id: 2,
        title: "Data Smart",
        author: "Foreman, John",
        publisher: "Wiley",
        category: Category.Biography,
        available: false
      },
      {
        id: 3,
        title: "God Created the Integers",
        author: "Hawking, Stephen",
        publisher: "Penguin",
        category: Category.Fiction,
        available: true
      },
      {
        id: 4,
        title: "Superfreakonomics",
        author: "Dubner, Stephen",
        publisher: "HarperCollins",
        category: Category.Fiction,
        available: true
      },
      {
        id: 5,
        title: "Data Scientists at Work",
        author: "Sebastian Gutierrez",
        publisher: "Apress",
        category: Category.Poetry,
        available: false
      }
    ];

    return books;
  }
}

let myBook: Book = {
  id: 5,
  title: "Data Scientists at Work",
  author: "Sebastian Gutierrez",
  publisher: "Apress",
  category: Category.Poetry,
  available: false,
  markDemaged: (reason: string) => {
    console.log("Marked");
  }
};

let ref: ReferenceItem  = new ReferenceItem("Nafly", 1982);
ref.printItem();

let enc: Encyclopedia = new Encyclopedia("Nafly", 2018, "Second");
enc. 

Startup.main();
