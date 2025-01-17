let addtocartdata=localStorage.getItem("addtocart")
if(addtocartdata){
 try{
    let realaddtocart=addtocartdata.JSON.parse()
    let card=document.createElement("div")
    cardElement.style.border = "1px solid black";
                cardElement.style.padding = "10px";
                cardElement.style.margin = "10px";
                cardElement.style.width = "300px";


    card.innerHTML=`
    <img src='${realaddtocart.image}'
    <h2>${realaddtocart.title || "Untitled Card"}</h2>
    <p>${realaddtocart.price}</p>`
    document.body.appendChild("card")
 }catch(error){
    console.error("Error passing card data",error)
 }
}
else{
    console.log("No data found in the local storage")
}