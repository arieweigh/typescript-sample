var Book = (function () {
    function Book() {
    }
    return Book;
}());
function GetAllBooks() {
    var books = [
        { title: "Fundamentals of Wavelets", author: "Goswami, Jaideva", publisher: "Wiley", available: true },
        { title: "Data Smart", author: "Foreman, John", publisher: "Wiley", available: false },
        { title: "God Created the Integers", author: "Hawking, Stephen", publisher: "Penguin", available: true },
        { title: "Superfreakonomics", author: "Dubner, Stephen", publisher: "HarperCollins", available: true },
        { title: "Data Scientists at Work", author: "Sebastian Gutierrez", publisher: "Apress", available: false }
    ];
    return books;
}
function LogFirstAvailable(allBooks) {
    for (var _i = 0, allBooks_1 = allBooks; _i < allBooks_1.length; _i++) {
        var currentBook = allBooks_1[_i];
        var firstAvailable = '';
        if (currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }
    console.log("Total Books:" + allBooks.length);
    console.log("Frist Available:" + firstAvailable);
}
var allBooks = GetAllBooks();
allBooks.push({ title: "Statistical Decision Theory", author: "Pratt, John", publisher: "MIT Press", available: true });
LogFirstAvailable(allBooks);
//# sourceMappingURL=ArrayType.js.map