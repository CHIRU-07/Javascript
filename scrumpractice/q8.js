let parentdiv=document.getElementById("parent")
parentdiv.style.display="flex"
parentdiv.style.justifyContent="center"
parentdiv.style.alignItems="center"
parentdiv.style.flexWrap="wrap"
parentdiv.style.gap="20px"

async function datacalling(){
    let data= await fetch("https://dummyjson.com/quotes")
    let fetcheddata=await data.json().then(res=>res).catch(err=>console.log(err))
    console.log(fetcheddata)

    let parent=document.getElementById("parent")
  

    let singledata=fetcheddata.quotes[0]
    let card=document.createElement("div")
    card.innerHTML=`

<h1 style="width:80%" id='quote'>${singledata.quote}</h1>
<h3 id='author'>-${singledata.author}$</h3>
`
card.style.width="600px"
card.style.height="300px"
card.style.border="2px black solid"
card.style.display="flex"
card.style.justifyContent="center"
card.style.alignItems="center"
card.style.flexDirection="column"
parentdiv.appendChild(card)
   }

datacalling()

