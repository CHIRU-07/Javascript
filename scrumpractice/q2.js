async function datacalling(){
    let data=await fetch("https://dummyjson.com/products")
    let fetcheddata=await data.json().then(res=>res).catch(err=>console.log(err))
    console.log(fetcheddata)

    let parent=document.getElementById("parent")
  

    let singledata=fetcheddata.products[0]
    console.log(singledata)
    let card=document.createElement("div")
    card.style.border="2px solid black"
    card.style.display="flex"
    card.style.justifyContent="center"
    card.style.alignItems="center"
    card.style.flexDirection="column"
    card.style.width='450px'
card.innerHTML=`<img src=${singledata.images} width='300px' height='300px'>
<h2>${singledata.title}</h2>
<p>brand:${singledata.brand}</p>
<p>description:${singledata.description}</p>
<p>price:${singledata.price}$</p>`
document.body.append(card)
   }

datacalling()
