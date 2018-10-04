"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category;
(function (Category) {
    Category[Category["Biography"] = 1] = "Biography";
    Category[Category["Poetry"] = 2] = "Poetry";
    Category[Category["Fiction"] = 3] = "Fiction";
})(Category || (Category = {}));
exports.Category = Category;
var favouriteCat = Category.Biography;
var names = ["Nafly", "Chinthaka", "Marlon", "Sherin"];
var age = [15, 25, 79, 80];
var anyArray = [42, true, "Banana"];
var myTuples = [25, 'Truck', 'Car'];
var item1 = myTuples[0];
var item2 = myTuples[1];
myTuples[0] = 100;
myTuples[1] = "JavaScript";
//# sourceMappingURL=Enum.js.map