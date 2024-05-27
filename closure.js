const functionCreator = () => {
	let counter = 0;
	const add3 = (num) => {
		const result = num + 3;
		return result;
	};
	return add3;
};
const generatorFunc = functionCreator;
const result = generatorFunc(2); // 5

//
const outer = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter++;
	};
	incrementCounter();
};

// 👆🏻 There is a way to run a function outside where it was defined;
const outer2 = () => {
	let counter = 0;
	const incrementCounter = () => {
		counter++;
	};
	return incrementCounter;
};
const newResult = outer2();

// FUNCTION DECORATION
// To add a permanent memory to an existing function we have to create a new function that will run the existing function inside of itself
const oncify = (convertMe) => {
	let counter = 0;
	let output;
	const inner = (input) => {
		if (counter === 0) {
			output = convertMe(input);
			counter++;
			return outer;
		}
		return "Sorry!";
	};
	return inner;
};

const multiplyBy2 = (num) => num * 2;
const oncifiedMultiplyBy2 = oncify(multiplyBy2);
console.log(oncifiedMultiplyBy2(10));
console.log(oncifiedMultiplyBy2(2));

//Simple Function Decorator
// Original function
const multiplyBy3 = (num) => num * 3;

// Decorator function
const logDecorator = (fn) => {
	return function (...args) {
		console.log(`Arguments: ${args}`);
		const result = fn(...args);
		console.log(`Result: ${result}`);
		return result;
	};
};

// Decorating the multiplyBy3 function
const decoratedMultiplyBy3 = logDecorator(multiplyBy3);

// Using the decorated function
decoratedMultiplyBy3(10); // Logs: Arguments: 10, Result: 20

// Partial Application
const multiply = (a, b) => a * b;

function prefillFunction(fn, prefilledValue) {
	const inner = (liveInput) => {
		const output = fn(liveInput, prefilledValue);
		return output;
	};
	return inner;
};

const result2 = prefillFunction(multiply, 2);
const finalResult = result2(5);
console.log(finalResult); // 10
