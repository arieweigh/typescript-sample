import { Category } from './Enum'

interface IBooks {
    id: number;
    title: string;
    author: string;
    publisher: string;
    available: boolean;
    category: Category
}

class Book implements IBooks {
    id: number;
    title: string;
    author: string;
    publisher: string;
    available: boolean;
    category: Category;
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
}*/


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