//  FUNCTION in JavaScript//

console.log("Code will Run")

// create a function :
// function function_name(){
//     console.log("Deep is back");
//     return 10;
// }
// //  call a fun
// function_name(); // Deep is back
// console.log(function_name()) // Deep is back and 10


// //  sum
// function sum(a, b,c=0,d=0){
//   const  sum = a+b+c+d;
//     console.log(sum);
// }
// sum(5,7);// 12

// //  add three or four  num
// sum(4,6,4);
// sum(4,6,4,8);
// sum(4,6,4,8,7);
// sum(4,6,4,8,7,9);

//  Use in rest operator ->> create a Array
//  function sum(...num){
//     let sum = 0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }
// sum(4,6,4);
// sum(4,6,4,8);
// sum(4,6,4,8,7);
// sum(4,6,4,8,7,9);

//  Difference between Rest and spread Operator (IMP QUS)

//  function : expression


// const addNumber = function(num1,num2){
//     return num1+num2;                   // Right ways
// }
// console.log(addNumber(3,4));

// console.log(addNumber(3,4));                 // Throw a error
// const addNumber = function(num1,num2){
//     return num1+num2;
// }


// console.log(addNumber(3,4));                 // give output
// function addNumber(num1,num2){
//     return num1+num2;
// }

// Arrow Function (IMP)

// const addNumber = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addNumber(3,5));

// if single return
// const addNumber = (num1,num2)=>num1+num2;
// console.log(addNumber(4,5));


// if we have single parameter , no need of  this ()
//IMP
//  const square = num => num*num;
//  console.log(square(8));


// const greeting = ()=>{
//     return{
//         name:"Deep",
//         age:18
//     }
// }


// console.log(greeting())
// const greeting = ()=> ({name:"Deep",age:18})
// console.log(greeting())

// IIFE

// (function greeting(){
//     console.log("Hello World");
// })();

// (()=>{
//     console.log("Run")
// })();


// CallBack Function

// function greet(){
//     console.log("Hello Deep ")
// }

// function dance(){
//     console.log("I am dancing")
// }
// function meet(callback){
//     console.log("I am meeting someone")
//     callback();
//     // greet();
//     // dance(); // Hardcode(Reusable)
//     //  code hota jisko marta
//     console.log("I have finished meeting")
// }

// // greet();
// // meet();
// // meet(greet());
// meet(greet);
// meet(dance);



//  Real world Problem

// This is your callback function. It's the "phone number" you'll leave behind.
// It describes what to do once the pizza is ready.
// function pickUpPizza() {
//   console.log("Pizza is ready! Driving to the store to pick it up.");
// }


// function orderPizza(callback) {
  
  
//   console.log("Placing the pizza order...");

//     console.log("Pizza is cooked!");
  
//     callback();

  
// }

// // --- Let's run the program ---
// // We call orderPizza and give it our pickUpPizza function as the callback argument.
// orderPizza(pickUpPizza);

// // This line will run immediately, while the pizza is still "cooking".
// console.log("I'm not waiting at the store. I'm at home, coding.");



// More info about Function to go throw the link

// link -> https://www.notion.so/Lecture-09-Function-in-javascript-2843a78e0e2280aeb47fd280307b1a38?source=copy_link

