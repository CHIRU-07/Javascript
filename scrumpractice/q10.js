let parentdiv=document.getElementById("parent")
parentdiv.style.display="flex"
parentdiv.style.justifyContent="center"
parentdiv.style.alignItems="center"
parentdiv.style.flexWrap="wrap"
parentdiv.style.gap="20px"


async function datacalling(){
    let data= await fetch("https://dummyjson.com/recipes")
const fetcheddata=await data.json().then(res=>res).catch(err=>console.log(err))
console.log(fetcheddata)


 fetcheddata.recipes.forEach(x=>{
let card=document.createElement("div")
card.innerHTML=`
<img src=${x.image} width='300px' height='300px'>

<h2 class='name'>${x.name}</h2>
<p class='cuisine'>${x.cuisine}</p>
<p class='mealType'>${x.mealType[0]}</p>
`
card.style.width="300px"
card.style.height="500px"
card.style.border="2px black solid"
card.style.display="flex"
card.style.justifyContent="center"
card.style.alignItems="center"
card.style.flexDirection="column"
parentdiv.appendChild(card)
})
}
datacalling()