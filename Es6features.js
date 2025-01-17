//Destructuring 

// const arr=[1,2,3,4,5]
// const [x,y,z,a,b]=arr
// console.log(x,y,a)

// const obj={
//     id:1,
//     name:"vamsi",
//     place:"Hyd"
// }
// const objkeys=Object.keys(obj)
// console.log(objkeys)
// const {id,name,place}=obj
// console.log(id,name,place) // In object we pass keys rather than variables


// const arr=[{
//         id:1,
//         name:"vamsi",
//         place:"Hyd"
//     },{
//         id:2,
//         name:"Chiru",
//         place:"Hyd"
//     },{
//         id:3,
//         name:"Lokesh",
//         place:"Kurnool"
//     }]

// const [a,b,c]=arr
// console.log(a.id,b.name,c.place)  //1 Chiru Kurnool


// spread operators= Spreading the values of array into another array or spreading the keys of an object into another object

// const [a,b,...f]=[10,20,30,40,50,50,{id:1,name:"chiru"}] //Using both destructuring and rest operator at once
// console.log(a,b,f)

//Spreading array of elements
// const f=[12,11,10,19]
// const a=[...f,1,2,3,4]
// console.log(a)

//spreading of array into an object
// const sizes=["sm","m","l","xl"]
// const obj={
//     id:1,name:"chiru",age:22,...sizes
// }
// console.log(obj)


//rest operators = used for gathering elements

// function arr(a,...b){
//     console.log(a,b)
// }
// arr(10,20,294,12,12,)

[a,b,...rest]=[10,20,30,40,50,6,90]
console.log(a,b)
console.log(rest)