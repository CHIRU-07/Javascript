// let step1 = new Promise((resolve,reject)=>{
//      if(1){
//         resolve("Successfuly completed 1")
//      }
//      else{
//         reject("Failed at step 1")
//      }
// })
// let step2 = new Promise((resolve,reject)=>{
//     if(1){
//        resolve("Successfuly completed 2")
//     }
//     else{
//        reject("Failed at step 2")
//     }
// })
// step1.then(out=>{
//     console.log(out)
//     return step2
// }).then(out=>{
//     console.log(out)
// })
// .catch(err=>{
//     console.log(err)
// })


//By using try ND Catch we can do better error handling

let step1 = new Promise((resolve,reject)=>{
    try{
        if(1){
            resolve("Successfuly completed 1")
         }
         else{
            reject("Failed at step 1")
         }
    }
    catch{
        console.log(err)
    }
})
let step2 = new Promise((resolve,reject)=>{
    try{
        if(0){
            resolve("Successfuly completed 2")
         }
         else{
            reject("Failed at step 1")
         }
    }
    catch{
        console.log(err)
    }
})
step1.then(out=>{
   console.log(out)
   return step2
}).then(out=>{
   console.log(out)
})
.catch(err=>{
   console.log(err)
})