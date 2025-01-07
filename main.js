// Declaration Function
function sum(a, b) {
	return a + b;
}

console.log(sum(2, 3));

// Expression Function
const sum1 = function (a, b) {
	return a + b;
};

console.log(sum1(3, 4));

// Arrow Function
const sum2 = (a, b) => {
	return a + b;
};

console.log(sum2(4, 5));

// Arrow Function Shorthand
// Without return and {}
const sum3 = (a, b) => a + b;
console.log(sum3(5, 6));

// Just have one parameter
const double = (a) => a * 2;
console.log(double(4));
