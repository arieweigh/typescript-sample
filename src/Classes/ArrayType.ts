interface IBooks {
    title: string;
    author: string;
    publisher: string;
    available: boolean;
}

class Book implements IBooks {
    title: string;
    author: string;
    publisher: string;
    available: boolean;
}

function GetAllBooks(): Book[] {
    let books = [
        { title: "Fundamentals of Wavelets", author: "Goswami, Jaideva", publisher: "Wiley", available: true },
        { title: "Data Smart", author: "Foreman, John", publisher: "Wiley", available: false },
        { title: "God Created the Integers", author: "Hawking, Stephen", publisher: "Penguin", available: true },
        { title: "Superfreakonomics", author: "Dubner, Stephen", publisher: "HarperCollins", available: true },
        { title: "Data Scientists at Work", author: "Sebastian Gutierrez", publisher: "Apress", available: false }
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

const allBooks : Book[] = GetAllBooks();
allBooks.push({title: "Statistical Decision Theory", author: "Pratt, John", publisher: "MIT Press", available: true});
LogFirstAvailable(allBooks)