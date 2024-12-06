// Strings methods practice

// var str="Hihellogoodmorning"
// console.log(str.length);
// console.log(str.charAt(10))
// console.log(str.charCodeAt(10))
// var str1=str.toUpperCase()
// console.log(str1)
// var str2=str.toLowerCase()
// console.log(str2)
// var str3=str.concat(str1)
// console.log(str3)
// var str4="      helloo     hee  "
// console.log(str4.trim())
// console.log(str4.trimStart())
// console.log(str4.trimEnd())
// console.log(str.slice(7,11))
// console.log(str4.length)
// console.log(str4[19])
// console.log(str4.split(""))
// console.log(str.at(4))

// objects methods practice
// object literal
// var person={
//     name:"chirudeep",
//     age:21,
//     batch:"26R"
// }
// console.log(person)

// object property shorthand 
// var name="chiru";
// var batch="26r"
// var age=22;
// // creating object using property short hand.
// var obj={
//     name,batch,age
// }
// console.log(obj)

// by using constructor
// var car=new Object()
// car.brand="ferrari"
// car.model="evo"
// car.cc="2345cc"
// console.log(car)

// object methods
// var person={
//         name:"chirudeep",
//         age:21,
//         batch:"26R"
//     }
// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(Object.entries(person))
// person.name="Chiru"
// console.log(person) 
// Object.seal(person)
// Object.freeze(person)
// person.ismarried=false
// delete person.age
// person.age=22
// console.log(person)
// // console.log(Object.isSealed(person))
// console.log(Object.isFrozen(person))


// Create Target Object
// const person1 = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue"
//   };
  
  // Create Source Object
//   const person2 = {firstName: "Anne",lastName: "Smith"};
  
//   // Assign Source to Target
// //   Object.assign(target,source
//   Object.assign(person1, person2);
//   console.log(person1)
//   console.log(person2)

  const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
  
  // Get all Properties
  console.log(Object.getOwnPropertyNames(person));
  console.log(Object.keys(person))

  