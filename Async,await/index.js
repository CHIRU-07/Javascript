// ticketbook()
// async function ticketbook(){
//     let getticket=await fetch("https://fakestoreapi.com/products")
//     let dataticket= getticket.json
//     let a="qwerty"
//     console.log(a)
//     console.log(dataticket)
//     // console.log(getticket)

    
// }


// async 
// let getdata = async () => {
//      let data ="helloworld"
//      return data
// }
// getdata().then(data=>console.log(data)).catch(err => console.log(err))


//await keyword
// let getdata=async ()=>{
//     let data =await "this is data";
//     console.log(data)
//     console.log(5)
// }
// console.log(1)
// getdata()
// console.log(2)


//Error handling by using  async/await
async function errorhandle(){
    try{
        let data=await fetch("https://fakestoreapi.com/products")
        let fetcheddata=await data.json()
        console.log(fetcheddata)
    }
    catch{
        console.error("error Fetching data",error)
    }
}
errorhandle()