/* Question 3 */

// 1
function palindrome(str) {
	return str.split("").reverse().join("") === str;
}

// 2
function isEven(num) {
	if (typeof num !== "number") throw new Error("expected a number");
	return num % 2 === 0;
}

// 3
function max(arr = []) {
	if (!arr.length) throw new Error("expected an array");
	return Math.max(...arr);
}

// 4
function hourToSecond(hours) {
	return hours * 3600;
}

// 5
function pow(base, pow) {
	let result = 1;
	for (let i = 0; i < pow; i++) {
		result *= base;
	}
	return result;
}
function play() {
	console.log("palindrome: ");
	console.log(`eye is${palindrome("eye") ? " " : " not "}a palindrome`);
	console.log(`welcome is${palindrome("welcome") ? " " : " not "}a palindrome`);
	console.log("\n" + "#".repeat(50) + "\n");
	console.log("isEven: ");
	console.log(`1 is ${isEven(1) ? "even" : "odd"}`);
	console.log(`2 is ${isEven(2) ? "even" : "odd"}`);
	console.log("\n" + "#".repeat(50) + "\n");
	console.log("largest in array: ");
	console.log(`Max in [10 , 100 , 50 , 4] => ${max([10, 100, 50, 4])}`);
	console.log("\n" + "#".repeat(50) + "\n");
	console.log("Hours to seconds conversion: ");
	console.log(`There are ${hourToSecond(1)} seconds in an hour`);
	console.log(`There are ${hourToSecond(3)} seconds in 3 hours`);
	console.log("\n" + "#".repeat(50) + "\n");
	console.log("Power of a number using loop: ");
	console.log(`2^4 => ${pow(2, 4)}`);
}

play();
