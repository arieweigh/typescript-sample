/*-import { Category } from "../Common/Constants";

let favouriteCat: Category = Category.Biography;
//console.log(favouriteCat);
//console.log(Category[favouriteCat])

//Arrays
let names: string[] = ["Nafly", "Chinthaka", "Marlon", "Sherin"];
let age: Array<number> = [15, 25, 79, 80];
let anyArray: any[] = [42, true, "Banana"];

//Tuples
let myTuples: [number, string, string] = [25, "Truck", "Car"];

let item1: number = myTuples[0];
let item2: string = myTuples[1];

myTuples[0] = 100;
myTuples[1] = "JavaScript";

import { Category } from '../Common/Constants'

interface IBooks {
    id: number;
    title: string;
    author: string;
    publisher: string;   
    category: Category;
    available: boolean;
}

class Book implements IBooks {
    id: number;
    title: string;
    author: string;
    publisher: string;  
    category: Category;
    available: boolean;
}

function GetAllBooks(): Book[] {
    let books = [
        { id: 1, title: "Fundamentals of Wavelets", author: "Goswami, Jaideva", publisher: "Wiley", category: Category.Biography, available: true },
        { id: 2, title: "Data Smart", author: "Foreman, John", publisher: "Wiley", category: Category.Biography, available: false },
        { id: 3, title: "God Created the Integers", author: "Hawking, Stephen", publisher: "Penguin", category: Category.Fiction, available: true },
        { id: 4, title: "Superfreakonomics", author: "Dubner, Stephen", publisher: "HarperCollins", category: Category.Fiction, available: true },
        { id: 5,  title: "Data Scientists at Work", author: "Sebastian Gutierrez", publisher: "Apress", category: Category.Poetry, available: false }
    ];

    return books;
}

function LogFirstAvailable(allBooks: Book[]): void {

    let firstAvailable: string = '';
    for (let currentBook of allBooks) {
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log("Total Books:" + allBooks.length);
    console.log("Frist Available:" + firstAvailable);
}

//const allBooks: Book[] = GetAllBooks();
//allBooks.push({ title: "Statistical Decision Theory", author: "Pratt, John", publisher: "MIT Press", category: Category.Poetry, available: true });
//LogFirstAvailable(allBooks) 

/*
const titles = GetBookTitleByCategory(Category.Fiction);
for(let title of titles){
    console.log(title);
}


function GetBookTitleByCategory(category: Category): Array<string> {
    
    console.log("Getting books in category:" + Category[category]);
    
    const allBooks: Book[] = GetAllBooks();
    const filterredTitle: string[] = [];

    for (let currentBook of allBooks) {
        if (currentBook.category === category) {
            filterredTitle.push(currentBook.title);
        }
    }

    return filterredTitle;
}

export {GetAllBooks, Book, GetBookTitleByCategory};
*/


/*
import { IPerson } from '../Interface/iPerson'

class Player implements IPerson {
    name: string = "Nafly";
    age?: number;

    //Constructor
    constructor() {
        console.log("New Player instanace created.")
    }

    formatName() {
        return this.name.toUpperCase();
    }

    private result: string[] = [];
    addResult(newResult: string): void {
        this.result.push(newResult);
    }

    updateScoreboard(): void {
        let output: string = '<h2>Scoreboard</h2>';

        //Lopp over all result
        for (let index = 0; index < this.result.length; index++) {
            let res: string = this.result[index];
            output += '<h4>';
            output += res;
            output += '</h4>';
        }
    }
}

class SubPlayer extends Player {
    readonly favoriteEditor: string;

    constructor(editor: string) {
        super();
        console.log("New SubPlayer instanace created.")
        this.favoriteEditor = editor;
    }
}

export { Player, SubPlayer };
*/


/*
let LogName: Function = (message: string) : void => console.log(message);

interface Person {
    age: number,
    name: string,    
    say(): string
}

let mike = {
    age: 25, 
    name:"Mike", 
    say: function() { 
        return "My name is " + this.name + 
               " and I'm " + this.age + " years old!"
    }
}

function sayIt(person: Person) {
    return person.say();
}

console.log(sayIt(mike))

*/


/*
import { GetAllBooks, Book, GetBookTitleByCategory } from './Book'
import { Category } from '../Common/Constants';

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