// String and Date in JAVA SCRIPT//

// ### **1. Introduction: What is a String?**

// A string is a primitive data type in JavaScript used to represent a sequence of characters. 
// Anything you can type—letters, numbers, symbols, punctuation—can be part of a string.
//  It is the primary way we work with textual data.

console.log("COde will run")

// To create String //
// let singleQuoted = 'Hello World';
// let doubleQuoted = "Hello World and 'deep' "; // work only single row
// let templateLiteral = `This is a template literal.`; // Work multiple line 

// //. Core Properties and Concepts

// // A). The .length() Properties

// // let name = "Java Script";
// // console.log(name);
// // console.log(name.length); // give 11

// // B). Zero Based Indexing

// let name = "JavaScript";
// // J  a  v  a  S  c  r  i  p  t
// // 0  1  2  3  4  5  6  7  8  9


// console.log(name[0]); // "J"
// console.log(name[6]); // "r"

// // get last character
// console.log(name[name.length-1]); // "t"

// 3. The Golden Rule: Strings are Immutable
// This is the most critical concept.
// You cannot change a string in place.
// Any method that appears to modify a string will always return a brand new string, leaving the original untouched.

// let name = "deep";
// name[0] = "D"; // This will FAIL silently. It does nothing.
// console.log(name);   // Outputs: "deep" (The original string is unchanged)

// // A)> Changing String Case

// // use .toUpperCase()

// console.log(name.toUpperCase()); // Output -> "DEEP";

// // use .toLowerCase()

// console.log(name.toLowercase()); // Output -> "deep";

// console.log(name); //Output -> "deep"; String not Change

// B). Finding Substring

// let sentence = "The quick brown fox jumps over the lazy dog";

// console.log(sentence.indexOf("fox"));     // 16 (the first one)
// console.log(sentence.lastIndexOf("fox")); // 40 (the last one)
// console.log(sentence.indexOf("cat"));     // -1 (not found)

// console.log(sentence.includes("jumps"));  // true
// console.log(sentence.includes("cat"));    // false

// C. Extracting Substrings

// .slice(startIndex, endIndex): Extracts a section of a string and returns it as a new string.

// let text = "JavaScript";

// console.log(text.slice(0, 4));  // "Java" (from index 0 up to, but not including, 4)
// console.log(text.slice(4));     // "Script" (from index 4 to the end)
// console.log(text.slice(-6));    // "Script" (the last 6 characters)


// // - **`.substring(startIndex, endIndex)`:** Similar to `.slice()`, but it doesn't accept negative indices.
// // - **`.substr(startIndex, length)`:** **(Deprecated - Avoid)**. It works with a start index and a length, which is different from the others. Use `.slice()` instead.
// console.log(text.substring(0 , 4));
// console.log(text.substr(0 , text.length));


// D. Replacing Substrings

// - **`.replace(searchValue, newValue)`:** Finds a `searchValue` and replaces it with `newValue`.
    // - **Gotcha:** By default, it only replaces the **first occurrence**.
// - **`.replaceAll(searchValue, newValue)` (ES2021):** Replaces **all occurrences**. This is the modern, easy way to do a global replace.

// let greeting = "hello world, hello there";

// // Replaces only the first "hello"
// let newGreeting = greeting.replace("hello", "hi");
// console.log(newGreeting); // "hi world, hello there"

// // Replaces all "hello"s
// let allNewGreeting = greeting.replaceAll("hello", "hi");
// console.log(allNewGreeting); // "hi world, hi there"


// E. Cleaning Up Whitespace

// - **`.trim()`:** Removes whitespace from both the beginning and end of a string.
// - **`.trimStart()` / `.trimEnd()`:** Removes whitespace from only the start or end.

// let userInput = "   my-username@example.com   ";
// let cleanedInput = userInput.trim(); // "my-username@example.com"
// console.log(cleanedInput);

// add int in String;

// let name = "Alice";
// let age = 30;
// let message = `Hello, my name is ${name} and I am ${age} years old.`;
// // You can even put expressions inside:
// let futureMessage = `Next year, I will be ${age + 1}.`;
// console.log(futureMessage);



//  More about Date and String 

// to go through the link

// Link ->> https://www.notion.so/Lecture-06-String-and-Date-27e3a78e0e22803ca796f1eef30bc86b?source=copy_link

// Just copy and read