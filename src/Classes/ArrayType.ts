import { Category } from './Enum'

interface IBooks {
    title: string;
    author: string;
    publisher: string;
    available: boolean;
    category: Category
}

class Book implements IBooks {
    title: string;
    author: string;
    publisher: string;
    available: boolean;
    category: Category;
}

function GetAllBooks(): Book[] {
    let books = [
        { title: "Fundamentals of Wavelets", author: "Goswami, Jaideva", publisher: "Wiley", category: Category.Biography, available: true },
        { title: "Data Smart", author: "Foreman, John", publisher: "Wiley", category: Category.Biography, available: false },
        { title: "God Created the Integers", author: "Hawking, Stephen", publisher: "Penguin", category: Category.Fiction, available: true },
        { title: "Superfreakonomics", author: "Dubner, Stephen", publisher: "HarperCollins", category: Category.Fiction, available: true },
        { title: "Data Scientists at Work", author: "Sebastian Gutierrez", publisher: "Apress", category: Category.Poetry, available: false }
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

const titles = getBookTitleByCategory(Category.Fiction);
for(let title of titles){
    console.log(title);
}


function getBookTitleByCategory(category: Category): Array<string> {
    
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