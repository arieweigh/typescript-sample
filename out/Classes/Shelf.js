"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shelf = (function () {
    function Shelf() {
        this._item = new Array();
    }
    Shelf.prototype.Add = function (newItem) {
        this._item.push(newItem);
    };
    Shelf.prototype.GetFirst = function () {
        return this._item[0];
    };
    Shelf.prototype.Find = function (title) {
        return this._item.filter(function (item) { return item.title === title; })[0];
    };
    Shelf.prototype.GetTitles = function () {
        this._item.forEach(function (item) { return console.log(item.title); });
    };
    return Shelf;
}());
exports.default = Shelf;
