"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Constants_1 = require("./Common/Constants");
var Shelf_1 = __importDefault(require("./Classes/Shelf"));
var lodash = __importStar(require("lodash"));
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log(lodash.snakeCase("This is sample method"));
        console.log(lodash.round(1258.587, 2));
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
var myBook = [
    {
        id: 5,
        title: "Data Scientists at Work",
        author: "Sebastian Gutierrez",
        publisher: "Apress",
        category: Constants_1.Category.Poetry,
        available: false
    },
    {
        id: 5,
        title: "Data Scientists at Work",
        author: "Sebastian Gutierrez",
        publisher: "Apress",
        category: Constants_1.Category.Poetry,
        available: false
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
var bookShelf = new Shelf_1.default();
myBook.forEach(function (book) { return bookShelf.Add(book); });
var firstBook = bookShelf.GetFirst();
var myMag = [
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
var magShelf = new Shelf_1.default();
myBook.forEach(function (mag) { return magShelf.Add(mag); });
var firstMag = magShelf.GetFirst();
Startup.main();
