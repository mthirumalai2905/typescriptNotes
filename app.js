// Basic Types
// Primitive types (number, string, boolean)
// Arrays
// Tuples
// Enums
// Any, Unknown, Void, Null, Undefined, Never
var a = [1, 2, 3, 4, 5, 6];
var b = a; // mera ghar tera he 
// but not legal contract 
// Two Types of Datatypes - (Basic Data Type) Primitive (Reference Data Type) Non-Primitive
// always use let and const for varible namings 
var c = 12;
// arrays of everything
var arer = [1, "Thiru", true, {}];
// array of numbers
var arr = [1, 2, 3, 4, 5];
// Now here comes tuples
var brr = ["Thiru", 22];
// ENUMS - ENUMERATION
var userRoles;
(function (userRoles) {
    userRoles["ADMIN"] = "admin";
    userRoles["GUEST"] = "guest";
    userRoles["SUPER_ADMIN"] = "super_admin";
})(userRoles || (userRoles = {}));
var statusCodes;
(function (statusCodes) {
    statusCodes["INFORMATION"] = "status - 100";
    statusCodes["SUCCESS"] = "status - 200";
    statusCodes["REDIRECTION"] = "status - 300";
    statusCodes["CLIENTERROR"] = "status - 400";
    statusCodes["SERVERERROR"] = "status - 500";
})(statusCodes || (statusCodes = {}));
var aa;
aa = 23;
var aaa; // if not data types then it's any data type
var d;
d = 12;
d = "Sdefsd";
// d.toLowerCase(); // can't apply since its of unknown type
// if we want to use this then have to do a type check
if (typeof d == "string") {
    d.toLowerCase();
}
// yes done 
var ssss = null; // Let's say we search for some user wiht particular constraints if we dont find that then the db reocrds give us a null
var adsfa; // ya toh string he yafir null he
var afads; // not defined hence ( undefined ) 
// // function abcasde(): never{
//     while(true){}
// }
// abcasde(); // function of type never since its an infinite loop
// console.log("Will i get executed");
// TYPE INFERENCE
var adfsagrw = 12; // value ko dekar ts khudse he infer kare ya samaj le automatically 
// type annotations " : "
var z = "Zebra";
// object can be said to be implementing the user interface
function getDataOfUser(obj) {
}
getDataOfUser({ name: "Thiru", email: "luffy@gmail.com", password: "luffyqwerty" });
var onepiece = "goated";
var num;
function abcde(a) {
    a.getDetails("Thiru");
}
// Type and Interface kinda looks similar 
// we can merge interface
// we can't merge types
// interface - shape, strucuturing the object
// types - to interesect, union and all
// INTRODUCTION TO CLASSES AND OBJECTS 
var Device = /** @class */ (function () {
    function Device() {
        this.name = "lg";
        this.price = 12000;
        this.category = "digital";
    }
    return Device;
}());
var d1 = new Device(); // new device in the heap
var d2 = new Device(); // same reference
var Bottle = /** @class */ (function () {
    function Bottle() {
        this.radius = 120;
        this.price = 100;
        this.color = "white";
    }
    return Bottle;
}());
var b1 = new Bottle(); // new Bottle in the heap
console.log(b1);
// CONSTRUCTORS
var BottleMaker = /** @class */ (function () {
    function BottleMaker(name, price) {
        this.name = name;
        this.price = price;
    }
    return BottleMaker;
}());
var b11 = new BottleMaker("Milton", 1500);
var HumanMaker = /** @class */ (function () {
    function HumanMaker(name, isHandsome, isSmart) {
        this.age = 1;
    }
    return HumanMaker;
}());
var sara = new HumanMaker("Sarah Tancredi", true, true);
console.log(sara);
// Another way of doing this 
// we can initialize the constructor in a single line or just our simple java way old Skool
var Music = /** @class */ (function () {
    function Music(name, artist, thumbnail, length, free) {
        this.name = name;
        this.artist = artist;
        this.thumbnail = thumbnail;
        this.length = length;
        this.free = free;
    }
    return Music;
}());
var sunflower = new Music("sunflower", "post malone", "spotify.png", 3, true);
console.log(sunflower);
