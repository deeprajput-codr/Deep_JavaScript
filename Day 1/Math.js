//Number in JAVASCRIPT
console.log("Code will Run");
// let a =98.5;
// console.log(a);

/* Exponential Notation (e): A shorthand for writing
very large or very small numbers.*/


// let billion = 1e8;  //1 followed by 9 zero ->100000000
// let a = 8e4;
// console.log(billion , a);

// let tiny = 5e-6; // 5/10^6 -> 0.0000005
// console.log(tiny);

// 3. The "Gotcha": Floating-Point Inaccuracy

// console.log(0.1 + 0.2); // Output 0.30000000000000004
// console.log(0.1 + 0.2 == 0.3); // This statement false
// to solve this problem to use .tofixed();

// let a = 0.1;
// let b = 0.2;
// let c = 0.3;
// console.log(c.toFixed(1)); // now  0.1 + 0.2 = 0.3

// 4. Special Numeric Values

// console.log(1 / 0);          // Infinity
// console.log(-1 / 0);         // -Infinity
// console.log(typeof Infinity); // "number"
// console.log("hello" /2); // NaN (Not a Number)
// console.log(Math.sqrt(-1));  // NaN
// console.log(typeof NaN);     // "number"

// 5. Important Number Properties and Methods


// console.log(Number.MAX_VALUE); // The largest positive number that can be represented (~1.8e+308).(1.7976931348623157e+308)
// console.log(Number.MIN_VALUE); //The smallest positive number closest to zero.(5e-324)
// console.log(Number.MAX_SAFE_INTEGER); // : The largest integer that can be safely represented without losing precision (2^53 - 1).(9007199254740991)
// console.log(Number.MIN_SAFE_INTEGER); // :The smallest integer that can be safely represented without losing precision (-2^53 - 1).(-9007199254740991)
// console.log(Number.EPSILON);//:  The smallest interval between two representable numbers. Used for floating-point comparisons.


// Formatting and Converting Numbers

// 1). toString(base): Converts a number to a string. You can optionally provide a base (from 2 to 36)

// let num = 250;
// console.log(num.toString()); //  "250"  (base 10 - default) -> Type Of String
// console.log(num.toString(16)); // "fa"  (base 16 - hexadecimal)
// console.log(num.toString(2)); // "11111010"   (base 2 - binary)

// 2)..toFixed(digits): Formats a number to a fixed number of decimal places and returns a string. Useful for formatting currency

// let price = 19.991234;
// console.log(price.toFixed(2)); // "19.99"
 
// 3). .toPrecision(digits): Formats a number to a specified total number of significant digits and returns a string.

// let n = 123.456;
// console.log(n.toPrecision(4)); // "123.5" (4 significant digits)


// . The Math Object

// A) Constants: Math.PI, Math.E

// console.log(Math.PI); // return Pi value -> 3.141592653589793
// console.log(Math.E); // return  2.718281828459045

// B) Rounding:

// let n = 25.6;

// console.log(Math.round(n)); //Standard rounding to the nearest integer. -> 26
// console.log(Math.floor(n)); // Rounds down to the nearest integer. -> 25
// console.log(Math.ceil(n)); // Rounds up to the nearest integer. -> 26
// console.log(Math.trunc(n)); // Removes the decimal part, leaving only the integer (truncates toward zero).

// C) Other Common Functions:

// let n = 7.7;

// console.log(Math.abs(n)); //Absolute value.
// console.log(Math.pow(5 , 2)); //  x to the power of y (same as x ** y).
// console.log(Math.sqrt(5)); // Square root.
// console.log(Math.max(5 , 52, 464 , 22)); // Returns the largest of the given numbers.
// console.log(Math.min(5 , 52, 464 , 22)); // Returns the smallest of the given numbers.

// D) he Core Tool: Math.random()

// Range of Math.random -> returns a random floating-point number between 0 (inclusive) and 1 (exclusive).
// Range: [0, 1)
// console.log(Math.random());

// get a random number between 1 to 10;

// Formula -> Math.floor(Math.random() * (max - min + 1)) + min

//  console.log(Math.floor(Math.random() * (10 - 1 + 1)) + 1)


// ### The General-Purpose Function

// By replacing the specific numbers `10` and `1` with `max` and `min`, we get our general-purpose formula.

/*

      Right way to use MATH>RANDOM()


 */
 
// function getRandomInt(min, max) {
//   // 1. Calculate the number of possible outcomes (the size of our range).
//   const range = max - min + 1;

//   // 2. Scale up Math.random() to create a float in the range [0, range).
//   const scaled = Math.random() * range;

//   // 3. Round down to get an integer in the range [0, range-1].
//   const floored = Math.floor(scaled);

//   // 4. Shift the range up to [min, max] by adding the minimum value.
//   const result = floored + min;

//   return result;
// }

// // Example usage:
// console.log("Random number between 1 and 10:", getRandomInt(1, 10));
// console.log("Random number between 50 and 100:", getRandomInt(50, 100));
// console.log("Random dice roll (1 to 6):", getRandomInt(1, 6));