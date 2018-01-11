

// What is a regular expression? What are some use cases of regular expressions?
// A regular expression is a sequence of characters that form a pattern. Regular expressions can be used to validate text input in forms, also to search, find, and replace text in files. 

// What are the two ways to create regular expression in JavaScript?
// As a part of a regex function str.match(/a/g); or with the new RegExp() function.

// What is a flag?
// A flag is an indicator that modifies how the regex functions, for example a 'g' after a regex will perform a global search and not return just the first match.

// What is the difference between ?, +, *?
// ? returns only if 0 or 1 instances are found, + returns if one or more are found, * if zero or more are found.

// What is the difference between [] and {}?
// [] can be used to define a set or range of characters, {} is used to specify a quanity.

// What does the search function do?
// The search function returns the first index of the regex if found or -1 if not.

// What do the exec and test functions do (these functions exist on the RegExp prototype)?
// The exec function executes the regex and returns an array of data, like where it was found and what was found. Test will search for a match and return true if found.

// countNumbers - Write a function called countNumbers which accepts a string of numbers and returns the count of numbers between 0 and 9.

let countNumbers = (str) => {
	let count = str.match(/[0-9]/g);
	return count ? count.length : 0;
};

// let countNumbers = function(str){
// 	let count = str.match(/[0-9]/g);

// 	if (count) {
// 		return count.length;
// 	}
// 	return 0;
// }

console.log(countNumbers("321321dsadsa930-29d132b13a")); // 16
console.log(countNumbers("this is so wonderful")); // 0
console.log(countNumbers("this is so 1234")); // 4

// capitalSentence - Write a function called capitalSentence which accepts a string and returns another string with all the capital letters joined together.

let capitalSentence = (str) => str.match(/[A-Z]/g).join('');

console.log(capitalSentence("The Cat In The Hat")); // "TCITH"
console.log(capitalSentence("And I Think to Myself What a Wonderful World")); // "AITMWWW"

// isValidPassword - Write a function caled isValidPassword, which accepts a string. If the string is longer than 7 characters and includes at least one special character (!,@,#, or $) , the function should return true. Otherwise, return false

let isValidPassword = (str) => /.{7,}[!@#$]/g.test(str) ? true : false;

console.log(isValidPassword('TacoCat')); // false
console.log(isValidPassword('foo')); // false
console.log(isValidPassword('awesome!')); // true
console.log(isValidPassword('win!@')); // false






