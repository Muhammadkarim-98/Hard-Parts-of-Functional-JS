// BISMILLAH
//Callback function
const copyArrayAndManipulate = (array, instructions) => {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instructions(array[i]));
	}
	return output;
};
const multiplyBy2 = (input) => {
	return input * 2;
};
const result = copyArrayAndManipulate([1, 2, 3], multiplyBy2); // [ 2, 4, 6 ]

// Using function anonymously
const copyArrayAndManipulate2 = (array, instractions) => {
	const output = [];
	for (let i = 0; i < array.length; i++) {
		output.push(instractions(array[i]));
	}
	return output;
};
const result2 = copyArrayAndManipulate2([1, 2, 3], (input) => input * 2);
console.log(result2);
// This function is known as reduce - it can handle a remarkable range of tasks
const reduce = (array, howToCombine, buildingUp) => {
	for (let i = 0; i < array.length; i++) {
		buildingUp = howToCombine(buildingUp, array[i]);
	}
	return buildingUp;
};
const add = (a, b) => a + b;
const summed = reduce([1, 2, 3], add, 0);
console.log(summed);

// The provided code 👆🏻 defines a reduce function that mimics the behavior of the Array.prototype.reduce method in JavaScript.The reduce function takes three parameters:
// array: The array to be reduced.
// 	howToCombine: A callback function that specifies how to combine the elements.
// 		buildingUp: The initial value for the accumulator.
// Here is the step - by - step breakdown of how the code works:

// The reduce function is defined.It iterates over the array using a for loop.
// On each iteration, it updates buildingUp by applying the howToCombine function to the current buildingUp value and the current element of the array(array[i]).
// After the loop finishes, the function returns the final value of buildingUp.
// The add function is defined to take two parameters(a and b) and return their sum.

// The reduce function is then called with the array[1, 2, 3], the add function as the howToCombine function, and 0 as the initial value for buildingUp.

// 	Here's a step-by-step execution of the reduce call:

// Initial state: buildingUp is 0.
// First iteration(i = 0):
// buildingUp = howToCombine(0, 1) = add(0, 1) = 1.
// Second iteration(i = 1):
// buildingUp = howToCombine(1, 2) = add(1, 2) = 3.
// Third iteration(i = 2):
// buildingUp = howToCombine(3, 3) = add(3, 3) = 6.
// After the loop finishes, buildingUp is 6, which is then returned.

// 	Thus, the final value of summed is 6.

// FILTER METHOD
const array = [1, 2, 3, 4, 5, 6];
const greaterThanTwo = (num) => num > 2;
const filteredArray = array.filter(greaterThanTwo);
console.log(filteredArray); // [ 3, 4, 5, 6 ]

// CHAINING ARRAY METHODS
const array2 = [5, 6, 7, 8, 9, 10, 11];
const greaterThanTwo2 = (num) => num > 6;
const reducer = (a, b) => a + b;
const filteredArray2 = array2.filter(greaterThanTwo2).reduce(reducer, 0);
console.log(filteredArray2); // 45
