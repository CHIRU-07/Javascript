let buynowcnt=document.getElementById("buynowcontainer")

let buynowdata=JSON.parse(localStorage.getItem("cartitem"))
buynowdata.forEach((x,index)=>{
    let card=document.createElement("div")
    card.style.border="2px black solid"
    card.style.width="400px"
    card.style.height="500px"
    

    card.innerHTML=`<img src=${x.image} width='250' height='300'>
       <p>${x.title}</p>
       <p>${x.price}</p>
       <button id="remove">Remove</button>
       <button id="Buynow">Buy now</button>`
  buynowcnt.appendChild(card)

  card.addEventListener("click",()=>{
    localStorage.setItem("Card",JSON.stringify(x))
    location.href="./description.html"
  })

  card.querySelector("#remove").addEventListener("click",(e)=>{
    e.stopPropagation()
    buynowcnt.removeChild(card)
    buynowdata.splice(index,1)
    localStorage.setItem("cartitem",JSON.stringify(buynowdata))
  
})
  

  


})