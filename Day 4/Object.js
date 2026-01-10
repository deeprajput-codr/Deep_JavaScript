// Object in JAVASCRIPT//
// Object is Mutable
// Copy by Reference

console.log("Code will Run");

// // Key Value
// const user = {
//     name : "Deep",
//     age : 18,
//     email : "deepc10K@gmail.com",
//     amount : 6500,
//     // home add : "ETAH", // Throw a Error
//     "home add": "ETAH"
// }

// console.log(user);  // print -> { name: 'Deep', age: 18, email: 'deepc10K@gmail.com', amount: 6500 }
// console.log( typeof user); // OBJECT


// //  print one particular item
// // 1)
// console.log(user.name); // Deep
// console.log(user.amount); // 6500

// // 2)// array ki Tarah
// console.log(user["name"]); // Deep
// console.log(user["age"]);  // 18
// console.log(user["home add"]);  // ETAH



// // The Basics - Create, Read, Update, Delete (CRUD)
// // add
// user.login = "True";
// user.amount =4500;
// console.log(user);

// // delete
// delete user.email; // Delete Email
// console.log(user);// ->> { name: 'Deep', age: 18, amount: 4500, login: 'True' }

// const user = {
//     name : "Deep",
//     age : 18,
//     email : "deepc10K@gmail.com",
//     amount : 6500,
//     "home add": "ETAH"
// }
// Copy by Reference
// const user2 = user;
// user2.age = 25;
// console.log(user); // Age = 25

// Print only Keys
// console.log(Object.keys(user)); // [ 'name', 'age', 'email', 'amount', 'home add' ]
// console.log(Object.values(user)); // [ 'Deep', 18, 'deepc10K@gmail.com', 6500, 'ETAH' ]
// console.log(Object.entries(user)); // Print keys and values.


// Loop in object

// for(let keys in user){
//     console.log(keys) // Print only keys
// }
// for(let keys in user){
//     console.log(keys , user[keys]) // Print keys and value
// }

// const user = {
//     name : "Deep",
//     age : 18,
//     email : "deepc10K@gmail.com",
//     amount : 6500,
//     "home add": "ETAH"
// }

// const name = user.name ;
// const age = user.age;
// console.log(name,age);  // ->> Deep 18

// // object ko destructing karna

// // const {name,age}= user;
// const arr = [10, 20, 60, 54];
// const [first,second] = arr;


// // console.log(name,age);  // ->> Deep 18
// console.log(first,second); // 10 20

// To Give a Nickname

// const {name :username,age:userAge}= user;
// console.log(username, userAge); // ->>Deep 18

// USing for of loops ->> for of loop array ke

// for(let keys of Object.keys(user)){
//     console.log(keys); // Print only keys
// }

// for(let values of Object.values(user)){
//     console.log(values); // Print only values
// }

// for(let both of Object.entries(user)){
//     console.log(both); // Print  keys and values and return array
// }
// // object ko destructing karna

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values); // Print  keys and values and return array
// }


//  add function or method in object


// const user = {
//     name : "Deep",
//     age : 18,
//     email : "deepc10K@gmail.com",
//     amount : 6500,
//     "home add": "ETAH",
//     func : function(){
//         // console.log(`${user.name} is Back`);// do not use
//         console.log(`${this.name} is Back`);
//         return 20;
//     }
// }

//  const value = user.func(); // Deep is Back
//  console.log(value); // Deep is Back , 20

 //  add fOBJECT in
 
 const user = {
    name : "Deep",
    age : 18,
    email : "deepc10K@gmail.com",
    amount : 6500,
    "home add": "ETAH",
   address : {
    city : "Etah",
    state : "Uttar Pradesh"
   }
}
// console.log(user);
// console.log(user.address);
// console.log(user.address.city);

//  Shallow copy

// const user2 = {...user};
// user2.name = "Vikas";// No change in user
// user2.address.city = "Mathura"; // change in user
// console.log(user)
// console.log(user2)

//Deep Copy

// const user2 = structuredClone(user);
// user2.address.city = "Mathura"; // No change in user
// console.log(user)


// More about Objects to go throw the link

// link ->>> https://www.notion.so/Lecture-08-Objects-in-Javascript-2833a78e0e2280109358ee39b2b35e4f?source=copy_link