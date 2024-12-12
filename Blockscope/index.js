// let a=100;
// a=200; //only re-assigning can be done for this keyword
// // let a=300;  re-initialization is not possible if the variable has let keyword
// // var a; re-declaration is not possible if the variable has let keyword
// console.log(a)

// const b=200;//When using const the variable should be directly initialized then only it wont show any error.
// // b=300;//re-assigning doesnot work shows an error
// // var b; re-declaration also not possible
// console.log(b)


// //Block scope
// var a=100;
// {
// let b=2200;//b and c are stored in block after execution this block storage will be deleted
// const c=1000;

// }
// console.log(c)//Gives error because c is not defined and execution is stopped as js is synchronous language
// console.log(a)
// console.log(b)


let b=200;//as these are written in top level of file these values with let,const keywords will be stored in script in call stack
const c=400;
if (true){
    var a=100;//If the variable has var keyword then it will store its value in global ,so anywhere in the code we can access it.
    let b=400;;//b and c are stored in block after execution this block storage will be deleted
    const c=200;
    console.log(b)//400
    console.log(c)//200
}
console.log(a)//100
console.log(b)//200
console.log(c)//400
