//var hoisting
// console.log(a)//prints undefined
// var a=100;

//let hoisting
// console.log(b)//Throws reference error
// let b=30;

// //const hoisting
// console.log(c)//Throws reference error
// const c=188;

//function hoisting 
// a()//gives its value doesnot give any error
// function a(){
//     console.log("it is function")
// }

//anonymous function hoisting
// a()//Gives type error as "a" is not a function
// console.log(a)//as a is a variable initially it as undefined as a value so prints undefined
// var a=function(){
//     console.log("THis is anonymous function")
// }


