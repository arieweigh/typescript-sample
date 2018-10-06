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

