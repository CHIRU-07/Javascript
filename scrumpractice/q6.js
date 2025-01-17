// Write a program to get the products based on specific category ( ex. Mobiles,
//     watches like that )
let parentdiv=document.getElementById("parent")
parentdiv.style.display="flex"
parentdiv.style.justifyContent="center"
parentdiv.style.alignItems="center"
parentdiv.style.flexWrap="wrap"
parentdiv.style.gap="20px"

let grocery=document.getElementById("groceries")
let furniture=document.getElementById("furniture")
let beauty=document.getElementById("beauty")
let smell=document.getElementById("smell")

beauty.addEventListener("click",()=>datacalling("beauty"))
grocery.addEventListener("click",()=>datacalling("groceries"))
furniture.addEventListener("click",()=>datacalling("furniture"))
smell.addEventListener("click",()=>datacalling("fragrances"))



async function datacalling(cat){
    let data= await fetch("https://dummyjson.com/products")
const fetcheddata=await data.json().then(res=>res).catch(err=>console.log(err))
console.log(fetcheddata)

 parentdiv.innerHTML=""

  const filtereddata = cat ? fetcheddata.products.filter(x=>x.category=== cat) : fetcheddata.products
  filtereddata.forEach(x=>{
    let card=document.createElement("div")
    card.innerHTML=`
    <img src=${x.images} width='300px' height='300px'>
    <h1 class='title'>${x.title}</h1>
    <h2 class='brand'>${x.brand}</h2>
    <p class='cat'>${x.category}</p>
    <p class='price'>${x.price}$</p>
    `
    card.style.width="300px"
    card.style.height="600px"
    card.style.border="2px black solid"
    card.style.display="flex"
    card.style.justifyContent="center"
    card.style.alignItems="center"
    card.style.flexDirection="column"
    parentdiv.appendChild(card)
  })

}
datacalling() 