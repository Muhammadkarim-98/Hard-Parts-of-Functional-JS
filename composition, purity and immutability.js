// COMPOSITION FUNCTIONS 👇🏼
// CHAINING ORDINARY FUNCTIONS
const multiplyBy5 = (x) => x * 5;
const add3 = (x) => x + 3;
const divideBy2 = (x) => x / 2;

const initialResult = multiplyBy5(25);
const nextStep = add3(initialResult);
const finalStep = divideBy2(nextStep); // 64
// NOW THIS IS PRETTY UNREADABLE THOUGH
const result3 = divideBy2(add3(multiplyBy5(25))); // 64

//👉 REDUCE AS THE MOST VERSATILE FUNCTION IN FUNCTIONAL PROGRAMMING 👈🏻
const reduce2 = (array, howToCombine, buildingUp) => {
	for (let i = 0; i < array.length; i++) {
		buildingUp = howToCombine(buildingUp, array[i]);
	}
	return buildingUp;
};

const runFunctionOnInput = (input, fn) => {
	return fn(input);
};
const output = reduce2([multiplyBy5, add3, divideBy2], runFunctionOnInput, 11); // 29

// IMMUTABILITY
const array3 = [1, 2, 3, 4, 5];
const multiplyBy3 = (num) => num * 3;
// map returns brand new array
const result4 = array3.map(multiplyBy3); // [ 3, 4, 5, 6 ]
const newResult4 = array3.map(multiplyBy3); // [ 3, 4, 5, 6 ]
