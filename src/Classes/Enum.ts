enum Category {
    Biography = 1,
    Poetry = 2,
    Fiction = 3
}

let favouriteCat: Category = Category.Biography;
//console.log(favouriteCat);
//console.log(Category[favouriteCat])

//Arrays
let names: string[] = ["Nafly", "Chinthaka", "Marlon", "Sherin"] 
let age: Array<number> = [15, 25, 79, 80]
let anyArray: any[] = [42, true, "Banana"]

//Tuples
let myTuples: [number, string, string] = [25, 'Truck', 'Car'];

let item1: number = myTuples[0];
let item2: string = myTuples[1];

myTuples[0] = 100;
myTuples[1] = "JavaScript";

export {Category};
