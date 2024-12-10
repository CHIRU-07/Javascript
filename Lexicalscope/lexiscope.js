// function scope(){
//     var x=100;
//     console.log(x)
// }
// scope()

// function scope(){
//     var x=100;
//     console.log(x)
// }
// console.log(x) // Throws an error ,due to no variable is not defined
// scope()

// var x=200;
// function a(){
//     var x=100;
//     console.log(x)//Prints 100 due to local scope
// }
// console.log(x) //Prints 200 beacause 200 value is in global variable ,it cant access the variables assigned in the functions
// a()


// function a(){
//     console.log(100+z)//Gets z from global scope as there is no variable declared in that function ,so it adds so we get 200
// }
// var z=100;
// console.log(z)
// a()


// var z=500;
// function a(){
//     function x(){
//         function Hello(){
//              console.log(100+z) // prints 200 because after reassigning the function is called so the value will change to 100 which results to 200
//         }
//         Hello()
//     }
//     x()
// }
// var z=100;
// console.log(z)// prints 100 as value is reassingned
// a()


// function b(){
//     console.log("b function")
// }
// var z=500;
// function a(){
//     b()
// }
// a()
// console.log(z)