// // Declaration Function
// function sum(a, b) {
// 	return a + b;
// }

// console.log(sum(2, 3));

// // Expression Function
// const sum1 = function (a, b) {
// 	return a + b;
// };

// console.log(sum1(3, 4));

// // Arrow Function
// const sum2 = (a, b) => {
// 	return a + b;
// };

// console.log(sum2(4, 5));

// // Arrow Function Shorthand
// // Without return and {}
// const sum3 = (a, b) => a + b;
// console.log(sum3(5, 6));

// // Just have one parameter
// const double = (a) => a * 2;
// console.log(double(4));

// ==========================================================

// Hoisting - Give the declration to the first scope

// With Declaration Function
greeting();

function greeting() {
	console.log("Hello World");
}

// With var
console.log(hello);

var hello = "xin chao";
/*
	Converted: 
	var hello;
	console.log(hello); => undefined
*/

// With let, const

// console.log(xinchao); // => error
// let xinchao = 'xin chao';

// // let, const will save in TDZ (Temporal Dead Zone)

// // Converted:
// let xinchao = 'xin chao';
// console.log(xinchao) // => xinchao

// Why var, let, const have hoisting but create expression, arrow function is not true
/*
	let, const will dive into TDZ

	but what about 'varing'

	greeting();
	var greeting = function () {
		console.log('xinchao'); => error
	}
	
	Converted:
	var greeting;

	greeting();

	greeting = function() {
		console.log('xinchao');
	}

	Not a function
*/

// Example

// testGreeting();

// var testGreeting = function () {
// 	console.log("xin chao");
// };

// ==================================================

// How to read code
function run() {
	return sum(2, 3);

	function sum(a, b) {
		return a + b;
	}
}

const result = run();
console.log(result);

/*
	1. function run ()
	2. const result = run()
	3. function sum(a, b)
	4. return sum(2, 3)
*/
