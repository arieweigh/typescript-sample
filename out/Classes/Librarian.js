"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Librarian = (function () {
    function Librarian() {
    }
    Librarian.prototype.assistCustomer = function (custName) {
        console.log(this.name + " is assisting " + custName);
    };
    return Librarian;
}());
exports.Librarian = Librarian;
