"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Common/Constants");
var Librarian_1 = require("./Classes/Librarian");
var ReferenceItem_1 = require("./Classes/ReferenceItem");
var ReferenceItem_2 = require("./Classes/ReferenceItem");
exports.ReferenceItem = ReferenceItem_2.ReferenceItem;
exports.Encyclopedia = ReferenceItem_2.Encyclopedia;
exports.Journal = ReferenceItem_2.Journal;
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        var lib = new Librarian_1.Librarian();
        lib.assistCustomer("Sample Test");
        return 0;
    };
    Startup.prototype.PrintBook = function (book) {
        console.log(book.title + " by " + book.author);
    };
    Startup.prototype.GetAllBooks = function () {
        var books = [
            {
                id: 1,
                title: "Fundamentals of Wavelets",
                author: "Goswami, Jaideva",
                publisher: "Wiley",
                category: Constants_1.Category.Biography,
                available: true
            },
            {
                id: 2,
                title: "Data Smart",
                author: "Foreman, John",
                publisher: "Wiley",
                category: Constants_1.Category.Biography,
                available: false
            },
            {
                id: 3,
                title: "God Created the Integers",
                author: "Hawking, Stephen",
                publisher: "Penguin",
                category: Constants_1.Category.Fiction,
                available: true
            },
            {
                id: 4,
                title: "Superfreakonomics",
                author: "Dubner, Stephen",
                publisher: "HarperCollins",
                category: Constants_1.Category.Fiction,
                available: true
            },
            {
                id: 5,
                title: "Data Scientists at Work",
                author: "Sebastian Gutierrez",
                publisher: "Apress",
                category: Constants_1.Category.Poetry,
                available: false
            }
        ];
        return books;
    };
    return Startup;
}());
var myBook = {
    id: 5,
    title: "Data Scientists at Work",
    author: "Sebastian Gutierrez",
    publisher: "Apress",
    category: Constants_1.Category.Poetry,
    available: false,
    markDemaged: function (reason) {
        console.log("Marked");
    }
};
var ref = new ReferenceItem_1.ReferenceItem("Nafly", 1982);
ref.printItem();
var enc = new ReferenceItem_1.Encyclopedia("Nafly", 2018, "Second");
enc.
    Startup.main();
//# sourceMappingURL=main.js.map