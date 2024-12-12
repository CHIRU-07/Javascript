// function Obj(){
//     var obj={
//         Hero_name:"Mahesh Babu",
//         Movie_name:"Guntur karam",
//         Director_name:"Guruji",
//         Plotof_movie:"mass"
//     }
//     console.log(obj)
// }
// Obj()

//Arrow function
// var a=()=>{
//     console.log("This is arrow function")
// }
// a()

//Anonymous function
// var x=function(){
//      console.log("This is anonymous function")
// }
// x()

//Assigning a named function to a variable is called named-function-expression
// var x=function abc(){
//     console.log("This is named function expression")
// }
// x()

// //Parameters are identifiers which take arguments x=1,y=2;
// function a(x,y){ //x,y are called parameters
//     console.log(x+y)
// }
// a(1,2)//At the time of invoking , if i pass some values those are called Arguments

// function abc(x,y,z,w,k){
//       console.log(x+y+w+z);
//       console.log(k)
// }
// var rrr=[1,2,3,4]
// abc(1,2,3,4,rrr)

//A function which is passed as an argument to another function at invoking and that function is called as  "Callback function"
// function parent(x){
//     x()
// }
// parent(function b(){
//     console.log("b-function")
// })

// setTimeout( // Function used to set delay
//     function a(){
//         console.log("a function")
//     }
// ),2000