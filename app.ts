// Basic Types
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never
var a = [1,2,3,4,5,6]
var b = a // mera ghar tera he 
// but not legal contract 
// Two Types of Datatypes - (Basic Data Type) Primitive (Reference Data Type) Non-Primitive
// always use let and const for varible namings 
let c:number = 12;
// arrays of everything
let arer = [1, "Thiru", true, {}]
// array of numbers
let arr: number[] = [1,2, 3,4,5]
// Now here comes tuples
let brr: [string, number] = ["Thiru", 22];
// ENUMS - ENUMERATION
enum userRoles {
    ADMIN = "admin",
    GUEST = "guest",
    SUPER_ADMIN = "super_admin"
}
enum statusCodes{
    INFORMATION = "status - 100",
    SUCCESS = "status - 200",
    REDIRECTION = "status - 300",
    CLIENTERROR = "status - 400",
    SERVERERROR = "status - 500"
}

let aa: number;
aa = 23;

let aaa; // if not data types then it's any data type

let d: unknown;
d = 12;
d = "Sdefsd"

// d.toLowerCase(); // can't apply since its of unknown type
// if we want to use this then have to do a type check
if(typeof d == "string"){
    d.toLowerCase();
}
// yes done 

let ssss = null; // Let's say we search for some user wiht particular constraints if we dont find that then the db reocrds give us a null

let adsfa: string | null; // ya toh string he yafir null he

let afads; // not defined hence ( undefined ) 

// // function abcasde(): never{
//     while(true){}
// }

// abcasde(); // function of type never since its an infinite loop
// console.log("Will i get executed");

// TYPE INFERENCE

let adfsagrw = 12; // value ko dekar ts khudse he infer kare ya samaj le automatically 

// type annotations " : "
let z : string  = "Zebra"

interface User{
    name: string,
    email: string,
    password: string,
    gender?: string
}

// object can be said to be implementing the user interface
function getDataOfUser(obj:User){

}

getDataOfUser({name: "Thiru", email: "luffy@gmail.com", password: "luffyqwerty"});

// EXTENDING INTERFACES

interface User{
    name: string,
    email: string,
    password: string
}

interface Admin extends User{
    admin: boolean
}

// INTERFACE MERGING
 interface Admin{
    name: string
}

interface Admin{
    gender: string
}


/// both admin will be merged then show these two attributes

// TYPE ALIASES
type anime = string

let onepiece : anime = "goated"

type value = string | number | boolean

let num : value;


// INTERSECTION TYPES

type User1 = {
    name: string,
    email: string,
}

type Admin1 = User1 & {
    getDetails(user: string): void;
}

function abcde(a: Admin1){
    a.getDetails("Thiru")
}

// Type and Interface kinda looks similar 

// we can merge interface
// we can't merge types

// interface - shape, strucuturing the object
// types - to interesect, union and all


// INTRODUCTION TO CLASSES AND OBJECTS 

class Device{
    name = "lg";
    price = 12000;
    category = "digital";
}

let d1 = new Device(); // new device in the heap
let d2 = new Device(); // same reference

class Bottle{
    radius= 120;
    price = 100;
    color = "white"
}

let b1 = new Bottle(); // new Bottle in the heap
console.log(b1);