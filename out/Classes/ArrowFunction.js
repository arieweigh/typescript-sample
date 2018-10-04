"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ArrayType_1 = require("./ArrayType");
var Enum_1 = require("./Enum");
var allBooks = ArrayType_1.GetAllBooks();
var fictionBooks = ArrayType_1.GetBookTitleByCategory(Enum_1.Category.Fiction);
fictionBooks.forEach(function (val, idx, arr) { return console.log(idx + '-' + val); });
console.log(GetBookByID(4)[0].title);
function GetBookByID(id) {
    return ArrayType_1.GetAllBooks().filter(function (book) { return book.id === id; });
}
function CreateCustomerId(name, id) {
    return name + id;
}
var IdGenerator;
IdGenerator = CreateCustomerId;
IdGenerator("Nafly", 10);
IdGenerator = function (name, id) { return id + name; };
IdGenerator("Nafly", 10);
function GetBooksReadForCount(name) {
    var bookIds = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        bookIds[_i - 1] = arguments[_i];
    }
}
GetBooksReadForCount("Name", 1);
GetBooksReadForCount("Name", 1, 2, 3);
function CreateCustomer(name, age, city) {
}
function CreateCustomerTwo(name, age, city) {
    if (age === void 0) { age = 25; }
    if (city === void 0) { city = 'Colombo'; }
}
//# sourceMappingURL=ArrowFunction.js.map