import { GetAllBooks, Book, GetBookTitleByCategory } from './ArrayType'
import { Category } from './Enum';

//Get all the available books
var allBooks: Book[] = GetAllBooks();
const fictionBooks = GetBookTitleByCategory(Category.Fiction);
fictionBooks.forEach((val, idx, arr) => console.log(idx + '-' + val))
console.log(GetBookByID(4)[0].title);

function GetBookByID(id: number) {
    return GetAllBooks().filter(book => book.id === id);
}

//Arrow fundtion
function CreateCustomerId(name: string, id: number): string {
    return name + id;
}

let IdGenerator: (name: string, num: number) => string;
IdGenerator = CreateCustomerId;
IdGenerator("Nafly", 10);

IdGenerator = (name: string, id: number) => { return id + name };
IdGenerator("Nafly", 10);

//Rest parameters 
function GetBooksReadForCount(name: string, ...bookIds: number[]) {
}

GetBooksReadForCount("Name", 1);
GetBooksReadForCount("Name", 1, 2, 3);

//Optional Prameter 
function CreateCustomer(name: string, age?: number, city?: string): void {

}

function CreateCustomerTwo(name: string, age: number = 25, city: string = 'Colombo'): void {
}

//Function overload 
/*
function GetBookTitles(author: string): string[];
function GetBookTitles(available: boolean): string[];
function GetBookTitles(property: any): string[]{
    GetAllBooks();
}

GetBookTitles('xxxx');
GetBookTitles(1);
GetBookTitles(true);*/