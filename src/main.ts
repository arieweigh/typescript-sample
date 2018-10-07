import { Book } from "./Classes/Book";
import { Category } from "./Common/Constants";
import { Person } from "./Classes/Person";
import { Librarian } from "./Classes/Librarian";
import { Author } from "./Classes/Author";
import { ReferenceItem, Encyclopedia, Journal } from "./Classes/ReferenceItem";
import { Magazine } from "./Interface/IMagazine";
import Shelf from './Classes/Shelf';
import * as lodash from 'lodash';

class Startup {
  public static main(): number {
    //let lib: Librarian = new Librarian();
    //lib.assistCustomer("Sample Test");
    
    console.log(lodash.snakeCase("This is sample method"));
    console.log(lodash.round(1258.587, 2));
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

let myBook: Book[] = [
  {
    id: 5,
    title: "Data Scientists at Work",
    author: "Sebastian Gutierrez",
    publisher: "Apress",
    category: Category.Poetry,
    available: false
  },
  {
    id: 5,
    title: "Data Scientists at Work",
    author: "Sebastian Gutierrez",
    publisher: "Apress",
    category: Category.Poetry,
    available: false
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
let bookShelf: Shelf<Book> = new Shelf<Book>();
myBook.forEach(book => bookShelf.Add(book));
let firstBook: Book = bookShelf.GetFirst();

let myMag: Magazine[] = [
  {   
    title: "Data Scientists at Work",    
    publisher: "Apress"
  },
  {
   
    title: "Data Scientists at Work",    
    publisher: "Apress"
   
  },
  {    
    title: "Data Scientists at Work",    
    publisher: "Apress"   
  }
];
let magShelf: Shelf<Magazine> = new Shelf<Magazine>();
myBook.forEach(mag => magShelf.Add(mag));
let firstMag: Magazine = magShelf.GetFirst();

/*
//Generic methods calling
myBook = Utility.Purge<Book>(myBook);

let names: string[] = ["Nafly", "Naja", "Aahil", "Zuha", "Zaid", "Yazid"];
names = Utility.Purge<string>(names);

let numbers: number[] = [82, 85, 75, 70, 65];
numbers = Utility.Purge<number>(numbers);*/

Startup.main();
