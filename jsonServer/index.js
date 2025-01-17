let url="http://localhost:3000/users"

//geting data
// async function getdata(){
//     let fetcheddata= await fetch(url)
//     let response=await fetcheddata.json()
//     console.log(response)
// }
// getdata()


//to post data --> to add data
// async function postdata() {
   
//     options={
//         method:"POST",
//         headers:{
//         "Content-Type":"application/json"},
//         body:JSON.stringify({
//             name:"veditha",
//             age:18
//         })
//     }

//     let fetcheddata= await fetch(url,options)
//     let response=await fetcheddata.json()
//     console.log(response)
// }
// postdata()



//TO delete data
// async function deldata(id) {
   
//     options={
//         method:"DELETE"
//     }

//     let fetcheddata= await fetch(`${url}/${id}`,options)
//     let response=await fetcheddata.json()
//     console.log(response)
// }
// deldata("b20c")


//to update data---patch
async function patchdata(id) {
   
    options={
        method:"PATCH",
        headers:{
        "Content-Type":"application/json"},
        body:JSON.stringify({
            name:"Raju",
            age:55
        })
    }

    let fetcheddata= await fetch(`${url}/${id}`,options)
    let response=await fetcheddata.json()
    console.log(response)
}
patchdata("2")