"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enum_1 = require("./Enum");
var Book = (function () {
    function Book() {
    }
    return Book;
}());
function GetAllBooks() {
    var books = [
        { title: "Fundamentals of Wavelets", author: "Goswami, Jaideva", publisher: "Wiley", category: Enum_1.Category.Biography, available: true },
        { title: "Data Smart", author: "Foreman, John", publisher: "Wiley", category: Enum_1.Category.Biography, available: false },
        { title: "God Created the Integers", author: "Hawking, Stephen", publisher: "Penguin", category: Enum_1.Category.Fiction, available: true },
        { title: "Superfreakonomics", author: "Dubner, Stephen", publisher: "HarperCollins", category: Enum_1.Category.Fiction, available: true },
        { title: "Data Scientists at Work", author: "Sebastian Gutierrez", publisher: "Apress", category: Enum_1.Category.Poetry, available: false }
    ];
    return books;
}
function LogFirstAvailable(allBooks) {
    var firstAvailable = '';
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books:" + allBooks.length);
    console.log("Frist Available:" + firstAvailable);
}
var titles = getBookTitleByCategory(Enum_1.Category.Fiction);
for (var _i = 0, titles_1 = titles; _i < titles_1.length; _i++) {
    var title = titles_1[_i];
    console.log(title);
}
function getBookTitleByCategory(category) {
    console.log("Getting books in category:" + Enum_1.Category[category]);
    var allBooks = GetAllBooks();
    var filterredTitle = [];
    for (var _i = 0, allBooks_2 = allBooks; _i < allBooks_2.length; _i++) {
        var currentBook = allBooks_2[_i];
        if (currentBook.category === category) {
            filterredTitle.push(currentBook.title);
        }
    }
    return filterredTitle;
}
//# sourceMappingURL=ArrayType.js.map