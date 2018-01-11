
// Convert the following block of code to ES2015

// var person = {
//     fullName: "Harry Potter",
//     sayHi: function(){
//         setTimeout(function(){
//             console.log("Your name is " + this.fullName)
//         }.bind(this),1000)
//     }
// }

class person {
	constructor(){
		this.fullName = "Harry Potter";
	}

	sayHi() {
		setTimeout(function(){
			console.log(`Your name is ${this.fullName}`)}, 1000);
	}
}


// var name = "Josie"
// console.log("When " + name + " comes home, so good")

let name = "Josie";
console.log(`when ${name} comes home, so good`);


// var DO_NOT_CHANGE = 42;
// DO_NOT_CHANGE = 50; // stop me from doing this!

const DO_NOT_CHANGE = 42;
DO_NOT_CHANGE = 50;


// var arr = [1,2]
// var temp = arr[0]
// arr[0] = arr[1]
// arr[1] = temp

let [a, b] = [1, 2];
[a, b] = [b, a];


// function double(arr){
//     return arr.map(function(val){
//         return val*2
//     });
// }

let double = arr => arr.map(val => val * 2);

// var obj = {
//     numbers: {
//         a: 1,
//         b: 2
//     } 
// }

// var a = obj.numbers.a;
// var b = obj.numbers.b;

class obj {
	constructor(){
		this.a = 1,
		this.b = 2
	}
}

let a = obj.a;
let b = obj.b;

function add(a,b){
    if(a === 0) a = 0
    else {
        a = a || 10    
    }
    if(b === 0) b = 0
    else {
        b = b || 10    
    }
    return a+b
}


let add = (a = 10, b = 10) => a + b;


// Research the following functions - what do they do?

// Array.from
// Creates an array from array like objects or iterables.

// Object.assign
// Copies all enumerable properities from one or more source objects to the target object

// Array.includes
// Returns a boolean indicating if the element passed in is in the array it was called on

// String.startsWith 
// Determines if a string starts with another string, can be starting from a certain position
















